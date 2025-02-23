// Updated SectorChart.tsx
"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";
import { useWindowSize } from "@/hooks/useWindowSize"; // Create this hook

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

interface Sector {
  title: string;
  stats: {
    investments: string;
    projects: string;
  };
}

export const SectorInvestmentsBarChart = ({
  sectors,
}: {
  sectors: Sector[];
}) => {
  const { width } = useWindowSize();
  const isMobile = width < 768;

  const data = {
    labels: sectors.map((sector) => sector.title),
    datasets: [
      {
        label: "Total Investments",
        data: sectors.map((sector) =>
          parseFloat(sector.stats.investments.replace("$", "").replace("B", ""))
        ),
        backgroundColor: "#4f46e5",
        borderColor: "#4f46e5",
        borderWidth: 1,
        barThickness: isMobile ? 20 : 40, // Adjust based on screen size
        categoryPercentage: 0.8, // Use more space for bars
      },
    ],
  };

  const options = {
    indexAxis: isMobile ? ("y" as const) : ("x" as const), // Horizontal on mobile
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
        labels: { font: { size: isMobile ? 12 : 14, family: "'Inter', sans-serif" } },
      },
      title: {
        display: true,
        text: "Sector Investment Distribution",
        font: { size: isMobile ? 16 : 18 },
      },
    },
    scales: {
      x: {
        title: {
          display: !isMobile,
          text: "Billions (USD)",
          font: { size: isMobile ? 12 : 14 },
        },
        ticks: { font: { size: isMobile ? 10 : 12 } },
      },
      y: {
        title: {
          display: isMobile,
          text: "Sectors",
          font: { size: isMobile ? 12 : 14 },
        },
        ticks: {
          font: { size: isMobile ? 10 : 12 },
          autoSkip: false, // Show all labels
        },
      },
    },
  };

  return (
    <div className="h-[300px] sm:h-[400px]">
      {" "}
      {/* Responsive container */}
      <Bar data={data} options={options} />
    </div>
  );
};

export const ProjectsPieChart = ({ sectors }: { sectors: Sector[] }) => {
  const data = {
    labels: sectors.map((sector) => sector.title),
    datasets: [
      {
        label: "Projects",
        data: sectors.map((sector) =>
          parseInt(sector.stats.projects.replace("+", ""))
        ),
        backgroundColor: [
          "#4f46e5",
          "#06b6d4",
          "#8b5cf6",
          "#10b981",
          "#f59e0b",
          "#ef4444",
        ],
        borderWidth: 0,
      },
    ],
  };

  return (
    <Pie
      data={data}
      options={{
        plugins: {
          legend: { position: "bottom" },
          tooltip: {
            callbacks: {
              label: (ctx) => `${ctx.label}: ${ctx.formattedValue} projects`,
            },
          },
        },
      }}
    />
  );
};
