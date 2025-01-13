"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./components/Header";
import ProjectGrid from "./components/ProjectGrid";
import BackgroundBoxes from "./components/BackgroundBoxes";
import FloatingNavbar from "./components/FloatingNavbar";

export default function Page() {
  useEffect(() => {
    // Register GSAP ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Select all panels for the animation
    const panels = gsap.utils.toArray(".panel");

    // Remove the last panel if not needed in the animation
    panels.pop();

    // Loop through each panel and create the ScrollTrigger animation
    panels.forEach((panel, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: index === 0 ? "top top" : "bottom bottom", // Ensure first section animates normally
          end: index === 0 ? "5%" : "90%+=100% top",
          pinSpacing: index === 0 ? true : false, // Allow pinSpacing for the first section
          pin: true,
          scrub: true,
          // onRefresh: () =>
          //   gsap.set(panel, {
          //     transformOrigin:
          //       "center " +
          //       (panel.offsetHeight - window.innerHeight / 2) +
          //       "px",
          //   }),
        },
      });

      // Define animations for each panel
      tl.fromTo(
        panel,
        { y: 0, rotate: 0, scale: 1, opacity: 1 },
        { y: 0, rotateX: 0, scale: 0.5, opacity: 0.5 }
      ).to(panel, { opacity: 0 }, 0.1);
    });
  }, []);

  return (
    <>
      {/* Floating Navigation Bar */}
      <FloatingNavbar />

      {/* Main Wrapper */}
      <div className="relative w-full h-full">
        <header>
          <Header />
        </header>
        {/* First Section with Background Boxes */}
        <BackgroundBoxes>
          <div className="container mx-auto">
            <div
              className="flex flex-wrap px-4 sm:px-8 relative z-30 panel"
              style={{ minHeight: "100vh" }} // Ensure full height for the first section
            >
              {/* Heading Section */}
              <div className="w-1/2 flex items-center text-center">
                <p className="text-silk text-4xl md:text-5xl">
                  Data to <span className="font-bold">Insights</span>
                </p>
              </div>

              {/* Paragraph Section */}
              <div className="w-1/2 flex flex-col justify-center text-center max-w-2xl">
                <p className="text-silk text-base xl:text-xl">
                  <strong>Thank you for visiting my portfolio</strong> — a
                  showcase of transforming data into actionable insights. As a
                  data scientist and machine learning specialist, I am committed
                  to turning complex datasets into clear, strategic guidance.
                </p>
                <p className="text-silk text-base xl:text-xl">
                  My approach blends data exploration with customized
                  mathematical and AI models, ensuring transparency and
                  precision.
                </p>
                <p className="text-silk text-base xl:text-xl">
                  Here, I bring technical rigor and a passion for uncovering
                  insights to help your data tell impactful stories.
                </p>
              </div>

              {/* Contact Info */}
              <div className="w-full text-center">
                <p className="text-silk">contact@gmail.com</p>
              </div>
            </div>
          </div>
        </BackgroundBoxes>

        {/* Scrollable Content Section */}
        <section className="container mx-auto px-4 sm:px-8 mt-16 panel">
          <ProjectGrid dir="ltr" />
        </section>
        <section className="container mx-auto px-4 sm:px-8 mt-16 panel">
          <ProjectGrid dir="rtl" />
        </section>
        {/* Secondary Section */}
        <BackgroundBoxes>
          <div className="container mx-auto">
            <div
              className="flex flex-wrap px-4 sm:px-8 relative z-30 panel"
              style={{ minHeight: "100vh" }} // Ensure full height for the first section
            >
              {/* Heading Section */}
              <div className="w-1/2 flex items-center text-center">
                <p className="text-silk text-4xl md:text-5xl">
                  From <span className="font-bold">Insight</span> to action
                </p>
              </div>

              {/* Paragraph Section */}
              <div className="w-1/2 flex flex-col justify-center text-center max-w-2xl">
                <p className="text-silk text-base xl:text-xl">
                  This is where data's true value is realized. The isights
                  derived from thoughtful analysis are more than just knowledge;
                  they are powerful tools for driving growth, optimizing
                  procrsses, and uncovering new opportunities.
                </p>
                <p className="text-silk text-base xl:text-xl">
                  With the right models and a strategic approach, these insights
                  become the foundation for impactful decisions, guiding
                  projects and companies toward measurable success.
                </p>
                <p className="text-silk text-base xl:text-xl">
                  I invite you to explore the examples and case studies
                  throughout my portfolio, showcasing how data-driven insights
                  have been transformed into actions that make a difference.
                </p>
              </div>

              {/* Contact Info */}
              <div className="w-full text-center">
                <p className="text-silk">contact@gmail.com</p>
              </div>
            </div>
          </div>
        </BackgroundBoxes>
      </div>
    </>
  );
}
