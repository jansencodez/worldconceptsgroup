import { JSX } from "react";
import {
  FiBarChart,
  FiDollarSign,
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
      "Transforming healthcare in East and Central Africa with cutting-edge facilities and technology solutions.",
    stats: {
      investments: "Ksh65.5M",
      projects: "2",
      countries: "7 Nations",
    },
    initiatives: ["Nain Hospitals Expansion", "Mobile Clinic Network"],
  },
  {
    id: "real-estate",
    title: "Smart Real Estate",
    icon: <FiHome className="w-6 h-6" />,
    tag: "Urban Development",
    description:
      "Creating sustainable, tech-enabled living and working spaces in East and Central Africa.",
    stats: {
      investments: "Ksh84.5M",
      projects: "1",
      countries: "7 Nations",
    },
    initiatives: ["Mulembe Africa Real Estate"],
  },
  {
    id: "agritech",
    title: "AgriTech Solutions",
    icon: <FiBarChart className="w-6 h-6" />,
    tag: "Agricultural Technology",
    description:
      "Revolutionizing agriculture in East and Central Africa with AI and modern technology.",
    stats: {
      investments: "Ksh49.1M",
      projects: "1",
      countries: "7 Nations",
    },
    initiatives: ["Agricultural Technology Initiative"],
  },
  {
    id: "consumer",
    title: "Consumer Markets",
    icon: <FiShoppingBag className="w-6 h-6" />,
    tag: "Retail Innovation",
    description:
      "Transforming retail experiences across East and Central Africa with innovation.",
    stats: {
      investments: "Ksh40.9M",
      projects: "3",
      countries: "7 Nations",
    },
    initiatives: [
      "Nyumbani Deport & Tissian Africa",
      "Manna Mat",
      "Community Empowerment Program",
    ],
  },
  {
    id: "finance",
    title: "Financial Inclusion",
    icon: <FiDollarSign className="w-6 h-6" />,
    tag: "Fintech Solutions",
    description:
      "Driving economic empowerment in East and Central Africa through blockchain and fintech.",
    stats: {
      investments: "Ksh60M",
      projects: "1",
      countries: "7 Nations",
    },
    initiatives: ["Mulembe Africa Microcredit"],
  },
];
