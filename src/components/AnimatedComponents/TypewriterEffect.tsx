import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

type PropTypes = {
  propText: string;
  className?: string;
  styledText?: JSX.Element;
  triggerSections?: string[];
  triggerInstant?: boolean;
  style?: React.CSSProperties;
  propTextStyle?: React.CSSProperties;
  styledTextStyle?: React.CSSProperties;
};

const TypewriterEffect: React.FC<PropTypes> = (props) => {
  const [visibleText, setVisibleText] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [shouldAnimate, setShouldAnimate] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (props.triggerSections && !props.triggerInstant) {
        const triggerOffset = 0; // Adjust if needed
        const sections = document.querySelectorAll(
          props.triggerSections.join(",")
        );
        const isInView = Array.from(sections).some((section) => {
          const rect = section.getBoundingClientRect();
          return rect.top <= window.innerHeight - triggerOffset;
        });
        setShouldAnimate(isInView);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [props.triggerSections, props.triggerInstant]);

  useEffect(() => {
    if (props.triggerInstant) {
      const timer = setInterval(() => {
        setVisibleText(props.propText.substring(0, currentIndex + 1));
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 100);

      return () => {
        clearInterval(timer);
      };
    } else if (shouldAnimate) {
      const timer = setInterval(() => {
        setVisibleText(props.propText.substring(0, currentIndex + 1));
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 100);

      return () => {
        clearInterval(timer);
      };
    }
  }, [shouldAnimate, props.propText, props.triggerInstant, currentIndex]);

  return (
    <div style={props.style}>
      <h1 className={props.className}>
        {visibleText.split("").map((char, index) => (
          <motion.span
            key={`char-${index}`} // Unique key prop for each character
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            style={props.propTextStyle as React.CSSProperties} // Cast the propTextStyle
          >
            {char}
          </motion.span>
        ))}
        {currentIndex >= props.propText.length && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={props.styledTextStyle as React.CSSProperties} // Cast the styledTextStyle
          >
            {props.styledText}
          </motion.span>
        )}
      </h1>
    </div>
  );
};

export default TypewriterEffect;
