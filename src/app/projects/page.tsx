"use client";
import BackgroundOverlay from "@/components/BackgroundOverlay/BackgroundOverlay";
import Modal from "@/components/Modal/Modal";
import ProjectThumbnail from "@/components/ProjectThumbnail/ProjectThumbnail";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useContext } from "react";
import prodyoutive from "../../assets/images/prodyoutive_channels.webp";
import bstocktradein from "../../assets/images/bstock-trade-in.webp";
import gatormedia from "../../assets/images/gatormedia.webp";
import musicplayer from "../../assets/images/musicplayer.webp";
import rapidhealth from "../../assets/images/rapidhealth.webp";
import financy from "../../assets/images/financy.png";
import portFolio from "../../assets/images/portfolio.webp";
import mountain from "../../assets/images/mountain.webp";
import useLoading from "@/hooks/useLoading";
import { RingLoader } from "react-spinners";
import { useSelector } from "react-redux";
import { RootState } from "../GlobalRedux/types";
import Image from "next/image";
import { useImageLoading } from "@/hooks/useImagesLoaded";

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

  const images = [
    prodyoutive,
    bstocktradein,
    gatormedia,
    musicplayer,
    rapidhealth,
    financy,
    portFolio,
  ];

  const imagesLoaded = useImageLoading(images);

  return (
    <>
      {!imagesLoaded && isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "#0f0f14",
          }}
        >
          <RingLoader
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "linear",
              duration: 0.3,
              x: { duration: 0.2 },
            }}
            exit={{ opacity: 0 }}
          >
            {parallaxIsOn && <BackgroundOverlay parallax />}
            {!parallaxIsOn && <BackgroundOverlay />}
            <Image
              priority={false}
              className="mountain-pic"
              src={mountain}
              alt="mountain"
              placeholder="blur"
            ></Image>
            <motion.section className="portfolio" id="portfolio">
              <div className="header-title navigation">
                <div className="content-container">
                  <Link
                    href="/about"
                    className="link"
                    style={{ width: "100%" }}
                  >
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
                      height={50}
                      width={50}
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
                      setModalType("item5");
                    }}
                    id="item5"
                    middleId="prodyoutive-detail"
                    middleClassName="project-content prodyoutive"
                    text="ProdYouTive: YouTube Productivity Optimizer"
                    imgSrc={prodyoutive}
                  />
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
                    text="Fi.nancy: Finance Tracker"
                    imgSrc={financy}
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
            <div className="end-navigation-container">
              <Link href="/contact" className="end-navigation-link">
                <div className="end-navigation">
                  <FontAwesomeIcon
                    className="icon"
                    icon={faRightLong}
                  ></FontAwesomeIcon>
                  <span>Next: Go To Contact Page</span>
                </div>
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </>
  );
};

export default MyWorkPage;
