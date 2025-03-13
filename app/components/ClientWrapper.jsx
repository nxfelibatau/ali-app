
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ClientWrapper() {
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "en";
  const dir = locale === "fa" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
  }, [locale, dir]);

  return null; // این کامپوننت فقط برای تنظیمات است و چیزی نمایش نمی‌دهد
}