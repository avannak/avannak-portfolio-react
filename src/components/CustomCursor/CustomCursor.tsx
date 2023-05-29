"use client";
import dynamic from "next/dynamic";
const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

type Props = {};

export const variants = {
  default: {
    display: "flex",
    zIndex: 999999,
    opacity: 1,
    mixBlendMode: "difference" as const,
    height: 24,
    width: 24,
    left: 4,
    top: 4,
    fontSize: "16px",
    backgroundColor: "#fefefe",
    transition: {
      type: "spring",
      mass: 0.6,
    },
  },
  project: {
    display: "flex",
    opacity: 1,
    mixBlendMode: "normal" as const,
    backgroundColor: "#85dc8bdd",
    left: -75,
    top: -80,
    color: "#ffea70",
    textShadow: "0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black",
    height: 200,
    width: 200,
    fontSize: "20px",
    fontWeight: 900,
    // webkitTextStroke: "1px #000000",
  },
  contact: {
    opacity: 1,
    backgroundColor: "#FFBCBC",
    color: "#000",
    height: 64,
    width: 64,
    fontSize: "32px",
  },
};

export const spring = {
  type: "spring",
  stiffness: 500,
  damping: 28,
};

const CustomCursor = (props: Props) => {
  return (
    <AnimatedCursor
      outerStyle={{
        zIndex: 999999,
        backgroundColor: "rgba(255, 255, 255, 0.624)",
      }}
      innerStyle={{
        zIndex: 999999,
        backgroundColor: "rgb(253, 103, 103)",
      }}
    />
  );
};

export default CustomCursor;
