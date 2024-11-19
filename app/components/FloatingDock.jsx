import React from "react";
import { FloatingDock } from "./ui/floating-dock";
import {
  IconBrandGithub,
  IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";

export default function FloatingDockDemo() {
  const links = [
    {
      title: "Projects",
      icon: (
        <IconTerminal2 className="h-full w-full text-white dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Kaggle",
      icon: (
        <Image
          src="/images/k.png"
          width={100}
          height={100}
          alt="kaggle Logo"
        />
      ),
      href: "https://www.kaggle.com/sawdi777",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-white dark:text-neutral-300" />
      ),
      href: "https://github.com/sawdi777",
    },
  ];
  return (
    <div className="flex items-center justify-center w-full">
      <FloatingDock
        // only for demo, remove for production
        mobileClassName="translate-y-20"
        items={links}
      />
    </div>
  );
}
