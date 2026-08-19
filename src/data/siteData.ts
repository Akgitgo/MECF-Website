export interface BoardMember {
  sr: number;
  name: string;
  designation: string;
  organization: string;
}

export interface CommitteeMember {
  sr: number;
  name: string;
  role: string;
  organization?: string;
}

export interface StaffMember {
  name: string;
  role: string;
  email: string;
  phone: string;
  department: string;
}

export interface PartnerInfo {
  id: string;
  name: string;
  tagline: string;
  description: string;
  location: string;
  expertise: string[];
  servicesOffered: string[];
  technologies?: string[];
  logoPlaceholder: string;
}

export interface MembershipTier {
  tierName: string;
  contribution: string;
  amountNumeric: number;
  discountRate: string;
  priorityTurnaround: string;
  badgeColor?: string;
  features: string[];
  isPopular?: boolean;
}

export const PROMO_OFFER = {
  title: "Up to 50% Discount for MSMEs & MCCIA Members",
  discountText: "Up to 50% Off",
  targetAudience: "MSMEs and MCCIA Members",
  applicableServices: "Test & Certification Services and EMI/EMC Services",
  validity: "Valid till 31st August 2026",
  validityDate: "2026-08-31",
  termsNotice: "Terms & conditions applied",
  contactPhone: "+91 90211 95528",
  contactAltPhone: "020 29970416",
  contactMobile: "+91 9822315777",
};

export const MECF_PILLARS = [
  {
    letter: "M",
    title: "Maximizing Potential",
    description: "Maximizing the potential for Electronic Ecosystem's growth in and around the region."
  },
  {
    letter: "E",
    title: "Enabling Innovation",
    description: "Enabling innovations through comprehensive, world-class services."
  },
  {
    letter: "C",
    title: "Competitive & Faster",
    description: "Competitive and faster testing & certification services under one roof."
  },
  {
    letter: "F",
    title: "Facilitating Industry",
    description: "Facilitating wider range of industry like MSMEs & start-ups to save cost and time in product development."
  }
];

export const SITE_CONFIG = {
  name: "MECF",
  fullName: "MCCIA Electronic Cluster Foundation",
  legalType: "Section 8 Not-For-Profit Company (SPV of MCCIA)",
  establishedYear: "2017",
  clusterStatus: "Approved Brownfield Electronics Manufacturing Cluster (EMC) since Dec 2013",
  scheme: "Electronics Manufacturing Cluster (EMC) Scheme, Ministry of Electronics & IT (MeitY), Govt. of India",
  tagline: "India's Premier MeitY-Approved Electronics Testing, NABL Certification & Calibration CFC",
  phone: "+91 90211 95528",
  phoneFormatted: "+91 90211 95528",
  landlinePhone: "020 29970416",
  mobilePhone: "+91 9822315777",
  email: "ceo@mecf.in",
  generalEmail: "info@mecf.in",
  pratikEmail: "pratikp@mcciapune.com",
  websiteUrl: "https://www.mecfpune.com",
  address: "MECF, J/P-8, MIDC Bhosari, Telco Road, Ganesh Nagar, Bhosari, Pune - 411026 (Maharashtra)",
  workingHours: "Monday – Friday, 09:00 AM – 05:00 PM IST",
  linkedin: "https://www.linkedin.com/company/mecfpune",
  instagram: "https://www.instagram.com/mecfpune",
  twitter: "https://x.com/mecfpune",
  whatsapp: "https://wa.me/919021195528",
  facilitySize: "2,500 sq. metres (Land grant by MCCIA)",
  projectCostInitial: "₹67.0 Crore",
  operationalAssetBase: "₹71.0 Crore",
};

export const FUNDING_BREAKDOWN = [
  { source: "MeitY Grant-in-Aid (Govt. of India)", amount: "₹50.00 Cr", percentage: "74.6%", note: "Approved under EMC Scheme for capital equipment & anechoic chamber" },
  { source: "Government of Maharashtra Assistance", amount: "₹6.70 Cr", percentage: "10.0%", note: "State Electronics Policy 2016 incentive support" },
  { source: "Industry Contributing Members & MCCIA SPV", amount: "₹10.30 Cr", percentage: "15.4%", note: "Direct private sector equity & user-industry participation" },
  { source: "MCCIA Land Grant", amount: "2,500 sq. m.", percentage: "In-Kind", note: "Prime industrial plot J/P-8, MIDC Bhosari, Pune" },
];

