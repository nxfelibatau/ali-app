"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ClientWrapper() {
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "en";

  useEffect(() => {
    if (document.documentElement.lang !== locale) {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  return null;
}
