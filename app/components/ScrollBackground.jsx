"use client";
import { useEffect, useState } from "react";

export default function ScrollBackground() {
  const colors = [
    "rgba(15,23,42,1)",
    "rgba(11, 20, 44,1)",
    "rgba(7, 17, 46,1)",
    "rgba(3, 14, 48,1)",
    "rgba(77, 96, 120, 1)",
    "rgba(88, 114, 142, 1)",
    "rgba(99, 132, 164, 1)",
    "rgba(110, 150, 186, 1)",
    "rgba(121, 168, 208, 1)",
    "rgba(132, 186, 230,1)",
    "rgba(143, 204, 252,1)",
    "rgba(154, 222, 274, 1)",
    "rgba(165, 240, 296, 1)",
    "rgba(176, 258, 318, 1)",
    "rgba(187, 276, 340, 1)",
    "rgba(198, 294, 362, 1)",
    "rgba(209, 312, 384, 1)",
    "rgba(220, 330, 406, 1)",
    "rgba(331, 348, 428, 1)",
  ];

  const [bgColor, setBgColor] = useState(colors[0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const colorIndex = Math.floor(scrollPosition / 300) % colors.length;
      setBgColor(colors[colorIndex]);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [colors]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        backgroundColor: bgColor,
        zIndex: -1,
        transition: "background-color 0.5s ease",
      }}
    />
  );
}
