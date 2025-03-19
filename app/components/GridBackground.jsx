import React from "react";

export default function GridBackgroundDemo({ children }) {
  return (
    <div
      className="h-full w-full relative flex items-center justify-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    >
      {children}
    </div>
  );
}
