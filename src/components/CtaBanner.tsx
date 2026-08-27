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
      <section className="py-16 sm:py-20 bg-[#F6F4F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E7E2D9] apple-card-shadow premium-card">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#263241] max-w-3xl mx-auto">
              {title}
            </h2>
            <p className="text-base sm:text-lg text-[#667085] mt-4 max-w-2xl mx-auto leading-8">
              {subtitle}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => openQuoteModal()}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-white bg-[#2F9C78] hover:bg-[#247F62] active:scale-[0.98] transition-all btn-premium flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{primaryActionText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                href={secondaryActionHref}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-[#263241] bg-[#F6F4F0] hover:bg-[#EEE9E0] border border-[#E7E2D9] transition-all flex items-center justify-center gap-2"
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
    <section className="bg-white py-8 text-[#263241] sm:py-12">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16 lg:px-10">
        <div className="max-w-3xl">
          <span className="mb-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#2F9C78] font-label">
            <Calendar className="h-3.5 w-3.5" />
            Instant scheduling & pay-per-use lab bookings
          </span>
          <h2 className="max-w-3xl text-left text-3xl font-extrabold leading-tight text-[#263241] sm:text-5xl">
            {title}
          </h2>
          <p className="mt-5 max-w-2xl text-left text-base leading-8 text-[#667085] sm:text-lg">
            {subtitle}
          </p>
        </div>

        <div className="flex w-full flex-col gap-3 lg:w-[290px]">
          <button
            onClick={() => openQuoteModal()}
            className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#2F9C78] px-8 py-4 text-base font-semibold text-white transition-all hover:bg-[#247F62] active:scale-[0.98] btn-premium"
          >
            <span>{primaryActionText}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <a
            href={`tel:${SITE_CONFIG.phoneFormatted}`}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#E7E2D9] bg-[#F6F4F0] px-8 py-4 text-base font-semibold text-[#263241] transition-all hover:bg-[#EEE9E0]"
          >
            <PhoneCall className="w-5 h-5 text-[#74C69D]" />
            <span>Call {SITE_CONFIG.phoneFormatted}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
