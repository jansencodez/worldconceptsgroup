"use client";

import { JSX, useCallback, useState, memo, useMemo } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import Button from "@/components/ui/button";
import { FiChevronDown } from "react-icons/fi";
import {
  ProjectsPieChart,
  SectorInvestmentsBarChart,
} from "@/components/charts/Charts";
import { sectors } from "@/data/sectors";

interface Sector {
  id: string;
  title: string;
  icon: JSX.Element;
  tag: string;
  description: string;
  stats: { investments: string; projects: string; countries: string };
  initiatives: string[];
}

interface InitiativeDetail {
  title: string;
  content: string;
}

// Updated initiative details to reflect 6 active projects across 7 nations
const initiativeDetails: { [key: string]: InitiativeDetail[] } = {
  healthcare: [
    {
      title: "Regional specialty hospitals",
      content:
        "Constructing specialized medical facilities in Kenya and Uganda to address critical healthcare needs.",
    },
    {
      title: "Mobile health units",
      content:
        "Providing mobile clinics to deliver healthcare services to remote communities across Tanzania.",
    },
  ],
  "real-estate": [
    {
      title: "Mixed-use developments",
      content:
        "Creating integrated living and working spaces in Kigali, Rwanda to support urban growth.",
    },
  ],
  agritech: [
    {
      title: "Precision farming",
      content:
        "Using data analytics to optimize crop yields in Kenya’s agricultural regions.",
    },
  ],
  consumer: [
    {
      title: "E-commerce platforms",
      content:
        "Launching online marketplaces in Tanzania to boost digital retail growth.",
    },
  ],
  finance: [
    {
      title: "Digital banking",
      content:
        "Offering mobile banking services in Rwanda to increase financial access.",
    },
  ],
};

