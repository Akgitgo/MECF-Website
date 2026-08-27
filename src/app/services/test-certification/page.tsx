import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SpecTable, { ColumnDef } from "@/components/SpecTable";
import ImageSlot from "@/components/ImagePlaceholder";
import CtaBanner from "@/components/CtaBanner";
import {
  SAFETY_STANDARDS,
  ENVIRONMENTAL_TEST_SPECS,
  MECHANICAL_IP_SPECS,
  COMBINED_TEST_SPECS,
} from "@/data/siteData";
import { ShieldCheck, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Test & Certification Lab — Safety, IP68, Climatic & Vibration Testing",
  description:
    "Explore MECF's Test & Certification vertical operated in partnership with TÜV Rheinland India. Complete specs for IEC Safety, Climatic chambers, IP68 water/dust, and 3.5-Ton vibration shaker testing.",
};

interface SafetyRow {
  standard: string;
  productCategory: string;
}

interface EnvRow {
  testName: string;
  chamberSize: string;
  tempRange: string;
  humidityRange: string;
  standard: string;
}

interface MechRow {
  testType: string;
  specification: string;
  standard: string;
}

interface CombinedRow {
  testType: string;
  chamberSize: string;
  capabilities: string;
  targetApplication: string;
}

export default function TestCertificationPage() {
  const safetyCols: ColumnDef<SafetyRow>[] = [
    {
      header: "Standard Code",
      cell: (row) => (
        <span className="font-mono font-bold text-[#0066FF]">{row.standard}</span>
      ),
    },
    {
      header: "Product Category & Scope",
      cell: (row) => (
        <span className="font-medium text-[#1D1D1F]">{row.productCategory}</span>
      ),
    },
  ];

  const envCols: ColumnDef<EnvRow>[] = [
    {
      header: "Test Type",
      cell: (row) => (
        <span className="font-semibold text-[#1D1D1F]">{row.testName}</span>
      ),
    },
    { header: "Chamber Dimensions", accessorKey: "chamberSize" },
    {
      header: "Temperature Range",
      cell: (row) => (
        <span className="font-mono text-xs font-semibold text-[#0A2540]">{row.tempRange}</span>
      ),
    },
    { header: "Humidity / RH", accessorKey: "humidityRange" },
    {
      header: "Applicable Standard",
      cell: (row) => (
        <span className="font-mono text-xs text-[#0066FF]">{row.standard}</span>
      ),
    },
  ];

  const mechCols: ColumnDef<MechRow>[] = [
    {
      header: "Mechanical / IP Parameter",
      cell: (row) => (
        <span className="font-semibold text-[#1D1D1F]">{row.testType}</span>
      ),
    },
    {
      header: "Technical Specification & Capacity",
      cell: (row) => (
        <span className="text-xs text-[#1D1D1F]">{row.specification}</span>
      ),
    },
    {
      header: "Governing Standard",
      cell: (row) => (
        <span className="font-mono text-xs text-[#0066FF]">{row.standard}</span>
      ),
    },
  ];

  const combinedCols: ColumnDef<CombinedRow>[] = [
    {
      header: "Combined Test Matrix",
      cell: (row) => (
        <span className="font-semibold text-[#1D1D1F]">{row.testType}</span>
      ),
    },
    { header: "Test Chamber Size", accessorKey: "chamberSize" },
    {
      header: "Stress Capabilities",
      cell: (row) => (
        <span className="text-xs text-[#1D1D1F]">{row.capabilities}</span>
      ),
    },
    {
      header: "Target Applications",
      cell: (row) => (
        <span className="text-xs text-[#6E6E73]">{row.targetApplication}</span>
      ),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        badge="Operating Partner: TÜV Rheinland India Pvt. Ltd."
        title="Test & Certification Vertical"
        description="Comprehensive physical stress screening, electrical safety standards, Ingress Protection up to IP68, and combined electrodynamic vibration testing."
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
              Up to 50% Discount for MSMEs &amp; MCCIA Members on Test &amp; Certification Services (Valid till 31st August 2026)
            </span>
          </div>
          <a
            href="/contact"
            className="px-4 py-2 rounded-lg bg-[#2F9C78] text-white font-bold text-xs hover:bg-[#247F62] transition-colors shrink-0"
          >
            Claim Offer / Book Slot
          </a>
        </div>
      </section>

      {/* 1. Vertical Overview */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E7E2D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#5C82A6]">
                Operating Partner: TÜV Rheinland (India) Pvt. Ltd.
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#263241] leading-tight">
                Globally Accredited Product Safety &amp; Reliability Testing
              </h2>
              <p className="text-base text-[#667085] leading-relaxed">
                MECF&apos;s Test &amp; Certification vertical is operated in partnership with <strong>TÜV Rheinland (India) Pvt. Ltd.</strong>, providing Indian manufacturers with direct access to NABL-accredited testing for international market access.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-xl bg-[#FBFAF8] border border-[#E7E2D9] flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-[#2F9C78] shrink-0" />
                  <div className="text-xs">
                    <div className="font-bold text-[#263241]">BIS CRS Mandatory Safety</div>
                    <div className="text-[#667085]">IS 13252 / IS 616 Compliance</div>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-[#FBFAF8] border border-[#E7E2D9] flex items-center gap-3">
                  <Award className="w-6 h-6 text-[#5C82A6] shrink-0" />
                  <div className="text-xs">
                    <div className="font-bold text-[#263241]">Ingress Protection up to IP68</div>
                    <div className="text-[#667085]">IEC 60529 / ISO 20653 Standards</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="app-store-card rounded-3xl overflow-hidden shadow-xl border border-[#E7E2D9]">
                <ImageSlot
                  src="/assets/images/facility/environmental-lab.jpg"
                  alt="Environmental and Safety Testing Laboratory at MECF"
                  width={800}
                  height={600}
                  badge="IP68 & 3.5T Vibration"
                  overlayTitle="Environmental Stress Lab"
                  overlaySub="NABL & TÜV Rheinland Accredited"
                  recommendedDimensions="800×600 px"
                  aspectRatio="aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1. Safety Standards Table */}
      <section className="py-16 bg-[#F6F4F0] border-b border-[#E7E2D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5C82A6]">
              Category 1
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#263241] mt-1">
              Electrical Product Safety Standards
            </h2>
            <p className="text-sm text-[#667085] mt-2">
              Mandatory safety compliance testing for information technology, laboratory, audio/video, and household electrical equipment.
            </p>
          </div>

          <SpecTable
            columns={safetyCols}
            data={SAFETY_STANDARDS}
            caption="Product Safety Testing Standards"
          />
        </div>
      </section>

      {/* 2. Environmental & Climatic Specifications Table */}
      <section className="py-16 bg-white border-b border-[#E7E2D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5C82A6]">
              Category 2
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#263241] mt-1">
              Environmental & Reliability Test Chambers
            </h2>
            <p className="text-sm text-[#667085] mt-2">
              Walk-in (2000×2000×2000mm) and compact reach-in climatic chambers supporting thermal extremes from -75°C to +200°C with controlled relative humidity and altitude depressurization.
            </p>
          </div>

          <SpecTable
            columns={envCols}
            data={ENVIRONMENTAL_TEST_SPECS}
            caption="Environmental & Climatic Testing Matrix"
          />
        </div>
      </section>

      {/* 3. Ingress Protection & Mechanical Test Specs */}
      <section className="py-16 bg-[#F6F4F0] border-b border-[#E7E2D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5C82A6]">
              Category 3
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#263241] mt-1">
              Ingress Protection (IP68) & 3.5-Ton Vibration Shaker
            </h2>
            <p className="text-sm text-[#667085] mt-2">
              Dust and continuous water immersion testing up to IP68, along with 3.5 Ton Force electrodynamic vibration, mechanical shock, and repetitive bump test profiles.
            </p>
          </div>

          <SpecTable
            columns={mechCols}
            data={MECHANICAL_IP_SPECS}
            caption="Ingress Protection & Mechanical Durability Specs"
          />
        </div>
      </section>

      {/* 4. Combined Environmental + Mechanical Tests */}
      <section className="py-16 bg-white border-b border-[#E7E2D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5C82A6]">
              Category 4
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#263241] mt-1">
              Combined Environmental + Mechanical Testing
            </h2>
            <p className="text-sm text-[#667085] mt-2">
              Simultaneous mechanical vibration/shock stimulation during thermal extreme cycling (-60°C to +150°C) for mission-critical automotive ECUs, aerospace avionics, and defense electronics.
            </p>
          </div>

          <SpecTable
            columns={combinedCols}
            data={COMBINED_TEST_SPECS}
            caption="Combined Stress Screening Specifications"
          />
        </div>
      </section>

      <CtaBanner
        title="Schedule Test & Certification Slot"
        subtitle="Submit your sample specifications or discuss test standards with TÜV Rheinland and MECF engineers."
      />
    </div>
  );
}
