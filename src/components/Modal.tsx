/* eslint-disable react/no-unescaped-entities */
import { UserContext } from "@/context/user/UserContext";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useContext, useState } from "react";
import { CgClose } from "react-icons/cg";
import { DiGoogleCloudPlatform } from "react-icons/di";
import { FaCss3, FaReact } from "react-icons/fa";
import {
  SiAmazonaws,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiJquery,
  SiMysql,
  SiNodedotjs,
  SiReactquery,
  SiStyledcomponents,
  SiTypescript,
} from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import adulting from "../assets/images/adulting.png";
import bstocktradein from "../assets/images/bstock-trade-in.png";
import gatormedia from "../assets/images/gatormedia.png";
import musicplayer from "../assets/images/musicplayer.png";
import rapidhealth from "../assets/images/rapidhealth.jpg";
import wavyboy from "../assets/images/wavyboy.png";

type Props = { onClose?: any; scrollPosition?: any };

const Modal = (props: Props) => {
  const { showModal, setShowModal, modalType } = useContext(UserContext);
  const [iconText, setIconText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const modalStyle = {
    top: `calc(50% + ${props.scrollPosition}px)`,
  };
  const iconTextStyles = { opacity: isHovered ? 1 : 0 };

  return (
    <>
      {showModal && (
        <div className="modal-container">
          <div
            className="overlay"
            onClick={() => {
              setShowModal(!showModal);
            }}
          />
          <AnimatePresence>
            <motion.dialog
              className="dialog-box"
              style={modalStyle}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClose={() => {
                setShowModal(!showModal);
              }}
            >
              {modalType === "item1" && (
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
                      UX friendly file upload/share application geared towards
                      San Francisco State University faculty and students.
                      <br />
                      <br />
                      Features user login/signup authentication and support for
                      uploading multiple media format types for the front-end.
                      <br />
                      <br />
                      Also features a inbox messaging system that allows users
                      to contact sellers for permission to purchase and download
                      uploads.
                    </p>
                    <a href="http://ec2-50-18-97-37.us-west-1.compute.amazonaws.com/">
                      <button className="pushable">
                        <span className="shadow"></span>
                        <span className="edge blue"></span>
                        <span className="front blue">View Website</span>
                      </button>
                    </a>
                  </div>
                </div>
              )}
              {modalType === "item2" && (
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
                      All you have to do is enter your contact information.
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
              {modalType === "item3" && (
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
                      Created the front-end of a phone trade-in application
                      during my Software internship at B-Stock Solutions
                      alongside summer teammates and team leads. <br />
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
              {modalType === "item4" && (
                <div className="content">
                  <div className="image-container">
                    <Image
                      className="image"
                      src={wavyboy}
                      alt="wavyboy pic"
                    ></Image>
                  </div>
                  <div className="description-container">
                    <h1>【wavyboy】Synthesizer</h1>
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
                        </div>
                      </div>
                      <div className="hover-icon-box">
                        <span style={iconTextStyles} className="icon-text">
                          {iconText && iconText}
                        </span>
                      </div>
                    </div>
                    <p>
                      I am also a part-time music producer. So to elevate my own
                      understanding of how a synthesizer works, I decided to
                      build one myself with the Tone.js framework.
                      <br />
                      <br />
                      【wavyboy】features EQ gain knobs, volume and reverb/delay
                      sliders, and pitch-shifting buttons for maximum sound
                      customizability.
                    </p>
                    {/* <a href="https://wavyboy.herokuapp.com/">
              <span className="button">View Website</span>
            </a> */}
                  </div>
                </div>
              )}
              {modalType === "item5" && (
                <div className="content">
                  <div className="image-container">
                    <Image
                      className="image"
                      src={adulting}
                      alt="adulting pic"
                    ></Image>
                  </div>
                  <div className="description-container">
                    <h1>Adulting.io: To-do List App</h1>
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
                      My easy to use to-do list app includes the ability to add,
                      delete, and clear all new tasks using JSON, saving them in
                      cache when the application is closed.
                      <br />
                      <br />
                      This application also includes Drag & Drop functionality
                      and color picker feature for tasks.
                    </p>
                    <a href="https://adulting-react-avannak.vercel.app/">
                      <button className="pushable">
                        <span className="shadow"></span>
                        <span className="edge blue"></span>
                        <span className="front blue">View Website</span>
                      </button>
                    </a>
                  </div>
                </div>
              )}
              {modalType === "item6" && (
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
                      <br /> vocals and music production are done with Logic Pro
                      X and yours truly.
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
                  setShowModal(!showModal);
                }}
              >
                Close
              </CgClose>
            </motion.dialog>
          </AnimatePresence>
        </div>
      )}
    </>
  );
};

export default Modal;
