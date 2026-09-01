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
  ShieldCheck,
  Radio,
  Sliders,
  Cpu,
  ArrowRight,
} from "lucide-react";
import { SITE_CONFIG } from "@/data/siteData";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      className={`sticky top-0 z-40 transition-all duration-300 bg-white/88 backdrop-blur-xl border-b ${
        isScrolled
        ? "border-[#E7E2D9] shadow-[0_12px_35px_rgba(38,50,65,0.08)] py-1.5"
          : "border-[#E7E2D9]/70 py-2"
      }`}
    >

        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Brand Logo - Properly sized */}
          <Link href="/" className="flex items-center gap-3 group py-0.5">
              <Image
                src="/assets/images/icons/MECFLOGO.png"
                alt="MECF Logo"
                width={200}
                height={50}
                className="h-11 sm:h-14 w-auto object-contain transition-transform group-hover:scale-[1.02]"
                priority
              />
            </Link>

          {/* Clean Executive Desktop Navigation */}
          <nav className="site-primary-nav ml-auto hidden lg:flex items-center gap-5 xl:gap-6">
            <Link
              href="/"
                className={`text-xs font-semibold tracking-wide transition-colors relative py-1 premium-link ${
                isActive("/")
                  ? "text-[#4EAE87] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#4EAE87] after:rounded-sm"
                  : "text-[#2D3748] hover:text-[#4EAE87]"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
                className={`text-xs font-semibold tracking-wide transition-colors relative py-1 premium-link ${
                isActive("/about")
                  ? "text-[#4EAE87] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#4EAE87] after:rounded-sm"
                  : "text-[#2D3748] hover:text-[#4EAE87]"
              }`}
            >
              About Us
            </Link>

            <Link
              href="/background"
                className={`text-xs font-semibold tracking-wide transition-colors relative py-1 premium-link ${
                isActive("/background")
                  ? "text-[#4EAE87] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#4EAE87] after:rounded-sm"
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
                  className={`text-xs font-semibold tracking-wide transition-colors relative py-1 premium-link ${
                    isServicesActive
                      ? "text-[#4EAE87] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#4EAE87] after:rounded-sm"
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
                    className={`w-3.5 h-3.5 transition-transform duration-300 ease-out ${
                      servicesDropdownOpen ? "rotate-180 text-[#4EAE87]" : ""
                    }`}
                  />
                </button>
              </div>

              {/* Dropdown Panel with Entrance Animation */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 pt-2 z-50">
                  <div className="w-80 bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_20px_50px_rgba(38,50,65,0.14)] border border-[#E7E2D9] p-2 dropdown-panel-animated overflow-hidden">
                    <div
                      className="px-2.5 py-2 border-b border-[#F0F4F8] mb-1.5 dropdown-item-animate"
                      style={{ animationDelay: "40ms" }}
                    >
                      <Link
                        href="/services"
                        className="text-[11px] font-bold text-[#4EAE87] flex items-center justify-between group/explore hover:text-[#247F62]"
                      >
                        <span className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#4EAE87] animate-pulse"></span>
                          Explore All Testing Services
                        </span>
                        <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover/explore:translate-x-1" />
                      </Link>
                    </div>

                    <div className="space-y-1">
                      {serviceVerticals.map((item, index) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-gradient-to-r hover:from-[#F0F4F8] hover:to-[#F8FAFC] transition-all duration-200 group dropdown-item-animate border border-transparent hover:border-[#E2E8F0]"
                            style={{ animationDelay: `${80 + index * 40}ms` }}
                          >
                            <div className="w-8 h-8 rounded-lg bg-[#4EAE87]/15 text-[#3D9E78] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#4EAE87] group-hover:text-white group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-md transition-all duration-200">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-xs font-bold text-[#2D3748] group-hover:text-[#4EAE87] transition-colors flex items-center justify-between">
                                <span>{item.title}</span>
                                <ArrowRight className="w-3 h-3 text-[#4EAE87] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 shrink-0" />
                              </div>
                              <div className="text-[10px] text-[#64748B] line-clamp-1 leading-tight mt-0.5 group-hover:text-[#475569] transition-colors">
                                {item.desc}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/operating-partners"
              className={`text-xs font-semibold tracking-wide transition-colors relative py-1 premium-link ${
                isActive("/operating-partners")
                  ? "text-[#4EAE87] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#4EAE87] after:rounded-sm"
                  : "text-[#2D3748] hover:text-[#4EAE87]"
              }`}
            >
              Operating Partners
            </Link>

            <Link
              href="/membership"
              className={`text-xs font-semibold tracking-wide transition-colors relative py-1 premium-link ${
                isActive("/membership")
                  ? "text-[#4EAE87] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#4EAE87] after:rounded-sm"
                  : "text-[#2D3748] hover:text-[#4EAE87]"
              }`}
            >
              Membership
            </Link>

            <Link
              href="/statutory-compliance"
              className={`text-xs font-semibold tracking-wide transition-colors relative py-1 premium-link ${
                isActive("/statutory-compliance")
                  ? "text-[#4EAE87] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#4EAE87] after:rounded-sm"
                  : "text-[#2D3748] hover:text-[#4EAE87]"
              }`}
            >
              Compliance
            </Link>

            <Link
              href="/contact"
              className={`text-xs font-semibold tracking-wide transition-colors relative py-1 premium-link ${
                isActive("/contact")
                  ? "text-[#4EAE87] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#4EAE87] after:rounded-sm"
                  : "text-[#2D3748] hover:text-[#4EAE87]"
              }`}
            >
              Contact
            </Link>
          </nav>
          <div className="ml-3 flex items-center">
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
          <div className="lg:hidden border-t border-[#E7E2D9] bg-white px-4 py-5 shadow-xl max-h-[85vh] overflow-y-auto">
            <div
              className="flex flex-col space-y-1"
              onClick={(event) => {
                if ((event.target as HTMLElement).closest("a")) {
                  setMobileMenuOpen(false);
                  setServicesDropdownOpen(false);
                }
              }}
            >
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
