import React from "react";
import MouseParallaxImage from "../AnimatedComponents/MouseParallaxImage/MouseParallaxImage";
import space from "../../assets/images/space.webp";
import stars from "../../assets/images/stars4.gif";
import stars4 from "../../assets/videos/particles3.mp4";
import particles from "../../assets/videos/particles5.mp4";
import {
  backgroundStyle,
  imageStyle,
} from "../../styles/ImageParallaxStyles/pageStyles/pageStyles.types";
import MouseParallaxVideo from "../AnimatedComponents/MouseParallaxVideo";
import Image from "next/image";

type Props = {};

const BackgroundOverlay = (props: Props) => {
  return (
    <>
      <Image
        id="space-pic"
        src={space}
        alt="space"
        // outerStyle={backgroundStyle}
        // innerStyle={imageStyle}
        priority={true}
      ></Image>
      {/* <div id="parallax-overlay"></div>
      <MouseParallaxVideo id="particles-video" src={particles} /> */}
    </>
  );
};

export default BackgroundOverlay;
