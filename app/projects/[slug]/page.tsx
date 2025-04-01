"use client";

import React from "react";
import { useRouter, useParams } from "next/navigation";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import Button from "@/components/ui/button";
import {
  FiHeart,
  FiHome,
  FiGlobe,
  FiTruck,
  FiShoppingBag,
  FiDollarSign,
} from "react-icons/fi";

export default function ProjectDetail() {
  const router = useRouter();
  const { slug } = useParams();

  const projects = [
    {
      title: "Nain Hospitals Expansion",
      sector: "Healthcare",
      status: "Current",
      icon: <FiHeart className="w-12 h-12 text-white" />,
      details: {
        overview:
          "Nain Hospitals is a premier healthcare institution dedicated to providing world-class medical services. The expansion project aims to establish eight regional hospitals across the country, featuring a state-of-the-art diagnostic center and a bed capacity increase to 350, with 50 beds dedicated to transplant patients.",
        features: [
          "Eight strategically positioned regional hospitals",
          "Cutting-edge diagnostic center with advanced technology",
          "Specialized clinics for renal, pediatric, and gynecology services",
          "Expanded renal unit for growing patient needs",
        ],
        impact:
          "Increased access to quality healthcare, enhanced patient care with specialized units, and improved community health through early diagnostics.",
      },
    },
    {
      title: "Mulembe Africa Real Estate",
      sector: "Real Estate",
      status: "Current",
      icon: <FiHome className="w-12 h-12 text-white" />,
      details: {
        overview:
          "Mulembe Africa Real Estate is redefining urban living with 10 acres of prime land, developing smart cities, mixed-use complexes, and affordable housing solutions tailored to growing urban populations.",
        features: [
          "Smart city developments with sustainable infrastructure",
          "Mixed-use complexes blending residential, commercial, and recreational spaces",
          "Affordable housing options: studios, 2-bedroom, and 3-bedroom apartments",
          "Modern duplexes enhancing lifestyle",
        ],
        impact:
          "Revolutionizing real estate with sustainable, inclusive housing that drives economic growth and enhances urban lifestyles.",
      },
    },
    {
      title: "Agricultural Technology Initiative",
      sector: "Agriculture",
      status: "Current",
      icon: <FiGlobe className="w-12 h-12 text-white" />,
      details: {
        overview:
          "Agricultural Technology integrates modern farming techniques with technology-driven solutions to enhance productivity and export high-quality farm products like mushrooms, meat, onions, and tomatoes.",
        features: [
          "Advanced mushroom cultivation with climate control and automation",
          "Precision livestock management for premium meat exports",
          "Smart farming for onions and tomatoes with drip irrigation",
          "Farm leasing with IoT and AI-driven tools",
        ],
        impact:
          "Boosted food security, sustainable farming practices, and expanded market reach through technology integration.",
      },
    },
    {
      title: "Mobile Clinic Network",
      sector: "Healthcare",
      status: "Current",
      icon: <FiTruck className="w-12 h-12 text-white" />,
      details: {
        overview:
          "Part of Nain Hospitals’ expansion, this initiative deploys fully equipped mobile clinic containers to provide healthcare access in remote regions.",
        features: [
          "Diagnostic laboratories in each mobile unit",
          "Pharmacies for immediate medication access",
          "Telemedicine capabilities for remote consultations",
          "Serving underserved communities",
        ],
        impact:
          "Bridging healthcare gaps in remote areas, reducing chronic disease burden through preventative care.",
      },
    },
    {
      title: "Nyumbani Deport & Tisan Africa",
      sector: "Consumer Markets",
      status: "Current",
      icon: <FiShoppingBag className="w-12 h-12 text-white" />,
      details: {
        overview:
          "Nyumbani Deport offers grocery delivery, while Tisan Africa provides fast food and coffee services, enhancing urban convenience.",
        features: [
          "Grocery delivery with a wide range of fresh products",
          "Fast food and specialty coffee with quick service",
          "Real-time delivery tracking and secure payments",
          "Strategic locations near urban hubs",
        ],
        impact:
          "Improved quality of life and accessibility to goods and services for urban consumers.",
      },
    },
    {
      title: "Mana Mat",
      sector: "Consumer Markets",
      status: "Current",
      icon: <FiShoppingBag className="w-12 h-12 text-white" />,
      details: {
        overview:
          "Mana Mat consists of small, mobile retail containers functioning as traveling shops, ensuring essential goods are accessible in various locations, particularly in areas with limited access to supermarkets.",
        features: [
          "Portable container shops stationed based on demand",
          "Affordable pricing on everyday goods",
          "Flexible locations catering to underserved communities",
          "Access to fresh produce, snacks, and household necessities",
        ],
        impact:
          "Enhanced convenience and access to essential goods in underserved areas, supporting community resilience.",
      },
    },
    {
      title: "Mulembe Africa Microcredit",
      sector: "Finance",
      status: "Current",
      icon: <FiDollarSign className="w-12 h-12 text-white" />,
      details: {
        overview:
          "Mulembe Africa pioneers microcredit and digital banking to empower individuals and businesses, fostering financial inclusion across Africa.",
        features: [
          "Accessible and flexible loan solutions",
          "Digital banking innovations for seamless access",
          "Financial literacy programs",
          "Support for small business growth",
        ],
        impact:
          "Bridging the gap between traditional banking and underserved communities, enhancing economic resilience.",
      },
    },
    {
      title: "Community Empowerment Program",
      sector: "Consumer Markets",
      status: "Past",
      icon: <FiShoppingBag className="w-12 h-12 text-white" />,
      details: {
        overview:
          "This initiative empowered rural entrepreneurs by providing products worth Ksh 100,000 to kickstart or expand retail operations.",
        features: [
          "Direct provision of high-demand goods",
          "Business management training",
          "Focus on rural economic development",
          "Support for job creation",
        ],
        impact:
          "Long-term economic self-sufficiency and job creation in rural communities.",
      },
    },
  ];

  // Function to normalize slugs by replacing special characters
  const normalizeSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/&/g, "-and-"); // Replace & with -and-
  };

  const project = projects.find((p) => normalizeSlug(p.title) === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <p className="text-slate-800 text-lg">Project not found.</p>
      </div>
    );
  }

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

      {/* Header Section */}
      <motion.section
        variants={staggerContainer(0.2)}
        className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 sm:px-6 lg:px-8 text-center relative z-10"
      >
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="inline-block bg-white/50 backdrop-blur-lg rounded-xl px-6 py-3 mb-6 shadow-lg"
        >
          <span className="text-sm font-semibold text-cyan-600">
            {project.sector} | {project.status}
          </span>
        </motion.div>
        <motion.h1
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6"
        >
          {project.title}
        </motion.h1>
        <motion.div
          variants={fadeIn("up", "tween", 0.4, 1)}
          className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-cyan-500 rounded-xl mx-auto flex items-center justify-center"
        >
          {project.icon}
        </motion.div>
      </motion.section>

      {/* Details Section */}
      <motion.section
        variants={staggerContainer(0.2)}
        className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-md border border-slate-100">
          <motion.h2
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="text-xl md:text-2xl font-semibold text-slate-800 mb-4"
          >
            Overview
          </motion.h2>
          <motion.p
            variants={fadeIn("up", "tween", 0.3, 1)}
            className="text-sm md:text-base text-slate-600 mb-6"
          >
            {project.details.overview}
          </motion.p>

          <motion.h2
            variants={fadeIn("up", "tween", 0.4, 1)}
            className="text-xl md:text-2xl font-semibold text-slate-800 mb-4"
          >
            Key Features
          </motion.h2>
          <motion.ul
            variants={staggerContainer(0.1)}
            className="list-disc list-inside text-sm md:text-base text-slate-600 mb-6"
          >
            {project.details.features.map((feature, index) => (
              <motion.li
                key={index}
                variants={fadeIn("up", "tween", 0.5 + index * 0.1, 1)}
              >
                {feature}
              </motion.li>
            ))}
          </motion.ul>

          <motion.h2
            variants={fadeIn("up", "tween", 0.6, 1)}
            className="text-xl md:text-2xl font-semibold text-slate-800 mb-4"
          >
            Impact
          </motion.h2>
          <motion.p
            variants={fadeIn("up", "tween", 0.7, 1)}
            className="text-sm md:text-base text-slate-600"
          >
            {project.details.impact}
          </motion.p>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-600 to-cyan-500 text-white relative z-10"
      >
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6">
            Get Involved
          </h2>
          <p className="text-sm md:text-base mb-6 md:mb-8 max-w-2xl mx-auto">
            Want to learn more or collaborate on this project? Reach out to us!
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
