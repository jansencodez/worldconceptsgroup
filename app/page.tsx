"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, zoomIn } from "@/utils/motion";
import Button from "@/components/ui/button";
import Image from "next/image";
import {
  FiHeart,
  FiHome,
  FiBarChart,
  FiShoppingBag,
  FiDollarSign,
} from "react-icons/fi";
import { HiOutlineCube } from "react-icons/hi";

// Home Component
export default function Home() {
  const router = useRouter();

  return (
    <motion.div
      initial="hidden"
      animate="show"
      className="min-h-screen bg-slate-50 relative overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute -top-20 -left-40 w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[800px] lg:h-[800px] bg-gradient-to-r from-indigo-200/40 to-cyan-200/40 rounded-full blur-3xl animate-rotate" />
        <div className="absolute -top-40 -right-40 w-[250px] h-[250px] md:w-[400px] md:h-[400px] lg:w-[700px] lg:h-[700px] bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-rotate delay-1000" />
        <div className="absolute inset-0 z-[6] opacity-100 pointer-events-none">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1200 800"
            preserveAspectRatio="xMidYMid slice"
          >
            <pattern
              id="scratchPattern"
              patternUnits="userSpaceOnUse"
              width="300"
              height="300"
            >
              <path
                d="M-50 150 Q 150 0 350 150 T 750 150"
                stroke="#4338CA"
                strokeWidth="16"
                fill="none"
                strokeLinecap="round"
                strokeOpacity="0.5"
              />
              <path
                d="M0 80 Q 100 -20 200 80 T 400 80"
                stroke="#4F46E5"
                strokeWidth="12"
                fill="none"
                strokeLinecap="round"
                strokeOpacity="0.3"
                transform="translate(30, -40)"
              />
              <path
                d="M0 220 Q 100 320 200 220 T 400 220"
                stroke="#4F46E5"
                strokeWidth="12"
                fill="none"
                strokeLinecap="round"
                strokeOpacity="0.3"
                transform="translate(120, 40)"
              />
              <path
                d="M-20 250 Q 180 100 380 250 T 780 250"
                stroke="#4338CA"
                strokeWidth="10"
                fill="none"
                strokeLinecap="round"
                strokeOpacity="0.15"
                transform="translate(-50, 0)"
              />
            </pattern>
            <rect
              width="100%"
              height="100%"
              fill="url(#scratchPattern)"
              transform="rotate(-20 600 400)"
            />
          </svg>
        </div>
      </div>

      {/* Hero Section with Image */}
      <motion.header
        variants={staggerContainer(0.3)}
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
              Unlocking East & Central Africa’s Potential
            </span>
          </motion.div>

          <motion.h2
            variants={fadeIn("up", "tween", 0.3, 1)}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-4 md:mb-6 leading-tight"
          >
            Driving Regional Growth Through{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent block md:inline">
              Strategic Investments
            </span>
          </motion.h2>

          <motion.p
            variants={fadeIn("up", "tween", 0.4, 1)}
            className="text-sm md:text-base text-slate-500 mb-6 md:mb-8 max-w-2xl mx-auto"
          >
            World Concepts Group manages Ksh 300M across 7 East and Central
            African nations, focusing on healthcare, real estate, agritech, and
            more with 6 active projects.
          </motion.p>

          <motion.div
            variants={zoomIn(0.5, 1)}
            className="mb-6 md:mb-8 max-w-3xl mx-auto"
          >
            <Image
              src="/images/hero-africa-growth.jpg"
              alt="Africa’s Growth Landscape"
              width={800}
              height={400}
              className="rounded-xl shadow-lg object-cover"
            />
          </motion.div>

          <motion.div
            variants={fadeIn("up", "tween", 0.5, 0.25)}
            className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center"
          >
            <Button
              onClick={() => router.push("/investments")}
              className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl text-xs md:text-sm text-white"
            >
              Explore Investments
            </Button>
            <Button
              onClick={() => router.push("/contact")}
              variant="outline"
              className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl text-xs md:text-sm"
            >
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </motion.header>

      {/* About Section */}
      <motion.section
        variants={staggerContainer(0.2)}
        className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-white/50 backdrop-blur-md"
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
            <motion.div variants={fadeIn("right", "tween", 0.2, 1)}>
              <Image
                src="/images/about-team.jpg"
                alt="World Concepts Team"
                width={500}
                height={300}
                className="rounded-xl shadow-lg object-cover w-full h-auto"
              />
            </motion.div>
            <div className="text-center md:text-left flex flex-col items-center md:items-start">
              <motion.h3
                variants={fadeIn("up", "tween", 0.2, 1)}
                className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-800 mb-4 md:mb-6"
              >
                About World Concepts Group
              </motion.h3>
              <motion.p
                variants={fadeIn("up", "tween", 0.3, 1)}
                className="text-sm md:text-base text-slate-600 mb-6 md:mb-8 max-w-md mx-auto md:mx-0"
              >
                Based in Kenya, we’re a subsidiary of a global consortium,
                driving economic growth in East and Central Africa with Ksh 300M
                in assets across 7 nations.
              </motion.p>
              <motion.div variants={fadeIn("up", "tween", 0.4, 1)}>
                <Button
                  onClick={() => router.push("/about")}
                  variant="outline"
                  className="border-cyan-500 text-cyan-600 hover:bg-cyan-50 px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl text-xs md:text-sm"
                >
                  Learn More
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Strategic Investments Section (Single Grid, No Animation) */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.h3
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-800 text-center mb-8 md:mb-12"
          >
            Our Strategic Investments
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {sectors.map((sector, index) => (
              <div
                key={index}
                className="group p-6 md:p-8 bg-white rounded-xl md:rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden border border-slate-100 cursor-pointer"
              >
                <div className="absolute inset-0 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute -inset-[2px] rounded-xl md:rounded-2xl bg-gradient-to-br from-indigo-400/30 to-cyan-400/30" />
                </div>
                <div className="relative z-10 space-y-3 md:space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-indigo-600 to-cyan-500 rounded-md md:rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform">
                      {sector.title === "Healthcare" && (
                        <FiHeart className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      )}
                      {sector.title === "Real Estate" && (
                        <FiHome className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      )}
                      {sector.title === "Agritech" && (
                        <FiBarChart className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      )}
                      {sector.title === "Consumer Markets" && (
                        <FiShoppingBag className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      )}
                      {sector.title === "Finance" && (
                        <FiDollarSign className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      )}
                      {sector.title === "Infrastructure" && (
                        <HiOutlineCube className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      )}
                    </div>
                    <h4 className="text-base md:text-lg font-semibold text-slate-800 relative">
                      {sector.title}
                      <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-indigo-600 to-cyan-500 group-hover:w-full transition-all duration-300" />
                    </h4>
                  </div>
                  <p className="text-xs md:text-sm text-slate-500 group-hover:text-slate-700 transition-colors">
                    {sector.description}
                  </p>
                  <div className="pt-2 md:pt-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push("/investments");
                      }}
                      className="flex items-center text-indigo-600 group-hover:text-indigo-700 transition-colors font-medium text-xs md:text-sm"
                    >
                      Explore More
                      <svg
                        className="w-3 h-3 md:w-4 md:h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOT Program Section with Image */}
      <motion.section
        variants={staggerContainer(0.2)}
        className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-br from-indigo-50 to-cyan-50"
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
            <motion.div variants={fadeIn("right", "tween", 0.2, 1)}>
              <Image
                src="/images/bot-program.jpg"
                alt="BOT Program Illustration"
                width={500}
                height={300}
                className="rounded-xl shadow-lg object-cover w-full h-auto"
              />
            </motion.div>
            <div className="text-center md:text-left flex flex-col items-center md:items-start">
              <motion.h3
                variants={fadeIn("up", "tween", 0.2, 1)}
                className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-800 mb-4 md:mb-6"
              >
                Build Operate Transfer (BOT) Program
              </motion.h3>
              <motion.p
                variants={fadeIn("up", "tween", 0.3, 1)}
                className="text-sm md:text-base text-slate-600 mb-6 md:mb-8 max-w-md mx-auto md:mx-0"
              >
                Our BOT Program delivers 6 active projects across 7 nations,
                from innovative infrastructure to efficient operations and
                seamless transitions.
              </motion.p>
              <motion.div variants={fadeIn("up", "tween", 0.4, 1)}>
                <Button
                  onClick={() => router.push("/bot-program")}
                  className="bg-cyan-600 hover:bg-cyan-700 px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl text-xs md:text-sm text-white"
                >
                  Discover BOT
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Investment Opportunities Section */}
      <motion.section
        variants={staggerContainer(0.2)}
        className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.h3
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-800 mb-4 md:mb-6"
          >
            Investment Opportunities
          </motion.h3>
          <motion.p
            variants={fadeIn("up", "tween", 0.3, 1)}
            className="text-sm md:text-base text-slate-600 mb-6 md:mb-8 max-w-3xl mx-auto"
          >
            Join us as a venture shareholder or fixed-income investor and
            benefit from high returns of 15%-21% across 7 East and Central
            African markets.
          </motion.p>
          <motion.div
            variants={fadeIn("up", "tween", 0.4, 1)}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              onClick={() => router.push("/investor-relations")}
              className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl text-xs md:text-sm text-white"
            >
              For Individuals
            </Button>
            <Button
              onClick={() => router.push("/investor-relations")}
              variant="outline"
              className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl text-xs md:text-sm"
            >
              For Fixed Income
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section with Wave SVG */}
      <motion.section
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-600 to-cyan-500 text-white overflow-hidden"
      >
        <div className="absolute inset-0 z-[5] opacity-20 pointer-events-none">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1200 800"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <pattern
                id="wavePattern"
                patternUnits="userSpaceOnUse"
                width="400"
                height="200"
              >
                <path
                  d="M0 100 Q 100 50 200 100 T 400 100 T 600 100"
                  stroke="#FFFFFF"
                  strokeWidth="6"
                  fill="none"
                  strokeLinecap="round"
                  strokeOpacity="0.5"
                />
                <path
                  d="M0 150 Q 150 100 300 150 T 600 150"
                  stroke="#FFFFFF"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                  strokeOpacity="0.3"
                  transform="translate(50, 20)"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#wavePattern)" />
          </svg>
        </div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="relative rounded-xl md:rounded-2xl lg:rounded-3xl p-6 md:p-10 overflow-hidden">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6">
              Shape East & Central Africa’s Future
            </h2>
            <p className="text-sm md:text-base mb-6 md:mb-8 max-w-2xl mx-auto">
              Contact us at{" "}
              <a href="tel:+254700483333" className="underline">
                +254 700 483333
              </a>{" "}
              to collaborate on transformative projects across 7 nations.
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
                Get Started
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}

const sectors = [
  {
    title: "Healthcare",
    description: "Improving medical infrastructure and access.",
    icon: <FiHeart />,
  },
  {
    title: "Real Estate",
    description: "Building sustainable urban spaces.",
    icon: <FiHome />,
  },
  {
    title: "Agritech",
    description: "Boosting food security through technology.",
    icon: <FiBarChart />,
  },
  {
    title: "Consumer Markets",
    description: "Innovating retail experiences.",
    icon: <FiShoppingBag />,
  },
  {
    title: "Finance",
    description: "Enhancing financial inclusion with fintech.",
    icon: <FiDollarSign />,
  },
  {
    title: "Infrastructure",
    description: "Supporting regional connectivity and services.",
    icon: <HiOutlineCube />,
  },
];
