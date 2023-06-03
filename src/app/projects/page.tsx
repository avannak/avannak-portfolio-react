"use client";
import BackgroundOverlay from "@/components/BackgroundOverlay/BackgroundOverlay";
import Modal from "@/components/Modal/Modal";
import ProjectThumbnail from "@/components/ProjectThumbnail/ProjectThumbnail";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useContext } from "react";
import adulting from "../../assets/images/adulting.webp";
import bstocktradein from "../../assets/images/bstock-trade-in.webp";
import gatormedia from "../../assets/images/gatormedia.webp";
import musicplayer from "../../assets/images/musicplayer.webp";
import rapidhealth from "../../assets/images/rapidhealth.webp";
import wavyboy from "../../assets/images/wavyboy.png";
import portFolio from "../../assets/images/portfolio.webp";
import useLoading from "@/hooks/useLoading";
import { PacmanLoader } from "react-spinners";
import { useSelector } from "react-redux";
import { RootState } from "../GlobalRedux/types";
import Image from "next/image";

const MyWorkPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const isLoading = useLoading();
  const parallaxIsOn = useSelector(
    (state: RootState) => state.parallax?.parallaxIsOn
  );
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      {isLoading ? (
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
        <>
          {showModal && (
            <Modal
              setShowModal={setShowModal}
              showModal={showModal}
              modalType={modalType}
            />
          )}
          <motion.div
            id="mywork-section"
            className="mywork-page-container"
            transition={{
              ease: "linear",
              duration: 0.3,
              x: { duration: 0.2 },
            }}
            exit={{ opacity: 0 }}
          >
            {parallaxIsOn && <BackgroundOverlay parallax />}
            {!parallaxIsOn && <BackgroundOverlay />}
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
              <div className="header-title navigation">
                <Link href="/about" className="link" style={{ width: "100%" }}>
                  <div className="icon-container">
                    <FontAwesomeIcon
                      className="icon"
                      icon={faLeftLong}
                    ></FontAwesomeIcon>
                    <span>About</span>
                  </div>
                </Link>
                <h1
                  style={{
                    color: "rgb(255, 255, 255)",
                    margin: "5px 15px 5px 15px",
                    width: "100%",
                  }}
                >
                  Projects <br />{" "}
                  <Image
                    src={portFolio}
                    alt="folder"
                    height={60}
                    width={60}
                    style={{ margin: 5, objectFit: "contain" }}
                    placeholder="blur"
                  />
                </h1>
                <Link
                  href="/contact"
                  className="link"
                  style={{ width: "100%" }}
                >
                  <div className="icon-container">
                    <FontAwesomeIcon
                      className="icon"
                      icon={faRightLong}
                    ></FontAwesomeIcon>
                    <span>Contact</span>
                  </div>
                </Link>
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
          )
        </>
      )}
    </>
  );
};

export default MyWorkPage;
