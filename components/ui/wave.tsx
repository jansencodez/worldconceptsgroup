import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

function wave() {
  return (
    <motion.div
      variants={fadeIn("up", "tween", 0.2, 1)}
      className="absolute bottom-0 w-full z-0"
    >
      <svg
        viewBox="0 0 1440 120"
        className="w-full h-80"
        preserveAspectRatio="none"
      >
        <path
          fill="url(#waveGradient)"
          d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,74.7C1120,75,1280,53,1360,42.7L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        />
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="100%" stopColor="#4f46e5" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}

export default wave;
