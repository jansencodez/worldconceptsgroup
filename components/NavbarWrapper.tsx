// components/NavbarWrapper.tsx
"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import InvestorSidebar from "@/components/investor/Sidebar";

export default function NavbarWrapper() {
  const pathname = usePathname();
  const isInvestorPortal = pathname?.startsWith("/investor-portal");

  return (
    <>
      {!isInvestorPortal && <Navbar />}
      {isInvestorPortal && <InvestorSidebar />}
    </>
  );
}
