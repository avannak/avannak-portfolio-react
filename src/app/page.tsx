"use client";
import BackgroundOverlay from "@/components/BackgroundOverlay/BackgroundOverlay";
import { useState } from "react";
import { UserContext } from "../context/user/UserContext";
import HomePage from "../pages/home/HomePage";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [storedScrollPos, setStoredScrollPos] = useState(0);
  const [height, setHeight] = useState<number>(0);
  const [navBarIsOn, setNavBarIsOn] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  console.log(showModal);
  return (
    <div className="app-container">
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
