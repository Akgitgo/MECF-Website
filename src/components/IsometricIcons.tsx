"use client";

import React from "react";

interface IsoIconProps {
  className?: string;
  size?: number;
}

/**
 * 1. Isometric Test & Certification Icon (Safety, IP68, Climatic, Vibration)
 */
export function IsoTestCertification({ className = "", size = 64 }: IsoIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`drop-shadow-md transition-transform duration-300 hover:scale-105 ${className}`}
    >
      <defs>
        <linearGradient id="iso-navy-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4A607A" />
          <stop offset="100%" stopColor="#3C5068" />
        </linearGradient>
        <linearGradient id="iso-green-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#68D391" />
          <stop offset="100%" stopColor="#4EAE87" />
        </linearGradient>
        <linearGradient id="iso-orange-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F6AD55" />
          <stop offset="100%" stopColor="#F4A261" />
        </linearGradient>
        <linearGradient id="iso-slate-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F0F4F8" />
          <stop offset="100%" stopColor="#E2E8F0" />
        </linearGradient>
        <filter id="iso-glow-green" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* 3D Base Cube Platform */}
      <path d="M60 92L18 68L60 44L102 68L60 92Z" fill="url(#iso-navy-grad)" />
      <path d="M18 68L60 92V108L18 84V68Z" fill="#2C3D52" />
      <path d="M102 68L60 92V108L102 84V68Z" fill="#233245" />

      {/* Secondary Tech Plate */}
      <path d="M60 76L30 59L60 42L90 59L60 76Z" fill="url(#iso-slate-grad)" />
      <path d="M30 59L60 76V82L30 65V59Z" fill="#CBD5E1" />
      <path d="M90 59L60 76V82L90 65V59Z" fill="#94A3B8" />

      {/* 3D Floating Holographic Shield */}
      <path d="M60 20L36 34V52C36 67 46 80 60 84C74 80 84 67 84 52V34L60 20Z" fill="url(#iso-green-grad)" opacity="0.9" />
      <path d="M60 20L84 34V52C84 67 74 80 60 84V20Z" fill="#3D9E78" />

      {/* Shield Inner Checkmark */}
      <path d="M48 48L56 56L72 40" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />

      {/* Ambient Pulsing Nodes */}
      <circle cx="60" cy="14" r="4" fill="#68D391" filter="url(#iso-glow-green)" />
      <circle cx="20" cy="64" r="3" fill="#F4A261" />
      <circle cx="100" cy="64" r="3" fill="#4EAE87" />
    </svg>
  );
}

/**
 * 2. Isometric 10m Anechoic Chamber Icon (EMI/EMC, RF)
 */
export function IsoAnechoicChamber({ className = "", size = 64 }: IsoIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`drop-shadow-md transition-transform duration-300 hover:scale-105 ${className}`}
    >
      <defs>
        <linearGradient id="chamber-base" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4A607A" />
          <stop offset="100%" stopColor="#3C5068" />
        </linearGradient>
        <linearGradient id="chamber-wall" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5C728D" />
          <stop offset="100%" stopColor="#4A607A" />
        </linearGradient>
      </defs>

      {/* 3D Anechoic Room Structure */}
      <path d="M60 24L100 46V84L60 106L20 84V46L60 24Z" fill="url(#chamber-base)" stroke="#4EAE87" strokeWidth="1.5" />
      <path d="M20 46L60 68V106L20 84V46Z" fill="#2C3D52" />
      <path d="M100 46L60 68V106L100 84V46Z" fill="#233245" />
      <path d="M60 24L100 46L60 68L20 46L60 24Z" fill="url(#chamber-wall)" />

      {/* Pyramidal Absorber Patterns (Isometric Tiles) */}
      <path d="M40 35L50 40L40 45L30 40L40 35Z" fill="#F4A261" opacity="0.9" />
      <path d="M60 35L70 40L60 45L50 40L60 35Z" fill="#4EAE87" opacity="0.9" />
      <path d="M80 35L90 40L80 45L70 40L80 35Z" fill="#F4A261" opacity="0.9" />

      {/* 3D Floating RF Electromagnetic Wave Rings */}
      <ellipse cx="60" cy="54" rx="28" ry="14" stroke="#68D391" strokeWidth="2.5" strokeDasharray="4 3" opacity="0.95" />
      <ellipse cx="60" cy="54" rx="18" ry="9" stroke="#F4A261" strokeWidth="2" strokeDasharray="3 2" />

      {/* Central Antenna Mast Node */}
      <path d="M60 40V64" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
      <circle cx="60" cy="38" r="5" fill="#F4A261" />
    </svg>
  );
}

