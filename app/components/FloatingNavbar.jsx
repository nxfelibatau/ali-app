"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

export default function FloatingNavDemo({ locale = "en" }) {
  // آیتم‌های منو بر اساس مقدار locale که از پراپ میاد
  const navItems = [
    {
      name: locale === "fa" ? "خانه" : "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-white hover:text-neutral-200" />,
    },
    {
      name: locale === "fa" ? "دوره‌ها" : "Courses",
      link: "/courses",
      icon: <IconUser className="h-4 w-4 text-white hover:text-neutral-200" />,
    },
    {
      name: locale === "fa" ? "پروژه‌ها" : "Projects",
      link: "/projects",
      icon: (
        <IconMessage className="h-4 w-4 text-white hover:text-neutral-200" />
      ),
    },
  ];

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
