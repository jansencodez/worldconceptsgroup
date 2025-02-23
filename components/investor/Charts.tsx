// components/investor/Charts.tsx
"use client";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import { Pie, Line } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

const COLORS = ["#002366", "#007A4D", "#FFD700", "#EB5757", "#2D9CDB"];

export const PieChart = ({
  data,
}: {
  data: Array<{ name: string; value: number }>;
}) => {
  const chartData = {
    labels: data.map((item) => item.name),
    datasets: [
      {
        data: data.map((item) => item.value),
        backgroundColor: COLORS,
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right" as const,
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          padding: 20,
        },
      },
    },
  };

  return <Pie data={chartData} options={options} />;
};

export const LineChart = ({
  data,
}: {
  data: Array<{ month: string; wcg: number; market: number }>;
}) => {
  const chartData = {
    labels: data.map((item) => item.month),
    datasets: [
      {
        label: "WCG Performance",
        data: data.map((item) => item.wcg),
        borderColor: "#002366",
        backgroundColor: "#00236650",
        tension: 0.4,
        pointRadius: 5,
        borderWidth: 2, // Enhanced line thickness
      },
      {
        label: "Market Average",
        data: data.map((item) => item.market),
        borderColor: "#8884d8",
        backgroundColor: "#8884d850",
        tension: 0.4,
        pointRadius: 5,
        borderWidth: 2, // Enhanced line thickness
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Percentage Return",
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        position: "top" as const,
      },
      tooltip: {
        mode: "index" as const,
        intersect: false,
      },
    },
  };

  return <Line data={chartData} options={options} />;
};
