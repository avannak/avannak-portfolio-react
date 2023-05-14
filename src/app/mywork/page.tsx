import React, { useContext, useState, useEffect } from "react";
import gatormedia from "../../assets/images/gatormedia.png";
import rapidhealth from "../../assets/images/rapidhealth.jpg";
import bstocktradein from "../../assets/images/bstock-trade-in.png";
import wavyboy from "../../assets/images/wavyboy.png";
import adulting from "../../assets/images/adulting.png";
import musicplayer from "../../assets/images/musicplayer.png";
import project from "../../assets/images/project.png";
import deskcolor from "../../assets/images/deskcolor3.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaBarcode } from "react-icons/fa";
import { BiExpandAlt } from "react-icons/bi";
import Modal from "@/components/Modal";
import { UserContext } from "@/context/user/UserContext";

type Props = {};

const MyWorkPage = (props: Props) => {
  const {
    showModal,
    setShowModal,
    setModalType,
    scrollPosition,
    setScrollPosition,
    storedScrollPos,
  } = useContext(UserContext);

  useEffect(() => {
    // console.log(showModal);
  }, [showModal, setShowModal, scrollPosition]);

  return (
    <div id="mywork-section" className="mywork-page-container">
      <Image
        id="desk-pic"
        src={deskcolor}
        alt=""
        height={3840}
        width={2880}
      ></Image>
      <div className="header-title">
        <div className="container">
          <h1 className="title">My Work</h1>
        </div>
        <div className="title-divider" />
        <FaBarcode
          style={{ width: "200px", height: "20px" }}
          viewBox="0 0 500 150"
          className="icon"
          preserveAspectRatio="none"
        ></FaBarcode>
        <span style={{ padding: "5px" }}>Stay tuned for more projects!</span>
        <span
          style={{
            padding: "5px",
            color: "rgb(161, 201, 254)",
            fontSize: ".8em",
          }}
        >
          Click a Project for more details
        </span>
      </div>

      <section className="portfolio" id="portfolio">
        <div className="container" id="portfolio-container">
          <div className="row">
            <motion.div
              onClick={() => {
                setScrollPosition(storedScrollPos);
                setShowModal(!showModal);
                setModalType("item1");
              }}
              id="item1"
              className="project-column"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Image className="image" src={gatormedia} alt="gatormedia" />
              <div className="middle">
                <div className="text">
                  <p>Gatormedia: Multimedia Upload/Share App</p>
                  <span>Click To View</span>
                  <div className="icon-container" style={{ display: "flex" }}>
                    <BiExpandAlt style={{ padding: "5px" }}></BiExpandAlt>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              onClick={() => {
                setScrollPosition(storedScrollPos);
                setShowModal(!showModal);
                setModalType("item2");
              }}
              id="item2"
              className="project-column"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Image className="image" src={rapidhealth} alt="rapidhealth" />
              <div className="middle">
                <div className="text">
                  <p>RapidHealth: Covid Statistics Notification App</p>
                  <span>Click To View</span>
                  <div className="icon-container" style={{ display: "flex" }}>
                    <BiExpandAlt style={{ padding: "5px" }}></BiExpandAlt>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              onClick={() => {
                setScrollPosition(storedScrollPos);
                setShowModal(!showModal);
                setModalType("item3");
              }}
              id="item3"
              className="project-column"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Image
                className="image"
                src={bstocktradein}
                alt="bstock-trade-in"
              />
              <div className="middle">
                <div className="text">
                  <p>B-Stock Phone Trade-in App</p>
                  <span>Click To View</span>
                  <div className="icon-container" style={{ display: "flex" }}>
                    <BiExpandAlt style={{ padding: "5px" }}></BiExpandAlt>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              onClick={() => {
                setScrollPosition(storedScrollPos);
                setShowModal(!showModal);
                setModalType("item4");
              }}
              id="item4"
              className="project-column"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Image className="image" src={wavyboy} alt="wavyboy" />
              <div className="middle">
                <div className="text">
                  <p>【wavyboy】Synthesizer</p>
                  <span>Click To View</span>
                  <div className="icon-container" style={{ display: "flex" }}>
                    <BiExpandAlt style={{ padding: "5px" }}></BiExpandAlt>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              onClick={() => {
                setScrollPosition(storedScrollPos);
                setShowModal(!showModal);
                setModalType("item5");
              }}
              id="item5"
              className="project-column"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Image className="image" src={adulting} alt="adulting" />
              <div className="middle">
                <div className="text">
                  <p>Adulting.io: To-do List App</p>
                  <span>Click To View</span>
                  <div className="icon-container" style={{ display: "flex" }}>
                    <BiExpandAlt style={{ padding: "5px" }}></BiExpandAlt>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              onClick={() => {
                setScrollPosition(storedScrollPos);
                setShowModal(!showModal);
                setModalType("item6");
              }}
              id="item6"
              className="project-column"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Image
                className="image"
                data-modal-target="#musicwebsitemodal"
                src={musicplayer}
                alt="musicplayer"
              />
              <div className="middle">
                <div className="text">
                  <p>Music Website Player</p>
                  <span>Click To View</span>
                  <div className="icon-container" style={{ display: "flex" }}>
                    <BiExpandAlt style={{ padding: "5px" }}></BiExpandAlt>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyWorkPage;
