"use client";

import React from "react";
import { Chart, registerables } from "chart.js";
import { Line, Pie } from "react-chartjs-2";
import { FiArrowUpRight, FiInfo } from "react-icons/fi";
import { format } from "date-fns";

Chart.register(...registerables);

interface Sector {
  name: string;
  value: number;
  color: string;
  returns: number;
}

interface PerformanceData {
  date: string;
  value: number;
}

const PortfolioPage: React.FC = () => {
  // Sample data without static allocations
  const sectors: Sector[] = [
    { name: "Healthcare", value: 2500000, color: "#3B82F6", returns: 12.5 },
    { name: "Real Estate", value: 1800000, color: "#10B981", returns: 8.2 },
    { name: "AgriTech", value: 1200000, color: "#F59E0B", returns: 15.1 },
    { name: "Digital Infra", value: 900000, color: "#8B5CF6", returns: 22.4 },
    { name: "Consumer", value: 600000, color: "#EC4899", returns: 5.7 },
    { name: "Finance", value: 400000, color: "#EF4444", returns: 18.9 },
  ];

  const performanceData: PerformanceData[] = [
    { date: "Jan", value: 4500000 },
    { date: "Feb", value: 5200000 },
    { date: "Mar", value: 6100000 },
    { date: "Apr", value: 5800000 },
    { date: "May", value: 6300000 },
    { date: "Jun", value: 6700000 },
  ];

  // Calculate totals and allocations
  const totalValue = sectors.reduce((sum, sector) => sum + sector.value, 0);
  const totalReturns = sectors.reduce(
    (sum, sector) => sum + (sector.value * sector.returns) / 100,
    0
  );

  // Calculate dynamic allocations
  const sectorsWithAllocation = sectors.map((sector) => ({
    ...sector,
    allocation: (sector.value / totalValue) * 100,
  }));

  // Find best performing sector
  const bestPerforming = sectorsWithAllocation.reduce(
    (max, current) => (current.returns > max.returns ? current : max),
    sectorsWithAllocation[0]
  );

  // Chart.js data configuration
  const allocationData = {
    labels: sectorsWithAllocation.map((s) => s.name),
    datasets: [
      {
        data: sectorsWithAllocation.map((s) => s.allocation),
        backgroundColor: sectorsWithAllocation.map((s) => s.color),
        borderColor: "#fff",
        borderWidth: 2,
      },
    ],
  };

  const performanceChartData = {
    labels: performanceData.map((d) => d.date),
    datasets: [
      {
        label: "Portfolio Value",
        data: performanceData.map((d) => d.value),
        borderColor: "#3B82F6",
        tension: 0.4,
        fill: false,
        pointRadius: 0,
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold text-gray-900">
            Investment Portfolio
          </h1>
          <div className="flex items-center space-x-4">
            <div className="text-sm bg-white px-4 py-2 rounded-lg shadow-sm">
              <span className="text-gray-500">As of: </span>
              {format(new Date(), "MM/dd/yyyy")}
            </div>
          </div>
        </div>

        {/* Portfolio Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-500 text-sm">Total Value</h3>
              <FiInfo className="text-gray-400" />
            </div>
            <div className="text-3xl font-bold text-gray-900">
              Ksh. {(totalValue / 1000000).toFixed(2)}M
            </div>
            <div className="flex items-center text-green-500 text-sm mt-2">
              <FiArrowUpRight className="mr-1" />
              +12.4% vs last quarter
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-500 text-sm">Total Returns</h3>
              <FiInfo className="text-gray-400" />
            </div>
            <div className="text-3xl font-bold text-gray-900">
              Ksh. {(totalReturns / 1000).toFixed(1)}K
            </div>
            <div className="flex items-center text-green-500 text-sm mt-2">
              <FiArrowUpRight className="mr-1" />
              +6.8% YTD
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-500 text-sm">Best Performing</h3>
              <FiInfo className="text-gray-400" />
            </div>
            <div className="text-xl font-bold text-gray-900">
              {bestPerforming.name}
            </div>
            <div className="text-purple-600 text-sm mt-2">
              +{bestPerforming.returns.toFixed(1)}% returns
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Allocation Pie Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Portfolio Allocation</h3>
          <div className="h-64">
            <Pie
              data={allocationData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: { display: false },
                  tooltip: {
                    callbacks: {
                      label: (context) => {
                        const sector = sectorsWithAllocation[context.dataIndex];
                        return `${sector.name}: ${sector.allocation.toFixed(
                          2
                        )}% (Ksh. ${(sector.value / 1000000).toFixed(2)}M)`;
                      },
                    },
                  },
                },
              }}
            />
          </div>
        </div>

        {/* Performance Line Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Portfolio Performance</h3>
            <select className="bg-gray-50 px-3 py-1 rounded-lg text-sm">
              <option>1M</option>
              <option>6M</option>
              <option>1Y</option>
              <option>All</option>
            </select>
          </div>
          <div className="h-64">
            <Line
              data={performanceChartData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  y: {
                    ticks: {
                      callback: (value) =>
                        `Ksh. ${(Number(value) / 1000000).toFixed(1)}M`,
                    },
                  },
                },
                plugins: {
                  tooltip: {
                    callbacks: {
                      label: (context) =>
                        `Ksh. ${(Number(context.raw) / 1000000).toFixed(2)}M`,
                    },
                  },
                },
              }}
            />
          </div>
        </div>
      </div>

      {/* Sector Breakdown */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-6">Sector Breakdown</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectorsWithAllocation.map((sector) => (
            <div
              key={sector.name}
              className="group border rounded-lg p-4 hover:bg-gray-50 transition-colors"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="font-medium text-gray-900">{sector.name}</h4>
                  <p className="text-gray-500 text-sm">
                    Allocation: {sector.allocation.toFixed(1)}%
                  </p>
                </div>
                <div
                  className="text-sm font-medium"
                  style={{ color: sector.color }}
                >
                  +{sector.returns.toFixed(1)}%
                </div>
              </div>
              <div className="relative pt-2">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block">
                      Ksh. {(sector.value / 1000000).toFixed(2)}M
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-100">
                  <div
                    style={{
                      width: `${sector.allocation}%`,
                      backgroundColor: sector.color,
                    }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
