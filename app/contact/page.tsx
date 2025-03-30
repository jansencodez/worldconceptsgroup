/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import { fadeIn, staggerContainer } from "@/utils/motion";
import Button from "@/components/ui/button";
import { FiMail, FiMapPin, FiPhone, FiAlertCircle } from "react-icons/fi";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<
    "idle" | "success" | "error"
  >("idle");
  const formRef = React.useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form data:", data);

      reset();

      // Randomly simulate success/error for demonstration
      const isSuccess = Math.random() > 0.2;

      if (isSuccess) {
        setSubmitStatus("success");
        reset();
        setTimeout(() => formRef.current?.focus(), 100);
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      variants={staggerContainer(0.2)}
      initial="hidden"
      animate="show"
      className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 flex items-center justify-center p-6 overflow-hidden relative"
    >
      {/* Background elements remain unchanged */}

      <motion.div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full border border-gray-100 z-10">
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="text-center mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-lg text-slate-600 mt-4 max-w-md mx-auto">
            Let's start a conversation about your next investment opportunity.
          </p>
        </motion.div>

        {submitStatus === "success" ? (
          <motion.div
            variants={fadeIn("up", "tween", 0.5, 1)}
            className="text-center p-8 bg-emerald-50 rounded-xl"
            role="alert"
            aria-live="polite"
          >
            <div className="text-emerald-600 text-2xl font-semibold mb-2">
              ✓ Message Sent!
            </div>
            <p className="text-slate-600">
              Thank you for reaching out. Our team will respond within 24 hours.
            </p>
            <Button
              onClick={() => setSubmitStatus("idle")}
              className="mt-6 px-8 py-2.5"
              variant="outline"
            >
              Send Another Message
            </Button>
          </motion.div>
        ) : (
          <motion.form
            ref={formRef}
            variants={fadeIn("up", "tween", 0.5, 1)}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
            noValidate
          >
            {submitStatus === "error" && (
              <div
                className="p-4 bg-red-50 text-red-700 rounded-lg flex items-start gap-3"
                role="alert"
              >
                <FiAlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Submission Error</p>
                  <p className="text-sm">Please try again or contact support</p>
                </div>
              </div>
            )}

            <div className="space-y-1">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-700"
              >
                Full Name
                <span className="text-red-500 ml-1">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  {...register("name", {
                    required: "Name is required",
                    minLength: {
                      value: 2,
                      message: "Name must be at least 2 characters",
                    },
                  })}
                  className={`w-full px-4 py-2.5 rounded-lg border ${
                    errors.name
                      ? "border-red-300 focus:ring-2 focus:ring-red-500"
                      : "border-gray-300 focus:ring-2 focus:ring-indigo-500"
                  } focus:outline-none transition-all placeholder-gray-400`}
                  placeholder="John Doe"
                  aria-invalid={!!errors.name}
                />
                {errors.name && (
                  <FiAlertCircle className="absolute right-3 top-3 w-5 h-5 text-red-500" />
                )}
              </div>
              {errors.name && (
                <p className="text-sm text-red-600">{errors.name.message}</p>
              )}
            </div>

            <div className="space-y-1">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700"
              >
                Email Address
                <span className="text-red-500 ml-1">*</span>
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className={`w-full px-4 py-2.5 rounded-lg border ${
                    errors.email
                      ? "border-red-300 focus:ring-2 focus:ring-red-500"
                      : "border-gray-300 focus:ring-2 focus:ring-indigo-500"
                  } focus:outline-none transition-all placeholder-gray-400`}
                  placeholder="john@company.com"
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <FiAlertCircle className="absolute right-3 top-3 w-5 h-5 text-red-500" />
                )}
              </div>
              {errors.email && (
                <p className="text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-1">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-700"
              >
                Your Message
                <span className="text-red-500 ml-1">*</span>
              </label>
              <div className="relative">
                <textarea
                  id="message"
                  {...register("message", {
                    required: "Message is required",
                    minLength: {
                      value: 10,
                      message: "Message must be at least 10 characters",
                    },
                  })}
                  rows={5}
                  className={`w-full px-4 py-2.5 rounded-lg border ${
                    errors.message
                      ? "border-red-300 focus:ring-2 focus:ring-red-500"
                      : "border-gray-300 focus:ring-2 focus:ring-indigo-500"
                  } focus:outline-none transition-all placeholder-gray-400 resize-none`}
                  placeholder="How can we assist you?"
                  aria-invalid={!!errors.message}
                />
                {errors.message && (
                  <FiAlertCircle className="absolute right-3 top-3 w-5 h-5 text-red-500" />
                )}
              </div>
              {errors.message && (
                <p className="text-sm text-red-600">{errors.message.message}</p>
              )}
            </div>

            <div className="pt-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-8 py-3.5 text-base font-semibold rounded-xl transition-all text-white"
                variant="solid"
              >
                {isSubmitting ? (
                  <span className="inline-flex items-center gap-2 ">
                    <Spinner />
                    Sending...
                  </span>
                ) : (
                  "Send Message →"
                )}
              </Button>
            </div>
          </motion.form>
        )}

        <motion.div
          variants={fadeIn("up", "tween", 0.6, 1)}
          className="mt-12 flex flex-wrap gap-6 md:grid-cols-3 text-left"
        >
          <div className="p-5 bg-indigo-50 rounded-xl hover:bg-indigo-100 transition-colors w-fit">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-white rounded-lg shadow-sm">
                <FiPhone className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-800">Phone</p>
                <p className="text-slate-600 mt-1">+254 700 483 333</p>
              </div>
            </div>
          </div>

          <div className="p-5 bg-indigo-50 rounded-xl hover:bg-indigo-100 transition-colors w-fit">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-white rounded-lg shadow-sm">
                <FiMail className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-800">Email</p>
                <Link
                  href="mailto:info@worldconcepts.com"
                  className="text-slate-600 mt-1 hover:text-indigo-700 transition-colors"
                >
                  info@worldconcepts.com
                </a>
              </div>
            </div>
          </div>

          <div className="p-5 bg-indigo-50 rounded-xl hover:bg-indigo-100 transition-colors w-fit">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-white rounded-lg shadow-sm">
                <FiMapPin className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-800">HQ Office</p>
                <p className="text-slate-600 mt-1">Westlands, Nairobi</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

const Spinner = () => (
  <svg
    className="animate-spin h-5 w-5 text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);
