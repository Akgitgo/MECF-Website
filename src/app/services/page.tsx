import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import ImageSlot from "@/components/ImagePlaceholder";
import {
  ShieldCheck,
  Radio,
  Sliders,
  Cpu,
  ArrowRight,
  CheckCircle2,
  Layers,
  Zap,
  ThermometerSnowflake,
  Gauge,
  Boxes,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Testing Services & Verticals Overview",
  description:
    "Explore MECF's 4 core electronics testing verticals: Safety & Environmental Certification, 10m Semi-Anechoic EMI/EMC Chamber, Test & Measurement Rental, and Design Simulation.",
};

export default function ServicesPage() {
  const verticals = [
    {
      id: "test-certification",
      title: "Test & Certification Vertical",
      partner: "TÜV Rheinland (India) Pvt. Ltd.",
      href: "/services/test-certification",
      icon: ShieldCheck,
      badge: "NABL / BIS Mandatory / CE / FCC",
      description:
        "Comprehensive electrical product safety testing, IP rating (IPX1-IPX8 water & IP5X-IP6X dust), environmental stress screening, photometry, and 3.5-Ton electrodynamic shaker vibration testing.",
      specs: [
        "Product Safety (IEC 60950-1, IEC 61010-1, IEC 62368-1, IEC 60335-1)",
        "Climatic Environmental Chambers (-70°C to +180°C, 10%–98% RH)",
        "Ingress Protection IPX1–IPX8 (Water Drip/Spray/Immersion) and IP5X/IP6X (Dust Chamber)",
        "3.5-Ton Force Vibration Shaker (5 Hz – 3000 Hz) & Mechanical Shock",
        "Photometry Testing & Electrical Safety & Reliability Lab",
      ],
      image: "/assets/images/facility/environmental-lab.jpg",
    },
    {
      id: "emi-emc",
      title: "EMI / EMC 10m Anechoic Chamber",
      partner: "TÜV Rheinland (India) Pvt. Ltd.",
      href: "/services/emi-emc",
      icon: Radio,
      badge: "9 kHz to 40 GHz Radiated Range",
      description:
        "World-class 10-Metre Semi-Anechoic Chamber for radiated emissions, radiated immunity, 3-phase voltage dips & interruptions, harmonics, flicker, ESD, and automotive transient systems.",
      specs: [
        "10-Metre Semi-Anechoic Chamber with ferrite tiles and hybrid absorbers (9 kHz to 40 GHz)",
        "Automated 3-metre heavy-duty turntable (3,000 kg load capacity) & 1m–4m antenna mast",
        "3 PH Voltage Dips & Interruptions, Harmonic Current Emissions, Flicker Emissions",
        "Electrostatic Discharge (ESD), Magnetic Field Immunity, EFT & Surge Immunity",
        "Automotive Transient System & Radiated / Conducted Susceptibility",
      ],
      image: "/assets/images/facility/emi-emc-lab.jpg",
    },
    {
      id: "test-measurement",
      title: "Test & Measurement Vertical",
      partner: "Cryonics Instruments Pvt. Ltd.",
      href: "/services/test-measurement",
      icon: Sliders,
      badge: "On-Demand Rental & Solar Simulation",
      description:
        "High-performance RF instrument access, pre-compliance EMI testing, customized test solutions, solar simulation & monitoring, and PCB, SMT & BGA soldering.",
      specs: [
        "Advanced Measurement Instrumentation & On-Demand Equipment Rental",
        "Pre-Compliance Testing for EMI & Diagnostic Probing",
        "Customized Test Solutions for R&D Bench Setups",
        "Solar Simulation and Environmental Monitoring",
        "PCB Soldering, SMT Soldering & BGA Soldering / Rework Capabilities",
      ],
      image: "/assets/images/facility/smt-line.jpg",
    },
    {
      id: "design-simulation",
      title: "Design Centre Vertical",
      partner: "3D Engineering Automation LLP",
      href: "/services/design-simulation",
      icon: Cpu,
      badge: "Ansys Electronic Suite / PCB / FPGA",
      description:
        "Advanced Ansys Electronic Enterprises suite simulation, 3D EM analysis, PCB & FPGA design tools, EDA tools, embedded development tools, and benchtop hardware instruments.",
      specs: [
        "Ansys Electronic Enterprises Suite & 3D Electromagnetic Simulation",
        "PCB Design Tools, FPGA Design Tools & EDA Toolchains",
        "Embedded Development Tools & Signal Integrity Verification",
        "Hardware Tools & Equipment: DMM, DSO, Benchtop DMM, Programmable Power Supplies",
        "Soldering Stations & Prototype Design Verification",
      ],
      image: "/assets/images/facility/design-prototype-center.jpg",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        badge="Common Facility Centre Capabilities"
        title="Testing Services & Facilities"
        description="A full spectrum of electronics testing, environmental stress screening, EMI/EMC compliance, and virtual prototyping under one roof in Pune."
        breadcrumbs={[{ label: "Home", href: "/" }]}
      />

      {/* 1. Pay-Per-Use Model Intro */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5C82A6]">
              Pay-for-Use Flexibility
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#2D3748] mt-1">
              Zero Heavy Capex. World-Class Infrastructure on Demand.
            </h2>
            <p className="text-base text-[#64748B] mt-3 leading-relaxed">
              MECF operates on an open-access model designed to eliminate barrier-to-entry testing costs for Indian hardware manufacturers. Reserve lab slots on an hourly, daily, or project basis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E2E8F0]">
              <div className="w-10 h-10 rounded-xl bg-[#5C82A6]/12 text-[#3C5068] flex items-center justify-center mb-4">
                <ThermometerSnowflake className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#2D3748]">
                Climatic & Mechanical Stress
              </h3>
              <p className="text-xs text-[#64748B] mt-2 leading-relaxed">
                From walk-in humidity rooms to thermal shock basket transfers and 3.5T shaker tables, validate your product against harsh automotive and aerospace profiles.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E2E8F0]">
              <div className="w-10 h-10 rounded-xl bg-[#5C82A6]/12 text-[#3C5068] flex items-center justify-center mb-4">
                <Radio className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#2D3748]">
                Full-Scale 10m Anechoic SAC
              </h3>
              <p className="text-xs text-[#64748B] mt-2 leading-relaxed">
                Test products weighing up to 3,000 kg with an automated 3m turntable. Conduct radiated emissions and immunity from 9 kHz up to 40 GHz.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E2E8F0]">
              <div className="w-10 h-10 rounded-xl bg-[#5C82A6]/12 text-[#3C5068] flex items-center justify-center mb-4">
                <Gauge className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#2D3748]">
                NABL Validated Reports
              </h3>
              <p className="text-xs text-[#64748B] mt-2 leading-relaxed">
                Test reports issued with full NABL traceability and international bilateral recognition for seamless global market entry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Four Detailed Vertical Blocks */}
      <section className="py-16 sm:py-24 bg-[#F0F4F8] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
          {verticals.map((vertical, idx) => {
            const Icon = vertical.icon;
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={vertical.id}
                id={vertical.id}
                className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E2E8F0] apple-card-shadow scroll-mt-24"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={`lg:col-span-7 space-y-6 ${isReversed ? "lg:order-2" : ""}`}>
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#5C82A6]/12 text-[#3C5068] flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#FAF8F5] text-[#2D3748] border border-[#E2E8F0]">
                        {vertical.badge}
                      </span>
                    </div>

                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-[#5C82A6]">
                        Operating Partner: {vertical.partner}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#2D3748] mt-1">
                        {vertical.title}
                      </h3>
                    </div>

                    <p className="text-sm text-[#64748B] leading-relaxed">
                      {vertical.description}
                    </p>

                    <div className="space-y-2.5 pt-2">
                      {vertical.specs.map((spec, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#4EAE87] shrink-0 mt-0.5" />
                          <span className="text-xs text-[#2D3748] leading-normal">{spec}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4">
                      <Link
                        href={vertical.href}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs text-white bg-[#4EAE87] hover:bg-[#3D9E78] transition-all shadow-xs"
                      >
                        <span>View Technical Specs & Test Matrix</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  <div className={`lg:col-span-5 ${isReversed ? "lg:order-1" : ""}`}>
                    <ImageSlot
                      src={vertical.image}
                      alt={vertical.title}
                      width={800}
                      height={600}
                      recommendedDimensions="800×600 px"
                      aspectRatio="aspect-[4/3]"
                      className="shadow-sm"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CtaBanner
        title="Discuss Your Test Requirements With Us"
        subtitle="Book a slot or request a tailored rate quotation for your sample matrix."
      />
    </div>
  );
}
