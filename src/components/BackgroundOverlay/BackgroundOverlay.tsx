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
import { useIsMobile } from "@/utils/isMobileDevice";

type Props = { parallax?: boolean };

const BackgroundOverlay = (props: Props) => {
  const isMobile = useIsMobile();
  return (
    <>
      {props.parallax && !isMobile && (
        <>
          <MouseParallaxImage
            id="space-pic"
            src={space}
            // alt="space"
            outerStyle={backgroundStyle}
            innerStyle={imageStyle}
            priority
          ></MouseParallaxImage>
          <Image id="stars-pic" src={stars} alt="stars" priority />
          <MouseParallaxVideo id="particles-video" src={particlesVideo} />
        </>
      )}
      {props.parallax && isMobile && (
        <>
          <Image id="space-pic" src={space} alt="space" priority />
          <Image id="stars-pic" src={stars} alt="stars" priority />
          <Image id="particles-video" alt="particles" src={particlesImg} />
        </>
      )}
      {!props.parallax && (
        <>
          <Image id="space-pic" src={space} alt="space" priority />
          <Image id="stars-pic" src={stars} alt="stars" priority />
          <Image id="particles-video" alt="particles" src={particlesImg} />
        </>
      )}
    </>
  );
};

export default BackgroundOverlay;
