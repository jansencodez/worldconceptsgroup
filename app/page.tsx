"use client";

import { useRouter } from "next/navigation";
import { motion, useInView } from "framer-motion";
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
import { useRef } from "react";

// Pulse animation variant
const pulse = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Home Component
export default function Home() {
  const router = useRouter();

  // Refs for each section to track in-view status
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const investmentsRef = useRef(null);
  const botRef = useRef(null);
  const opportunitiesRef = useRef(null);
  const contactRef = useRef(null);

  // In-view hooks
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const isAboutInView = useInView(aboutRef, { once: true, amount: 0.3 });
  const isInvestmentsInView = useInView(investmentsRef, {
    once: true,
    amount: 0.3,
  });
  const isBotInView = useInView(botRef, { once: true, amount: 0.3 });
  const isOpportunitiesInView = useInView(opportunitiesRef, {
    once: true,
    amount: 0.3,
  });
  const isContactInView = useInView(contactRef, { once: true, amount: 0.3 });

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden">
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
        ref={heroRef}
        variants={staggerContainer(0.3)}
        initial="hidden"
        animate={isHeroInView ? "show" : "hidden"}
        className="pt-12 pb-12 md:pb-20 text-center relative z-10 px-4 md:px-8 lg:px-16"
      >
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
              animate={{ pathLength: isHeroInView ? 1 : 0 }}
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
          <motion.div
            className="absolute w-2 h-2 bg-indigo-500 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            variants={pulse}
            animate="animate"
          />
        </motion.div>
        <div className="max-w-4xl mx-auto">
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
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-4 md:mb-6 leading-tight relative"
          >
            Driving Regional Growth Through{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent block md:inline">
              Strategic Investments
            </span>
            <motion.span
              className="absolute -top-2 -right-2 w-3 h-3 bg-cyan-400 rounded-full"
              variants={pulse}
              animate="animate"
            />
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
            className="mb-6 md:mb-8 max-w-3xl mx-auto relative"
          >
            <Image
              src="/images/hero-africa-growth.jpg"
              alt="Africa’s Growth Landscape"
              width={800}
              height={400}
              className="rounded-xl shadow-lg object-cover"
            />
            <motion.div
              className="absolute inset-0 border-2 border-indigo-400/50 rounded-xl"
              variants={pulse}
              animate="animate"
            />
          </motion.div>

          <motion.div
            variants={fadeIn("up", "tween", 0.5, 0.25)}
            className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center"
          >
            <Button
              onClick={() => router.push("/investments")}
              className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl text-xs md:text-sm text-white relative"
            >
              Explore Investments
              <motion.span
                className="absolute -inset-1 rounded-lg md:rounded-xl border border-indigo-400/50"
                variants={pulse}
                animate="animate"
              />
            </Button>
            <Button
              onClick={() => router.push("/contact")}
              variant="outline"
              className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl text-xs md:text-sm relative"
            >
              Get in Touch
              <motion.span
                className="absolute -inset-1 rounded-lg md:rounded-xl border border-indigo-400/50"
                variants={pulse}
                animate="animate"
              />
            </Button>
          </motion.div>
        </div>
      </motion.header>

      {/* About Section */}
      <motion.section
        ref={aboutRef}
        variants={staggerContainer(0.2)}
        initial="hidden"
        animate={isAboutInView ? "show" : "hidden"}
        className="py-12 md:py-20 px-4 md:px-8 lg:px-16 relative z-10 bg-white/50 backdrop-blur-md"
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
            <motion.div
              variants={fadeIn("right", "tween", 0.2, 1)}
              className="relative"
            >
              <Image
                src="/images/about-team.jpg"
                alt="World Concepts Team"
                width={500}
                height={300}
                className="rounded-xl shadow-lg object-cover w-full h-auto"
              />
              <motion.div
                className="absolute -top-2 -left-2 w-4 h-4 bg-cyan-500 rounded-full"
                variants={pulse}
                animate="animate"
              />
            </motion.div>
            <div className="text-center md:text-left flex flex-col items-center md:items-start">
              <motion.h3
                variants={fadeIn("up", "tween", 0.2, 1)}
                className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-800 mb-4 md:mb-6 relative"
              >
                About World Concepts Group
                <motion.span
                  className="absolute -top-2 -right-2 w-3 h-3 bg-indigo-400 rounded-full"
                  variants={pulse}
                  animate="animate"
                />
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
                  className="border-cyan-500 text-cyan-600 hover:bg-cyan-50 px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl text-xs md:text-sm relative"
                >
                  Learn More
                  <motion.span
                    className="absolute -inset-1 rounded-lg md:rounded-xl border border-cyan-400/50"
                    variants={pulse}
                    animate="animate"
                  />
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Strategic Investments Section */}
      <motion.section
        ref={investmentsRef}
        variants={staggerContainer(0.2)}
        initial="hidden"
        animate={isInvestmentsInView ? "show" : "hidden"}
        className="py-12 md:py-20 px-4 md:px-8 lg:px-16 relative z-10"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h3
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-800 text-center mb-8 md:mb-12 relative"
          >
            Our Strategic Investments
            <motion.span
              className="absolute -top-2 -right-2 w-3 h-3 bg-indigo-500 rounded-full"
              variants={pulse}
              animate="animate"
            />
          </motion.h3>
          <motion.div variants={staggerContainer(0.1)} className="card-columns">
            {sectors.map((sector, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", "tween", 0.2 + index * 0.1, 1)}
                className="card card-orbit"
              >
                <div className="card-body">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-cyan-500 rounded-lg flex items-center justify-center">
                      {sector.title === "Healthcare" && (
                        <FiHeart className="w-6 h-6 text-white" />
                      )}
                      {sector.title === "Real Estate" && (
                        <FiHome className="w-6 h-6 text-white" />
                      )}
                      {sector.title === "Agritech" && (
                        <FiBarChart className="w-6 h-6 text-white" />
                      )}
                      {sector.title === "Consumer Markets" && (
                        <FiShoppingBag className="w-6 h-6 text-white" />
                      )}
                      {sector.title === "Finance" && (
                        <FiDollarSign className="w-6 h-6 text-white" />
                      )}
                      {sector.title === "Infrastructure" && (
                        <HiOutlineCube className="w-6 h-6 text-white" />
                      )}
                    </div>
                    <h5 className="card-title">{sector.title}</h5>
                  </div>
                  <p className="card-text">{sector.description}</p>
                </div>
                <div className="card-footer">
                  <div className="flex justify-between items-center">
                    <a
                      href="/investments"
                      className="card-link"
                      onClick={(e) => {
                        e.preventDefault();
                        router.push("/investments");
                      }}
                    >
                      Explore More
                    </a>
                    {sector.title === "Healthcare" && (
                      <FiHeart className="card-icon" />
                    )}
                    {sector.title === "Real Estate" && (
                      <FiHome className="card-icon" />
                    )}
                    {sector.title === "Agritech" && (
                      <FiBarChart className="card-icon" />
                    )}
                    {sector.title === "Consumer Markets" && (
                      <FiShoppingBag className="card-icon" />
                    )}
                    {sector.title === "Finance" && (
                      <FiDollarSign className="card-icon" />
                    )}
                    {sector.title === "Infrastructure" && (
                      <HiOutlineCube className="card-icon" />
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* BOT Program Section with Image */}
      <motion.section
        ref={botRef}
        variants={staggerContainer(0.2)}
        initial="hidden"
        animate={isBotInView ? "show" : "hidden"}
        className="py-12 md:py-20 px-4 md:px-8 lg:px-16 relative z-10 bg-gradient-to-br from-indigo-50 to-cyan-50"
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
            <motion.div
              variants={fadeIn("right", "tween", 0.2, 1)}
              className="relative"
            >
              <Image
                src="/images/bot-program.jpg"
                alt="BOT Program Illustration"
                width={500}
                height={300}
                className="rounded-xl shadow-lg object-cover w-full h-auto"
              />
              <motion.div
                className="absolute inset-0 border-2 border-cyan-400/50 rounded-xl"
                variants={pulse}
                animate="animate"
              />
            </motion.div>
            <div className="text-center md:text-left flex flex-col items-center md:items-start">
              <motion.h3
                variants={fadeIn("up", "tween", 0.2, 1)}
                className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-800 mb-4 md:mb-6 relative"
              >
                Build Operate Transfer (BOT) Program
                <motion.span
                  className="absolute -top-2 -right-2 w-3 h-3 bg-cyan-500 rounded-full"
                  variants={pulse}
                  animate="animate"
                />
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
                  className="bg-cyan-600 hover:bg-cyan-700 px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl text-xs md:text-sm text-white relative"
                >
                  Discover BOT
                  <motion.span
                    className="absolute -inset-1 rounded-lg md:rounded-xl border border-cyan-400/50"
                    variants={pulse}
                    animate="animate"
                  />
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Investment Opportunities Section */}
      <motion.section
        ref={opportunitiesRef}
        variants={staggerContainer(0.2)}
        initial="hidden"
        animate={isOpportunitiesInView ? "show" : "hidden"}
        className="py-12 md:py-20 px-4 md:px-8 lg:px-16 relative z-10"
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.h3
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-800 mb-4 md:mb-6 relative"
          >
            Investment Opportunities
            <motion.span
              className="absolute -top-2 -right-2 w-3 h-3 bg-indigo-500 rounded-full"
              variants={pulse}
              animate="animate"
            />
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
              className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl text-xs md:text-sm text-white relative"
            >
              For Individuals
              <motion.span
                className="absolute -inset-1 rounded-lg md:rounded-xl border border-indigo-400/50"
                variants={pulse}
                animate="animate"
              />
            </Button>
            <Button
              onClick={() => router.push("/investor-relations")}
              variant="outline"
              className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl text-xs md:text-sm relative"
            >
              For Fixed Income
              <motion.span
                className="absolute -inset-1 rounded-lg md:rounded-xl border border-indigo-400/50"
                variants={pulse}
                animate="animate"
              />
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section with Wave SVG */}
      <motion.section
        ref={contactRef}
        variants={fadeIn("up", "tween", 0.3, 1)}
        initial="hidden"
        animate={isContactInView ? "show" : "hidden"}
        className="relative py-12 md:py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-indigo-600/20 to-cyan-500/10 overflow-hidden"
      >
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="relative rounded-xl md:rounded-2xl lg:rounded-3xl p-6 md:p-10 overflow-hidden">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 mb-4 md:mb-6 relative">
              Shape East & Central Africa’s Future
              <motion.span
                className="absolute -top-2 -right-2 w-4 h-4 bg-indigo-500 rounded-full opacity-50"
                variants={pulse}
                animate="animate"
              />
            </h2>
            <p className="text-sm md:text-base text-slate-700 mb-6 md:mb-8 max-w-2xl mx-auto">
              Contact us at{" "}
              <a
                href="tel:+254700483333"
                className="text-indigo-600 underline hover:text-indigo-700"
              >
                +254 700 483333
              </a>{" "}
              to collaborate on transformative projects across 7 nations.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block relative"
            >
              <Button
                onClick={() => router.push("/contact")}
                className="bg-white text-indigo-600 hover:bg-indigo-50 px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl text-xs md:text-sm relative"
              >
                Get Started
                <motion.span
                  className="absolute -inset-1 rounded-lg md:rounded-xl border border-indigo-400/50"
                  variants={pulse}
                  animate="animate"
                />
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

const sectors = [
  {
    title: "Healthcare",
    description:
      "Improving medical infrastructure and access across East and Central Africa with innovative solutions.",
  },
  {
    title: "Real Estate",
    description:
      "Building sustainable urban spaces to support growing populations and economic development in key regional markets.",
  },
  {
    title: "Agritech",
    description:
      "Boosting food security through cutting-edge technology, empowering farmers with tools for efficiency and sustainability across multiple nations.",
  },
  {
    title: "Consumer Markets",
    description:
      "Innovating retail experiences to meet the demands of a dynamic consumer base.",
  },
  {
    title: "Finance",
    description:
      "Enhancing financial inclusion with fintech solutions that bridge gaps in access and affordability throughout the region.",
  },
  {
    title: "Infrastructure",
    description:
      "Supporting regional connectivity and services with robust infrastructure projects that drive economic growth and integration.",
  },
];
