"use client";
import MouseParallaxImage from "@/components/AnimatedComponents/MouseParallaxImage/MouseParallaxImage";
import MouseParallaxVideo from "@/components/AnimatedComponents/MouseParallaxVideo";
import Modal from "@/components/Modal";
import NavBar from "@/components/NavBar/NavBar";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import space from "../assets/images/space.jpg";
import stars from "../assets/images/stars4.gif";
import stars4 from "../assets/videos/particles3.mp4";
import particles from "../assets/videos/particles5.mp4";
import { UserContext } from "../context/user/UserContext";
import AboutPage from "../pages/about/page";
import ContactPage from "./contact/page";
import HomePage from "../pages/home/HomePage";
import MyWorkPage from "../pages/mywork/page";
import {
  backgroundStyle,
  imageStyle,
} from "../styles/ImageParallaxStyles/pageStyles/pageStyles.types";
import BackgroundOverlay from "@/components/BackgroundOverlay/BackgroundOverlay";
import CustomCursor from "@/components/CustomCursor/CustomCursor";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [storedScrollPos, setStoredScrollPos] = useState(0);
  const [height, setHeight] = useState<number>(0);
  const [navBarIsOn, setNavBarIsOn] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  /* CODE BELOW FOR MODAL POSITIONING. Change at own risk. */
  const getScrollPosition = () => {
    return {
      x: window.pageXOffset || document.documentElement.scrollLeft,
      y: window.pageYOffset || document.documentElement.scrollTop,
    };
  };

  return (
    <div className="app-container">
      <CustomCursor />
      <NavBar />
      <UserContext.Provider
        value={{
          showModal,
          setShowModal,
          modalType,
          setModalType,
          scrollPosition,
          setScrollPosition,
          storedScrollPos,
          setStoredScrollPos,
          height,
          setHeight,
          navBarIsOn,
          setNavBarIsOn,
          isDarkMode,
          setIsDarkMode,
        }}
      >
        <BackgroundOverlay />
        <HomePage />
      </UserContext.Provider>
    </div>
  );
};

export default App;
