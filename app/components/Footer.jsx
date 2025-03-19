import React, { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer({ lang = "en" }) {
  const text = useMemo(() => ({
    en: {
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      home: "Home",
      courses: "Courses",
      projects: "Projects",
    },
    fa: {
      description: "لورم ایپسوم متن ساختگی است که برای نمایش استفاده می‌شود.",
      home: "خانه",
      courses: "دوره‌ها",
      projects: "پروژه‌ها",
    },
  }), []);

  return (
    <footer>
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center text-teal-600">
          <Image
            src="/images/AliGH.png"
            alt="Logo"
            width={150}
            height={50}
            className="object-contain"
          />
        </div>

        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
          {text[lang]?.description}
        </p>

        <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          {['home', 'courses', 'projects'].map((key) => (
            <li key={key}>
              <Link className="text-gray-700 hover:text-gray-700/75" href="#">
                {text[lang]?.[key]}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}