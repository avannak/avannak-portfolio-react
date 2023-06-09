/* eslint-disable react/no-unescaped-entities */
"use client";
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
import {
  faHome,
  faLeftLong,
  faRightLong,
  faRotateBack,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Image from "next/image";
import BackgroundOverlay from "@/components/BackgroundOverlay/BackgroundOverlay";
import Tooltip from "@/components/Tooltip/Tooltip";
import Link from "next/link";
import { DiMongodb, DiResponsive } from "react-icons/di";
import { SiExpress, SiMysql, SiStyledcomponents } from "react-icons/si";
import akai from "../../assets/images/akai-pixel.png";
import artPixel from "../../assets/images/artpixel2.webp";
import dt990 from "../../assets/images/dt990-pixel.webp";
import helloPixel from "../../assets/images/hello.webp";
import smileyGlasses from "../../assets/images/smiley-glasses2.webp";
import toolKit from "../../assets/images/toolkit.webp";
import typescript from "../../assets/images/icons/typescript.svg";
import macBook from "../../assets/images/macbook-pixel.webp";
import rodePixel from "../../assets/images/rode-pixel.png";
import rokit from "../../assets/images/rokit.webp";
import sg from "../../assets/images/sg-pixel.webp";
import volt from "../../assets/images/volt-pixel-rouge.png";
import { useContext, useState, useEffect, CSSProperties } from "react";
import Loader from "@/components/Loaders/Loader";
import { PacmanLoader } from "react-spinners";
import { css } from "@emotion/react";
import useLoading from "@/hooks/useLoading";
import { useSelector } from "react-redux";
import { RootState } from "../GlobalRedux/types";
import { useImageLoading } from "@/hooks/useImagesLoaded";

type Props = {};

const AboutPage = (props: Props) => {
  const isLoading = useLoading();
  const parallaxIsOn = useSelector(
    (state: RootState) => state.parallax?.parallaxIsOn
  );

  const images = [
    akai,
    artPixel,
    dt990,
    helloPixel,
    smileyGlasses,
    toolKit,
    typescript,
    macBook,
    rodePixel,
    rokit,
    sg,
    volt,
  ];

  const imagesLoaded = useImageLoading(images);

  return (
    <>
      {!imagesLoaded ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "#0f0f14",
          }}
        >
          <PacmanLoader
            color="#ffffff"
            loading
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
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
          <section className="about-me-section">
            {parallaxIsOn && <BackgroundOverlay parallax />}
            {!parallaxIsOn && <BackgroundOverlay />}
            <div className="header-title navigation">
              <Link href="/" className="link" style={{ width: "100%" }}>
                <div className="icon-container">
                  <FontAwesomeIcon
                    className="icon"
                    icon={faHome}
                  ></FontAwesomeIcon>
                  <span>Home</span>
                </div>
              </Link>
              <h1
                style={{
                  color: "rgb(255, 255, 255)",
                  margin: "5px 15px 5px 15px",
                  width: "100%",
                }}
              >
                About Me <br />
                <Image
                  src={smileyGlasses}
                  alt="smiley"
                  height={60}
                  width={60}
                  style={{ margin: 5, objectFit: "contain" }}
                  placeholder="blur"
                />
              </h1>
              <Link href="/projects" className="link" style={{ width: "100%" }}>
                <div className="icon-container">
                  <FontAwesomeIcon
                    className="icon"
                    icon={faRightLong}
                  ></FontAwesomeIcon>
                  <span>Projects</span>
                </div>
              </Link>
            </div>
            <div className="about-icons-column container">
              <div className="laptop-icon-container">
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
                    placeholder="blur"
                  ></Image>
                </div>
              </div>
            </div>
            <div className="about-description-column container">
              <ul className="about-description-list">
                <li id="hello-emote-container">
                  <Image className="img" src={artPixel} alt="art-pixel"></Image>
                  <FloatingComponent>
                    <Image
                      className="img"
                      src={helloPixel}
                      alt="hello-pixel"
                      height={387}
                      width={451}
                      placeholder="blur"
                    ></Image>
                  </FloatingComponent>
                </li>
                <li>
                  I am a recent graduate of San Francisco State University with
                  a
                </li>

                <li>
                  <span style={{ color: "rgb(196, 119, 255)" }}>
                    Bachelor's degree in Computer Science.
                  </span>
                </li>
                <li>
                  My professional journey is driven by a burning passion for web
                  design and programming, and I strive to bring forth my
                  creative vision to create exceptional and visually captivating
                  user experiences.
                  <br />
                  <br />
                  With a keen interest in{" "}
                  <i style={{ color: "rgb(60, 148, 255)" }}>
                    full-stack software development
                  </i>
                  , I am committed to leveraging my skills and knowledge to
                  craft robust and innovative applications.
                </li>
                <li>
                  {" "}
                  Beyond coding, I am also a{" "}
                  <i style={{ color: "rgb(165, 165, 255)" }}>
                    singer-songwriter
                  </i>{" "}
                  and{" "}
                  <i style={{ color: "rgb(103, 205, 126)" }}>music producer</i>,
                  exploring my artistic side during my off-hours.
                </li>
                <li>
                  <span
                    className="rokit-span"
                    style={{ color: "rgb(255, 139, 240)" }}
                  >
                    If curious, here is my music studio setup:{" "}
                  </span>
                </li>
              </ul>
            </div>
            <div className="rokit-container">
              <Tooltip content="Rode NT-2A">
                <Image
                  id="rode-img"
                  src={rodePixel}
                  alt="rode-pixel"
                  height={534}
                  width={468}
                  placeholder="blur"
                ></Image>
              </Tooltip>
              <Tooltip content="KRK Rokit G3">
                <Image
                  id="rokit-img"
                  src={rokit}
                  alt="rokit-pixel"
                  height={97}
                  width={74}
                  placeholder="blur"
                ></Image>
              </Tooltip>
              <Tooltip content="VOLT 2 Audio Interface">
                <Image
                  id="volt-img"
                  src={volt}
                  alt="volt-pixel"
                  height={318}
                  width={786}
                  placeholder="blur"
                ></Image>
              </Tooltip>
              <Tooltip content="AKAI MPK Mini">
                <Image
                  id="akai-img"
                  src={akai}
                  alt="akai-pixel"
                  height={318}
                  width={786}
                  placeholder="blur"
                ></Image>
              </Tooltip>
              <Tooltip content="Epiphone SG Cherry">
                <Image
                  id="sg-img"
                  src={sg}
                  alt="sg-pixel"
                  height={810}
                  width={270}
                  placeholder="blur"
                ></Image>
              </Tooltip>
              <Tooltip content="Beyerdynamic DDT 990">
                <Image
                  id="dt990-img"
                  src={dt990}
                  alt="dt990-pixel"
                  height={500}
                  width={500}
                  placeholder="blur"
                ></Image>
              </Tooltip>
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
                <h1 style={{ color: "rgb(255, 255, 255)" }}>
                  Skills <br />
                  <Image
                    src={toolKit}
                    alt="toolkit"
                    height={100}
                    width={100}
                    style={{ margin: 5, objectFit: "contain" }}
                    placeholder="blur"
                  />
                </h1>
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
                  <span>Download</span>
                  <a href="/documents/arthurvresume.pdf" download>
                    resume
                  </a>
                  <span>for full list</span>
                </span>
              </div>
              <div className="language-container">
                <RotatingCard>
                  <ul className="fed-languages-list">
                    <li>
                      <FontAwesomeIcon
                        className="font-awesome-icon"
                        icon={faJs}
                      />
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
                      <FontAwesomeIcon
                        className="font-awesome-icon"
                        icon={faAws}
                      />
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
          </section>
        </motion.div>
      )}
    </>
  );
};

export default AboutPage;
