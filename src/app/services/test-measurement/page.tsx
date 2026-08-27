import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SpecTable, { ColumnDef } from "@/components/SpecTable";
import ImageSlot from "@/components/ImagePlaceholder";
import CtaBanner from "@/components/CtaBanner";
import { Wrench, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Test & Measurement Lab & Equipment Rental — Cyronics Instruments Partnership",
  description:
    "Explore MECF's Test & Measurement vertical operated in partnership with Cyronics Instruments. High-end equipment rental, pre-compliance debugging, and calibration services.",
};

interface EquipmentRentalRow {
  instrument: string;
  keySpecs: string;
  typicalApplication: string;
}

export default function TestMeasurementPage() {
  const equipmentList: EquipmentRentalRow[] = [
    {
      instrument: "High-Bandwidth Digital Storage Oscilloscopes (DSO)",
      keySpecs: "Up to 4 GHz Bandwidth, 20 GSa/s real-time sampling, multi-channel mixed signal probing",
      typicalApplication: "High-speed digital bus verification, power rail ripple, PCIe/USB/CAN signal integrity",
    },
    {
      instrument: "Real-Time Spectrum Analyzers & EMI Receivers",
      keySpecs: "9 kHz to 26.5 GHz / 40 GHz, tracking generators, pre-amplifiers, CISPR quasi-peak detectors",
      typicalApplication: "Pre-compliance radiated & conducted emission debugging, near-field sniffing",
    },
    {
      instrument: "Precision Multi-Channel Power Analyzers",
      keySpecs: "0.05% measurement accuracy, DC to 1 MHz bandwidth, harmonics & flicker analysis",
      typicalApplication: "EV inverter efficiency, motor drive power factor, standby power (IEC 62301)",
    },
    {
      instrument: "Vector Network Analyzers (VNA)",
      keySpecs: "Dual-port / 4-port S-parameter measurements up to 20 GHz, time-domain reflectometry (TDR)",
      typicalApplication: "Antenna tuning, RF impedance matching, PCB trace loss & crosstalk profiling",
    },
    {
      instrument: "Programmable AC/DC Electronic Loads & Power Sources",
      keySpecs: "Up to 15 kW regenerative AC/DC source, programmable voltage dips, harmonic synthesis",
      typicalApplication: "Power supply stress testing, battery cycling, grid-tie simulator compliance",
    },
  ];

  const rentalColumns: ColumnDef<EquipmentRentalRow>[] = [
    {
      header: "Test Instrument Category",
      cell: (row) => (
        <span className="font-semibold text-[#1D1D1F]">{row.instrument}</span>
      ),
      className: "w-1/3",
    },
    {
      header: "Technical Capabilities & Key Specs",
      cell: (row) => (
        <span className="text-xs text-[#0A2540]">{row.keySpecs}</span>
      ),
    },
    {
      header: "Typical Application",
      cell: (row) => (
        <span className="text-xs text-[#6E6E73]">{row.typicalApplication}</span>
      ),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        badge="Operating Partner: Cyronics Instruments Private Limited"
        title="Test & Measurement Vertical"
        description="High-precision electronic test instrumentation, on-demand equipment rental, pre-compliance debugging, and NABL-traceable calibration."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
      />

      {/* 1. Overview */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E7E2D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#5C82A6]">
                Cyronics Partnership Overview
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#263241] leading-tight">
                Democratizing High-End Electronics Diagnostic Tools
              </h2>
              <p className="text-base text-[#667085] leading-relaxed">
                R&D hardware development requires top-tier diagnostic instruments that are often prohibitively expensive to purchase outright for single product cycles. In partnership with Pune-based precision electronics pioneer Cyronics Instruments, MECF provides flexible instrument access.
              </p>
              <p className="text-base text-[#667085] leading-relaxed">
                Whether you need a 4 GHz oscilloscope for 3 days of high-speed bus debugging, an RF spectrum analyzer for near-field probe troubleshooting, or certified calibration for your internal quality meters, MECF delivers instant availability.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#FBFAF8] border border-[#E7E2D9]">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#2F4054] uppercase">
                    <Clock className="w-4 h-4 text-[#5C82A6]" />
                    Flexible Rental Durations
                  </div>
                  <div className="text-xs text-[#667085] mt-1">
                    Daily, weekly, or project-based on-site lab equipment rental.
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-[#FBFAF8] border border-[#E7E2D9]">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#2F4054] uppercase">
                    <Wrench className="w-4 h-4 text-[#5C82A6]" />
                    Engineering Debugging Support
                  </div>
                  <div className="text-xs text-[#667085] mt-1">
                    On-bench assistance from experienced test engineers.
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="app-store-card rounded-3xl overflow-hidden shadow-xl border border-[#E7E2D9]">
                <ImageSlot
                  src="/assets/images/facility/smt-line.jpg"
                  alt="Cyronics Test & Measurement Benches at MECF Bhosari"
                  width={800}
                  height={600}
                  badge="On-Demand Rental & SMT"
                  overlayTitle="Cyronics Precision Lab"
                  overlaySub="Advanced Instrumentation Bench"
                  recommendedDimensions="800×600 px"
                  aspectRatio="aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Equipment Rental Specs Table */}
      <section className="py-16 bg-[#F6F4F0] border-b border-[#E7E2D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5C82A6]">
              Equipment Catalog
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#263241] mt-1">
              On-Demand Rental & Diagnostic Instruments
            </h2>
            <p className="text-sm text-[#667085] mt-2">
              All rental equipment is calibrated and maintained to stringent NABL traceability standards.
            </p>
          </div>

          <SpecTable
            columns={rentalColumns}
            data={equipmentList}
            caption="Test & Measurement Equipment Portfolio"
          />
        </div>
      </section>

      {/* 3. Core Service Pillars */}
      <section className="py-16 bg-white border-b border-[#E7E2D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-[#FBFAF8] border border-[#E7E2D9]">
              <h3 className="text-lg font-bold text-[#263241] mb-2">
                1. Test &amp; Measurement Equipment Rental
              </h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Rent top-brand oscilloscopes, network analyzers, and power sources for in-lab testing at MECF or deploy them temporarily to your R&amp;D facility.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#FBFAF8] border border-[#E7E2D9]">
              <h3 className="text-lg font-bold text-[#263241] mb-2">
                2. Solar Simulation &amp; Monitoring
              </h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Advanced solar simulation, IV curve profiling, and continuous environmental monitoring for solar PV and renewable energy electronics.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#FBFAF8] border border-[#E7E2D9]">
              <h3 className="text-lg font-bold text-[#263241] mb-2">
                3. PCB, SMT &amp; BGA Soldering / Rework
              </h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Precision PCB hand soldering, Surface Mount Technology (SMT) assembly, and Ball Grid Array (BGA) rework stations for prototype modifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Inquire About Instrument Rental & Calibration"
        subtitle="Check immediate instrument availability or request custom rental rate cards."
      />
    </div>
  );
}