export const EXECUTIVE_BOARD: BoardMember[] = [
  { sr: 1, name: "Shri D. G. Karandikar", designation: "President", organization: "MCCIA" },
  { sr: 2, name: "Shri Prashant Girbane", designation: "Director General", organization: "MCCIA" },
  { sr: 3, name: "Shri Pradeep Bhargava", designation: "Director & Chairman", organization: "MECF" },
  { sr: 4, name: "Shri Anup Sable", designation: "Director", organization: "KPIT Technologies Ltd." },
  { sr: 5, name: "Shri Aditya Paranjpe", designation: "Director", organization: "Kloudq Technologies" },
  { sr: 6, name: "Shri Narayan Bedarkar", designation: "Director", organization: "SBEM Pvt. Ltd." },
  { sr: 7, name: "Shri Girish Ranade", designation: "Director", organization: "Futuras Apsol Pvt. Ltd." },
  { sr: 8, name: "Shri Sunil Sapre", designation: "Director", organization: "Persistent Systems" },
  { sr: 9, name: "Ms. Manasi Bidkar", designation: "Director", organization: "Melux Control Gears Pvt. Ltd." },
  { sr: 10, name: "Shri Ajay Bhagwat", designation: "Director", organization: "Renu Electronics Pvt. Ltd." },
  { sr: 11, name: "Nikhil Jain", designation: "CEO", organization: "MECF" },
  { sr: 12, name: "Shri Sadashiv Survase", designation: "Joint Director of Industries", organization: "DIC, Government of Maharashtra" },
];

export const EXECUTIVE_COMMITTEE: CommitteeMember[] = [
  { sr: 1, name: "Shri Prashant Girbane", role: "Director", organization: "MCCIA" },
  { sr: 2, name: "Shri Sunil Sapre", role: "Director", organization: "Persistent Systems" },
  { sr: 3, name: "Shri Narayan Bedarkar", role: "Director", organization: "SBEM Pvt. Ltd." },
  { sr: 4, name: "Nikhil Jain", role: "Chief Executive Officer (CEO)", organization: "MECF" },
];

export const TEAM_DIRECTORY: StaffMember[] = [
  {
    name: "Nikhil Jain",
    role: "Chief Executive Officer (CEO)",
    email: "ceo@mecf.in",
    phone: "+91 90211 95528",
    department: "Executive Leadership & General Administration",
  },
  {
    name: "Pratik Pardeshi",
    role: "Executive Contact & Business Support",
    email: "pratikp@mcciapune.com",
    phone: "+91 90211 95528",
    department: "MCCIA Liaison & Operations Support",
  },
  {
    name: "Mr. Sachin Ghokse",
    role: "Maintenance & Project In-charge",
    email: "project@mecf.in",
    phone: "+91 96654 76290",
    department: "Facility Operations & Engineering Maintenance",
  },
  {
    name: "Mr. Arvind Kadam",
    role: "Accounts & Financial Officer",
    email: "accounts@mecf.in",
    phone: "+91 77760 95169",
    department: "Finance, Invoicing & Statutory Accounts",
  },
];

