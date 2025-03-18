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
    { id: "English", value: 40 },
    { id: "Germany", value: 30 },
    { id: "French", value: 10 },
  ];

  const capabilities = [
    {
      title: "Machine Learning",
      description:
        "Machine learning is a branch of artificial intelligence that focuses on developing algorithms and statistical models that enable computers to learn from and make predictions or decisions based on data. ",
      URL: "/images/machineLearning.jpg",
    },
    {
      title: "Data Analysis",
      description:
        "Data analysis is the process of inspecting, cleansing, transforming, and modeling data to uncover useful information, conclusions, and insights.",
      URL: "/images/dataAnalysis.jpg",
    },
    {
      title: "Deep Learning",
      description:
        "Deep learning is a subset of machine learning that uses neural networks with many layers to learn complex patterns in large amounts of data.",
      URL: "/images/deepLearning.jpg",
    },
    {
      title: "Reinforcement Learning",
      description:
        "Reinforcement learning is a type of machine learning where an agent learns to make decisions by interacting with an environment and receiving rewards or punishments.",
      URL: "/images/reinforecmentLearning.png",
    },
    {
      title: "Image Processing",
      description:
        "Image processing is the analysis and manipulation of digital images to improve their quality or extract useful information. ",
      URL: "/images/imageProcessing.jpg",
    },
    {
      title: "Natural Language Processing",
      description:
        "Natural language processing is a field of artificial intelligence that focuses on enabling computers to understand, interpret, and generate human language.",
      URL: "/images/NLP.webp",
    },
  ];
  const languages = [
    {
      title: "Germany",
      description:
        "I am proficient in Germany, both in speaking and writing. My knowledge of the German language has been acquired through formal education and practical experience.",
      URL: "/images/machineLearning.jpg",
    },
    {
      title: "English",
      description:
        "I have a strong command of the English language, both in spoken and written forms. I have honed my English skills through formal education, professional experience, and everyday communication.",
      URL: "/images/machineLearning.jpg",
    },
    {
      title: "Persian",
      description:
        "Persian is my native language, and I am fluent in both spoken and written forms. Growing up in a Persian-speaking environment has allowed me to develop a deep understanding of the language and its nuances.",
      URL: "/images/machineLearning.jpg",
    },
  ];

  return (
    <>
      {/* Floating Navigation Bar */}
      <FloatingNavbar locale="en"/>

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
                    Data to <span className="font-bold">Insights</span>
                  </p>
                </div>

                {/* Paragraph Section */}
                <div className="md:w-1/2 w-full flex flex-col justify-center text-center max-w-2xl">
                  <p className="text-silk font-semibold text-base xl:text-xl">
                    <strong>Thank you for visiting my portfolio</strong> — a
                    showcase of transforming data into actionable insights. As a
                    data scientist and machine learning specialist, I am
                    committed to turning complex datasets into clear, strategic
                    guidance.
                  </p>
                  <p className="text-silk font-semibold text-base xl:text-xl">
                    My approach blends data exploration with customized
                    mathematical and AI models, ensuring transparency and
                    precision.
                  </p>
                  <p className="text-silk hidden md:block font-semibold text-base xl:text-xl">
                    Here, I bring technical rigor and a passion for uncovering
                    insights to help your data tell impactful stories.
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
                  heading="What I'm capable of?"
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
                  heading="My Language Skills"
                  data={chartData2}
                  data2={languages}
                />
              </div>
            </section>
          </GridBackground>
          {/* About me */}
          <GridBackground>
            <div className="panel">
            <StickyScrollReveal lang="en" />
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
                    From <span className="font-bold">Insight</span> to action
                  </p>
                </div>

                {/* Paragraph Section */}
                <div className="md:w-1/2 w-full flex flex-col justify-center text-center max-w-2xl">
                  <p className="text-navy font-semibold text-base xl:text-xl">
                    This is where data's true value is realized. The isights
                    derived from thoughtful analysis are more than just
                    knowledge; they are powerful tools for driving growth,
                    optimizing procrsses, and uncovering new opportunities.
                  </p>
                  <p className="text-navy font-semibold text-base xl:text-xl">
                    With the right models and a strategic approach, these
                    insights become the foundation for impactful decisions,
                    guiding projects and companies toward measurable success.
                  </p>
                  <p className="text-navy hidden md:block font-semibold text-base xl:text-xl">
                    I invite you to explore the examples and case studies
                    throughout my portfolio, showcasing how data-driven insights
                    have been transformed into actions that make a difference.
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
          <Footer lang="en"/>
        </footer>
      </div>
    </>
  );
}
