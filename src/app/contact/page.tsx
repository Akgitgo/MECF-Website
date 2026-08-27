import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import EnquiryForm from "@/components/EnquiryForm";
import SpecTable, { ColumnDef } from "@/components/SpecTable";
import { SITE_CONFIG, TEAM_DIRECTORY, StaffMember } from "@/data/siteData";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us & Facility Location — MECF MIDC Bhosari Pune",
  description:
    "Get in touch with MECF. Request testing rate cards, book lab slots, or visit our facility at J/P-8, MIDC Bhosari, Telco Road, Pune 411026.",
};

export default function ContactPage() {
  const staffColumns: ColumnDef<StaffMember>[] = [
    {
      header: "Staff Member",
      cell: (row) => (
        <div>
          <div className="font-bold text-[#263241]">{row.name}</div>
          <div className="text-xs text-[#5C82A6] font-medium">{row.role}</div>
        </div>
      ),
      className: "w-1/3",
    },
    { header: "Department / Function", accessorKey: "department" },
    {
      header: "Email Contact",
      cell: (row) => (
        <a
          href={`mailto:${row.email}`}
          className="text-xs font-mono text-[#5C82A6] hover:underline"
        >
          {row.email}
        </a>
      ),
    },
    {
      header: "Direct Phone",
      cell: (row) => (
        <a
          href={`tel:${row.phone.replace(/\s+/g, "")}`}
          className="text-xs font-semibold text-[#263241] hover:text-[#2F9C78]"
        >
          {row.phone}
        </a>
      ),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        badge="Connect with MECF"
        title="Contact Us & Lab Location"
        description="Book testing chamber slots, schedule an on-site facility tour, or discuss customized testing matrices with our engineering leads."
        breadcrumbs={[{ label: "Home", href: "/" }]}
      />

      {/* 1. Main Contact Grid + Form */}
      <section className="py-16 sm:py-20 bg-[#FBFAF8] border-b border-[#E7E2D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 items-stretch lg:grid-cols-12 gap-6 lg:gap-8 rounded-[28px] border border-[#E7E2D9] bg-white p-4 sm:p-6 lg:p-8 shadow-[0_28px_90px_rgba(38,50,65,0.08)]">
            <div className="lg:col-span-5 flex flex-col space-y-5">
              <div className="rounded-3xl bg-[#263241] p-7 text-white shadow-[0_24px_70px_rgba(38,50,65,0.18)]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#74C69D]">
                  Direct Touchpoints
                </span>
                <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold leading-tight text-white">
                  Talk to the right desk before you send a sample.
                </h2>
                <p className="mt-3 text-sm leading-7 text-white/76">
                  Call for slot urgency, email for documentation, or submit the test scope for a structured quote.
                </p>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-xs font-bold text-[#263241] shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#F6F4F0]"
                  >
                    <Phone className="w-4 h-4 text-[#2F9C78]" />
                    Call Lab Desk
                  </a>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/18 bg-white/10 px-4 py-3 text-xs font-bold text-white backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-white/16"
                  >
                    <Mail className="w-4 h-4 text-[#74C69D]" />
                    Email CEO Office
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-[#E7E2D9] bg-[#FBFAF8] p-5">
                  <MapPin className="mb-4 w-5 h-5 text-[#2F4054]" />
                  <h3 className="text-sm font-bold text-[#263241]">Facility</h3>
                  <p className="mt-2 text-xs leading-6 text-[#667085]">
                    {SITE_CONFIG.address}
                  </p>
                </div>

                <div className="rounded-2xl border border-[#E7E2D9] bg-[#FBFAF8] p-5">
                  <Clock className="mb-4 w-5 h-5 text-[#2F4054]" />
                  <h3 className="text-sm font-bold text-[#263241]">Hours</h3>
                  <p className="mt-2 text-xs leading-6 text-[#667085]">
                    {SITE_CONFIG.workingHours}
                  </p>
                </div>

                <div className="rounded-2xl border border-[#E7E2D9] bg-white p-5 sm:col-span-2">
                  <h3 className="text-sm font-bold text-[#263241]">Priority Contacts</h3>
                  <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <a href={`tel:${SITE_CONFIG.phone}`} className="rounded-xl bg-[#F6F4F0] px-3 py-2 font-semibold text-[#2F9C78] hover:bg-[#EEE9E0]">
                      Executive: {SITE_CONFIG.phone}
                    </a>
                    <a href={`tel:${SITE_CONFIG.landlinePhone}`} className="rounded-xl bg-[#F6F4F0] px-3 py-2 font-semibold text-[#263241] hover:bg-[#EEE9E0]">
                      Landline: {SITE_CONFIG.landlinePhone}
                    </a>
                    <a href={`mailto:${SITE_CONFIG.email}`} className="rounded-xl bg-[#F6F4F0] px-3 py-2 font-semibold text-[#2F9C78] hover:bg-[#EEE9E0]">
                      {SITE_CONFIG.email}
                    </a>
                    <a href={`mailto:${SITE_CONFIG.pratikEmail}`} className="rounded-xl bg-[#F6F4F0] px-3 py-2 font-semibold text-[#263241] hover:bg-[#EEE9E0]">
                      {SITE_CONFIG.pratikEmail}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 flex rounded-3xl bg-[#F6F4F0] p-3 sm:p-4">
              <EnquiryForm className="h-full border-[#DED6CA] shadow-none" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Staff Directory Table */}
      <section className="py-16 bg-[#F6F4F0] border-b border-[#E7E2D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5C82A6]">
              Direct Directory
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#263241] mt-1">
              Facility Leadership & Departmental Contacts
            </h2>
          </div>

          <SpecTable
            columns={staffColumns}
            data={TEAM_DIRECTORY}
            caption="MECF Operational Contact Directory"
          />
        </div>
      </section>

      {/* 3. Precise Embedded Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#5C82A6]">
                Find the Facility
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-[#263241] mt-1">
                MECF Common Facility Centre at MIDC Bhosari, Pune
              </h2>
            </div>
            <a
              href="https://maps.google.com/?q=MECF+MIDC+Bhosari+Pune+411026"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#2F4054] hover:bg-[#2F9C78] transition-all shadow-xs"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="w-full h-96 rounded-2xl overflow-hidden border border-[#E7E2D9] shadow-xs relative">
            <iframe
              title="MECF Facility Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.5750482591637!2d73.84074217600108!3d18.638166582479538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b84294b460d3%3A0xe54e3cbbaae4be7c!2sMIDC%20Bhosari%2C%20Pimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1723500000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
