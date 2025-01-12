"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import ScrollBackground from "./ScrollBackground";

export default function BackgroundBoxesDemo({ children }) {
  return (
    <div className="h-screen w-full relative overflow-hidden">
      <ScrollBackground/>
      {/* Background Effect */}
      <div className="absolute inset-0 w-full h-full z-10 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      {/* Content */}
      <div className="relative z-20">{children}</div>
    </div>
  );
}
