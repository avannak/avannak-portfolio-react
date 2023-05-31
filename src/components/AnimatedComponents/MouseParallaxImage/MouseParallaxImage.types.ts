import { StaticImageData } from "next/image";

export type outerStyleType = {
  transform?: string;
  position?: string;
  overflow?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  width?: string;
  height?: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  objectFit?: string;
  zIndex?: string;
  borderRadius?: string;
  boxShadow?: string;
  backgroundColor?: string;
  backgroundPosition?: string;
  backgroundRepeat?: string;
  backgroundSize?: string;
  opacity?: string;
  cursor?: string;
  // Add more style properties as needed
};

export type innerStyleType = {
  transform?: string;
  position?: string;
  overflow?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  width?: string;
  height?: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  objectFit?: string;
  zIndex?: string;
  borderRadius?: string;
  boxShadow?: string;
  backgroundColor?: string;
  backgroundPosition?: string;
  backgroundSize?: string;
  backgroundRepeat?: string;
  opacity?: string;
  cursor?: string;
  textAlign?: string;
  textTransform?: string;
  lineHeight?: string;
  // Add more style properties as needed
};

export type MouseParallaxImageProps = {
  src: string | StaticImageData;
  id?: string;
  outerStyle?: outerStyleType;
  innerStyle?: innerStyleType;
  priority?: boolean;
};