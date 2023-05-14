import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SiExpress, SiMysql } from "react-icons/si";
import { DiMongodb, DiResponsive } from "react-icons/di";
import { TbMicrophone2 } from "react-icons/tb";
import { BsGear } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { GiLaptop } from "react-icons/gi";
import { FaBarcode } from "react-icons/fa";
import {
  faJs,
  faNodeJs,
  faReact,
  faHtml5,
  faGitAlt,
  faAws,
  faCss3,
} from "@fortawesome/free-brands-svg-icons";
import typescript from "../../assets/images/icons/typescript.svg";
import {
  faShareNodes,
  faMusic,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

type Props = {};

const AboutPage = (props: Props) => {
  return (
    <div id="about-section" className="about-page-container">
      <Image
        id="cave-pic"
        src={"/rocky-wall.png"}
        alt=""
        height={3024}
        width={4032}
      ></Image>
      <div className="header-title">
        <h1>About Me</h1>
        <div className="title-divider" />
        <FaBarcode
          style={{ width: "200px", height: "20px" }}
          viewBox="0 0 500 150"
          className="icon"
          preserveAspectRatio="none"
        ></FaBarcode>
      </div>
      <div className="about-me-section">
        <div className="about-icons-column container">
          <div className="laptop-icon-container">
            <GiLaptop className="font-awesome-icon laptop" />
            <div className="font-awesome-icon laptop-icons">
              <FontAwesomeIcon
                className="font-awesome-icon music"
                icon={faMusic}
              ></FontAwesomeIcon>
              <TbMicrophone2 className="font-awesome-icon microphone"></TbMicrophone2>
              <FontAwesomeIcon
                className="font-awesome-icon code"
                icon={faCode}
              ></FontAwesomeIcon>
              <div className="box one">
                <BsGear className="font-awesome-icon gear"></BsGear>
                <CgWebsite className="font-awesome-icon website"></CgWebsite>
              </div>
            </div>
          </div>
        </div>
        <div className="about-description-column container">
          <ul id="aboutdescription">
            <li>
              👋 I am a recent graduate of San Francisco State University with a{" "}
              <span style={{ color: "rgb(255, 255, 113)" }}>
                Bachelor's degree in Computer Science.
              </span>{" "}
            </li>
            <li>
              {" "}
              My dream is to share my creative vision and passion for web design
              and programming with others to create an extraordinary and
              visually pleasurable user experience.
            </li>
            <li>
              {" "}
              During my coding off-hours, I am a{" "}
              <i style={{ color: "rgb(136, 146, 255)" }}>
                singer-songwriter
              </i>{" "}
              and <i style={{ color: "rgb(103, 205, 126)" }}>music producer</i>.
            </li>
          </ul>
        </div>
      </div>
      <div className="languages-section">
        <div className="header-title">
          <h1>Skills</h1>
          <div className="title-divider" />
          <FaBarcode
            style={{ width: "200px", height: "20px" }}
            viewBox="0 0 500 150"
            className="icon"
            preserveAspectRatio="none"
          ></FaBarcode>
          <span className="disclaimer">
            <span>(see</span>
            <a href="/">resume</a>
            <span>for full list)</span>
          </span>
        </div>
        <div className="language-container">
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
              <FontAwesomeIcon className="font-awesome-icon" icon={faHtml5} />
              <span>HTML5</span>
            </li>
            <li>
              <FontAwesomeIcon className="font-awesome-icon" icon={faCss3} />
              <span>CSS3</span>
            </li>
            <li>
              <FontAwesomeIcon className="font-awesome-icon" icon={faReact} />
              <span>React/Redux</span>
            </li>
            <li>
              <FontAwesomeIcon className="font-awesome-icon" icon={faGitAlt} />
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
          </ul>
          <ul className="bed-languages-list">
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
              <FontAwesomeIcon className="font-awesome-icon" icon={faNodeJs} />
              <span>Node.js</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
