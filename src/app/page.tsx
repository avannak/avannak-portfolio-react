"use client";
import useLoading from "@/hooks/useLoading";
import HomePage from "../PageComponents/home/HomePage";
import { RingLoader } from "react-spinners";

const App = () => {
  const isLoading = useLoading();
  return (
    <>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100vh",
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
        <div className="app-container">
          <HomePage />
        </div>
      )}
    </>
  );
};

export default App;
