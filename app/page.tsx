/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import Button from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, zoomIn } from "@/utils/motion";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <motion.div
      initial="hidden"
      animate="show"
      className="min-h-screen bg-slate-50 relative overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute -top-20 -left-40 w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[800px] lg:h-[800px] bg-gradient-to-r from-indigo-200/40 to-cyan-200/40 rounded-full blur-3xl animate-rotate" />
        <div className="absolute -top-40 -right-40 w-[250px] h-[250px] md:w-[400px] md:h-[400px] lg:w-[700px] lg:h-[700px] bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-rotate delay-1000" />

        <div className="absolute inset-0 z-[6] opacity-100 pointer-events-none">
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
      <motion.header
        variants={staggerContainer(0.3)}
        className="pt-32 md:pt-24 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 text-center relative z-10"
      >
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="w-full flex justify-center items-center mb-8 md:mb-12"
        >
          <svg
            width="100%"
            height="40"
            viewBox="0 0 1200 40"
            className="max-w-4xl mx-auto px-4"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              d="M0 20 Q 300 40 600 20 T 1200 20"
              stroke="url(#dividerGradient)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient
                id="dividerGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#4f46e5" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={fadeIn("up", "tween", 0.3, 1)}
            className="inline-block bg-white/50 backdrop-blur-lg rounded-xl md:rounded-2xl px-6 py-3 md:px-8 md:py-4 mb-4 md:mb-6 shadow-lg"
          >
            <span className="text-sm md:text-base font-semibold text-cyan-600">
              Empowering Africa’s Growth Through Innovation
            </span>
          </motion.div>

          <motion.h2
            variants={fadeIn("up", "tween", 0.3, 1)}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 md:mb-6 leading-tight"
          >
            Transforming Africa Through{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent block">
              Strategic Investments
            </span>
          </motion.h2>

          <motion.p
            variants={fadeIn("up", "tween", 0.4, 1)}
            className="text-base md:text-lg lg:text-xl text-slate-500 mb-6 md:mb-8 max-w-2xl mx-auto"
          >
            We drive high-impact investments in healthcare, real estate, digital
            infrastructure, and sustainable development to shape a prosperous
            future for Africa.
          </motion.p>

          <motion.div
            variants={fadeIn("up", "tween", 0.5, 0.25)}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
          >
            <Button
              onClick={() => router.push("/investments")}
              className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 md:px-8 md:py-4 rounded-lg md:rounded-xl text-sm md:text-base text-white"
            >
              Explore Opportunities
            </Button>
            <Button
              onClick={() => router.push("/contact")}
              variant="outline"
              className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-6 py-3 md:px-8 md:py-4 rounded-lg md:rounded-xl text-sm md:text-base"
            >
              Contact Team
            </Button>
          </motion.div>
        </div>
      </motion.header>
      {/* Sectors Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeIn("up", "tween", 0.3, 1)}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
          >
            {sectors.map((sector, index) => (
              <motion.div
                key={index}
                variants={zoomIn(index * 0.1, 1)}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group p-6 md:p-8 bg-white rounded-xl md:rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden border border-slate-100"
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute -inset-[2px] rounded-xl md:rounded-2xl bg-gradient-to-br from-indigo-400/30 to-cyan-400/30" />
                </div>

                {/* Number Badge */}
                <div className="absolute top-3 right-3 w-6 h-6 md:w-8 md:h-8 flex items-center justify-center bg-indigo-100 rounded-lg md:rounded-full text-indigo-600 text-sm md:text-base font-medium group-hover:bg-indigo-200 transition-colors">
                  {index + 1}
                </div>

                {/* Content Container */}
                <div className="relative z-10 space-y-3 md:space-y-4">
                  {/* Icon */}
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-indigo-600 to-cyan-500 rounded-md md:rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform">
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-semibold text-slate-800 relative">
                    {sector.title}
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-indigo-600 to-cyan-500 group-hover:w-full transition-all duration-300" />
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-base text-slate-500 group-hover:text-slate-700 transition-colors">
                    {sector.description}
                  </p>

                  {/* Learn More */}
                  <div className="pt-2 md:pt-4">
                    <button className="flex items-center text-indigo-600 group-hover:text-indigo-700 transition-colors font-medium text-sm md:text-base">
                      Learn More
                      <svg
                        className="w-3 h-3 md:w-4 md:h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
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
          </motion.div>
        </div>
      </section>
      {/* Contact Section */}
      <motion.section
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="relative rounded-xl md:rounded-2xl lg:rounded-3xl p-8 md:p-12 shadow-lg md:shadow-xl lg:shadow-2xl overflow-hidden bg-white">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-4 md:mb-6">
              Shape Africa's Future With Us
            </h2>
            <p className="text-indigo-600 text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
              Partner with our team of experts to unlock transformative
              investment opportunities.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Button
                onClick={() => router.push("/signup")}
                className="bg-indigo-600 text-white hover:bg-indigo-700 px-6 py-3 md:px-8 md:py-4 rounded-lg md:rounded-xl text-sm md:text-base"
              >
                Start Investing
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}

const sectors = [
  {
    title: "Healthcare Innovation",
    description:
      "Revolutionizing medical infrastructure and access to quality care.",
  },
  {
    title: "Smart Real Estate",
    description: "Developing sustainable, tech-driven urban ecosystems.",
  },
  {
    title: "AgriTech Solutions",
    description:
      "Harnessing AI and modern technology to revolutionize agriculture.",
  },
  {
    title: "Digital Infrastructure",
    description: "Building seamless connectivity across Africa.",
  },
  {
    title: "Consumer Markets",
    description: "Transforming retail experiences with innovation.",
  },
  {
    title: "Financial Inclusion",
    description: "Leveraging blockchain and fintech for economic empowerment.",
  },
];
