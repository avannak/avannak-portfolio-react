import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";

type MouseParallaxVideoProps = { src: string | StaticImageData; id?: string };

const MouseParallaxVideo = ({ src, id }: MouseParallaxVideoProps) => {
  const [videoMousePosition, setVideoMousePosition] = useState<{
    x: number;
    y: number;
  }>({
    x: 0,
    y: 0,
  });

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const videoElement = videoRef.current;

      if (videoElement) {
        const { top, left, width, height } =
          videoElement.getBoundingClientRect();
        const x = (clientX - left) / width;
        const y = (clientY - top) / height;
        setVideoMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const calculateTranslate = (
    multiplier: number,
    position: { x: number; y: number }
  ) => {
    const { x, y } = position;
    const maxTranslate = 30;

    if (typeof window !== "undefined" && window.innerWidth <= 768) {
      // Disable parallax effect for mobile resolutions (<= 768px)
      return "none";
    }

    const translateX = (x - 0.5) * maxTranslate * multiplier;
    const translateY = (y - 0.5) * maxTranslate * multiplier;

    return `translate(${translateX}px, ${translateY}px)`;
  };

  const videoTranslate = calculateTranslate(5, videoMousePosition);

  return (
    <motion.div
      // ref={containerRef}
      style={{ position: "relative", overflow: "hidden" }}
    >
      <motion.video
        ref={videoRef}
        src={src as string} // Cast src to string
        id={id}
        autoPlay
        loop
        muted
        style={{
          transform: videoTranslate,
        }}
      />
    </motion.div>
  );
};

export default MouseParallaxVideo;
