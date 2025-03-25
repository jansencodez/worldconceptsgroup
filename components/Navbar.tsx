"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import Image from "next/image";

// Menu variants for mobile nav (slide-in from right)
const menuVariants = {
  open: { x: 0, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
  closed: {
    x: "100%",
    opacity: 0,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

// Dropdown variants for desktop nav
const dropdownVariants = {
  open: { opacity: 1, height: "auto", transition: { duration: 0.2 } },
  closed: { opacity: 0, height: 0, transition: { duration: 0.2 } },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const isInvestorPortal = pathname.includes("/investor-portal");

  // Handle resize to close mobile menu on desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Track scroll state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto"; // Cleanup on unmount
    };
  }, [isOpen]);

  if (isInvestorPortal) return null;

  const navGroups = [
    { name: "Home", path: "/", items: [] },
    {
      name: "About",
      path: null,
      items: [
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
      ],
    },
    {
      name: "Projects",
      path: null,
      items: [
        { name: "Projects", path: "/projects" },
        { name: "Investments", path: "/investments" },
        { name: "Partnerships", path: "/partnerships" },
      ],
    },
    {
      name: "Opportunities",
      path: null,
      items: [
        { name: "Opportunities", path: "/opportunities" },
        { name: "BOT Program", path: "/bot-program" },
        { name: "Investor Relations", path: "/investor-relations" },
      ],
    },
    { name: "Blog", path: "/blog", items: [] },
    { name: "Contact", path: "/contact", items: [] },
  ];

  const renderDesktopNavItem = (group: {
    name: string;
    path: string | null;
    items: { name: string; path: string }[];
  }) => {
    const isActive = group.path
      ? pathname === group.path
      : group.items.some((item) => pathname === item.path);
    const isDropdownOpen = openDropdown === group.name;

    if (group.path && group.items.length === 0) {
      return (
        <Link
          key={group.name}
          href={group.path}
          className={`px-4 py-2 rounded-lg transition-all text-sm md:text-base ${
            isActive
              ? "text-white bg-white/10 font-semibold"
              : "text-white/80 hover:text-white hover:bg-white/5"
          }`}
        >
          {group.name}
        </Link>
      );
    }

    return (
      <div
        key={group.name}
        className="relative"
        onMouseEnter={() => setOpenDropdown(group.name)}
        onMouseLeave={() => setOpenDropdown(null)}
      >
        <button
          className={`px-4 py-2 rounded-lg transition-all flex items-center space-x-1 text-sm md:text-base ${
            isActive
              ? "text-white bg-white/10 font-semibold"
              : "text-white/80 hover:text-white hover:bg-white/5"
          }`}
        >
          <span>{group.name}</span>
          <FiChevronDown
            className={`w-4 h-4 transition-transform ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        <AnimatePresence>
          {isDropdownOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={dropdownVariants}
              className="absolute left-0 mt-2 w-48 bg-indigo-800/95 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden z-50"
            >
              {group.items.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`block px-4 py-2 text-sm text-white/80 hover:bg-white/10 transition-all ${
                    pathname === item.path ? "text-white font-semibold" : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
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
        className={`block py-3 px-4 text-base font-medium transition-all ${
          isActive
            ? "text-indigo-600 bg-indigo-50"
            : "text-gray-800 hover:bg-indigo-100"
        }`}
        onClick={() => setIsOpen(false)}
      >
        {item}
      </Link>
    );
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-indigo-900/95 backdrop-blur-lg shadow-md"
          : "bg-indigo-900/90"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Image
                src="/images/logo.png"
                alt="World Concepts"
                width={150}
                height={40}
                priority
                className="h-10 w-auto"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navGroups.map((group) => renderDesktopNavItem(group))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            {/* Menu */}
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed top-0 right-0 w-3/4 max-w-sm h-screen bg-white shadow-lg z-50 md:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                  <span className="text-base font-semibold text-gray-800">
                    Menu
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 text-gray-600 hover:text-gray-800"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close Menu"
                  >
                    <FiX size={24} />
                  </motion.button>
                </div>

                {/* Navigation Items */}
                <nav className="flex-1 overflow-y-auto p-4">
                  {[
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
                  ].map((item) => renderMobileNavItem(item))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
