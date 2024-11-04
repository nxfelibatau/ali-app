"use client";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, Tooltip, Legend, CategoryScale, LinearScale } from "chart.js";

ChartJS.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale);

const data = {
  labels: ["Machine Learning", "Data Analysis", "Deep Learning", "Reinforcement Learning", "Image Processing", "Natural Language Processing"],
  datasets: [
    {
      label: "Skills",
      data: [35, 25, 20, 10, 5, 5],
      backgroundColor: [
        "rgba(223, 200, 191, 0.774)",
        "rgba(157, 150, 145, 0.774)",
        "rgba(177, 145, 107, 0.774)",
        "rgba(157, 100, 90, 0.744)",
        "rgba(93, 140, 100, 0.774)",
        "rgba(216, 205, 99, 0.744)",
      ],
      borderColor: [
        "rgba(223, 200, 191)",
        "rgba(157, 150, 145)",
        "rgba(177, 145, 107)",
        "rgba(157, 100, 90)",
        "rgba(93, 140, 100)",
        "rgba(216, 205, 99)",
      ],
      borderWidth: 2,
    },
  ],
};

const options = {
  responsive: true,
  indexAxis: 'y', // Set axis to horizontal
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: function (tooltipItem) {
          return `${tooltipItem.raw}%`; // Display percentage in tooltip
        },
      },
      bodyColor: "#FFFFFF", // Tooltip text color
      titleColor: "#FFFFFF", // Tooltip title color
    },
    title: {
      display: true,
      text: "Skills Distribution",
      color: "#FFFFFF", // Title color
    },
  },
  scales: {
    x: {
      beginAtZero: true,
      max: 100, // Set maximum to 100 for percentage scale
      ticks: {
        callback: function (value) {
          return `${value}%`; // Display percentage symbol on x-axis
        },
        color: "#FFFFFF", // X-axis tick color
      },
      grid: {
        color: "rgba(255, 255, 255, 0.2)", // Light white grid lines
      },
    },
    y: {
      ticks: {
        color: "#FFFFFF", // Y-axis tick color
      },
      grid: {
        color: "rgba(255, 255, 255, 0.2)", // Light white grid lines
      },
    },
  },
};

export default function MyChart() {
  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
}
