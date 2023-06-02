"use client";
import { setMousePosition } from "@/app/GlobalRedux/Features/parallax/mousePositionSlice";
import { RootState } from "@/app/GlobalRedux/store";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { MouseParallaxImageProps } from "./MouseParallaxImage.types";

const MouseParallaxImage = ({
  src,
  id,
  outerStyle,
  innerStyle,
  priority,
}: MouseParallaxImageProps) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const dispatch = useDispatch();
  const mousePosition = useSelector((state: RootState) => state.mousePosition);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const imageElement = imageRef.current;

      if (imageElement) {
        const { top, left, width, height } =
          imageElement.getBoundingClientRect();
        const x = (clientX - left) / width;
        const y = (clientY - top) / height;
        dispatch(setMousePosition({ x, y }));
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
    const maxTranslate = 5;

    if (typeof window !== "undefined" && window.innerWidth <= 768) {
      // Disable parallax effect for mobile resolutions (<= 768px)
      return "none";
    }

    const translateX = (x - 0.5) * maxTranslate * multiplier;
    const translateY = (y - 0.5) * maxTranslate * multiplier;

    return `translate(${translateX}px, ${translateY}px)`;
  };

  const imageTranslate = calculateTranslate(4, mousePosition);

  // Apply the calculated translate value to innerStyle
  const modifiedInnerStyle = {
    ...innerStyle,
    transform: imageTranslate,
  };

  return (
    <div ref={imageRef} id={id} style={outerStyle as React.CSSProperties}>
      <Image
        src={src as string}
        alt="Parallax Image"
        style={modifiedInnerStyle as React.CSSProperties}
        priority={priority}
      />
    </div>
  );
};

export default MouseParallaxImage;
