"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "../lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AnimatedModal from "../AnimatedModal";

export const FloatingNav = ({ navItems, className }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - (scrollYProgress.getPrevious() || 0);
      setVisible(scrollYProgress.get() >= 0.05 && direction < 0);
    }
  });

  const pathname = usePathname();
  const locale = pathname?.split("/")[1] || "en";
  const modalTexts = {
    en: "Let's talk?",
    fa: "صحبت کنیم؟",
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-[#00879E] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className="relative items-center flex space-x-1 text-white hover:text-neutral-200"
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </Link>
        ))}
        <button className="text-sm font-medium relative hover:bg-gray-950 text-black hover:text-silk px-4 py-2 rounded-full">
          <AnimatedModal buttonText={modalTexts[locale]} lang={locale} />
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-navy to-transparent h-px" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
