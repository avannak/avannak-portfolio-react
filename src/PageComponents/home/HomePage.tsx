"use client";
import { RootState } from "@/app/GlobalRedux/types";
import BackgroundOverlay from "@/components/BackgroundOverlay/BackgroundOverlay";
import NavMenu from "@/components/NavMenu";
import useLoading from "@/hooks/useLoading";
import { motion } from "framer-motion";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { PacmanLoader } from "react-spinners";

type Props = {};

const HomePage = (props: Props) => {
  const isLoading = useLoading();
  const parallaxIsOn = useSelector(
    (state: RootState) => state.parallax?.parallaxIsOn
  );
  return (
    <>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "#0f0f14",
          }}
        >
          <PacmanLoader
            color="#ffffff"
            loading
            // size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <motion.div
          className="home-page-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {parallaxIsOn && <BackgroundOverlay parallax />}
          {!parallaxIsOn && <BackgroundOverlay />}
          <NavMenu />
        </motion.div>
      )}
    </>
  );
};

export default HomePage;
