"use client";
import React from "react";
import MyChart from "./Chart";
import FloatingDock from "./FloatingDock";
import { ExpandableCardDemo } from "./ExpandableCards";
import { StickyScrollRevealDemo } from "./StickyScrollReveal";

const ProjecrGrid = ({ dir = "ltr" }) => {
  return (
    <div
      dir={dir}
      className="flex flex-col md:flex-row min-h-screen text-white"
    >
      <div className="flex flex-col justify-center items-start md:w-1/2 w-full p-8 md:sticky top-0 md:h-screen">
        <div className="w-full text-center">
          <h2 className="text-2xl font-bold mb-4">What I'm capable of?</h2>
        </div>
        <div className="w-full">
          <MyChart />
        </div>
      </div>

      {/* Scrollable section - Takes full width on small screens */}
      <div className="md:w-1/2 w-full overflow-y-auto p-8 space-y-8">
        <ExpandableCardDemo />
        <div className="flex flex-row gap-5 mt-20 justify-center items-center md:space-x-4 space-y-4 md:space-y-0">
          <FloatingDock />
        </div>
      </div>
    </div>
  );
};

export default ProjecrGrid;
