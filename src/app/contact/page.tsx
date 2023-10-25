"use client";
/* eslint-disable react/no-unescaped-entities */
import BackgroundOverlay from "@/components/BackgroundOverlay/BackgroundOverlay";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar/NavBar";
import Image from "next/image";
import {
  faCaretLeft,
  faHome,
  faLeftLong,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Link from "next/link";
import mountain from "../../assets/images/mountain.webp";
import smiley from "../../assets/images/smiley.webp";
import callMe from "../../assets/images/call.webp";
import ContactForm from "../../PageComponents/contact/ContactForm";
import { useContext } from "react";
import useLoading from "@/hooks/useLoading";
import { PacmanLoader } from "react-spinners";
import { useSelector } from "react-redux";
import { RootState } from "../GlobalRedux/types";
import { useImageLoading } from "@/hooks/useImagesLoaded";

type Props = {};

const ContactPage = (props: Props) => {
  const isLoading = useLoading();
  const parallaxIsOn = useSelector(
    (state: RootState) => state.parallax?.parallaxIsOn
  );

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
            height: "100vh",
            backgroundColor: "#0f0f14",
          }}
        >
          <PacmanLoader
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
            <Image
              priority={false}
              id="mountain-pic"
              src={mountain}
              alt="mountain"
              placeholder="blur"
            ></Image>
            <div className="contact-section" id="contact-section">
              ({parallaxIsOn && <BackgroundOverlay parallax />}
              {!parallaxIsOn && <BackgroundOverlay />}
              <div className="header-title navigation">
                <div className="content-container">
                  <Link
                    href="/projects"
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
                  </Link>
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
                      height={60}
                      width={60}
                      style={{ margin: 5, objectFit: "contain" }}
                      placeholder="blur"
                    />
                  </h1>
                  <Link href="/" className="link" style={{ width: "100%" }}>
                    <div className="icon-container">
                      <FontAwesomeIcon
                        className="icon"
                        icon={faHome}
                      ></FontAwesomeIcon>
                      <span>Back To Home</span>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="header-container">
                <p className="text" style={{ textAlign: "center" }}>
                  Let's work together!{" "}
                  <Image
                    className="emoji"
                    src={smiley}
                    alt="smiley"
                    height={512}
                    width={512}
                    placeholder="blur"
                  ></Image>
                </p>
              </div>
              <ContactForm />
              <div className="footer">
                <Header />
                <span>Designed by Arthur V</span>
              </div>
            </div>
          </motion.section>
          )
        </>
      )}
    </>
  );
};

export default ContactPage;
