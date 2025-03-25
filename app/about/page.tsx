"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, zoomIn } from "@/utils/motion";
import Button from "@/components/ui/button";
import { FiGlobe, FiUsers, FiTarget } from "react-icons/fi";

export default function About() {
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
              Empowering Africa’s Future
            </span>
          </motion.div>
          <motion.h1
            variants={fadeIn("up", "tween", 0.4, 1)}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-4 md:mb-6 leading-tight"
          >
            About World Concepts Group
          </motion.h1>
          <motion.p
            variants={fadeIn("up", "tween", 0.5, 1)}
            className="text-sm md:text-base text-slate-500 mb-6 md:mb-8 max-w-2xl mx-auto"
          >
            A dynamic investment firm driving sustainable growth across Africa
            through strategic acquisitions, asset management, and innovative
            partnerships.
          </motion.p>
        </div>
      </motion.section>

      {/* Company Overview Section */}
      <motion.section
        variants={staggerContainer(0.2)}
        className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-white/50 backdrop-blur-md"
      >
        <div className="max-w-5xl mx-auto">
          <motion.h2
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-800 mb-6 md:mb-8 text-center"
          >
            Who We Are
          </motion.h2>
          <motion.p
            variants={fadeIn("up", "tween", 0.3, 1)}
            className="text-sm md:text-base text-slate-600 mb-6 md:mb-8 max-w-3xl mx-auto text-center"
          >
            World Concepts Group is a subsidiary within a global consortium,
            tailored to meet Africa’s unique needs. We specialize in
            acquisitions, asset management, and investment strategies that
            foster economic development and sustainability across the continent.
          </motion.p>
          <motion.div
            variants={fadeIn("up", "tween", 0.4, 1)}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          >
            {[
              {
                icon: <FiGlobe className="w-6 h-6 md:w-8 md:h-8" />,
                title: "Global Reach",
                description:
                  "Leveraging a network of international affiliates to secure funding and expertise.",
              },
              {
                icon: <FiTarget className="w-6 h-6 md:w-8 md:h-8" />,
                title: "Sustainable Impact",
                description:
                  "Focusing on investments that drive long-term growth and prosperity.",
              },
              {
                icon: <FiUsers className="w-6 h-6 md:w-8 md:h-8" />,
                title: "Partnerships",
                description:
                  "Collaborating with local and global entities for impactful projects.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={zoomIn(index * 0.1, 1)}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-slate-100 text-center"
              >
                <div className="p-3 bg-gradient-to-br from-indigo-600 to-cyan-500 rounded-md md:rounded-lg w-fit mx-auto mb-4 md:mb-6 text-white transform hover:rotate-12 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-base md:text-lg font-semibold text-slate-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-500">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Strategic Shift Section */}
      <motion.section
        variants={staggerContainer(0.2)}
        className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="max-w-5xl mx-auto">
          <motion.h2
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-800 mb-6 md:mb-8 text-center"
          >
            Strategic Shift to Africa
          </motion.h2>
          <motion.div
            variants={fadeIn("up", "tween", 0.3, 1)}
            className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-md border border-slate-100"
          >
            <p className="text-sm md:text-base text-slate-600 mb-4 md:mb-6">
              Originally registered in Houston, Texas, World Concepts Group
              relocated its operations to Kenya to capitalize on Africa’s rapid
              population growth and economic potential. This strategic move
              positions us at the heart of emerging markets, enabling us to:
            </p>
            <ul className="space-y-2 text-xs md:text-sm text-slate-600">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-indigo-600 rounded-full" />
                <span>
                  Gain deep insights into local cultures and consumer needs.
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-indigo-600 rounded-full" />
                <span>
                  Tap into new revenue streams across diverse markets.
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-indigo-600 rounded-full" />
                <span>
                  Drive impactful investments with on-the-ground expertise.
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        variants={staggerContainer(0.2)}
        className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-cyan-50 relative z-10"
      >
        <div className="max-w-5xl mx-auto">
          <motion.h2
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-800 mb-6 md:mb-8 text-center"
          >
            Our Team
          </motion.h2>
          <motion.p
            variants={fadeIn("up", "tween", 0.3, 1)}
            className="text-sm md:text-base text-slate-600 mb-6 md:mb-8 max-w-3xl mx-auto text-center"
          >
            Our diverse team combines global expertise with local knowledge to
            deliver exceptional value and innovation.
          </motion.p>
          <motion.div
            variants={staggerContainer(0.1)}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
          >
            {[
              {
                name: "John Doe",
                role: "CEO",
                description:
                  "20+ years in investment management, leading our strategic vision.",
              },
              {
                name: "Jane Smith",
                role: "COO",
                description:
                  "Expert in operations and project execution across Africa.",
              },
              {
                name: "Ahmed Kiptoo",
                role: "Head of Partnerships",
                description:
                  "Building impactful collaborations with local stakeholders.",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                variants={zoomIn(index * 0.1, 1)}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-slate-100 text-center overflow-hidden group"
              >
                <div className="absolute inset-0 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute -inset-[2px] rounded-xl md:rounded-2xl bg-gradient-to-br from-indigo-400/30 to-cyan-400/30" />
                </div>
                <div className="relative z-10">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-indigo-600 to-cyan-500 rounded-full mx-auto mb-4 md:mb-6 flex items-center justify-center text-white text-xl md:text-2xl font-bold">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-slate-800 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-xs md:text-sm text-indigo-600 mb-3">
                    {member.role}
                  </p>
                  <p className="text-xs md:text-sm text-slate-500">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-600 to-cyan-500 text-white relative z-10"
      >
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6">
            Join Our Mission
          </h2>
          <p className="text-sm md:text-base mb-6 md:mb-8 max-w-2xl mx-auto">
            Partner with us to shape Africa’s future. Contact us at{" "}
            <a href="tel:+254700483333" className="underline">
              +254 700 483333
            </a>{" "}
            to learn more.
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
