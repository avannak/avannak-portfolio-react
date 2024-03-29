/* eslint-disable react/no-unescaped-entities */
"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { CgClose, CgYoutube } from "react-icons/cg";
import { DiGoogleCloudPlatform, DiMongodb } from "react-icons/di";
import { FaCss3, FaReact, FaYoutube } from "react-icons/fa";
import {
  SiAmazonaws,
  SiExpress,
  SiFirebase,
  SiHtml5,
  SiJavascript,
  SiJquery,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiReactquery,
  SiStyledcomponents,
  SiTypescript,
} from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import prodyoutive from "../../assets/images/prodyoutive_channels.webp";
import bstocktradein from "../../assets/images/bstock-trade-in.webp";
import gatormedia from "../../assets/images/gatormedia.webp";
import musicplayer from "../../assets/images/musicplayer.webp";
import rapidhealth from "../../assets/images/rapidhealth.webp";
import financy from "../../assets/images/financy.png";
import tailwind from "../../assets/images/icons/tailwind.png";

type Props = {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  modalType: string;
  onClose?: any;
};

const Modal = (props: Props) => {
  const [iconText, setIconText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const iconTextStyles = { opacity: isHovered ? 1 : 0 };

  return (
    <>
      <div className="modal-container">
        <div
          className="overlay"
          onClick={() => {
            props.setShowModal(!props.showModal);
          }}
        />
        <AnimatePresence>
          <motion.dialog
            className="dialog-box"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClose={() => {
              props.setShowModal(!props.showModal);
            }}
          >
            {props.modalType === "item1" && (
              <div className="content">
                <div className="image-container">
                  <Image
                    className="image"
                    src={gatormedia}
                    alt="gatormedia pic"
                  ></Image>
                </div>
                <div className="description-container">
                  <h1>Gatormedia</h1>
                  <div className="stack-container">
                    <span className="title">Built With:</span>
                    <div className="stack">
                      <div className="fed">
                        <SiJavascript
                          className="icon"
                          onMouseEnter={() => {
                            setIconText("Javascript");
                            setIsHovered(true);
                          }}
                          onMouseLeave={() => {
                            setIsHovered(false);
                          }}
                        ></SiJavascript>
                        <FaReact
                          className="icon"
                          onMouseEnter={() => {
                            setIconText("React");
                            setIsHovered(true);
                          }}
                          onMouseLeave={() => {
                            setIsHovered(false);
                          }}
                        ></FaReact>
                        <SiReactquery
                          className="icon"
                          onMouseEnter={() => {
                            setIconText("react-query");
                            setIsHovered(true);
                          }}
                          onMouseLeave={() => {
                            setIsHovered(false);
                          }}
                        ></SiReactquery>
                        <TiHtml5
                          className="icon"
                          onMouseEnter={() => {
                            setIconText("HTML");
                            setIsHovered(true);
                          }}
                          onMouseLeave={() => {
                            setIsHovered(false);
                          }}
                        ></TiHtml5>
                        <FaCss3
                          className="icon"
                          onMouseEnter={() => {
                            setIconText("CSS");
                            setIsHovered(true);
                          }}
                          onMouseLeave={() => {
                            setIsHovered(false);
                          }}
                        ></FaCss3>
                        <SiStyledcomponents
                          className="icon"
                          onMouseEnter={() => {
                            setIconText("styled-components");
                            setIsHovered(true);
                          }}
                          onMouseLeave={() => {
                            setIsHovered(false);
                          }}
                        ></SiStyledcomponents>
                      </div>
                      <div className="bed">
                        <SiAmazonaws
                          className="icon"
                          onMouseEnter={() => {
                            setIconText("AWS EC2");
                            setIsHovered(true);
                          }}
                          onMouseLeave={() => {
                            setIsHovered(false);
                          }}
                        ></SiAmazonaws>

                        <SiNodedotjs
                          className="icon"
                          onMouseEnter={() => {
                            setIconText("Node.js");
                            setIsHovered(true);
                          }}
                          onMouseLeave={() => {
                            setIsHovered(false);
                          }}
                        ></SiNodedotjs>
                        <SiExpress
                          className="icon"
                          onMouseEnter={() => {
                            setIconText("Express.js");
                            setIsHovered(true);
                          }}
                          onMouseLeave={() => {
                            setIsHovered(false);
                          }}
                        ></SiExpress>
                        <SiMysql
                          className="icon"
                          onMouseEnter={() => {
                            setIconText("MySQL");
                            setIsHovered(true);
                          }}
                          onMouseLeave={() => {
                            setIsHovered(false);
                          }}
                        ></SiMysql>
                      </div>
                    </div>
                    <div className="hover-icon-box">
                      <span style={iconTextStyles} className="icon-text">
                        {iconText && iconText}
                      </span>
                    </div>
                  </div>
                  <p>
                    Worked in a team of six as the front-end lead to develop a
                    UX friendly file upload/share application geared towards San
                    Francisco State University faculty and students.
                  </p>
                </div>
              </div>
            )}
            {props.modalType === "item2" && (
              <div className="content">
                <div className="image-container">
                  <Image
                    className="image"
                    src={rapidhealth}
                    alt="rapidhealth pic"
                  ></Image>
                </div>
                <div className="description-container">
                  <h1>RapidHealth</h1>
                  <div className="stack-container">
                    <span className="title">Built With:</span>
                    <div className="stack">
                      <div className="fed">
                        <SiJavascript
                          className="icon"
                          onMouseEnter={() => {
                            setIconText("Javascript");
                            setIsHovered(true);
                          }}
                          onMouseLeave={() => {
                            setIsHovered(false);
                          }}
                        ></SiJavascript>
                        <TiHtml5
                          className="icon"
                          onMouseEnter={() => {
                            setIconText("HTML");
                            setIsHovered(true);
                          }}
                          onMouseLeave={() => {
                            setIsHovered(false);
                          }}
                        ></TiHtml5>
                        <FaCss3
                          className="icon"
                          onMouseEnter={() => {
                            setIconText("CSS");
                            setIsHovered(true);
                          }}
                          onMouseLeave={() => {
                            setIsHovered(false);
                          }}
                        ></FaCss3>
                        <SiStyledcomponents
                          className="icon"
                          onMouseEnter={() => {
                            setIconText("styled-components");
                            setIsHovered(true);
                          }}
                          onMouseLeave={() => {
                            setIsHovered(false);
                          }}
                        ></SiStyledcomponents>
                      </div>
                      <div className="bed">
                        <DiGoogleCloudPlatform
                          className="icon"
                          onMouseEnter={() => {
                            setIconText("Google App Engine");
                            setIsHovered(true);
                          }}
                          onMouseLeave={() => {
                            setIsHovered(false);
                          }}
                        ></DiGoogleCloudPlatform>

                        <SiNodedotjs
                          className="icon"
                          onMouseEnter={() => {
                            setIconText("Node.js");
                            setIsHovered(true);
                          }}
                          onMouseLeave={() => {
                            setIsHovered(false);
                          }}
                        ></SiNodedotjs>
                        <SiExpress
                          className="icon"
                          onMouseEnter={() => {
                            setIconText("Express.js");
                            setIsHovered(true);
                          }}
                          onMouseLeave={() => {
                            setIsHovered(false);
                          }}
                        ></SiExpress>
                      </div>
                    </div>
                    <div className="hover-icon-box">
                      <span style={iconTextStyles} className="icon-text">
                        {iconText && iconText}
                      </span>
                    </div>
                  </div>
                  <p>
                    Entered a virtual hackathon competition with 700+
                    contestants and collaborated with 4 other team members.
                    <br />
                    <br />
                    This app sends you SMS and email notifications using
                    Notivize, a notification API, and alerts you whenever the
                    number of COVID-19 cases increases or decreases in your
                    area.
                    <br />
                    <br />
                    Our project won an honor award for best use of Notivize's
                    API in March, 2021.
                  </p>
                  <a href="https://devpost.com/software/sf-hacks-team">
                    <button className="pushable">
                      <span className="shadow"></span>
                      <span className="edge blue"></span>
                      <span className="front blue">View Website</span>
                    </button>
                  </a>
                </div>
              </div>
            )}
            {props.modalType === "item3" && (
              <div className="content">
                <div className="image-container">
                  <Image
                    className="image bstock"
                    src={bstocktradein}
                    alt="bstocktradein pic"
                  ></Image>
                </div>
                <div className="description-container">
                  <h1>B-Stock Phone Trade-in App</h1>
                  <div className="stack-container">
                    <span className="title">Built With:</span>
                    <div className="stack">
                      <div className="fed">
                        <SiTypescript
                          className="icon"
                          onMouseEnter={() => {
                            setIconText("Typescript");
                            setIsHovered(true);
                          }}
                          onMouseLeave={() => {
                            setIsHovered(false);
                          }}
                        ></SiTypescript>
                        <SiJavascript
                          className="icon"
                          onMouseEnter={() => {
                            setIconText("Javascript");
                            setIsHovered(true);
                          }}
                          onMouseLeave={() => {
                            setIsHovered(false);
                          }}
                        ></SiJavascript>
                        <FaReact
                          className="icon"
                          onMouseEnter={() => {
                            setIconText("React");
                            setIsHovered(true);
                          }}
                          onMouseLeave={() => {
                            setIsHovered(false);
                          }}
                        ></FaReact>
                        <TiHtml5
                          className="icon"
                          onMouseEnter={() => {
                            setIconText("HTML");
                            setIsHovered(true);
                          }}
                          onMouseLeave={() => {
                            setIsHovered(false);
                          }}
                        ></TiHtml5>
                        <FaCss3
                          className="icon"
                          onMouseEnter={() => {
                            setIconText("CSS");
                            setIsHovered(true);
                          }}
                          onMouseLeave={() => {
                            setIsHovered(false);
                          }}
                        ></FaCss3>
                        <SiStyledcomponents
                          className="icon"
                          onMouseEnter={() => {
                            setIconText("styled-components");
                            setIsHovered(true);
                          }}
                          onMouseLeave={() => {
                            setIsHovered(false);
                          }}
                        ></SiStyledcomponents>
                      </div>
                      <div className="bed">
                        <SiAmazonaws
                          className="icon"
                          onMouseEnter={() => {
                            setIconText("AWS EC2");
                            setIsHovered(true);
                          }}
                          onMouseLeave={() => {
                            setIsHovered(false);
                          }}
                        ></SiAmazonaws>

                        <SiNodedotjs
                          className="icon"
                          onMouseEnter={() => {
                            setIconText("Node.js");
                            setIsHovered(true);
                          }}
                          onMouseLeave={() => {
                            setIsHovered(false);
                          }}
                        ></SiNodedotjs>
                        <SiExpress
                          className="icon"
                          onMouseEnter={() => {
                            setIconText("Express.js");
                            setIsHovered(true);
                          }}
                          onMouseLeave={() => {
                            setIsHovered(false);
                          }}
                        ></SiExpress>
                        <SiMysql
                          className="icon"
                          onMouseEnter={() => {
                            setIconText("MySQL");
                            setIsHovered(true);
                          }}
                          onMouseLeave={() => {
                            setIsHovered(false);
                          }}
                        ></SiMysql>
                      </div>
                    </div>
                    <div className="hover-icon-box">
                      <span style={iconTextStyles} className="icon-text">
                        {iconText && iconText}
                      </span>
                    </div>
                  </div>
                  <p>
                    Created the front-end of a phone trade-in application during
                    my Software internship at B-Stock Solutions alongside summer
                    teammates and team leads. <br />
                    <br /> This application currently allows you to enter
                    details about your phone and get back an estimated phone
                    grade and price.
                  </p>
                  <a href="http://ec2-50-18-97-37.us-west-1.compute.amazonaws.com/">
                    {/* <span className="button">View Website</span> */}
                  </a>
                </div>
              </div>
            )}
            {props.modalType === "item4" && (
              <div className="content">
                <div className="image-container">
                  <Image
                    className="image"
                    src={financy}
                    alt="financy pic"
                  ></Image>
                </div>
                <div className="description-container">
                  <h1>Fi.nancy: Finance Tracker</h1>
                  <div className="stack-container">
                    <span className="title">Built With:</span>
                    <div className="stack">
                      <div className="fed">
                        <SiTypescript
                          className="icon"
                          onMouseEnter={() => {
                            setIconText("Typescript");
                            setIsHovered(true);
                          }}
                          onMouseLeave={() => {
                            setIsHovered(false);
                          }}
                        ></SiTypescript>
                        <SiJavascript
                          className="icon"
                          onMouseEnter={() => {
                            setIconText("Javascript");
                            setIsHovered(true);
                          }}
                          onMouseLeave={() => {
                            setIsHovered(false);
                          }}
                        ></SiJavascript>
                        <TiHtml5
                          className="icon"
                          onMouseEnter={() => {
                            setIconText("HTML");
                            setIsHovered(true);
                          }}
                          onMouseLeave={() => {
                            setIsHovered(false);
                          }}
                        ></TiHtml5>
                        <Image
                          className="icon"
                          src={tailwind}
                          alt="tailwind"
                          onMouseEnter={() => {
                            setIconText("Tailwind CSS");
                            setIsHovered(true);
                          }}
                          onMouseLeave={() => {
                            setIsHovered(false);
                          }}
                        ></Image>
                        <FaCss3
                          className="icon"
                          onMouseEnter={() => {
                            setIconText("CSS");
                            setIsHovered(true);
                          }}
                          onMouseLeave={() => {
                            setIsHovered(false);
                          }}
                        ></FaCss3>
                      </div>
                      <div className="bed">
                        <SiNextdotjs
                          className="icon"
                          onMouseEnter={() => {
                            setIconText("Next.js");
                            setIsHovered(true);
                          }}
                          onMouseLeave={() => {
                            setIsHovered(false);
                          }}
                        ></SiNextdotjs>
                        <SiFirebase
                          className="icon"
                          onMouseEnter={() => {
                            setIconText("Firebase");
                            setIsHovered(true);
                          }}
                          onMouseLeave={() => {
                            setIsHovered(false);
                          }}
                        ></SiFirebase>
                        <SiNodedotjs
                          className="icon"
                          onMouseEnter={() => {
                            setIconText("Node.js");
                            setIsHovered(true);
                          }}
                          onMouseLeave={() => {
                            setIsHovered(false);
                          }}
                        ></SiNodedotjs>
                      </div>
                    </div>
                    <div className="hover-icon-box">
                      <span style={iconTextStyles} className="icon-text">
                        {iconText && iconText}
                      </span>
                    </div>
                  </div>
                  <p>
                    The application utilizes Chart.js to deliver informative
                    analytics and visual representations, promoting wise
                    spending practices and effective budget management.
                    <br />
                    <br />
                    Additionally, it employs Google Authentication to provide
                    users with a secure and convenient sign-in experience.
                    <br />
                  </p>
                  <a href="https://finance-tracking-app.vercel.app/">
                    <button className="pushable">
                      <span className="shadow"></span>
                      <span className="edge blue"></span>
                      <span className="front blue">View Website</span>
                    </button>
                  </a>
                </div>
              </div>
            )}
            {props.modalType === "item5" && (
              <div className="content">
                <div className="image-container">
                  <Image
                    className="image"
                    src={prodyoutive}
                    alt="prodyoutive pic"
                  ></Image>
                </div>
                <div className="description-container">
                  <h1>ProdYouTive: YouTube Productivity Optimizer</h1>
                  <div className="stack-container">
                    <span className="title">Built With:</span>
                    <div className="stack">
                      <div className="fed">
                        <SiJavascript
                          className="icon"
                          onMouseEnter={() => {
                            setIconText("Javascript");
                            setIsHovered(true);
                          }}
                          onMouseLeave={() => {
                            setIsHovered(false);
                          }}
                        ></SiJavascript>
                        <TiHtml5
                          className="icon"
                          onMouseEnter={() => {
                            setIconText("HTML");
                            setIsHovered(true);
                          }}
                          onMouseLeave={() => {
                            setIsHovered(false);
                          }}
                        ></TiHtml5>
                        <FaCss3
                          className="icon"
                          onMouseEnter={() => {
                            setIconText("CSS");
                            setIsHovered(true);
                          }}
                          onMouseLeave={() => {
                            setIsHovered(false);
                          }}
                        ></FaCss3>
                      </div>
                      <div className="bed">
                        <SiNodedotjs
                          className="icon"
                          onMouseEnter={() => {
                            setIconText("Node.js");
                            setIsHovered(true);
                          }}
                          onMouseLeave={() => {
                            setIsHovered(false);
                          }}
                        ></SiNodedotjs>
                        <SiExpress
                          className="icon"
                          onMouseEnter={() => {
                            setIconText("Express.js");
                            setIsHovered(true);
                          }}
                          onMouseLeave={() => {
                            setIsHovered(false);
                          }}
                        ></SiExpress>
                        <DiMongodb
                          className="icon"
                          onMouseEnter={() => {
                            setIconText("MongoDB");
                            setIsHovered(true);
                          }}
                          onMouseLeave={() => {
                            setIsHovered(false);
                          }}
                        ></DiMongodb>
                        <DiGoogleCloudPlatform
                          className="icon"
                          onMouseEnter={() => {
                            setIconText("Google Cloud");
                            setIsHovered(true);
                          }}
                          onMouseLeave={() => {
                            setIsHovered(false);
                          }}
                        ></DiGoogleCloudPlatform>
                        <FaYoutube
                          className="icon"
                          onMouseEnter={() => {
                            setIconText("YouTube API");
                            setIsHovered(true);
                          }}
                          onMouseLeave={() => {
                            setIsHovered(false);
                          }}
                        ></FaYoutube>
                      </div>
                    </div>
                    <div className="hover-icon-box">
                      <span style={iconTextStyles} className="icon-text">
                        {iconText && iconText}
                      </span>
                    </div>
                  </div>
                  <p>
                    <strong>ProdYouTive</strong>, a Chrome extension designed
                    for productivity enhancement, enhances your YouTube browsing
                    experience. Features include:
                    <ul>
                      <li>
                        <strong>Insightful Analytics:</strong> Get detailed
                        statistics on viewing habits, including total watch time
                        and daily averages.
                      </li>
                      <li>
                        <strong>Focus Mode:</strong> Reduce distractions by
                        emphasizing educational content and hiding the rest.
                      </li>
                      <li>
                        <strong>Custom Settings:</strong> Adjust timers,
                        notifications, and preferences for a personalized
                        experience.
                      </li>
                    </ul>
                    Transform YouTube into a platform for growth and efficient
                    learning with ProdYouTive.
                  </p>
                  <a href="https://github.com/avannak/ProdYouTive">
                    <button className="pushable">
                      <span className="shadow"></span>
                      <span className="edge blue"></span>
                      <span className="front blue">View Github Code</span>
                    </button>
                  </a>
                </div>
              </div>
            )}
            {props.modalType === "item6" && (
              <div className="content">
                <div className="image-container">
                  <Image
                    className="image"
                    src={musicplayer}
                    alt="musicplayer pic"
                  ></Image>
                </div>
                <div className="description-container">
                  <h1>Music Website Player</h1>
                  <div className="stack-container">
                    <span className="title">Built With:</span>
                    <div className="stack">
                      <div className="fed">
                        <SiJavascript
                          className="icon"
                          onMouseEnter={() => {
                            setIconText("Javascript");
                            setIsHovered(true);
                          }}
                          onMouseLeave={() => {
                            setIsHovered(false);
                          }}
                        ></SiJavascript>
                        <FaReact
                          className="icon"
                          onMouseEnter={() => {
                            setIconText("React");
                            setIsHovered(true);
                          }}
                          onMouseLeave={() => {
                            setIsHovered(false);
                          }}
                        ></FaReact>
                        <FaCss3
                          className="icon"
                          onMouseEnter={() => {
                            setIconText("CSS");
                            setIsHovered(true);
                          }}
                          onMouseLeave={() => {
                            setIsHovered(false);
                          }}
                        ></FaCss3>
                        <SiJquery
                          className="icon"
                          onMouseEnter={() => {
                            setIconText("JQuery");
                            setIsHovered(true);
                          }}
                          onMouseLeave={() => {
                            setIsHovered(false);
                          }}
                        ></SiJquery>
                        <SiHtml5
                          className="icon"
                          onMouseEnter={() => {
                            setIconText("HTML5, HTML5 Player");
                            setIsHovered(true);
                          }}
                          onMouseLeave={() => {
                            setIsHovered(false);
                          }}
                        ></SiHtml5>
                      </div>
                      <div className="bed">
                        <SiNodedotjs
                          className="icon"
                          onMouseEnter={() => {
                            setIconText("Node.js");
                            setIsHovered(true);
                          }}
                          onMouseLeave={() => {
                            setIsHovered(false);
                          }}
                        ></SiNodedotjs>
                      </div>
                    </div>
                    <div className="hover-icon-box">
                      <span style={iconTextStyles} className="icon-text">
                        {iconText && iconText}
                      </span>
                    </div>
                  </div>
                  <p>
                    A music website player which features different background
                    themes to each song selection.
                    <br />
                    <br /> Vocals and music production are done with Logic Pro X
                    and yours truly.
                  </p>
                  <a href="https://music-player-avannak.vercel.app/">
                    <button className="pushable">
                      <span className="shadow"></span>
                      <span className="edge blue"></span>
                      <span className="front blue">View Website</span>
                    </button>
                  </a>
                </div>
              </div>
            )}
            {/* <p>This is the dialog content.</p> */}
            <CgClose
              className="close-button"
              onClick={() => {
                props.setShowModal(!props.showModal);
              }}
            >
              Close
            </CgClose>
          </motion.dialog>
        </AnimatePresence>
      </div>
    </>
  );
};

export default Modal;
