"use client";
import useLoading from "@/hooks/useLoading";
import dynamic from "next/dynamic";
import { RingLoader } from "react-spinners";

const SceneWithNoSSR = dynamic(() => import("@/components/Scene"), {
  ssr: false,
});

const App = () => {
  const isLoading = useLoading();
  return (
    <>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100vw",
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
        <div className="wrapper">
          <SceneWithNoSSR />
        </div>
      )}
    </>
  );
};

export default App;
