"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, zoomIn } from "@/utils/motion";
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
import Link from "next/link";

const coreServices = [
  {
    icon: <FiHeart className="w-6 h-6 md:w-8 md:h-8" />,
    title: "Healthcare Development",
    description: "Enhancing medical infrastructure and access across Africa.",
    focus: [
      "Hospital construction",
      "Medical equipment procurement",
      "Pharmaceutical importation",
      "Healthcare programs",
    ],
  },
  {
    icon: <FiHome className="w-6 h-6 md:w-8 md:h-8" />,
    title: "Real Estate Ventures",
    description: "Building sustainable properties in urbanizing regions.",
    focus: [
      "Commercial developments",
      "Residential housing",
      "Smart city initiatives",
      "Mixed-use projects",
    ],
  },
  {
    icon: <FiGlobe className="w-6 h-6 md:w-8 md:h-8" />,
    title: "Agricultural Development",
    description: "Boosting agriculture through land leasing and innovation.",
    focus: [
      "Land leasing programs",
      "Sustainable farming",
      "Food security networks",
    ],
  },

  {
    icon: <FiShoppingBag className="w-6 h-6 md:w-8 md:h-8" />,
    title: "Consumer Markets",
    description: "Innovating retail and consumer goods for African markets.",
    focus: ["Modern retail spaces", "Consumer goods", "Market insights"],
  },
  {
    icon: <FiUsers className="w-6 h-6 md:w-8 md:h-8" />,
    title: "Strategic Partnerships",
    description: "Collaborating for large-scale, sustainable growth.",
    focus: [
      "Joint ventures",
      "Capital pooling",
      "Local expertise",
      "Risk mitigation",
    ],
  },
];

const botProcess = [
  {
    stage: "Build",
    icon: <FiHome className="w-5 h-5 md:w-6 md:h-6" />,
    description:
      "From land acquisition to operational readiness, we ensure quality and efficiency.",
    duration: "1-3 Years",
  },
  {
    stage: "Operate",
    icon: <FiDollarSign className="w-5 h-5 md:w-6 md:h-6" />,
    description:
      "We manage operations to optimize returns over an agreed period.",
    duration: "5-7 Years",
  },
  {
    stage: "Transfer",
    icon: <FiUsers className="w-5 h-5 md:w-6 md:h-6" />,
    description: "Smooth ownership transition with comprehensive support.",
    duration: "1 Year",
  },
];

