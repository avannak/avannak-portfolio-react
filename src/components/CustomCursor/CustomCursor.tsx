import { useMotionValue, useSpring, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

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
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 50, stiffness: 800 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  function projectEnter(e: any) {
    setCursorText("View Project 🔎");
    setCursorVariant("project");
  }

  function projectLeave(e: any) {
    setCursorText("");
    setCursorVariant("default");
  }

  function contactEnter(e: any) {
    setCursorText("👋");
    setCursorVariant("contact");
  }

  function contactLeave(e: any) {
    setCursorText("");
    setCursorVariant("default");
  }

  // CHECK IF MOBILE
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // Check if the code is running in a browser environment
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768);
    }
  }, []);

  // CURSOR CODE
  useEffect(() => {
    const moveCursor = (e: { clientX: number; clientY: number }) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    if (!isMobile) {
      window.addEventListener("mousemove", moveCursor);
    }

    return () => {
      if (!isMobile) {
        window.removeEventListener("mousemove", moveCursor);
      }
    };
  }, [cursorX, cursorY, isMobile]);

  return (
    <div>
      {!isMobile && (
        <motion.div
          className="cursor"
          style={{
            translateX: cursorXSpring,
            translateY: cursorYSpring,
          }}
          variants={variants}
          animate={cursorVariant}
          transition={spring}
        >
          <span className="cursorText">{cursorText}</span>
        </motion.div>
      )}
    </div>
  );
};

export default CustomCursor;
