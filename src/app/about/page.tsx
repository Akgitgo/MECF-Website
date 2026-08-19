import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SpecTable, { ColumnDef } from "@/components/SpecTable";
import ImageSlot from "@/components/ImagePlaceholder";
import CtaBanner from "@/components/CtaBanner";
import {
  EXECUTIVE_BOARD,
  EXECUTIVE_COMMITTEE,
  TEAM_DIRECTORY,
  BoardMember,
  CommitteeMember,
  StaffMember,
  SITE_CONFIG,
} from "@/data/siteData";
import { Mail, Phone, Building2, UserCheck, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us & Institutional Governance",
  description:
    "Learn about the Mahratta Chamber of Commerce, Industries and Agriculture (MCCIA) Electronic Cluster Foundation, our 12-member Executive Board, Executive Committee, and engineering leadership.",
};

export default function AboutPage() {
  const boardColumns: ColumnDef<BoardMember>[] = [
    { header: "Sr.", accessorKey: "sr", className: "w-16 text-center font-mono" },
    {
      header: "Board Member Name",
      cell: (row) => (
        <span className="font-semibold text-[#2D3748]">{row.name}</span>
      ),
    },
    { header: "Designation", accessorKey: "designation" },
    {
      header: "Organization / Industry Affiliation",
      cell: (row) => (
        <span className="text-[#3C5068] font-medium">{row.organization}</span>
      ),
    },
  ];

  const committeeColumns: ColumnDef<CommitteeMember>[] = [
    { header: "Sr.", accessorKey: "sr", className: "w-16 text-center font-mono" },
    {
      header: "Committee Member Name",
      cell: (row) => (
        <span className="font-semibold text-[#2D3748]">{row.name}</span>
      ),
    },
    { header: "Role on Committee", accessorKey: "role" },
    {
      header: "Organization",
      cell: (row) => (
        <span className="text-[#3C5068] font-medium">{row.organization || "MECF"}</span>
      ),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        badge="Institutional Overview & Governance"
        title="About MECF"
        highlight="& Governance"
        description="Incorporated as a Section 8 Special Purpose Vehicle by MCCIA to provide common, high-end electronics testing infrastructure for India's engineering industry."
        breadcrumbs={[{ label: "Home", href: "/" }]}
      />

      {/* 1. Mission & Institutional Narrative */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#5C82A6]">
                Our Institutional Mandate
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#2D3748] leading-tight">
                Catalyzing Self-Reliant Indian Electronics Manufacturing
              </h2>
              <p className="text-base text-[#64748B] leading-relaxed">
                The MCCIA Electronic Cluster Foundation (MECF) was founded under the visionary leadership of the Mahratta Chamber of Commerce, Industries and Agriculture (MCCIA). Approved as a Common Facility Centre under the Ministry of Electronics & Information Technology (MeitY) Electronics Manufacturing Cluster (EMC) scheme, MECF bridges the critical capital divide for electronic hardware design and compliance.
              </p>
              <p className="text-base text-[#64748B] leading-relaxed">
                Rather than individual companies spending tens of crores to build proprietary anechoic chambers and climatic stress cells, MECF operates as a shared, open-access, pay-for-use testing foundation serving startups, MSMEs, defense innovators, and global multinationals across the Pune-Maharashtra industrial belt and nationwide.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E2E8F0]">
                  <div className="text-xs font-bold text-[#3C5068] uppercase">Legal Status</div>
                  <div className="text-sm font-semibold text-[#2D3748] mt-1">Section 8 Not-For-Profit SPV</div>
                  <div className="text-xs text-[#64748B] mt-0.5">Surplus reinvested into lab upgrades</div>
                </div>
                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E2E8F0]">
                  <div className="text-xs font-bold text-[#3C5068] uppercase">Land Grant</div>
                  <div className="text-sm font-semibold text-[#2D3748] mt-1">2,500 sq. m. Industrial Plot</div>
                  <div className="text-xs text-[#64748B] mt-0.5">Provided by MCCIA at MIDC Bhosari</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              {/* IMAGE SLOT: facility hero or anechoic chamber */}
              <ImageSlot
                src="/assets/images/facility/design-prototype-center.jpg"
                alt="MECF Engineering and Prototyping Centre at Bhosari Pune"
                width={800}
                height={600}
                recommendedDimensions="800×600 px"
                aspectRatio="aspect-[4/3]"
                className="shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* M-E-C-F Vision Framework Section */}
      <section className="py-12 bg-[#FAF8F5] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#4EAE87]">
              Strategic Vision Framework
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#2D3748] mt-1">
              What MECF Stands For
            </h2>
            <p className="text-sm text-[#64748B] mt-1">
              Our name defines our core promise to the Indian electronics manufacturing ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl bg-white border border-[#E2E8F0] shadow-xs relative overflow-hidden pt-6">
              <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-[#4EAE87]/15 text-[#3D9E78] flex items-center justify-center font-black text-base">
                M
              </div>
              <h3 className="text-sm font-bold text-[#2D3748] mb-1 pr-10">Maximizing Potential</h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Maximizing the potential for Electronic Ecosystem&apos;s growth in and around the region.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#E2E8F0] shadow-xs relative overflow-hidden pt-6">
              <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-[#4EAE87]/15 text-[#3D9E78] flex items-center justify-center font-black text-base">
                E
              </div>
              <h3 className="text-sm font-bold text-[#2D3748] mb-1 pr-10">Enabling Innovations</h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Enabling innovations through comprehensive, high-precision technical services.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#E2E8F0] shadow-xs relative overflow-hidden pt-6">
              <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-[#4EAE87]/15 text-[#3D9E78] flex items-center justify-center font-black text-base">
                C
              </div>
              <h3 className="text-sm font-bold text-[#2D3748] mb-1 pr-10">Competitive &amp; Faster</h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Competitive and faster testing &amp; certification services under one roof.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#E2E8F0] shadow-xs relative overflow-hidden pt-6">
              <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-[#4EAE87]/15 text-[#3D9E78] flex items-center justify-center font-black text-base">
                F
              </div>
              <h3 className="text-sm font-bold text-[#2D3748] mb-1 pr-10">Facilitating Industry</h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Facilitating wider range of industry like MSME &amp; start-ups to save cost and time in product development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Executive Board Table */}
      <section className="py-16 sm:py-20 bg-[#F0F4F8] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5C82A6]">
              Board of Directors
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#2D3748] mt-1">
              Executive Board of MECF
            </h2>
            <p className="text-sm text-[#64748B] mt-2">
              Composed of esteemed industry leaders, chamber executives, and government representatives guiding the cluster foundation.
            </p>
          </div>

          <SpecTable
            columns={boardColumns}
            data={EXECUTIVE_BOARD}
            caption="MECF Board of Directors (12 Members)"
          />
        </div>
      </section>

      {/* 3. Executive Committee Table */}
      <section className="py-16 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5C82A6]">
              Operational Leadership
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#2D3748] mt-1">
              Executive Committee
            </h2>
            <p className="text-sm text-[#64748B] mt-2">
              Overseeing day-to-day facility execution, technical partnerships, and infrastructure expansions.
            </p>
          </div>

          <SpecTable
            columns={committeeColumns}
            data={EXECUTIVE_COMMITTEE}
            caption="MECF Executive Committee"
          />
        </div>
      </section>

      {/* 4. Our Team Staff Cards */}
      <section className="py-16 sm:py-20 bg-[#F0F4F8] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5C82A6]">
              Facility Staff
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#2D3748] mt-1">
              Our Operations & Technical Team
            </h2>
            <p className="text-sm text-[#64748B] mt-2">
              Direct contacts for lab chamber scheduling, test quotes, facility maintenance, and accounts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_DIRECTORY.map((member, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#E2E8F0] apple-card-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-full bg-[#3C5068] text-white flex items-center justify-center font-bold text-base mb-4">
                    {member.name.split(" ").slice(-1)[0][0]}
                  </div>

                  <h3 className="text-base font-bold text-[#2D3748] tracking-tight">
                    {member.name}
                  </h3>
                  <div className="text-xs font-semibold text-[#5C82A6] mt-0.5">
                    {member.role}
                  </div>
                  <div className="text-[11px] text-[#64748B] mt-2 leading-relaxed">
                    {member.department}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F0F4F8] space-y-2 text-xs">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2 text-[#64748B] hover:text-[#4EAE87] transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#5C82A6] shrink-0" />
                    <span className="truncate">{member.email}</span>
                  </a>
                  <a
                    href={`tel:${member.phone.replace(/\s+/g, "")}`}
                    className="flex items-center gap-2 text-[#64748B] hover:text-[#4EAE87] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#5C82A6] shrink-0" />
                    <span>{member.phone}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner
        title="Ready to Test at MECF Pune?"
        subtitle="Connect with our technical team to schedule an on-site lab walkthrough or discuss your product test matrices."
      />
    </div>
  );
}
