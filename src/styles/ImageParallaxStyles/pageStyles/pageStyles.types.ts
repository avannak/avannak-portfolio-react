import {
  innerStyleType,
  outerStyleType,
} from "@/components/AnimatedComponents/MouseParallaxImage/MouseParallaxImage.types";

export const backgroundStyle: outerStyleType = {
  backgroundRepeat: "repeat",
  width: "calc(100% + 40px)",   // increase the width by 40px
  height: "calc(100% + 40px)",  // increase the height by 40px
  objectFit: "cover",
  transform: "translate(-40px, -20px)", // shift back the image by 40px to the left and 20px up
};

export const imageStyle: innerStyleType = {
  backgroundRepeat: "repeat",
  width: "calc(100% + 40px)",   // increase the width by 40px
  height: "calc(100% + 40px)",  // increase the height by 40px
  objectFit: "cover",
  transform: "translate(-40px, -20px)", // shift back the image by 40px to the left and 20px up
};
