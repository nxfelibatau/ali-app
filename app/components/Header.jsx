"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedModal from "./AnimatedModal";

export default function Header({ logoAlt = "Logo", navLinks = [] }) {
  return (
    <div className="container mx-auto">
      <nav className="w-full z-20 top-0 start-0 border-b border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image src="/images/AG.png" className="h-8" alt={logoAlt} width={40} height={0} />
          </Link>
          <div className="items-center justify-between flex w-auto" id="navbar-sticky">
            <ul className="flex p-4 font-medium rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse flex-row">
              {navLinks.length > 0 ? (
                navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex py-2 text-sm px-3 md:text-base hover:text-gray-400 text-white rounded md:bg-transparent md:p-0"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))
              ) : (
                <li className="text-white">No Links</li>
              )}
            </ul>
          </div>
          <div className="flex space-x-3 rtl:space-x-reverse">
            <Link
              href="/"
              className="text-white text-sm bx bx-globe hover:text-gray-400 focus:ring-4 focus:outline-none font-medium rounded-lg md:text-lg md:px-4 py-2 text-center bg-transparent"
            ></Link>
            <div className="text-white bg-transparent hover:bg-gray-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm text-center">
              <AnimatedModal />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}