import { useIsMobile } from "@/utils/isMobileDevice";
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Html } from "@react-three/drei";
import FloatingComponent from "./FloatingComponent";

const HandPointerIndicator = () => {
  const isMobileDevice = useIsMobile();
  return (
    <Html
      position={isMobileDevice ? [-1.4, 3, -3.5] : [-1.7, 3, -3.5]}
      distanceFactor={1}
      rotation={[0, 0, 0]}
      transform
      occlude
      style={{
        opacity: 1,
        transition: "opacity 0.3s",
        pointerEvents: "none",
        transformStyle: "flat",
      }}
    >
      <div
        style={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          background: "rgba(0, 0, 0, 0.615)",
          boxShadow: "rgb(255, 255, 255) 0px 0px 10px 0px",
          padding: "20px",
          fontSize: "1.5em",
          borderRadius: "15px",
        }}
      >
        <FloatingComponent floatStyle="floatX">
          <FontAwesomeIcon
            id="hand-pointer"
            icon={faHandPointRight}
            style={{ marginRight: 15, fontSize: "3em", marginBottom: "30px" }}
          />
        </FloatingComponent>
        <span>Click to Enter Portfolio</span>
      </div>
    </Html>
  );
};

export default HandPointerIndicator;
