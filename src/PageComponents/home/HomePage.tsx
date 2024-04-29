"use client";
import { RootState } from "@/app/GlobalRedux/types";
import useLoading from "@/hooks/useLoading";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import { RingLoader } from "react-spinners";

const SceneWithNoSSR = dynamic(() => import("@/components/Scene"), {
  ssr: false,
});

const HomePage = () => {
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
