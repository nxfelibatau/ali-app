// ProjecrGrid.js
"use client";
import React from "react";
import MyChart from "./Chart";
import ThreeDpin from "./ThreeDpin";
import { ExpandableCardDemo } from "./ExpandableCards";

const ProjecrGrid = ({ dir = "ltr" }) => {
  return (
    <div
      dir={dir}
      className="flex flex-col md:flex-row min-h-screen text-white"
    >
      {/* Sidebar - Vertically centered content, aligned left on medium screens and above */}
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
        <div className="flex flex-row gap-5 mt-20 justify-center items-center md:space-x-4 space-y-4 md:space-y-0">
          <ThreeDpin
            title="https://github.com/sawdi777"
            href="https://github.com/sawdi777"
            icon="bxl-github"
          />
          <ThreeDpin
            title="https://www.kaggle.com/sawdi777"
            href="https://www.kaggle.com/sawdi777"
            imageSrc="/images/kaggle.png"
          />
        </div>
        <ExpandableCardDemo />
      </div>
    </div>
  );
};

export default ProjecrGrid;
