"use client";
import { UserContext } from "@/context/user/UserContext";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useContext, useRef, useState } from "react";
// import { Fade } from "react-awesome-reveal";
import adulting from "../../assets/images/adulting.webp";
import bstocktradein from "../../assets/images/bstock-trade-in.webp";
import gatormedia from "../../assets/images/gatormedia.webp";
import musicplayer from "../../assets/images/musicplayer.webp";
import rapidhealth from "../../assets/images/rapidhealth.webp";
// import vhs from "../../assets/videos/vhs2.mp4";
import BackgroundOverlay from "@/components/BackgroundOverlay/BackgroundOverlay";
// import CustomCursor from "@/components/CustomCursor/CustomCursor";
import wavyboy from "../../assets/images/wavyboy.png";
import ProjectThumbnail from "@/components/ProjectThumbnail/ProjectThumbnail";
import Modal from "@/components/Modal/Modal";

// export type PropTypes = {
//   onMouseEnter?: (event: React.MouseEvent<HTMLDivElement>) => void;
//   onMouseLeave?: (event: React.MouseEvent<HTMLDivElement>) => void;
// };

const MyWorkPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      {showModal && (
        <Modal
          setShowModal={setShowModal}
          showModal={showModal}
          modalType={modalType}
        />
      )}
      {/* <CustomCursor /> */}
      <BackgroundOverlay />
      {/* <Fade triggerOnce> */}
      <motion.div
        id="mywork-section"
        className="mywork-page-container"
        transition={{
          ease: "linear",
          duration: 0.3,
          x: { duration: 0.2 },
        }}
      >
        <motion.section
          className="portfolio"
          id="portfolio"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "linear",
            duration: 0.3,
            x: { duration: 0.2 },
          }}
        >
          <div className="header-title">
            <div className="container">
              <h1 className="title" style={{ color: "rgb(255, 255, 255)" }}>
                Projects 🚧
              </h1>
            </div>
          </div>
          <div className="description">
            <span style={{ padding: "5px" }}>
              Stay tuned for more projects!
            </span>
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
          <div className="container" id="portfolio-container">
            <div className="row">
              <ProjectThumbnail
                onClick={() => {
                  toggleModal();
                  setModalType("item1");
                }}
                id="item1"
                middleId="gatormedia-detail"
                middleClassName="project-content gatormedia"
                text="Gatormedia: Multimedia Upload/Share App"
                imgSrc={gatormedia}
              />
              <ProjectThumbnail
                onClick={() => {
                  toggleModal();
                  setModalType("item2");
                }}
                id="item2"
                middleId="rapidhealth-detail"
                middleClassName="project-content rapidhealth"
                text="RapidHealth: Covid Statistics Notification App"
                imgSrc={rapidhealth}
              />
              <ProjectThumbnail
                onClick={() => {
                  toggleModal();
                  setModalType("item3");
                }}
                id="item3"
                middleId="bstock-detail"
                middleClassName="project-content bstock"
                text="B-Stock Phone Trade-in App"
                imgSrc={bstocktradein}
              />
              <ProjectThumbnail
                onClick={() => {
                  toggleModal();
                  setModalType("item4");
                }}
                id="item4"
                middleId="wavyboy-detail"
                middleClassName="project-content wavyboy"
                text="【wavyboy】Synthesizer"
                imgSrc={wavyboy}
              />
              <ProjectThumbnail
                onClick={() => {
                  toggleModal();
                  setModalType("item5");
                }}
                id="item5"
                middleId="adulting-detail"
                middleClassName="project-content adulting"
                text="Adulting.io: To-do List App"
                imgSrc={adulting}
              />
              <ProjectThumbnail
                onClick={() => {
                  toggleModal();
                  setModalType("item6");
                }}
                id="item6"
                middleId="musicwebsite-detail"
                middleClassName="project-content musicwebsite"
                text="Music Website Player"
                imgSrc={musicplayer}
              />
            </div>
          </div>
        </motion.section>
      </motion.div>
      {/* </Fade> */}
    </>
  );
};

export default MyWorkPage;
