import { useRef } from "react";
import { PointLight } from "three";

const Sun = () => {
  const sunRef = useRef<PointLight>(null!);

  return (
    <pointLight
      ref={sunRef}
      position={[0, 10, 0]} // Adjust the position of the sun as needed
      color="#fffefa" // Adjust the color of the sun
      intensity={1} // Adjust the intensity of the sun
      distance={1000} // Adjust the distance that the light is visible
      decay={2} // Adjust the rate of decay of the light intensity with distance
    />
  );
};

export default Sun;
