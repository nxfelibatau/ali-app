"use client";
import React from "react";
import Header from "./components/Header";
import ScrollBackground from "./components/ScrollBackground";
import ProjectGrid from "./components/ProjectGrid";
import BackgroundBoxesDemo from "./components/BackgroundBoxes";
import FloatingNavbar from "./components/FloatingNavbar";

export default function Home() {
  return (
    <>
      <FloatingNavbar/>
      {/* Scrollable Background Wrapper */}
      <div className="relative w-full h-full">
        <ScrollBackground /> {/* ScrollBackground spans the entire page */}
        {/* First Section with BackgroundBoxesDemo */}
        <BackgroundBoxesDemo>
          {/* Main Content */}
          <div className="container mx-auto px-4 sm:px-8 relative z-30">
            <header>
              <Header />
            </header>

            <div className="flex flex-col items-center justify-center mt-10 space-y-10">
              {/* Heading Section */}
              <div className="text-center">
                <p className="text-silk text-4xl md:text-5xl">
                  Data to <span className="font-bold">Insights</span>
                </p>
              </div>

              {/* Paragraph Section */}
              <div className="text-center space-y-4 max-w-2xl">
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
              <div className="text-center">
                <p className="text-silk">contact@gmail.com</p>
              </div>
            </div>
          </div>
        </BackgroundBoxesDemo>
        {/* Scrollable Content Section */}
        <section className="container mx-auto px-4 sm:px-8 mt-16">
          <ProjectGrid dir="ltr" />
          <ProjectGrid dir="rtl" />
        </section>
        {/* Secondary Section */}
        <div className="flex flex-col items-center justify-center mt-16 space-y-10">
          <div className="text-center">
            <p className="text-silk text-4xl md:text-5xl">
              From <span className="font-bold">Insight</span> to Action
            </p>
          </div>

          <div className="text-center space-y-4 max-w-2xl">
            <p className="text-silk text-base xl:text-xl">
              this is where data’s true value is realized. The insights derived
              from thoughtful analysis are more than just knowledge; they are
              powerful tools for driving growth, optimizing processes, and
              uncovering new opportunities.
            </p>
            <p className="text-silk text-base xl:text-xl">
              With the right models and a strategic approach, these insights
              become the foundation for impactful decisions, guiding projects
              and companies toward measurable success.
            </p>
            <p className="text-silk text-base xl:text-xl">
              I invite you to explore the examples and case studies throughout
              my portfolio, showcasing how data-driven insights have been
              transformed into actions that make a difference.
            </p>
          </div>

          <div className="text-center">
            <p className="text-silk">contact@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
}
