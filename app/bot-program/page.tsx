"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, zoomIn } from "@/utils/motion";
import Button from "@/components/ui/button";

export default function BOTProgram() {
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
          className="inline-block bg-white/50 backdrop-blur-lg rounded-xl md:rounded-2xl px-4 py-2 md:px-6 md:py-3 mb-4 md:mb-6 shadow-lg"
        >
          <span className="text-xs md:text-sm font-semibold text-cyan-600">
            Streamlined Project Success
          </span>
        </motion.div>
        <motion.h1
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-4 md:mb-6"
        >
          Build Operate Transfer (BOT) Program
        </motion.h1>
        <motion.p
          variants={fadeIn("up", "tween", 0.4, 1)}
          className="text-sm md:text-base text-slate-500 max-w-2xl mx-auto mb-6 md:mb-8"
        >
          Simplifying project development, management, and transition for
          sustainable growth across Africa.
        </motion.p>
        <motion.div
          variants={fadeIn("up", "tween", 0.5, 1)}
          className="flex justify-center"
        >
          <Button
            onClick={() => router.push("/contact")}
            className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl text-xs md:text-sm text-white"
          >
            Contact Us
          </Button>
        </motion.div>
      </motion.section>

      {/* Process Section */}
      <motion.section
        variants={staggerContainer(0.2)}
        className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-white/50 backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-800 mb-8 md:mb-12 text-center"
          >
            Our BOT Process
          </motion.h2>
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            {[
              {
                title: "Build",
                description:
                  "We identify viable projects, managing land acquisition, construction, supplies, and legal registrations. Our rigorous planning ensures quality and timely execution.",
              },
              {
                title: "Operate",
                description:
                  "We oversee daily operations, maintenance, and optimization, ensuring efficiency. This phase allows investors to recover costs and generate returns over an agreed period.",
              },
              {
                title: "Transfer",
                description:
                  "We facilitate a seamless transition of ownership to investors, providing comprehensive knowledge transfer and support for continued success.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={zoomIn(index * 0.1, 1)}
                whileHover={{ y: -4, scale: 1.02 }}
                className="relative bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-slate-100 border-l-4 border-l-blue-400 group"
              >
                <div className="absolute inset-0 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute -inset-[2px] rounded-xl md:rounded-2xl bg-gradient-to-br from-indigo-400/30 to-cyan-400/30" />
                </div>
                <div className="absolute -top-[6px] -left-[8px] w-[15px] h-[15px] rounded-full bg-blue-500 z-30"></div>
                <div className="relative z-10 ">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-indigo-600 to-cyan-500 rounded-md md:rounded-lg mx-auto mb-4 flex items-center justify-center text-white text-base md:text-lg font-semibold transform group-hover:rotate-12 transition-transform">
                    {index + 1}
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-slate-800 text-center mb-3">
                    {step.title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-500 text-center group-hover:text-slate-700 transition-colors">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        variants={staggerContainer(0.2)}
        className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-800 mb-8 md:mb-12 text-center"
          >
            Benefits of Our BOT Services
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Expertise",
                description:
                  "Leverage our industry-leading skills across the project lifecycle.",
              },
              {
                title: "Risk Management",
                description:
                  "Mitigate risks with our proactive management approach.",
              },
              {
                title: "Time & Cost Efficiency",
                description: "Save resources with our streamlined processes.",
              },
              {
                title: "Knowledge Transfer",
                description:
                  "Gain insights for ongoing success during transition.",
              },
              {
                title: "Seamless Transition",
                description: "Ensure continuity with our structured handover.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                variants={zoomIn(index * 0.1, 1)}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-slate-100 text-center"
              >
                <h3 className="text-base md:text-lg font-semibold text-slate-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-500">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-600 to-cyan-500 text-white relative z-10"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6">
            Ready to Start Your BOT Journey?
          </h2>
          <p className="text-sm md:text-base mb-6 md:mb-8 max-w-2xl mx-auto">
            Contact us at{" "}
            <a href="tel:+254700483333" className="underline">
              +254 700 483333
            </a>{" "}
            to discuss how our BOT Program can bring your vision to life.
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
