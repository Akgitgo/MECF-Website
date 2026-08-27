import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SpecTable, { ColumnDef } from "@/components/SpecTable";
import ImageSlot from "@/components/ImagePlaceholder";
import CtaBanner from "@/components/CtaBanner";
import { ANECHOIC_CHAMBER_SPECS } from "@/data/siteData";
import { CheckCircle2 } from "lucide-react";
import CounterNumber from "@/components/CounterNumber";

export const metadata: Metadata = {
  title: "EMI / EMC 10m Semi-Anechoic Chamber — 9 kHz to 40 GHz Testing",
  description:
    "Explore MECF's 10-Metre Semi-Anechoic Chamber in Pune. Full radiated emissions and radiated immunity up to 40 GHz, 3-metre heavy duty turntable (3,000 kg), and CISPR 25 automotive testing.",
};

interface SacSpecRow {
  parameter: string;
  detail: string;
}

export default function EmiEmcPage() {
  const sacColumns: ColumnDef<SacSpecRow>[] = [
    {
      header: "System Parameter",
      cell: (row) => (
        <span className="font-semibold text-[#1D1D1F]">{row.parameter}</span>
      ),
      className: "w-1/3",
    },
    {
      header: "Technical Specification & Infrastructure Detail",
      cell: (row) => (
        <span className="text-sm text-[#0A2540]">{row.detail}</span>
      ),
    },
  ];

  const standardsCovered = [
    { code: "CISPR 11 / EN 55011", scope: "Industrial, Scientific and Medical (ISM) Radio-Frequency Equipment" },
    { code: "CISPR 32 / EN 55032", scope: "Electromagnetic Compatibility of Multimedia Equipment — Emission Requirements" },
    { code: "CISPR 35 / EN 55035", scope: "Electromagnetic Compatibility of Multimedia Equipment — Immunity Requirements" },
    { code: "CISPR 25 / ISO 11452", scope: "Vehicles, Boats and Internal Combustion Engines — Automotive Component EMC" },
    { code: "IEC 61000-4-3", scope: "Radiated, Radio-Frequency, Electromagnetic Field Immunity Test" },
    { code: "IEC 61000-4-4", scope: "Electrical Fast Transient / Burst Immunity Test" },
    { code: "IEC 61000-4-5", scope: "Surge Immunity Test (up to high-voltage industrial levels)" },
    { code: "IEC 61000-4-6", scope: "Immunity to Conducted Disturbances Induced by RF Fields" },
    { code: "IEC 61000-4-11", scope: "Voltage Dips, Short Interruptions and Voltage Variations Immunity" },
    { code: "MIL-STD-461G", scope: "Requirements for the Control of Electromagnetic Interference in Defense Subsystems" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        badge="Flagship Common Testing Infrastructure"
        title="EMI / EMC 10m Semi-Anechoic Chamber"
        description="A premier 10-Metre Semi-Anechoic Chamber in Western India, rated up to 40 GHz for commercial, automotive, medical, and aerospace electromagnetic compatibility testing."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
      />

      {/* Special Offer Bar */}
      <section className="py-5 bg-[#2F4054] text-white border-b border-white/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-[#2F9C78] text-white text-[11px] font-extrabold uppercase">
              50% DISCOUNT OFFER
            </span>
            <span className="text-xs sm:text-sm font-bold text-white">
              Up to 50% Discount for MSMEs &amp; MCCIA Members on EMI/EMC Chamber Services (Valid till 31st August 2026)
            </span>
          </div>
          <a
            href="/contact"
            className="px-4 py-2 rounded-lg bg-[#2F9C78] text-white font-bold text-xs hover:bg-[#247F62] transition-colors shrink-0"
          >
            Claim Offer / Book Chamber
          </a>
        </div>
      </section>

      {/* 1. Chamber Overview */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E7E2D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#5C82A6]">
                Chamber Architecture &amp; Operating Partner: TÜV Rheinland (India) Pvt. Ltd.
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#263241] leading-tight">
                Designed for High-Power, High-Frequency Compliance Testing
              </h2>
              <p className="text-base text-[#667085] leading-relaxed">
                MECF&apos;s 10-Metre Semi-Anechoic Chamber (SAC), operated by global TIC leader <strong>TÜV Rheinland (India) Pvt. Ltd.</strong>, is engineered to meet the stringent emission and immunity testing requirements of modern electronics, electric vehicles (EVs), motor drives, telecom infrastructure, and defense subsystems.
              </p>
              <p className="text-base text-[#667085] leading-relaxed">
                Lined with high-performance ferrite tiles and hybrid pyramidal absorbers, the chamber delivers an exceptionally quiet RF environment across 9 kHz to 40 GHz. Its automated 3-metre diameter turntable supports equipment under test (EUT) weighing up to 3,000 kg, enabling testing of complete vehicle subsystems, industrial power cabinets, and large medical machines.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#FBFAF8] border border-[#E7E2D9]">
                  <div className="text-xs font-bold text-[#2F4054] uppercase">Frequency Range</div>
                  <div className="text-base font-bold text-[#5C82A6] mt-1">9 kHz – 40 GHz</div>
                  <div className="text-[11px] text-[#667085] mt-0.5">Radiated emissions & immunity</div>
                </div>
                <div className="p-4 rounded-xl bg-[#FBFAF8] border border-[#E7E2D9]">
                  <div className="text-xs font-bold text-[#2F4054] uppercase">Turntable Load</div>
                  <div className="text-base font-bold text-[#5C82A6] mt-1">
                    <CounterNumber value={3000} suffix=" kg (3m Ø)" />
                  </div>
                  <div className="text-[11px] text-[#667085] mt-0.5">Heavy industrial / EV subsystems</div>
                </div>
                <div className="p-4 rounded-xl bg-[#FBFAF8] border border-[#E7E2D9]">
                  <div className="text-xs font-bold text-[#2F4054] uppercase">Antenna Mast</div>
                  <div className="text-base font-bold text-[#5C82A6] mt-1">1m – 4m Height</div>
                  <div className="text-[11px] text-[#667085] mt-0.5">Automated polar scan</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="app-store-card rounded-3xl overflow-hidden shadow-xl border border-[#E7E2D9]">
                <ImageSlot
                  src="/assets/images/facility/anechoic-chamber.jpg"
                  alt="MECF 10m Semi-Anechoic Chamber Ferrite Tiles and Turntable"
                  width={800}
                  height={600}
                  badge="9 kHz – 40 GHz SAC"
                  overlayTitle="10m Semi-Anechoic Chamber"
                  overlaySub="TÜV Rheinland Partnered Lab"
                  recommendedDimensions="800×600 px"
                  aspectRatio="aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Technical Specifications Table */}
      <section className="py-16 bg-[#F6F4F0] border-b border-[#E7E2D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5C82A6]">
              Facility Parameters
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#263241] mt-1">
              Chamber Specifications & Support Infrastructure
            </h2>
            <p className="text-sm text-[#667085] mt-2">
              Equipped with independent control rooms, shielded diagnostic suites, and certified RF accessories.
            </p>
          </div>

          <SpecTable
            columns={sacColumns}
            data={ANECHOIC_CHAMBER_SPECS}
            caption="10-Metre Semi-Anechoic Chamber Technical Specifications"
          />
        </div>
      </section>

      {/* 3. Standards Matrix */}
      <section className="py-16 bg-white border-b border-[#E7E2D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5C82A6]">
              EMC Test Standards
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#263241] mt-1">
              Applicable EMI / EMC Compliance Standards
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {standardsCovered.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#FBFAF8] border border-[#E7E2D9] flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-[#2F9C78] shrink-0 mt-0.5" />
                <div>
                  <div className="font-mono text-xs font-bold text-[#5C82A6]">
                    {item.code}
                  </div>
                  <div className="text-xs text-[#1D1D1F] mt-0.5 leading-normal">
                    {item.scope}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Reserve the 10m Semi-Anechoic Chamber"
        subtitle="Book daytime or weekend chamber slots for pre-compliance troubleshooting or formal certification testing."
      />
    </div>
  );
}
