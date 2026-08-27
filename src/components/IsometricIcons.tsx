"use client";

import React from "react";
import Image from "next/image";

interface IsoIconProps {
  className?: string;
  size?: number;
}

/**
 * 1. Isometric Test & Certification Icon (Safety, IP68, Climatic, Vibration)
 */
export function IsoTestCertification({ className = "", size = 64 }: IsoIconProps) {
  return (
    <Image
      src="/assets/images/icons/IsoTestCert — Electrical Product Safety & Environmental Testing Vertical.png"
      alt="Electrical Product Safety & Environmental Testing"
      width={size * 2}
      height={size * 2}
      className={`mix-blend-multiply object-contain transition-transform duration-300 hover:scale-105 ${className}`}
      style={{ width: size, height: size }}
    />
  );
}

/**
 * 2. Isometric 10m Anechoic Chamber Icon (EMI/EMC, RF)
 */
export function IsoAnechoicChamber({ className = "", size = 64 }: IsoIconProps) {
  return (
    <Image
      src="/assets/images/icons/IsoEmiEmc — 10m Semi-Anechoic EMIEMC Chamber Vertical.png"
      alt="10m Semi-Anechoic EMI/EMC Chamber"
      width={size * 2}
      height={size * 2}
      className={`mix-blend-multiply object-contain transition-transform duration-300 hover:scale-105 ${className}`}
      style={{ width: size, height: size }}
    />
  );
}

/**
 * 3. Isometric Test & Measurement Icon (Instruments, Rental, Calibration)
 */
export function IsoTestMeasurement({ className = "", size = 64 }: IsoIconProps) {
  return (
    <Image
      src="/assets/images/icons/IsoTestMeasurement — Test & Measurement Equipment Rental Vertical.png"
      alt="Test & Measurement Equipment Rental"
      width={size * 2}
      height={size * 2}
      className={`mix-blend-multiply object-contain transition-transform duration-300 hover:scale-105 ${className}`}
      style={{ width: size, height: size }}
    />
  );
}

/**
 * 4. Isometric Design & Simulation Icon (Ansys, Siemens CAD/CAM, Digital Twin)
 */
export function IsoDesignSimulation({ className = "", size = 64 }: IsoIconProps) {
  return (
    <Image
      src="/assets/images/icons/IsoDesignSimulation — CAD CAM Ansys Multiphysics & Digital Twin Vertical.png"
      alt="Design & Simulation Centre"
      width={size * 2}
      height={size * 2}
      className={`mix-blend-multiply object-contain transition-transform duration-300 hover:scale-105 ${className}`}
      style={{ width: size, height: size }}
    />
  );
}

/**
 * 5. Isometric Cutting-Edge Testing Feature Icon
 */
export function IsoCuttingEdge({ className = "", size = 60 }: IsoIconProps) {
  return (
    <Image
      src="/assets/images/icons/IsoCuttingEdge — Cutting-Edge Electronics Testing Lab.png"
      alt="Cutting-Edge Electronics Testing Lab"
      width={size * 2}
      height={size * 2}
      className={`mix-blend-multiply object-contain transition-transform duration-300 hover:scale-105 ${className}`}
      style={{ width: size, height: size }}
    />
  );
}

/**
 * 6. Isometric Fast Turnaround Feature Icon
 */
export function IsoFastTurnaround({ className = "", size = 60 }: IsoIconProps) {
  return (
    <Image
      src="/assets/images/icons/IsoFastTurnaround — Ultra-Fast Express Test Scheduling.png"
      alt="Ultra-Fast Express Test Scheduling"
      width={size * 2}
      height={size * 2}
      className={`mix-blend-multiply object-contain transition-transform duration-300 hover:scale-105 ${className}`}
      style={{ width: size, height: size }}
    />
  );
}

/**
 * 7. Isometric Cost Efficiency Feature Icon
 */
export function IsoCostEfficiency({ className = "", size = 60 }: IsoIconProps) {
  return (
    <Image
      src="/assets/images/icons/IsoCostEfficiency — Subsidized Non-Profit Testing & Cost Savings.png"
      alt="Subsidized Non-Profit Testing & Cost Savings"
      width={size * 2}
      height={size * 2}
      className={`mix-blend-multiply object-contain transition-transform duration-300 hover:scale-105 ${className}`}
      style={{ width: size, height: size }}
    />
  );
}


