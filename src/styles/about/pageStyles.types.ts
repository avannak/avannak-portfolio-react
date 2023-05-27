import {
  innerStyleType,
  outerStyleType,
} from "@/components/AnimatedComponents/MouseParallaxImage/MouseParallaxImage.types";

export const backgroundStyle: outerStyleType = {
  position: "absolute",
  overflow: "hidden",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
};

export const imageStyle: innerStyleType = {
  position: "fixed",
  width: "100%",
  height: "100%",
  opacity: "0.2",
  objectFit: "cover",
  bottom: "0", // Position the image at the bottom
};
