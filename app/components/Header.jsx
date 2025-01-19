import React from "react";
import Image from "next/image";
import Link from "next/link";
import "boxicons/css/boxicons.min.css";
import AnimatedModal from "./AnimatedModal";

export default function Header() {
  return (
    <div className="container mx-auto">
      <nav className="dark:bg-transparent w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1 lg:p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/images/AG.png"
              className="h-8"
              alt="Flowbite Logo"
              width={40}
              height={0}
            ></Image>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="text-white bx bx-globe hover:text-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-4 py-2 text-center bg-transparent dark:hover:bg-gray-700 dark:focus:ring-blue-800"
            ></button>
            <div
              className="text-white bg-transparent hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:hover:bg-gray-700 dark:focus:ring-blue-800"
            >
              <AnimatedModal />
            </div>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 bg-transparent"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 dark:bg-transparent">
              <li>
                <Link
                  href="/"
                  className="block py-2 px-3 hover:text-gray-400 text-white rounded md:bg-transparent md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="block py-2 px-3 hover:text-gray-400 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:text-white md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="block py-2 px-3 hover:text-gray-400 text-gray-900 rounded md:text-white hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
