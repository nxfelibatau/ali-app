// ThreeDpin.js

"use client";
import React, { useEffect, useState } from "react";
import { PinContainer } from "./ui/3d-pin";

export default function ThreeDpin({ title, href, icon, imageSrc }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="h-[10rem] w-[10rem] flex items-center justify-center">
      <PinContainer title={title} href={href}>
        <div className="flex justify-center items-center rounded-full w-[10rem] h-[10rem] bg-gradient-to-br from-blue-500 via-blue-700 to-blue-900">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt="Icon"
              className="w-12 h-12 object-contain"
            />
          ) : (
            <i className={`bx ${icon} text-white text-5xl`}></i>
          )}
        </div>
      </PinContainer>
    </div>
  );
}
