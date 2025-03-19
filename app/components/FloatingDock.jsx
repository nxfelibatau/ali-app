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
      icon: <IconTerminal2 className="h-6 w-6 text-white dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: "Kaggle",
      icon: (
        <Image
          src="/images/k.png"
          width={24}
          height={24}
          alt="Kaggle Logo"
          className="object-contain"
        />
      ),
      href: "https://www.kaggle.com/sawdi777",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-6 w-6 text-white dark:text-neutral-300" />,
      href: "https://github.com/sawdi777",
    },
  ];
  return (
    <div className="flex items-center justify-center w-full">
      <FloatingDock
        mobileClassName="translate-y-20"
        items={links}
      />
    </div>
  );
}