/**
 * 3. Isometric Test & Measurement Icon (Instruments, Rental, Calibration)
 */
export function IsoTestMeasurement({ className = "", size = 64 }: IsoIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`drop-shadow-md transition-transform duration-300 hover:scale-105 ${className}`}
    >
      <defs>
        <linearGradient id="scope-top" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4A607A" />
          <stop offset="100%" stopColor="#3C5068" />
        </linearGradient>
        <linearGradient id="scope-side" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4EAE87" />
          <stop offset="100%" stopColor="#3D9E78" />
        </linearGradient>
      </defs>

      {/* Base Bench Plate */}
      <path d="M60 90L16 66L60 42L104 66L60 90Z" fill="#3C5068" />
      <path d="M16 66L60 90V98L16 74V66Z" fill="#2C3D52" />
      <path d="M104 66L60 90V98L104 74V66Z" fill="#233245" />

      {/* 3D Stacked Oscilloscope Unit */}
      <path d="M60 74L26 55L60 36L94 55L60 74Z" fill="url(#scope-top)" />
      <path d="M26 55L60 74V84L26 65V55Z" fill="#2C3D52" />
      <path d="M94 55L60 74V84L94 65V55Z" fill="#233245" />

      {/* Digital Wave Screen Display */}
      <path d="M40 50L75 30L85 36L50 56L40 50Z" fill="#2D3748" stroke="#4EAE87" strokeWidth="1.5" />
      <path d="M44 48Q52 40 58 46T72 40" stroke="#68D391" strokeWidth="2.5" strokeLinecap="round" fill="none" />

      {/* Rotary Knobs & Probes */}
      <circle cx="34" cy="58" r="3.5" fill="#F4A261" />
      <circle cx="44" cy="64" r="3.5" fill="#4EAE87" />
      <path d="M78 62L96 72" stroke="#F4A261" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

/**
 * 4. Isometric Design & Simulation Icon (Ansys, Siemens CAD/CAM, Digital Twin)
 */
export function IsoDesignSimulation({ className = "", size = 64 }: IsoIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`drop-shadow-md transition-transform duration-300 hover:scale-105 ${className}`}
    >
      <defs>
        <linearGradient id="chip-top" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#68D391" />
          <stop offset="100%" stopColor="#4EAE87" />
        </linearGradient>
      </defs>

      {/* Base Grid Layer */}
      <path d="M60 92L18 68L60 44L102 68L60 92Z" fill="#3C5068" stroke="#4EAE87" strokeWidth="1" strokeDasharray="3 3" />
      <path d="M18 68L60 92V100L18 76V68Z" fill="#2C3D52" />
      <path d="M102 68L60 92V100L102 76V68Z" fill="#233245" />

      {/* 3D Holographic Microchip Layer */}
      <path d="M60 70L30 53L60 36L90 53L60 70Z" fill="url(#chip-top)" />
      <path d="M30 53L60 70V76L30 59V53Z" fill="#3D9E78" />
      <path d="M90 53L60 70V76L90 59V53Z" fill="#2E8B65" />

      {/* 3D Floating Digital Twin Wireframe */}
      <path d="M60 48L42 38L60 28L78 38L60 48Z" fill="none" stroke="#F4A261" strokeWidth="2" />
      <path d="M42 38V22L60 12L78 22V38" fill="none" stroke="#F4A261" strokeWidth="2" strokeDasharray="3 2" />
      <path d="M60 28V12" stroke="#FFFFFF" strokeWidth="2" />

      {/* Node Spheres */}
      <circle cx="60" cy="12" r="4.5" fill="#F4A261" />
      <circle cx="42" cy="22" r="3" fill="#68D391" />
      <circle cx="78" cy="22" r="3" fill="#68D391" />
    </svg>
  );
}

