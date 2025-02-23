// components/investor/Sidebar.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiHome,
  FiPieChart,
  FiDollarSign,
  FiFileText,
  FiSettings,
  FiLogOut,
  FiX,
  FiMenu,
} from "react-icons/fi";
import Image from "next/image";
import useMediaQuery from "@/hooks/useMediaQuery";
import { SignedIn, SignOutButton, UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";

const navigation = [
  { name: "Dashboard", href: "/investor-portal", icon: FiHome },
  { name: "Portfolio", href: "/investor-portal/portfolio", icon: FiPieChart },
  {
    name: "Transactions",
    href: "/investor-portal/transactions",
    icon: FiDollarSign,
  },
  { name: "Documents", href: "/investor-portal/documents", icon: FiFileText },
  { name: "Settings", href: "/investor-portal/settings", icon: FiSettings },
];

const sidebarVariants = {
  open: { x: 0, opacity: 1 },
  closed: { x: "-100%", opacity: 0 },
};

export default function Sidebar() {
  const pathname = usePathname();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [isOpen, setIsOpen] = useState(!isMobile);
  const { user } = useUser();

  useEffect(() => {
    setIsOpen(!isMobile);
  }, [isMobile]);

  useEffect(() => {
    if (isMobile && isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobile, isOpen]);

  return (
    <>
      {/* Mobile Menu Button */}
      {isMobile && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setIsOpen(true)}
          className="fixed top-4 right-4 z-30 p-2 rounded-lg bg-indigo-900/80 backdrop-blur-sm text-white"
        >
          <FiMenu className="w-6 h-6" />
        </motion.button>
      )}

      <AnimatePresence>
        {(isOpen || !isMobile) && (
          <motion.nav
            key="sidebar"
            initial={isMobile ? "closed" : "open"}
            animate="open"
            exit="closed"
            variants={sidebarVariants}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`fixed inset-y-0 z-20 ${
              isMobile
                ? "w-full max-w-xs bg-gray-800 shadow-2xl"
                : "w-64 left-2 rounded-2xl bg-gradient-to-b from-indigo-900/95 to-blue-900/95 backdrop-blur-lg border border-white/10"
            }`}
          >
            <div className="h-full p-6 relative overflow-y-auto">
              {/* Close Button (Mobile Only) */}
              {isMobile && (
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 p-2 text-white/80 hover:text-white"
                >
                  <FiX className="w-6 h-6" />
                </button>
              )}

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Logo */}
                <motion.div whileHover={{ scale: 1.05 }} className="mb-8">
                  <Link href="/" onClick={() => isMobile && setIsOpen(false)}>
                    <Image
                      src="/images/logo.png"
                      alt="World Concepts"
                      width={200}
                      height={50}
                      priority
                      className="rounded-lg"
                    />
                  </Link>
                </motion.div>

                {/* Navigation Links */}
                <nav className="space-y-1">
                  {navigation.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <motion.div
                        key={item.name}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => isMobile && setIsOpen(false)}
                          className={`flex items-center p-3 rounded-lg transition-all ${
                            isActive
                              ? "text-white bg-white/10 font-semibold border-l-4 border-cyan-400"
                              : "text-white/80 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          <item.icon className="w-5 h-5 mr-3" />
                          <span className="text-sm">{item.name}</span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                {/* Footer Section */}
                <div className="mt-auto pt-6 border-t border-white/10">
                  {/* User Profile */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center p-3 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <SignedIn>
                      <div className="flex items-center  p-3 bg-white/10 rounded-lg">
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
                          <span className="ml-4 float-start text-white">
                            {" "}
                            {user.fullName}
                          </span>
                        )}
                      </div>
                    </SignedIn>
                  </motion.div>

                  {/* Logout Button */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center p-3 rounded-lg text-red-400 hover:bg-white/5 transition-colors"
                  >
                    <FiLogOut className="w-5 h-5 mr-3" />
                    <SignOutButton />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Overlay for Mobile */}
      <AnimatePresence>
        {isMobile && isOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-10 bg-black/50 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>
    </>
  );
}
