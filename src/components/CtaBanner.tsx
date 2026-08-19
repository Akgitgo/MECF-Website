"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, PhoneCall, Calendar } from "lucide-react";
import { useQuoteModal } from "./QuoteModalContext";
import { SITE_CONFIG } from "@/data/siteData";

interface CtaBannerProps {
  title?: string;
  subtitle?: string;
  primaryActionText?: string;
  secondaryActionText?: string;
  secondaryActionHref?: string;
  theme?: "navy" | "light";
}

export default function CtaBanner({
  title = "Accelerate Your Electronics Certification & Testing Timeline",
  subtitle = "Leverage India's premier MeitY-approved Common Facility Centre. Book lab testing slots, reserve the 10m Anechoic chamber, or explore our contributing member discount bands.",
  primaryActionText = "Get a Testing Quote",
  secondaryActionText = "Speak with Engineering Team",
  secondaryActionHref = "/contact",
  theme = "navy",
}: CtaBannerProps) {
  const { openQuoteModal } = useQuoteModal();

  if (theme === "light") {
    return (
      <section className="py-16 sm:py-20 bg-[#F0F4F8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E2E8F0] apple-card-shadow">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#2D3748] max-w-3xl mx-auto">
              {title}
            </h2>
            <p className="text-base sm:text-lg text-[#64748B] mt-4 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => openQuoteModal()}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-white bg-[#4EAE87] hover:bg-[#3D9E78] active:scale-[0.98] transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{primaryActionText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                href={secondaryActionHref}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-[#2D3748] bg-[#F0F4F8] hover:bg-[#E2E8F0] transition-all flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-[#4EAE87]" />
                <span>{secondaryActionText}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 sm:py-24 bg-[#3C5068] text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-white/10 text-white/90 border border-white/20 mb-6">
          <Calendar className="w-3.5 h-3.5 text-[#74C69D]" />
          Instant Scheduling & Pay-Per-Use Lab Bookings
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white max-w-3xl mx-auto leading-tight">
          {title}
        </h2>
        <p className="text-base sm:text-lg text-[#E2E8F0] mt-5 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => openQuoteModal()}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-white bg-[#4EAE87] hover:bg-[#3D9E78] active:scale-[0.98] transition-all shadow-md flex items-center justify-center gap-2 text-base cursor-pointer"
          >
            <span>{primaryActionText}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <a
            href={`tel:${SITE_CONFIG.phoneFormatted}`}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-white bg-white/10 hover:bg-white/20 transition-all flex items-center justify-center gap-2 text-base"
          >
            <PhoneCall className="w-5 h-5 text-[#74C69D]" />
            <span>Call {SITE_CONFIG.phoneFormatted}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
