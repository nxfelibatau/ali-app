"use client";
import * as d3 from "d3";
import { useEffect, useRef } from "react";
import React from "react";
import FloatingDock from "./FloatingDock";
import { Accordion, AccordionItem } from "@heroui/react";
import Image from "next/image";

const AccordionDemo = ({ data2 }) => {
  return (
    <Accordion selectionMode="single">
      {data2.map((item, index) => (
        <AccordionItem
          key={index}
          aria-label={`Accordion ${index + 1}`}
          title={item.title}
        >
          <div className="gradient p-5 rounded-md">
            <div className="flex flex-col items-center">
              <Image
                src={item.URL}
                className=""
                alt="Image"
                width={100}
                height={100}
              ></Image>
              <div className="flex text-center">{item.description}</div>
            </div>
          </div>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

const MyChart = ({ data }) => {
  // Accept 'data' prop here
  const svgRef = useRef();

  useEffect(() => {
    const width = 928;
    const height = width;
    const margin = 1;

    const total = d3.sum(data, (d) => d.value);

    const format = d3.format(",d");
    const color = d3.scaleOrdinal(d3.schemeTableau10);

    const pack = d3
      .pack()
      .size([width - margin * 2, height - margin * 2])
      .padding(3);

    const root = pack(d3.hierarchy({ children: data }).sum((d) => d.value));

    const svg = d3
      .select(svgRef.current)
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

    // Tooltip title
    node.append("title").text((d) => `${d.data.id}\n${format(d.value)}`);

    // Bubbles
    node
      .append("circle")
      .attr("fill-opacity", 0.7)
      .attr("fill", (d) => color(d.data.id))
      .attr("r", (d) => d.r);

    // Labels
    node
      .append("text")
      .style("fill", "white")
      .style("font-size", "20px")
      .style("pointer-events", "none")
      .selectAll("tspan")
      .data((d) => d.data.id.split(" "))
      .join("tspan")
      .attr("x", 0)
      .attr("y", (d, i, nodes) => `${i - nodes.length / 2 + 0.35}em`)
      .text((d) => d);

    // Percentage values
    node
      .append("text")
      .style("fill", "white")
      .style("font-size", "20px")
      .style("font-weight", "bold")
      .attr("dy", "1.85em")
      .text((d) => `${((d.data.value / total) * 100).toFixed(1)}%`);
  }, [data]); // Dependency on data to update chart when data changes

  return <svg ref={svgRef}></svg>;
};

const ProjecrGrid = ({ dir, heading, data, data2 }) => {
  return (
    <div
      dir={dir}
      className="flex flex-col md:flex-row min-h-screen text-white"
    >
      {/* Sidebar Section */}
      <div className="flex flex-col justify-center items-start md:w-1/2 w-full p-8 md:sticky top-0 md:h-screen">
        <div className="w-full text-center">
          <h2 className="text-2xl font-bold mb-4">{heading}</h2>
        </div>
        <div className="w-full">
          <MyChart data={data} />
        </div>
      </div>

      {/* Scrollable Section */}
      <div className="md:w-1/2 w-full overflow-y-auto flex flex-col justify-center items-center p-8 space-y-8">
        <AccordionDemo data2={data2} />
        <div className="flex flex-row gap-5 mt-20 justify-center items-center md:space-x-4 space-y-4 md:space-y-0">
          <FloatingDock />
        </div>
      </div>
    </div>
  );
};

export default ProjecrGrid;
