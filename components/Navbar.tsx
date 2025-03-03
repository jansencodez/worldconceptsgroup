"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  FiMenu,
  FiX,
  FiLogIn,
  FiBriefcase,
  FiChevronRight,
} from "react-icons/fi";
import Image from "next/image";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";

const menuVariants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: -20 },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isInvestorPortal = pathname.includes("/investor-portal");
  const { user } = useUser();

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  if (isInvestorPortal) {
    return null;
  }

  const navItems = [
    "Home",
    "About",
    "Services",
    "Projects",
    "Investments",
    "Partnerships",
    "Opportunities",
    "BOT Program",
    "Investor Relations",
    "Blog",
    "Contact",
  ];

  const renderDesktopNavItem = (item: string, index: number) => {
    const linkPath =
      item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, "-")}`;
    const isActive = pathname === linkPath;

    return (
      <motion.div
        key={item}
        initial={{ x: -20 }}
        animate={{ x: 0 }}
        transition={{ delay: index * 0.1 }}
      >
        <Link
          href={linkPath}
          className={`flex items-center group p-3 rounded-lg transition-all ${
            isActive
              ? "text-white bg-white/10 font-semibold"
              : "text-white/80 hover:text-white hover:bg-white/5"
          }`}
        >
          <div
            className={`w-2 h-2 rounded-full mr-3 transition-opacity ${
              isActive
                ? "bg-cyan-400 opacity-100"
                : "bg-cyan-400 opacity-0 group-hover:opacity-100"
            }`}
          />
          {item}
        </Link>
      </motion.div>
    );
  };

  const renderMobileNavItem = (item: string) => {
    const linkPath =
      item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, "-")}`;
    const isActive = pathname === linkPath;

    return (
      <Link
        key={item}
        href={linkPath}
        className={`p-3 rounded-lg transition-all ${
          isActive
            ? "bg-gray-200 dark:bg-gray-800 font-semibold"
            : "hover:bg-gray-100 dark:hover:bg-gray-800"
        }`}
        onClick={() => setIsOpen(false)}
      >
        {item}
      </Link>
    );
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <motion.nav
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        className="hidden md:block fixed inset-y-2 rounded-2xl left-2 w-64 z-10 bg-gradient-to-b from-indigo-900/95 to-blue-900/95 backdrop-blur-lg border border-white/10"
      >
        <div className="h-full p-8 relative overflow-hidden">
          {/* SVG Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%">
              <pattern
                id="pattern-circles"
                x="0"
                y="0"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="10" cy="10" r="1.5" fill="white" />
              </pattern>
              <rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                fill="url(#pattern-circles)"
              />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col h-full">
            <Link href="/" className="mb-16">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
              >
                <Image
                  src="/images/logo.png"
                  alt="World Concepts"
                  width={200}
                  height={50}
                  priority
                />
              </motion.div>
            </Link>
            <nav className="space-y-2 flex-1 overflow-y-auto custom-scrollbar">
              {navItems.map((item, index) => renderDesktopNavItem(item, index))}
            </nav>

            <div className="space-y-4 mt-8">
              <SignedOut>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <SignInButton mode="modal">
                    <button className="w-full flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-xl transition-all duration-200 border border-white/20">
                      <span>Sign In</span>
                      <FiLogIn className="w-4 h-4" />
                    </button>
                  </SignInButton>
                </motion.div>
              </SignedOut>

              <SignedIn>
                <div className="space-y-4 mt-6">
                  {user && (
                    <motion.div
                      whileHover={{ y: -2 }}
                      className="relative group"
                    >
                      <button
                        onClick={() => router.push("/investor-portal")}
                        className="w-full flex items-center justify-between px-6 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-lg rounded-xl transition-all duration-300 border border-white/10 hover:border-cyan-400/30"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-cyan-400/10 rounded-lg border border-cyan-400/20">
                            <FiBriefcase className="w-5 h-5 text-cyan-400" />
                          </div>
                          <span className="text-white/90 group-hover:text-white font-medium transition-colors">
                            Investor Portal
                          </span>
                        </div>
                        <FiChevronRight className="w-5 h-5 text-white/60 group-hover:text-cyan-400 transition-colors transform group-hover:translate-x-1" />
                      </button>
                      <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    </motion.div>
                  )}
                </div>
              </SignedIn>
            </div>
            <div className="border-t border-white/10 pt-6">
              <p className="text-sm text-white/60">
                Pioneering African Innovation
              </p>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`md:hidden fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-sm"
            : "bg-white dark:bg-gray-900"
        }`}
      >
        <div className="container mx-auto px-2 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="World Concepts"
                width={200}
                height={100}
                className="mr-3 w-32 h-auto rounded-2xl"
              />
            </Link>

            <motion.button
              whileHover={{ scale: 1.1 }}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-slate-800 dark:text-white"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </motion.button>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
                className="pt-4"
              >
                <div className="flex flex-col space-y-2">
                  {navItems.map((item) => renderMobileNavItem(item))}
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="border-t border-white/20 pt-4 mt-4"
                >
                  <SignedOut>
                    <SignInButton mode="modal">
                      <button className="w-full flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg transition-all duration-200">
                        <span>Sign In</span>
                        <FiLogIn className="w-4 h-4" />
                      </button>
                    </SignInButton>
                  </SignedOut>

                  <SignedIn>
                    <div className="flex items-center p-3 bg-white/10 rounded-lg">
                      <UserButton
                        appearance={{
                          elements: {
                            userButtonBox: "flex-row-reverse gap-3",
                            userButtonOuterIdentifier: "text-white",
                            avatarBox: "w-8 h-8",
                          },
                        }}
                      />
                      {user && (
                        <span className="ml-4 float-start">
                          {user.fullName}
                        </span>
                      )}
                    </div>
                    {user && (
                      <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                        <button
                          onClick={() => router.push("/investor-portal")}
                          className="w-full flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-black px-6 py-3 rounded-lg transition-all duration-200"
                        >
                          <span>Investor Portal</span>
                          <FiLogIn className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </SignedIn>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
