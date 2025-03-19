"use client";
import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedModal from "./AnimatedModal";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header({ logoAlt = "Logo", navLinks = [] }) {
  const pathname = usePathname();
  const locale = pathname?.split("/")[1] || "en";

  const modalTexts = useMemo(() => ({
    en: "Let's talk?",
    fa: "صحبت کنیم؟",
  }), []);

  return (
    <div className="container mx-auto">
      <nav className="w-full z-20 top-0 start-0 border-b border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image src="/images/AG.png" className="h-8 object-contain" alt={logoAlt} width={40} height={40} />
          </Link>
          <div className="items-center justify-between flex w-auto">
            <ul className="flex p-4 font-medium rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse flex-row">
              {navLinks.length > 0 ? (
                navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="md:flex hidden py-2 text-sm px-3 md:text-base hover:text-gray-400 text-white rounded md:bg-transparent md:p-0"
                    >
                      {link.label}
                    </Link>
                    <Link
                      href={link.href}
                      className="flex md:hidden py-2 text-sm px-3 md:text-base hover:text-gray-400 text-white rounded md:bg-transparent md:p-0"
                    >
                      {link.icon}
                    </Link>
                  </li>
                ))
              ) : (
                <li className="text-white">No Links</li>
              )}
            </ul>
          </div>
          <div className="flex space-x-3 rtl:space-x-reverse">
            <LanguageSwitcher />
            <AnimatedModal buttonText={modalTexts[locale]} lang={locale} />
          </div>
        </div>
      </nav>
    </div>
  );
}