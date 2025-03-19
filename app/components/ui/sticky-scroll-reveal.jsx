"use client";
import React, { useEffect, useRef, useState, useMemo } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

export const StickyScroll = ({ content, contentClassName }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const cardLength = content.length;
  const [activeCard, setActiveCard] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.round(latest * (cardLength - 1));
    setActiveCard(Math.min(Math.max(index, 0), cardLength - 1));
  });

  const linearGradients = useMemo(
    () => [
      "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
      "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
      "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
    ],
    []
  );

  return (
    <motion.div
      className={cn(
        "flex justify-between space-x-10 rounded-md p-10",
        contentClassName
      )}
      ref={ref}
    >
      <div className="relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-2xl font-bold text-navy"
              >
                {item.title}
              </motion.h2>
              <motion.p
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-lg text-navy max-w-sm mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-35" />
        </div>
      </div>
      <div
        style={{
          background: linearGradients[activeCard % linearGradients.length],
        }}
        className="hidden lg:block h-60 w-80 rounded-md sticky top-1/2 -translate-y-1/2 overflow-hidden"
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
