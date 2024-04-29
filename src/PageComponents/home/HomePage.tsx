"use client";
import { RootState } from "@/app/GlobalRedux/types";
import BackgroundOverlay from "@/components/BackgroundOverlay/BackgroundOverlay";
import NavMenu from "@/components/NavMenu";
import Scene from "@/components/Scene";
import useLoading from "@/hooks/useLoading";
import { motion } from "framer-motion";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { RingLoader } from "react-spinners";
import dynamic from "next/dynamic";

const SceneWithNoSSR = dynamic(() => import("@/components/Scene"), {
  ssr: false,
});

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
            height: "100%",
            width: "100%",
            backgroundColor: "#0f0f14",
          }}
        >
          <RingLoader
            color="#ffffff"
            loading
            // size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <SceneWithNoSSR />
      )}
    </>
  );
};

export default HomePage;
