"use client";

import React from "react";
import { useRouter, useParams } from "next/navigation";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import Button from "@/components/ui/button";
import ReactMarkdown from "react-markdown";
import { updatedSectors } from "@/data/sectors";

interface Sector {
  id: string;
  title: string;
  icon: React.JSX.Element;
  tag: string;
  description: string;
  stats: { investments: string; projects: string; countries: string };
  initiatives: string[];
  initiativeDetails: { [key: string]: { title: string; content: string } };
}

const sectorHeroImages: { [key: string]: string } = {
  healthcare: "/images/sectors/healthcare-hero.jpg",
  "real-estate": "/images/sectors/real-estate-hero.jpg",
  agritech: "/images/sectors/agritech-hero.jpg",
  consumer: "/images/sectors/consumer-hero.jpg",
  finance: "/images/sectors/finance-hero.jpg",
};

export default function SectorDetail() {
  const router = useRouter();
  const { slug } = useParams();

  const sector: Sector | undefined = updatedSectors.find((s) => s.id === slug);
  const heroImage = sector
    ? sectorHeroImages[sector.id] || "/images/sectors/default-hero.jpg"
    : null;

  if (!sector) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <p className="text-slate-800 text-lg">Sector not found.</p>
      </div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="show"
      className="min-h-screen bg-slate-50 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute -top-20 -left-40 w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[800px] lg:h-[800px] bg-gradient-to-r from-indigo-200/40 to-cyan-200/40 rounded-full blur-3xl animate-rotate" />
        <div className="absolute -top-40 -right-40 w-[250px] h-[250px] md:w-[400px] md:h-[400px] lg:w-[700px] lg:h-[700px] bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-rotate delay-1000" />
      </div>

      {/* Header Section with Increased Height */}
      <motion.section
        variants={staggerContainer(0.2)}
        className="min-h-[400px] md:min-h-[500px] lg:min-h-[600px] pt-24 md:pt-32 pb-12 md:pb-20 px-4 sm:px-6 lg:px-8 text-center relative z-10"
      >
        {/* Hero Image Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />

        {/* Black Gradient Overlay with Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
          <div className="relative z-10 max-w-5xl mx-auto">
            <motion.div
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="inline-block bg-white/70 backdrop-blur-lg rounded-xl px-6 py-3 mb-6 shadow-lg"
            >
              <span className="text-sm font-semibold text-cyan-700">
                {sector.tag}
              </span>
            </motion.div>
            <motion.h1
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg mb-6"
            >
              {sector.title}
            </motion.h1>
            <motion.div
              variants={fadeIn("up", "tween", 0.4, 1)}
              className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-cyan-500 rounded-xl mx-auto flex items-center justify-center shadow-lg"
            >
              {sector.icon}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Overview Section */}
      <motion.section
        variants={staggerContainer(0.2)}
        className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-md border border-slate-100 markdown-body">
          <motion.h2
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="text-xl md:text-2xl font-semibold text-slate-800 mb-4"
          >
            Overview
          </motion.h2>
          <motion.div
            variants={fadeIn("up", "tween", 0.3, 1)}
            className="text-sm md:text-base text-slate-600 mb-6"
          >
            <ReactMarkdown>{sector.description}</ReactMarkdown>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeIn("up", "tween", 0.4, 1)}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"
          >
            <div className="bg-indigo-50 rounded-lg p-4 text-center">
              <p className="text-lg md:text-xl font-bold text-indigo-600">
                {sector.stats.investments}
              </p>
              <p className="text-xs md:text-sm text-slate-600">
                Total Investments
              </p>
            </div>
            <div className="bg-indigo-50 rounded-lg p-4 text-center">
              <p className="text-lg md:text-xl font-bold text-indigo-600">
                {sector.stats.projects}
              </p>
              <p className="text-xs md:text-sm text-slate-600">
                Active Projects
              </p>
            </div>
            <div className="bg-indigo-50 rounded-lg p-4 text-center">
              <p className="text-lg md:text-xl font-bold text-indigo-600">
                {sector.stats.countries}
              </p>
              <p className="text-xs md:text-sm text-slate-600">
                Countries Active
              </p>
            </div>
          </motion.div>

          {/* Initiatives */}
          <motion.h2
            variants={fadeIn("up", "tween", 0.5, 1)}
            className="text-xl md:text-2xl font-semibold text-slate-800 mb-4"
          >
            Active Projects
          </motion.h2>
          <motion.div variants={staggerContainer(0.1)} className="space-y-4">
            {sector.initiatives.map((initiative, index) => {
              const detail = sector.initiativeDetails[initiative];
              return (
                <motion.div
                  key={initiative}
                  variants={fadeIn("up", "tween", 0.6 + index * 0.1, 1)}
                  className="bg-indigo-50/50 rounded-lg p-4"
                >
                  <div className="text-sm md:text-base text-slate-600">
                    <ReactMarkdown>
                      {detail?.content || "No additional details available."}
                    </ReactMarkdown>
                  </div>
                </motion.div>
              );
            })}
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
            Invest in {sector.title}
          </h2>
          <p className="text-sm md:text-base mb-6 md:mb-8 max-w-2xl mx-auto">
            Want to contribute to this sector’s growth? Contact us to explore
            investment opportunities!
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Button
              onClick={() => router.push("/contact")}
              className="bg-white text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-xl text-sm"
            >
              Contact Us
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
}
