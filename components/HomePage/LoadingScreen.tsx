import React from "react";

const LoadingScreen = () => {
  return (
    <div
      className="h-screen w-screen flex items-end justify-center pb-[25%] text-center"
      style={{ backgroundImage: "url(/home/loading.png)", backgroundSize: "100% initial" }}
    >
      <span className="text-slate-100 font-bold text-6xl" style={{ textShadow: "2px 10px 10px black" }}>
        Farm planting...
      </span>
    </div>
  );
};

export default LoadingScreen;
