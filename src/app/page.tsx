"use client";
import MouseParallaxImage from "@/components/AnimatedComponents/MouseParallaxImage/MouseParallaxImage";
import MouseParallaxVideo from "@/components/AnimatedComponents/MouseParallaxVideo";
import Modal from "@/components/Modal";
import NavBar from "@/components/NavBar/NavBar";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import space from "../assets/images/space.jpg";
import stars from "../assets/images/stars4.gif";
import stars4 from "../assets/videos/particles3.mp4";
import particles from "../assets/videos/particles5.mp4";
import { UserContext } from "../context/user/UserContext";
import AboutPage from "./about/page";
import ContactPage from "./contact/page";
import HomePage from "./home/HomePage";
import MyWorkPage from "./mywork/page";
import { backgroundStyle, imageStyle } from "./page/pageStyles";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [storedScrollPos, setStoredScrollPos] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [height, setHeight] = useState(0);
  const [navBarIsOn, setNavBarIsOn] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const homePageRef = useRef<HTMLDivElement | null>(null);

  const getScrollPosition = () => {
    return {
      x: window.pageXOffset || document.documentElement.scrollLeft,
      y: window.pageYOffset || document.documentElement.scrollTop,
    };
  };

  useEffect(() => {
    // console.log(
    //   "app loaded",
    //   "scroll Position is:",
    //   getScrollPosition().y,
    //   "height is: ",
    //   height
    // );
    const handleScroll = () => {
      const position = window.pageYOffset || document.documentElement.scrollTop;
      setStoredScrollPos(position);
    };
    if (storedScrollPos < height - 300 || getScrollPosition().y < height) {
      setNavBarIsOn(false);
    }
    if (storedScrollPos > height - 300 || getScrollPosition().y > height) {
      setNavBarIsOn(true);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [height, storedScrollPos]);

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
        {navBarIsOn && <NavBar />}
        <MouseParallaxImage
          id="space-pic"
          src={space}
          outerStyle={backgroundStyle}
          innerStyle={imageStyle}
          priority={true}
        ></MouseParallaxImage>
        <MouseParallaxImage
          id="stars-pic"
          src={stars}
          innerStyle={imageStyle}
          outerStyle={backgroundStyle}
          priority={true}
        ></MouseParallaxImage>
        <div id="parallax-overlay"></div>
        {/* <MouseParallaxImage
          id="city-pixel"
          src={cityPixel}
        ></MouseParallaxImage> */}
        <MouseParallaxVideo id="particles-video" src={particles} />
        <MouseParallaxVideo id="particles-gif" src={stars4} />

        <motion.div
          className="content-container"
          // initial={{ opacity: 0, skewX: 0, skewY: 0 }}
          // animate={{ opacity: 1, skewX: 0, skewY: 0 }}
        >
          {/* Home Section  */}
          <motion.section id="home-section">
            <div ref={homePageRef}>
              <HomePage />
            </div>
          </motion.section>
          {/* About Section */}
          <motion.section
            id="about-section"
            // initial={{ opacity: 0, skewX: 5, skewY: 5 }}
            // animate={{ opacity: 1, skewX: 0, skewY: -5 }}
          >
            <div id="code-pic-overlay"></div>
            <AboutPage />
          </motion.section>
          {/* Projects Section*/}
          <section id="mywork-section">
            {showModal && <Modal scrollPosition={scrollPosition}></Modal>}
            <MyWorkPage />
          </section>
          {/* Contact Me Section*/}
          <section id="contact-section">
            <ContactPage />
          </section>
        </motion.div>
      </UserContext.Provider>
    </div>
  );
};

export default App;
