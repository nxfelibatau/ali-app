"use client";
import React, { useEffect, useState } from "react";
import { PinContainer } from "./ui/3d-pin"; // Adjust the import path as needed

export default function ThreeDpin() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This ensures that the component only renders on the client side
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="h-[20rem] w-full flex">
      <PinContainer
        title="https://github.com/sawdi777"
        href="https://github.com/sawdi777"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
            Aceternity UI
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500">
              Customizable Tailwind CSS and Framer Motion Components.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-blue-500 via-blue-700 to-blue-900" />
          <i className="bx bxl-github"></i>
        </div>
      </PinContainer>
    </div>
  );
}
