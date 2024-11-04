"use client";
import { useEffect, useState } from "react";

export default function ScrollBackground() {
  const colors = [
    "rgba(99, 167, 191, 1)",     // Original Cool Blue
    "rgba(147, 179, 208,1)",    // Cyan Gray
    "rgba(123, 141, 175, 1)",    // Soft Steel
    "rgba(108, 128, 158, 1)",    // Cool Slate
    "rgba(91, 114, 142, 1)",     // Dusty Blue
    "rgba(74, 96, 120, 1)",      // Blue Gray
    "rgba(58, 80, 107, 1)",      // Slate Blue
    "rgba(44, 62, 80, 1)",       // Muted Navy
    "rgba(43, 58, 74, 1)",       // Deep Slate
    "rgba(31, 44, 60, 1)",       // Charcoal Blue
    "rgba(22, 34, 42, 1)",       // Midnight Blue
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
