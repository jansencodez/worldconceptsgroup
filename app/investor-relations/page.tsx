"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import Button from "@/components/ui/button";
import { FiDownload, FiMail, FiPhone } from "react-icons/fi";
import Link from "next/link";

export default function InvestorRelations() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData); // Replace with actual API call
    setFormSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setFormSubmitted(false), 3000); // Reset success message
  };

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
            Investor Relations
          </span>
        </motion.div>
        <motion.h1
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-4 md:mb-6 leading-tight"
        >
          Join World Concepts Ventures’ Growth Journey
        </motion.h1>
        <motion.p
          variants={fadeIn("up", "tween", 0.4, 1)}
          className="text-sm md:text-base text-slate-500 max-w-2xl mx-auto"
        >
          Invest in Africa’s future with opportunities designed for high returns
          and sustainable impact.
        </motion.p>
      </motion.section>

      {/* Financial Highlights */}
      <motion.section
        variants={fadeIn("up", "tween", 0.5, 1)}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-20"
      >
        <h2 className="text-xl md:text-2xl font-semibold text-slate-800 mb-6 md:mb-8 text-center">
          Financial Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            { label: "Total Assets", value: "Ksh 300M", trend: "+18% YoY" },
            {
              label: "Active Projects",
              value: "8",
              trend: "Across 7 Nations",
            },
            { label: "Projected ROI", value: "15-21%", trend: "Annualized" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-md border border-slate-100 transition-all duration-300 hover:border-indigo-400 hover:shadow-lg"
            >
              <p className="text-xl md:text-2xl font-bold text-indigo-600 mb-2">
                {stat.value}
              </p>
              <p className="text-xs md:text-sm text-slate-600 font-medium">
                {stat.label}
              </p>
              <p className="text-xs text-indigo-500 mt-1">{stat.trend}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Investment Opportunities */}
      <motion.section
        variants={fadeIn("up", "tween", 0.6, 1)}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-20"
      >
        <h2 className="text-xl md:text-2xl font-semibold text-slate-800 mb-6 md:mb-8 text-center">
          Investment Opportunities with World Concepts Ventures
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-md border border-slate-100">
            <h3 className="text-base md:text-lg font-semibold text-slate-800 mb-4">
              For Individual Investors
            </h3>
            <p className="text-xs md:text-sm text-slate-600 mb-4">
              World Concepts Ventures invites you to join as a venture
              shareholder or investor, offering you the chance to be part of its
              exciting growth journey. Become a valued partner in our expansion
              across Africa, benefiting from our strategic position in emerging
              markets.
            </p>
            <Button
              variant="outline"
              onClick={() => router.push("/investments")}
              className="w-full border-indigo-600 text-indigo-600 hover:bg-indigo-50 text-xs md:text-sm"
            >
              Explore Opportunities
            </Button>
          </div>
          <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-md border border-slate-100">
            <h3 className="text-base md:text-lg font-semibold text-slate-800 mb-4">
              For Fixed Income Investors
            </h3>
            <p className="text-xs md:text-sm text-slate-600 mb-4">
              Seeking stable and lucrative returns? We offer long-term and
              short-term fixed income options designed to provide attractive
              yields, ideal for investors looking for reliable income with
              significant growth potential.
            </p>
            <Button
              variant="outline"
              onClick={() => router.push("/projects")}
              className="w-full border-indigo-600 text-indigo-600 hover:bg-indigo-50 text-xs md:text-sm"
            >
              View Options
            </Button>
          </div>
        </div>
        <div className="mt-8 bg-gradient-to-br from-indigo-600 to-cyan-500 rounded-xl md:rounded-2xl p-6 md:p-8 text-white text-center flex flex-col">
          <h3 className="text-base md:text-lg font-semibold mb-4">
            High Returns Await
          </h3>
          <p className="text-xs md:text-sm mb-4 max-w-2xl mx-auto">
            World Concepts Ventures is dedicated to delivering exceptional
            value, with impressive returns of 15% to 21% on your investment.
            Whether you seek short-term gains or long-term growth, secure your
            financial future with us.
          </p>
          <Button
            onClick={() => router.push("/contact")}
            className="bg-white text-indigo-600 hover:bg-indigo-50 px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl text-xs md:text-sm self-center"
          >
            Get Started
          </Button>
        </div>
      </motion.section>

      {/* Resources */}
      <motion.section
        variants={fadeIn("up", "tween", 0.7, 1)}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-20"
      >
        <h2 className="text-xl md:text-2xl font-semibold text-slate-800 mb-6 md:mb-8 text-center">
          Investor Resources
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-md border border-slate-100 flex items-center justify-between">
            <div>
              <h3 className="text-base md:text-lg font-semibold text-slate-800 mb-2">
                Annual Report 2024
              </h3>
              <p className="text-xs md:text-sm text-slate-600">
                Review our latest financial performance and strategic updates.
              </p>
            </div>
            <Link
              href="/annual-report-2024.pdf" // Replace with actual path
              download
              className="text-indigo-600 hover:text-indigo-700 transition-colors"
            >
              <FiDownload className="w-6 h-6" />
            </Link>
          </div>
          <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-md border border-slate-100 flex items-center justify-between">
            <div>
              <h3 className="text-base md:text-lg font-semibold text-slate-800 mb-2">
                Investment Prospectus
              </h3>
              <p className="text-xs md:text-sm text-slate-600">
                Explore our vision, strategy, and investment opportunities.
              </p>
            </div>
            <Link
              href="/prospectus.pdf" // Replace with actual path
              download
              className="text-indigo-600 hover:text-indigo-700 transition-colors"
            >
              <FiDownload className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Contact Form */}
      <motion.section
        variants={fadeIn("up", "tween", 0.8, 1)}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-20"
      >
        <h2 className="text-xl md:text-2xl font-semibold text-slate-800 mb-6 md:mb-8 text-center">
          Contact Us
        </h2>
        <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-md border border-slate-100 max-w-2xl mx-auto">
          {formSubmitted ? (
            <p className="text-center text-indigo-600 text-sm md:text-base">
              Thank you! We’ll respond shortly.
            </p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-xs md:text-sm text-slate-600 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm md:text-base"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-xs md:text-sm text-slate-600 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm md:text-base"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-xs md:text-sm text-slate-600 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm md:text-base"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl text-xs md:text-sm"
              >
                Send Message
              </Button>
            </form>
          )}
          <div className="mt-6 flex justify-center gap-4 text-sm md:text-base text-slate-600">
            <Link
              href="mailto:investors@worldconcepts.com"
              className="flex items-center hover:text-indigo-600"
            >
              <FiMail className="w-5 h-5 mr-2" /> investors@worldconcepts.com
            </Link>
            <Link
              href="tel:+254700483333"
              className="flex items-center hover:text-indigo-600"
            >
              <FiPhone className="w-5 h-5 mr-2" /> +254 700 483333
            </Link>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        variants={fadeIn("up", "tween", 0.9, 1)}
        className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-600 to-cyan-500 text-white relative z-10"
      >
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6">
            Ready to Invest with World Concepts Ventures?
          </h2>
          <p className="text-sm md:text-base mb-6 md:mb-8 max-w-2xl mx-auto">
            Take the next step toward financial growth. Schedule a consultation
            or download our prospectus now.
          </p>
          <motion.div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6">
            <Button
              onClick={() => router.push("/contact")}
              className="bg-white text-indigo-600 hover:bg-indigo-50 px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl text-xs md:text-sm"
            >
              Schedule Consultation
            </Button>
            <Button
              variant="outline"
              onClick={() => window.open("/prospectus.pdf", "_blank")} // Replace with actual path
              className="border-white text-white hover:bg-white hover:text-indigo-600 px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl text-xs md:text-sm"
            >
              Download Prospectus
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
}
