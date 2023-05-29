"use client";
import NavMenu from "@/components/NavMenu";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type Props = {};

const HomePage = (props: Props) => {
  const ref = useRef(null);
  const homePageRef = useRef<HTMLDivElement | null>(null);
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0.5, 1], [1, 0]);

  return (
    <motion.div
      ref={homePageRef}
      className="home-page-container"
      // initial={{ opacity: 0, skewX: 5, skewY: 5 }}
      // animate={{ opacity: 1, skewX: 0, skewY: -5 }}
    >
      <motion.div
        ref={ref}
        style={{ y, opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "linear",
          duration: 0.3,
          x: { duration: 0.2 },
        }}
      >
        <NavMenu />
      </motion.div>
    </motion.div>
  );
};

export default HomePage;
