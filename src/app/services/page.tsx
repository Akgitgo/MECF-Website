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
  ThermometerSnowflake,
  Gauge,
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
      <section className="py-16 sm:py-20 bg-white border-b border-[#E7E2D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2F9C78]">
              Pay-for-Use Flexibility
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#263241] mt-1">
              High-capital testing infrastructure, available on demand.
            </h2>
            <p className="text-base text-[#667085] mt-3 leading-8">
              Reserve the facility you need without building your own chamber, shaker, or specialist lab. MECF supports hourly, daily, and project-based testing workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#FBFAF8] border border-[#E7E2D9]">
              <div className="w-10 h-10 rounded-xl bg-[#2F4054]/10 text-[#2F4054] flex items-center justify-center mb-4">
                <ThermometerSnowflake className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#263241]">
                Climatic & Mechanical Stress
              </h3>
              <p className="text-xs text-[#667085] mt-2 leading-6">
                Validate against climatic, transport, automotive and rugged operating profiles.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FBFAF8] border border-[#E7E2D9]">
              <div className="w-10 h-10 rounded-xl bg-[#2F4054]/10 text-[#2F4054] flex items-center justify-center mb-4">
                <Radio className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#263241]">
                Full-Scale 10m Anechoic SAC
              </h3>
              <p className="text-xs text-[#667085] mt-2 leading-6">
                Conduct radiated emissions and immunity from 9 kHz to 40 GHz.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FBFAF8] border border-[#E7E2D9]">
              <div className="w-10 h-10 rounded-xl bg-[#2F4054]/10 text-[#2F4054] flex items-center justify-center mb-4">
                <Gauge className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#263241]">
                NABL Validated Reports
              </h3>
              <p className="text-xs text-[#667085] mt-2 leading-6">
                Generate traceable documentation for domestic and export compliance pathways.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Four Detailed Vertical Blocks */}
      <section className="py-16 sm:py-24 bg-[#F6F4F0] border-b border-[#E7E2D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
          {verticals.map((vertical, idx) => {
            const Icon = vertical.icon;
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={vertical.id}
                id={vertical.id}
                className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E7E2D9] apple-card-shadow scroll-mt-24 premium-card"
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
                      <span className="px-3 py-1 rounded-xl text-xs font-semibold bg-[#FBFAF8] text-[#263241] border border-[#E7E2D9]">
                        {vertical.badge}
                      </span>
                    </div>

                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-[#5C82A6]">
                        Operating Partner: {vertical.partner}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#263241] mt-1">
                        {vertical.title}
                      </h3>
                    </div>

                    <p className="text-sm text-[#667085] leading-7">
                      {vertical.description}
                    </p>

                    <div className="space-y-2.5 pt-2">
                      {vertical.specs.map((spec, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#2F9C78] shrink-0 mt-0.5" />
                          <span className="text-xs text-[#263241] leading-normal">{spec}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4">
                      <Link
                        href={vertical.href}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs text-white bg-[#2F9C78] hover:bg-[#247F62] transition-all btn-premium"
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
                      badge={vertical.badge}
                      overlayTitle={vertical.title}
                      overlaySub={`Operating Partner: ${vertical.partner}`}
                      recommendedDimensions="800×600 px"
                      aspectRatio="aspect-[4/3]"
                      className="shadow-md rounded-3xl"
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
