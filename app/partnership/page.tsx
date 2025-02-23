"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn, zoomIn } from "@/utils/motion";

export default function Partnerships() {
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
          Our Partnerships
        </h1>
        <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto">
          Collaborating for a Stronger Africa
        </p>
      </motion.section>

      {/* Partnerships Grid */}
      <motion.section
        variants={fadeIn("up", "tween", 0.4, 1)}
        className="px-6 pb-20"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { name: "Partner A", desc: "Healthcare solutions provider." },
            { name: "Partner B", desc: "Real estate developer." },
          ].map((partner, index) => (
            <motion.div
              key={index}
              variants={zoomIn(index * 0.1, 1)}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="w-24 h-12 bg-gray-400 filter grayscale group-hover:filter-none rounded-lg mb-4" />{" "}
              {/* Placeholder logo */}
              <h3 className="text-lg font-semibold text-slate-800">
                {partner.name}
              </h3>
              <p className="text-slate-500 mt-2">{partner.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
}
