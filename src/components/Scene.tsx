import AboutPage from "@/app/about/page";
import ContactPage from "@/app/contact/page";
import MyWorkPage from "@/app/projects/page";
import { isMobileDevice, useIsMobile } from "@/utils/isMobileDevice";
import { faEye, faRotateBackward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  AdaptiveDpr,
  AdaptiveEvents,
  Bvh,
  CameraControls,
  Html,
  useGLTF,
} from "@react-three/drei";
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import React, { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { RingLoader } from "react-spinners";
import * as THREE from "three";
import {
  Mesh,
  MeshStandardMaterial,
  PerspectiveCamera,
  PointLight,
  SpotLight,
  Vector3,
} from "three";
import { lerp } from "three/src/math/MathUtils";
import HandPointerIndicator from "./AnimatedComponents/HandPointerIndicator";
import NavMenu from "./NavMenu";
import NeonLight from "./SceneComponents/NeonLight";

extend({ SpotLight });

export enum ACTION {
  NONE = 0,
  ROTATE = 1,
  TRUCK = 2,
  OFFSET = 4,
  DOLLY = 8,
  ZOOM = 16,
  TOUCH_ROTATE = 32,
  TOUCH_TRUCK = 64,
  TOUCH_OFFSET = 128,
  TOUCH_DOLLY = 256,
  TOUCH_ZOOM = 512,
  TOUCH_DOLLY_TRUCK = 1024,
  TOUCH_DOLLY_OFFSET = 2048,
  TOUCH_DOLLY_ROTATE = 4096,
  TOUCH_ZOOM_TRUCK = 8192,
  TOUCH_ZOOM_OFFSET = 16384,
  TOUCH_ZOOM_ROTATE = 32768,
}

const CameraController = React.memo(
  ({ target, initialPosition, zoomPosition, zoomInMonitor }: any) => {
    const { camera, gl } = useThree();
    const [fov, setFov] = useState(60);

    useFrame(() => {
      if (zoomInMonitor) {
        camera.position.lerp(zoomPosition, 0.03);
        setFov((prevFov) => lerp(prevFov, 30, 0.03)); // Lerp towards the zoomed in FOV
      } else {
        camera.position.lerp(initialPosition, 0.03);
        setFov((prevFov) => lerp(prevFov, 69, 0.03)); // Lerp towards the normal FOV
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
  }
);

const MobileOverlay = React.memo(
  ({
    isVisible,
    activeRoute,
    setActiveRoute,
    handleRouteClick,
    setZoomInMonitor,
    setCameraType,
  }: any) => {
    const overlayRef = useRef<HTMLDivElement>(null);
    const isMobileDevice = useIsMobile();

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
          width: "100vw",
          minWidth: "370px",
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
            {!isMobileDevice && "Back To Desk"}
            <svg
              className="icon"
              fill="#ffffff"
              xmlns="http://www.w3.org/2000/svg"
              width="30px"
              height="30px"
              viewBox="0 0 520.349 520.349"
              xmlSpace="preserve"
            >
              <path d="M445.223 0H142.589c-6.683 0-12.105 5.423-12.105 12.105v180.979h16.65c-5.006-6.392-7.725-14.224-7.725-22.467-.006-9.764 3.8-18.943 10.708-25.845 1.421-1.421 2.973-2.687 4.583-3.845V24.211h278.417v8.697l-127.104 92.285v395.155l127.796-92.787c1.626 4.77 6.095 8.228 11.414 8.228 6.685 0 12.105-5.426 12.105-12.105V12.105C457.328 5.417 451.907 0 445.223 0zm-91.192 331.973c-5.71 0-10.468-7.046-11.691-16.485h-13.63v-10.592h13.819c1.448-8.86 6.017-15.38 11.49-15.38 6.638 0 12.011 9.498 12.011 21.231.012 11.721-5.367 21.226-11.999 21.226zm-203.909-17.502a37.047 37.047 0 004.572 3.824v105.389c0 6.68-5.426 12.105-12.105 12.105-6.683 0-12.105-5.426-12.105-12.105V266.139h16.65c-11.186 14.327-10.199 35.132 2.988 48.332zm86.584-96.086a12.312 12.312 0 010 17.425l-58.995 59.001a12.348 12.348 0 01-8.709 3.611 12.304 12.304 0 01-8.71-3.611c-4.811-4.817-4.805-12.613 0-17.419l37.974-37.977H75.336c-6.803 0-12.315-5.512-12.315-12.315s5.506-12.318 12.321-12.318h122.917l-37.968-37.974c-4.805-4.805-4.811-12.608 0-17.413 4.812-4.812 12.614-4.812 17.425 0l58.99 58.99z" />
            </svg>
          </button>
          <button
            className={
              activeRoute === "home"
                ? "monitor-nav-btn active"
                : "monitor-nav-btn"
            }
            onClick={() => handleRouteClick("home")}
          >
            Title
          </button>
          <button
            className={
              activeRoute === "about"
                ? "monitor-nav-btn active"
                : "monitor-nav-btn"
            }
            onClick={() => handleRouteClick("about")}
          >
            About
          </button>
          <button
            className={
              activeRoute === "projects"
                ? "monitor-nav-btn active"
                : "monitor-nav-btn"
            }
            onClick={() => handleRouteClick("projects")}
          >
            Projects
          </button>
          <button
            className={
              activeRoute === "contact"
                ? "monitor-nav-btn active"
                : "monitor-nav-btn"
            }
            onClick={() => handleRouteClick("contact")}
          >
            Contact
          </button>
        </nav>

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
    ) : null;
  }
);

const Model = React.memo(
  ({
    wallsRef,
    cameraType,
    setCameraType,
    zoomInMonitor,
    setZoomInMonitor,
    activeRoute,
    monitorRef,
    lightSwitchRef,
    handlePointerMove,
    handlePointerOut,
    handleObjectClick,
    handleLightSwitchClick,
  }: any) => {
    const { scene } = useGLTF("scenes/WorkRoom_optimized_1-v1.glb");
    const { camera, size, gl } = useThree();
    const isMobile = useIsMobile();
    const [htmlPosition, setHtmlPosition] = useState({ x: 0, y: 0 });
    const [transformStyle, setTransformStyle] = useState(
      "translate(0%, -225%)"
    );
    const htmlRef = useRef<any>(null);

    const toScreenPosition = (
      obj: { updateMatrixWorld: () => void; matrixWorld: THREE.Matrix4 },
      camera: THREE.Camera
    ) => {
      const vector = new THREE.Vector3();
      const rect = gl.domElement.getBoundingClientRect(); // Get the size of the renderer
      obj.updateMatrixWorld();
      vector.setFromMatrixPosition(obj.matrixWorld);
      vector.project(camera);
      // Convert NDC to screen coordinates
      vector.x = ((vector.x + 1) * rect.width) / 2;
      vector.y = (-(vector.y - 1) * rect.height) / 2;
      return { x: vector.x, y: vector.y };
    };

    useEffect(() => {
      if (scene) {
        const pcEmissiveObjects: Mesh[] = [];
        scene.traverse((child) => {
          if (child instanceof Mesh) {
            // console.log(child.name);
            child.castShadow = true;
            child.receiveShadow = true;

            if (
              child.name.startsWith("Fan_") ||
              child.name.startsWith("ram") ||
              child.name.startsWith("cooler_light")
            ) {
              // console.log(child.name);
              child.castShadow = true;
              child.receiveShadow = true;
              pcEmissiveObjects.push(child);
            }
          }
        });
        const wallsObject = scene.getObjectByName("Walls");
        const monitorObject = scene.getObjectByName("Monitor1_2");
        const lightSwitchObject = scene.getObjectByName("light_switch001");

        // get pc fan lights
        // console.log("Emissive PC Objects:", pcEmissiveObjects);
        // Make pcEmissiveObjects emissive
        pcEmissiveObjects.forEach((obj) => {
          const material = obj.material as MeshStandardMaterial;
          material.emissive = new THREE.Color(0xffffff);
          material.emissiveIntensity = 10; // Set emissive intensity
        });
        // set Walls ref
        if (wallsObject instanceof Mesh) {
          wallsRef.current = wallsObject;
        }
        if (monitorObject instanceof Mesh) {
          monitorRef.current = monitorObject;
          monitorObject.userData.clickable = true;
        }
        if (lightSwitchObject instanceof Mesh) {
          // console.log(lightSwitchObject);
          lightSwitchRef.current = lightSwitchObject;
          lightSwitchObject.userData.clickable = true;
        }
      }
    }, [camera, monitorRef.current, gl, scene]);

    const updateTransformForDevice = (matches: any) => {
      setTransformStyle(
        matches ? "translate(0%, -253%)" : "translate(0%, -225%)"
      );
    };

    useEffect(() => {
      const mediaQuery = window.matchMedia(
        "(device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3)"
      );
      mediaQuery.addEventListener("change", (e) =>
        updateTransformForDevice(e.matches)
      );
      updateTransformForDevice(mediaQuery.matches); // Initial check

      return () =>
        mediaQuery.removeEventListener("change", (e) =>
          updateTransformForDevice(e.matches)
        );
    }, []);

    const style: any = {
      transform: transformStyle,
      transformOrigin: "center center",
      width: zoomInMonitor ? "100%" : "1200px",
      height: "470px",
      minWidth: zoomInMonitor
        ? "100%"
        : cameraType === "freeCamera"
          ? "1000px"
          : "1300px",
      background: `linear-gradient(to bottom, hsl(0, 0%, 0%) 0%, hsl(252, 19.230769230769234%, 10.196078431372548%) 8%, hsl(0, 0%, 0%) 92%, hsl(0, 0%, 0%) 100%)`,
      transformStyle: "preserve-3d",
      overflowY: zoomInMonitor ? "auto" : "hidden",
      overflowX: "hidden",
      fontSize: "0.7em",
    };

    useFrame(() => {
      if (monitorRef.current) {
        const material = monitorRef.current.material as MeshStandardMaterial;
        material.color.set(zoomInMonitor ? "white" : "black");
      }
    });

    return (
      <primitive
        object={scene}
        onPointerMove={(e: any) => {
          handlePointerMove(e, camera);
        }}
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
                  Look Around
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
                  Back To Desk
                  <FontAwesomeIcon className="icon" icon={faRotateBackward} />
                </button>
              )}
            </nav>
          </Html>
        )}
        {!zoomInMonitor && (
          <Html
            ref={htmlRef}
            position={[-0.25, 0, -3.56]}
            transform
            distanceFactor={
              zoomInMonitor ? 0.1 : cameraType === "freeCamera" ? 1 : 1
            }
            style={style}
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
                  pointerEvents: "none",
                  overflowY: "hidden",
                  overflowX: "hidden",
                  marginTop: "0",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 10,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: !zoomInMonitor ? "rgba(0, 0, 0, 0.8)" : "",
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
                    {!isMobileDevice && "Back To Desk"}
                    <svg
                      className="icon"
                      fill="#ffffff"
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      height="30px"
                      viewBox="0 0 520.349 520.349"
                      xmlSpace="preserve"
                    >
                      <path d="M445.223 0H142.589c-6.683 0-12.105 5.423-12.105 12.105v180.979h16.65c-5.006-6.392-7.725-14.224-7.725-22.467-.006-9.764 3.8-18.943 10.708-25.845 1.421-1.421 2.973-2.687 4.583-3.845V24.211h278.417v8.697l-127.104 92.285v395.155l127.796-92.787c1.626 4.77 6.095 8.228 11.414 8.228 6.685 0 12.105-5.426 12.105-12.105V12.105C457.328 5.417 451.907 0 445.223 0zm-91.192 331.973c-5.71 0-10.468-7.046-11.691-16.485h-13.63v-10.592h13.819c1.448-8.86 6.017-15.38 11.49-15.38 6.638 0 12.011 9.498 12.011 21.231.012 11.721-5.367 21.226-11.999 21.226zm-203.909-17.502a37.047 37.047 0 004.572 3.824v105.389c0 6.68-5.426 12.105-12.105 12.105-6.683 0-12.105-5.426-12.105-12.105V266.139h16.65c-11.186 14.327-10.199 35.132 2.988 48.332zm86.584-96.086a12.312 12.312 0 010 17.425l-58.995 59.001a12.348 12.348 0 01-8.709 3.611 12.304 12.304 0 01-8.71-3.611c-4.811-4.817-4.805-12.613 0-17.419l37.974-37.977H75.336c-6.803 0-12.315-5.512-12.315-12.315s5.506-12.318 12.321-12.318h122.917l-37.968-37.974c-4.805-4.805-4.811-12.608 0-17.413 4.812-4.812 12.614-4.812 17.425 0l58.99 58.99z" />
                    </svg>
                  </button>
                  <button
                    className={
                      activeRoute! === "home"
                        ? "monitor-nav-btn active"
                        : "monitor-nav-btn"
                    }
                  >
                    Title
                  </button>
                  <button
                    className={
                      activeRoute! === "about"
                        ? "monitor-nav-btn active"
                        : "monitor-nav-btn"
                    }
                  >
                    About
                  </button>
                  <button
                    className={
                      activeRoute! === "projects"
                        ? "monitor-nav-btn active"
                        : "monitor-nav-btn"
                    }
                  >
                    Projects
                  </button>
                  <button
                    className={
                      activeRoute! === "contact"
                        ? "monitor-nav-btn active"
                        : "monitor-nav-btn"
                    }
                  >
                    Contact
                  </button>
                </nav>
                <div className="route-content screen">
                  {activeRoute! === "home" && <NavMenu screen />}
                  {activeRoute! === "about" && <AboutPage screen />}
                  {activeRoute! === "projects" && <MyWorkPage screen />}
                  {activeRoute! === "contact" && <ContactPage screen />}
                </div>
              </div>
            </div>
          </Html>
        )}
      </primitive>
    );
  }
);

