import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SpecTable, { ColumnDef } from "@/components/SpecTable";
import ImageSlot from "@/components/ImagePlaceholder";
import CtaBanner from "@/components/CtaBanner";
import { FUNDING_BREAKDOWN, SITE_CONFIG } from "@/data/siteData";
import {
  CheckCircle2,
  Calendar,
  Building,
  Landmark,
  Layers,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The EMC Scheme & MECF Origin",
  description:
    "Explore the history of the Brownfield Electronics Manufacturing Cluster (EMC) in Pune, MeitY approval in Dec 2017, Section 8 SPV incorporation, and the ₹67 Cr funding breakdown.",
};

interface FundingItem {
  source: string;
  amount: string;
  percentage: string;
  note: string;
}

export default function BackgroundPage() {
  const fundingColumns: ColumnDef<FundingItem>[] = [
    {
      header: "Funding / Resource Source",
      cell: (row) => (
        <span className="font-semibold text-[#2D3748]">{row.source}</span>
      ),
    },
    {
      header: "Contribution Amount",
      cell: (row) => (
        <span className="font-mono font-bold text-[#5C82A6]">{row.amount}</span>
      ),
    },
    {
      header: "Share (%)",
      cell: (row) => (
        <span className="font-medium text-[#3C5068]">{row.percentage}</span>
      ),
    },
    {
      header: "Purpose / Allocation Details",
      cell: (row) => (
        <span className="text-xs text-[#64748B]">{row.note}</span>
      ),
    },
  ];

  const milestones = [
    {
      date: "December 2013",
      title: "Brownfield Cluster Identification",
      desc: "Pune identified as a high-potential Brownfield Electronics Manufacturing Cluster under the National Policy on Electronics.",
    },
    {
      date: "October 2017",
      title: "Section 8 SPV Incorporation",
      desc: "MCCIA leads the incorporation of MCCIA Electronic Cluster Foundation as a dedicated not-for-profit Special Purpose Vehicle (SPV).",
    },
    {
      date: "December 2017",
      title: "Formal MeitY & State Approval",
      desc: "Ministry of Electronics & IT (MeitY), Government of India formally sanctions the CFC with ₹50 Cr grant-in-aid alongside Maharashtra Government support.",
    },
    {
      date: "Operational Phase",
      title: "₹71 Cr World-Class Testing CFC",
      desc: "Installation of the 10m Semi-Anechoic Chamber, 3.5T vibration shaker, climatic chambers, and partnership integration with TÜV Rheinland and Cyronics.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        badge="MeitY EMC Scheme Origin & Policy Context"
        title="Background & The EMC Scheme"
        description="How MCCIA and the Government of India built Pune's premier electronics common facility centre to eliminate testing hurdles for domestic manufacturers."
        breadcrumbs={[{ label: "Home", href: "/" }]}
      />

      {/* 1. Origin Narrative */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#5C82A6]">
                The Genesis of MECF
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#2D3748] leading-tight">
                Addressing India&apos;s Electronics Capital & Compliance Bottleneck
              </h2>
              <p className="text-base text-[#64748B] leading-relaxed">
                Prior to the establishment of MECF, electronics hardware manufacturers, automotive innovators, and medical device developers in the Pune industrial region faced severe testing constraints. Setting up a 10m Semi-Anechoic Chamber or high-tonnage electrodynamic vibration system requires tens of crores in capex, rendering in-house validation impossible for MSMEs and startups.
              </p>
              <p className="text-base text-[#64748B] leading-relaxed">
                To solve this systemic bottleneck, the Mahratta Chamber of Commerce, Industries and Agriculture (MCCIA) spearheaded a collective industry proposal under the Electronics Manufacturing Cluster (EMC) Scheme framed by the Ministry of Electronics and Information Technology (MeitY), Government of India.
              </p>

              <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E2E8F0] space-y-4">
                <h3 className="text-base font-bold text-[#3C5068]">
                  Reconciliation of Facility Investment Figures
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  The initial sanctioned project cost under the MeitY EMC Scheme stood at <strong className="text-[#2D3748]">₹67.0 Crore</strong> (comprising ₹50 Cr MeitY Grant, ₹6.7 Cr Maharashtra Government support, ₹10.3 Cr Industry equity, and the 2,500 sq.m. MCCIA land grant). With subsequent capital augmentations, specialized RF instrumentation, and toolchain additions, the current operational testing asset base is <strong className="text-[#2D3748]">₹71.0 Crore</strong>.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              {/* IMAGE SLOT: facility anechoic or SMT */}
              <ImageSlot
                src="/assets/images/facility/emi-emc-lab.jpg"
                alt="MECF EMI/EMC Laboratory at MIDC Bhosari Pune"
                width={800}
                height={600}
                recommendedDimensions="800×600 px"
                aspectRatio="aspect-[4/3]"
                className="shadow-md"
              />

              <div className="p-6 rounded-2xl bg-[#3C5068] text-white">
                <div className="flex items-center gap-3 mb-2">
                  <Landmark className="w-5 h-5 text-[#74C69D]" />
                  <h4 className="text-sm font-bold">Section 8 Non-Profit Framework</h4>
                </div>
                <p className="text-xs text-white/80 leading-relaxed">
                  MECF operates strictly on a cost-recovery, non-profit mandate where all operating surpluses are directly reinvested to add newer international standards, RF amplifiers, and environmental chambers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Funding Breakdown Table */}
      <section className="py-16 sm:py-20 bg-[#F0F4F8] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5C82A6]">
              Financial Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#2D3748] mt-1">
              ₹67.0 Crore Project Cost Breakdown
            </h2>
            <p className="text-sm text-[#64748B] mt-2">
              Public-Private Partnership (PPP) model backed by Central Government, State Government, MCCIA, and user-industry contributions.
            </p>
          </div>

          <SpecTable
            columns={fundingColumns}
            data={FUNDING_BREAKDOWN}
            caption="MECF Capital Funding Breakdown (₹67.0 Crore Total Sanctioned)"
          />

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] apple-card-shadow">
              <div className="text-2xl font-bold text-[#5C82A6]">74.6%</div>
              <div className="text-xs font-semibold text-[#2D3748] mt-1">MeitY Grant-in-Aid</div>
              <div className="text-[11px] text-[#64748B] mt-1">₹50.0 Crore direct central grant</div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] apple-card-shadow">
              <div className="text-2xl font-bold text-[#3C5068]">10.0%</div>
              <div className="text-xs font-semibold text-[#2D3748] mt-1">Maharashtra State Govt</div>
              <div className="text-[11px] text-[#64748B] mt-1">₹6.7 Crore state electronics policy</div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] apple-card-shadow">
              <div className="text-2xl font-bold text-[#4EAE87]">15.4%</div>
              <div className="text-xs font-semibold text-[#2D3748] mt-1">Industry Equity & MCCIA</div>
              <div className="text-[11px] text-[#64748B] mt-1">₹10.3 Cr + 2,500 sq.m. prime land</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Milestone Timeline */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5C82A6]">
              Key Milestones
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#2D3748] mt-1">
              Journey from Cluster Inception to Operational Excellence
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {milestones.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E2E8F0] flex flex-col justify-between"
              >
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold bg-[#5C82A6]/12 text-[#3C5068] mb-4">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.date}</span>
                  </div>
                  <h3 className="text-base font-bold text-[#2D3748] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Experience the CFC Infrastructure"
        subtitle="Schedule a tour of our 10m Anechoic chamber, SMT inspection tools, and environmental chambers."
      />
    </div>
  );
}
