"use client";
import dynamic from "next/dynamic";

const SceneWithNoSSR = dynamic(() => import("@/components/Scene"), {
  ssr: false,
});

const App = () => {
  return (
    <div className="wrapper">
      <SceneWithNoSSR />
    </div>
  );
};

export default App;
