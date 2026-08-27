"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Image as ImageIcon, Sparkles } from "lucide-react";

interface ImageSlotProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  recommendedDimensions?: string;
  aspectRatio?: string;
  priority?: boolean;
  badge?: string;
  overlayTitle?: string;
  overlaySub?: string;
  interactive?: boolean;
}

/**
 * ImagePlaceholder / ImageSlot component
 * Strictly implements the MECF asset slot protocol:
 * - Attempts to load image from /public/assets/...
 * - If missing or on error, renders an Apple-styled soft gray placeholder box
 *   specifying the target filename and recommended dimensions.
 * - Supports App Store style hover zoom & overlay text animations.
 */
export default function ImageSlot({
  src,
  alt,
  width = 800,
  height = 500,
  className = "",
  recommendedDimensions,
  aspectRatio = "aspect-video",
  priority = false,
  badge,
  overlayTitle,
  overlaySub,
  interactive = true,
}: ImageSlotProps) {
  const [hasError, setHasError] = useState(false);
  const fileName = src.split("/").pop() || "image.jpg";
  const displayDimensions = recommendedDimensions || `${width}×${height}`;

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-surface-alt border border-brand/40 flex flex-col justify-between group transition-[box-shadow,border-color,background-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
        interactive
          ? "hover:shadow-[0_24px_60px_rgba(38,50,65,0.14)] hover:border-[#4EAE87]/50"
          : ""
      } ${aspectRatio} ${className}`}
    >
      {!hasError ? (
        <>
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            onError={() => setHasError(true)}
            className={`w-full h-full object-cover transform-gpu transition-[transform,filter] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
              interactive ? "group-hover:scale-108 group-hover:brightness-105 motion-reduce:group-hover:scale-100" : ""
            }`}
          />

          {(overlayTitle || badge) && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex flex-col justify-between p-5 sm:p-6 text-white pointer-events-none">
              {badge ? (
                <div className="self-start">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-xs group-hover:bg-[#2F9C78] group-hover:border-[#2F9C78] transition-[background-color,border-color] duration-300 motion-reduce:transition-none">
                    <Sparkles className="w-3 h-3 text-amber-300" />
                    {badge}
                  </span>
                </div>
              ) : (
                <div />
              )}

              {overlayTitle && (
                <div className="mt-auto transform-gpu transition-transform duration-300 group-hover:-translate-y-1 motion-reduce:transform-none motion-reduce:transition-none">
                  {overlaySub && (
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#4EAE87] block mb-0.5">
                      {overlaySub}
                    </span>
                  )}
                  <h4 className="text-base sm:text-lg font-bold text-white leading-snug drop-shadow-sm">
                    {overlayTitle}
                  </h4>
                </div>
              )}
            </div>
          )}
        </>
      ) : null}

      {/* Fallback Slot Box (visible when image file is missing) */}
      {hasError && (
        <div className="absolute inset-0 p-6 flex flex-col items-center justify-center bg-gradient-to-br from-[#F6F4F0] to-[#EAE6DF] text-center select-none">
          <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#6E6E73] shadow-xs mb-3 border border-[#D2D2D7]/50 transform-gpu group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 motion-reduce:transform-none motion-reduce:transition-none">
            <ImageIcon className="w-6 h-6 stroke-[1.5] text-[#2F9C78]" />
          </div>
          <p className="text-sm font-semibold text-[#1D1D1F] tracking-tight mb-1">
            Drop-in Slot: <span className="font-mono text-xs text-[#2F9C78]">{fileName}</span>
          </p>
          <p className="text-xs text-[#6E6E73]">
            Target Path: <code className="text-[11px] bg-white px-1.5 py-0.5 rounded border border-[#D2D2D7]/60">{src}</code>
          </p>
          <p className="text-[11px] text-[#6E6E73] mt-2 font-medium">
            Recommended: {displayDimensions} • {alt}
          </p>
        </div>
      )}
    </div>
  );
}
