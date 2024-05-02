"use client";
import Header from "@/components/Header";
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Image from "next/image";
import codePixel from "public/images/code-pixel.webp";
import cog from "public/images/cog-pixel.svg";
import musicNote from "public/images/music-note-blue.webp";
import FloatingComponent from "./AnimatedComponents/FloatingComponent";
import TypewriterEffect from "./AnimatedComponents/TypewriterEffect";
import StyledButton from "./Button/StyledButton";

const NavMenu = ({ setActiveRoute }: any) => {
  return (
    <div className="nav-menu">
      <div className="nav-menu-container">
        <motion.div
          className="title-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "linear",
            duration: 1,
            x: { duration: 0.3 },
            delay: 0.4,
          }}
        >
          <div className="occupation-container">
            <div className="top">
              <FloatingComponent>
                <TypewriterEffect
                  className="name"
                  propText="Arthur Vannakittikun"
                  triggerInstant={true}
                ></TypewriterEffect>
              </FloatingComponent>
            </div>
            <div className="bottom">
              <motion.div
                className="title sect1"
                initial={{ opacity: 0, translateY: 0 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  ease: "linear",
                  duration: 1,
                  x: { duration: 0.3 },
                  delay: 0.8,
                }}
              >
                <Image
                  id="cog-img"
                  src={cog}
                  alt="cog"
                  height={500}
                  width={500}
                ></Image>
                <Image
                  id="code-pixel-img"
                  src={codePixel}
                  alt="code-pixel"
                  height={641}
                  width={810}
                ></Image>
                <span id="front-end">Software Engineer</span>
                <br />
              </motion.div>
              <motion.span
                className="title sect1"
                initial={{ opacity: 0, translateY: 0 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  ease: "linear",
                  duration: 1,
                  x: { duration: 0.3 },
                  delay: 0.8,
                }}
              >
                <span id="amper">&</span>
              </motion.span>
              <motion.div
                className="title sect2"
                initial={{ opacity: 0, translateY: 0 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  ease: "linear",
                  duration: 1,
                  x: { duration: 0.3 },
                  delay: 0.8,
                }}
              >
                <span id="artist">Artist</span>
                <Image
                  id="music-note-img"
                  src={musicNote}
                  alt="music-note"
                  height={270}
                  width={190}
                ></Image>
              </motion.div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="nav-container"
          initial={{ opacity: 0, translateY: 50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            ease: "linear",
            duration: 1,
            x: { duration: 0.3 },
            delay: 0.8,
          }}
        >
          <motion.div
            className="nav-background"
            initial={{ opacity: 0.8, translateY: 50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              ease: "linear",
              duration: 1,
              x: { duration: 0.3 },
              delay: 0.8,
            }}
          ></motion.div>
          <div className="nav-selections-container">
            <Header></Header>
            <motion.ul
              className="nav-selections"
              initial={{ opacity: 0, translateX: -50 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 1.5, delay: 0.8 }}
            >
              <li>
                <div id="start-link" onClick={() => setActiveRoute("about")}>
                  <FloatingComponent floatStyle="floatX">
                    <FontAwesomeIcon
                      id="hand-pointer"
                      icon={faHandPointRight}
                      style={{ marginRight: 15 }}
                    />
                  </FloatingComponent>
                  <p id="about-me-link">Start: About Me</p>
                </div>
              </li>
              <li>
                <StyledButton text="Download Resume" downloadResume fileIcon />
              </li>
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NavMenu;