const AccordionItem = memo(
  ({
    sector,
    isOpen,
    onClick,
  }: {
    sector: Sector;
    isOpen: boolean;
    onClick: () => void;
  }) => {
    const [openInitiative, setOpenInitiative] = useState<string | null>(null);
    const router = useRouter();

    const toggleInitiative = useCallback(
      (initiative: string) => {
        setOpenInitiative(openInitiative === initiative ? null : initiative);
      },
      [openInitiative]
    );

    const initiatives = useMemo(
      () =>
        sector.initiatives.map((initiative) => {
          const detail = initiativeDetails[sector.id]?.find(
            (d) => d.title === initiative
          );

          return (
            <div
              key={initiative}
              className="border-b border-slate-200 last:border-b-0"
            >
              <button
                onClick={() => toggleInitiative(initiative)}
                className="w-full py-3 px-4 text-left flex items-center justify-between hover:bg-indigo-50 transition-colors"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full" />
                  <span className="text-xs md:text-sm text-slate-600">
                    {initiative}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: openInitiative === initiative ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiChevronDown className="w-4 h-4 md:w-5 md:h-5 text-slate-600" />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {openInitiative === initiative && detail && (
                  <motion.div
                    initial={{ opacity: 0, maxHeight: 0 }}
                    animate={{ opacity: 1, maxHeight: "200px" }}
                    exit={{ opacity: 0, maxHeight: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="px-4 pb-3 text-xs md:text-sm text-slate-600 bg-indigo-50/50"
                  >
                    {detail.content}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        }),
      [sector.initiatives, sector.id, openInitiative, toggleInitiative]
    );

    return (
      <motion.div
        id={sector.id}
        variants={fadeIn("up", "tween", 0.1, 0.5)}
        className={`bg-white rounded-xl md:rounded-2xl shadow-md overflow-hidden ${
          isOpen ? "border-l-4 border-indigo-600" : "border border-slate-100"
        }`}
        layout
        transition={{ duration: 0.2 }}
      >
        <button
          onClick={onClick}
          className="w-full p-4 md:p-6 text-left flex items-center justify-between hover:bg-indigo-50/50 transition-colors"
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-br from-indigo-600 to-cyan-500 rounded-lg text-white">
              {sector.icon}
            </div>
            <div>
              <h3 className="text-base md:text-lg font-semibold text-slate-800">
                {sector.title}
              </h3>
              <span className="text-xs md:text-sm text-indigo-600">
                {sector.tag}
              </span>
            </div>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <FiChevronDown className="w-5 h-5 md:w-6 md:h-6 text-slate-600" />
          </motion.div>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, maxHeight: 0 }}
              animate={{ opacity: 1, maxHeight: "800px" }}
              exit={{ opacity: 0, maxHeight: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="will-change-[max-height,opacity]"
            >
              <div className="px-4 md:px-6 pb-4 md:pb-6">
                <div className="border-t border-slate-200 pt-4 md:pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <p className="text-xs md:text-sm text-slate-600 mb-4">
                        {sector.description}
                      </p>
                      <div className="bg-indigo-50 rounded-lg md:rounded-xl p-4">
                        <h4 className="text-xs md:text-sm font-semibold text-indigo-600 mb-2 md:mb-3">
                          Active Projects
                        </h4>
                        <div className="space-y-1">{initiatives}</div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-gradient-to-br from-indigo-600 to-cyan-500 rounded-lg md:rounded-xl p-4 text-white">
                        <h4 className="text-xs md:text-sm font-semibold mb-2 md:mb-3">
                          Sector Overview
                        </h4>
                        <div className="grid grid-cols-2 gap-2 md:gap-3">
                          <div>
                            <p className="text-lg md:text-xl font-bold">
                              {sector.stats.investments}
                            </p>
                            <p className="text-xs">Total Investments</p>
                          </div>
                          <div>
                            <p className="text-lg md:text-xl font-bold">
                              {sector.stats.projects}
                            </p>
                            <p className="text-xs">Active Projects</p>
                          </div>
                          <div>
                            <p className="text-lg md:text-xl font-bold">
                              {sector.stats.countries}
                            </p>
                            <p className="text-xs">Countries Active</p>
                          </div>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        className="w-full border-indigo-600 text-indigo-600 hover:bg-indigo-50 text-xs md:text-sm"
                        onClick={() => router.push(`/investments/${sector.id}`)}
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  }
);

AccordionItem.displayName = "AccordionItem";

export default function Investments() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const router = useRouter();
  const memoizedSectors = useMemo(() => sectors, []);

  const handleAccordionToggle = useCallback(
    (index: number) => {
      const newIndex = openIndex === index ? null : index;
      setOpenIndex(newIndex);
    },
    [openIndex]
  );

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
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="inline-block bg-white/50 backdrop-blur-lg rounded-xl md:rounded-2xl px-4 py-2 md:px-6 md:py-3 mb-4 md:mb-6 shadow-lg"
          >
            <span className="text-xs md:text-sm font-semibold text-cyan-600">
              East & Central Africa Focus
            </span>
          </motion.div>
          <motion.h1
            variants={fadeIn("up", "tween", 0.3, 1)}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-4 md:mb-6 leading-tight"
          >
            Powering East & Central Africa’s Progress Through{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent block md:inline">
              Targeted Investments
            </span>
          </motion.h1>
          <motion.p
            variants={fadeIn("up", "tween", 0.4, 1)}
            className="text-sm md:text-base text-slate-500 max-w-2xl mx-auto"
          >
            Managing Ksh 300M in assets across 7 East and Central African
            nations with 6 strategic projects.
          </motion.p>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.div
        variants={fadeIn("up", "tween", 0.5, 1)}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-20"
      >
        {[
          { value: "Ksh300M", label: "Total Assets", trend: "+18% YoY" },
          { value: "6", label: "Active Projects", trend: "Across 7 Nations" },
          {
            value: "7",
            label: "Countries",
            trend: "KE, UG, TZ, RW, BI, CD, SD",
          },
          { value: "15-21%", label: "ROI Range", trend: "Projected Returns" },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-slate-100 relative overflow-hidden group"
          >
            <div className="absolute inset-0 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute -inset-[2px] rounded-xl md:rounded-2xl bg-gradient-to-br from-indigo-400/30 to-cyan-400/30" />
            </div>
            <div className="relative z-10">
              <p className="text-xl md:text-2xl font-bold text-indigo-600 mb-1">
                {stat.value}
              </p>
              <p className="text-xs md:text-sm text-slate-600 font-medium">
                {stat.label}
              </p>
              <p className="text-xs text-indigo-500 mt-1">{stat.trend}</p>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Charts Section */}
      <motion.div
        variants={fadeIn("up", "tween", 0.6, 1)}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-md border border-slate-100">
            <h3 className="text-base md:text-lg font-semibold text-slate-800 mb-4">
              Investment Distribution
            </h3>
            <div className="h-64 md:h-80">
              <SectorInvestmentsBarChart sectors={memoizedSectors} />
            </div>
          </div>
          <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-md border border-slate-100">
            <h3 className="text-base md:text-lg font-semibold text-slate-800 mb-4">
              Project Allocation
            </h3>
            <div className="h-64 md:h-80">
              <ProjectsPieChart sectors={memoizedSectors} />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Sectors Accordion */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-20 relative z-10">
        <motion.div
          variants={staggerContainer(0.1)}
          className="space-y-4 md:space-y-6"
        >
          {memoizedSectors.map((sector, index) => (
            <AccordionItem
              key={sector.id}
              sector={sector}
              isOpen={openIndex === index}
              onClick={() => handleAccordionToggle(index)}
            />
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <motion.section
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-600 to-cyan-500 text-white relative z-10"
      >
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6">
            Invest in East & Central Africa’s Future
          </h2>
          <p className="text-sm md:text-base mb-6 md:mb-8 max-w-2xl mx-auto">
            Join us to drive growth across 7 nations. Contact us at{" "}
            <a href="tel:+254700483333" className="underline">
              +254 700 483333
            </a>
            .
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
              onClick={() => router.push("/investor-relations")}
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
