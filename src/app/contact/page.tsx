import Image from "next/image";
import React, { useRef } from "react";
import { FaBarcode, FaHandshake } from "react-icons/fa";
import ContactForm from "./ContactForm";
import Header from "@/components/Header";
import { motion, useScroll, useTransform } from "framer-motion";
import mountain from "../../assets/images/mountain.png";
import smiley from "../../assets/images/smiley.png";
import { Fade } from "react-awesome-reveal";

type Props = {};

const ContactPage = (props: Props) => {
  let ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  let opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <Fade triggerOnce>
      <div className="contact-page-container" id="contact-section">
        <Image
          id="cave-pic"
          src={mountain}
          alt="mountain"
          // height={3024}
          // width={4032}
        ></Image>
        <div className="contact-section" id="contact-section">
          <div className="header-title">
            <h1 className="title">Contact</h1>
            <div className="title-divider" />
            <FaBarcode
              style={{ width: "200px", height: "20px" }}
              viewBox="0 0 500 150"
              className="icon"
              preserveAspectRatio="none"
            ></FaBarcode>
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
              ></Image>
            </p>
          </div>
          <ContactForm />
          <div className="footer">
            <Header></Header>
            <span>Designed by Arthur V</span>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default ContactPage;
