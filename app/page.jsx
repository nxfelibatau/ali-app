"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import MultiStepLoader from "./components/MultiStepLoader";

export default function Page() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // You can also dynamically set the timeout duration from props or context if needed
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // 5 seconds delay for the loader

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  const handleLanguageSelect = (lang) => {
    router.push(`/${lang}`);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      {loading ? (
        <MultiStepLoader />
      ) : (
        <div className="text-center">
          <h2 className="text-xl mb-4">Please select your language:</h2>
          <h2 className="text-xl mb-4">:لطفا زبان خود را انتخاب کنید</h2>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => handleLanguageSelect("en")}
              className="px-4 py-2 rounded-lg border text-white hover:bg-grass hover:text-navy transition"
              aria-label="Select English Language"
            >
              English
            </button>
            <button
              onClick={() => handleLanguageSelect("fa")}
              className="px-4 py-2 rounded-lg border text-white hover:bg-grass hover:text-navy transition"
              aria-label="Select Persian Language"
            >
              فارسی
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
