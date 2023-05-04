import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

type Props = {};

const HomePage = (props: Props) => {
  let ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  let opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);
  return (
    <div className="home-page-container">
      <motion.div
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
        <motion.div>
          <Image
            className="bg-img"
            src={"/artprofile1.jpg"}
            alt=""
            height={3994}
            width={5128}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HomePage;
