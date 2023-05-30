"use client";
import NavMenu from "@/components/NavMenu";
import { motion } from "framer-motion";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <motion.div
      className="home-page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <NavMenu />
    </motion.div>
  );
};

export default HomePage;
