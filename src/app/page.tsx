"use client";
import BackgroundOverlay from "@/components/BackgroundOverlay/BackgroundOverlay";
// import CustomCursor from "@/components/CustomCursor/CustomCursor";
import NavBar from "@/components/NavBar/NavBar";
import { useState } from "react";
import { UserContext } from "../context/user/UserContext";
import HomePage from "../pages/home/HomePage";
import AnimatedCursor from "react-animated-cursor";

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
      {/* <CustomCursor /> */}
      <AnimatedCursor outerStyle={{zIndex: 999999}} innerStyle={{zIndex: 999999}}/>
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
