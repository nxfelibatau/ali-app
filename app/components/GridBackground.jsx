import React from "react";

export default function GridBackgroundDemo({ children }) {
  return (
    <div className="h-full w-full dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      {children}
    </div>
  );
}
