"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./components/Header";
import ProjectGrid from "./components/ProjectGrid"; // Ensure this import is correct
import BackgroundBoxes from "./components/BackgroundBoxes";
import FloatingNavbar from "./components/FloatingNavbar";
import GridBackground from "./components/GridBackground";
import StickyScrollReveal from "./components/StickyScrollReveal";

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
          start: index === 0 ? "top top" : "bottom bottom",
          end: "70%+=100% top",
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

  return (
    <>
      {/* Floating Navigation Bar */}
      <FloatingNavbar />

      {/* Main Wrapper */}
      <div className="relative w-full h-full">
        <header>
          <Header />
        </header>
        <main>
          {/* First Section with Background Boxes */}
          <BackgroundBoxes>
            <div className="container mx-auto">
              <div
                className="flex flex-wrap px-4 sm:px-8 relative z-30 panel"
                style={{ minHeight: "100vh" }}
              >
                {/* Heading Section */}
                <div className="w-1/2 flex items-center text-center">
                  <p className="text-silk text-4xl md:text-5xl">
                    Data to <span className="font-bold">Insights</span>
                  </p>
                </div>

                {/* Paragraph Section */}
                <div className="w-1/2 flex flex-col justify-center text-center max-w-2xl">
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
                  <p className="text-silk font-semibold text-base xl:text-xl">
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
          <section className="panel">
            <GridBackground>
              <div className="container mx-auto px-4 sm:px-8 mt-16">
                <ProjectGrid
                  dir="ltr"
                  heading="What I'm capable of?"
                  data={chartData1}
                />
              </div>
            </GridBackground>
          </section>

          {/* Second ProjecrGrid Instance */}
          <section className="panel">
            <GridBackground>
              <div className="container mx-auto px-4 sm:px-8 mt-16">
                <ProjectGrid
                  dir="rtl"
                  heading="My Language Skills"
                  data={chartData2}
                />
              </div>
            </GridBackground>
          </section>
          <div className="panel">
            <GridBackground>
              <StickyScrollReveal />
            </GridBackground>
          </div>
          {/* Secondary Section */}
          <BackgroundBoxes>
            <div className="container mx-auto">
              <div
                className="flex flex-wrap px-4 sm:px-8 relative z-30 panel"
                style={{ minHeight: "100vh" }}
              >
                {/* Heading Section */}
                <div className="w-1/2 flex items-center text-center">
                  <p className="text-navy text-4xl md:text-5xl">
                    From <span className="font-bold">Insight</span> to action
                  </p>
                </div>

                {/* Paragraph Section */}
                <div className="w-1/2 flex flex-col justify-center text-center max-w-2xl">
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
                  <p className="text-navy font-semibold text-base xl:text-xl">
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
      </div>
    </>
  );
}
