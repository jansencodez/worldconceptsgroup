"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, zoomIn } from "@/utils/motion";
import Button from "@/components/ui/button";
import {
  FiHeart,
  FiHome,
  FiGlobe,
  FiTruck,
  FiShoppingBag,
} from "react-icons/fi";

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const router = useRouter();

  const projects = [
    {
      title: "Nairobi Healthcare Hub",
      sector: "Healthcare",
      status: "Current",
      description:
        "A state-of-the-art hospital improving access in East Africa.",
      icon: <FiHeart className="w-8 h-8 md:w-10 md:h-10 text-white" />,
    },
    {
      title: "Kigali Residential Complex",
      sector: "Real Estate",
      status: "Past",
      description: "Sustainable housing for Rwanda’s growing urban population.",
      icon: <FiHome className="w-8 h-8 md:w-10 md:h-10 text-white" />,
    },
    {
      title: "AgriTech Farming Initiative",
      sector: "Agriculture",
      status: "Current",
      description: "Modern farming solutions boosting food security in Kenya.",
      icon: <FiGlobe className="w-8 h-8 md:w-10 md:h-10 text-white" />,
    },
    {
      title: "Mombasa Transport Network",
      sector: "Transport",
      status: "Current",
      description: "Enhanced logistics and road infrastructure for trade.",
      icon: <FiTruck className="w-8 h-8 md:w-10 md:h-10 text-white" />,
    },
    {
      title: "Dar es Salaam Retail Center",
      sector: "Consumer Markets",
      status: "Past",
      description: "A modern retail hub catering to Tanzania’s consumers.",
      icon: <FiShoppingBag className="w-8 h-8 md:w-10 md:h-10 text-white" />,
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.sector.toLowerCase() === filter.toLowerCase());

  return (
    <motion.div
      initial="hidden"
      animate="show"
      className="min-h-screen bg-slate-50 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute -top-20 -left-40 w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[800px] lg:h-[800px] bg-gradient-to-r from-indigo-200/40 to-cyan-200/40 rounded-full blur-3xl animate-rotate" />
        <div className="absolute -top-40 -right-40 w-[250px] h-[250px] md:w-[400px] md:h-[400px] lg:w-[700px] lg:h-[700px] bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-rotate delay-1000" />
      </div>

      {/* Hero Section */}
      <motion.section
        variants={staggerContainer(0.2)}
        className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 sm:px-6 lg:px-8 text-center relative z-10"
      >
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="inline-block bg-white/50 backdrop-blur-lg rounded-xl md:rounded-2xl px-4 py-2 md:px-6 md:py-3 mb-4 md:mb-6 shadow-lg"
        >
          <span className="text-xs md:text-sm font-semibold text-cyan-600">
            Transforming Africa
          </span>
        </motion.div>
        <motion.h1
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-4 md:mb-6"
        >
          Our Projects
        </motion.h1>
        <motion.p
          variants={fadeIn("up", "tween", 0.4, 1)}
          className="text-sm md:text-base text-slate-500 max-w-2xl mx-auto mb-6 md:mb-8"
        >
          Discover how we’re driving sustainable development across Africa’s key
          sectors.
        </motion.p>
      </motion.section>

      {/* Filters */}
      <motion.div
        variants={fadeIn("up", "tween", 0.5, 1)}
        className="px-4 sm:px-6 lg:px-8 pb-8 md:pb-12"
      >
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-2 md:gap-4">
          {[
            "All",
            "Healthcare",
            "Real Estate",
            "Agriculture",
            "Transport",
            "Consumer Markets",
          ].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f.toLowerCase())}
              className={`px-4 py-2 rounded-lg md:rounded-xl text-xs md:text-sm transition-all ${
                filter === f.toLowerCase()
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-slate-800 hover:bg-gray-300"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Projects Gallery */}
      <motion.section
        variants={staggerContainer(0.2)}
        className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={zoomIn(index * 0.1, 1)}
              whileHover={{ scale: 1.02, y: -4 }}
              className="group bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-md border border-slate-100 transition-all duration-300 hover:border-indigo-400 hover:shadow-lg"
            >
              <div className="relative z-10">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-indigo-600 to-cyan-500 rounded-lg md:rounded-xl mb-4 md:mb-6 flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300 mx-auto">
                  {project.icon}
                </div>
                <h3 className="text-base md:text-lg font-semibold text-slate-800 mb-2 text-center">
                  {project.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-500 mb-2 text-center">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs md:text-sm text-slate-600">
                    Sector: {project.sector}
                  </span>
                  <span
                    className={`text-xs md:text-sm ${
                      project.status === "Current"
                        ? "text-cyan-600"
                        : "text-gray-500"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <div className="flex justify-center mt-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push(
                        `/projects/${project.title
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`
                      );
                    }}
                    className="flex items-center text-indigo-600 hover:text-indigo-700 transition-colors duration-200 text-xs md:text-sm font-medium"
                  >
                    View Details
                    <svg
                      className="w-3 h-3 md:w-4 md:h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-600 to-cyan-500 text-white relative z-10"
      >
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6">
            Partner With Us
          </h2>
          <p className="text-sm md:text-base mb-6 md:mb-8 max-w-2xl mx-auto">
            Interested in our projects? Contact us at{" "}
            <a href="tel:+254700483333" className="underline">
              +254 700 483333
            </a>{" "}
            to explore collaboration opportunities.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Button
              onClick={() => router.push("/contact")}
              className="bg-white text-indigo-600 hover:bg-indigo-50 px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl text-xs md:text-sm"
            >
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
}
