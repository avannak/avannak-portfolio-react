"use client";
import { RootState } from "@/app/GlobalRedux/types";
import BackgroundOverlay from "@/components/BackgroundOverlay/BackgroundOverlay";
import NavMenu from "@/components/NavMenu";
import { motion } from "framer-motion";
import { useContext } from "react";
import { useSelector } from "react-redux";

type Props = {};

const HomePage = (props: Props) => {
  const parallaxIsOn = useSelector(
    (state: RootState) => state.parallax?.parallaxIsOn
  );
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
