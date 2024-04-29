import { Canvas, useThree, extend, useFrame } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { useGLTF, OrbitControls, Html } from "@react-three/drei";
import {
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  PerspectiveCamera,
  SpotLight,
  PointLightHelper,
  ArrowHelper,
  Vector3,
  PointLight,
  ShaderMaterial,
} from "three";
import { lerp } from "three/src/math/MathUtils";
import * as THREE from "three";
import AboutPage from "@/app/about/page";
import MyWorkPage from "@/app/projects/page";
import ContactPage from "@/app/contact/page";
import NavMenu from "./NavMenu";
import { useIsMobile } from "@/utils/isMobileDevice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

extend({ SpotLight });

const CameraPosition = () => {
  const { camera } = useThree();
  const [position, setPosition] = useState(camera.position.clone());

  useFrame(() => {
    if (!camera.position.equals(position)) {
      setPosition(camera.position?.clone());
    }
  });

  return (
    <Html
      position={[0, 0, 0]}
      zIndexRange={[100, 0]}
      className="camera-position"
    >
      <div
        style={{
          color: "white",
          position: "absolute",
          top: "10px",
          left: "10px",
        }}
      >
        Camera Position: x: {position.x.toFixed(2)}, y: {position.y.toFixed(2)},
        z: {position.z.toFixed(2)}
      </div>
    </Html>
  );
};

const CameraController = ({
  target,
  initialPosition,
  zoomPosition,
  zoomInMonitor,
}: any) => {
  const { camera, gl } = useThree();
  const [fov, setFov] = useState(60);
  const isMobile = useIsMobile();

  useFrame(() => {
    if (zoomInMonitor) {
      camera.position.lerp(zoomPosition, 0.02);
      setFov((prevFov) => lerp(prevFov, 30, 0.02)); // Lerp towards the zoomed in FOV
    } else {
      camera.position.lerp(initialPosition, 0.02);
      setFov((prevFov) => lerp(prevFov, isMobile ? 110 : 70, 0.02)); // Lerp towards the normal FOV
    }
    if (target) {
      // Apply manual rotation
      // camera.rotation.x = 0;
      // camera.rotation.y = 0;
      // camera.rotation.z = 0;
      camera.lookAt(target);
    }
    (camera as PerspectiveCamera).fov = fov;
    (camera as PerspectiveCamera).updateProjectionMatrix();
  });

  useEffect(() => {
    gl.renderLists.dispose();
  }, [gl]);

  return null;
};

