"use client";

import { ArrowRight } from "lucide-react";
import { useQuoteModal } from "./QuoteModalContext";

export default function ModernHero() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="hero-stage-wrap">
      <div className="shader-hero-shell" aria-label="MECF electronics testing and certification facility">
        <div className="hero-image-layer" aria-hidden="true" />

        <div className="hero-content relative z-10">
          <h1>
            <span className="hero-headline-line">Built for the hardware</span>
            <span className="hero-headline-line">that moves India forward.</span>
          </h1>
          <p>World-class EMI/EMC, safety, IP and reliability testing at a ₹71 Crore facility in Pune, operated with TÜV Rheinland and Cyronics.</p>
          <button type="button" onClick={() => openQuoteModal()} className="hero-quote-cta">
            <span>Get a Testing Quote</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        <div className="hero-footnote relative z-10"><span>10m Semi-Anechoic Chamber</span><span>IP68 Testing</span><span>3.5T Vibration Shaker</span></div>
      </div>
    </section>
  );
}
