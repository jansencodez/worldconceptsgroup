import { JSX } from "react";
import {
  FiBarChart,
  FiDollarSign,
  FiGlobe,
  FiHeart,
  FiHome,
  FiShoppingBag,
} from "react-icons/fi";

interface Sector {
  id: string;
  title: string;
  icon: JSX.Element;
  tag: string;
  description: string;
  stats: { investments: string; projects: string; countries: string };
  initiatives: string[];
}

export const sectors: Sector[] = [
  {
    id: "healthcare",
    title: "Healthcare Innovation",
    icon: <FiHeart className="w-6 h-6" />,
    tag: "Medical Infrastructure",
    description:
      "Transforming African healthcare through cutting-edge facilities and technology solutions.",
    stats: {
      investments: "Ksh2.4B",
      projects: "48+",
      countries: "12 Nations",
    },
    initiatives: [
      "AI-powered diagnostic centers",
      "Regional specialty hospitals",
      "Mobile health units",
      "Telemedicine platforms",
    ],
  },
  {
    id: "real-estate",
    title: "Smart Real Estate",
    icon: <FiHome className="w-6 h-6" />,
    tag: "Urban Development",
    description:
      "Creating sustainable, tech-enabled living and working spaces across Africa.",
    stats: {
      investments: "Ksh3.1B",
      projects: "62+",
      countries: "8 Nations",
    },
    initiatives: [
      "Green building complexes",
      "Mixed-use developments",
      "Smart city infrastructure",
      "Affordable housing",
    ],
  },
  {
    id: "agritech",
    title: "AgriTech Solutions",
    icon: <FiBarChart className="w-6 h-6" />,
    tag: "Agricultural Technology",
    description:
      "Harnessing AI and modern technology to revolutionize agriculture.",
    stats: {
      investments: "Ksh1.8B",
      projects: "35+",
      countries: "10 Nations",
    },
    initiatives: [
      "Precision farming",
      "Automated irrigation systems",
      "Crop monitoring drones",
      "Sustainable farming practices",
    ],
  },
  {
    id: "digital",
    title: "Digital Infrastructure",
    icon: <FiGlobe className="w-6 h-6" />,
    tag: "Connectivity Solutions",
    description: "Building seamless connectivity across Africa.",
    stats: {
      investments: "Ksh2.9B",
      projects: "50+",
      countries: "15 Nations",
    },
    initiatives: [
      "Fiber optic networks",
      "5G deployment",
      "Rural broadband access",
      "Smart city connectivity",
    ],
  },
  {
    id: "consumer",
    title: "Consumer Markets",
    icon: <FiShoppingBag className="w-6 h-6" />,
    tag: "Retail Innovation",
    description: "Transforming retail experiences with innovation.",
    stats: {
      investments: "Ksh1.5B",
      projects: "40+",
      countries: "9 Nations",
    },
    initiatives: [
      "E-commerce platforms",
      "Smart retail solutions",
      "Supply chain optimization",
      "Customer experience enhancement",
    ],
  },
  {
    id: "finance",
    title: "Financial Inclusion",
    icon: <FiDollarSign className="w-6 h-6" />,
    tag: "Fintech Solutions",
    description: "Leveraging blockchain and fintech for economic empowerment.",
    stats: {
      investments: "Ksh2.2B",
      projects: "45+",
      countries: "11 Nations",
    },
    initiatives: [
      "Digital banking",
      "Blockchain-based transactions",
      "Microfinance platforms",
      "Financial literacy programs",
    ],
  },
];