export const OPERATING_PARTNERS: PartnerInfo[] = [
  {
    id: "tuv-rheinland",
    name: "TÜV Rheinland (India) Pvt. Ltd.",
    tagline: "Global Testing, Inspection & Certification (TIC) Operating Partner",
    description: "TÜV Rheinland operates MECF's state-of-the-art EMI/EMC 10m Semi-Anechoic Chamber and Test & Certification verticals, providing NABL-accredited compliance per IEC/EN/ISO/BIS/IS international standards.",
    location: "Global / Pune CFC Facility",
    expertise: [
      "10m Semi-Anechoic Chamber (9 kHz to 40 GHz Radiated Emissions & Immunity)",
      "Radiated & Conducted Susceptibility Testing",
      "3-Phase Voltage Dips, Interruptions, Harmonics & Flicker Emissions",
      "Electrostatic Discharge (ESD), Magnetic Field, EFT & Surge Immunity",
      "Automotive Transient System & CISPR 25 Testing",
      "IP Testing (IPX1-IPX8 Water Immersion & IP5X-IP6X Dust Chamber)",
      "Environmental Climatic Testing & Photometry",
      "Electrical Safety, Reliability Lab & 3.5-Ton Vibration Shaker",
    ],
    servicesOffered: [
      "EMI/EMC Testing (10m SAC 9kHz-40GHz)",
      "3 PH Voltage Dips & Interruptions Testing",
      "Harmonic Current Emissions & Flicker Emissions",
      "Electrostatic Discharge (ESD) & Magnetic Field Immunity",
      "EFT and Surge Immunity Testing",
      "Automotive Transient System",
      "IP Rating Testing (IPX1–IPX8 & IP5X–IP6X)",
      "Mechanical & 3.5T Vibration Testing",
      "Environmental & Climatic Testing",
      "Photometry Testing & Electrical Safety",
    ],
    logoPlaceholder: "tuv-rheinland-logo.png",
  },
  {
    id: "cyronics",
    name: "Cryonics Instruments Pvt. Ltd.",
    tagline: "Precision Test & Measurement Operating Partner",
    description: "Operating partner delivering high-end test instrument access, pre-compliance EMI testing, customized test solutions, solar simulation, and electronic component assembly.",
    location: "Pune, Maharashtra",
    expertise: [
      "Advanced Measurement Instruments & Custom Test Solutions",
      "Pre-Compliance Testing for EMI",
      "Solar Simulation and Environmental Monitoring",
      "Precision PCB Soldering, SMT Soldering & BGA Rework",
      "Comprehensive Testing & Debug Capabilities",
    ],
    servicesOffered: [
      "Advanced Measurement Instrumentation",
      "Pre-Compliance EMI Testing & Diagnostic Debug",
      "Customized Test Solutions for R&D",
      "Solar Simulation & Environmental Monitoring",
      "PCB Soldering, SMT Soldering & BGA Soldering Services",
    ],
    logoPlaceholder: "cyronics-logo.png",
  },
  {
    id: "3d-engineering",
    name: "3D Engineering Automation LLP",
    tagline: "Advanced Design Centre Partner",
    description: "Partner empowering MECF's Design Centre with industry-leading EDA, multiphysics CAE, 3D EM simulation, and hardware prototyping toolchains.",
    location: "Pune, Maharashtra",
    expertise: [
      "Ansys Electronic Enterprises Suite & 3D Electromagnetic Simulation",
      "PCB Design & FPGA Design Tools",
      "Embedded Development & EDA Tools",
      "Hardware Tools (DMM, DSO, Benchtop DMM, Programmable Power Supply)",
      "SMT & BGA Soldering Stations",
    ],
    servicesOffered: [
      "Ansys Electronic Enterprises Simulation",
      "PCB Design & FPGA Toolchain Consultations",
      "3D EM Analysis & Signal Integrity Verification",
      "Embedded System Prototyping & Probing",
      "Benchtop Hardware Tools & Soldering Station Access",
    ],
    logoPlaceholder: "3d-engineering-logo.png",
  },
];

export const MEMBERSHIP_TIERS: MembershipTier[] = [
  {
    tierName: "Associate Contributor",
    contribution: "₹10 Lakhs",
    amountNumeric: 1000000,
    discountRate: "20% Discount",
    priorityTurnaround: "10-Day Priority Turnaround",
    features: [
      "20% discount on all standard testing & rental rate cards",
      "10-day prioritized lab slot booking turnaround",
      "Dedicated technical coordinator for sample tracking",
      "Access to preliminary test review & pre-test engineering consultations",
      "Quarterly technical seminars & standard updates invitation",
    ],
  },
  {
    tierName: "Silver Contributor",
    contribution: "₹50 Lakhs",
    amountNumeric: 5000000,
    discountRate: "25% Discount",
    priorityTurnaround: "5-Day Priority Turnaround",
    isPopular: true,
    features: [
      "25% discount on all standard testing & rental rate cards",
      "5-day prioritized expedited lab slot turnaround",
      "Preferred access to the 10m Semi-Anechoic Chamber",
      "Priority scheduling for environmental & 3.5T shaker tests",
      "Direct technical debug assistance with operating partner engineers",
      "Invitations to MECF Industry Advisory Roundtables",
    ],
  },
  {
    tierName: "Gold Contributor",
    contribution: "₹1.00 Crore",
    amountNumeric: 10000000,
    discountRate: "30% Discount",
    priorityTurnaround: "2-Day Express Priority",
    features: [
      "30% maximum discount across all MECF testing & facility services",
      "2-day express priority test chamber turnaround",
      "VIP round-the-clock emergency debug access during prototype phase",
      "Executive Board briefing & cluster roadmap participation",
      "Reserved annual test quota blocks with flexible rescheduling",
      "Prominent corporate recognition across MECF Annual Reports & Facility Wall",
    ],
  },
];

