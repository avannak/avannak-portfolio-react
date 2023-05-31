"use client";
import Image from "next/image";
import particlesImg from "../../assets/images/particles5.webp";
import space from "../../assets/images/space.webp";
import stars from "../../assets/images/stars4.gif";
import particlesVideo from "../../assets/videos/particles5.mp4";
import {
  backgroundStyle,
  imageStyle,
} from "../../styles/ImageParallaxStyles/pageStyles/pageStyles.types";
import MouseParallaxImage from "../AnimatedComponents/MouseParallaxImage/MouseParallaxImage";
import MouseParallaxVideo from "../AnimatedComponents/MouseParallaxVideo";

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
          <Image id="stars-pic" src={stars} alt="stars"></Image>
          <MouseParallaxVideo id="particles-video" src={particlesVideo} />
        </>
      )}
      {!props.parallax && (
        <>
          <Image id="space-pic" src={space} alt="space"></Image>
          <Image id="stars-pic" src={stars} alt="stars"></Image>
          <Image id="particles-video" alt="particles" src={particlesImg} />
        </>
      )}
    </>
  );
};

export default BackgroundOverlay;
