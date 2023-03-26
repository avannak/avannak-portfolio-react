"use client";
import Image from "next/image";
import { DM_Serif_Text, Libre_Caslon_Text, Gloock, Noto_Serif_Thai, Noto_Serif_Ethiopic } from "next/font/google";
import Head from "next/head";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import About from "./about/About";
import NavMenu from "@/components/NavMenu";

const dmSerifText = DM_Serif_Text({subsets: ["latin"], weight: ['400']})
const notoEthiopic = Gloock({subsets: ["latin-ext"], weight: ['400']})

export default function Home() {
  return (
    <div className={notoEthiopic.className}>
       <div className="content-container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "linear",
          duration: .3,
          x: { duration: .2 },
        }}
      >
        <div>
        <Image className="bg-img" src={"/artprofile1.jpg"} alt="" height={3994} width={5128}/>
        </div>
        </motion.div>
        <NavMenu/>
        {/* Header */}
        
        {/* Hero */}

        {/* About  */}

        {/* Experience */}

        {/* Skills */}

        {/* Projects */}

        {/* Contact Me */}

    </div>
    </div>
  );
}
