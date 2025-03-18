"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectGrid from "../components/ProjectGrid"; // Ensure this import is correct
import BackgroundBoxes from "../components/BackgroundBoxes";
import FloatingNavbar from "../components/FloatingNavbar";
import GridBackground from "../components/GridBackground";
import StickyScrollReveal from "../components/StickyScrollReveal";
import Footer from "../components/Footer";

export default function Page() {
  useEffect(() => {
    // Register GSAP ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    const panels = gsap.utils.toArray(".panel");
    panels.pop();

    panels.forEach((panel, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: index === 0 ? "top top" : "bottom 30%+=100%",
          end: index === 0 ? "10%+=100% top" : "50%+=100% top",
          pinSpacing: index === 0 ? true : false,
          pin: true,
          scrub: true,
        },
      });

      tl.fromTo(
        panel,
        { y: 0, rotate: 0, scale: 1, opacity: 1 },
        { y: 0, rotateX: 0, scale: 1, opacity: 0.5 }
      ).to(panel, { opacity: 0 }, 0.1);
    });
  }, []);

  const chartData1 = [
    { id: "Machine Learning", value: 35 },
    { id: "Data Analysis", value: 25 },
    { id: "Deep Learning", value: 20 },
    { id: "Reinforcement Learning", value: 10 },
    { id: "Image Processing", value: 5 },
    { id: "Natural Language Processing", value: 5 },
  ];

  const chartData2 = [
    { id: "انگلیسی", value: 40 },
    { id: "آلمانی", value: 30 },
    { id: "فرانسوی", value: 10 },
  ];

  const capabilities = [
    {
      title: "یادگیری ماشین",
      description:
        "یادگیری ماشین شاخه‌ای از هوش مصنوعی است که بر توسعه الگوریتم‌ها و مدل‌های آماری تمرکز دارد که به کامپیوترها این امکان را می‌دهد که از داده‌ها یاد بگیرند و پیش‌بینی‌ها یا تصمیمات بر اساس داده‌ها بگیرند.",
      URL: "/images/machineLearning.jpg",
    },
    {
      title: "تحلیل داده‌ها",
      description:
        "تحلیل داده‌ها فرآیند بازرسی، تمیز کردن، تبدیل و مدل‌سازی داده‌ها است تا اطلاعات مفید، نتیجه‌گیری‌ها و بینش‌ها را کشف کنیم.",
      URL: "/images/dataAnalysis.jpg",
    },
    {
      title: "یادگیری عمیق",
      description:
        "یادگیری عمیق زیرمجموعه‌ای از یادگیری ماشین است که از شبکه‌های عصبی با لایه‌های متعدد برای یادگیری الگوهای پیچیده در مقادیر زیاد داده استفاده می‌کند.",
      URL: "/images/deepLearning.jpg",
    },
    {
      title: "یادگیری تقویتی",
      description:
        "یادگیری تقویتی نوعی از یادگیری ماشین است که در آن یک عامل از طریق تعامل با محیط و دریافت پاداش یا تنبیه، یاد می‌گیرد که چه تصمیماتی بگیرد.",
      URL: "/images/reinforecmentLearning.png",
    },
    {
      title: "پردازش تصویر",
      description:
        "پردازش تصویر تجزیه و تحلیل و دستکاری تصاویر دیجیتال به منظور بهبود کیفیت آنها یا استخراج اطلاعات مفید است.",
      URL: "/images/imageProcessing.jpg",
    },
    {
      title: "پردازش زبان طبیعی",
      description:
        "پردازش زبان طبیعی شاخه‌ای از هوش مصنوعی است که به کامپیوترها این امکان را می‌دهد تا زبان انسان را درک، تفسیر و تولید کنند.",
      URL: "/images/NLP.webp",
    },
  ];
  const languages = [
    {
      title: "آلمانی",
      description:
        "من در زبان آلمانی مهارت دارم، هم در صحبت کردن و هم در نوشتن. دانش من از زبان آلمانی از طریق آموزش رسمی و تجربه عملی به دست آمده است.",
      URL: "/images/machineLearning.jpg",
    },
    {
      title: "انگلیسی",
      description:
        "من تسلط بالایی به زبان انگلیسی دارم، هم در گفتار و هم در نوشتار. مهارت‌های من در زبان انگلیسی از طریق آموزش رسمی، تجربه حرفه‌ای و ارتباطات روزمره تقویت شده‌اند.",
      URL: "/images/machineLearning.jpg",
    },
    {
      title: "فارسی",
      description:
        "زبان فارسی زبان مادری من است و من در هر دو حالت گفتاری و نوشتاری مسلط هستم. بزرگ شدن در محیطی فارسی‌زبان به من این امکان را داده است که درک عمیقی از زبان و ظرایف آن پیدا کنم.",
      URL: "/images/machineLearning.jpg",
    },
  ];

  return (
    <>
      {/* Floating Navigation Bar */}
      <FloatingNavbar />

      {/* Main Wrapper */}
      <div className="relative w-full h-full">
        <main>
          {/* First Section with Background Boxes */}
          <BackgroundBoxes>
            <div className="container mx-auto">
              <div
                className="flex flex-wrap px-4 sm:px-8 relative z-30 panel"
                style={{ minHeight: "100vh" }}
              >
                {/* Heading Section */}
                <div className="md:w-1/2 w-full flex items-center justify-center md:justify-start text-center">
                  <p className="text-silk text-4xl md:text-5xl">
                    از داده‌ها به <span className="font-bold">بینش‌ها</span>
                  </p>
                </div>

                {/* Paragraph Section */}
                <div className="md:w-1/2 w-full flex flex-col justify-center text-center max-w-2xl">
                  <p className="text-silk font-semibold text-base xl:text-xl">
                    <strong className="text-2xl">از اینکه به پرتفولیوی من سر زدید سپاسگزارم</strong> — نمایشی از تبدیل داده‌ها به بینش‌های قابل اجرا. به عنوان یک دانشمند داده و متخصص یادگیری ماشین، من متعهد هستم که داده‌های پیچیده را به راهنمایی‌های استراتژیک و روشن تبدیل کنم.
                  </p>
                  <p className="text-silk font-semibold text-base xl:text-xl">
                    رویکرد من ترکیبی از کاوش در داده‌ها با مدل‌های ریاضی و هوش مصنوعی سفارشی است تا شفافیت و دقت را تضمین کند.
                  </p>
                  <p className="text-silk hidden md:block font-semibold text-base xl:text-xl">
                    در اینجا، من سخت‌کوشی فنی و اشتیاق برای کشف بینش‌ها را به کار می‌برم تا به داده‌ها کمک کنم داستان‌های تاثیرگذاری بگویند.
                  </p>
                </div>

                {/* Contact Info */}
                <div className="w-full text-center">
                  <p className="text-silk font-semibold">contact@gmail.com</p>
                </div>
              </div>
            </div>
          </BackgroundBoxes>

          {/* First ProjecrGrid Instance */}
          <GridBackground>
            <section className="panel">
              <div className="container mx-auto px-4 sm:px-8">
                <ProjectGrid
                  dir="ltr"
                  heading="توانایی‌های من"
                  data={chartData1}
                  data2={capabilities}
                />
              </div>
            </section>
          </GridBackground>

          {/* Second ProjecrGrid Instance */}
          <GridBackground>
            <section className="panel">
              <div className="container mx-auto px-4 sm:px-8 mb-26">
                <ProjectGrid
                  dir="rtl"
                  heading="مهارت‌های زبانی من"
                  data={chartData2}
                  data2={languages}
                />
              </div>
            </section>
          </GridBackground>
          {/* About me */}
          <GridBackground>
            <div className="panel">
            <StickyScrollReveal lang="fa" />
            </div>
          </GridBackground>
          {/* Secondary Section */}
          <BackgroundBoxes>
            <div className="container mx-auto">
              <div
                className="flex flex-wrap px-4 sm:px-8 relative z-30"
                style={{ minHeight: "100vh" }}
              >
                {/* Heading Section */}
                <div className="md:w-1/2 w-full flex items-center justify-center md:justify-start text-center">
                  <p className="text-navy text-4xl md:text-5xl">
                    از <span className="font-bold">بینش</span> به عمل
                  </p>
                </div>

                {/* Paragraph Section */}
                <div className="md:w-1/2 w-full flex flex-col justify-center text-center max-w-2xl">
                  <p className="text-navy font-semibold text-base xl:text-xl">
                    اینجا جایی است که ارزش واقعی داده‌ها درک می‌شود. بینش‌هایی که از تحلیل‌های دقیق به دست می‌آید، بیشتر از دانشی صرف هستند؛ آنها ابزارهای قدرتمندی برای پیشبرد رشد، بهینه‌سازی فرآیندها و کشف فرصت‌های جدید هستند.
                  </p>
                  <p className="text-navy font-semibold text-base xl:text-xl">
                    با مدل‌های درست و یک رویکرد استراتژیک، این بینش‌ها تبدیل به اساس تصمیمات تاثیرگذار می‌شوند که پروژه‌ها و شرکت‌ها را به سوی موفقیت‌های قابل اندازه‌گیری هدایت می‌کنند.
                  </p>
                  <p className="text-navy hidden md:block font-semibold text-base xl:text-xl">
                    من از شما دعوت می‌کنم تا نمونه‌ها و مطالعات موردی در سراسر پرتفولیوی من را بررسی کنید، که نحوه تبدیل بینش‌های داده‌محور به اقداماتی را که تفاوت ایجاد کرده‌اند نشان می‌دهند.
                  </p>
                </div>

                {/* Contact Info */}
                <div className="w-full text-center">
                  <p className="text-navy font-semibold">contact@gmail.com</p>
                </div>
              </div>
            </div>
          </BackgroundBoxes>
        </main>
        <footer className="panel">
          <Footer />
        </footer>
      </div>
    </>
  );
}
