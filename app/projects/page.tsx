"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, zoomIn } from "@/utils/motion";
import Image from "next/image";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const projects = [
    { title: "Nairobi Hospital", sector: "Healthcare", status: "Current" },
    { title: "Kigali Housing", sector: "Real Estate", status: "Past" },
    { title: "AgriTech Farm", sector: "Agriculture", status: "Current" },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.sector === filter);

  return (
    <motion.div
      initial="hidden"
      animate="show"
      className="min-h-screen bg-slate-50 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute -top-20 -left-40 w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[800px] lg:h-[800px] bg-gradient-to-r from-indigo-200/40 to-cyan-200/40 rounded-full blur-3xl animate-rotate" />
      </div>

      {/* Hero Section */}
      <motion.section
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="pt-24 md:pt-32 pb-12 md:pb-20 px-6 text-center"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">
          Our Projects
        </h1>
        <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto">
          Explore Our Impact Across Africa
        </p>
      </motion.section>

      {/* Filters */}
      <motion.div
        variants={fadeIn("up", "tween", 0.4, 1)}
        className="px-6 pb-8"
      >
        <div className="max-w-7xl mx-auto flex gap-4 justify-center">
          {["All", "Healthcare", "Real Estate", "Agriculture"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f.toLowerCase())}
              className={`px-4 py-2 rounded-lg ${
                filter === f.toLowerCase()
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-slate-800"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Projects Gallery */}
      <motion.section
        variants={fadeIn("up", "tween", 0.5, 1)}
        className="px-6 pb-20"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={zoomIn(index * 0.1, 1)}
              whileHover={{ scale: 1.02, y: -4 }}
              className="bg-white p-6 rounded-xl shadow-md relative border border-slate-100"
            >
              <div className="w-full h-40 bg-slate-200 rounded-lg mb-4" />{" "}
              <Image
                src={``}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              <h3 className="text-lg font-semibold text-slate-800">
                {project.title}
              </h3>
              <p className="text-slate-500 mt-2">Sector: {project.sector}</p>
              <span className="text-cyan-600 text-sm">{project.status}</span>
              <button className="text-indigo-600 mt-4">View Details</button>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
}
