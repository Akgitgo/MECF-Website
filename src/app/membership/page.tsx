import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SpecTable, { ColumnDef } from "@/components/SpecTable";
import CtaBanner from "@/components/CtaBanner";
import { MEMBERSHIP_TIERS, MembershipTier } from "@/data/siteData";
import { CheckCircle2, ShieldCheck, Zap, Sparkles, Award, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Membership & Contribution Tiers — Up to 30% Testing Rebates",
  description:
    "Join the MECF contributing industry consortium. Explore our ₹10L, ₹50L, and ₹1Cr sponsorship tiers offering 20% to 30% discounts and 2-day expedited lab priority.",
};

export default function MembershipPage() {
  const comparisonColumns: ColumnDef<MembershipTier>[] = [
    {
      header: "Sponsorship Tier",
      cell: (row) => (
        <div>
          <div className="font-bold text-[#2D3748]">{row.tierName}</div>
          <div className="text-xs text-[#64748B]">{row.contribution} Contribution</div>
        </div>
      ),
      className: "w-1/4",
    },
    {
      header: "Standard Rate Discount",
      cell: (row) => (
        <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-[#4EAE87]/15 text-[#3D9E78] border border-[#4EAE87]/30">
          {row.discountRate}
        </span>
      ),
    },
    {
      header: "Turnaround / Booking Priority",
      cell: (row) => (
        <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-[#F4A261]/15 text-[#D97706] border border-[#F4A261]/30">
          {row.priorityTurnaround}
        </span>
      ),
    },
    {
      header: "Key Strategic Privileges",
      cell: (row) => (
        <ul className="space-y-1 text-xs text-[#2D3748]">
          {row.features.map((f, i) => (
            <li key={i} className="flex items-start gap-1.5">
              <span className="text-[#5C82A6] font-bold">•</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      ),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        badge="Industry Consortium Program"
        title="Membership & Contribution Tiers"
        description="Become a contributing member of the MECF SPV to unlock guaranteed lab access quotas, priority turnaround times, and substantial testing fee discounts."
        breadcrumbs={[{ label: "Home", href: "/" }]}
      />

      {/* 1. Special 50% MSME & MCCIA Discount Offer Spotlight */}
      <section className="py-10 bg-gradient-to-r from-[#4EAE87] via-[#3D9E78] to-[#3C5068] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="inline-block px-3 py-0.5 rounded bg-white/20 text-[11px] font-extrabold tracking-wider uppercase">
                LIMITED-TIME PROMOTION
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white !text-white" style={{ color: '#ffffff' }}>
                Up to 50% Discount for MSMEs &amp; MCCIA Members
              </h2>
              <p className="text-xs sm:text-sm text-white/90 max-w-2xl leading-relaxed">
                Avail up to 50% discount on Test &amp; Certification Services and EMI/EMC Services. Offer valid till <strong>31st August 2026</strong>. Terms &amp; conditions apply.
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-3">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl font-bold bg-white text-[#3C5068] hover:bg-[#F0F4F8] shadow-md text-xs sm:text-sm transition-all"
              >
                Claim Discount Offer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Value Prop */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5C82A6]">
              Why Contribute to MECF?
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#2D3748] mt-1">
              Guaranteed Priority for High-Volume R&D Pipelines
            </h2>
            <p className="text-base text-[#64748B] mt-3 leading-relaxed">
              For manufacturing enterprises running continuous hardware design cycles, testing delays can stall commercial launches by quarters. Contributing to the MECF SPV capital fund guarantees your engineering teams priority chamber reservations and substantial operating discounts.
            </p>
          </div>

          {/* 3 Tier Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {MEMBERSHIP_TIERS.map((tier, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-3xl bg-[#FAF8F5] border flex flex-col justify-between apple-card-shadow relative ${
                  tier.isPopular
                    ? "border-[#4EAE87] ring-2 ring-[#4EAE87]/20 bg-white"
                    : "border-[#E2E8F0]"
                }`}
              >
                {tier.isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[11px] font-bold bg-[#4EAE87] text-white tracking-wide uppercase">
                    Most Popular Tier
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

                  <ul className="mt-6 space-y-3 text-xs text-[#64748B] border-t border-[#E2E8F0] pt-6">
                    {tier.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#4EAE87] shrink-0 mt-0.5" />
                        <span className="leading-relaxed text-[#2D3748]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 mt-8 border-t border-[#E2E8F0]">
                  <Link
                    href="/contact"
                    className="w-full py-3 rounded-xl font-semibold text-xs text-center block transition-all bg-[#3C5068] hover:bg-[#4EAE87] text-white shadow-xs"
                  >
                    Apply for Membership
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Detailed Spec Comparison */}
      <section className="py-16 bg-[#F0F4F8] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5C82A6]">
              Comprehensive Matrix
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#2D3748] mt-1">
              Tier Comparison & Entitlements
            </h2>
          </div>

          <SpecTable
            columns={comparisonColumns}
            data={MEMBERSHIP_TIERS}
            caption="Sponsorship Tiers & Strategic Service Entitlements"
          />
        </div>
      </section>

      {/* 3. Real Testimonials Placeholder Component (Per Prompt §7 & §9) */}
      <section className="py-16 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
          <div className="p-8 sm:p-10 rounded-2xl bg-[#FAF8F5] border border-[#E2E8F0] apple-card-shadow">
            <div className="w-12 h-12 rounded-full bg-[#4EAE87]/15 text-[#4EAE87] flex items-center justify-center mx-auto mb-3">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#2D3748]">
              Member Testimonials & Impact Stories
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B] mt-2 max-w-lg mx-auto">
              Real endorsements and testing cycle acceleration metrics from MECF member companies across automotive, medical devices, and industrial electronics.
            </p>
            <div className="mt-6 p-6 rounded-xl bg-white border border-dashed border-[#E2E8F0] text-xs text-[#64748B] leading-relaxed">
              Real client testimonials and case study data are undergoing corporate review and approval. Authenticated quotes and verified client company logos will be published in this section.
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Join the MECF Industry Consortium"
        subtitle="Contact the CEO office at ceo@mecf.in to discuss institutional membership and tax advantages."
      />
    </div>
  );
}
