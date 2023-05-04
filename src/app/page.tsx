"use client";
import Image from "next/image";
import { Gloock } from "next/font/google";
import Head from "next/head";
import Header from "@/components/Header";
import { motion, useScroll, useTransform } from "framer-motion";
import NavMenu from "@/components/NavMenu";
import { useRef } from "react";
import HomePage from "./home/HomePage";
import Link from "next/link";
import SmoothScroll from "@/components/SmoothScroll/SmoothScroll";
import AboutPage from "./about/page";
import MyWorkPage from "./mywork/page";
import ContactPage from "./contact/page";

const gloock = Gloock({ subsets: ["latin-ext"], weight: ["400"] });

export default function App() {
  return (
    <div className="app-container">
      {/* <SmoothScroll> */}
      <div>
        <div className="content-container">
          <div id="home-section">
            <HomePage />
            <NavMenu />
          </div>
          {/* Hero */}

          {/* About  */}
          <AboutPage />
          {/* Experience */}

          {/* Projects */}
          <MyWorkPage />
          {/* Contact Me */}
          <ContactPage />
        </div>
      </div>
      {/* </SmoothScroll> */}
    </div>
  );
}
