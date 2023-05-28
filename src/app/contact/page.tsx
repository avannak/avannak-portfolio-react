"use client";
/* eslint-disable react/no-unescaped-entities */
import BackgroundOverlay from "@/components/BackgroundOverlay/BackgroundOverlay";
// import CustomCursor from "@/components/CustomCursor/CustomCursor";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar/NavBar";
import Image from "next/image";
// import { Fade } from "react-awesome-reveal";
import mountain from "../../assets/images/mountain.webp";
import smiley from "../../assets/images/smiley.webp";
import ContactForm from "../../pages/contact/ContactForm";

type Props = {};

const ContactPage = (props: Props) => {
  // let y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  // let opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <>
      {/* <CustomCursor /> */}
      <BackgroundOverlay />
      <NavBar />
      {/* <Fade triggerOnce> */}
      <div className="contact-page-container" id="contact-section">
        <Image id="cave-pic" src={mountain} alt="mountain"></Image>
        <div className="contact-section" id="contact-section">
          <div className="header-title">
            <h1 className="title" style={{ color: "rgb(255, 255, 255)" }}>
              Contact 🤙🏻
            </h1>
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
            <Header />
            <span>Designed by Arthur V</span>
          </div>
        </div>
      </div>
      {/* </Fade> */}
    </>
  );
};

export default ContactPage;
