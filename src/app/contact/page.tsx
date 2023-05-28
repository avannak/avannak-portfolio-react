"use client";
/* eslint-disable react/no-unescaped-entities */
import Header from "@/components/Header";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import mountain from "../../assets/images/mountain.png";
import smiley from "../../assets/images/smiley.png";
import ContactForm from "../../pages/contact/ContactForm";
import NavBar from "@/components/NavBar/NavBar";
import BackgroundOverlay from "@/components/BackgroundOverlay/BackgroundOverlay";
import CustomCursor from "@/components/CustomCursor/CustomCursor";

type Props = {};

const ContactPage = (props: Props) => {
  // let ref = useRef(null);
  // let { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["start start", "end start"],
  // });
  // let y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  // let opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <>
      <CustomCursor />
      <BackgroundOverlay />
      <NavBar />
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
              <h1 className="title" style={{ color: "rgb(255, 255, 255)" }}>
                Contact 🤙🏻
              </h1>
              {/* <div className="title-divider" /> */}
              {/* <FaBarcode
              style={{ width: "180px", height: "1px" }}
              viewBox="100 0 500 150"
              className="barcode-icon"
              preserveAspectRatio="none"
            ></FaBarcode> */}
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
    </>
  );
};

export default ContactPage;