const FreeCameraControls = React.memo(
  ({
    cameraControlsRef,
    cameraType,
    freeCameraPosition,
    freeCameraAngle,
    wallsRef,
  }: any) => {
    const prevCameraType = useRef<string>("fixedCamera");
    const { scene } = useThree();

    // Load mesh objects from wallsRef
    // Load mesh objects from wallsRef
    const meshObjects = useMemo(() => {
      const objects = [];

      if (wallsRef.current instanceof Mesh) {
        objects.push(wallsRef.current);
      }

      // Assuming "window_pane" is a separate mesh
      const windowPaneMesh = scene.getObjectByName("window_pane");
      if (windowPaneMesh instanceof Mesh) {
        objects.push(windowPaneMesh);
      }

      return objects;
    }, [wallsRef, scene]);

    useEffect(() => {
      if (cameraType === "freeCamera" && cameraControlsRef.current) {
        // Set control buttons only when necessary
        cameraControlsRef.current.mouseButtons = {
          left: ACTION.ROTATE,
          middle: ACTION.DOLLY,
          right: ACTION.ROTATE,
          wheel: ACTION.DOLLY,
        };

        // Apply camera positioning only when switching to freeCamera mode
        if (prevCameraType.current !== "freeCamera") {
          cameraControlsRef.current.setLookAt(
            freeCameraPosition.x,
            freeCameraPosition.y,
            freeCameraPosition.z,
            0,
            2.8,
            -1.5, // Target's position
            false // Disable transition to apply immediately
          );
          prevCameraType.current = cameraType;
        }
      }
    }, [cameraType, freeCameraPosition, cameraControlsRef]);

    return (
      <>
        {cameraType === "freeCamera" && (
          <CameraControls
            ref={cameraControlsRef}
            minDistance={1}
            maxDistance={12}
            colliderMeshes={meshObjects}
          />
        )}
      </>
    );
  }
);

