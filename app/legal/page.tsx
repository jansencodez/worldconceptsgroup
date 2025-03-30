/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import Link from "next/link";

export default function Legal() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={staggerContainer(0.2)}
      className="min-h-screen bg-slate-50 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute -top-20 -left-40 w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[800px] lg:h-[800px] bg-gradient-to-r from-indigo-200/40 to-cyan-200/40 rounded-full blur-3xl animate-rotate" />
        <div className="absolute -top-40 -right-40 w-[250px] h-[250px] md:w-[400px] md:h-[400px] lg:w-[700px] lg:h-[700px] bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-rotate delay-1000" />
      </div>

      {/* Header */}
      <motion.section
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 sm:px-6 lg:px-8 text-center relative z-10 bg-gradient-to-b from-indigo-100/20 to-slate-50"
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
          Legal Information
        </h1>
        <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
          Review our Privacy Policy and Terms of Service below. For any
          questions, feel free to contact us.
        </p>
      </motion.section>

      {/* Legal Content */}
      <motion.section
        variants={staggerContainer(0.2)}
        className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Privacy Policy */}
          <div className="bg-white rounded-2xl shadow-md border border-slate-100 p-6">
            <motion.button
              variants={fadeIn("up", "tween", 0.3, 1)}
              onClick={() => setIsPrivacyOpen(!isPrivacyOpen)}
              className="w-full flex justify-between items-center text-xl md:text-2xl font-semibold text-indigo-600 focus:outline-none"
            >
              Privacy Policy
              <span className="text-lg">{isPrivacyOpen ? "−" : "+"}</span>
            </motion.button>
            {isPrivacyOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-sm md:text-base text-slate-600 mt-4 overflow-hidden"
              >
                <p>
                  <strong>Last Updated:</strong> March 30, 2025
                </p>
                <p className="mt-2">
                  We value your privacy. This Privacy Policy outlines how we
                  collect, use, and protect your personal information when you
                  visit our website or engage with our services.
                </p>
                <h3 className="text-lg font-semibold text-slate-800 mt-4">
                  1. Information We Collect
                </h3>
                <p>
                  We may collect personal data such as your name, email address,
                  and contact details when you submit forms or interact with our
                  platform.
                </p>
                <h3 className="text-lg font-semibold text-slate-800 mt-4">
                  2. How We Use Your Information
                </h3>
                <p>
                  Your data is used to provide services, respond to inquiries,
                  and improve our website. We do not sell your information to
                  third parties.
                </p>
                <h3 className="text-lg font-semibold text-slate-800 mt-4">
                  3. Data Protection
                </h3>
                <p>
                  We implement reasonable security measures to protect your
                  data, though no system is completely secure.
                </p>
                <p className="mt-2">
                  For more details, contact us at{" "}
                  <Link
                    href="mailto:legal@example.com"
                    className="text-indigo-600 hover:underline"
                  >
                    legal@example.com
                  </Link>
                  .
                </p>
              </motion.div>
            )}
          </div>

          {/* Terms of Service */}
          <div className="bg-white rounded-2xl shadow-md border border-slate-100 p-6">
            <motion.button
              variants={fadeIn("up", "tween", 0.4, 1)}
              onClick={() => setIsTermsOpen(!isTermsOpen)}
              className="w-full flex justify-between items-center text-xl md:text-2xl font-semibold text-indigo-600 focus:outline-none"
            >
              Terms of Service
              <span className="text-lg">{isTermsOpen ? "−" : "+"}</span>
            </motion.button>
            {isTermsOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-sm md:text-base text-slate-600 mt-4 overflow-hidden"
              >
                <p>
                  <strong>Last Updated:</strong> March 30, 2025
                </p>
                <p className="mt-2">
                  By using our website, you agree to these Terms of Service.
                  Please read them carefully.
                </p>
                <h3 className="text-lg font-semibold text-slate-800 mt-4">
                  1. Use of Site
                </h3>
                <p>
                  You may use our site for lawful purposes only. Unauthorized
                  use or distribution of content is prohibited.
                </p>
                <h3 className="text-lg font-semibold text-slate-800 mt-4">
                  2. Limitation of Liability
                </h3>
                <p>
                  We are not liable for any damages arising from your use of
                  this site. All content is provided "as is."
                </p>
                <h3 className="text-lg font-semibold text-slate-800 mt-4">
                  3. Changes to Terms
                </h3>
                <p>
                  We may update these terms at any time. Continued use of the
                  site constitutes acceptance of the revised terms.
                </p>
                <p className="mt-2">
                  Questions? Reach out at{" "}
                  <Link
                    href="mailto:legal@worldconcepts.com"
                    className="text-indigo-600 hover:underline"
                  >
                    legal@example.com
                  </Link>
                  .
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}
