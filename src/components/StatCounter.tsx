"use client";

import React from "react";
import CounterNumber from "./CounterNumber";
import SpotlightCard from "./SpotlightCard";

export interface StatItem {
  value: number;
  decimals?: number;
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
  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 ${className}`}>
      {stats.map((stat, idx) => (
        <StatCard key={idx} stat={stat} />
      ))}
    </div>
  );
}

function StatCard({ stat }: { stat: StatItem }) {
  return (
    <SpotlightCard
      spotlightColor="rgba(116, 198, 157, 0.16)"
      className="group flex flex-col p-6 !rounded-none !bg-white border border-[#E7E2D9] shadow-[0_14px_30px_rgba(38,50,65,0.08)] text-center sm:text-left transition-all hover:-translate-y-1 hover:shadow-[0_22px_42px_rgba(38,50,65,0.14)] duration-200 cursor-pointer"
    >
      <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#263241] flex items-baseline justify-center sm:justify-start group-hover:scale-105 transition-transform duration-200">
        <CounterNumber
          value={stat.value}
          decimals={stat.decimals || 0}
          prefix={stat.prefix}
          suffix={stat.suffix}
          duration={900}
          animateOnHover={false}
          className="text-[#263241]"
        />
      </div>
      <div className="text-sm font-bold text-[#263241] mt-2 group-hover:text-[#2F9C78] transition-colors">
        {stat.label}
      </div>
      {stat.sublabel && (
        <div className="text-xs text-[#667085] mt-1 font-medium">
          {stat.sublabel}
        </div>
      )}
    </SpotlightCard>
  );
}
