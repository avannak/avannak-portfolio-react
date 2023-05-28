"use client";
import { useRef, useContext } from "react";
import { UserContext } from "@/context/user/UserContext";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import adulting from "../../assets/images/adulting.png";
import bstocktradein from "../../assets/images/bstock-trade-in.png";
import gatormedia from "../../assets/images/gatormedia.png";
import cyberScreen from "../../assets/videos/cyber-screen.mp4";
import musicplayer from "../../assets/images/musicplayer.png";
import rapidhealth from "../../assets/images/rapidhealth.jpg";
// import vhs from "../../assets/videos/vhs2.mp4";
import wavyboy from "../../assets/images/wavyboy.png";
import MouseParallaxVideo from "@/components/AnimatedComponents/MouseParallaxVideo";
import NavBar from "@/components/NavBar/NavBar";
import BackgroundOverlay from "@/components/BackgroundOverlay/BackgroundOverlay";
import CustomCursor from "@/components/CustomCursor/CustomCursor";

// export type PropTypes = {
//   onMouseEnter?: (event: React.MouseEvent<HTMLDivElement>) => void;
//   onMouseLeave?: (event: React.MouseEvent<HTMLDivElement>) => void;
// };

const MyWorkPage = () => {
  const {
    showModal,
    setShowModal,
    setModalType,
    scrollPosition,
    setScrollPosition,
    storedScrollPos,
  } = useContext(UserContext);

  let ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);
  let opacity = useTransform(scrollYProgress, [0.4, 1], [1, 0]);

  return (
    <>
      <CustomCursor />
      <BackgroundOverlay />
      <NavBar />
      <Fade triggerOnce>
        <motion.div
          id="mywork-section"
          className="mywork-page-container"
          ref={ref}
          style={{ y, opacity }}
          // initial={{ opacity: 0, skewX: 5, skewY: 5 }}
          // animate={{ opacity: 1, skewX: 0, skewY: -5 }}
          transition={{
            ease: "linear",
            duration: 0.3,
            x: { duration: 0.2 },
          }}
        >
          {/* <video id="cyber-video" src={cyberScreen}></video> */}
          <motion.section className="portfolio" id="portfolio" ref={ref}>
            <motion.div
              className="header-title"
              ref={ref}
              style={{ y, opacity }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                ease: "linear",
                duration: 0.3,
                x: { duration: 0.2 },
              }}
            >
              <div className="container">
                <h1 className="title" style={{ color: "rgb(255, 255, 255)" }}>
                  Projects 🚧
                </h1>
              </div>
              {/* <div className="title-divider" /> */}
              {/* <FaBarcode
              style={{ width: "180px", height: "1px" }}
              viewBox="100 0 500 150"
              className="barcode-icon"
              preserveAspectRatio="none"
            ></FaBarcode> */}
            </motion.div>
            <div className="description">
              <span style={{ padding: "5px" }}>
                Stay tuned for more projects!
              </span>
              <span
                style={{
                  padding: "5px",
                  color: "rgb(161, 201, 254)",
                  fontSize: ".8em",
                }}
              >
                Click a Project for more details
              </span>
            </div>
            <motion.div className="container" id="portfolio-container">
              <div className="row">
                <motion.div
                  onClick={() => {
                    setScrollPosition(storedScrollPos);
                    setShowModal(!showModal);
                    setModalType("item1");
                  }}
                  // onMouseEnter={props.onMouseEnter}
                  // onMouseLeave={props.onMouseLeave}
                  id="item1"
                  className="project-column"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <motion.div className="middle">
                    <div
                      id="gatormedia-detail"
                      className="project-content gatormedia"
                    >
                      <p>Gatormedia: Multimedia Upload/Share App</p>
                      <span>Click To View</span>
                    </div>
                    <Image
                      id="project-img"
                      className="image project"
                      src={gatormedia}
                      alt="gatormedia"
                    />
                    {/* <video id="tv-img" src={vhs}></video> */}
                  </motion.div>
                </motion.div>
                <motion.div
                  onClick={() => {
                    setScrollPosition(storedScrollPos);
                    setShowModal(!showModal);
                    setModalType("item2");
                  }}
                  // onMouseEnter={props.onMouseEnter}
                  // onMouseLeave={props.onMouseLeave}
                  id="item2"
                  className="project-column"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  {/* <Image className="image" src={rapidhealth} alt="rapidhealth" /> */}
                  <div className="middle">
                    <div
                      id="rapidhealth-detail"
                      className="project-content rapidhealth"
                    >
                      <p>RapidHealth: Covid Statistics Notification App</p>
                      <span>Click To View</span>
                      {/* <div className="icon-container" style={{ display: "flex" }}>
                    <BiExpandAlt style={{ padding: "5px" }}></BiExpandAlt>
                  </div> */}
                    </div>
                    <Image
                      id="project-img"
                      className="image"
                      src={rapidhealth}
                      alt="rapidhealth"
                    />
                  </div>
                </motion.div>
                <motion.div
                  onClick={() => {
                    setScrollPosition(storedScrollPos);
                    setShowModal(!showModal);
                    setModalType("item3");
                  }}
                  // onMouseEnter={props.onMouseEnter}
                  // onMouseLeave={props.onMouseLeave}
                  id="item3"
                  className="project-column"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <div className="middle">
                    <div id="bstock-detail" className="project-content bstock">
                      <p>B-Stock Phone Trade-in App</p>
                      <span>Click To View</span>
                      {/* <div className="icon-container" style={{ display: "flex" }}>
                    <BiExpandAlt style={{ padding: "5px" }}></BiExpandAlt>
                  </div> */}
                    </div>
                    <Image
                      id="project-img"
                      className="image project"
                      src={bstocktradein}
                      alt="bstocktradin"
                    />
                    {/* <video id="tv-img" src={vhs}></video> */}
                  </div>
                </motion.div>
                <motion.div
                  onClick={() => {
                    setScrollPosition(storedScrollPos);
                    setShowModal(!showModal);
                    setModalType("item4");
                  }}
                  // onMouseEnter={props.onMouseEnter}
                  // onMouseLeave={props.onMouseLeave}
                  id="item4"
                  className="project-column"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <div className="middle">
                    <div
                      id="wavyboy-detail"
                      className="project-content wavyboy"
                    >
                      <p>【wavyboy】Synthesizer</p>
                      <span>Click To View</span>
                      {/* <div className="icon-container" style={{ display: "flex" }}>
                    <BiExpandAlt style={{ padding: "5px" }}></BiExpandAlt>
                  </div> */}
                    </div>
                    <Image
                      id="project-img"
                      className="image project"
                      src={wavyboy}
                      alt="wavyboy"
                    />
                    {/* <video id="tv-img" src={vhs}></video> */}
                  </div>
                </motion.div>
                <motion.div
                  onClick={() => {
                    setScrollPosition(storedScrollPos);
                    setShowModal(!showModal);
                    setModalType("item5");
                  }}
                  // onMouseEnter={props.onMouseEnter}
                  // onMouseLeave={props.onMouseLeave}
                  id="item5"
                  className="project-column"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <div className="middle">
                    <div
                      id="adulting-detail"
                      className="project-content adulting"
                    >
                      <p>Adulting.io: To-do List App</p>
                      <span>Click To View</span>
                      {/* <div className="icon-container" style={{ display: "flex" }}>
                    <BiExpandAlt style={{ padding: "5px" }}></BiExpandAlt>
                  </div> */}
                    </div>
                    <Image
                      id="project-img"
                      className="image project"
                      src={adulting}
                      alt="adulting"
                    />
                    {/* <video id="tv-img" src={vhs}></video> */}
                  </div>
                </motion.div>
                <motion.div
                  onClick={() => {
                    setScrollPosition(storedScrollPos);
                    setShowModal(!showModal);
                    setModalType("item6");
                  }}
                  // onMouseEnter={props.onMouseEnter}
                  // onMouseLeave={props.onMouseLeave}
                  id="item6"
                  className="project-column"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <div className="middle">
                    <div
                      id="musicwebsite-detail"
                      className="project-content musicwebsite"
                    >
                      <p>Music Website Player</p>
                      <span>Click To View</span>
                      {/* <div className="icon-container" style={{ display: "flex" }}>
                    <BiExpandAlt style={{ padding: "5px" }}></BiExpandAlt>
                  </div> */}
                    </div>
                    <Image
                      id="project-img"
                      className="image project"
                      src={musicplayer}
                      alt="musicplayer"
                    />
                    {/* <video id="tv-img" src={vhs}></video> */}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.section>
        </motion.div>
      </Fade>
    </>
  );
};

export default MyWorkPage;
