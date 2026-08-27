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
  CommitteeMember,
} from "@/data/siteData";
import { Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us & Institutional Governance",
  description:
    "Learn about the Mahratta Chamber of Commerce, Industries and Agriculture (MCCIA) Electronic Cluster Foundation, our 12-member Executive Board, Executive Committee, and engineering leadership.",
};

export default function AboutPage() {
  const committeeColumns: ColumnDef<CommitteeMember>[] = [
    { header: "Sr.", accessorKey: "sr", className: "w-16 text-center font-mono" },
    {
      header: "Committee Member Name",
      cell: (row) => (
        <span className="font-semibold text-[#263241]">{row.name}</span>
      ),
    },
    { header: "Role on Committee", accessorKey: "role" },
    {
      header: "Organization",
      cell: (row) => (
        <span className="text-[#2F4054] font-medium">{row.organization || "MECF"}</span>
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
      <section className="py-16 sm:py-20 bg-white border-b border-[#E7E2D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 about-reveal">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2F9C78]">
              Our Institutional Mandate
            </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#263241] leading-tight">
                Shared testing infrastructure for India&apos;s electronics ecosystem.
              </h2>
              <p className="text-base text-[#667085] leading-8">
                MECF was created by MCCIA as a Section 8 SPV to make high-end electronics testing accessible without each company building its own lab.
              </p>
              <p className="text-base text-[#667085] leading-8">
                The facility supports startups, MSMEs, defense innovators, and multinationals with pay-per-use access to compliance-grade infrastructure.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#FBFAF8] border border-[#E7E2D9] about-interactive-card">
                  <div className="text-xs font-bold text-[#2F4054] uppercase">Legal Status</div>
                  <div className="text-sm font-semibold text-[#263241] mt-1">Section 8 Not-For-Profit SPV</div>
                  <div className="text-xs text-[#667085] mt-0.5">Surplus reinvested into lab upgrades</div>
                </div>
                <div className="p-4 rounded-xl bg-[#FBFAF8] border border-[#E7E2D9] about-interactive-card">
                  <div className="text-xs font-bold text-[#2F4054] uppercase">Land Grant</div>
                  <div className="text-sm font-semibold text-[#263241] mt-1">2,500 sq. m. Industrial Plot</div>
                  <div className="text-xs text-[#667085] mt-0.5">Provided by MCCIA at MIDC Bhosari</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 about-reveal about-reveal-delay-2">
              <div className="app-store-card rounded-3xl overflow-hidden shadow-xl border border-[#E7E2D9]">
                <ImageSlot
                  src="/assets/images/facility/design-prototype-center.jpg"
                  alt="MECF Engineering and Prototyping Centre at Bhosari Pune"
                  width={800}
                  height={600}
                  badge="MIDC Bhosari, Pune"
                  overlayTitle="MECF Engineering Centre"
                  overlaySub="2,500 sq. m. Industrial Infrastructure"
                  recommendedDimensions="800×600 px"
                  aspectRatio="aspect-[4/3]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* M-E-C-F Vision Framework Section */}
      <section className="py-12 bg-[#FBFAF8] border-b border-[#E7E2D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mb-8 about-reveal">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2F9C78]">
              Strategic Vision Framework
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#263241] mt-1">
              What MECF Stands For
            </h2>
            <p className="text-sm text-[#667085] mt-1">
              Our name defines our core promise to the Indian electronics manufacturing ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 !rounded-none bg-white border border-[#E7E2D9] shadow-xs relative overflow-hidden pt-6 about-reveal about-interactive-card">
              <div className="about-letter-badge absolute top-3 right-3 w-9 h-9 rounded-xl bg-[#2F9C78]/15 text-[#247F62] flex items-center justify-center font-black text-base">
                M
              </div>
              <h3 className="text-sm font-bold text-[#263241] mb-1 pr-10">Maximizing Potential</h3>
              <p className="text-xs text-[#667085] leading-6">
                Maximizing the potential for Electronic Ecosystem&apos;s growth in and around the region.
              </p>
            </div>

            <div className="p-5 !rounded-none bg-white border border-[#E7E2D9] shadow-xs relative overflow-hidden pt-6 about-reveal about-reveal-delay-1 about-interactive-card">
              <div className="about-letter-badge absolute top-3 right-3 w-9 h-9 rounded-xl bg-[#2F9C78]/15 text-[#247F62] flex items-center justify-center font-black text-base">
                E
              </div>
              <h3 className="text-sm font-bold text-[#263241] mb-1 pr-10">Enabling Innovations</h3>
              <p className="text-xs text-[#667085] leading-6">
                Enabling innovations through comprehensive, high-precision technical services.
              </p>
            </div>

            <div className="p-5 !rounded-none bg-white border border-[#E7E2D9] shadow-xs relative overflow-hidden pt-6 about-reveal about-reveal-delay-2 about-interactive-card">
              <div className="about-letter-badge absolute top-3 right-3 w-9 h-9 rounded-xl bg-[#2F9C78]/15 text-[#247F62] flex items-center justify-center font-black text-base">
                C
              </div>
              <h3 className="text-sm font-bold text-[#263241] mb-1 pr-10">Competitive &amp; Faster</h3>
              <p className="text-xs text-[#667085] leading-6">
                Competitive and faster testing &amp; certification services under one roof.
              </p>
            </div>

            <div className="p-5 !rounded-none bg-white border border-[#E7E2D9] shadow-xs relative overflow-hidden pt-6 about-reveal about-reveal-delay-3 about-interactive-card">
              <div className="about-letter-badge absolute top-3 right-3 w-9 h-9 rounded-xl bg-[#2F9C78]/15 text-[#247F62] flex items-center justify-center font-black text-base">
                F
              </div>
              <h3 className="text-sm font-bold text-[#263241] mb-1 pr-10">Facilitating Industry</h3>
              <p className="text-xs text-[#667085] leading-6">
                Facilitating wider range of industry like MSME &amp; start-ups to save cost and time in product development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Executive Board Image Cards */}
      <section className="py-16 sm:py-20 bg-[#F6F4F0] border-b border-[#E7E2D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mb-12 about-reveal">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5C82A6]">
              Board of Directors
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#263241] mt-1">
              Executive Board of MECF
            </h2>
            <p className="text-sm text-[#667085] mt-2">
              Composed of esteemed industry leaders, chamber executives, and government representatives guiding the cluster foundation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {EXECUTIVE_BOARD.map((member) => (
              <div
                key={member.sr}
                className="p-5 rounded-2xl bg-white border border-[#E7E2D9] shadow-xs hover:shadow-md transition-all flex flex-col justify-between group about-reveal about-interactive-card"
                style={{ animationDelay: `${Math.min(member.sr, 8) * 55}ms` }}
              >
                <div>
                  <ImageSlot
                    src={member.image || `/assets/images/team/member-${member.sr}.jpg`}
                    alt={member.name}
                    width={400}
                    height={400}
                    recommendedDimensions="400×400 px"
                    aspectRatio="aspect-square"
                    className="rounded-xl overflow-hidden mb-4"
                  />

                  <div className="space-y-1">
                    <span className="px-2.5 py-0.5 rounded-xl text-[11px] font-bold bg-[#FBFAF8] text-[#2F4054] border border-[#E7E2D9] inline-block">
                      {member.designation}
                    </span>
                    <h3 className="text-base font-bold text-[#263241] tracking-tight pt-1">
                      {member.name}
                    </h3>
                  </div>
                </div>

                <div className="pt-3 mt-3 border-t border-[#E7E2D9]">
                  <span className="text-xs font-medium text-[#667085] block truncate">
                    {member.organization}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Executive Committee Table */}
      <section className="py-16 bg-white border-b border-[#E7E2D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mb-8 about-reveal">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5C82A6]">
              Operational Leadership
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#263241] mt-1">
              Executive Committee
            </h2>
            <p className="text-sm text-[#667085] mt-2">
              Overseeing day-to-day facility execution, technical partnerships, and infrastructure expansions.
            </p>
          </div>

          <div className="about-reveal about-reveal-delay-1">
            <SpecTable
              columns={committeeColumns}
              data={EXECUTIVE_COMMITTEE}
              caption="MECF Executive Committee"
            />
          </div>
        </div>
      </section>

      {/* 4. Our Team Staff Cards */}
      <section className="py-16 sm:py-20 bg-[#F6F4F0] border-b border-[#E7E2D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mb-12 about-reveal">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5C82A6]">
              Facility Staff
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#263241] mt-1">
              Our Operations & Technical Team
            </h2>
            <p className="text-sm text-[#667085] mt-2">
              Direct contacts for lab chamber scheduling, test quotes, facility maintenance, and accounts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_DIRECTORY.map((member, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#E7E2D9] apple-card-shadow flex flex-col justify-between about-reveal about-interactive-card"
                style={{ animationDelay: `${idx * 70}ms` }}
              >
                <div>
                  <div className="about-letter-badge w-12 h-12 rounded-xl bg-[#2F4054] text-white flex items-center justify-center font-bold text-base mb-4">
                    {member.name.split(" ").slice(-1)[0][0]}
                  </div>

                  <h3 className="text-base font-bold text-[#263241] tracking-tight">
                    {member.name}
                  </h3>
                  <div className="text-xs font-semibold text-[#5C82A6] mt-0.5">
                    {member.role}
                  </div>
                  <div className="text-[11px] text-[#667085] mt-2 leading-relaxed">
                    {member.department}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F6F4F0] space-y-2 text-xs">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2 text-[#667085] hover:text-[#2F9C78] transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#5C82A6] shrink-0" />
                    <span className="truncate">{member.email}</span>
                  </a>
                  <a
                    href={`tel:${member.phone.replace(/\s+/g, "")}`}
                    className="flex items-center gap-2 text-[#667085] hover:text-[#2F9C78] transition-colors"
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
