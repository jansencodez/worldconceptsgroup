"use client";
import { motion } from "framer-motion";

export default function InvestorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="flex h-screen">
        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-8">
          <MobileHeader />
          {children}
        </main>
      </div>
    </div>
  );
}

const MobileHeader = () => (
  <motion.div
    className="md:hidden mb-8"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    <h1 className="text-2xl font-bold text-primary">Investor Portal</h1>
  </motion.div>
);
