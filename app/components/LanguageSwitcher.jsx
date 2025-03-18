"use client"; // این خط برای کامپوننت‌های کلاینت ساید در app ضروریه

import { usePathname, useRouter } from "next/navigation";

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();

  // تعیین زبان فعلی از URL
  const currentLang = pathname.startsWith("/fa") ? "fa" : "en";
  const newLang = currentLang === "fa" ? "en" : "fa";

  const toggleLanguage = () => {
    const newPath = pathname.replace(`/${currentLang}`, `/${newLang}`);
    router.push(newPath);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-4 py-2 rounded-md border text-white border-white hover:bg-gray-950 transition"
    >
      {newLang.toUpperCase()}
    </button>
  );
};

export default LanguageSwitcher;
