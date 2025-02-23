"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, zoomIn } from "@/utils/motion";

export default function AboutUs() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      className="min-h-screen bg-slate-50 relative overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute -top-20 -left-40 w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[800px] lg:h-[800px] bg-gradient-to-r from-indigo-200/40 to-cyan-200/40 rounded-full blur-3xl animate-rotate" />
        <div className="absolute -top-40 -right-40 w-[250px] h-[250px] md:w-[400px] md:h-[400px] lg:w-[700px] lg:h-[700px] bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-rotate delay-1000" />
      </div>

      {/* Hero Section */}
      <motion.section
        variants={staggerContainer(0.2)}
        className="pt-24 md:pt-32 pb-12 md:pb-20 px-6 text-center relative z-10"
      >
        <motion.h1
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="text-3xl md:text-5xl font-bold text-slate-800 mb-4 md:mb-6"
        >
          About World Concepts Group
        </motion.h1>
        <motion.p
          variants={fadeIn("up", "tween", 0.4, 1)}
          className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto"
        >
          Building Africa’s Future Through Innovation
        </motion.p>
      </motion.section>

      {/* History Section */}
      <motion.section
        variants={fadeIn("up", "tween", 0.5, 1)}
        className="py-12 md:py-20 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-8 text-center">
            Our History
          </h2>
          <div className="relative flex flex-col gap-8 md:gap-12">
            {[
              { year: "2010", event: "Founded in Houston, Texas" },
              { year: "2015", event: "Expanded to Kenya" },
              { year: "2020", event: "Launched First Healthcare Project" },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={zoomIn(index * 0.1, 1)}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <span className="text-indigo-600 font-bold">{item.year}</span>
                <p className="text-slate-500 mt-2">{item.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        variants={fadeIn("up", "tween", 0.6, 1)}
        className="py-12 md:py-20 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white"
      >
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg">
            Transforming Africa through strategic investments.
          </p>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        variants={fadeIn("up", "tween", 0.7, 1)}
        className="py-12 md:py-20 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-8 text-center">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "John Doe", role: "CEO", bio: "Leads strategic vision." },
              {
                name: "Jane Smith",
                role: "CFO",
                bio: "Manages financial growth.",
              },
              { name: "Ali Hassan", role: "COO", bio: "Oversees operations." },
            ].map((member, index) => (
              <motion.div
                key={index}
                variants={zoomIn(index * 0.1, 1)}
                className="bg-white p-6 rounded-xl shadow-md text-center"
              >
                <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto mb-4" />{" "}
                {/* Placeholder image */}
                <h3 className="text-lg font-semibold text-slate-800">
                  {member.name}
                </h3>
                <p className="text-cyan-600">{member.role}</p>
                <p className="text-slate-500 mt-2">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}
