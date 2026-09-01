"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Car,
  Factory,
  Gauge,
  GraduationCap,
  HeartPulse,
  HousePlug,
  Microscope,
  MonitorSpeaker,
  Plane,
  Rocket,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import StatCounter from "@/components/StatCounter";
import CounterNumber from "@/components/CounterNumber";
import CtaBanner from "@/components/CtaBanner";
import ModernHero from "@/components/ModernHero";
import ImageSlot from "@/components/ImagePlaceholder";
import MagicBentoCard from "@/components/MagicBentoCard";
import SpotlightCard from "@/components/SpotlightCard";
import { useQuoteModal } from "@/components/QuoteModalContext";
import {
  IsoTestCertification,
  IsoAnechoicChamber,
  IsoTestMeasurement,
  IsoDesignSimulation,
  IsoCuttingEdge,
  IsoFastTurnaround,
  IsoCostEfficiency,
} from "@/components/IsometricIcons";
import {
  SITE_CONFIG,
  OPERATING_PARTNERS,
  TARGET_AUDIENCES,
  PROMO_OFFER,
  MECF_PILLARS,
} from "@/data/siteData";

const audienceIconMap: Record<
  string,
  {
    Icon: LucideIcon;
    accent: string;
    soft: string;
    label: string;
  }
> = {
  "electronic-mfg": {
    Icon: Factory,
    accent: "#2F7867",
    soft: "#EEF7F3",
    label: "Electronics manufacturing line",
  },
  "rnd-teams": {
    Icon: Microscope,
    accent: "#4E769A",
    soft: "#F0F6FA",
    label: "Research and development lab",
  },
  automotive: {
    Icon: Car,
    accent: "#425466",
    soft: "#F1F4F6",
    label: "Automotive and EV electronics",
  },
  medical: {
    Icon: HeartPulse,
    accent: "#B45D73",
    soft: "#FAF1F4",
    label: "Medical device compliance",
  },
  "military-aerospace": {
    Icon: Plane,
    accent: "#6F668F",
    soft: "#F3F1F7",
    label: "Aerospace and defense reliability",
  },
  startups: {
    Icon: Rocket,
    accent: "#B98542",
    soft: "#FBF4EA",
    label: "Startup product launch",
  },
  academic: {
    Icon: GraduationCap,
    accent: "#4F7480",
    soft: "#EFF6F7",
    label: "Academic research institute",
  },
  "it-av": {
    Icon: MonitorSpeaker,
    accent: "#5F7895",
    soft: "#F0F4F8",
    label: "IT and audio video electronics",
  },
  household: {
    Icon: HousePlug,
    accent: "#82735F",
    soft: "#F6F1EA",
    label: "Household appliance safety",
  },
  "test-measurement": {
    Icon: Gauge,
    accent: "#2F7867",
    soft: "#EEF7F3",
    label: "Test and measurement instrumentation",
  },
};

function Audience3DIcon({ itemId }: { itemId: string }) {
  const config = audienceIconMap[itemId] ?? audienceIconMap["electronic-mfg"];
  const Icon = config.Icon;

  return (
    <div
      className="relative mb-4 h-[76px] w-[76px] transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-[1.03]"
      aria-label={config.label}
      role="img"
    >
      <div className="absolute inset-x-4 bottom-1 h-3 rounded-full bg-[#263241]/10 blur-md transition-all duration-500 group-hover:scale-110" />
      <div
        className="absolute inset-0 rounded-2xl border border-[#E7E2D9] shadow-[0_14px_28px_rgba(38,50,65,0.08),inset_0_1px_0_rgba(255,255,255,0.92),inset_0_-10px_18px_rgba(38,50,65,0.035)] transition-all duration-500 group-hover:border-[#D7CEC1] group-hover:shadow-[0_20px_44px_rgba(38,50,65,0.12),inset_0_1px_0_rgba(255,255,255,0.95)]"
        style={{
          background: `linear-gradient(145deg, #ffffff 0%, ${config.soft} 72%, #F7F3EC 100%)`,
        }}
      />
      <div
        className="absolute inset-[8px] rounded-xl border border-white/80 bg-white/34"
      />
      <div
        className="absolute left-1/2 top-2 h-1 w-7 -translate-x-1/2 rounded-full bg-white/85"
      />
      <div
        className="absolute bottom-2 left-1/2 h-1 w-8 -translate-x-1/2 rounded-full opacity-25"
        style={{ backgroundColor: config.accent }}
      />
      <div
        className="absolute right-3 top-3 h-2 w-2 rounded-full opacity-45"
        style={{ backgroundColor: config.accent }}
      />
      <div
        className="relative flex h-[76px] w-[76px] items-center justify-center rounded-2xl"
        style={{ color: config.accent }}
      >
        <Icon
          className="h-8 w-8 drop-shadow-[0_6px_10px_rgba(38,50,65,0.12)] transition-transform duration-500 group-hover:scale-105"
          strokeWidth={1.75}
        />
      </div>
    </div>
  );
}

