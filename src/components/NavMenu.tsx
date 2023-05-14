import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-scroll";
import Header from "@/components/Header";
import { FaBarcode } from "react-icons/fa";
import barcode from "../assets/images/barcode.png";
import Image from "next/image";
type Props = {};

const NavMenu = (props: Props) => {
  let ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  let opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  return (
    <div className="nav-menu">
      <motion.div
        className="title-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "linear",
          duration: 1,
          x: { duration: 0.3 },
          delay: 0.4,
        }}
      >
        <h1 className="name">
          Arthur <br /> Vannakittikun
        </h1>
        <div className="occupation-container">
          <motion.div
            className="title sect1"
            initial={{ opacity: 0, translateY: 50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              ease: "linear",
              duration: 1,
              x: { duration: 0.3 },
              delay: 0.8,
            }}
          >
            Front-end Engineer <br />
          </motion.div>
          <span>&</span>
          <motion.div
            className="title sect2"
            initial={{ opacity: 0, translateY: 50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              ease: "linear",
              duration: 1,
              x: { duration: 0.3 },
              delay: 0.8,
            }}
          >
            Artist
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        // style={{ opacity }}
        className="nav-container"
        initial={{ opacity: 0, translateY: 50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          ease: "linear",
          duration: 1,
          x: { duration: 0.3 },
          delay: 0.8,
        }}
      >
        <motion.div
          style={{ opacity }}
          className="nav-background"
          initial={{ opacity: 0.8, translateY: 50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            ease: "linear",
            duration: 1,
            x: { duration: 0.3 },
            delay: 0.8,
          }}
        ></motion.div>
        <div className="nav-selections-container">
          <Header></Header>
          <motion.ul
            className="nav-selections"
            initial={{ opacity: 0, translateX: -50 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 1.5, delay: 0.8 }}
          >
            <li>
              <Link
                activeClass="active"
                to="about-section"
                spy={true}
                smooth={true}
                offset={-160}
                duration={500}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="mywork-section"
                spy={true}
                smooth={true}
                offset={-250}
                duration={500}
              >
                My Work
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="contact-section"
                spy={true}
                smooth={true}
                offset={-350}
                duration={500}
              >
                Contact
              </Link>
            </li>
            <li>
              <div className="download-resume-wrapper">
                <Link
                  activeClass="active"
                  to="contact-section"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Resume
                </Link>
              </div>
            </li>
          </motion.ul>
        </div>
      </motion.div>
    </div>
  );
};

export default NavMenu;
