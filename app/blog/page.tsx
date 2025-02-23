"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, zoomIn } from "@/utils/motion";
import Image from "next/image";

export default function Blog() {
  const [search, setSearch] = useState("");

  const posts = [
    {
      title: "Healthcare Advances in 2024",
      excerpt: "New tech in East Africa.",
      image: "/images/healthcare.jpg",
    },
    {
      title: "Real Estate Boom",
      excerpt: "Urban growth trends.",
      image: "/images/realestate.jpg",
    },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="show"
      className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute -top-32 -left-40 w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[800px] lg:h-[800px] bg-gradient-to-r from-indigo-300/50 to-cyan-300/50 rounded-full blur-3xl animate-rotate" />
        <div className="absolute bottom-10 right-10 w-[150px] h-[150px] md:w-[300px] md:h-[300px] bg-gradient-to-r from-indigo-300/50 to-cyan-300/50 rounded-full blur-2xl" />
      </div>

      {/* Hero Section */}
      <motion.section
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="pt-24 md:pt-32 pb-12 md:pb-20 px-6 text-center relative z-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
          Blog & News
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Stay informed with the latest updates from World Concepts.
        </p>
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
            className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all duration-200"
          />
        </div>
      </motion.div>

      {/* Blog Posts */}
      <motion.section
        variants={fadeIn("up", "tween", 0.5, 1)}
        className="px-6 pb-20 relative z-10"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              variants={zoomIn(index * 0.1, 1)}
              className="bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-gray-200 hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
            >
              <div className="w-full h-48 relative rounded-lg overflow-hidden mb-4">
                <Image
                  src={post.image}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {post.title}
              </h3>
              <p className="text-gray-600 mt-2">{post.excerpt}</p>
              <a
                href="#"
                className="text-indigo-600 mt-4 inline-flex items-center gap-2 transition-all hover:underline"
              >
                Read More →
              </a>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
}
