"use client";
import Modal from "@/components/Modal/Modal";
import ProjectThumbnail from "@/components/ProjectThumbnail/ProjectThumbnail";
import { useImageLoading } from "@/hooks/useImagesLoaded";
import useLoading from "@/hooks/useLoading";
import { useIsMobile } from "@/utils/isMobileDevice";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { RingLoader } from "react-spinners";
import * as THREE from "three";
import bstocktradein from "public/images/bstock-trade-in.webp";
import financy from "public/images/financy.webp";
import gatormedia from "public/images/gatormedia.webp";
import musicplayer from "public/images/musicplayer.webp";
import portFolio from "public/images/portfolio.webp";
import prodyoutive from "public/images/prodyoutive_channels.webp";
import rapidhealth from "public/images/rapidhealth.webp";
import { createTextTexture } from "../../components/AnimatedComponents/JellyDescription";

const TexturedJellyDescription = dynamic(
  () => import("../../components/AnimatedComponents/JellyDescription"),
  {
    ssr: false,
  }
);

const MyWorkPage = ({ setActiveRoute, ...props }: any) => {
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
                <div
                  className={
                    props.screen
                      ? "jelly-description screen"
                      : "jelly-description"
                  }
                >
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
                    blurDataUrl="data:image/webp;base64,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"
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
                    blurDataUrl="data:image/webp;base64,UklGRr4CAABXRUJQVlA4WAoAAAAgAAAAjgAAeAAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDgg0AAAABAKAJ0BKo8AeQA+7W6yVSmlpCMisrk5MB2JaW7ew19/ypG58gIhW+TWtiAruDOLMQhbCL/Eg6V11bpN1dQO7QpajMbfW7mOhg8t7jlckc228U1SrJDW2BQAAP7uJ21L6s8iDLO2+Gjn4v7T7GsyNzx/xznxF90ou0PKGCLGovxMJ2mRCs1JTCeIHJEltmjwtYbuRXiGjMob80WJAzM2g6Q1/ZsEGHjSMakgtoppyp/9LuVeSnGS07ltx8k9RvTf8nmPs2YC3GiDv6pH22toAAA="
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
                    blurDataUrl="data:image/webp;base64,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"
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
                    blurDataUrl="data:image/webp;base64,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"
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
                    blurDataUrl="data:image/webp;base64,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"
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
                    blurDataUrl="data:image/webp;base64,UklGRugHAABXRUJQVlA4WAoAAAAgAAAAygIAuwEASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDgg+gUAAHByAJ0BKssCvAE+7XayVCmnpKMhs4tBMB2JaW7hYdp/ByeZLvUf2rgQMD1JGl50+xsw4i8rRBl/7hHzHmqsMFmMMFn2NY2YOUlu87ytid6rH6xBNPH4NfohYmh8Qy/bVD8bROoJJZT6pcEXQy/Fx+yYGhZZPWcUsKGH5qBj51jwOv5HMs5J7OSs829YMpllh9QkwHlpA2PailbecSqW1Qomzr8qd5Agq/Zf/Mr3goTEChHUUJGmlZLuXm+T2opW/lvl5mqgFQWR9/DPsxljMkas+tR2xEQRAKTXb5Pailb+W+YvGwV5H/kqCNOtxhyd9uzVK4GAqiyXcvN8ntRSt/NOK/M8gQ9k75IGZeepgwJuL1+81FKd81AzuXm+T2opW/moGhZveQykpVQLNyCflBCCz5Uyznye1E0n81AzuXm+T2opWVnM5sbj7ENDO2YZmLJXCznCh6bfJBUUrfzUDO5eb5Pago2Gw0dSZXwYjeo4SSKYrBkryY3yiZebzDSKlcHYt/NQM7l2BsNhsNhrWNmi5IyCetWJh2Md6SnV9+MPwSZeb5Tv8ntQUbDYbDR1EA5m2uyAzLdPZU+/jdMYv+PVUOBAMYwFJRzDTOZzNTOtCfVVFwszoKa5ImAN/H3+0VJkIJd2470Vw/NWPJTe73eMhY7UNQDlokWB+KcrKLxBTIfYonBZVykRB/TvalZWBrxmj6q0QSiBYNrFv4+/x9/j7/H3+Pv4Bmik12WzLVd6/YaHJ1jHzcv7vjGQS+YA38ff4+/gK5E9+DhNdPExJ8wBv4+/x9/j7/H3+Pv8ff4gvoKw+YbIQp9wiiUYyCXzAG/j7/H3+Pv8ff5JsUtHHBzm48EUSjGQS+YA38ff4+/x9/j8CW2FDcq5I4sk/cEUSjGQS+YA38ff4+/x9/j8EBQMWStKxMthUKhUoENt3FEoxkEvmAN/H3+Pv8esxnxb5Paie2bzDY153vvQ5jvSRkEvmAN/H3+Pv8fdVcEvlDEu7Et7UDO1ia1WRhCEgpkPsUSjGQS+YA38kz/MUfrNvCeibf7b9mF4BPtJoTcwBv4+/x9/j7wo0ZKO/2i5n2ZMUG1CukWmEAvhXVogpkPsUSjGPJfNa+FgBoBVtIUOnMPgvbAQ/53yyMIolGMgl8vybQHbpwEmAJz7MYtyBMCT4+nu65AIvEFMh9iiQRDqkJ7YbKvJXWZUm/nXCw8UaW+dFIEPsUSjGQTAY8tyAAD3bWv96eQ1T0l2C5lrVUsG2CjXYloUn7GJTBncXCKWtVjXlYT4JwgbMPgnCAHbuZVUBBkBmxOd1O/9FeiZqTfPWV3HEc5JukQNiDwibvKV/JXYwzD1sAOQ+PSCkYr/xKVakJWZy5sxf8CNGuKX5iptlwtA0r/4nucVKVfnfMm8EuSepNlZNj9NxYGbR2UgBGacK04CgEF6o6kZFZCcKnsXMRQBrJ2kDKvhIG4oLkk8C32qb2jMljHMmZcdhk+5CgfQBklP9lT7lN23jgCZb1DrYj3EXFqSQFEzvo2KNyCgzf4y5lKIvfZTOoEotAjZsaFRZCYrWOAbZOFQvJsQs9EIEMo62Le0da+J4/wbOq7d7W/HSuOGdSP2bFI4ynyvd8LE0XrZKNHViLHL78q3n2LSM9yy+IIvQ54wBc60qOdnntydK1JVGCj4col5OxOCQQBItDnqecufI5b5AoLFX6JJP5uNTYXKCABaaJa69ZjPQKX/pl9UfvKG+YAAbdeYWLjIZatExYXXqcBAAICi83RRb/aWsyWCxfBLMQABRVZyJDF674z3EDgAAHfaUn2OxoxEAAHOnGFQ3y+jzdZSJ7bigAGBSNkOXjuCXPwLYNBzaKAB4tLpUm9axI5KTZnZMx5QCAGw4ZxWi3DKj8zBfVMvPxNZLcsAH6NXrSt0ZJ+ln80JoSmn7YFBgVzFjZqmENpXG59PYb12yuClimQRVUs/dx0VZgV7AmSf/pS5VDMTyHrTQtRHBlkiIe9sibN2Hr4SoQZxPNcFQeM8LmTnQGCQsPhogsr005rv0oAAAA=="
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
