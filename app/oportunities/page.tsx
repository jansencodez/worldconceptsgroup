"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn, zoomIn } from "@/utils/motion";
import Button from "@/components/ui/button";

export default function InvestmentOpportunities() {
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
          Investment Opportunities
        </h1>
        <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto mb-8">
          Unlock High-Impact Returns in Africa
        </p>
        <Button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg text-white">
          Get Started
        </Button>
      </motion.section>

      {/* Options */}
      <motion.section
        variants={fadeIn("up", "tween", 0.4, 1)}
        className="px-6 pb-20"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Individual Investments",
              returns: "15-21%",
              desc: "Join as a venture shareholder.",
            },
            {
              title: "Fixed Income",
              returns: "Stable Returns",
              desc: "Long and short-term options.",
            },
          ].map((option, index) => (
            <motion.div
              key={index}
              variants={zoomIn(index * 0.1, 1)}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <h3 className="text-lg font-semibold text-slate-800">
                {option.title}
              </h3>
              <p className="text-cyan-600 mt-2">{option.returns}</p>
              <p className="text-slate-500 mt-2">{option.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* FAQ */}
      <motion.section
        variants={fadeIn("up", "tween", 0.5, 1)}
        className="px-6 pb-20"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-8 text-center">
            FAQs
          </h2>
          {[
            {
              q: "What’s the minimum investment?",
              a: "Contact us for details.",
            },
            {
              q: "How are returns calculated?",
              a: "Based on project performance.",
            },
          ].map((faq, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", "tween", 0.5 + index * 0.1, 1)}
              className="mb-4"
            >
              <h3 className="text-lg font-semibold text-slate-800">{faq.q}</h3>
              <p className="text-slate-500">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
}
