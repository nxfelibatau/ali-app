"use client";

import * as d3 from "d3";
import { useEffect, useRef } from "react";

const MyChart = () => {
  const svgRef = useRef();

  useEffect(() => {
    const width = 928;
    const height = width;
    const margin = 1;

    // Updated labels and values
    const data = [
      { id: "Machine Learning", value: 35 },
      { id: "Data Analysis", value: 25 },
      { id: "Deep Learning", value: 20 },
      { id: "Reinforcement Learning", value: 10 },
      { id: "Image Processing", value: 5 },
      { id: "Natural Language Processing", value: 5 },
    ];

    const total = d3.sum(data, (d) => d.value);

    const format = d3.format(",d");
    const color = d3.scaleOrdinal(d3.schemeTableau10);

    const pack = d3.pack().size([width - margin * 2, height - margin * 2]).padding(3);

    const root = pack(
      d3.hierarchy({ children: data }).sum((d) => d.value)
    );

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
    node
      .append("title")
      .text((d) => `${d.data.id}\n${format(d.value)}`);

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
  }, []);

  return <svg ref={svgRef}></svg>;
};

export default MyChart;