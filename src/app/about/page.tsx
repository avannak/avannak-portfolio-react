/* eslint-disable react/no-unescaped-entities */
"use client";
import { useRef } from "react";
import FloatingComponent from "@/components/AnimatedComponents/FloatingComponent";
import RotatingCard from "@/components/AnimatedComponents/RotatingCard/RotatingCard";
import {
  faAws,
  faCss3,
  faGitAlt,
  faHtml5,
  faJs,
  faNodeJs,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
// import { Fade } from "react-awesome-reveal";
import { DiMongodb, DiResponsive } from "react-icons/di";
import { SiExpress, SiMysql, SiStyledcomponents } from "react-icons/si";
import akai from "../../assets/images/akai-pixel.png";
import artPixel from "../../assets/images/artpixel3.webp";
import dt990 from "../../assets/images/dt990-pixel.webp";
import helloPixel from "../../assets/images/hello.webp";
import typescript from "../../assets/images/icons/typescript.svg";
import macBook from "../../assets/images/macbook-pixel.webp";
import rodePixel from "../../assets/images/rode-pixel.png";
import rokit from "../../assets/images/rokit.webp";
import sg from "../../assets/images/sg-pixel.webp";
import volt from "../../assets/images/volt-pixel-rouge.png";
import Tooltip from "@/components/Tooltip/Tooltip";
import BackgroundOverlay from "@/components/BackgroundOverlay/BackgroundOverlay";
// import CustomCursor from "@/components/CustomCursor/CustomCursor";

type Props = {};

const AboutPage = (props: Props) => {
  return (
    <>
      {/* <CustomCursor /> */}
      <motion.div
        id="about-section"
        className="about-page-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "linear",
          duration: 0.3,
          x: { duration: 0.2 },
        }}
        exit={{ opacity: 0 }}
      >
        <BackgroundOverlay />
        {/* <Fade delay={500} cascade damping={1e-1} triggerOnce> */}
        <div className="header-title">
          <h1
            style={{
              color: "rgb(255, 255, 255)",
            }}
          >
            About Me 😎
          </h1>
          {/* <div className="title-divider" /> */}
          {/* <FaBarcode
            style={{ width: "180px", height: "1px" }}
            viewBox="100 0 500 150"
            className="barcode-icon"
            preserveAspectRatio="none"
          ></FaBarcode> */}
        </div>
        <div className="about-me-section">
          <div className="about-icons-column container">
            <div className="laptop-icon-container">
              {/* <Image id="matrix-bg" src={matrix} alt="matrix-pixel-bg"></Image> */}
              <div id="container-text">
                <span style={{ boxSizing: "border-box", padding: "1rem" }}>
                  <span id="text1">const</span>{" "}
                  <span id="dotlog">arthurGreetsYou</span>{" "}
                  <span id="text2">=</span> <span id="text3">(</span>
                  <span id="text4">guest</span>
                  <span id="text3">)</span> =&gt;{" "}
                </span>
                <span style={{ boxSizing: "border-box", padding: "1rem" }}>
                  {" "}
                  <span id="braces">&#123;</span>{" "}
                  <span id="return">return </span>
                  console.<span id="dotlog">log</span>(&quot;
                  <span id="pleased">pleased to meet you,</span>
                  &quot;, <span id="text4">guest</span>);{" "}
                  <span id="braces">&#125;</span>
                </span>
                <Image
                  id="macbook-img"
                  src={macBook}
                  alt="macbook-pixel"
                  height={367}
                  width={679}
                ></Image>
              </div>
            </div>
          </div>
          <div className="about-description-column container">
            <ul className="about-description-list">
              <li id="hello-emote-container">
                <Image
                  className="img"
                  src={artPixel}
                  alt="art-pixel"
                  height={97}
                  width={74}
                ></Image>
                <FloatingComponent>
                  <Image
                    className="img"
                    src={helloPixel}
                    alt="hello-pixel"
                    height={387}
                    width={451}
                  ></Image>
                </FloatingComponent>
              </li>
              <li>
                I am a recent graduate of San Francisco State University with a
              </li>

              <li>
                <span style={{ color: "rgb(196, 119, 255)" }}>
                  Bachelor's degree in Computer Science.
                </span>
              </li>
              <li>
                {" "}
                My dream is to share my creative vision and passion for web
                design and programming with others to create an extraordinary
                and visually pleasurable user experience.
              </li>
              <li>
                {" "}
                During my coding off-hours, I am a{" "}
                <i style={{ color: "rgb(165, 165, 255)" }}>
                  singer-songwriter
                </i>{" "}
                and{" "}
                <i style={{ color: "rgb(103, 205, 126)" }}>music producer</i>.
              </li>
            </ul>
            <span className="rokit-span">
              If interested, here is my music studio setup:{" "}
            </span>
          </div>
          <div className="rokit-container">
            <Tooltip content="Rode NT-2A">
              <Image
                id="rode-img"
                src={rodePixel}
                alt="rode-pixel"
                height={534}
                width={468}
              ></Image>
            </Tooltip>
            <Tooltip content="KRK Rokit G3">
              <Image
                id="rokit-img"
                src={rokit}
                alt="rokit-pixel"
                height={97}
                width={74}
              ></Image>
            </Tooltip>
            <Tooltip content="VOLT 2 Audio Interface">
              <Image
                id="volt-img"
                src={volt}
                alt="volt-pixel"
                height={318}
                width={786}
              ></Image>
            </Tooltip>
            <Tooltip content="AKAI MPK Mini">
              <Image
                id="akai-img"
                src={akai}
                alt="akai-pixel"
                height={318}
                width={786}
              ></Image>
            </Tooltip>
            <Tooltip content="Epiphone SG Cherry">
              <Image
                id="sg-img"
                src={sg}
                alt="sg-pixel"
                height={810}
                width={270}
              ></Image>
            </Tooltip>
            <Tooltip content="Beyerdynamic DDT 990">
              <Image
                id="dt990-img"
                src={dt990}
                alt="dt990-pixel"
                height={500}
                width={500}
              ></Image>
            </Tooltip>
          </div>
        </div>
        <div className="languages-section">
          {/* <Image
            id="gear-img"
            src={gear}
            alt="gear-pixel"
            height={408}
            width={630}
          ></Image> */}
          <div className="header-title">
            <h1 style={{ color: "rgb(255, 255, 255)" }}>Skills 🛠️🧰</h1>
            {/* <div className="title-divider" /> */}
            {/* <FaBarcode
              style={{ width: "180px", height: "1px" }}
              viewBox="100 0 500 150"
              className="barcode-icon"
              preserveAspectRatio="none"
            ></FaBarcode> */}
          </div>
          <div className="center">
            {" "}
            <span className="disclaimer">
              <span>See</span>
              <a href="/">resume</a>
              <span>for full list</span>
            </span>
          </div>
          <div className="language-container">
            <RotatingCard>
              <ul className="fed-languages-list">
                <li>
                  <FontAwesomeIcon className="font-awesome-icon" icon={faJs} />
                  <span>Javascript + ES6</span>
                </li>
                <li>
                  <Image
                    className="font-awesome-icon"
                    src={typescript}
                    alt="typescript"
                    height={200}
                    width={200}
                  />
                  <span>Typescript</span>
                </li>
                <li>
                  <FontAwesomeIcon
                    className="font-awesome-icon"
                    icon={faReact}
                  />
                  <span>React/Redux</span>
                </li>
                <li>
                  <FontAwesomeIcon
                    className="font-awesome-icon"
                    icon={faGitAlt}
                  />
                  <span>GIT</span>
                </li>
                <li>
                  <FontAwesomeIcon
                    className="font-awesome-icon"
                    icon={faShareNodes}
                  />
                  <span>REST APIs</span>
                </li>
                <li>
                  <DiResponsive className="font-awesome-icon" />
                  <span>Responsive Design</span>
                </li>
                <li>
                  <FontAwesomeIcon
                    className="font-awesome-icon"
                    icon={faHtml5}
                  />
                  <span>HTML5</span>
                </li>
                <li>
                  <FontAwesomeIcon
                    className="font-awesome-icon"
                    icon={faCss3}
                  />
                  <span>CSS3</span>
                </li>
                <li>
                  <FontAwesomeIcon
                    className="font-awesome-icon"
                    icon={faSass}
                  />
                  <span>Sass</span>
                </li>
                <li>
                  <SiStyledcomponents className="font-awesome-icon" />
                  <span>styled-components</span>
                </li>
                <div className="title-divider"></div>
                <li>
                  <FontAwesomeIcon className="font-awesome-icon" icon={faAws} />
                  <span>AWS</span>
                </li>
                <li>
                  <SiMysql className="font-awesome-icon" />
                  <span>MySQL</span>
                </li>
                <li>
                  <DiMongodb className="font-awesome-icon" />
                  <span>MongoDB</span>
                </li>
                <li>
                  <SiExpress className="font-awesome-icon" />
                  <span>Express.js</span>
                </li>
                <li>
                  <FontAwesomeIcon
                    className="font-awesome-icon"
                    icon={faNodeJs}
                  />
                  <span>Node.js</span>
                </li>
              </ul>
            </RotatingCard>
          </div>
        </div>
        {/* </Fade> */}
      </motion.div>
    </>
  );
};

export default AboutPage;
