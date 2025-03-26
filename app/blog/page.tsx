"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion"; // Remove zoomIn for smoother effect
import Image from "next/image";

export default function Blog() {
  const [search, setSearch] = useState("");

  const posts = [
    {
      title: "Healthcare Advances in 2024",
      excerpt:
        "Exploring new technologies transforming healthcare delivery in East Africa.",
      image: "/images/healthcare.jpg",
      tag: "Healthcare",
    },
    {
      title: "Real Estate Boom",
      excerpt: "Trends driving urban growth and sustainable development.",
      image: "/images/realestate.jpg",
      tag: "Real Estate",
    },
  ];

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <motion.div
      initial="hidden"
      animate="show"
      className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden"
    >
      {/* Enhanced Background Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-32 -left-40 w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[800px] lg:h-[800px] bg-gradient-to-r from-indigo-300/50 to-cyan-300/50 rounded-full blur-3xl animate-[pulse_8s_infinite]" />
        <div className="absolute bottom-10 right-10 w-[150px] h-[150px] md:w-[300px] md:h-[300px] bg-gradient-to-r from-indigo-300/50 to-cyan-300/50 rounded-full blur-2xl animate-[pulse_6s_infinite]" />
      </div>

      {/* Hero Section */}
      <motion.section
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="pt-24 md:pt-32 pb-12 md:pb-20 px-6 text-center relative z-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 gradient-text">
          Blog & News
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Stay informed with the latest updates from World Concepts.
        </p>

        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="w-full flex justify-center items-center mb-6 md:mb-10 relative"
        >
          <svg
            width="100%"
            height="40"
            viewBox="0 0 1200 40"
            className="max-w-4xl mx-auto"
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
      </motion.section>

      {/* Search Input */}
      <motion.div
        variants={fadeIn("up", "tween", 0.4, 1)}
        className="px-6 pb-8 relative z-10"
      >
        <div className="max-w-4xl mx-auto">
          <input
            type="text"
            placeholder="Search posts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-4 bg-white/70 backdrop-blur-md border border-gray-200 rounded-xl shadow-md focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all duration-300 placeholder-gray-400 text-slate-800"
          />
        </div>
      </motion.div>

      {/* Blog Posts */}
      <motion.section
        variants={staggerContainer(0.1)}
        className="px-6 pb-20 relative z-10"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", "tween", 0.2 + index * 0.1, 1)}
                className="blog-card"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0"
                />
                <div className="blog-card-tag">{post.tag}</div>
                <div className="blog-card-content">
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <a href="#" className="blog-card-link">
                    Read More →
                  </a>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-center text-slate-600 col-span-full">
              No posts found matching your search.
            </p>
          )}
        </div>
      </motion.section>
    </motion.div>
  );
}
