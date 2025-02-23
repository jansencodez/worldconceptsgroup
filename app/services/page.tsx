/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import Button from "@/components/ui/button";
import {
  FiHeart,
  FiHome,
  FiTruck,
  FiShoppingBag,
  FiDollarSign,
  FiGlobe,
  FiUsers,
} from "react-icons/fi";

const coreServices = [
  {
    icon: <FiHeart className="w-8 h-8" />,
    title: "Healthcare Development",
    description:
      "Building advanced medical infrastructure and supply chains across Africa",
    focus: [
      "Hospital construction",
      "Medical equipment procurement",
      "Pharmaceutical distribution",
      "Telemedicine platforms",
    ],
  },
  {
    icon: <FiHome className="w-8 h-8" />,
    title: "Real Estate Ventures",
    description:
      "Developing commercial & residential properties in urbanizing regions",
    focus: [
      "Mixed-use developments",
      "Affordable housing",
      "Smart city planning",
      "Commercial hubs",
    ],
  },
  {
    icon: <FiGlobe className="w-8 h-8" />,
    title: "Agricultural Development",
    description:
      "Modernizing African agriculture through strategic land management",
    focus: [
      "Land leasing programs",
      "Sustainable farming",
      "Crop optimization",
      "Distribution networks",
    ],
  },
  {
    icon: <FiTruck className="w-8 h-8" />,
    title: "Transport Infrastructure",
    description:
      "Enhancing continental connectivity through strategic investments",
    focus: [
      "Road network expansion",
      "Logistics hubs",
      "Port modernization",
      "Air transport solutions",
    ],
  },
  {
    icon: <FiShoppingBag className="w-8 h-8" />,
    title: "Consumer Markets",
    description: "Driving retail innovation across African markets",
    focus: [
      "Modern retail spaces",
      "Supply chain solutions",
      "Consumer goods distribution",
      "Market analytics",
    ],
  },
  {
    icon: <FiUsers className="w-8 h-8" />,
    title: "Strategic Partnerships",
    description: "Facilitating joint ventures for large-scale development",
    focus: [
      "Local expertise integration",
      "Capital mobilization",
      "Risk management",
      "Sustainable models",
    ],
  },
];

const botProcess = [
  {
    stage: "Build",
    icon: <FiHome className="w-6 h-6" />,
    description:
      "Complete project development from land acquisition to operational readiness",
    duration: "1-3 Years",
  },
  {
    stage: "Operate",
    icon: <FiDollarSign className="w-6 h-6" />,
    description: "Professional management ensuring ROI and system optimization",
    duration: "5-7 Years",
  },
  {
    stage: "Transfer",
    icon: <FiUsers className="w-6 h-6" />,
    description: "Smooth transition to investor ownership with full support",
    duration: "1 Year Transition",
  },
];

export default function Services() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      className="min-h-screen bg-slate-50 relative"
    >
      {/* Hero Section */}
      <motion.section
        variants={staggerContainer(0.2)}
        className="pt-32 pb-20 px-6 text-center relative"
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
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeIn("up", "tween", 0.3, 1)}
            className="inline-block bg-white/50 backdrop-blur-lg rounded-2xl px-8 py-4 mb-6 shadow-lg"
          >
            <span className="text-sm font-semibold text-cyan-600">
              Pan-African Development Partners
            </span>
          </motion.div>

          <motion.h1
            variants={fadeIn("up", "tween", 0.4, 1)}
            className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight"
          >
            Building Africa's Future Through
            <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent block">
              Strategic Capital Deployment
            </span>
          </motion.h1>
        </div>
      </motion.section>

      {/* Core Services Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <motion.div
          variants={staggerContainer(0.1)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {coreServices.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", "tween", index * 0.1, 0.5)}
              className="group bg-white/50 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8"
            >
              <div className="p-3 bg-indigo-500 rounded-lg w-fit mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                {service.title}
              </h3>
              <p className="text-slate-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.focus.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center space-x-2 text-slate-700"
                  >
                    <div className="w-2 h-2 bg-indigo-600 rounded-full" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* BOT Process Section */}
      <motion.section
        variants={staggerContainer(0.2)}
        className="py-20 bg-gradient-to-br from-indigo-50 to-cyan-50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={fadeIn("up", "tween", 0.3, 1)}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Build-Operate-Transfer Framework
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our proven methodology for sustainable project lifecycles
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {botProcess.map((stage, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", "tween", index * 0.2, 0.5)}
                className="bg-white rounded-2xl p-8 shadow-lg text-center"
              >
                <div className="w-12 h-12 bg-indigo-800 text-white rounded-xl flex items-center justify-center mb-6 mx-auto">
                  {stage.icon}
                </div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">
                  {stage.stage} Phase
                </h4>
                <p className="text-slate-600 mb-4">{stage.description}</p>
                <div className="text-indigo-600 text-sm font-medium">
                  Typical Duration: {stage.duration}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Investment CTA */}
      <motion.section
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="py-20 bg-gradient-to-br from-indigo-600 to-cyan-500"
      >
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              Investor Opportunities
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-left">
                <h3 className="text-xl text-white mb-4">
                  Individual Investors
                </h3>
                <ul className="space-y-2 text-indigo-100 list-disc">
                  <li> Venture equity participation</li>
                  <li> Strategic partnership options</li>
                  <li> Long-term capital growth</li>
                </ul>
              </div>
              <div className="text-left">
                <h3 className="text-xl text-white mb-4">
                  Institutional Investors
                </h3>
                <ul className="space-y-2 text-indigo-100 list-disc">
                  <li> Infrastructure bonds</li>
                  <li> Fixed income instruments</li>
                  <li> Project financing vehicles</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Button className="hover:bg-white hover:text-indigo-600">
                Download Prospectus
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:text-black hover:bg-white"
              >
                Schedule Investor Call
              </Button>
            </div>
            <p className="text-indigo-100 mt-8 text-sm">
              Contact our team directly: +254 700 483 333
            </p>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}
