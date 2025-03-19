"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

export default function FloatingNavDemo({ locale = "en" }) {
  const navItems = React.useMemo(() => [
    {
      name: locale === "fa" ? "خانه" : "Home",
      link: locale === "fa" ? "/fa" : "/en",
      icon: <IconHome className="h-4 w-4 text-white hover:text-neutral-200" />,
    },
    {
      name: locale === "fa" ? "دوره‌ها" : "Courses",
      link: locale === "fa" ? "/fa/courses" : "/en/courses",
      icon: <IconUser className="h-4 w-4 text-white hover:text-neutral-200" />,
    },
    {
      name: locale === "fa" ? "پروژه‌ها" : "Projects",
      link: locale === "fa" ? "/fa/projects" : "/en/projects",
      icon: <IconMessage className="h-4 w-4 text-white hover:text-neutral-200" />,
    },
  ], [locale]);

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}