import { Canvas, useThree, extend, useFrame } from "@react-three/fiber";
import React, { Suspense, useEffect, useMemo, useRef, useState } from "react";
import {
  useGLTF,
  OrbitControls,
  Html,
  OrbitControlsProps,
} from "@react-three/drei";
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
import { faEye, faRotateBackward } from "@fortawesome/free-solid-svg-icons";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";

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
      camera.position.lerp(zoomPosition, 0.03);
      setFov((prevFov) => lerp(prevFov, 30, 0.03)); // Lerp towards the zoomed in FOV
    } else {
      camera.position.lerp(initialPosition, 0.03);
      setFov((prevFov) => lerp(prevFov, 75, 0.03)); // Lerp towards the normal FOV
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

const MobileOverlay = ({
  isVisible,
  onNavClick,
  onRouteClick,
  activeRoute,
  setActiveRoute,
  handleRouteClick,
  setZoomInMonitor,
  setCameraType,
}: any) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (overlayRef.current) {
      overlayRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [activeRoute]);

  return isVisible ? (
    <div
      ref={overlayRef}
      className="monitor-content"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflowX: "hidden",
        zIndex: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
      }}
    >
      <nav className="monitor-nav">
        <button
          className="monitor-nav-btn"
          id="back-to-scene-btn"
          onClick={() => {
            setZoomInMonitor(false);
            setCameraType("fixedCamera");
          }}
        >
          <FontAwesomeIcon className="icon" icon={faRotateBackward} />
        </button>
        <button
          className="monitor-nav-btn"
          onClick={() => handleRouteClick("home")}
        >
          Title
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
      </nav>

      <div className="route-content">
        {activeRoute! === "home" && <NavMenu setActiveRoute={setActiveRoute} />}
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
  ) : null;
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
  activeRoute,
  setActiveRoute,
  handleRouteClick,
}: any) => {
  const { scene } = useGLTF("scenes/WorkRoom2-v1.glb");
  const monitorRef = useRef<Mesh>(null!);
  const lightSwitchRef = useRef<Mesh>(null!);
  const [hoveredMonitor, setHoveredMonitor] = useState(false);
  const [hoveredLightSwitch, setHoveredLightSwitch] = useState(false);
  const [clickedMonitor, setClickedMonitor] = useState(false);
  const [clickedLightSwitch, setClickedLightSwitch] = useState(false);
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
      }
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
        <Html position={[-0.7, 1.3, -2.5]}>
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
                <FontAwesomeIcon className="icon" icon={faRotateBackward} />
              </button>
            )}
          </nav>
        </Html>
      )}
      {!zoomInMonitor && (
        <Html
          position={
            zoomInMonitor
              ? [0, 2.3, -4]
              : cameraType === "freeCamera"
              ? [-0.35, 2.64, -3.56]
              : [-0.25, 2.64, -3.56]
          }
          rotation={[0, 0, 0]}
          transform
          distanceFactor={
            zoomInMonitor ? 0.1 : cameraType === "freeCamera" ? 1 : 1
          }
          style={{
            width: zoomInMonitor ? "100vw" : "1200px",
            minWidth: zoomInMonitor
              ? "100vw"
              : cameraType === "freeCamera"
              ? "1000px"
              : "1300px",
            height: "100vh",
            maxHeight: zoomInMonitor
              ? "100vh"
              : cameraType === "freeCamera"
              ? "400px"
              : "400px",
            background: `linear-gradient(to bottom, hsl(0, 0%, 0%) 0%, hsl(252, 19.230769230769234%, 10.196078431372548%) 8%, hsl(0, 0%, 0%) 92%, hsl(0, 0%, 0%) 100%)`,
            transformStyle: "preserve-3d",
            overflowY: zoomInMonitor ? "auto" : "hidden",
          }}
        >
          <div
            className="clickable-screen"
            style={{ cursor: "pointer" }}
            onClick={() => {
              !zoomInMonitor && setZoomInMonitor(true);
              !zoomInMonitor && setCameraType("fixedCamera");
            }}
          >
            <div
              className="monitor-content"
              style={{
                fontSize: "0.7em",
                cursor: zoomInMonitor ? "auto" : "pointer",
                pointerEvents: "none",
                overflowY: "hidden",
                marginTop: "0",
                width: "100%",
                height: "100%",
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
      )}
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
  const zoomCameraPosition = new Vector3(0, 4, 3);
  const cameraTarget = new Vector3(0, -9, -40);
  const [zoomInMonitor, setZoomInMonitor] = useState(false);
  const [cameraType, setCameraType] = useState("fixedCamera");
  const [lightOn, setLightOn] = useState(true);
  const [activeRoute, setActiveRoute] = useState("home");
  const pointLightRef = useRef<PointLight>(null!);

  const [freeCameraPosition, setFreeCameraPosition] = useState(
    new Vector3(-3, 6, 6)
  );
  const [freeCameraAngle, setFreeCameraAngle] = useState(
    new THREE.Euler(0, -6, 0)
  );
  const handleRouteClick = (route: string) => {
    setActiveRoute(route);
    if (route === "freeCamera") {
      setFreeCameraPosition(new Vector3(-3, 6, 6));
      setFreeCameraAngle(new THREE.Euler(0, -4, 0));
    }
  };

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
    const { camera, scene } = useThree();
    const orbitControlsRef = useRef<OrbitControlsImpl>(null);
    const prevCameraType = useRef<string>("fixedCamera");

    const meshObjects = useMemo(
      () => scene.children.filter((obj) => obj instanceof Mesh) as Mesh[],
      [scene.children]
    );

    useEffect(() => {
      if (cameraType === "freeCamera" && orbitControlsRef.current) {
        // Set the camera position and angle only when cameraType changes to "freeCamera"
        if (prevCameraType.current !== "freeCamera") {
          // camera.position.copy(freeCameraPosition);
          // camera.rotation.copy(freeCameraAngle);
          orbitControlsRef.current.target.copy(new Vector3(0, 3, -3));
        }
      }

      prevCameraType.current = cameraType;
    }, [cameraType, camera, freeCameraPosition, freeCameraAngle]);

    return (
      <>
        {cameraType === "freeCamera" && (
          <OrbitControls
            ref={orbitControlsRef}
            enablePan={false}
            enableRotate={true}
            minDistance={3}
            maxDistance={6}
            enableDamping={true}
            // collisionObjects={meshObjects}
          />
        )}
      </>
    );
  };

  return (
    <div
      className="canvasContainer"
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        left: 0,
        top: 0,
      }}
    >
      <Canvas
        shadows
        style={{
          width: dimensions.width,
          height: dimensions.height,
          position: "fixed",
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
            activeRoute={activeRoute}
            setActiveRoute={setActiveRoute}
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
      {zoomInMonitor && (
        <MobileOverlay
          isVisible={zoomInMonitor}
          onNavClick={() => setZoomInMonitor(false)}
          onRouteClick={handleRouteClick}
          activeRoute={activeRoute}
          setActiveRoute={setActiveRoute}
          handleRouteClick={handleRouteClick}
          setZoomInMonitor={setZoomInMonitor}
          setCameraType={setCameraType}
        />
      )}
      {!zoomInMonitor && (
        <div
          className="footer"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 1,
            pointerEvents: "none",
          }}
        >
          <p>
            Designed and Developed by{" "}
            <span className="designed-by">Arthur Vannakittikun </span>
            &copy; 2024
          </p>
        </div>
      )}
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
