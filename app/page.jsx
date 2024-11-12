import React from "react";
import Header from "./components/Header";
import ScrollBackground from "./components/ScrollBackground";
import ProjectGrid from "./components/ProjectGrid";

export default function Home() {
  return (
    <>
      <section className="container mx-auto px-4 sm:px-8">
        <ScrollBackground />
        <header>
          <Header />
        </header>

        <div className="flex flex-col items-center justify-center mt-2 xl:mt-0 space-y-10">
          {/* Heading Section */}
          <div className="flex flex-col items-center text-center lg:text-left mt-6 md:mt-10 fade-in">
            <p className="text-silk text-4xl md:text-5xl flex gap-2">
              Data to <span> Insights</span>
            </p>
          </div>

          {/* Paragraph Section */}
          <div className="flex flex-col items-center text-center space-y-4 px-4 lg:px-0 fade-in fade-in-delay-100 max-w-2xl">
            <p className="text-silk text-sm md:text-base xl:text-xl">
              <span className="font-bold">
                Thank you for visiting my portfolio
              </span>{" "}
              — a showcase of transforming data into actionable insights. As a
              data scientist and machine learning specialist, I am committed to
              turning complex datasets into clear, strategic guidance that
              drives informed decision-making.
            </p>
            <p className="text-silk text-sm md:text-base xl:text-xl">
              My approach blends meticulous data exploration with the
              development of customized mathematical and AI models, ensuring
              each step is transparent, precise, and aligned with your
              objectives.
            </p>
            <p className="text-silk text-sm md:text-base xl:text-xl">
              Here, I bring both technical rigor and a passion for uncovering
              insights, helping your data tell the stories that lead to
              impactful outcomes.
            </p>
          </div>

          {/* Email Section */}
          <div className="mt-5 text-center">
            <p className="text-silk">contact@gmail.com</p>
          </div>
        </div>
      </section>

      {/* Scrollable Content Section */}
      <section className="container mx-auto px-4 sm:px-8 mt-16">
        <ProjectGrid />
        <ProjectGrid />
      </section>
      <div className="flex flex-col items-center justify-center mt-2 xl:mt-0 space-y-10">
        {/* Heading Section */}
        <div className="flex flex-col items-center text-center lg:text-left mt-6 md:mt-10 fade-in">
          <p className="text-silk text-4xl md:text-5xl flex gap-2">
            From insight to<span> action</span>
          </p>
        </div>

        {/* Paragraph Section */}
        <div className="flex flex-col items-center text-center space-y-4 px-4 lg:px-0 fade-in fade-in-delay-100 max-w-2xl">
          <p className="text-silk text-sm md:text-base xl:text-xl">
            this is where data’s true value is realized. The insights derived
            from thoughtful analysis are more than just knowledge; they are
            powerful tools for driving growth, optimizing processes, and
            uncovering new opportunities.
          </p>
          <p className="text-silk text-sm md:text-base xl:text-xl">
          With the right models and a strategic
            approach, these insights become the foundation for impactful
            decisions, guiding projects and companies toward measurable success.
          </p>
          <p className="text-silk text-sm md:text-base xl:text-xl">
          I invite you to explore the examples and case studies throughout my
            portfolio, showcasing how data-driven insights have been transformed
            into actions that make a difference.
          </p>
        </div>

        {/* Email Section */}
        <div className="my-5 text-center">
          <p className="text-silk">contact@gmail.com</p>
        </div>
      </div>
    </>
  );
}
