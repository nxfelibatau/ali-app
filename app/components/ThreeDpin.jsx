"use client";
import React, { useEffect, useState } from "react";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";

export default function ThreeDpin({ title, href, icon, imageSrc }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="h-40 w-40 flex items-center justify-center">
      <PinContainer title={title} href={href}>
        <div className="flex justify-center items-center rounded-full w-40 h-40 bg-gradient-to-br from-blue-500 via-blue-700 to-blue-900">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt="Icon"
              width={48}
              height={48}
              className="object-contain"
            />
          ) : (
            <i className={`bx ${icon} text-white text-5xl`}></i>
          )}
        </div>
      </PinContainer>
    </div>
  );
}
