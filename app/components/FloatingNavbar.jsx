"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
export default function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-white hover:text-neutral-200" />,
    },
    {
      name: "Courses",
      link: "/courses",
      icon: <IconUser className="h-4 w-4 text-white hover:text-neutral-200" />,
    },
    {
      name: "Projects",
      link: "/projects",
      icon: (
        <IconMessage className="h-4 w-4  text-white hover:text-neutral-200" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
