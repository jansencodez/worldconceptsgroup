// app/(investant-portal)/page.tsx
"use client";

import { PieChart, LineChart } from "@/components/investor/Charts";
import { motion } from "framer-motion";

export default function Dashboard() {
  // Sample data
  const portfolioData = [
    { name: "Healthcare", value: 45 },
    { name: "Real Estate", value: 30 },
    { name: "Agriculture", value: 25 },
  ];

  const performanceData = [
    { month: "Jan", wcg: 15, market: 8 },
    { month: "Feb", wcg: 18, market: 9 },
    { month: "Mar", wcg: 21, market: 7 },
  ];

  return (
    <div className="space-y-3 md:space-y-6 p-3 md:p-6">
      {/* Welcome Banner */}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-primary-600 p-4 rounded-xl text"
      >
        <div className="space-y-1">
          <p className="text-xs md:text-base text-primary-100">
            ROI: <span className="text-accent-400">18.7%</span>
          </p>
        </div>
      </motion.div>

      {/* Portfolio Overview */}
      <motion.div
        initial={{ scale: 0.98 }}
        animate={{ scale: 1 }}
        className="bg-white dark:bg-gray-900 p-3 md:p-5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800"
      >
        <h2 className="text-base md:text-xl font-semibold mb-2 md:mb-3 text-gray-800 dark:text-gray-200">
          Portfolio
        </h2>
        <div className="h-40 md:h-64">
          <PieChart data={portfolioData} />
        </div>
      </motion.div>

      {/* Performance Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
        <motion.div
          className="bg-white dark:bg-gray-900 p-3 md:p-5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800"
          whileHover={{ y: -3 }}
        >
          <h3 className="text-sm md:text-lg font-semibold mb-2 md:mb-3 text-gray-800 dark:text-gray-200">
            Performance
          </h3>
          <div className="h-40 md:h-64">
            <LineChart data={performanceData} />
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          className="bg-white dark:bg-gray-900 p-3 md:p-5 rounded-xl shadow-sm space-y-2 md:space-y-3 border border-gray-100 dark:border-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h3 className="text-sm md:text-lg font-semibold text-gray-800 dark:text-gray-200">
            Quick Actions
          </h3>
          <div className="space-y-2">
            <button className="w-full p-2 text-xs md:text-sm bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors">
              Request Withdrawal
            </button>
            <button className="w-full p-2 text-xs md:text-sm bg-secondary-600 hover:bg-secondary-700 text-white rounded-lg transition-colors">
              Download Reports
            </button>
          </div>
        </motion.div>
      </div>

      {/* BOT Projects */}
      <motion.div
        className="bg-white dark:bg-gray-900 p-3 md:p-5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800"
        initial={{ x: 10 }}
        animate={{ x: 0 }}
      >
        <h2 className="text-base md:text-xl font-semibold mb-2 md:mb-3 text-gray-800 dark:text-gray-200">
          Active Projects
        </h2>
        <div className="space-y-2 md:space-y-3">
          <ProjectTimeline />
        </div>
      </motion.div>
    </div>
  );
}

const ProjectTimeline = () => (
  <div className="relative pl-3 md:pl-5 border-l-2 border-primary-600">
    {[
      { phase: "Build", project: "Nairobi Hospital", progress: 80 },
      { phase: "Operate", project: "Kigali Logistics Hub", progress: 45 },
      { phase: "Transfer", project: "Dakar Housing", progress: 100 },
    ].map((item, index) => (
      <motion.div
        key={index}
        className="relative mb-3 md:mb-4"
        whileHover={{ scale: 1.01 }}
      >
        <div className="absolute w-2.5 h-2.5 md:w-3.5 md:h-3.5 bg-primary-600 rounded-full -left-[5px] md:-left-[7px] top-1.5" />
        <div className="ml-3 md:ml-4">
          <h4 className="text-xs md:text-sm font-medium text-gray-800 dark:text-gray-200">
            {item.phase} Phase
          </h4>
          <p className="text-[0.7rem] md:text-xs text-gray-600 dark:text-gray-400 mb-1">
            {item.project}
          </p>
          <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-1 md:h-1.5">
            <div
              className="bg-primary-600 h-full rounded-full transition-all duration-500"
              style={{ width: `${item.progress}%` }}
            />
          </div>
        </div>
      </motion.div>
    ))}
  </div>
);
