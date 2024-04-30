"use client";
/* eslint-disable react/no-unescaped-entities */
import { useImageLoading } from "@/hooks/useImagesLoaded";
import useLoading from "@/hooks/useLoading";
import {
  faHome,
  faLeftLong,
  faRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { RingLoader } from "react-spinners";
import ContactForm from "../../PageComponents/contact/ContactForm";
import callMe from "../../assets/images/call.webp";
import mountain from "../../assets/images/mountain.webp";
import smiley from "../../assets/images/smiley.webp";

const ContactPage = ({ setActiveRoute }: any) => {
  const isLoading = useLoading();
  const images = [mountain, smiley, callMe];

  const imagesLoaded = useImageLoading(images);
  return (
    <>
      {!imagesLoaded ? (
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
            // size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <>
          <motion.section
            className="contact-page-container"
            id="contact-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "linear",
              duration: 0.3,
              x: { duration: 0.2 },
            }}
            exit={{ opacity: 0 }}
          >
            <div className="contact-section" id="contact-section">
              <div className="header-title navigation">
                <div className="content-container">
                  <div
                    onClick={() => setActiveRoute("projects")}
                    className="link"
                    style={{ width: "100%" }}
                  >
                    <div className="icon-container">
                      <FontAwesomeIcon
                        className="icon"
                        icon={faLeftLong}
                      ></FontAwesomeIcon>
                      <span>Projects</span>
                    </div>
                  </div>
                  <h1
                    style={{
                      color: "rgb(255, 255, 255)",
                      margin: "5px 15px 5px 15px",
                      width: "100%",
                    }}
                  >
                    Contact <br />{" "}
                    <Image
                      src={callMe}
                      alt="call"
                      height={50}
                      width={50}
                      style={{ margin: 5, objectFit: "contain" }}
                      placeholder="blur"
                    />
                  </h1>
                  <div
                    onClick={() => setActiveRoute("home")}
                    className="link"
                    style={{ width: "100%" }}
                  >
                    <div className="icon-container">
                      <FontAwesomeIcon
                        className="icon"
                        icon={faHome}
                      ></FontAwesomeIcon>
                      <span>Title</span>
                    </div>
                  </div>
                </div>
              </div>
              <ContactForm />
              <div className="end-navigation-container">
                <div
                  onClick={() => setActiveRoute("home")}
                  className="end-navigation-link"
                >
                  <div className="end-navigation">
                    <FontAwesomeIcon
                      className="icon"
                      icon={faRotateLeft}
                    ></FontAwesomeIcon>
                    <span>Go Back To Title Screen</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        </>
      )}
    </>
  );
};

export default ContactPage;
