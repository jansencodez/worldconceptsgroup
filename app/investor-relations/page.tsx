"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn, zoomIn } from "@/utils/motion";

export default function InvestorRelations() {
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
          Investor Relations
        </h1>
        <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto">
          Committed to Clarity and Trust
        </p>
      </motion.section>

      {/* Reports */}
      <motion.section
        variants={fadeIn("up", "tween", 0.4, 1)}
        className="px-6 pb-20"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-8 text-center">
            Reports
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["2023 Annual Report", "Q1 2024 Update", "Investor Guide"].map(
              (report, index) => (
                <motion.div
                  key={index}
                  variants={zoomIn(index * 0.1, 1)}
                  className="bg-white p-6 rounded-xl shadow-md text-center"
                >
                  <h3 className="text-lg font-semibold text-slate-800">
                    {report}
                  </h3>
                  <a href="#" className="text-indigo-600 mt-2 block">
                    Download
                  </a>
                </motion.div>
              )
            )}
          </div>
        </div>
      </motion.section>

      {/* Contact */}
      <motion.section
        variants={fadeIn("up", "tween", 0.5, 1)}
        className="px-6 pb-20"
      >
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">
            Contact Us
          </h3>
          <p className="text-slate-500">Email: info@worldconcepts.com</p>
          <p className="text-slate-500 mt-2">Phone: 0700483333</p>
        </div>
      </motion.section>
    </motion.div>
  );
}
