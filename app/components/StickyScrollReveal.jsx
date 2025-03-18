"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const getContent = (lang) => {
  return lang === "fa"
    ? [
        {
          title: "ویرایش گروهی",
          description:
            "با تیم، مشتریان و ذینفعان خود در زمان واقعی کار کنید. روی اسناد همکاری کنید، ایده‌ها را به اشتراک بگذارید و سریع تصمیم بگیرید. با پلتفرم ما، می‌توانید روند کار خود را ساده‌تر و بهره‌وری را افزایش دهید.",
          content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
              ویرایش گروهی
            </div>
          ),
        },
        {
          title: "تغییرات لحظه‌ای",
          description:
            "تغییرات را همان لحظه ببینید. با پلتفرم ما، می‌توانید هر تغییری را در لحظه مشاهده کنید. دیگر نگران آخرین نسخه‌ی پروژه‌ی خود نباشید. با به‌روزرسانی‌های هم‌زمان، از آشفتگی کنترل نسخه خداحافظی کنید.",
          content: (
            <div className="h-full w-full flex items-center justify-center text-white">
              تغییرات لحظه‌ای
            </div>
          ),
        },
        {
          title: "کنترل نسخه",
          description:
            "با بروزرسانی‌های لحظه‌ای، دیگر نگران کنترل نسخه نباشید. پلتفرم ما تضمین می‌کند که همیشه روی آخرین نسخه‌ی پروژه‌ی خود کار می‌کنید. بدون نیاز به بروزرسانی‌های دستی، تیم خود را هماهنگ نگه دارید.",
          content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
              کنترل نسخه
            </div>
          ),
        },
        {
          title: "محتوا کم آوردی؟",
          description:
            "با بروزرسانی‌های لحظه‌ای، دیگر نگران کنترل نسخه نباشید. پلتفرم ما تضمین می‌کند که همیشه روی آخرین نسخه‌ی پروژه‌ی خود کار می‌کنید. بدون نیاز به بروزرسانی‌های دستی، تیم خود را هماهنگ نگه دارید.",
          content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
              محتوا کم آوردی؟
            </div>
          ),
        },
      ]
    : [
        {
          title: "Collaborative Editing",
          description:
            "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
          content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
              Collaborative Editing
            </div>
          ),
        },
        {
          title: "Real-time changes",
          description:
            "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
          content: (
            <div className="h-full w-full flex items-center justify-center text-white">
              Real-time changes
            </div>
          ),
        },
        {
          title: "Version control",
          description:
            "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
          content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
              Version control
            </div>
          ),
        },
        {
          title: "Running out of content",
          description:
            "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
          content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
              Running out of content
            </div>
          ),
        },
      ];
};

export default function StickyScrollRevealDemo({ lang = "en" }) {
  const content = getContent(lang);

  return (
    <div className="p-10 mt-20">
      <StickyScroll content={content} />
    </div>
  );
}
