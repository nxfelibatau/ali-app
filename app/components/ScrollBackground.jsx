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
    "rgba(99, 128, 158, 1)",
    "rgba(111, 141, 175, 1)",
    "rgba(122, 157, 188,1)",
    "rgba(133, 179, 208,1)",
    "rgba(144, 167, 191, 1)", 
    "#e9edf2ab",
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
