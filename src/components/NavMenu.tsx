import Header from "@/components/Header";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Link } from "react-scroll";
import codeAnim from "../assets/images/code-anim6.gif";
import codePixel from "../assets/images/code-pixel.png";
import cog from "../assets/images/cog-pixel.png";
import musicNote from "../assets/images/music-note-blue.png";
import FloatingComponent from "./AnimatedComponents/FloatingComponent";
import TypewriterEffect from "./AnimatedComponents/TypewriterEffect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faCaretDown } from "@fortawesome/free-solid-svg-icons";

type Props = {};

const NavMenu = (props: Props) => {
  let ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  let opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  return (
    <div className="nav-menu">
      <Image className="bg-code" src={codeAnim} alt="codeStaticLayer" />
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
          {/* <h1 className="name">
            Arthur <br /> Vannakittikun
          </h1> */}
          <FloatingComponent>
            {" "}
            <TypewriterEffect
              className="name"
              propText="Arthur Vannakittikun"
              // triggerSections={["#home-section"]}
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
              ></Image>{" "}
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
            style={{ opacity }}
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
                <Link
                  activeClass="active"
                  to="about-section"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="mywork-section"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="contact-section"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  Contact
                </Link>
              </li>
              <li> </li>
            </motion.ul>
            <div className="download-resume-wrapper">
              <button className="pushable">
                <span className="shadow"></span>
                <span className="edge"></span>
                <span className="front">Download Resume</span>
              </button>
            </div>
          </div>
          <Link
            activeClass="active"
            to="about-section"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <FloatingComponent>
              <div className="scroll-down-tip">
                <FontAwesomeIcon icon={faCaretDown} id="angle-down-icon" />
                <span>Scroll Down for About Me</span>
              </div>
            </FloatingComponent>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NavMenu;
