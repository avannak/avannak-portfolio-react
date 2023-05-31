"use client";
import { motion, Variants } from "framer-motion";
import { CSSProperties, ReactNode } from "react";

type PropTypes = {
  children: ReactNode;
  style?: CSSProperties;
  floatStyle?: string;
};
const FloatingComponent = (props: PropTypes) => {
  const floatingY: Variants = {
    floating: {
      y: [-6, 0, -6], // Specify the Y-axis values for animation
      transition: {
        duration: 2,
        repeat: Infinity, // Repeat the animation infinitely
      },
    },
  };
  const floatingX: Variants = {
    floating: {
      x: [-6, 0, -6], // Specify the Y-axis values for animation
      transition: {
        duration: 2,
        repeat: Infinity, // Repeat the animation infinitely
      },
    },
  };

  return (
    <motion.div
      animate="floating"
      variants={
        props.floatStyle === "floatY"
          ? floatingY
          : props.floatStyle === "floatX"
          ? floatingX
          : floatingY
      }
      style={props.style}
    >
      {props.children}
    </motion.div>
  );
};

export default FloatingComponent;
