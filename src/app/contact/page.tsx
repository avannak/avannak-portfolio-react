import Image from "next/image";
import React from "react";
import { FaBarcode, FaHandshake } from "react-icons/fa";
import ContactForm from "./ContactForm";
import Header from "@/components/Header";

type Props = {};

const ContactPage = (props: Props) => {
  return (
    <div className="contact-page-container" id="contact-section">
      <Image
        id="cave-pic"
        src={"/rocky-wall.png"}
        alt=""
        height={3024}
        width={4032}
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
            Let's work together!
          </p>
        </div>
        <ContactForm />
        <div className="footer">
          <Header></Header>
          <span>Designed by Arthur V</span>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
