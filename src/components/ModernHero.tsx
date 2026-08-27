"use client";

import { useEffect, useRef, type PointerEventHandler } from "react";
import { ArrowRight } from "lucide-react";
import { useQuoteModal } from "./QuoteModalContext";

export default function ModernHero() {
  const { openQuoteModal } = useQuoteModal();
  const heroRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const pointerRef = useRef({ x: 52, y: 45 });

  useEffect(() => {
    return () => {
      if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const handlePointerMove: PointerEventHandler<HTMLDivElement> = (event) => {
    if (!heroRef.current || event.pointerType === "touch") return;
    const rect = heroRef.current.getBoundingClientRect();
    pointerRef.current = {
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
    };
    if (frameRef.current !== null) return;
    frameRef.current = window.requestAnimationFrame(() => {
      if (heroRef.current) {
        heroRef.current.style.setProperty("--hero-x", `${pointerRef.current.x}%`);
        heroRef.current.style.setProperty("--hero-y", `${pointerRef.current.y}%`);
      }
      frameRef.current = null;
    });
  };

  return (
    <section className="hero-stage-wrap">
      <div ref={heroRef} onPointerMove={handlePointerMove} className="shader-hero-shell" aria-label="MECF electronics testing and certification facility">
        <div className="hero-image-layer" aria-hidden="true" />
        <div className="hero-shader-layer" aria-hidden="true" />

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
