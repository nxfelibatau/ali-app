"use client";
import React from "react";
import MyChart from "./Chart";
import ThreeDpin from "./ThreeDpin";

const ProjecrGrid = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen text-white">
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
        <div className="flex flex-row mt-20 justify-center items-center md:space-x-4 space-y-4 md:space-y-0">
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

        <div className="bg-indigo-800 p-4 rounded">
          <img src="" alt="Nebula" className="w-full h-auto rounded" />
          <p className="mt-2">text3</p>
        </div>

        {/* Repeatable Content */}
        {Array(10)
          .fill()
          .map((_, index) => (
            <div key={index} className="bg-indigo-800 p-4 rounded">
              <img
                src={`https://source.unsplash.com/random/800x400?stars&${index}`}
                alt="Stars"
                className="w-full h-auto rounded"
              />
              <p className="mt-2">text4</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProjecrGrid;
