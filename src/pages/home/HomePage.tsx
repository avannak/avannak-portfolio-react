import NavMenu from "@/components/NavMenu";
import { UserContext } from "@/context/user/UserContext";
import { motion, useScroll, useTransform } from "framer-motion";
import { useContext, useEffect, useRef, useState } from "react";

type Props = {};

const getCurrentDimension = () => {
  // Check if window object is defined
  if (typeof window !== "undefined") {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  } else {
    return {
      width: 0,
      height: 0,
    };
  }
};

const HomePage = (props: Props) => {
  const { height, setHeight } = useContext(UserContext);
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const ref = useRef(null);
  const homePageRef = useRef<HTMLDivElement | null>(null);
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0.5, 1], [1, 0]);

  useEffect(() => {
    if (homePageRef.current) {
      // Add a conditional check to handle the possible null value
      // console.log(homePageRef.current.clientHeight);
      setHeight(homePageRef.current.clientHeight);
    }
  }, [height, setHeight]);

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };

    // Check if window object is defined
    if (typeof window !== "undefined") {
      window.addEventListener("resize", updateDimension);
      return () => {
        window.removeEventListener("resize", updateDimension);
      };
    }
  }, [screenSize]);

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