const Scene = React.memo(() => {
  const canvasRef = useRef<any>(null);
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const cameraControlsRef = useRef<CameraControls>(null!);
  const initialCameraPosition = new Vector3(0, 3, 1.2);
  const [currentCameraPosition, setCurrentCameraPosition] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const zoomCameraPosition = new Vector3(0, 4, 3);
  const cameraTarget = new Vector3(0, -9, -40);
  const [zoomInMonitor, setZoomInMonitor] = useState(false);
  const [cameraType, setCameraType] = useState("fixedCamera");
  const [lightOn, setLightOn] = useState(false);
  const [activeRoute, setActiveRoute] = useState("home");
  const [renderer, setRenderer] = useState<THREE.WebGLRenderer | null>(null);
  const pointLightRef = useRef<PointLight>(null!);
  const wallsRef = useRef(null);
  const monitorRef = useRef<Mesh>(null!);
  const lightSwitchRef = useRef<Mesh>(null!);
  const [hoveredLightSwitch, setHoveredLightSwitch] = useState(false);
  const [clickedMonitor, setClickedMonitor] = useState(false);
  const [clickedLightSwitch, setClickedLightSwitch] = useState(false);

  const isMobile = useIsMobile();

  const [freeCameraPosition, setFreeCameraPosition] = useState(
    new Vector3(0, 3, 1)
  );
  const [freeCameraAngle, setFreeCameraAngle] = useState(
    new THREE.Euler(0, -6, 0)
  );
  const handleRouteClick = (route: string) => {
    setActiveRoute(route);
  };

  const isObjectVisible = (object: Mesh, camera: THREE.Camera) => {
    const box = new THREE.Box3().setFromObject(object);
    const frustum = new THREE.Frustum();
    frustum.setFromProjectionMatrix(
      new THREE.Matrix4().multiplyMatrices(
        camera.projectionMatrix,
        camera.matrixWorldInverse
      )
    );
    return frustum.intersectsBox(box);
  };

  const handlePointerMove = (event: any, camera: THREE.Camera) => {
    event.stopPropagation();
    const intersects = event.intersections
      .filter((intersect: any) => intersect.object.userData.clickable)
      .filter((intersect: any) => {
        const object = intersect.object;
        const objectVisible = isObjectVisible(object, camera);
        return objectVisible;
      });
    setHoveredLightSwitch(false);

    if (intersects.length > 0) {
      const object = intersects[0].object;
      if (object === lightSwitchRef.current) {
        setHoveredLightSwitch(true);
        document.body.style.cursor = "pointer";
      }
    } else {
      document.body.style.cursor = "";
    }
  };

  const handlePointerOut = (event: any) => {
    event.stopPropagation();
    setHoveredLightSwitch(false);
    document.body.style.cursor = "";
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

  // Performance Scaling
  const getOptimalDPR = () => {
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const pixelRatio = window.devicePixelRatio;
    const totalDevicePixels = screenWidth * screenHeight * pixelRatio;

    // Thresholds adjusted for more realistic device categories
    if (totalDevicePixels > 8000000) {
      // Very high-resolution devices like high-end smartphones or tablets
      return 0.9;
    } else if (totalDevicePixels > 6000000) {
      // High-resolution devices
      return 1;
    } else if (totalDevicePixels > 2000000) {
      // Medium-resolution devices
      return 0.65;
    } else {
      // Lower-resolution devices
      return 1.25; // Higher DPR might actually be beneficial for visual quality without much cost
    }
  };

  const optimalDPR = getOptimalDPR();

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    // Disable scrolling and touch actions
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.body.style.touchAction = "none";
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      // Re-enable scrolling and touch actions
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
      document.body.style.touchAction = "auto";
    };
  }, []);

  return (
    <div
      className="canvasContainer"
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        left: 0,
        top: 0,
        touchAction: "none",
        pointerEvents: zoomInMonitor ? "auto" : "none",
        cursor: cameraType === "freeCamera" ? "grab" : "",
      }}
    >
      <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              position: "absolute",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
              width: "100vw",
              backgroundColor: "#0f0f14",
            }}
          >
            <RingLoader
              color="#ffffff"
              loading
              // size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        }
      >
        <Canvas
          ref={canvasRef}
          dpr={optimalDPR} // Use the optimal DPR value
          shadows
          style={{
            width: "100%",
            height: "100%",
          }}
          resize={{ scroll: false }}
          onCreated={({ gl }) => {
            setRenderer(gl);
          }}
        >
          {/* <Perf /> */}
          <AdaptiveDpr pixelated />
          <AdaptiveEvents />
          <EffectComposer>
            <Bloom
              intensity={0.1}
              luminanceThreshold={0.9} // luminance threshold. Raise this value to mask out darker elements in the scene.
              luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
              mipmapBlur={false} // Enables or disables mipmap blur.
            />
          </EffectComposer>
          <Bvh firstHitOnly>
            <Model
              wallsRef={wallsRef}
              cameraControlsRef={cameraControlsRef}
              cameraType={cameraType}
              setCameraType={setCameraType}
              currentCameraPosition={currentCameraPosition}
              setCurrentCameraPosition={setCurrentCameraPosition}
              zoomInMonitor={zoomInMonitor}
              setZoomInMonitor={setZoomInMonitor}
              lightOn={lightOn}
              setLightOn={setLightOn}
              setFreeCameraPosition={setFreeCameraPosition}
              setFreeCameraAngle={setFreeCameraAngle}
              activeRoute={activeRoute}
              setActiveRoute={setActiveRoute}
              monitorRef={monitorRef}
              lightSwitchRef={lightSwitchRef}
              hoveredLightSwitch={hoveredLightSwitch}
              setHoveredLightSwitch={setHoveredLightSwitch}
              clickedMonitor={clickedMonitor}
              setClickedMonitor={setClickedMonitor}
              clickedLightSwitch={clickedLightSwitch}
              setClickedLightSwitch={setClickedLightSwitch}
              handlePointerMove={handlePointerMove}
              handlePointerOut={handlePointerOut}
              handleObjectClick={handleObjectClick}
              handleLightSwitchClick={handleLightSwitchClick}
            />
          </Bvh>
          {lightOn && !zoomInMonitor && (
            <spotLight
              color={"#ffffff"}
              position={[0, 5, 0]}
              angle={Math.PI / 2.5}
              penumbra={1.8}
              intensity={50}
              castShadow
              receiveShadow
              shadow-mapSize-width={isMobile ? 128 : 512}
              shadow-mapSize-height={isMobile ? 128 : 512}
              shadow-camera-near={0.5}
              shadow-camera-far={20}
              shadow-bias={-0.01}
            />
          )}
          <spotLight
            color={"#fefefe"}
            position={[-19, 5, -10]}
            angle={Math.PI / 1}
            penumbra={0}
            intensity={30}
            castShadow
            receiveShadow
            shadow-mapSize-width={isMobile ? 128 : 512}
            shadow-mapSize-height={isMobile ? 128 : 512}
            shadow-camera-near={0.5}
            shadow-camera-far={20}
            shadow-bias={-0.001}
          />
          <spotLight
            color={"#fefba8"}
            position={[-17, 3, -2]}
            angle={Math.PI / 4}
            penumbra={900}
            intensity={15}
            castShadow
            receiveShadow
            shadow-mapSize-width={isMobile ? 128 : 512}
            shadow-mapSize-height={isMobile ? 128 : 512}
            shadow-camera-near={0.5}
            shadow-camera-far={20}
            shadow-bias={-0.001}
          />
          <spotLight
            color={"#fafdc3"}
            position={[-19, -6, -3]}
            angle={Math.PI / 1}
            penumbra={200}
            intensity={5}
            castShadow
            receiveShadow
            shadow-mapSize-width={isMobile ? 128 : 512}
            shadow-mapSize-height={isMobile ? 128 : 512}
            shadow-camera-near={0.5}
            shadow-camera-far={20}
            shadow-bias={-0.0001}
          />
          <spotLight
            color={"#ff0000"}
            position={[0, 3, 0]}
            angle={Math.PI / 3}
            penumbra={0.2}
            intensity={10}
            castShadow
            receiveShadow
            shadow-mapSize-width={isMobile ? 128 : 512}
            shadow-mapSize-height={isMobile ? 128 : 512}
            shadow-camera-near={0.5}
            shadow-camera-far={20}
            shadow-bias={-0.009}
          />
          <spotLight
            color={"#174de1"}
            position={[-1, 8, 0]}
            angle={Math.PI / 1}
            penumbra={0.2}
            intensity={40}
            castShadow
            receiveShadow
            shadow-mapSize-width={isMobile ? 128 : 512}
            shadow-mapSize-height={isMobile ? 128 : 512}
            shadow-camera-near={0.5}
            shadow-camera-far={20}
            shadow-bias={-0.0001}
          />
          {lightOn && (
            <pointLight
              ref={pointLightRef}
              distance={5}
              decay={-0.01}
              intensity={2}
              color={"#ffffff"}
              position={[-2, 2, 2]}
              shadow-mapSize-width={isMobile ? 128 : 512}
              shadow-mapSize-height={isMobile ? 128 : 512}
              shadow-camera-near={0.1}
              shadow-camera-far={20}
              shadow-bias={-0.01}
            />
          )}
          <NeonLight />
          {!zoomInMonitor && <HandPointerIndicator />}
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
              cameraControlsRef={cameraControlsRef}
              cameraType={cameraType}
              freeCameraPosition={freeCameraPosition}
              freeCameraAngle={freeCameraAngle}
              wallsRef={wallsRef}
            />
          )}
        </Canvas>
        <MobileOverlay
          isVisible={zoomInMonitor}
          onNavClick={() => setZoomInMonitor(false)}
          activeRoute={activeRoute}
          setActiveRoute={setActiveRoute}
          handleRouteClick={handleRouteClick}
          setZoomInMonitor={setZoomInMonitor}
          setCameraType={setCameraType}
        />
        {!zoomInMonitor && (
          <div
            className="footer"
            style={{
              position: "fixed",
              bottom: "30px",
              left: 0,
              right: 0,
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
      </Suspense>
    </div>
  );
});

export default Scene;
