import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import ImageSlot from "@/components/ImagePlaceholder";
import CtaBanner from "@/components/CtaBanner";
import { OPERATING_PARTNERS } from "@/data/siteData";
import { CheckCircle2, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Operating Partners - TÜV Rheinland, Cyronics & 3D Engineering Automation",
  description:
    "Discover MECF's three premier operating partners powering our testing verticals: TÜV Rheinland India, Cyronics Instruments, and 3D Engineering Automation LLP.",
};

export default function OperatingPartnersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <PageHeader
        badge="Ecosystem Collaboration"
        title="Operating Partners"
        description="MECF operates its specialized testing and simulation verticals in technical collaboration with global TIC leaders and domestic engineering pioneers."
        breadcrumbs={[{ label: "Home", href: "/" }]}
      />

      {/* 1. Partner Strategy Intro */}
      <section className="border-b border-[#E7E2D9] bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="mb-12 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2F9C78]">
              Collaborative Model
            </span>
            <h2 className="mt-1 text-3xl font-extrabold text-[#263241] sm:text-4xl">
              Specialist partners for each technical vertical.
            </h2>
            <p className="mt-3 text-base leading-8 text-[#667085]">
              MECF pairs public common facility infrastructure with experienced private operators, so each service line is run by teams already fluent in the equipment, standards, and customer workflow.
            </p>
          </div>

          {/* 2. Detailed Partner Dossiers */}
          <div className="space-y-12">
            {OPERATING_PARTNERS.map((partner) => (
              <div
                key={partner.id}
                id={partner.id}
                className="premium-card scroll-mt-24 rounded-3xl border border-[#E7E2D9] bg-[#FBFAF8] p-6 shadow-[0_24px_70px_rgba(38,50,65,0.08)] sm:p-10 lg:p-12"
              >
                <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)] lg:gap-8">
                  {/* Left Col: Partner Name & Info */}
                  <div className="flex h-full flex-col justify-between rounded-2xl border border-[#E7E2D9] bg-white p-6 shadow-[0_16px_42px_rgba(38,50,65,0.06)] sm:p-8">
                    <div className="space-y-5">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#2F4054] text-xl font-bold text-white shadow-xs">
                          {partner.name[0]}
                        </div>
                        <div>
                          <h3 className="text-2xl font-extrabold leading-tight text-[#263241]">
                            {partner.name}
                          </h3>
                          <div className="mt-1 text-xs font-semibold text-[#5C82A6]">
                            {partner.tagline}
                          </div>
                        </div>
                      </div>

                      <p className="text-sm leading-7 text-[#667085]">
                        {partner.description}
                      </p>

                      <div className="flex items-center gap-2 rounded-2xl border border-[#E7E2D9] bg-[#FBFAF8] px-4 py-3 text-xs text-[#263241]">
                        <Building2 className="h-4 w-4 shrink-0 text-[#667085]" />
                        <span>
                          Headquarters / Base: <strong>{partner.location}</strong>
                        </span>
                      </div>

                      {partner.id === "tuv-rheinland" && (
                        <div className="group relative aspect-[16/7] overflow-hidden rounded-2xl border border-[#E7E2D9] bg-[#2F4054] shadow-[0_18px_44px_rgba(38,50,65,0.12)]">
                          <Image
                            src="/assets/images/facility/TUV-Rheinland.jpg"
                            alt="TÜV Rheinland operated 10m semi-anechoic EMI EMC chamber at MECF Pune"
                            fill
                            sizes="(min-width: 1024px) 420px, 100vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                          />
                          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#263241]/82 via-[#263241]/28 to-transparent p-4">
                            <div className="text-[11px] font-bold uppercase tracking-wider text-white/78">
                              Operated Vertical
                            </div>
                            <div className="text-sm font-extrabold text-white">
                              10m Semi-Anechoic EMI/EMC Chamber
                            </div>
                          </div>
                        </div>
                      )}

                      {/* LOGO SLOT */}
                      <div className="rounded-2xl border border-[#E7E2D9] bg-[#FBFAF8] p-4">
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

                    <div className="mt-6 grid grid-cols-2 gap-3">
                      <div className="rounded-2xl border border-[#E7E2D9] bg-[#FBFAF8] px-4 py-3">
                        <div className="text-2xl font-extrabold leading-none text-[#263241]">
                          {partner.expertise.length}
                        </div>
                        <div className="mt-1 text-[11px] font-bold uppercase tracking-wider text-[#667085]">
                          Competencies
                        </div>
                      </div>
                      <div className="rounded-2xl border border-[#E7E2D9] bg-[#FBFAF8] px-4 py-3">
                        <div className="text-2xl font-extrabold leading-none text-[#263241]">
                          {partner.servicesOffered.length}
                        </div>
                        <div className="mt-1 text-[11px] font-bold uppercase tracking-wider text-[#667085]">
                          MECF Services
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Col: Expertise & Services */}
                  <div className="flex h-full flex-col gap-4 rounded-2xl border border-[#E7E2D9] bg-white p-6 shadow-[0_16px_42px_rgba(38,50,65,0.06)] sm:p-8">
                    <div className="rounded-2xl border border-[#F0ECE5] bg-[#FBFAF8] p-5">
                      <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-[#2F4054]">
                        Core Competencies & Domain Expertise
                      </h4>
                      <div className="space-y-2">
                        {partner.expertise.map((exp, eIdx) => (
                          <div key={eIdx} className="flex items-start gap-2.5 rounded-xl bg-white/70 px-3 py-2">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#2F9C78]" />
                            <span className="text-xs text-[#263241]">{exp}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-[#F0ECE5] bg-[#FBFAF8] p-5">
                      <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-[#2F4054]">
                        Services Delivered at MECF Pune
                      </h4>
                      <div className="grid gap-2 sm:grid-cols-2">
                        {partner.servicesOffered.map((svc, sIdx) => (
                          <div key={sIdx} className="flex items-start gap-2.5 rounded-xl bg-white/70 px-3 py-2">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#5C82A6]" />
                            <span className="text-xs font-medium text-[#263241]">{svc}</span>
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
