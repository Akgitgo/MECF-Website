import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import ImageSlot from "@/components/ImagePlaceholder";
import CtaBanner from "@/components/CtaBanner";
import { OPERATING_PARTNERS } from "@/data/siteData";
import { CheckCircle2, ArrowRight, ShieldCheck, ExternalLink, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Operating Partners — TÜV Rheinland, Cyronics & 3D Engineering Automation",
  description:
    "Discover MECF's three premier operating partners powering our testing verticals: TÜV Rheinland India, Cyronics Instruments, and 3D Engineering Automation LLP.",
};

export default function OperatingPartnersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        badge="Ecosystem Collaboration"
        title="Operating Partners"
        description="MECF operates its specialized testing and simulation verticals in technical collaboration with global TIC leaders and domestic engineering pioneers."
        breadcrumbs={[{ label: "Home", href: "/" }]}
      />

      {/* 1. Partner Strategy Intro */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5C82A6]">
              Collaborative Model
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#2D3748] mt-1">
              Public Infrastructure Powered by Industry Expertise
            </h2>
            <p className="text-base text-[#64748B] mt-3 leading-relaxed">
              MECF combines government-backed common facility infrastructure with the operational rigor and technical expertise of specialized private enterprises. Each partner manages a dedicated vertical with certified testing engineers and calibrated instrumentation.
            </p>
          </div>

          {/* 2. Detailed Partner Dossiers */}
          <div className="space-y-12">
            {OPERATING_PARTNERS.map((partner, idx) => (
              <div
                key={partner.id}
                id={partner.id}
                className="p-8 sm:p-12 rounded-3xl bg-[#FAF8F5] border border-[#E2E8F0] apple-card-shadow scroll-mt-24"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Left Col: Partner Name & Info */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#3C5068] text-white flex items-center justify-center font-bold text-xl mb-3 shadow-xs">
                      {partner.name[0]}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#2D3748] tracking-tight">
                        {partner.name}
                      </h3>
                      <div className="text-xs font-semibold text-[#5C82A6] mt-1">
                        {partner.tagline}
                      </div>
                    </div>

                    <p className="text-sm text-[#64748B] leading-relaxed">
                      {partner.description}
                    </p>

                    <div className="pt-2 text-xs text-[#2D3748] flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-[#64748B]" />
                      <span>Headquarters / Base: <strong>{partner.location}</strong></span>
                    </div>

                    {/* LOGO SLOT */}
                    <div className="pt-4 max-w-xs">
                      <ImageSlot
                        src={`/assets/images/partners/${partner.logoPlaceholder}`}
                        alt={`${partner.name} official logo`}
                        width={400}
                        height={160}
                        recommendedDimensions="400×160 px PNG"
                        aspectRatio="aspect-[5/2]"
                        className="bg-white"
                      />
                    </div>
                  </div>

                  {/* Right Col: Expertise & Services */}
                  <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-[#E2E8F0] space-y-6">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#3C5068] mb-3">
                        Core Competencies & Domain Expertise
                      </h4>
                      <div className="space-y-2">
                        {partner.expertise.map((exp, eIdx) => (
                          <div key={eIdx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[#4EAE87] shrink-0 mt-0.5" />
                            <span className="text-xs text-[#2D3748]">{exp}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#F0F4F8]">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#3C5068] mb-3">
                        Services Delivered at MECF Pune
                      </h4>
                      <div className="space-y-2">
                        {partner.servicesOffered.map((svc, sIdx) => (
                          <div key={sIdx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[#5C82A6] shrink-0 mt-0.5" />
                            <span className="text-xs text-[#2D3748] font-medium">{svc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Connect with Our Partner Engineering Leads"
        subtitle="Book a technical consultation with TÜV Rheinland, Cyronics, or 3D Engineering specialists."
      />
    </div>
  );
}
