import { useRef } from "react";
import { PointLight } from "three";
import * as THREE from "three";

const NeonLight = () => {
  const pointLightRef = useRef<PointLight>(null!);

  const neonMaterial = new THREE.MeshBasicMaterial({
    color: new THREE.Color("#822fff"),
    transparent: true,
    opacity: 0.8,
  });

  const emissiveMaterial = new THREE.MeshBasicMaterial({
    color: new THREE.Color("#822fff"),
    transparent: true,
    opacity: 0.4,
  });

  return (
    <>
      <pointLight
        ref={pointLightRef}
        distance={3}
        decay={-1.2}
        intensity={5}
        color={"#782fff"}
        position={[-1.1, 3.5, -3.3]}
        castShadow
        receiveShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={0.1}
        shadow-camera-far={500}
        shadow-bias={-0.001}
      />
      <mesh position={[-1.5, 3.5, -3.5]}>
        <primitive object={neonMaterial} />
      </mesh>
      <mesh position={[-1.5, 3.5, -3.5]}>
        <primitive object={emissiveMaterial} />
      </mesh>
    </>
  );
};

export default NeonLight;
