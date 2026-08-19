import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Zap,
  ArrowUpRight,
} from "lucide-react";
import { SITE_CONFIG } from "@/data/siteData";

function LinkedInIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2Z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function XIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c0-5.445 4.43-9.874 9.877-9.874 2.636 0 5.115 1.027 6.978 2.892s2.887 4.344 2.886 6.982c-.002 5.447-4.432 9.875-9.86 9.875M12.051 0C5.405 0 0 5.405 0 12.051c0 2.122.553 4.194 1.603 6.014L.053 24l6.096-1.599a11.968 11.968 0 005.902 1.547h.005c6.646 0 12.05-5.405 12.05-12.051A12.05 12.05 0 0012.051 0z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#3C5068] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: About / Brand Lockup */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block group">
              <div className="bg-white p-2.5 rounded-xl inline-flex items-center justify-center group-hover:scale-[1.02] transition-transform shadow-xs">
                <Image
                  src="/assets/images/icons/MECFLOGO.png"
                  alt="MECF - MCCIA Electronic Cluster Foundation"
                  width={180}
                  height={48}
                  className="h-10 w-auto object-contain"
                />
              </div>
            </Link>

            <p className="text-sm text-[#E2E8F0] leading-relaxed max-w-sm">
              Approved Common Facility Centre (CFC) under the Electronics Manufacturing Cluster (EMC) Scheme, Ministry of Electronics & IT (MeitY), Government of India. Operating Section 8 not-for-profit SPV by MCCIA.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#4EAE87]/20 text-[#74C69D] border border-[#4EAE87]/40">
                <ShieldCheck className="w-3.5 h-3.5" />
                NABL Accredited Testing Facility
              </span>
            </div>

            {/* Social Media Icon Bar */}
            <div className="pt-2 flex items-center gap-2.5">
              <a
                href={SITE_CONFIG.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#4EAE87] text-white flex items-center justify-center transition-all shadow-xs"
                aria-label="Connect on LinkedIn"
                title="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4 text-[#7CA1D3] hover:text-white" />
              </a>

              <a
                href={SITE_CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#4EAE87] text-white flex items-center justify-center transition-all shadow-xs"
                aria-label="Follow on Instagram"
                title="Instagram"
              >
                <InstagramIcon className="w-4 h-4 text-[#7CA1D3] hover:text-white" />
              </a>

              <a
                href={SITE_CONFIG.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#4EAE87] text-white flex items-center justify-center transition-all shadow-xs"
                aria-label="Follow on X (Twitter)"
                title="X (Twitter)"
              >
                <XIcon className="w-4 h-4 text-[#7CA1D3] hover:text-white" />
              </a>

              <a
                href={SITE_CONFIG.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#4EAE87] text-white flex items-center justify-center transition-all shadow-xs"
                aria-label="Chat on WhatsApp"
                title="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#7CA1D3] hover:text-white" />
              </a>
            </div>
          </div>

          {/* Col 2: Services & Verticals */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Testing Verticals
            </h3>
            <ul className="space-y-2 text-sm text-[#E2E8F0]">
              <li>
                <Link
                  href="/services/test-certification"
                  className="hover:text-white transition-colors block"
                >
                  Test & Certification (TÜV)
                </Link>
              </li>
              <li>
                <Link
                  href="/services/emi-emc"
                  className="hover:text-white transition-colors block"
                >
                  EMI / EMC 10m SAC (40 GHz)
                </Link>
              </li>
              <li>
                <Link
                  href="/services/test-measurement"
                  className="hover:text-white transition-colors block"
                >
                  Test & Measurement (Cyronics)
                </Link>
              </li>
              <li>
                <Link
                  href="/services/design-simulation"
                  className="hover:text-white transition-colors block"
                >
                  Design & Simulation (3D Eng.)
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-[#7CA1D3] hover:underline font-medium pt-1 block"
                >
                  View All Testing Specs →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Organization & Governance */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Organization
            </h3>
            <ul className="space-y-2 text-sm text-[#E2E8F0]">
              <li>
                <Link href="/about" className="hover:text-white transition-colors block">
                  About Us & Governance
                </Link>
              </li>
              <li>
                <Link href="/background" className="hover:text-white transition-colors block">
                  MeitY EMC Origin & Funding
                </Link>
              </li>
              <li>
                <Link
                  href="/operating-partners"
                  className="hover:text-white transition-colors block"
                >
                  Operating Partners
                </Link>
              </li>
              <li>
                <Link href="/membership" className="hover:text-white transition-colors block">
                  Membership & Contribution Tiers
                </Link>
              </li>
              <li>
                <Link
                  href="/statutory-compliance"
                  className="hover:text-white transition-colors block"
                >
                  Statutory & NABL Compliance
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Facility & Contact Info */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Facility & Enquiries
            </h3>
            <ul className="space-y-2 text-xs text-[#E2E8F0]">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#74C69D] shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#74C69D] shrink-0" />
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="hover:text-white transition-colors"
                >
                  Mobile: {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#74C69D] shrink-0" />
                <a
                  href={`tel:${SITE_CONFIG.landlinePhone}`}
                  className="hover:text-white transition-colors"
                >
                  Landline: {SITE_CONFIG.landlinePhone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#74C69D] shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hover:text-white transition-colors"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#74C69D] shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.pratikEmail}`}
                  className="hover:text-white transition-colors"
                >
                  {SITE_CONFIG.pratikEmail}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#74C69D] shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#D2D2D7]/70 gap-4">
          <p>
            Copyright © {new Date().getFullYear()} {SITE_CONFIG.fullName}. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/statutory-compliance" className="hover:text-white transition-colors">
              Statutory Disclosures
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact Directory
            </Link>
            <Link href="/membership" className="hover:text-white transition-colors">
              Sponsorship Bands
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