export const SAFETY_STANDARDS = [
  { standard: "IEC 60950-1", productCategory: "Information Technology Equipment (General Safety Requirements)" },
  { standard: "IEC 61010-1", productCategory: "Safety Requirements for Electrical Equipment for Measurement, Control, and Laboratory Use" },
  { standard: "IEC 62368-1", productCategory: "Audio/Video, Information and Communication Technology Equipment (Hazard-Based Safety)" },
  { standard: "IEC 60335-1", productCategory: "Household and Similar Electrical Appliances — Safety Specification" },
  { standard: "IS 13252 / IS 616", productCategory: "Bureau of Indian Standards (BIS) Mandatory CRS Safety Compliance" },
];

export const ENVIRONMENTAL_TEST_SPECS = [
  { testName: "Dry Heat Test", chamberSize: "2000 × 2000 × 2000 mm", tempRange: "-70°C to +180°C", humidityRange: "10% to 98% RH", standard: "IEC 60068-2-2 / MIL-STD-810" },
  { testName: "Cold Test", chamberSize: "2000 × 2000 × 2000 mm", tempRange: "-70°C to +180°C", humidityRange: "N/A", standard: "IEC 60068-2-1" },
  { testName: "Humidity Steady State", chamberSize: "2000 × 2000 × 2000 mm", tempRange: "+10°C to +95°C", humidityRange: "10% to 98% RH", standard: "IEC 60068-2-78" },
  { testName: "Humidity Cyclic Test", chamberSize: "2000 × 2000 × 2000 mm", tempRange: "-40°C to +100°C", humidityRange: "10% to 98% RH", standard: "IEC 60068-2-30" },
  { testName: "Temperature Cyclic Test", chamberSize: "2000 × 2000 × 2000 mm", tempRange: "-70°C to +180°C (10°C/min ramp)", humidityRange: "Controlled", standard: "IEC 60068-2-14" },
  { testName: "Compact Reach-In Climatic", chamberSize: "1000 × 1000 × 1000 mm", tempRange: "-70°C to +180°C", humidityRange: "10% to 98% RH", standard: "IEC 60068 Series / JSS 55555" },
  { testName: "Altitude / Low Pressure Test", chamberSize: "Dedicated Chamber", tempRange: "-40°C to +100°C", humidityRange: "Pressure down to 10 mbar (100,000 ft)", standard: "IEC 60068-2-13 / MIL-STD-810G" },
  { testName: "Thermal Shock Test", chamberSize: "Dual Zone Basket Transfer", tempRange: "-75°C to +200°C (< 10s transfer)", humidityRange: "Air-to-Air", standard: "IEC 60068-2-14 Na/Nb" },
];

export const MECHANICAL_IP_SPECS = [
  { testType: "Ingress Protection (Water)", specification: "IPX1 to IPX8 (Drip box, Oscillating spray tube, Jet nozzles, Continuous Immersion up to IP68)", standard: "IEC 60529 / ISO 20653" },
  { testType: "Ingress Protection (Dust)", specification: "IP5X (Dust Protected) and IP6X (Dust Tight) Talcum powder test chamber", standard: "IEC 60529 / IS 13947" },
  { testType: "Electrodynamic Vibration", specification: "3.5 Ton Force Shaker, Sine / Random / Shock, 5 Hz – 3000 Hz, Slip Table 1200 × 1200 mm", standard: "IEC 60068-2-6 / IEC 60068-2-64" },
  { testType: "Mechanical Shock", specification: "Half-sine, Sawtooth pulses up to 100g / 11ms, peak velocity control", standard: "IEC 60068-2-27" },
  { testType: "Bump Test", specification: "Repetitive mechanical bump impacts up to 40g, 1000 to 4000 bumps/axis", standard: "IEC 60068-2-29" },
];

