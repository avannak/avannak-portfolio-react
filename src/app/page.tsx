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
import ContactPage from "../pages/contact/page";
import HomePage from "../pages/home/HomePage";
import MyWorkPage from "../pages/mywork/page";
import {
  backgroundStyle,
  imageStyle,
} from "../styles/ImageParallaxStyles/pageStyles/pageStyles.types";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [storedScrollPos, setStoredScrollPos] = useState(0);
  const [height, setHeight] = useState<number>(0);
  const [navBarIsOn, setNavBarIsOn] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const homePageRef = useRef<HTMLDivElement | null>(null);
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 50, stiffness: 800 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // CHECK IF MOBILE
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // Check if the code is running in a browser environment
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768);
    }
  }, []);

  // CURSOR CODE
  useEffect(() => {
    const moveCursor = (e: { clientX: number; clientY: number }) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    if (!isMobile) {
      window.addEventListener("mousemove", moveCursor);
    }

    return () => {
      if (!isMobile) {
        window.removeEventListener("mousemove", moveCursor);
      }
    };
  }, [cursorX, cursorY, isMobile]);

  const variants = {
    default: {
      display: "flex",
      zIndex: 999999,
      opacity: 1,
      mixBlendMode: "difference" as const,
      height: 24,
      width: 24,
      left: 4,
      top: 4,
      fontSize: "16px",
      backgroundColor: "#fefefe",
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    project: {
      display: "flex",
      opacity: 1,
      mixBlendMode: "normal" as const,
      backgroundColor: "#85dc8bdd",
      left: -75,
      top: -80,
      color: "#ffea70",
      textShadow: "0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black",
      height: 200,
      width: 200,
      fontSize: "20px",
      fontWeight: 900,
      // webkitTextStroke: "1px #000000",
    },
    contact: {
      opacity: 1,
      backgroundColor: "#FFBCBC",
      color: "#000",
      height: 64,
      width: 64,
      fontSize: "32px",
    },
  };

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28,
  };

  function projectEnter(e: any) {
    setCursorText("View Project 🔎");
    setCursorVariant("project");
  }

  function projectLeave(e: any) {
    setCursorText("");
    setCursorVariant("default");
  }

  function contactEnter(e: any) {
    setCursorText("👋");
    setCursorVariant("contact");
  }

  function contactLeave(e: any) {
    setCursorText("");
    setCursorVariant("default");
  }

  /* CODE BELOW FOR MODAL POSITIONING. Change at own risk. */
  const getScrollPosition = () => {
    return {
      x: window.pageXOffset || document.documentElement.scrollLeft,
      y: window.pageYOffset || document.documentElement.scrollTop,
    };
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos =
        window.pageYOffset || document.documentElement.scrollTop;
      const positionChanged = Math.abs(currentScrollPos - storedScrollPos) > 5; // Change this value as needed

      if (positionChanged) {
        setStoredScrollPos(currentScrollPos);

        if (currentScrollPos < height - 300) {
          setNavBarIsOn(false);
        } else if (currentScrollPos > height - 300) {
          setNavBarIsOn(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [height]); // Only re-run the effect if 'height' changes

  return (
    <div className="app-container">
      {!isMobile && (
        <motion.div
          className="cursor"
          style={{
            translateX: cursorXSpring,
            translateY: cursorYSpring,
          }}
          variants={variants}
          animate={cursorVariant}
          transition={spring}
        >
          <span className="cursorText">{cursorText}</span>
        </motion.div>
      )}
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
        ></MouseParallaxImage>
        <div id="parallax-overlay"></div>
        <MouseParallaxVideo id="particles-video" src={particles} />

        <motion.div className="content-container">
          <motion.section id="home-section">
            <div ref={homePageRef}>
              <HomePage />
            </div>
          </motion.section>
          <motion.section id="about-section">
            <div id="code-pic-overlay"></div>
            <AboutPage />
          </motion.section>
          <section id="mywork-section">
            <Modal scrollPosition={scrollPosition} />
            <MyWorkPage
              onMouseEnter={projectEnter}
              onMouseLeave={projectLeave}
            />
          </section>
          <section id="contact-section">
            <ContactPage />
          </section>
        </motion.div>
      </UserContext.Provider>
    </div>
  );
};

export default App;
