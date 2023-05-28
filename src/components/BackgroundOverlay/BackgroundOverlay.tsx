import React from "react";
import MouseParallaxImage from "../AnimatedComponents/MouseParallaxImage/MouseParallaxImage";
import space from "../../assets/images/space.jpg";
import stars from "../../assets/images/stars4.gif";
import stars4 from "../../assets/videos/particles3.mp4";
import particles from "../../assets/videos/particles5.mp4";
import {
  backgroundStyle,
  imageStyle,
} from "../../styles/ImageParallaxStyles/pageStyles/pageStyles.types";
import MouseParallaxVideo from "../AnimatedComponents/MouseParallaxVideo";

type Props = {};

const BackgroundOverlay = (props: Props) => {
  return (
    <>
      <MouseParallaxImage
        id="space-pic"
        src={space}
        outerStyle={backgroundStyle}
        innerStyle={imageStyle}
        priority={true}
      ></MouseParallaxImage>
      <MouseParallaxImage
        id="stars-pic"
        src={stars}
        innerStyle={imageStyle}
        outerStyle={backgroundStyle}
      ></MouseParallaxImage>
      <div id="parallax-overlay"></div>
      <MouseParallaxVideo id="particles-video" src={particles} />
    </>
  );
};

export default BackgroundOverlay;