export default function HomePage() {
  const { openQuoteModal } = useQuoteModal();

  const coreServices = [
    {
      title: "Test & Certification Lab",
      partner: "TÜV Rheinland India",
      desc: "Safety, climatic, IP and vibration testing for products that need recognized compliance evidence.",
      href: "/services/test-certification",
      isoIcon: IsoTestCertification,
      badge: "NABL / BIS / CE",
    },
    {
      title: "10m Semi-Anechoic Chamber",
      partner: "EMI / EMC Facility",
      desc: "10m SAC for radiated and conducted EMI/EMC work from 9 kHz to 40 GHz.",
      href: "/services/emi-emc",
      isoIcon: IsoAnechoicChamber,
      badge: "9 kHz – 40 GHz",
    },
    {
      title: "Test & Measurement Lab",
      partner: "Cyronics Instruments",
      desc: "Instrument access, pre-compliance debugging, calibration, and rental support for R&D teams.",
      href: "/services/test-measurement",
      isoIcon: IsoTestMeasurement,
      badge: "On-Demand Rental",
    },
    {
      title: "Design & Simulation Centre",
      partner: "3D Engineering Automation",
      desc: "Simulation, CAD/CAM, PLM and digital verification support for faster prototype decisions.",
      href: "/services/design-simulation",
      isoIcon: IsoDesignSimulation,
      badge: "Ansys / Siemens",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <ModernHero />

      {/* 1. Premium Hero Section */}
      {false && (
        <section className="relative pt-10 pb-16 sm:pt-14 sm:pb-24 bg-gradient-to-b from-[#FBFAF8] via-white to-[#F6F4F0] border-b border-[#E7E2D9] overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Col: Streamlined 5-Col Text Section */}
              <div className="lg:col-span-5 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-xl text-xs font-bold bg-[#2F9C78] text-white shadow-xs">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>MeitY-approved electronics testing CFC</span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-extrabold text-[#263241] leading-[1.08]">
                  Electronics testing infrastructure built for confident market entry.
                </h1>

                <p className="text-sm sm:text-base text-[#667085] leading-7">
                  MECF gives manufacturers access to a ₹71 Cr Pune facility with a 10m semi-anechoic chamber, IP68 capability, environmental chambers, and 3.5T vibration testing.
                </p>

                {/* Key Bullet Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#263241]">
                    <CheckCircle2 className="w-4 h-4 text-[#2F9C78] shrink-0" />
                    <span>Pay-per-use access</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#263241]">
                    <CheckCircle2 className="w-4 h-4 text-[#2F9C78] shrink-0" />
                    <span>BIS, CE &amp; FCC pathways</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#263241]">
                    <CheckCircle2 className="w-4 h-4 text-[#2F9C78] shrink-0" />
                    <span>10m SAC 9 kHz – 40 GHz</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#263241]">
                    <CheckCircle2 className="w-4 h-4 text-[#2F9C78] shrink-0" />
                    <span>TÜV Rheinland partner</span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={() => openQuoteModal()}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-white bg-[#2F9C78] hover:bg-[#247F62] active:scale-[0.98] transition-all btn-premium flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer"
                  >
                    <span>Book a Testing Slot</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <Link
                    href="/services"
                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-[#2F4054] bg-white hover:bg-[#F6F4F0] border border-[#E7E2D9] transition-all flex items-center justify-center gap-2 text-xs sm:text-sm"
                  >
                    <span>Explore Verticals</span>
                  </Link>
                </div>

                {/* Institutional Footprint Badges */}
                <div className="pt-4 border-t border-[#E7E2D9]">
                  <span className="text-[10px] font-bold text-[#667085] uppercase tracking-wider block mb-2">
                    Trust signals
                  </span>
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="px-2 py-0.5 rounded bg-white text-[11px] font-bold text-[#2F4054] border border-[#E7E2D9] shadow-2xs">
                      MeitY (Govt. of India)
                    </span>
                    <span className="px-2 py-0.5 rounded bg-white text-[11px] font-bold text-[#2F4054] border border-[#E7E2D9] shadow-2xs">
                      MCCIA SPV
                    </span>
                    <span className="px-2 py-0.5 rounded bg-white text-[11px] font-bold text-[#2F4054] border border-[#E7E2D9] shadow-2xs">
                      NABL ISO 17025
                    </span>
                    <span className="px-2 py-0.5 rounded bg-white text-[11px] font-bold text-[#2F4054] border border-[#E7E2D9] shadow-2xs">
                      TÜV Rheinland
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Col: Prominent 7-Col High-Impact Facility Showcase */}
              <div className="lg:col-span-7 relative">
                {/* Glow Backdrop */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-[#2F9C78]/14 via-[#2F4054]/12 to-transparent rounded-[36px] blur-xl opacity-70" />

                <div className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-2xl border border-[#E7E2D9] group bg-slate-950 min-h-[380px] sm:min-h-[480px] lg:min-h-[520px] flex items-center justify-center">
                  <Image
                    src="/assets/images/hero/hero-chamber-modern.jpg"
                    alt="MECF Pune 10m Semi-Anechoic Chamber for EMI EMC testing"
                    fill
                    className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-700"
                    priority
                  />

                  {/* Top-Right Floating Badge */}
                  <div className="absolute top-4 right-4 glass-panel px-4 py-2 rounded-xl flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-sm bg-[#2F9C78] animate-pulse" />
                    <span className="text-xs font-bold text-[#2F4054]">
                      10m SAC (9 kHz – 40 GHz)
                    </span>
                  </div>

                  {/* Bottom Floating Stats Glass Card */}
                  <div className="absolute bottom-4 left-4 right-4 glass-panel p-4 sm:p-5 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#2F4054] text-white flex items-center justify-center font-bold shrink-0">
                        <CounterNumber value={10} suffix="m" />
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-extrabold text-[#263241]">
                          Semi-Anechoic Chamber
                        </div>
                        <div className="text-[11px] text-[#667085] font-medium">
                          Radiated &amp; Conducted EMI/EMC Testing
                        </div>
                      </div>
                    </div>

                    <div className="hidden sm:block h-8 w-px bg-[#E7E2D9]" />

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#2F9C78] text-white flex items-center justify-center font-bold shrink-0">
                        <CounterNumber value={3.5} decimals={1} suffix="T" />
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-extrabold text-[#263241]">
                          Vibration Shaker
                        </div>
                        <div className="text-[11px] text-[#667085] font-medium">
                          Combined Environmental Climatic Testing
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Special Promotional Offer Spotlight Section */}
      <section className="py-8 bg-white border-b border-[#E7E2D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="inline-block px-3 py-1 rounded bg-[#2F9C78]/10 text-[#247F62] border border-[#2F9C78]/20 text-[11px] font-extrabold tracking-wider uppercase">
              {PROMO_OFFER.discountText} MSME &amp; MCCIA OFFER
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#263241]">
              {PROMO_OFFER.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#667085] max-w-2xl">
              Preferential pricing for eligible MSMEs and MCCIA members. Valid till <strong>31st August 2026</strong>, subject to terms.
            </p>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={() => openQuoteModal()}
              className="px-6 py-3 rounded-xl font-bold bg-[#2F9C78] hover:bg-[#247F62] text-white btn-premium text-xs sm:text-sm transition-all cursor-pointer"
            >
              Check Eligibility
            </button>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="px-5 py-3 rounded-xl font-semibold bg-[#F6F4F0] hover:bg-[#EEE9E0] text-[#2F4054] border border-[#E7E2D9] text-xs sm:text-sm transition-all"
            >
              Call {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
      </section>

      {/* 2. Stat Counter Strip */}
      <section className="py-12 bg-[#F0F4F8] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10">
          <StatCounter />
        </div>
      </section>

      {/* M-E-C-F Vision Framework Section */}
      <section className="py-16 sm:py-20 bg-[#FAF8F5] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center px-3 py-1 rounded-xl text-xs font-semibold bg-[#4EAE87]/15 text-[#3D9E78] border border-[#4EAE87]/30">
              The MECF Identity &amp; Mandate
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#2D3748] mt-3">
              The 4 Pillars of MCCIA Electronic Cluster Foundation
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-2">
              Driven by our core acronym framework to empower the regional and national electronics ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MECF_PILLARS.map((pillar) => (
              <SpotlightCard
                key={pillar.letter}
                spotlightColor="rgba(47, 156, 120, 0.16)"
                className="p-6 !rounded-none bg-white border border-[#E2E8F0] shadow-xs hover:shadow-md transition-all flex flex-col group relative overflow-hidden pt-8"
              >
                <div className="absolute top-4 right-4 w-12 h-12 rounded-2xl bg-[#4EAE87]/15 text-[#3D9E78] flex items-center justify-center font-black text-xl group-hover:bg-[#4EAE87] group-hover:text-white transition-all">
                  {pillar.letter}
                </div>
                <h3 className="text-lg font-bold text-[#2D3748] mb-2 pr-12">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed flex-1">
                  {pillar.description}
                </p>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* 3. What is MECF / Positioning Overview */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center px-3 py-1 rounded-xl text-xs font-semibold bg-[#5C82A6]/12 text-[#3C5068] border border-[#5C82A6]/25">
                Institutional Credibility
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#2D3748] leading-tight">
                A National Infrastructure Asset for Electronics Innovation
              </h2>
              <p className="text-base text-[#64748B] leading-relaxed">
                MCCIA Electronic Cluster Foundation (MECF) was incorporated as a Section 8 not-for-profit Special Purpose Vehicle (SPV) by the Mahratta Chamber of Commerce, Industries and Agriculture (MCCIA). Approved under MeitY&apos;s Electronics Manufacturing Cluster (EMC) scheme, MECF delivers high-capital testing infrastructure to Indian manufacturers, MSMEs, startups, and multinationals without prohibitive individual capex.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#4EAE87] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-sm text-[#2D3748]">Pay-Per-Use Flexibility:</strong>
                    <span className="text-sm text-[#64748B] ml-1">Zero annual commitment; book exactly the chamber hours and tests your product needs.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#4EAE87] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-sm text-[#2D3748]">Global Export Validity:</strong>
                    <span className="text-sm text-[#64748B] ml-1">NABL-accredited test reports acceptable for BIS, CE, FCC, and global type approvals.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#4EAE87] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-sm text-[#2D3748]">Operating Partner Ecosystem:</strong>
                    <span className="text-sm text-[#64748B] ml-1">Managed in partnership with global TIC leader TÜV Rheinland, Cyronics Instruments, and 3D Engineering Automation.</span>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/background"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#5C82A6] hover:underline"
                >
                  <span>Learn about the EMC Scheme &amp; Funding Origins</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <SpotlightCard
                spotlightColor="rgba(92, 130, 166, 0.12)"
                className="app-store-card rounded-3xl overflow-hidden shadow-2xl border border-[#E7E2D9]"
              >
                <ImageSlot
                  src="/assets/images/hero/hero-facility-02.jpg"
                  alt="Engineers at work in MECF NABL Accredited testing laboratory"
                  width={1200}
                  height={800}
                  badge="MeitY Approved & NABL Accredited"
                  overlayTitle="Pune Common Facility Centre"
                  overlaySub="₹71 Cr State-of-the-Art Electronics CFC"
                  aspectRatio="aspect-[4/3]"
                />
              </SpotlightCard>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Three Core USPs */}
      <section className="py-10 sm:py-12 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#2D3748]">
              Engineered for Speed, Precision, and Economy
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-3">
              MECF solves the testing bottleneck for India&apos;s electronics hardware ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <MagicBentoCard
              glowColor="20, 184, 138"
              className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#DDE8E2] shadow-[0_18px_48px_rgba(38,50,65,0.08)] flex flex-col group"
            >
              <div className="mb-6 group-hover:scale-105 transition-transform w-fit">
                <IsoCuttingEdge size={84} />
              </div>
              <h3 className="text-xl font-bold text-[#2D3748] tracking-tight mb-2">
                Cutting-Edge Testing
              </h3>
              <p className="text-sm text-[#64748B] leading-relaxed flex-1">
                State-of-the-art 10m Semi-Anechoic Chamber up to 40 GHz, Walk-in Climatic chambers (-70°C to +180°C), IP68 immersion tanks, and 3.5-Ton electrodynamic shaker tables.
              </p>
            </MagicBentoCard>

            <MagicBentoCard
              glowColor="64, 126, 186"
              className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#DCE6EF] shadow-[0_18px_48px_rgba(38,50,65,0.08)] flex flex-col group"
            >
              <div className="mb-6 group-hover:scale-105 transition-transform w-fit">
                <IsoFastTurnaround size={84} />
              </div>
              <h3 className="text-xl font-bold text-[#2D3748] tracking-tight mb-2">
                Timely &amp; Turnaround-Focused
              </h3>
              <p className="text-sm text-[#64748B] leading-relaxed flex-1">
                Eliminate 6-month overseas lab waiting queues. Rapid scheduling, express turnarounds for members, and on-site engineering debugging during sample testing.
              </p>
            </MagicBentoCard>

            <MagicBentoCard
              glowColor="218, 145, 48"
              className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#EDE2D2] shadow-[0_18px_48px_rgba(38,50,65,0.08)] flex flex-col group"
            >
              <div className="mb-6 group-hover:scale-105 transition-transform w-fit">
                <IsoCostEfficiency size={84} />
              </div>
              <h3 className="text-xl font-bold text-[#2D3748] tracking-tight mb-2">
                Market-Competitive Rates
              </h3>
              <p className="text-sm text-[#64748B] leading-relaxed flex-1">
                Non-profit Section 8 pricing structure funded to subsidize hardware R&amp;D in India. Up to 30% additional discount for contributing members.
              </p>
            </MagicBentoCard>
          </div>
        </div>
      </section>

      {/* 5. Four Core Service Verticals */}
      <section className="py-4 sm:py-8 bg-[#FAF8F5] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#4EAE87]">
                Core Facilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#2D3748] mt-1">
                Testing &amp; Engineering Verticals
              </h2>
              <p className="text-sm sm:text-base text-[#64748B] mt-2 max-w-xl">
                Integrated product testing across safety, environmental stress, mechanical durability, RF emissions, and virtual simulation.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#4EAE87] hover:underline"
            >
              <span>View all specifications &amp; standards</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreServices.map((service, idx) => {
              const IsoIconComp = service.isoIcon;
              return (
                <MagicBentoCard
                  key={idx}
                  glowColor={idx % 2 === 0 ? "20, 184, 138" : "64, 126, 186"}
                  className="p-8 rounded-3xl bg-white border border-[#DDE7E4] shadow-[0_18px_48px_rgba(38,50,65,0.08)] flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="group-hover:scale-105 transition-transform">
                        <IsoIconComp size={88} />
                      </div>
                      <span className="px-3 py-1 rounded-xl text-xs font-bold bg-[#F0F4F8] text-[#3C5068] border border-[#E2E8F0]">
                        {service.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-[#2D3748] tracking-tight">
                      {service.title}
                    </h3>
                    <div className="text-xs font-bold text-[#4EAE87] mt-1 mb-4">
                      Partner: {service.partner}
                    </div>
                    <p className="text-sm text-[#64748B] leading-relaxed">
                      {service.desc}
                    </p>
                  </div>

                  <div className="pt-8 mt-6 border-t border-[#E2E8F0] flex items-center justify-between">
                    <Link
                      href={service.href}
                      className="text-xs font-bold text-[#3C5068] hover:text-[#4EAE87] flex items-center gap-1 transition-colors"
                    >
                      <span>Explore Technical Specs</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <button
                      onClick={() => openQuoteModal(service.title)}
                      className="text-xs font-bold text-[#4EAE87] hover:underline cursor-pointer"
                    >
                      Book Chamber →
                    </button>
                  </div>
                </MagicBentoCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Target Audience Infinite Marquee Section */}
      <section className="py-10 sm:py-14 bg-white border-b border-[#E2E8F0] overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 mb-12">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5C82A6]">
              Ecosystem Reach
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#2D3748] mt-1">
              Who We Serve Across India
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-3">
              Supporting critical hardware development across 10 vital industry segments.
            </p>
          </div>
        </div>

        {/* Marquee Rows Container */}
        <div className="relative space-y-2 overflow-x-hidden py-7">
          {/* Side Fading Gradients for Smooth Edges */}
          <div className="absolute top-0 bottom-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* Row 1: Moving RIGHT */}
          <div className="-my-4 flex overflow-hidden py-4">
            <div className="animate-marquee-right flex gap-6 px-3">
              {[
                ...TARGET_AUDIENCES.slice(0, 5),
                ...TARGET_AUDIENCES.slice(0, 5),
              ].map((item, idx) => (
                <SpotlightCard
                  key={`row1-${item.id}-${idx}`}
                  spotlightColor="rgba(47, 156, 120, 0.13)"
                  className="w-72 sm:w-80 shrink-0 rounded-2xl border border-[#E2E8F0] bg-white p-6 text-center shadow-[0_16px_38px_rgba(38,50,65,0.05)] transition-all duration-500 flex flex-col items-center group cursor-pointer hover:-translate-y-1 hover:border-[#2F9C78]/30 hover:bg-[#FBFAF8] hover:shadow-[0_28px_72px_rgba(38,50,65,0.12)]"
                >
                  <Audience3DIcon itemId={item.id} />
                  <h4 className="text-sm font-bold text-[#2D3748] mb-1.5 group-hover:text-[#4EAE87] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {item.desc}
                  </p>
                </SpotlightCard>
              ))}
            </div>
          </div>

          {/* Row 2: Moving LEFT */}
          <div className="-my-4 flex overflow-hidden py-4">
            <div className="animate-marquee-left flex gap-6 px-3">
              {[
                ...TARGET_AUDIENCES.slice(5, 10),
                ...TARGET_AUDIENCES.slice(5, 10),
              ].map((item, idx) => (
                <SpotlightCard
                  key={`row2-${item.id}-${idx}`}
                  spotlightColor="rgba(47, 64, 84, 0.12)"
                  className="w-72 sm:w-80 shrink-0 rounded-2xl border border-[#E2E8F0] bg-white p-6 text-center shadow-[0_16px_38px_rgba(38,50,65,0.05)] transition-all duration-500 flex flex-col items-center group cursor-pointer hover:-translate-y-1 hover:border-[#2F4054]/30 hover:bg-[#FBFAF8] hover:shadow-[0_28px_72px_rgba(38,50,65,0.12)]"
                >
                  <Audience3DIcon itemId={item.id} />
                  <h4 className="text-sm font-bold text-[#2D3748] mb-1.5 group-hover:text-[#3C5068] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {item.desc}
                  </p>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Operating Partners Logo & Profile Strip */}
      <section className="py-10 sm:py-14 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
              Operating Partners
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#2D3748] mt-1">
              Operated in Partnership with Industry Leaders
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {OPERATING_PARTNERS.map((partner) => (
              <SpotlightCard
                key={partner.id}
                spotlightColor="rgba(92, 130, 166, 0.13)"
                className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E2E8F0] flex flex-col justify-between"
              >
                <div>
                  <div className="h-12 flex items-center mb-4">
                    <span className="text-base font-bold text-[#3C5068] tracking-tight">
                      {partner.name}
                    </span>
                  </div>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {partner.description}
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-[#E2E8F0]">
                  <Link
                    href="/operating-partners"
                    className="text-xs font-semibold text-[#5C82A6] hover:underline inline-flex items-center gap-1"
                  >
                    <span>View partner dossier</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* Statement CTA Banner */}
      <CtaBanner />
    </div>
  );
}
