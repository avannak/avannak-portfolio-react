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
              <ContactForm setActiveRoute={setActiveRoute} />
            </div>
          </motion.section>
        </>
      )}
    </>
  );
};

export default ContactPage;