const Model = ({
  cameraType,
  setCameraType,
  zoomInMonitor,
  setZoomInMonitor,
  setLightOn,
  lightOn,
  setFreeCameraPosition,
  setFreeCameraAngle,
}: any) => {
  const { scene } = useGLTF("scenes/WorkRoom2-v1.glb");
  const monitorRef = useRef<Mesh>(null!);
  const lightSwitchRef = useRef<Mesh>(null!);
  const [hoveredMonitor, setHoveredMonitor] = useState(false);
  const [hoveredLightSwitch, setHoveredLightSwitch] = useState(false);
  const [clickedMonitor, setClickedMonitor] = useState(false);
  const [clickedLightSwitch, setClickedLightSwitch] = useState(false);
  const [activeRoute, setActiveRoute] = useState("home");
  const isMobile = useIsMobile();

  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof Mesh) {
        console.log(child.name);
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });

    const monitor = scene.getObjectByName("Monitor1_2") as Mesh;
    if (monitor) {
      monitorRef.current = monitor;
      monitor.userData.clickable = true;
    }

    const lightSwitch = scene.getObjectByName("model") as Mesh;
    if (lightSwitch) {
      lightSwitchRef.current = lightSwitch;
      lightSwitch.userData.clickable = true;
    }
  }, [scene]);

  useFrame(() => {
    if (monitorRef.current) {
      const material = monitorRef.current.material as MeshStandardMaterial;
      material.color.set(zoomInMonitor ? "white" : "black");
    }

    if (lightSwitchRef.current) {
      const material = lightSwitchRef.current.material as MeshStandardMaterial;
      material.color.set(
        clickedLightSwitch ? "red" : hoveredLightSwitch ? "hotpink" : "white"
      );
    }
  });

  const handlePointerMove = (event: any) => {
    event.stopPropagation();
    const intersects = event.intersections.filter(
      (intersect: any) => intersect.object.userData.clickable
    );

    if (intersects.length > 0) {
      const object = intersects[0].object;
      if (object === monitorRef.current) {
        setHoveredMonitor(true);
      } else if (object === lightSwitchRef.current) {
        setHoveredLightSwitch(true);
      }
      document.body.style.cursor = "pointer";
    } else {
      setHoveredMonitor(false);
      setHoveredLightSwitch(false);
      document.body.style.cursor = "default";
    }
  };

  const handlePointerOut = (event: any) => {
    event.stopPropagation();
    setHoveredMonitor(false);
    setHoveredLightSwitch(false);
    document.body.style.cursor = "default";
  };

  const handleObjectClick = (event: any) => {
    event.stopPropagation();
    const intersects = event.intersections.filter(
      (intersect: any) => intersect.object.userData.clickable
    );

    if (intersects.length > 0) {
      const object = intersects[0].object;
      if (object === monitorRef.current) {
        setClickedMonitor(!clickedMonitor);
        setZoomInMonitor(!zoomInMonitor);
      } else if (object === lightSwitchRef.current) {
        setClickedLightSwitch(!clickedLightSwitch);
        setLightOn(!lightOn); // Toggle the light state
      }
    }
  };

  const handleLightSwitchClick = (event: any) => {
    event.stopPropagation();
    const intersects = event.intersections.filter(
      (intersect: any) => intersect.object.userData.clickable
    );

    if (intersects.length > 0) {
      const object = intersects[0].object;
      if (object === lightSwitchRef.current) {
        setClickedLightSwitch(!clickedLightSwitch);
        setLightOn(!lightOn); // Toggle the light state

        // Check if the camera type is "freeCamera"
        if (cameraType !== "freeCamera") {
          // Call the handleObjectClick function only if the camera type is not "freeCamera"
          handleObjectClick(event);
        }
      }
    }
  };

  const handleRouteClick = (route: string) => {
    setActiveRoute(route);
    if (route === "freeCamera") {
      setFreeCameraPosition(new Vector3(0, 5, 5));
      setFreeCameraAngle(new THREE.Euler(0, -4, 0));
    }
  };

  return (
    <primitive
      object={scene}
      onPointerMove={handlePointerMove}
      onPointerOut={handlePointerOut}
      onClick={(event: any) => {
        if (cameraType === "fixedCamera" && !zoomInMonitor) {
          handleObjectClick(event);
        }
        handleLightSwitchClick(event);
      }}
    >
      {!zoomInMonitor && (
        <Html position={[0, 2, -2.5]}>
          <nav>
            {cameraType === "fixedCamera" && (
              <button
                className="camera-nav-btn"
                onClick={() => {
                  setZoomInMonitor(false);
                  setCameraType("freeCamera");
                }}
              >
                Free Camera
                <FontAwesomeIcon className="icon" icon={faEye} />
              </button>
            )}
            {cameraType === "freeCamera" && (
              <button
                className="camera-nav-btn"
                onClick={() => {
                  setZoomInMonitor(false);
                  setCameraType("fixedCamera");
                }}
              >
                Back To Scene
              </button>
            )}
          </nav>
        </Html>
      )}
      <Html
        position={
          isMobile && zoomInMonitor
            ? [0, 2.02, 2.4]
            : zoomInMonitor
            ? [0, 2.3, -4]
            : cameraType === "freeCamera"
            ? [-0.35, 2.4, -3.56]
            : [-0.35, 2.4, -5]
        }
        rotation={[0, 0, 0]}
        transform
        distanceFactor={
          isMobile && zoomInMonitor ? 0.12 : cameraType === "freeCamera" ? 1 : 1
        }
        style={{
          width: zoomInMonitor ? "100vw" : "1200px",
          minWidth: zoomInMonitor
            ? "100%"
            : cameraType === "freeCamera"
            ? "1000px"
            : "1530px",
          height: "100vh",
          minHeight:
            cameraType !== "freeCamera" && zoomInMonitor
              ? "1000px"
              : isMobile && zoomInMonitor
              ? "500px"
              : "500px",
          maxHeight: zoomInMonitor
            ? "100vh"
            : cameraType === "freeCamera"
            ? "450px"
            : "450px",
          background: "black",
          transformStyle: "flat",
          overflowY: zoomInMonitor ? "auto" : "hidden",
        }}
      >
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            !zoomInMonitor && setZoomInMonitor(true);
            !zoomInMonitor && setCameraType("fixedCamera");
          }}
        >
          <div
            className="monitor-content"
            style={{
              cursor: zoomInMonitor ? "auto" : "pointer",
              pointerEvents: zoomInMonitor ? "auto" : "none",
              overflowY: "hidden",
              marginTop: zoomInMonitor ? "90px" : "0",
            }}
          >
            {zoomInMonitor && (
              <nav className="monitor-nav">
                <button
                  className="monitor-nav-btn"
                  onClick={() => handleRouteClick("home")}
                >
                  Home
                </button>
                <button
                  className="monitor-nav-btn"
                  onClick={() => handleRouteClick("about")}
                >
                  About
                </button>
                <button
                  className="monitor-nav-btn"
                  onClick={() => handleRouteClick("projects")}
                >
                  Projects
                </button>
                <button
                  className="monitor-nav-btn"
                  onClick={() => handleRouteClick("contact")}
                >
                  Contact
                </button>
                <button
                  className="monitor-nav-btn"
                  onClick={() => {
                    setZoomInMonitor(false);
                    setCameraType("fixedCamera");
                  }}
                >
                  Back To Scene
                </button>
              </nav>
            )}
            <div className="route-content">
              {activeRoute! === "home" && (
                <NavMenu setActiveRoute={setActiveRoute} />
              )}
              {activeRoute! === "about" && (
                <AboutPage setActiveRoute={setActiveRoute} />
              )}
              {activeRoute! === "projects" && (
                <MyWorkPage setActiveRoute={setActiveRoute} />
              )}
              {activeRoute! === "contact" && (
                <ContactPage setActiveRoute={setActiveRoute} />
              )}
            </div>
          </div>
        </div>
      </Html>
    </primitive>
  );
};

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
        intensity={3}
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
        {/* <cylinderGeometry args={[0.03, 0.03, 1, 32]} /> */}
        <primitive object={neonMaterial} />
      </mesh>
      <mesh position={[-1.5, 3.5, -3.5]}>
        {/* <cylinderGeometry args={[0.06, 0.06, 1, 32]} /> */}
        <primitive object={emissiveMaterial} />
      </mesh>
      {/* <SceneHelpers pointLightRef={pointLightRef} /> */}
    </>
  );
};

