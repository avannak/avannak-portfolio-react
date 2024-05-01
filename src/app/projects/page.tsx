"use client";
import Modal from "@/components/Modal/Modal";
import ProjectThumbnail from "@/components/ProjectThumbnail/ProjectThumbnail";
import { useImageLoading } from "@/hooks/useImagesLoaded";
import useLoading from "@/hooks/useLoading";
import { useIsMobile } from "@/utils/isMobileDevice";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { RingLoader } from "react-spinners";
import * as THREE from "three";
import bstocktradein from "../../assets/images/bstock-trade-in.webp";
import financy from "../../assets/images/financy.png";
import gatormedia from "../../assets/images/gatormedia.webp";
import musicplayer from "../../assets/images/musicplayer.webp";
import portFolio from "../../assets/images/portfolio.webp";
import prodyoutive from "../../assets/images/prodyoutive_channels.webp";
import rapidhealth from "../../assets/images/rapidhealth.webp";
import { createTextTexture } from "../../components/AnimatedComponents/JellyDescription";

const TexturedJellyDescription = dynamic(
  () => import("../../components/AnimatedComponents/JellyDescription"),
  {
    ssr: false,
  }
);

const MyWorkPage = ({ setActiveRoute }: any) => {
  const [textTexture, setTextTexture] = useState<THREE.Texture | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const isLoading = useLoading();
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
  const isMobile = useIsMobile();

  useEffect(() => {
    const texture = createTextTexture(
      "Click on a project for more details, Stay tuned for more projects!",
      512,
      256
    );
    setTextTexture(texture);
  }, []);

  return (
    <>
      {!imagesLoaded && isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
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
            <motion.section className="portfolio" id="portfolio">
              <div className="description-container">
                <div className="description-background"></div>
                <div id="jelly-description">
                  <Canvas>
                    <ambientLight intensity={7} />
                    <spotLight
                      position={[10, 10, 10]}
                      angle={0.15}
                      penumbra={1}
                    />
                    <pointLight position={[10, 10, 10]} />
                    {textTexture && (
                      <TexturedJellyDescription
                        texture={textTexture}
                        scale={[
                          isMobile ? 3 : 3,
                          isMobile ? 3 : 3,
                          isMobile ? 3 : 3,
                        ]}
                      />
                    )}
                  </Canvas>
                </div>
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
                <div className="end-navigation-container">
                  <div
                    onClick={() => setActiveRoute("contact")}
                    className="end-navigation-link"
                  >
                    <div className="end-navigation">
                      <FontAwesomeIcon
                        className="icon"
                        icon={faRightLong}
                      ></FontAwesomeIcon>
                      <span>Next: Go To Contact Page</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          </motion.div>
        </>
      )}
    </>
  );
};

export default MyWorkPage;
