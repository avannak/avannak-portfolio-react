"use client";
import Image from "next/image";
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
            src="/images/space4.webp"
            outerStyle={backgroundStyle}
            innerStyle={imageStyle}
            priority
          />
          {/* <MouseParallaxVideo
            id="particles-video"
            src="/videos/particles5.mp4"
          />{" "} */}
        </>
      )}
      {props.parallax && isMobile && (
        <>
          <Image
            id="space-pic"
            src="/images/space4.webp"
            alt="space"
            priority
            width={window.innerWidth}
            height={window.innerHeight}
          />{" "}
          {/* <Image
            id="particles-video"
            src="/images/particles5.webp"
            alt="particles"
            priority
            width={window.innerWidth}
            height={window.innerHeight}
          />{" "} */}
        </>
      )}
      {!props.parallax && (
        <>
          <Image
            id="space-pic"
            src="/images/space4.webp"
            alt="space"
            priority
            width={window.innerWidth}
            height={window.innerHeight}
          />{" "}
          {/* <Image
            id="particles-video"
            src="/images/particles5.webp"
            alt="particles"
            priority
            width={window.innerWidth}
            height={window.innerHeight}
          />{" "} */}
        </>
      )}
    </>
  );
};

export default BackgroundOverlay;
