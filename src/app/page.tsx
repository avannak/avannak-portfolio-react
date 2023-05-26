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
import AboutPage from "./about/page";
import ContactPage from "./contact/page";
import HomePage from "./home/HomePage";
import MyWorkPage from "./mywork/page";
import { backgroundStyle, imageStyle } from "./page/pageStyles";

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
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // TRACK MOUSE POSITION FOR VARIANTS
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const updateMousePos = (e: { clientX: any; clientY: any }) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", updateMousePos);

    return () => {
      document.removeEventListener("mousemove", updateMousePos);
    };
  }, []);

  // CURSOR CODE
  useEffect(() => {
    const moveCursor = (e: { clientX: number; clientY: number }) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

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
      alignItems: "center",
      justifyContent: "center",
      fontSize: "16px",
      backgroundColor: "#fefefe",
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    project: {
      opacity: 1,
      // backgroundColor: "rgba(255, 255, 255, 0.6)",
      mixBlendMode: "normal" as const,
      backgroundColor: "#72fda0ca",
      left: -135,
      top: -135,
      color: "#000000",
      height: 300,
      width: 300,
      fontSize: "18px",
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

  function projectEnter(event: any) {
    setCursorText("View Project");
    setCursorVariant("project");
  }

  function projectLeave(event: any) {
    setCursorText("");
    setCursorVariant("default");
  }

  function contactEnter(event: any) {
    setCursorText("👋");
    setCursorVariant("contact");
  }

  function contactLeave(event: any) {
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

  useEffect(() => {
    if (scrollPosition < height - 300 || scrollPosition < height) {
      setNavBarIsOn(false);
    } else {
      setNavBarIsOn(true);
    }
  }, [scrollPosition, height]);
  /* CODE FOR MODAL POSITIONING END */

  return (
    <div className="app-container">
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
        <MouseParallaxVideo id="particles-gif" src={stars4} />

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
            {showModal && <Modal scrollPosition={scrollPosition} />}
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
