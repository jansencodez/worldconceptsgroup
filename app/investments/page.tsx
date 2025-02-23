/* eslint-disable react/no-unescaped-entities */
"use client";

import { JSX, useCallback, useState, memo, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import Button from "@/components/ui/button";
import { FiChevronDown } from "react-icons/fi";
import {
  ProjectsPieChart,
  SectorInvestmentsBarChart,
} from "@/components/charts/Charts";
import { sectors } from "@/data/sectors";

interface Sector {
  id: string;
  title: string;
  icon: JSX.Element;
  tag: string;
  description: string;
  stats: { investments: string; projects: string; countries: string };
  initiatives: string[];
}

const AccordionItem = memo(
  ({
    sector,
    isOpen,
    onClick,
  }: {
    sector: Sector;
    isOpen: boolean;
    onClick: () => void;
  }) => {
    // Memoize initiatives to prevent unnecessary re-renders
    const initiatives = useMemo(
      () =>
        sector.initiatives.map((initiative) => (
          <li
            key={initiative} // Use unique identifier instead of index
            className="flex items-center space-x-2 text-slate-700"
          >
            <div className="w-2 h-2 bg-indigo-600 rounded-full" />
            <span className="text-sm md:text-base">{initiative}</span>
          </li>
        )),
      [sector.initiatives]
    );

    return (
      <motion.div
        id={sector.id}
        variants={fadeIn("up", "tween", 0.1, 0.5)}
        className={`bg-white/50 backdrop-blur-lg rounded-xl shadow-md overflow-hidden
          ${isOpen ? "border-l-4 border-indigo-600" : ""}`}
        layout
        transition={{ duration: 0.2, type: "tween" }}
      >
        <button
          onClick={onClick}
          className="w-full p-4 text-left flex items-center justify-between hover:bg-white/10 transition-colors"
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-indigo-100 rounded-lg text-indigo-600">
              {sector.icon}
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-slate-800">
                {sector.title}
              </h3>
              <span className="text-xs md:text-sm text-indigo-600">
                {sector.tag}
              </span>
            </div>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            className="text-slate-600"
          >
            <FiChevronDown className="w-6 h-6" />
          </motion.div>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, maxHeight: 0 }}
              animate={{ opacity: 1, maxHeight: 1000 }}
              exit={{
                opacity: 0,
                maxHeight: 0,
                transition: { duration: 0.15 },
              }}
              transition={{
                duration: 0.25,
                ease: "easeInOut",
                opacity: { duration: 0.1 },
              }}
            >
              <div className="px-4 md:px-6 pb-4 md:pb-6">
                <div className="border-t border-slate-200 pt-4 md:pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    <div>
                      <p className="text-sm md:text-base text-slate-600 mb-4 md:mb-6">
                        {sector.description}
                      </p>
                      <div className="bg-indigo-50 rounded-lg md:rounded-xl p-4 md:p-6">
                        <h4 className="text-xs md:text-sm font-semibold text-indigo-600 mb-2 md:mb-4">
                          Key Initiatives
                        </h4>
                        <ul className="space-y-2 md:space-y-3">
                          {initiatives}
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-4 md:space-y-6">
                      <div className="bg-gradient-to-br from-indigo-600 to-cyan-500 rounded-lg md:rounded-xl p-4 md:p-6 text-white">
                        <h4 className="text-xs md:text-sm font-semibold mb-2 md:mb-4">
                          Sector Overview
                        </h4>
                        <div className="grid grid-cols-2 gap-2 md:gap-4">
                          <div>
                            <p className="text-xl md:text-2xl font-bold">
                              {sector.stats.investments}
                            </p>
                            <p className="text-xs md:text-sm">
                              Total Investments
                            </p>
                          </div>
                          <div>
                            <p className="text-xl md:text-2xl font-bold">
                              {sector.stats.projects}
                            </p>
                            <p className="text-xs md:text-sm">
                              Active Projects
                            </p>
                          </div>
                          <div>
                            <p className="text-xl md:text-2xl font-bold">
                              {sector.stats.countries}
                            </p>
                            <p className="text-xs md:text-sm">
                              Countries Active
                            </p>
                          </div>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        className="w-full border-indigo-600 text-indigo-600 hover:bg-indigo-50 text-sm md:text-base"
                      >
                        View Case Studies
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  }
);

AccordionItem.displayName = "AccordionItem";

