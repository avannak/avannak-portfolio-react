"use client";
import BackgroundOverlay from "@/components/BackgroundOverlay/BackgroundOverlay";
import NavMenu from "@/components/NavMenu";
import { GlobalContext } from "@/context/global/GlobalContext";
import { motion } from "framer-motion";
import { useContext } from "react";

type Props = {};

const HomePage = (props: Props) => {
  const { parallaxIsOn, setParallaxIsOn } = useContext(GlobalContext);
  return (
    <motion.div
      className="home-page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {parallaxIsOn && <BackgroundOverlay parallax />}
      {!parallaxIsOn && <BackgroundOverlay />}
      <NavMenu />
    </motion.div>
  );
};

export default HomePage;
