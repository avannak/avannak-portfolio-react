import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

type PropTypes = {
  text?: string;
  className?: string;
  triggerSections?: string[];
  triggerInstant?: boolean;
  style?: React.CSSProperties;
  colorMap?: { [key: string]: string };
};

const TypewriterContainer: React.FC<PropTypes> = (props) => {
  const [visibleText, setVisibleText] = useState<string>("");

  useEffect(() => {
    let currentIndex = 0;
    let timer: NodeJS.Timeout | undefined = undefined;

    const animateTypewriter = () => {
      setVisibleText((prevVisibleText) => {
        const nextChar = props.text?.[currentIndex];
        currentIndex++;
        return prevVisibleText + nextChar;
      });

      if (currentIndex < (props.text?.length ?? 0)) {
        timer = setTimeout(animateTypewriter, 100);
      }
    };

    if (props.triggerInstant) {
      timer = setTimeout(animateTypewriter, 100);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [props.triggerInstant, props.text]);

  const getColor = (id: string) => {
    const colorMap = props.colorMap || {};
    return colorMap[id] || "";
  };

  return (
    <div style={props.style}>
      <h1 className={props.className}>
        {visibleText.split("").map((char, index) => (
          <motion.span
            key={`char-${index}`}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ color: getColor(`text${index + 1}`) }}
          >
            {char}
          </motion.span>
        ))}
      </h1>
    </div>
  );
};

export default TypewriterContainer;
