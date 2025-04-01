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

interface UpdatedSector {
  id: string;
  title: string;
  icon: JSX.Element;
  tag: string;
  description: string;
  stats: { investments: string; projects: string; countries: string };
  initiatives: string[];
  initiativeDetails: { [key: string]: { title: string; content: string } };
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
      "Nyumbani Deport & Tisana Africa",
      "Mana Mat",
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

export const updatedSectors: UpdatedSector[] = sectors.map((sector) => ({
  ...sector,
  initiativeDetails: {
    ...(sector.id === "healthcare" && {
      "Nain Hospitals Expansion": {
        title: "Nain Hospitals Expansion",
        content: `
### Nain Hospitals Expansion
Expanding healthcare access with eight regional hospitals across East and Central Africa.

**Key Highlights**  
- State-of-the-art diagnostic center  
- 350 beds total, including 50 for transplant patients  
- Serving 7 nations with advanced medical infrastructure
        `.trim(),
      },
      "Mobile Clinic Network": {
        title: "Mobile Clinic Network",
        content: `
### Mobile Clinic Network
Deploying mobile clinic containers to serve remote communities in 7 nations.

**Key Highlights**  
- Diagnostic labs for on-site testing  
- Pharmacies for immediate medication access  
- Telemedicine for remote consultations
        `.trim(),
      },
    }),
    ...(sector.id === "real-estate" && {
      "Mulembe Africa Real Estate": {
        title: "Mulembe Africa Real Estate",
        content: `
### Mulembe Africa Real Estate
Developing smart cities and sustainable infrastructure for affordable housing on 10 acres of prime land.

**Key Highlights**  
- Affordable housing for middle and lower-income families  
- Mixed-use complexes for urban convenience  
- Modern duplexes and apartment living across Kenya and beyond
        `.trim(),
      },
    }),
    ...(sector.id === "agritech" && {
      "Agricultural Technology Initiative": {
        title: "Agricultural Technology Initiative",
        content: `
### Agricultural Technology Initiative
Implementing tech-driven farming across Kenya and neighboring countries.

**Key Highlights**  
- Focus on mushrooms, meat, onions, and tomatoes  
- Precision farming techniques for higher yields  
- IoT integration for real-time monitoring
        `.trim(),
      },
    }),
    ...(sector.id === "consumer" && {
      "Nyumbani Deport & Tisana Africa": {
        title: "Nyumbani Deport & Tisan Africa",
        content: `
### Nyumbani Deport & Tisan Africa
Providing grocery delivery and fast food services in Tanzania and other nations.

**Key Highlights**  
- Real-time tracking for deliveries  
- Strategic urban locations for accessibility  
- Expanding retail presence across East Africa
        `.trim(),
      },
      "Mana Mat": {
        title: "Mana Mat",
        content: `
### Mana Mat
Offering mobile retail containers to underserved areas across East and Central Africa.

**Key Highlights**  
- Bringing essential goods to remote communities  
- Portable and scalable retail solution  
- Enhancing local access to consumer products
        `.trim(),
      },
      "Community Empowerment Program": {
        title: "Community Empowerment Program",
        content: `
### Community Empowerment Program
Empowering rural entrepreneurs to boost retail operations in rural communities.

**Key Highlights**  
- Ksh 100,000 worth of goods per entrepreneur  
- Training programs for business sustainability  
- Supporting economic growth in 7 nations
        `.trim(),
      },
    }),
    ...(sector.id === "finance" && {
      "Mulembe Africa Microcredit": {
        title: "Mulembe Africa Microcredit",
        content: `
### Mulembe Africa Microcredit
Pioneering microcredit and digital banking solutions across 7 nations, focusing on Rwanda and Kenya.

**Key Highlights**  
- Microcredit for small businesses and individuals  
- Digital banking for seamless transactions  
- Enhancing financial inclusion region-wide
        `.trim(),
      },
    }),
  },
}));
