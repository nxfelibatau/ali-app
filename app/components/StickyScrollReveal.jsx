"use client";
import React, { useMemo } from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const getContent = (lang) => {
  return [
    {
      title: lang === "fa" ? "ویرایش گروهی" : "Collaborative Editing",
      description:
        lang === "fa"
          ? "با تیم، مشتریان و ذینفعان خود در زمان واقعی کار کنید. روی اسناد همکاری کنید، ایده‌ها را به اشتراک بگذارید و سریع تصمیم بگیرید. با پلتفرم ما، می‌توانید روند کار خود را ساده‌تر و بهره‌وری را افزایش دهید."
          : "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          {lang === "fa" ? "ویرایش گروهی" : "Collaborative Editing"}
        </div>
      ),
    },
    {
      title: lang === "fa" ? "تغییرات لحظه‌ای" : "Real-time changes",
      description:
        lang === "fa"
          ? "تغییرات را همان لحظه ببینید. با پلتفرم ما، می‌توانید هر تغییری را در لحظه مشاهده کنید. دیگر نگران آخرین نسخه‌ی پروژه‌ی خود نباشید. با به‌روزرسانی‌های هم‌زمان، از آشفتگی کنترل نسخه خداحافظی کنید."
          : "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          {lang === "fa" ? "تغییرات لحظه‌ای" : "Real-time changes"}
        </div>
      ),
    },
  ];
};

export default function StickyScrollRevealDemo({ lang = "en" }) {
  const content = useMemo(() => getContent(lang), [lang]);

  return (
    <div className="p-10 mt-20">
      <StickyScroll content={content} />
    </div>
  );
}
