"use client";
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

type Props = { parallax?: boolean };

const BackgroundOverlay = (props: Props) => {
  return (
    <>
      {props.parallax && (
        <>
          <MouseParallaxImage
            id="space-pic"
            src={space}
            // alt="space"
            outerStyle={backgroundStyle}
            innerStyle={imageStyle}
          ></MouseParallaxImage>
          <MouseParallaxImage
            id="stars-pic"
            src={stars}
            outerStyle={backgroundStyle}
            innerStyle={imageStyle}
          ></MouseParallaxImage>
          <div id="parallax-overlay"></div>
          <MouseParallaxVideo id="particles-video" src={particles} />
        </>
      )}
      {!props.parallax && (
        <>
          <Image id="space-pic" src={space} alt="space"></Image>
          <Image id="stars-pic" src={stars} alt="stars"></Image>
        </>
      )}
    </>
  );
};

export default BackgroundOverlay;
