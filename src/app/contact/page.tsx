import Image from "next/image";
import React from "react";

type Props = {};

const ContactPage = (props: Props) => {
  return (
    <div className="contact-page-container">
      <Image
        id="cave-pic"
        src={"/rocky-wall.png"}
        alt=""
        height={3024}
        width={4032}
      ></Image>
      <div id="contact-section">
        <div className="section-title">
          <h1>Contact Me</h1>
          <div className="title-divider" />
          <p id="aboutdescription">
            Let's work together! For inquiries email me at:
          </p>
          <div>arthurvat7@gmail.com</div>
          <div className="contact-form container">
            <div className="contact-form form"></div>
            <div className="contact-form image"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
