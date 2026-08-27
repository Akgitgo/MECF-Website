import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import { SITE_CONFIG } from "@/data/siteData";
import { ShieldCheck, Download, Landmark, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Statutory & Compliance Disclosures — NABL Accreditation & Section 8 Details",
  description:
    "Review MECF's statutory registration details, Section 8 not-for-profit company disclosures, MeitY EMC scheme sanction references, and NABL accreditation status.",
};

export default function StatutoryCompliancePage() {
  const complianceDocs = [
    {
      title: "NABL Accreditation Scope & Certificate",
      category: "Testing & Calibration Accreditation",
      fileSlot: "/assets/docs/nabl-certificate.pdf",
      status: "Active NABL ISO/IEC 17025 Accredited",
      desc: "Covers electrical safety, climatic stress chambers, ingress protection, and EMI/EMC 10m SAC testing scopes.",
    },
    {
      title: "MeitY EMC Scheme Sanction Document",
      category: "Government Approval",
      fileSlot: "/assets/docs/meity-emc-approval.pdf",
      status: "Sanctioned December 2017",
      desc: "Official approval letter under the Electronics Manufacturing Cluster (EMC) Scheme, Ministry of Electronics & IT, New Delhi.",
    },
    {
      title: "Section 8 Company Registration Certificate",
      category: "Corporate Incorporation",
      fileSlot: "/assets/docs/section-8-incorporation.pdf",
      status: "Registrar of Companies (RoC) Pune",
      desc: "Incorporation certificate for MCCIA Electronic Cluster Foundation as a dedicated not-for-profit SPV.",
    },
    {
      title: "Annual Compliance & Environmental Governance",
      category: "Statutory Reporting",
      fileSlot: "/assets/docs/statutory-compliance-report.pdf",
      status: "Annual Filing Compliant",
      desc: "Facility safety standards, ISO environmental audits, and equipment calibration traceability records.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        badge="Regulatory Disclosures"
        title="Statutory & Compliance"
        description="Transparent institutional disclosures, Section 8 registration, MeitY EMC scheme sanction records, and NABL ISO/IEC 17025 accreditation certificates."
        breadcrumbs={[{ label: "Home", href: "/" }]}
      />

      {/* 1. Institutional Governance Overview */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E7E2D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#5C82A6]">
                Institutional Trust & Authenticity
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#263241] leading-tight">
                Trust signals for procurement, audits, and certification teams.
              </h2>
              <p className="text-base text-[#667085] leading-8">
                MECF&apos;s statutory and accreditation disclosures help customers validate the institution before sharing product data, booking lab capacity, or using reports for market access.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#2F9C78] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-sm text-[#263241]">Section 8 Special Purpose Vehicle (SPV):</strong>
                    <span className="text-sm text-[#667085] ml-1">
                      Promoted by MCCIA with no commercial dividend distribution; all revenues are reinvested into lab instrumentation.
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#2F9C78] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-sm text-[#263241]">NABL ISO/IEC 17025 Alignment:</strong>
                    <span className="text-sm text-[#667085] ml-1">
                      Calibration and testing procedures adhere to rigorous global traceability benchmarks.
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#2F9C78] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-sm text-[#263241]">Data Confidentiality & IP Protection:</strong>
                    <span className="text-sm text-[#667085] ml-1">
                      Strict non-disclosure agreements (NDAs) govern all client CAD models, schematics, and test reports.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#FBFAF8] p-8 rounded-3xl border border-[#E7E2D9] space-y-4">
              <div className="flex items-center gap-3">
                <Landmark className="w-6 h-6 text-[#2F4054]" />
                <h3 className="text-lg font-bold text-[#263241]">Legal Registration Profile</h3>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between py-1.5 border-b border-[#E7E2D9]">
                  <span className="text-[#667085]">Legal Entity:</span>
                  <span className="font-semibold text-[#263241] text-right">{SITE_CONFIG.fullName}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#E7E2D9]">
                  <span className="text-[#667085]">Corporate Form:</span>
                  <span className="font-semibold text-[#263241]">Section 8 Not-For-Profit</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#E7E2D9]">
                  <span className="text-[#667085]">Promoting Body:</span>
                  <span className="font-semibold text-[#263241]">MCCIA (Pune)</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#E7E2D9]">
                  <span className="text-[#667085]">Central Scheme:</span>
                  <span className="font-semibold text-[#263241]">MeitY EMC Scheme (Govt of India)</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-[#667085]">State Facilitation:</span>
                  <span className="font-semibold text-[#263241]">MIDC Maharashtra Electronics Policy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Downloadable Certificate Slots */}
      <section className="py-16 bg-[#F6F4F0] border-b border-[#E7E2D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5C82A6]">
              Accreditation Documents
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#263241] mt-1">
              Compliance Certificates & Sanction Documents
            </h2>
            <p className="text-sm text-[#667085] mt-2">
              Official document slots for NABL certificates, regulatory approvals, and corporate filings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {complianceDocs.map((doc, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#E7E2D9] apple-card-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#5C82A6]">
                      {doc.category}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-xl text-[11px] font-semibold bg-[#2F9C78]/15 text-[#247F62] border border-[#2F9C78]/30">
                      <ShieldCheck className="w-3 h-3" />
                      {doc.status}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#263241] mb-1">
                    {doc.title}
                  </h3>
                  <p className="text-xs text-[#667085] leading-6">
                    {doc.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F6F4F0] flex items-center justify-between">
                  <div className="text-[11px] font-mono text-[#667085]">
                    Slot: <code className="bg-[#FBFAF8] px-1.5 py-0.5 rounded">{doc.fileSlot.split("/").pop()}</code>
                  </div>
                  <a
                    href={doc.fileSlot}
                    download
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#5C82A6] hover:bg-[#5C82A6]/10 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Request Compliance Information"
        subtitle="For institutional tender audits or quality management system (QMS) reviews, reach out to our administration office."
      />
    </div>
  );
}
