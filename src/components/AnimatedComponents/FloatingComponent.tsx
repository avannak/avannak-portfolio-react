import { motion, Variants } from "framer-motion";
import { CSSProperties } from "react";

type PropTypes = { children: ReactNode; style?: CSSProperties };
const FloatingComponent = (props: PropTypes) => {
  const floatingAnimation: Variants = {
    floating: {
      y: [-6, 0, -6], // Specify the Y-axis values for animation
      transition: {
        duration: 2,
        repeat: Infinity, // Repeat the animation infinitely
      },
    },
  };

  return (
    <motion.div
      animate="floating"
      variants={floatingAnimation}
      style={props.style}
    >
      {props.children}
    </motion.div>
  );
};

export default FloatingComponent;
