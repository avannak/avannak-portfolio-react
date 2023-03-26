"use client";
import Image from "next/image";
import {
  DM_Serif_Text,
  Libre_Caslon_Text,
  Gloock,
  Noto_Serif_Thai,
  Noto_Serif_Ethiopic,
} from "next/font/google";
import Head from "next/head";
import Header from "@/components/Header";
import { motion, useScroll, useTransform } from "framer-motion";
import About from "./about/About";
import NavMenu from "@/components/NavMenu";

const dmSerifText = DM_Serif_Text({ subsets: ["latin"], weight: ["400"] });
const notoEthiopic = Gloock({ subsets: ["latin-ext"], weight: ["400"] });

export default function Home() {
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  return (
    <div className={notoEthiopic.className}>
      <div className="content-container">
        <motion.div
          style={{ y }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "linear",
            duration: 0.3,
            x: { duration: 0.2 },
          }}
        >
          <div>
            <Image
              className="bg-img"
              src={"/artprofile1.jpg"}
              alt=""
              height={3994}
              width={5128}
            />
          </div>
        </motion.div>
        <NavMenu />
        {/* Header */}

        {/* Hero */}

        {/* About  */}
        <About></About>

        {/* Experience */}

        {/* Skills */}

        {/* Projects */}

        {/* Contact Me */}
      </div>
    </div>
  );
}
