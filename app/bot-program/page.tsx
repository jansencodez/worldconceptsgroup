"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn, zoomIn } from "@/utils/motion";

export default function BOTProgram() {
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
          BOT Program
        </h1>
        <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto">
          Building, Operating, and Transferring Success
        </p>
      </motion.section>

      {/* Process */}
      <motion.section
        variants={fadeIn("up", "tween", 0.4, 1)}
        className="px-6 pb-20"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-8 text-center">
            Our Process
          </h2>
          <div className="flex flex-col md:flex-row gap-6">
            {[
              { title: "Build", desc: "Constructing high-quality projects." },
              { title: "Operate", desc: "Managing operations efficiently." },
              { title: "Transfer", desc: "Handing over to investors." },
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={zoomIn(index * 0.1, 1)}
                className="bg-white p-6 rounded-xl shadow-md text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-cyan-500 rounded-lg mx-auto mb-4 flex items-center justify-center text-white">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-slate-800">
                  {step.title}
                </h3>
                <p className="text-slate-500 mt-2">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Benefits */}
      <motion.section
        variants={fadeIn("up", "tween", 0.5, 1)}
        className="px-6 pb-20"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Expertise", "Risk Management", "Efficiency"].map(
            (benefit, index) => (
              <motion.div
                key={index}
                variants={zoomIn(index * 0.1, 1)}
                className="bg-white p-6 rounded-xl shadow-md text-center"
              >
                <h3 className="text-lg font-semibold text-slate-800">
                  {benefit}
                </h3>
              </motion.div>
            )
          )}
        </div>
      </motion.section>
    </motion.div>
  );
}
