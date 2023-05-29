"use client";
import NavMenu from "@/components/NavMenu";
import { motion } from "framer-motion";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <motion.div className="home-page-container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "linear",
          duration: 0.3,
          x: { duration: 0.2 },
        }}
      >
        <NavMenu />
      </motion.div>
    </motion.div>
  );
};

export default HomePage;
