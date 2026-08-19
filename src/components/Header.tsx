"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  MapPin,
  ShieldCheck,
  Zap,
  Radio,
  Sliders,
  Cpu,
  ArrowRight,
} from "lucide-react";
import { useQuoteModal } from "./QuoteModalContext";
import { SITE_CONFIG, PROMO_OFFER } from "@/data/siteData";

function LinkedInIcon({ className = "w-3 h-3" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2Z" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const { openQuoteModal } = useQuoteModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  const isActive = (path: string) => pathname === path;
  const isServicesActive = pathname.startsWith("/services");

  const serviceVerticals = [
    {
      title: "Test & Certification",
      href: "/services/test-certification",
      desc: "Safety, IP68, 3.5T Shaker Vibration & Climatic Testing",
      icon: ShieldCheck,
    },
    {
      title: "EMI / EMC Facility",
      href: "/services/emi-emc",
      desc: "10m Semi-Anechoic Chamber up to 40 GHz & RF Shielded Rooms",
      icon: Radio,
    },
    {
      title: "Test & Measurement",
      href: "/services/test-measurement",
      desc: "Cyronics partnership, equipment rental & calibration",
      icon: Sliders,
    },
    {
      title: "Design & Simulation",
      href: "/services/design-simulation",
      desc: "Ansys, Siemens NX CAD/CAM, PLM & Digital Twin toolchains",
      icon: Cpu,
    },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 bg-white/95 backdrop-blur-md border-b ${
        isScrolled
          ? "border-[#D5E0DC] shadow-xs py-2"
          : "border-[#D5E0DC]/60 py-2.5"
      }`}
    >

        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Brand Logo - Properly sized */}
          <Link href="/" className="flex items-center gap-3 group py-1">
            <Image
              src="/assets/images/icons/MECFLOGO.png"
              alt="MECF Logo"
              width={200}
              height={50}
              className="h-11 sm:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              priority
            />
          </Link>

          {/* Clean Executive Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link
              href="/"
              className={`text-xs font-semibold tracking-wide transition-colors relative py-1 ${
                isActive("/")
                  ? "text-[#4EAE87] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#4EAE87] after:rounded-full"
                  : "text-[#2D3748] hover:text-[#4EAE87]"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`text-xs font-semibold tracking-wide transition-colors relative py-1 ${
                isActive("/about")
                  ? "text-[#4EAE87] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#4EAE87] after:rounded-full"
                  : "text-[#2D3748] hover:text-[#4EAE87]"
              }`}
            >
              About Us
            </Link>

            <Link
              href="/background"
              className={`text-xs font-semibold tracking-wide transition-colors relative py-1 ${
                isActive("/background")
                  ? "text-[#4EAE87] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#4EAE87] after:rounded-full"
                  : "text-[#2D3748] hover:text-[#4EAE87]"
              }`}
            >
              EMC Origin
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <div className="flex items-center gap-1">
                <Link
                  href="/services"
                  className={`text-xs font-semibold tracking-wide transition-colors relative py-1 ${
                    isServicesActive
                      ? "text-[#4EAE87] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#4EAE87] after:rounded-full"
                      : "text-[#2D3748] hover:text-[#4EAE87]"
                  }`}
                >
                  Services
                </Link>
                <button
                  type="button"
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  className="text-[#2D3748] hover:text-[#4EAE87] transition-colors cursor-pointer py-1"
                  aria-expanded={servicesDropdownOpen}
                  aria-label="Toggle services menu"
                >
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      servicesDropdownOpen ? "rotate-180 text-[#4EAE87]" : ""
                    }`}
                  />
                </button>
              </div>

              {/* Dropdown Panel */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-[#E2E8F0] p-1.5 mt-1 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-2 py-1.5 border-b border-[#F0F4F8] mb-1">
                    <Link
                      href="/services"
                      className="text-[11px] font-bold text-[#4EAE87] flex items-center justify-between hover:underline"
                    >
                      <span>Explore All Testing Services</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>

                  <div className="space-y-0.5">
                    {serviceVerticals.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-[#F0F4F8] transition-colors group"
                        >
                          <div className="w-7 h-7 rounded-md bg-[#4EAE87]/15 text-[#3D9E78] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#4EAE87] group-hover:text-white transition-colors">
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-[#2D3748] group-hover:text-[#4EAE87]">
                              {item.title}
                            </div>
                            <div className="text-[10px] text-[#64748B] line-clamp-1 leading-tight mt-0.5">
                              {item.desc}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/operating-partners"
              className={`text-xs font-semibold tracking-wide transition-colors relative py-1 ${
                isActive("/operating-partners")
                  ? "text-[#4EAE87] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#4EAE87] after:rounded-full"
                  : "text-[#2D3748] hover:text-[#4EAE87]"
              }`}
            >
              Operating Partners
            </Link>

            <Link
              href="/membership"
              className={`text-xs font-semibold tracking-wide transition-colors relative py-1 ${
                isActive("/membership")
                  ? "text-[#4EAE87] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#4EAE87] after:rounded-full"
                  : "text-[#2D3748] hover:text-[#4EAE87]"
              }`}
            >
              Membership
            </Link>

            <Link
              href="/statutory-compliance"
              className={`text-xs font-semibold tracking-wide transition-colors relative py-1 ${
                isActive("/statutory-compliance")
                  ? "text-[#4EAE87] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#4EAE87] after:rounded-full"
                  : "text-[#2D3748] hover:text-[#4EAE87]"
              }`}
            >
              Compliance
            </Link>

            <Link
              href="/contact"
              className={`text-xs font-semibold tracking-wide transition-colors relative py-1 ${
                isActive("/contact")
                  ? "text-[#4EAE87] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#4EAE87] after:rounded-full"
                  : "text-[#2D3748] hover:text-[#4EAE87]"
              }`}
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <button
              onClick={() => openQuoteModal()}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#4EAE87] hover:bg-[#3D9E78] active:scale-[0.98] transition-all shadow-sm cursor-pointer"
            >
              Get a Quote
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-[#1D1D1F] hover:bg-[#F5F5F7] lg:hidden cursor-pointer"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#D2D2D7] bg-white px-4 py-5 shadow-xl max-h-[85vh] overflow-y-auto">
            <div className="flex flex-col space-y-1">
              <Link
                href="/"
                className="px-3.5 py-2 rounded-lg text-xs font-semibold text-[#1D1D1F] hover:bg-[#F5F5F7]"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="px-3.5 py-2 rounded-lg text-xs font-semibold text-[#1D1D1F] hover:bg-[#F5F5F7]"
              >
                About Us
              </Link>
              <Link
                href="/background"
                className="px-3.5 py-2 rounded-lg text-xs font-semibold text-[#1D1D1F] hover:bg-[#F5F5F7]"
              >
                EMC Origin & Background
              </Link>
              <Link
                href="/services"
                className="px-3.5 py-2 rounded-lg text-xs font-semibold text-[#1D1D1F] hover:bg-[#F5F5F7]"
              >
                All Services Overview
              </Link>

              {/* Sub-items for Verticals */}
              <div className="pl-4 py-1 space-y-1 border-l-2 border-[#E2E8F0] ml-3 my-1">
                {serviceVerticals.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-2.5 py-1 rounded-md text-xs font-medium text-[#64748B] hover:text-[#4EAE87] hover:bg-[#F0F4F8]"
                  >
                    • {item.title}
                  </Link>
                ))}
              </div>

              <Link
                href="/operating-partners"
                className="px-3.5 py-2 rounded-lg text-xs font-semibold text-[#2D3748] hover:bg-[#F0F4F8]"
              >
                Operating Partners
              </Link>
              <Link
                href="/membership"
                className="px-3.5 py-2 rounded-lg text-xs font-semibold text-[#2D3748] hover:bg-[#F0F4F8]"
              >
                Membership & Sponsorship
              </Link>
              <Link
                href="/statutory-compliance"
                className="px-3.5 py-2 rounded-lg text-xs font-semibold text-[#2D3748] hover:bg-[#F0F4F8]"
              >
                Statutory & Compliance
              </Link>
              <Link
                href="/contact"
                className="px-3.5 py-2 rounded-lg text-xs font-semibold text-[#2D3748] hover:bg-[#F0F4F8]"
              >
                Contact Us & Lab Location
              </Link>
            </div>

            <div className="mt-5 pt-4 border-t border-[#E2E8F0] flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openQuoteModal();
                }}
                className="w-full py-2.5 rounded-xl font-semibold text-center text-white bg-[#4EAE87] hover:bg-[#3D9E78] text-xs shadow-xs"
              >
                Get a Quote / Book Slot
              </button>
              <a
                href={`tel:${SITE_CONFIG.phoneFormatted}`}
                className="w-full py-2.5 rounded-xl font-medium text-center text-[#2D3748] bg-[#F0F4F8] hover:bg-[#E2E8F0] text-xs flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#5C82A6]" />
                Call {SITE_CONFIG.phoneFormatted}
              </a>
            </div>
          </div>
        )}
      </header>
  );
}