/**
 * 5. Isometric Cutting-Edge Testing Feature Icon
 */
export function IsoCuttingEdge({ className = "", size = 60 }: IsoIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`drop-shadow-sm transition-transform duration-300 hover:scale-105 ${className}`}
    >
      <path d="M50 78L14 57L50 36L86 57L50 78Z" fill="#3C5068" />
      <path d="M14 57L50 78V84L14 63V57Z" fill="#2C3D52" />
      <path d="M86 57L50 78V84L86 63V57Z" fill="#233245" />

      <path d="M50 62L26 48L50 34L74 48L50 62Z" fill="#4EAE87" />
      <path d="M26 48L50 62V66L26 52V48Z" fill="#3D9E78" />
      <path d="M74 48L50 62V66L74 52V48Z" fill="#2E8B65" />

      <path d="M50 44L36 36L50 28L64 36L50 44Z" fill="#F4A261" />
      <circle cx="50" cy="22" r="4" fill="#68D391" />
    </svg>
  );
}

/**
 * 6. Isometric Fast Turnaround Feature Icon
 */
export function IsoFastTurnaround({ className = "", size = 60 }: IsoIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`drop-shadow-sm transition-transform duration-300 hover:scale-105 ${className}`}
    >
      <path d="M50 82L16 62L50 42L84 62L50 82Z" fill="#3C5068" />
      <path d="M16 62L50 82V88L16 68V62Z" fill="#2C3D52" />
      <path d="M84 62L50 82V88L84 68V62Z" fill="#233245" />

      {/* 3D Clock Dial */}
      <circle cx="50" cy="45" r="22" fill="#4EAE87" stroke="#FFFFFF" strokeWidth="3" />
      <path d="M50 45L50 31" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M50 45L62 45" stroke="#F4A261" strokeWidth="3.5" strokeLinecap="round" />

      {/* Fast Energy Arrow */}
      <path d="M68 28L78 22M74 34L86 28" stroke="#F4A261" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

/**
 * 7. Isometric Cost Efficiency Feature Icon
 */
export function IsoCostEfficiency({ className = "", size = 60 }: IsoIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`drop-shadow-sm transition-transform duration-300 hover:scale-105 ${className}`}
    >
      <path d="M50 82L16 62L50 42L84 62L50 82Z" fill="#3C5068" />
      <path d="M16 62L50 82V88L16 68V62Z" fill="#2C3D52" />
      <path d="M84 62L50 82V88L84 68V62Z" fill="#233245" />

      {/* 3D Coin Stack Base */}
      <path d="M50 64L30 52L50 40L70 52L50 64Z" fill="#F4A261" />
      <path d="M30 52L50 64V68L30 56V52Z" fill="#E08D4D" />
      <path d="M70 52L50 64V68L70 56V52Z" fill="#C67637" />

      {/* 3D Growth Diamond */}
      <path d="M50 46L36 36L50 26L64 36L50 46Z" fill="#4EAE87" />
      <path d="M36 36L50 46V52L36 42V36Z" fill="#3D9E78" />
      <path d="M64 36L50 46V52L64 42V36Z" fill="#2E8B65" />

      <path d="M50 26L42 20L50 14L58 20L50 26Z" fill="#FFFFFF" />
    </svg>
  );
}
