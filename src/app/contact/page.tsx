import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import EnquiryForm from "@/components/EnquiryForm";
import SpecTable, { ColumnDef } from "@/components/SpecTable";
import { SITE_CONFIG, TEAM_DIRECTORY, StaffMember } from "@/data/siteData";
import { MapPin, Phone, Mail, Clock, ShieldCheck, ExternalLink } from "lucide-react";

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
          <div className="font-bold text-[#2D3748]">{row.name}</div>
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
          className="text-xs font-semibold text-[#2D3748] hover:text-[#4EAE87]"
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
      <section className="py-16 sm:py-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Col: Contact Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C82A6]">
                  Direct Touchpoints
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#2D3748] mt-1">
                  Get in Touch
                </h2>
                <p className="text-sm text-[#64748B] mt-2">
                  Our lab coordinators are available Monday through Friday to address scheduling and technical queries.
                </p>
              </div>

              <div className="space-y-4">
                {/* Address Card */}
                <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E2E8F0] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#5C82A6]/12 text-[#3C5068] flex items-center justify-center shrink-0 mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#2D3748]">Facility Location</h3>
                    <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
                      {SITE_CONFIG.address}
                    </p>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E2E8F0] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#4EAE87]/15 text-[#4EAE87] flex items-center justify-center shrink-0 mt-1">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#2D3748]">Phone & Boardline</h3>
                    <div className="mt-1 space-y-1 text-xs">
                      <a
                        href={`tel:${SITE_CONFIG.phone}`}
                        className="block font-semibold text-[#4EAE87] hover:underline"
                      >
                        Executive Contact: {SITE_CONFIG.phone}
                      </a>
                      <a
                        href={`tel:${SITE_CONFIG.mobilePhone}`}
                        className="block font-semibold text-[#4EAE87] hover:underline"
                      >
                        Mobile Support: {SITE_CONFIG.mobilePhone}
                      </a>
                      <a
                        href={`tel:${SITE_CONFIG.landlinePhone}`}
                        className="block text-[#64748B] hover:underline"
                      >
                        Landline: {SITE_CONFIG.landlinePhone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email Card */}
                <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E2E8F0] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#4EAE87]/15 text-[#4EAE87] flex items-center justify-center shrink-0 mt-1">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#2D3748]">Email Communications</h3>
                    <div className="mt-1 space-y-1 text-xs">
                      <a
                        href={`mailto:${SITE_CONFIG.email}`}
                        className="block font-semibold text-[#4EAE87] hover:underline"
                      >
                        CEO Office (Nikhil Jain): {SITE_CONFIG.email}
                      </a>
                      <a
                        href={`mailto:${SITE_CONFIG.pratikEmail}`}
                        className="block font-semibold text-[#4EAE87] hover:underline"
                      >
                        Executive Contact (Pratik Pardeshi): {SITE_CONFIG.pratikEmail}
                      </a>
                      <a
                        href={`mailto:${SITE_CONFIG.generalEmail}`}
                        className="block text-[#64748B] hover:underline"
                      >
                        General Enquiries: {SITE_CONFIG.generalEmail}
                      </a>
                      <a
                        href={SITE_CONFIG.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-[11px] font-bold text-[#3C5068] hover:underline pt-1"
                      >
                        Official Website: www.mecfpune.com →
                      </a>
                    </div>
                  </div>
                </div>

                {/* Hours Card */}
                <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E2E8F0] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#5C82A6]/12 text-[#3C5068] flex items-center justify-center shrink-0 mt-1">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#2D3748]">Working Hours</h3>
                    <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
                      {SITE_CONFIG.workingHours}
                    </p>
                    <p className="text-[11px] text-[#5C82A6] mt-1 font-medium">
                      (Extended weekend testing slots available for contributing members)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: Form */}
            <div className="lg:col-span-7">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Staff Directory Table */}
      <section className="py-16 bg-[#F0F4F8] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5C82A6]">
              Direct Directory
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#2D3748] mt-1">
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
              <h2 className="text-2xl font-bold tracking-tight text-[#2D3748] mt-1">
                MECF Common Facility Centre at MIDC Bhosari, Pune
              </h2>
            </div>
            <a
              href="https://maps.google.com/?q=MECF+MIDC+Bhosari+Pune+411026"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#3C5068] hover:bg-[#4EAE87] transition-all shadow-xs"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="w-full h-96 rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-xs relative">
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
