"use client";

import React, { useEffect, useState, useRef } from "react";

interface StatItem {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sublabel?: string;
}

interface StatCounterProps {
  stats?: StatItem[];
  className?: string;
}

const DEFAULT_STATS: StatItem[] = [
  { value: 150, suffix: "+", label: "Industry Clients Served", sublabel: "Automotive, Medical & MSMEs" },
  { value: 40, suffix: "+", label: "Testing Standards Covered", sublabel: "IEC, CISPR, MIL-STD & BIS" },
  { value: 10, suffix: "m", label: "Semi-Anechoic Chamber", sublabel: "Up to 40 GHz Radiated Testing" },
  { value: 71, prefix: "₹", suffix: " Cr", label: "Operational Asset Base", sublabel: "MeitY, GoM & MCCIA SPV" },
];

export default function StatCounter({
  stats = DEFAULT_STATS,
  className = "",
}: StatCounterProps) {
  const [inView, setInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 ${className}`}
    >
      {stats.map((stat, idx) => (
        <CounterBlock key={idx} stat={stat} shouldAnimate={inView} />
      ))}
    </div>
  );
}

function CounterBlock({
  stat,
  shouldAnimate,
}: {
  stat: StatItem;
  shouldAnimate: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldAnimate) return;

    let start = 0;
    const end = stat.value;
    const duration = 1200; // ms
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [shouldAnimate, stat.value]);

  return (
    <div className="flex flex-col p-6 rounded-2xl bg-[#3C5068] border border-white/10 shadow-lg text-center sm:text-left transition-all hover:-translate-y-1 hover:shadow-xl duration-200">
      <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white flex items-baseline justify-center sm:justify-start">
        {stat.prefix && <span className="text-white mr-0.5">{stat.prefix}</span>}
        <span>{shouldAnimate ? count : stat.value}</span>
        {stat.suffix && <span className="text-[#74C69D] ml-0.5">{stat.suffix}</span>}
      </div>
      <div className="text-sm font-bold text-white mt-2">
        {stat.label}
      </div>
      {stat.sublabel && (
        <div className="text-xs text-[#E2E8F0] mt-1 font-medium">
          {stat.sublabel}
        </div>
      )}
    </div>
  );
}