export default function Services() {
  const router = useRouter();

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
          className="w-full flex justify-center items-center mb-6 md:mb-10"
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
            className="inline-block bg-white/50 backdrop-blur-lg rounded-xl md:rounded-2xl px-4 py-2 md:px-6 md:py-3 mb-4 md:mb-6 shadow-lg"
          >
            <span className="text-xs md:text-sm font-semibold text-cyan-600">
              Pan-African Development Partners
            </span>
          </motion.div>
          <motion.h1
            variants={fadeIn("up", "tween", 0.4, 1)}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-4 md:mb-6 leading-tight"
          >
            Building Africa’s Future Through{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent block md:inline">
              Strategic Services
            </span>
          </motion.h1>
          <motion.p
            variants={fadeIn("up", "tween", 0.5, 1)}
            className="text-sm md:text-base text-slate-500 mb-6 md:mb-8 max-w-2xl mx-auto"
          >
            We deploy capital and expertise to drive sustainable growth in
            healthcare, real estate, agriculture, transport, retail, and
            partnerships.
          </motion.p>
        </div>
      </motion.section>

      {/* Core Services Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-800 mb-8 md:mb-12 text-center"
          >
            Our Core Services
          </motion.h2>
          <motion.div
            variants={staggerContainer(0.1)}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {coreServices.map((service, index) => (
              <motion.div
                key={index}
                variants={zoomIn(index * 0.1, 1)}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-slate-100 overflow-hidden"
              >
                <div className="absolute inset-0 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute -inset-[2px] rounded-xl md:rounded-2xl bg-gradient-to-br from-indigo-400/30 to-cyan-400/30" />
                </div>
                <div className="relative z-10">
                  <div className="p-3 bg-gradient-to-br from-indigo-600 to-cyan-500 rounded-md md:rounded-lg w-fit mb-4 md:mb-6 text-white transform group-hover:rotate-12 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-slate-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-500 mb-4 md:mb-6 group-hover:text-slate-700 transition-colors">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.focus.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center space-x-2 text-xs md:text-sm text-slate-600"
                      >
                        <div className="w-2 h-2 bg-indigo-600 rounded-full" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BOT Process Section */}
      <motion.section
        variants={staggerContainer(0.2)}
        className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-cyan-50 relative z-10"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-800 mb-8 md:mb-12 text-center"
          >
            Build-Operate-Transfer Framework
          </motion.h2>
          <motion.p
            variants={fadeIn("up", "tween", 0.3, 1)}
            className="text-sm md:text-base text-slate-600 mb-6 md:mb-8 max-w-2xl mx-auto text-center"
          >
            Our proven approach ensures sustainable project success.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {botProcess.map((stage, index) => (
              <motion.div
                key={index}
                variants={zoomIn(index * 0.1, 1)}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-slate-100 text-center"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-indigo-600 text-white rounded-md md:rounded-lg flex items-center justify-center mb-4 md:mb-6 mx-auto">
                  {stage.icon}
                </div>
                <h4 className="text-base md:text-lg font-semibold text-slate-800 mb-2">
                  {stage.stage}
                </h4>
                <p className="text-xs md:text-sm text-slate-500 mb-3 md:mb-4">
                  {stage.description}
                </p>
                <div className="text-indigo-600 text-xs md:text-sm font-medium">
                  {stage.duration}
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            variants={fadeIn("up", "tween", 0.4, 1)}
            className="mt-6 md:mt-8 flex justify-center"
          >
            <Button
              onClick={() => router.push("/bot-program")}
              variant="outline"
              className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl text-xs md:text-sm"
            >
              Learn More
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Investment CTA Section */}
      <motion.section
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-600 to-cyan-500 text-white relative z-10"
      >
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6">
            Invest in Africa’s Growth
          </h2>
          <p className="text-sm md:text-base mb-6 md:mb-8 max-w-2xl mx-auto">
            Partner with us for %high-impact opportunities with returns of
            15%-21%. Call us at{" "}
            <Link href="tel:+254700483333" className="underline">
              +254 700 483333
            </Link>
            .
          </p>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl md:rounded-2xl p-4 md:p-6 text-left">
              <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3">
                Individual Investors
              </h3>
              <ul className="space-y-2 text-xs md:text-sm text-indigo-100">
                <li className="flex items-center space-x-2">
                  <FiDollarSign className="w-4 h-4" />
                  <span>Venture equity participation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FiUsers className="w-4 h-4" />
                  <span>Strategic partnerships</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FiGlobe className="w-4 h-4" />
                  <span>Long-term growth</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl md:rounded-2xl p-4 md:p-6 text-left">
              <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3">
                Institutional Investors
              </h3>
              <ul className="space-y-2 text-xs md:text-sm text-indigo-100">
                <li className="flex items-center space-x-2">
                  <FiDollarSign className="w-4 h-4" />
                  <span>Infrastructure bonds</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FiDollarSign className="w-4 h-4" />
                  <span>Fixed income options</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FiTruck className="w-4 h-4" />
                  <span>Project financing</span>
                </li>
              </ul>
            </div>
          </div>
          <motion.div
            variants={fadeIn("up", "tween", 0.4, 1)}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button
              onClick={() => router.push("/investor-relations")}
              className="bg-white text-indigo-600 hover:bg-indigo-50 px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl text-xs md:text-sm"
            >
              Explore Opportunities
            </Button>
            <Button
              onClick={() => router.push("/contact")}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-indigo-600 px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl text-xs md:text-sm"
            >
              Schedule a Call
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
}
