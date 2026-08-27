"use client";

import React from "react";
import Link from "next/link";
import ImageSlot from "./ImagePlaceholder";
import { ArrowRight, Sparkles, type LucideIcon } from "lucide-react";

export interface InteractiveImageCardProps {
  title: string;
  category?: string;
  badge?: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  icon?: LucideIcon;
  specs?: string[];
  aspectRatio?: string;
  className?: string;
}

export default function InteractiveImageCard({
  title,
  category,
  badge,
  description,
  imageSrc,
  imageAlt,
  href,
  ctaText = "Explore Vertical",
  onCtaClick,
  icon: Icon,
  specs,
  aspectRatio = "aspect-[16/10]",
  className = "",
}: InteractiveImageCardProps) {
  const cardContent = (
    <>
      {/* Top Image Section - App Store Today Card Header */}
      <div className={`relative w-full overflow-hidden bg-[#F6F4F0] ${aspectRatio}`}>
        <ImageSlot
          src={imageSrc}
          alt={imageAlt}
          aspectRatio="w-full h-full"
          className="rounded-none border-none aspect-auto w-full h-full object-cover transform-gpu transition-[transform,filter] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-108 group-hover:brightness-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />

        {/* Gradient Overlay for Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-between p-6 text-white transition-opacity duration-300">
          {/* Top Row: Floating Badge & Icon */}
          <div className="flex items-center justify-between">
            {category && (
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-extrabold tracking-wider uppercase bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-xs group-hover:bg-[#2F9C78] group-hover:border-[#2F9C78] transition-[background-color,border-color] duration-300 motion-reduce:transition-none">
                <Sparkles className="w-3 h-3 text-amber-300" />
                {category}
              </span>
            )}
            {badge && (
              <span className="ml-auto px-3 py-1 rounded-full text-[11px] font-bold bg-black/40 backdrop-blur-md border border-white/20 text-emerald-300">
                {badge}
              </span>
            )}
          </div>

          {/* Bottom Overlay Title */}
          <div className="mt-auto transform-gpu transition-transform duration-300 group-hover:-translate-y-1 motion-reduce:transform-none motion-reduce:transition-none">
            <div className="flex items-center gap-2 mb-1">
              {Icon && <Icon className="w-5 h-5 text-[#4EAE87]" />}
              <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight drop-shadow-md">
                {title}
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Content Area */}
      <div className="p-6 sm:p-8 bg-white flex flex-col justify-between gap-4">
        <p className="text-sm text-[#667085] leading-relaxed">
          {description}
        </p>

        {/* Specs List if provided */}
        {specs && specs.length > 0 && (
          <ul className="space-y-2 pt-2 border-t border-[#F0F4F8]">
            {specs.slice(0, 3).map((spec, i) => (
              <li key={i} className="text-xs text-[#263241] flex items-center gap-2 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2F9C78] shrink-0" />
                <span className="line-clamp-1">{spec}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Bottom CTA Row */}
        <div className="pt-3 border-t border-[#F0F4F8] flex items-center justify-between">
          <span className="text-xs font-extrabold text-[#2F9C78] group-hover:text-[#247F62] flex items-center gap-1.5 transition-colors">
            <span>{ctaText}</span>
            <ArrowRight className="w-4 h-4 transform-gpu transition-transform duration-300 group-hover:translate-x-1.5 motion-reduce:transform-none motion-reduce:transition-none" />
          </span>

          {onCtaClick && (
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onCtaClick();
              }}
              className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#2F9C78] hover:bg-[#247F62] active:scale-95 transition-[transform,background-color] cursor-pointer shadow-xs motion-reduce:transition-none"
            >
              Book Slot
            </button>
          )}
        </div>
      </div>
    </>
  );

  const containerClasses = `app-store-card group block overflow-hidden rounded-3xl bg-white border border-[#E7E2D9] transform-gpu transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:scale-[1.01] hover:shadow-[0_30px_70px_rgba(38,50,65,0.16),0_10px_30px_rgba(78,174,135,0.1)] hover:border-[#4EAE87]/50 motion-reduce:transform-none motion-reduce:transition-none ${className}`;

  if (href) {
    return (
      <Link href={href} className={containerClasses}>
        {cardContent}
      </Link>
    );
  }

  return <div className={containerClasses}>{cardContent}</div>;
}
