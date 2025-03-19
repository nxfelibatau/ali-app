"use client";
import React, { useState, useEffect, useCallback } from "react";
import { MultiStepLoader as Loader } from "./ui/multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";

const loadingStates = [
  { text: "Adjusting colors and animations..." },
  { text: "Almost there! Just a few more tweaks..." },
  { text: "Welcome to my world!" },
];

export default function MultiStepLoaderDemo() {
  const [loading, setLoading] = useState(true);

  const stopLoading = useCallback(() => setLoading(false), []);

  useEffect(() => {
    const timer = setTimeout(stopLoading, 5000);
    return () => clearTimeout(timer);
  }, [stopLoading]);

  return (
    <div className="w-full h-[60vh] flex items-center justify-center">
      <Loader loadingStates={loadingStates} loading={loading} duration={2000} />
      {loading && (
        <button
          className="fixed top-4 right-4 text-white z-[120]"
          onClick={stopLoading}
        >
          <IconSquareRoundedX className="h-10 w-10" />
        </button>
      )}
    </div>
  );
}