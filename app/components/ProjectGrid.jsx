"use client";
import * as d3 from "d3";
import { useEffect, useRef, useMemo } from "react";
import React from "react";
import FloatingDock from "./FloatingDock";
import { Accordion, AccordionItem } from "@heroui/react";

const AccordionDemo = ({ data2 }) => {
  return (
    <Accordion selectionMode="single">
      {data2.map((item, index) => (
        <AccordionItem className="flex outline-none flex-col items-center"
          key={index}
          aria-label={`Accordion ${index + 1}`}
          title={item.title}
        >
          <div className="gradient p-5 rounded-md">
            <div className="flex flex-col items-center">
              <div className="flex text-center">{item.description}</div>
            </div>
          </div>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

const MyChart = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    if (!data.length) return;

    const width = 928;
    const height = width;
    const margin = 1;

    const total = d3.sum(data, (d) => d.value);

    const pack = d3
      .pack()
      .size([width - margin * 2, height - margin * 2])
      .padding(3);

    const root = pack(d3.hierarchy({ children: data }).sum((d) => d.value));

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // Clear previous drawings

    svg
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [-margin, -margin, width, height])
      .attr("style", "max-width: 100%; height: auto; font: 10px sans-serif;")
      .attr("text-anchor", "middle");

    const node = svg
      .append("g")
      .selectAll("g")
      .data(root.leaves())
      .join("g")
      .attr("transform", (d) => `translate(${d.x},${d.y})`);

    node
      .append("title")
      .text((d) => `${d.data.id}\n${d3.format(",d")(d.value)}`);

    node
      .append("circle")
      .attr("fill-opacity", 0.7)
      .attr("fill", "#00879E")
      .attr("r", (d) => d.r);

    node
      .append("text")
      .style("fill", "white")
      .style("font-size", "25px")
      .style("pointer-events", "none")
      .selectAll("tspan")
      .data((d) => d.data.id.split(" "))
      .join("tspan")
      .attr("x", 0)
      .attr("y", (d, i, nodes) => `${i - nodes.length / 2 + 0.35}em`)
      .text((d) => d);

    node
      .append("text")
      .style("fill", "white")
      .style("font-size", "25px")
      .style("font-weight", "bold")
      .attr("dy", "2em")
      .text((d) => `${((d.data.value / total) * 100).toFixed(1)}%`);
  }, [data]);

  return <svg ref={svgRef}></svg>;
};

const ProjectGrid = ({ dir, heading, data, data2 }) => {
  return (
    <div
      dir={dir}
      className="flex flex-col md:flex-row min-h-screen text-white mb-24"
    >
      <div className="flex flex-col justify-center items-start md:w-1/2 w-full p-8 md:sticky top-0 md:h-screen">
        <div className="w-full text-center">
          <h2 className="text-2xl font-bold mb-4">{heading}</h2>
        </div>
        <div className="w-full">
          <MyChart data={data} />
        </div>
      </div>
      <div className="md:w-1/2 w-full overflow-y-auto flex flex-col justify-center items-center p-8 space-y-8">
        <AccordionDemo data2={data2} />
        <div className="md:flex md:flex-row hidden gap-5 mt-20 justify-center items-center md:space-x-4 space-y-4 md:space-y-0">
          <FloatingDock />
        </div>
      </div>
    </div>
  );
};

export default ProjectGrid;
