import React, {
  ReactNode,
  useRef,
  useState,
  useCallback,
  useLayoutEffect,
} from "react";
import ResizeObserver from "resize-observer-polyfill";
import { useScroll, useTransform, useSpring, motion } from "framer-motion";

type Props = { children?: ReactNode };

const SmoothScroll = ({ children, ...props }: Props) => {
  const scrollRef = useRef(null);

  const [pageHeight, setPageHeight] = useState(0);

  const resizePageHeight = useCallback((entries: any) => {
    for (let entry of entries) {
      setPageHeight(entry.contentRect.height);
    }
  }, []);

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) =>
      resizePageHeight(entries)
    );
    scrollRef && resizeObserver.observe(scrollRef.current!);
    return () => resizeObserver.disconnect();
  }, [scrollRef, resizePageHeight]);

  const { scrollY } = useScroll();
  const transform = useTransform(scrollY, [0, pageHeight], [0, 0]);
  const physics = { damping: 50, mass: 1, stiffness: 600 };
  const spring = useSpring(transform, physics);

  return (
    <>
      <motion.div
        ref={scrollRef}
        style={{ y: spring, height: "100%" }}
        className="scroll-container"
      >
        {children}
      </motion.div>
    </>
  );
};

export default SmoothScroll;