export default function Investments() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Optimized accordion toggle without hash routing
  const handleAccordionToggle = useCallback(
    (index: number) => {
      const newIndex = openIndex === index ? null : index;
      setOpenIndex(newIndex);

      if (newIndex !== null) {
        // Use a minimal timeout for immediate scroll
        setTimeout(() => {
          const element = document.getElementById(sectors[newIndex].id);
          element?.scrollIntoView({ behavior: "auto", block: "start" });
        }, 0);
      }
    },
    [openIndex]
  );

  return (
    <motion.div
      initial="hidden"
      animate="show"
      className="min-h-screen bg-slate-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute -top-20 -left-40 w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[800px] lg:h-[800px] bg-gradient-to-r from-indigo-200 to-cyan-200 rounded-full blur-3xl animate-rotate" />
        <div className="absolute -top-40 -right-40 w-[250px] h-[250px] md:w-[400px] md:h-[400px] lg:w-[700px] lg:h-[700px] bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-3xl animate-rotate delay-1000" />

        <div className="absolute inset-0 z-0 opacity-100 pointer-events-none">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1200 800"
            preserveAspectRatio="xMidYMid slice"
          >
            <pattern
              id="scratchPattern"
              patternUnits="userSpaceOnUse"
              width="300" // Reduced pattern size for denser repeats
              height="300"
            >
              {/* Middle Longest Scratch */}
              <path
                d="M-50 150 Q 150 0 350 150 T 750 150"
                stroke="#4338CA" // Darker indigo shade
                strokeWidth="16" // Increased stroke width
                fill="none"
                strokeLinecap="round"
                strokeOpacity="0.5" // Increased opacity
              />
              {/* Top Shorter Scratch */}
              <path
                d="M0 80 Q 100 -20 200 80 T 400 80"
                stroke="#4F46E5"
                strokeWidth="12"
                fill="none"
                strokeLinecap="round"
                strokeOpacity="0.3"
                transform="translate(30, -40)"
              />
              {/* Bottom Shorter Scratch */}
              <path
                d="M0 220 Q 100 320 200 220 T 400 220"
                stroke="#4F46E5"
                strokeWidth="12"
                fill="none"
                strokeLinecap="round"
                strokeOpacity="0.3"
                transform="translate(120, 40)"
              />
              {/* Additional scratches for density */}
              <path
                d="M-20 250 Q 180 100 380 250 T 780 250"
                stroke="#4338CA"
                strokeWidth="10"
                fill="none"
                strokeLinecap="round"
                strokeOpacity="0.15"
                transform="translate(-50, 0)"
              />
            </pattern>

            <rect
              width="100%"
              height="100%"
              fill="url(#scratchPattern)"
              transform="rotate(-20 600 400)" // Increased rotation angle
            />
          </svg>
        </div>
      </div>
      {/* Hero Section */}
      <motion.section
        variants={staggerContainer(0.2)}
        className="pt-24 md:pt-32 pb-12 md:pb-20 px-6 text-center relative"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeIn("up", "tween", 0.3, 1)}
            className="inline-block bg-white/50 backdrop-blur-lg rounded-xl md:rounded-2xl px-6 md:px-8 py-3 md:py-4 mb-4 md:mb-6 shadow-md md:shadow-lg"
          >
            <span className="text-xs md:text-sm font-semibold text-cyan-600">
              Strategic Investment Portfolio
            </span>
          </motion.div>

          <motion.h1
            variants={fadeIn("up", "tween", 0.4, 1)}
            className="text-3xl md:text-5xl font-bold text-slate-800 mb-4 md:mb-6 leading-tight"
          >
            Powering Africa's Progress Through
            <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent block">
              Targeted Investments
            </span>
          </motion.h1>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.div
        variants={fadeIn("up", "tween", 0.5, 1)}
        className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-20"
      >
        {[
          { value: "Ksh18.7B", label: "Total Assets", trend: "+12.4% YoY" },
          { value: "230+", label: "Active Projects", trend: "38 new in 2024" },
          { value: "28", label: "Countries", trend: "Covering 54% of Africa" },
          { value: "96%", label: "Success Rate", trend: "Industry leader" },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-md md:shadow-lg relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-cyan-50 opacity-50" />
            <div className="relative">
              <p className="text-2xl md:text-3xl font-bold text-indigo-600 mb-1 md:mb-2">
                {stat.value}
              </p>
              <p className="text-xs md:text-sm text-slate-600 font-medium">
                {stat.label}
              </p>
              <p className="text-xs text-indigo-400 mt-1">{stat.trend}</p>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Charts Section */}
      <motion.div
        variants={fadeIn("up", "tween", 0.6, 1)}
        className="max-w-7xl mx-auto px-6 mb-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">
              Investment Distribution
            </h3>
            <div className="h-64 md:h-96">
              <SectorInvestmentsBarChart sectors={sectors} />
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">
              Project Allocation
            </h3>
            <div className="h-100">
              <ProjectsPieChart sectors={sectors} />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Sectors Accordion */}
      <section className="max-w-7xl mx-auto px-6 pb-12 md:pb-20">
        <motion.div
          variants={staggerContainer(0.1)}
          className="space-y-4 md:space-y-6"
        >
          {sectors.map((sector, index) => (
            <AccordionItem
              key={sector.id}
              sector={sector}
              isOpen={openIndex === index}
              onClick={() => handleAccordionToggle(index)}
            />
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <motion.section
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="bg-gradient-to-br from-indigo-600 to-cyan-500 py-12 md:py-20 px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl md:rounded-3xl p-6 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
              Ready to Invest in Africa's Future?
            </h2>
            <p className="text-indigo-100 text-sm md:text-base mb-4 md:mb-8">
              Join our network of strategic investors and partners shaping the
              continent's growth.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6">
              <Button className="bg-white text-black hover:text-white hover:bg-indigo-50 px-6 md:px-8 py-3 md:py-4 text-sm md:text-base">
                Schedule Consultation
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 text-sm md:text-base"
              >
                Download Prospectus
              </Button>
            </div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}
