
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ClientWrapper() {
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "en";

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}