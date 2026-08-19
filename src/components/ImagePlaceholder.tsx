"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Image as ImageIcon } from "lucide-react";

interface ImageSlotProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  recommendedDimensions?: string;
  aspectRatio?: string;
  priority?: boolean;
}

/**
 * ImagePlaceholder / ImageSlot component
 * Strictly implements the MECF asset slot protocol:
 * - Attempts to load image from /public/assets/...
 * - If missing or on error, renders an Apple-styled soft gray placeholder box
 *   specifying the target filename and recommended dimensions.
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
}: ImageSlotProps) {
  const [hasError, setHasError] = useState(false);
  const fileName = src.split("/").pop() || "image.jpg";
  const displayDimensions = recommendedDimensions || `${width}×${height}`;

  return (
    <div
      className={`relative overflow-hidden rounded-xl bg-surface-alt border border-brand/40 flex flex-col items-center justify-center text-center ${aspectRatio} ${className}`}
    >
      {!hasError ? (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          onError={() => setHasError(true)}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
      ) : null}

      {/* Fallback Slot Box (visible when image file is not present) */}
      {hasError && (
        <div className="absolute inset-0 p-6 flex flex-col items-center justify-center bg-[#F5F5F7] text-center select-none">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#6E6E73] shadow-xs mb-3 border border-[#D2D2D7]/50">
            <ImageIcon className="w-6 h-6 stroke-[1.5]" />
          </div>
          <p className="text-sm font-semibold text-[#1D1D1F] tracking-tight mb-1">
            Drop-in Slot: <span className="font-mono text-xs text-[#0066FF]">{fileName}</span>
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
