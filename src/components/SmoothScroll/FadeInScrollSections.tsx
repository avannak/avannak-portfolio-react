import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation, Variants } from "framer-motion";

type FadeInScrollSectionsProps = {
  children: React.ReactNode;
};

const FadeInScrollSections: React.FC<FadeInScrollSectionsProps> = ({
  children,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Adjust this threshold as per your requirement
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const sectionVariants: Variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
  };

  return (
    <>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child) && child.type === "section") {
          return (
            <motion.section
              key={index}
              ref={ref as React.RefObject<HTMLElement>}
              initial="hidden"
              animate={controls}
              variants={sectionVariants}
              transition={{ duration: 0.5 }}
            >
              {child}
            </motion.section>
          );
        } else {
          return child;
        }
      })}
    </>
  );
};

export default FadeInScrollSections;
