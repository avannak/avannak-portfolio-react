import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
type Props = {};

const NavMenu = (props: Props) => {
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
        <h1>
          Arthur <br /> Vannakittikun
        </h1>
      </motion.div>
      <motion.div
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
        <motion.h2
          initial={{ opacity: 0, translateY: 50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            ease: "linear",
            duration: 1,
            x: { duration: 0.3 },
            delay: 0.8,
          }}
        >
          Software Engineer & Artist
        </motion.h2>
        <Header></Header>
        <motion.ul
          initial={{ opacity: 0, translateX: -50 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        >
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/">Skills</Link>
          </li>
          <li>
            <Link href="/">Portfolio</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
        </motion.ul>
      </motion.div>
    </div>
  );
};

export default NavMenu;
