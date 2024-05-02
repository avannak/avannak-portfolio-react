import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";
import * as THREE from "three";

export function createTextTexture(
  text: string,
  width: number,
  height: number
): THREE.Texture {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d");
  if (context) {
    // Background gradient
    const gradient = context.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, "#132340ab");
    gradient.addColorStop(0.5, "#11835ba4");
    gradient.addColorStop(1, "#1718328e");
    context.fillStyle = gradient;
    context.fillRect(0, 0, width, height);

    // Text settings
    context.font = "normal 2.8em sans-serif";
    context.textAlign = "center";
    context.textBaseline = "middle";

    // Split the text into two lines
    const lines = text.split(",");
    const lineHeight = 36; // Assuming 36px font size

    // Bordered outline
    context.strokeStyle = "#000000";
    context.lineWidth = 5;
    context.strokeText(lines[0], width / 2, height / 2 - lineHeight / 2);
    context.strokeText(lines[1], width / 2, height / 2 + lineHeight / 2);

    // 3D effect
    context.fillStyle = "#c9cccb";
    context.fillText(lines[0], width / 2, height / 2 - lineHeight / 2);
    context.fillText(lines[1], width / 2, height / 2 + lineHeight / 2);
  }

  const texture = new THREE.Texture(canvas);
  texture.needsUpdate = true;
  return texture;
}

const ParticleSystem = ({ position, hover }: any) => {
  const particleRef = useRef<THREE.Points>(null);
  const { viewport, camera } = useThree();

  const particleCount = 100;
  const particleGeometry = useMemo(
    () => new THREE.BufferGeometry(),
    [particleCount]
  );
  const particlePositions = useMemo(
    () => new Float32Array(particleCount * 3),
    [particleCount]
  );
  const particleVelocities = useMemo(
    () => new Float32Array(particleCount * 3),
    [particleCount]
  );

  useEffect(() => {
    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = 0;
      particlePositions[i * 3 + 1] = 0;
      particlePositions[i * 3 + 2] = 0;
      particleVelocities[i * 3] = (Math.random() - 0.5) * 0.1;
      particleVelocities[i * 3 + 1] = (Math.random() - 0.5) * 0.1;
      particleVelocities[i * 3 + 2] = (Math.random() - 0.5) * 0.1;
    }

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );
    particleGeometry.setAttribute(
      "velocity",
      new THREE.BufferAttribute(particleVelocities, 3)
    );
  }, [particleGeometry, particlePositions, particleVelocities, particleCount]);

  useFrame((state) => {
    if (!particleRef.current) return;

    const particles = particleRef.current.geometry.attributes.position.array;
    const velocities = particleRef.current.geometry.attributes.velocity.array;

    for (let i = 0; i < particleCount; i++) {
      particles[i * 3] += velocities[i * 3];
      particles[i * 3 + 1] += velocities[i * 3 + 1];
      particles[i * 3 + 2] += velocities[i * 3 + 2];

      if (
        Math.abs(particles[i * 3] - position.x) < 0.1 &&
        Math.abs(particles[i * 3 + 1] - position.y) < 0.1
      ) {
        particles[i * 3] = position.x;
        particles[i * 3 + 1] = position.y;
        particles[i * 3 + 2] = position.z;
        velocities[i * 3] = (Math.random() - 0.5) * 0.1;
        velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.1;
        velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.1;
      }
    }

    particleRef.current.geometry.attributes.position.needsUpdate = true;
    particleRef.current.geometry.attributes.velocity.needsUpdate = true;
  });

  return (
    <points ref={particleRef}>
      <bufferGeometry />
      <pointsMaterial
        color={hover ? 0xffffff : 0x888888}
        size={0.05}
        transparent
        depthTest={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const JellyDescription = ({
  texture,
  scale = [1, 1, 1] as [number, number, number],
}: any) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hover, setHover] = useState(false);
  const { viewport, pointer } = useThree();
  const simplex = createNoise3D();
  const noiseScale = 2;
  const noiseSpeed = 0.2;
  const maxDeformation = 0.3;
  const influenceRadius = 1;
  const springStrength = 0.1;
  const borderThickness = 0.001;
  const borderAmplitude = 0.02;

  useFrame((state) => {
    const mesh = meshRef.current;
    if (!mesh) return;

    const time = state.clock.getElapsedTime();
    const position = mesh.geometry.attributes.position;

    for (let i = 0; i < position.count; i++) {
      const x = position.getX(i);
      const y = position.getY(i);
      const dx = x - (pointer.x * viewport.width) / 2;
      const dy = y - (pointer.y * viewport.height) / 2;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const influence = hover
        ? Math.max(0, (influenceRadius - distance) / influenceRadius)
        : 0;
      const noise = simplex(x * noiseScale, y * noiseScale, time * noiseSpeed);
      const targetOffset = influence * noise * maxDeformation;
      const currentOffset = position.getZ(i);
      const newOffset = THREE.MathUtils.lerp(
        currentOffset,
        targetOffset,
        springStrength
      );

      // Check if the vertex is on the outer border
      const isBorder =
        Math.abs(x) > 2.5 - borderThickness ||
        Math.abs(y) > 1 - borderThickness;

      if (isBorder) {
        // Apply the jelly-like fluid animation to the outer border
        const borderNoise = simplex(x, y, time);
        const borderOffset = borderNoise * borderAmplitude;
        position.setZ(i, newOffset + borderOffset);
      } else {
        position.setZ(i, newOffset);
      }
    }
    position.needsUpdate = true;
  });

  return (
    <mesh
      ref={meshRef}
      scale={scale}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <planeGeometry args={[5, 2, 100, 100]} />
      <meshStandardMaterial
        map={texture}
        transparent
        opacity={1}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

export default JellyDescription;
