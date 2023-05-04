import React from "react";
import gatormedia from "../../assets/images/gatormedia.png";
import rapidhealth from "../../assets/images/rapidhealth.jpg";
import bstocktradein from "../../assets/images/bstock-trade-in.png";
import wavyboy from "../../assets/images/wavyboy.png";
import adulting from "../../assets/images/adulting.png";
import musicplayer from "../../assets/images/musicplayer.png";
import project from "../../assets/images/project.png";
import deskcolor from "../../assets/images/deskcolor3.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaBarcode } from "react-icons/fa";

type Props = {};

const MyWorkPage = (props: Props) => {
  return (
    <div id="mywork-section" className="mywork-page-container">
      <Image
        id="desk-pic"
        src={deskcolor}
        alt=""
        height={3840}
        width={2880}
      ></Image>
      {/* <Image
        id="cave-pic"
        src={"/rocky-wall.png"}
        alt=""
        height={3024}
        width={4032}
      ></Image> */}

      <div className="header-title">
        <h1>My Work</h1>
        <span style={{ padding: "15px" }}>
          Click a Project for more details
        </span>
        {/* <div className="title-divider" /> */}
        <FaBarcode
          style={{ width: "200px", height: "20px" }}
          viewBox="0 100 500 100"
          preserveAspectRatio="none"
          className="icon"
        ></FaBarcode>
        {/* <Image src={project} alt="project"></Image> */}
      </div>

      <section className="portfolio" id="portfolio">
        <div className="container" id="portfolio-container">
          <div className="row">
            <motion.div
              className="project-column item1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {/* <h3 className="ptitle" id="pftitle">
                    Gatormedia: Multi-media Upload/Share App
                  </h3> */}
              <Image className="image" src={gatormedia} alt="gatormedia" />
              <div className="middle">
                <div className="text">
                  <p>Gatormedia: Multimedia Upload/Share App</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="project-column item2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {/* <h3 className="ptitle" id="rapidhealthtitle">
                    RapidHealth
                  </h3> */}
              <Image className="image" src={rapidhealth} alt="rapidhealth" />
              <div className="middle">
                <div className="text">
                  <p>RapidHealth: Covid Statistics Notification App</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="project-column item3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {/* <h3 className="ptitle" id="pftitle">
                    B-Stock Phone Trade-In App
                  </h3> */}
              <Image
                className="image"
                src={bstocktradein}
                alt="bstock-trade-in"
              />
              <div className="middle">
                <div className="text">
                  <p>B-Stock Phone Trade-in App</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="project-column item4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Image className="image" src={wavyboy} alt="wavyboy" />
              <div className="middle">
                <div className="text">
                  <p>【wavyboy】Synthesizer</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="project-column item5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {/* <h3 className="ptitle" id="adultingtitle">
                    Adulting.io
                  </h3> */}
              <Image className="image" src={adulting} alt="adulting" />
              <div className="middle">
                <div className="text">
                  <p>Adulting.io</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="project-column item6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Image
                className="image"
                data-modal-target="#musicwebsitemodal"
                src={musicplayer}
                alt="musicplayer"
              />
              <div className="middle">
                <div className="text">
                  <p>Music Website Player</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyWorkPage;
