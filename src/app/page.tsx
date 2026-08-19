"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Radio,
  Sliders,
  Cpu,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Layers,
  Clock,
  Coins,
  Building2,
  Award,
  Sparkles,
} from "lucide-react";
import ImageSlot from "@/components/ImagePlaceholder";
import StatCounter from "@/components/StatCounter";
import CtaBanner from "@/components/CtaBanner";
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
  MEMBERSHIP_TIERS,
  TARGET_AUDIENCES,
  PROMO_OFFER,
  MECF_PILLARS,
} from "@/data/siteData";
import ModernHero from "@/components/ModernHero";

export default function HomePage() {
  const { openQuoteModal } = useQuoteModal();
  const [heroStyle, setHeroStyle] = React.useState<"modern" | "classic">("classic");

  const coreServices = [
    {
      title: "Test & Certification Lab",
      partner: "TÜV Rheinland India",
      desc: "Comprehensive Product Safety (IEC 60950/62368/60335), Environmental Climatic Chambers (-70°C to +180°C), IP68 Ingress Protection, and 3.5-Ton Vibration Shaker testing.",
      href: "/services/test-certification",
      isoIcon: IsoTestCertification,
      badge: "NABL / BIS / CE",
    },
    {
      title: "10m Semi-Anechoic Chamber",
      partner: "EMI / EMC Facility",
      desc: "World-class 10-Metre Semi-Anechoic Chamber operating from 9 kHz up to 40 GHz. Dedicated RF Control Room, High-Power Amplifier Room, and Heavy-Duty 3m Turntable (3000 kg).",
      href: "/services/emi-emc",
      isoIcon: IsoAnechoicChamber,
      badge: "9 kHz – 40 GHz",
    },
    {
      title: "Test & Measurement Lab",
      partner: "Cyronics Instruments",
      desc: "High-end test instrument rental, pre-compliance electromagnetic debugging, signal integrity analysis, and NABL-traceable calibration for rapid product turnarounds.",
      href: "/services/test-measurement",
      isoIcon: IsoTestMeasurement,
      badge: "On-Demand Rental",
    },
    {
      title: "Design & Simulation Centre",
      partner: "3D Engineering Automation",
      desc: "Advanced multiphysics CAE simulation, CAD/CAM engineering, PLM systems, and Digital Twin virtual verification powered by Ansys, Siemens NX, and Teamcenter toolchains.",
      href: "/services/design-simulation",
      isoIcon: IsoDesignSimulation,
      badge: "Ansys / Siemens",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section Switcher */}
      {heroStyle === "modern" ? (
        <ModernHero onToggleHero={() => setHeroStyle("classic")} />
      ) : (
        /* 1. Enhanced Executive Classic Hero Section */
        <section className="relative pt-8 pb-16 sm:pt-12 sm:pb-24 bg-gradient-to-b from-[#FAF8F5] via-white to-[#F0F4F8]/40 border-b border-[#E2E8F0] overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setHeroStyle("modern")}
                className="px-3.5 py-1.5 rounded-full bg-white text-[#3C5068] border border-[#E2E8F0] hover:bg-[#3C5068] hover:text-white transition-all text-xs font-bold shadow-xs cursor-pointer flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#4EAE87]" />
                <span>Switch to Full-Bleed Modern Hero</span>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Col: Streamlined 5-Col Text Section */}
              <div className="lg:col-span-5 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-[#4EAE87] text-white shadow-xs">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Special Offer: {PROMO_OFFER.discountText} for MSMEs &amp; MCCIA</span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#2D3748] leading-[1.12]">
                  India&apos;s Premier Centre for <br />
                  <span className="text-[#4EAE87]">Electronics Testing &amp; Certification</span>
                </h1>

                <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                  ₹71 Crore Common Facility Centre in Pune. 10m Semi-Anechoic EMI/EMC Chamber (9 kHz – 40 GHz), IP68 Ingress Protection, and 3.5T Vibration Shaker operated with TÜV Rheinland &amp; Cyronics.
                </p>

                {/* Key Bullet Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#2D3748]">
                    <CheckCircle2 className="w-4 h-4 text-[#4EAE87] shrink-0" />
                    <span>Zero Commitment (Pay-Per-Use)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#2D3748]">
                    <CheckCircle2 className="w-4 h-4 text-[#4EAE87] shrink-0" />
                    <span>Acceptable for BIS, CE &amp; FCC</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#2D3748]">
                    <CheckCircle2 className="w-4 h-4 text-[#4EAE87] shrink-0" />
                    <span>10m SAC 9 kHz – 40 GHz</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#2D3748]">
                    <CheckCircle2 className="w-4 h-4 text-[#4EAE87] shrink-0" />
                    <span>TÜV Rheinland Technical Partner</span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={() => openQuoteModal()}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-white bg-[#4EAE87] hover:bg-[#3D9E78] active:scale-[0.98] transition-all shadow-md flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer"
                  >
                    <span>Book Lab Slot / Claim 50% Off</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <Link
                    href="/services"
                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-[#3C5068] bg-[#F0F4F8] hover:bg-[#E2E8F0] border border-[#E2E8F0] transition-all flex items-center justify-center gap-2 text-xs sm:text-sm"
                  >
                    <span>Explore Verticals</span>
                  </Link>
                </div>

                {/* Institutional Footprint Badges */}
                <div className="pt-4 border-t border-[#E2E8F0]">
                  <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block mb-2">
                    Accreditation &amp; SPV Governance
                  </span>
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="px-2 py-0.5 rounded bg-white text-[11px] font-bold text-[#3C5068] border border-[#E2E8F0] shadow-2xs">
                      MeitY (Govt. of India)
                    </span>
                    <span className="px-2 py-0.5 rounded bg-white text-[11px] font-bold text-[#3C5068] border border-[#E2E8F0] shadow-2xs">
                      MCCIA SPV
                    </span>
                    <span className="px-2 py-0.5 rounded bg-white text-[11px] font-bold text-[#3C5068] border border-[#E2E8F0] shadow-2xs">
                      NABL ISO 17025
                    </span>
                    <span className="px-2 py-0.5 rounded bg-white text-[11px] font-bold text-[#3C5068] border border-[#E2E8F0] shadow-2xs">
                      TÜV Rheinland
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Col: Prominent 7-Col High-Impact Facility Showcase */}
              <div className="lg:col-span-7 relative">
                {/* Glow Backdrop */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-[#4EAE87]/20 via-[#3C5068]/20 to-transparent rounded-[36px] blur-xl opacity-70" />

                <div className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-2xl border border-[#E2E8F0] group bg-slate-950 min-h-[380px] sm:min-h-[480px] lg:min-h-[520px] flex items-center justify-center">
                  <Image
                    src="/assets/images/hero/hero-facility-01.jpg"
                    alt="MECF Pune 10m Semi-Anechoic Chamber for EMI EMC testing"
                    fill
                    className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-700"
                    priority
                  />

                  {/* Top-Right Floating Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl border border-white/50 shadow-md flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#4EAE87] animate-pulse" />
                    <span className="text-xs font-bold text-[#3C5068]">
                      10m SAC (9 kHz – 40 GHz)
                    </span>
                  </div>

                  {/* Bottom Floating Stats Glass Card */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/92 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/60 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#3C5068] text-white flex items-center justify-center font-bold shrink-0">
                        10m
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-extrabold text-[#2D3748]">
                          Semi-Anechoic Chamber
                        </div>
                        <div className="text-[11px] text-[#64748B] font-medium">
                          Radiated &amp; Conducted EMI/EMC Testing
                        </div>
                      </div>
                    </div>

                    <div className="hidden sm:block h-8 w-px bg-[#E2E8F0]" />

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#4EAE87] text-white flex items-center justify-center font-bold shrink-0">
                        3.5T
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-extrabold text-[#2D3748]">
                          Vibration Shaker
                        </div>
                        <div className="text-[11px] text-[#64748B] font-medium">
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
      <section className="py-10 bg-gradient-to-r from-[#3C5068] via-[#2D3748] to-[#4EAE87] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="inline-block px-3 py-1 rounded bg-[#4EAE87] text-[11px] font-extrabold tracking-wider uppercase">
              {PROMO_OFFER.discountText} MSME &amp; MCCIA OFFER
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white !text-white" style={{ color: '#ffffff' }}>
              {PROMO_OFFER.title}
            </h2>
            <p className="text-xs sm:text-sm text-white/80 max-w-2xl">
              Avail massive subsidies on Test &amp; Certification Services and EMI/EMC testing at MECF Bhosari, Pune. Offer valid till <strong>31st August 2026</strong>.
            </p>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={() => openQuoteModal()}
              className="px-6 py-3 rounded-xl font-bold bg-[#4EAE87] hover:bg-[#3D9E78] text-white shadow-lg text-xs sm:text-sm transition-all cursor-pointer"
            >
              Claim 50% Off / Book Slot
            </button>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="px-5 py-3 rounded-xl font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs sm:text-sm transition-all"
            >
              Call {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
      </section>

      {/* 2. Stat Counter Strip */}
      <section className="py-12 bg-[#F0F4F8] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <StatCounter />
        </div>
      </section>

      {/* M-E-C-F Vision Framework Section */}
      <section className="py-16 sm:py-20 bg-[#FAF8F5] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#4EAE87]/15 text-[#3D9E78] border border-[#4EAE87]/30">
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
              <div
                key={pillar.letter}
                className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs hover:shadow-md transition-all flex flex-col group relative overflow-hidden pt-8"
              >
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[#4EAE87]/15 text-[#3D9E78] flex items-center justify-center font-black text-xl group-hover:bg-[#4EAE87] group-hover:text-white transition-all">
                  {pillar.letter}
                </div>
                <h3 className="text-lg font-bold text-[#2D3748] mb-2 pr-12">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed flex-1">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. What is MECF / Positioning Overview */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#5C82A6]/12 text-[#3C5068] border border-[#5C82A6]/25">
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
              <div className="rounded-3xl overflow-hidden shadow-xl border border-[#E2E8F0] group">
                <Image
                  src="/assets/images/hero/hero-facility-02.jpg"
                  alt="Engineers at work in MECF NABL Accredited testing laboratory"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Three Core USPs */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#2D3748]">
              Engineered for Speed, Precision, and Economy
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-3">
              MECF solves the testing bottleneck for India&apos;s electronics hardware ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#E2E8F0] shadow-xs hover:shadow-md transition-all flex flex-col group">
              <div className="mb-6 p-2 rounded-2xl bg-white border border-[#E2E8F0] w-fit group-hover:scale-105 transition-transform">
                <IsoCuttingEdge size={56} />
              </div>
              <h3 className="text-xl font-bold text-[#2D3748] tracking-tight mb-2">
                Cutting-Edge Testing
              </h3>
              <p className="text-sm text-[#64748B] leading-relaxed flex-1">
                State-of-the-art 10m Semi-Anechoic Chamber up to 40 GHz, Walk-in Climatic chambers (-70°C to +180°C), IP68 immersion tanks, and 3.5-Ton electrodynamic shaker tables.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#E2E8F0] shadow-xs hover:shadow-md transition-all flex flex-col group">
              <div className="mb-6 p-2 rounded-2xl bg-white border border-[#E2E8F0] w-fit group-hover:scale-105 transition-transform">
                <IsoFastTurnaround size={56} />
              </div>
              <h3 className="text-xl font-bold text-[#2D3748] tracking-tight mb-2">
                Timely &amp; Turnaround-Focused
              </h3>
              <p className="text-sm text-[#64748B] leading-relaxed flex-1">
                Eliminate 6-month overseas lab waiting queues. Rapid scheduling, express turnarounds for members, and on-site engineering debugging during sample testing.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#E2E8F0] shadow-xs hover:shadow-md transition-all flex flex-col group">
              <div className="mb-6 p-2 rounded-2xl bg-white border border-[#E2E8F0] w-fit group-hover:scale-105 transition-transform">
                <IsoCostEfficiency size={56} />
              </div>
              <h3 className="text-xl font-bold text-[#2D3748] tracking-tight mb-2">
                Market-Competitive Rates
              </h3>
              <p className="text-sm text-[#64748B] leading-relaxed flex-1">
                Non-profit Section 8 pricing structure funded to subsidize hardware R&amp;D in India. Up to 30% additional discount for contributing members.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Four Core Service Verticals */}
      <section className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
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
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-2 rounded-2xl bg-[#F0F4F8] border border-[#E2E8F0] group-hover:scale-105 transition-transform">
                        <IsoIconComp size={64} />
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#F0F4F8] text-[#3C5068] border border-[#E2E8F0]">
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
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Target Audience Infinite Marquee Section */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E2E8F0] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-12">
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
        <div className="space-y-6 relative overflow-hidden py-2">
          {/* Side Fading Gradients for Smooth Edges */}
          <div className="absolute top-0 bottom-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* Row 1: Moving RIGHT */}
          <div className="flex overflow-hidden">
            <div className="animate-marquee-right flex gap-6 px-3">
              {[
                ...TARGET_AUDIENCES.slice(0, 5),
                ...TARGET_AUDIENCES.slice(0, 5),
                ...TARGET_AUDIENCES.slice(0, 5),
                ...TARGET_AUDIENCES.slice(0, 5),
              ].map((item, idx) => (
                <div
                  key={`row1-${item.id}-${idx}`}
                  className="w-72 sm:w-80 shrink-0 p-6 rounded-2xl bg-white hover:bg-[#F0F4F8]/50 hover:shadow-md transition-all text-center flex flex-col items-center group cursor-pointer border border-[#E2E8F0]"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#4EAE87]/15 text-[#4EAE87] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Building2 className="w-6 h-6 text-[#4EAE87]" />
                  </div>
                  <h4 className="text-sm font-bold text-[#2D3748] mb-1.5 group-hover:text-[#4EAE87] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Moving LEFT */}
          <div className="flex overflow-hidden">
            <div className="animate-marquee-left flex gap-6 px-3">
              {[
                ...TARGET_AUDIENCES.slice(5, 10),
                ...TARGET_AUDIENCES.slice(5, 10),
                ...TARGET_AUDIENCES.slice(5, 10),
                ...TARGET_AUDIENCES.slice(5, 10),
              ].map((item, idx) => (
                <div
                  key={`row2-${item.id}-${idx}`}
                  className="w-72 sm:w-80 shrink-0 p-6 rounded-2xl bg-white hover:bg-[#F0F4F8]/50 hover:shadow-md transition-all text-center flex flex-col items-center group cursor-pointer border border-[#E2E8F0]"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#3C5068]/15 text-[#3C5068] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Building2 className="w-6 h-6 text-[#3C5068]" />
                  </div>
                  <h4 className="text-sm font-bold text-[#2D3748] mb-1.5 group-hover:text-[#3C5068] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Membership / Sponsorship Tiers Preview */}
      <section className="py-16 sm:py-24 bg-[#F0F4F8] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5C82A6]">
              Contributing Member Program
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#2D3748] mt-1">
              Contribute & Unlock Up to 30% Testing Rebates
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-3">
              Join the SPV industry consortium to secure priority turnaround times, guaranteed lab quotas, and substantial rate discounts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {MEMBERSHIP_TIERS.map((tier, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-3xl bg-white border flex flex-col justify-between apple-card-shadow relative ${
                  tier.isPopular
                    ? "border-[#4EAE87] ring-2 ring-[#4EAE87]/20"
                    : "border-[#E2E8F0]"
                }`}
              >
                {tier.isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[11px] font-bold bg-[#4EAE87] text-white tracking-wide uppercase">
                    Most Selected Tier
                  </div>
                )}

                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                    {tier.tierName}
                  </div>
                  <div className="text-3xl font-bold text-[#2D3748] mt-2">
                    {tier.contribution}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-[#4EAE87]/15 text-[#3D9E78] border border-[#4EAE87]/30">
                      {tier.discountRate}
                    </span>
                    <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-[#F4A261]/15 text-[#D97706] border border-[#F4A261]/30">
                      {tier.priorityTurnaround}
                    </span>
                  </div>

                  <ul className="mt-6 space-y-3 text-xs text-[#64748B] border-t border-[#F0F4F8] pt-6">
                    {tier.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#4EAE87] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 mt-8 border-t border-[#F0F4F8]">
                  <Link
                    href="/membership"
                    className="w-full py-3 rounded-xl font-semibold text-xs text-center block transition-all bg-[#F0F4F8] hover:bg-[#4EAE87] hover:text-white text-[#2D3748]"
                  >
                    View Membership Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 8. Operating Partners Logo & Profile Strip */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
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
              <div
                key={partner.id}
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Testimonials Placeholder (Per Prompt §7) */}
      <section className="py-16 bg-[#F0F4F8] border-b border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
          <div className="p-8 rounded-2xl bg-white border border-[#E2E8F0] apple-card-shadow">
            <div className="w-10 h-10 rounded-full bg-[#4EAE87]/15 text-[#4EAE87] flex items-center justify-center mx-auto mb-3">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#2D3748]">
              Client Testimonials &amp; Case Studies
            </h3>
            <p className="text-xs text-[#64748B] mt-2 max-w-md mx-auto">
              Verified feedback from electronics manufacturers, automotive Tier-1s, and medical hardware innovators testing at MECF Bhosari.
            </p>
            <div className="mt-4 p-4 rounded-xl bg-[#FAF8F5] border border-dashed border-[#E2E8F0] text-xs text-[#64748B]">
              Real client quotes and video case study testimonials are undergoing corporate review and will be published here.
            </div>
          </div>
        </div>
      </section>

      {/* 10. Statement CTA Banner */}
      <CtaBanner />
    </div>
  );
}