export const COMBINED_TEST_SPECS = [
  { testType: "Combined Vibration + Climatic", chamberSize: "1200 × 1200 × 1000 mm", capabilities: "Simultaneous 3-axis vibration under thermal extremes (-60°C to +150°C) with RH control", targetApplication: "Automotive Under-the-Hood ECUs, Aerospace Avionics, Defense Electronics" },
  { testType: "Combined Shock + Thermal", chamberSize: "Integrated Shaker Chamber", capabilities: "Mechanical pulse profile while undergoing operational thermal cycling", targetApplication: "EV Battery Management Systems, Telecom Outdoor Rugged Enclosures" },
  { testType: "Combined Bump + Humidity", chamberSize: "Integrated Test Cell", capabilities: "Repetitive transport shock simulation during cyclic damp heat", targetApplication: "Industrial Automation Hubs, Smart Meters, Medical Field Kits" },
];

export const ANECHOIC_CHAMBER_SPECS = [
  { parameter: "Chamber Dimensions & Type", detail: "10-Metre Semi-Anechoic Chamber (SAC) with fully ferrite-tiled walls and hybrid pyramidal absorbers" },
  { parameter: "Frequency Range", detail: "9 kHz to 40 GHz radiated emission & radiated immunity" },
  { parameter: "Antenna Mast & Turntable", detail: "Automated 3-metre heavy-duty turntable (load capacity up to 3000 kg) with automated 1m–4m antenna mast" },
  { parameter: "Support Rooms", detail: "Dedicated EMI Control Room, High-Power RF Amplifier Room, and 1 independent RF Shielded Room" },
  { parameter: "Associated Standards", detail: "CISPR 11, CISPR 22, CISPR 32, CISPR 25 (Automotive), IEC 61000-4-3 (Radiated Immunity), MIL-STD-461G" },
  { parameter: "Conducted Immunity / Emissions", detail: "Burst/EFT (IEC 61000-4-4), Surge (IEC 61000-4-5), Voltage Dips/Interruptions (IEC 61000-4-11), Harmonics & Flicker (IEC 61000-3-2/3)" },
];

export const TARGET_AUDIENCES = [
  { id: "electronic-mfg", title: "Electronic Manufacturers", desc: "Tier-1 OEMs and ODMs requiring fast-track BIS CRS, CE, and FCC regulatory testing." },
  { id: "rnd-teams", title: "R&D Teams & Labs", desc: "Design verification, thermal stress debugging, and pre-compliance testing during prototype phases." },
  { id: "automotive", title: "Automotive & EV", desc: "Automotive electronics, BMS, dashboard clusters, and motor controllers tested to CISPR 25 and ISO 16750." },
  { id: "medical", title: "Medical & Healthcare", desc: "IEC 60601-1 safety and EMC certification for patient monitoring, diagnostic devices, and clinical gear." },
  { id: "military-aerospace", title: "Military & Aerospace", desc: "High-reliability ruggedization per MIL-STD-810G, MIL-STD-461, and JSS 55555 environmental standards." },
  { id: "startups", title: "Startups & Incubators", desc: "Cost-effective pay-per-use testing access without massive capital investment in proprietary lab chambers." },
  { id: "academic", title: "Academic & Research Institutes", desc: "Support for applied research, PhD investigations, and indigenous product development programs." },
  { id: "it-av", title: "IT & Audio-Video", desc: "IEC 62368-1 compliance for consumer electronics, networking gear, computing peripherals, and displays." },
  { id: "household", title: "Household Appliances", desc: "IEC 60335 compliance covering safety, ingress protection, and power efficiency for consumer white goods." },
  { id: "test-measurement", title: "Lab Test & Measurement", desc: "Rental instrumentation and calibration services to elevate lab testing precision." },
];
