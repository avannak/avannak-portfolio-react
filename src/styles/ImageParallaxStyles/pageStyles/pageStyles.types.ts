import {
  innerStyleType,
  outerStyleType,
} from "@/components/AnimatedComponents/MouseParallaxImage/MouseParallaxImage.types";

export const backgroundStyle: outerStyleType = {
  backgroundRepeat: "repeat",
  position: "fixed",
  overflow: "clip",
  top: "0",
  left: "0",
  width: "145%",
  height: "100%",
  objectFit: "cover",
};

export const imageStyle: innerStyleType = {
  backgroundRepeat: "repeat",
  width: "100%",
  height: "100%",
  objectFit: "cover",
};
