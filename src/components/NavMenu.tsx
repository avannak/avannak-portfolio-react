"use client";
import Header from "@/components/Header";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useContext, useRef } from "react";
// import codeAnim from "../assets/images/code-anim6.gif";
import Link from "next/link";
import codePixel from "../assets/images/code-pixel.webp";
import cog from "../assets/images/cog-pixel.png";
import musicNote from "../assets/images/music-note-blue.webp";
import FloatingComponent from "./AnimatedComponents/FloatingComponent";
import TypewriterEffect from "./AnimatedComponents/TypewriterEffect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import { GlobalContext } from "@/context/global/GlobalContext";
import ReactSwitch from "react-switch";
import { isMobileDevice, useIsMobile } from "../utils/isMobileDevice";
import StyledButton from "./Button/StyledButton";

type Props = {};

const NavMenu = (props: Props) => {
  return (
    <div className="nav-menu">
      {/* <Image className="bg-code" src={codeAnim} alt="codeStaticLayer" /> */}
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
          <FloatingComponent>
            <TypewriterEffect
              className="name"
              propText="Arthur Vannakittikun"
              triggerInstant={true}
            ></TypewriterEffect>
          </FloatingComponent>
          <div className="occupation-container">
            <motion.div
              className="title sect1"
              initial={{ opacity: 0, translateY: 50 }}
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
              <span id="front-end">Front-end Engineer</span>
              <br />
            </motion.div>
            <motion.span
              className="title sect1"
              initial={{ opacity: 0, translateY: 50 }}
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
              initial={{ opacity: 0, translateY: 50 }}
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
        </motion.div>
        <motion.div
          // style={{ opacity }}
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
                <Link href="/about">
                  <FloatingComponent floatStyle="floatX">
                    <FontAwesomeIcon
                      icon={faHandPointRight}
                      style={{ marginRight: 15 }}
                    />
                  </FloatingComponent>
                  <p>Start</p>
                </Link>
              </li>
              <li>
                <StyledButton text="Download Resume" />
              </li>
              {/* {!isMobile && (
                <>
                  <div className="toggle-container">
                    <div className="text-container" style={{ marginRight: 15 }}>
                      <p>
                        Parallax effect: <br />
                      </p>
                      <p style={{ fontSize: "0.8em" }}>
                        (Turn off if page is slow)
                      </p>
                    </div>
                    <ReactSwitch
                      onChange={() => {
                        setParallaxIsOn(!parallaxIsOn);
                      }}
                      checked={parallaxIsOn}
                    />
                  </div>
                </>
              )} */}
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NavMenu;