const Scene = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const initialCameraPosition = new Vector3(0, 3, 1.2);
  const zoomCameraPosition = new Vector3(0, 2, 3);
  const cameraTarget = new Vector3(0, 3.1, -40);
  const [zoomInMonitor, setZoomInMonitor] = useState(false);
  const [cameraType, setCameraType] = useState("fixedCamera");
  const [lightOn, setLightOn] = useState(true);
  const pointLightRef = useRef<PointLight>(null!);

  const [freeCameraPosition, setFreeCameraPosition] = useState(
    new Vector3(0, 5, 5)
  );
  const [freeCameraAngle, setFreeCameraAngle] = useState(
    new THREE.Euler(0, -4, 0)
  );

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const FreeCameraControls = ({
    cameraType,
    freeCameraPosition,
    freeCameraAngle,
  }: any) => {
    const { camera } = useThree();
    const orbitControlsRef = useRef<any>();

    useEffect(() => {
      if (cameraType === "freeCamera" && orbitControlsRef.current) {
        // Set the camera position and angle
        camera.position.copy(freeCameraPosition);
        camera.rotation.copy(freeCameraAngle);

        // Update the OrbitControls target
        orbitControlsRef.current.target.copy(new Vector3(-1, 0, 0));
      }
    }, [cameraType, camera, freeCameraPosition, freeCameraAngle]);

    return (
      <>
        {cameraType === "freeCamera" && (
          <OrbitControls
            ref={orbitControlsRef}
            enablePan={false}
            enableRotate={true}
            minDistance={3}
            maxDistance={10}
          />
        )}
      </>
    );
  };

  return (
    <div
      className="canvasContainer"
      style={{
        width: "100%",
        height: "100vh",
        position: "absolute",
        left: 0,
        top: 0,
      }}
    >
      <Canvas
        shadows
        style={{
          width: dimensions.width,
          height: dimensions.height,
        }}
      >
        {lightOn && !zoomInMonitor && (
          <spotLight
            color={"#ffffff"}
            position={[0, 8, 0]}
            angle={Math.PI / 4}
            penumbra={0.2}
            intensity={80}
            castShadow
            receiveShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={0.5}
            shadow-camera-far={500}
            shadow-bias={-0.0001}
          />
        )}
        <NeonLight />
        {!zoomInMonitor && (
          <>
            <ambientLight intensity={1} color={"#564ec7"} />
          </>
        )}
        <Suspense fallback={null}>
          <Model
            cameraType={cameraType}
            setCameraType={setCameraType}
            zoomInMonitor={zoomInMonitor}
            setZoomInMonitor={setZoomInMonitor}
            lightOn={lightOn}
            setLightOn={setLightOn}
            setFreeCameraPosition={setFreeCameraPosition}
            setFreeCameraAngle={setFreeCameraAngle}
          />
          {/* <Monitor onClick={handleMonitorClick} /> */}
          {cameraType !== "freeCamera" && (
            <CameraController
              target={cameraTarget}
              initialPosition={initialCameraPosition}
              zoomPosition={zoomCameraPosition}
              zoomInMonitor={zoomInMonitor}
            />
          )}
          {cameraType === "freeCamera" && (
            <FreeCameraControls
              cameraType={cameraType}
              freeCameraPosition={freeCameraPosition}
              freeCameraAngle={freeCameraAngle}
            />
          )}

          <SceneHelpers pointLightRef={pointLightRef} />
        </Suspense>
        {/* <CameraPosition /> */}
      </Canvas>
    </div>
  );
};

const SceneHelpers = ({ pointLightRef }: any) => {
  const { scene } = useThree();

  useEffect(() => {
    if (!pointLightRef.current) return;

    // Create the PointLightHelper
    const pointLightHelper = new PointLightHelper(pointLightRef.current);
    scene.add(pointLightHelper);

    // Create the ArrowHelper
    const updateHelpers = () => {
      const direction = new Vector3(0, -1, 0); // Pointing downwards
      const origin = pointLightRef.current.position.clone();
      const length = 1;
      const color = 0xff0000;
      const arrowHelper = new ArrowHelper(direction, origin, length, color);
      scene.add(arrowHelper);

      // Clean up the previous helpers
      return () => {
        scene.remove(pointLightHelper);
        scene.remove(arrowHelper);
      };
    };

    // Register and update helpers whenever the light position changes
    const unsubscribe = updateHelpers();
    return () => unsubscribe();
  }, [scene, pointLightRef.current]);

  return null;
};

export default Scene;
