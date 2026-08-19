"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  Star,
  ShieldCheck,
  CheckCircle2,
  Phone,
  Layers,
  ChevronRight,
} from "lucide-react";
import { useQuoteModal } from "./QuoteModalContext";
import { SITE_CONFIG, PROMO_OFFER } from "@/data/siteData";

interface ModernHeroProps {
  onToggleHero?: () => void;
}

export default function ModernHero({ onToggleHero }: ModernHeroProps) {
  const { openQuoteModal } = useQuoteModal();
  const [transparency, setTransparency] = useState<"light" | "medium" | "cinematic">("medium");

  // Overlay transparency styles for background image readability
  const overlayStyles = {
    light: "bg-gradient-to-b from-white/85 via-white/65 to-white/90",
    medium: "bg-gradient-to-b from-white/75 via-white/55 to-[#FAF8F5]/95",
    cinematic: "bg-gradient-to-b from-white/45 via-white/35 to-[#FAF8F5]",
  };

  return (
    <section className="relative w-full overflow-hidden border-b border-[#E2E8F0] bg-white min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-between">
      
      {/* Background Image Layer with Blur & Transparency Controls */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/hero/hero-facility-01.jpg"
          alt="MECF Pune 10m Semi-Anechoic Chamber"
          fill
          className="object-cover object-center transform transition-all duration-700"
          priority
        />
        {/* Translucent Glass Overlay */}
        <div
          className={`absolute inset-0 transition-all duration-300 backdrop-blur-[2px] ${overlayStyles[transparency]}`}
        />
      </div>

      {/* Top Controls Strip: Hero Style Switcher & Transparency Toggle */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-8 pt-6 flex items-center justify-between text-xs font-semibold">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/85 backdrop-blur-md border border-[#E2E8F0] text-[#3C5068] shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#4EAE87]" />
            <span>Modern Full-Bleed Hero</span>
          </span>
        </div>

          <div className="flex items-center gap-2">
            {/* Transparency Controls */}
            <div className="hidden sm:flex items-center gap-1 bg-white/80 backdrop-blur-md p-1 rounded-full border border-[#E2E8F0] shadow-xs">
              <span className="text-[10px] font-bold uppercase text-[#64748B] px-2">Overlay:</span>
              <button
                onClick={() => setTransparency("light")}
                className={`px-2.5 py-0.5 rounded-full text-[11px] font-medium transition-all ${
                  transparency === "light"
                    ? "bg-[#3C5068] text-white font-bold"
                    : "text-[#2D3748] hover:bg-white/60"
                }`}
              >
                Light
              </button>
              <button
                onClick={() => setTransparency("medium")}
                className={`px-2.5 py-0.5 rounded-full text-[11px] font-medium transition-all ${
                  transparency === "medium"
                    ? "bg-[#3C5068] text-white font-bold"
                    : "text-[#2D3748] hover:bg-white/60"
                }`}
              >
                Balanced
              </button>
              <button
                onClick={() => setTransparency("cinematic")}
                className={`px-2.5 py-0.5 rounded-full text-[11px] font-medium transition-all ${
                  transparency === "cinematic"
                    ? "bg-[#3C5068] text-white font-bold"
                    : "text-[#2D3748] hover:bg-white/60"
                }`}
              >
                Cinematic
              </button>
            </div>

            {/* Toggle to Classic Hero */}
            {onToggleHero && (
              <button
                onClick={onToggleHero}
                className="px-3.5 py-1 rounded-full bg-white/80 backdrop-blur-md border border-[#E2E8F0] text-[#3C5068] hover:bg-white transition-all text-xs font-bold shadow-xs cursor-pointer"
              >
                Switch to Classic Hero
              </button>
            )}
          </div>
        </div>

        {/* Hero Central Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-12 sm:py-20 text-center flex flex-col items-center justify-center space-y-8 my-auto">
          
          {/* Special Promotional Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#4EAE87]/40 shadow-sm text-xs font-bold text-[#3C5068]">
            <span className="w-2 h-2 rounded-full bg-[#4EAE87] animate-ping" />
            <span>Special Offer: {PROMO_OFFER.discountText} for MSMEs &amp; MCCIA Members</span>
          </div>

          {/* Main Display Headline with Serif Accent Styling */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl tracking-tight text-[#2D3748] leading-[1.1] font-semibold">
            <span className="font-serif italic font-normal text-[#3C5068] block sm:inline">
              Expert testing.
            </span>{" "}
            <span className="font-bold text-[#2D3748]">
              Certified compliance.
            </span>
          </h1>

          {/* Centered Subtitle */}
          <p className="text-base sm:text-xl text-[#64748B] leading-relaxed max-w-2xl font-normal">
            ₹71 Crore MeitY-approved Common Facility Centre in Pune. World-class 10m Semi-Anechoic EMI/EMC Chamber, IP68 testing, and 3.5T Vibration Shaker managed with TÜV Rheinland &amp; Cyronics.
          </p>

          {/* Centered Dual Pill Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            {/* Secondary Glass Pill Button */}
            <Link
              href="/services"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-[#2D3748] bg-white/80 hover:bg-white backdrop-blur-md border border-[#E2E8F0] shadow-md transition-all text-sm flex items-center justify-center gap-2 cursor-pointer hover:scale-105"
            >
              <span>Explore Lab Verticals</span>
            </Link>

            {/* Primary Action Pill Button with Circular Arrow */}
            <button
              onClick={() => openQuoteModal()}
              className="w-full sm:w-auto pl-8 pr-3 py-3 rounded-full font-bold text-white bg-[#4EAE87] hover:bg-[#3D9E78] active:scale-[0.98] transition-all shadow-xl flex items-center justify-center gap-3 text-sm cursor-pointer group hover:scale-105"
            >
              <span>Book Lab Slot</span>
              <div className="w-9 h-9 rounded-full bg-white text-[#4EAE87] flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          </div>

          {/* Rating & Social Proof Strip */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-[#64748B]">
            <div className="flex items-center gap-1 text-[#F4A261]">
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
            </div>
            <span className="font-semibold text-[#2D3748]">
              Rated 4.9/5 by 150+ Industry Clients
            </span>
            <span className="hidden sm:inline text-[#E2E8F0]">•</span>
            <span className="font-medium text-[#3C5068]">
              NABL ISO/IEC 17025 &amp; MeitY Approved
            </span>
          </div>

        </div>

        {/* Bottom Feature Badges Bar */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-8 py-4 bg-white/80 backdrop-blur-md border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-[#3C5068]">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#4EAE87]" />
            <span>Zero Annual Commitment (Pay-Per-Use)</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#4EAE87]" />
            <span>Acceptable for BIS, CE &amp; FCC</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#4EAE87]" />
            <span>10m SAC (9 kHz – 40 GHz Frequency)</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#4EAE87]" />
            <span>TÜV Rheinland Operating Partner</span>
          </div>
        </div>

    </section>
  );
}
