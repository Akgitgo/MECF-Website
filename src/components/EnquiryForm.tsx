"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

interface EnquiryFormProps {
  initialService?: string;
  className?: string;
  isCompact?: boolean;
  onSuccess?: () => void;
}

export default function EnquiryForm({
  initialService = "",
  className = "",
  isCompact = false,
  onSuccess,
}: EnquiryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    organizationType: "Registered MSME",
    service: initialService || "Safety Testing",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    // Client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setStatus("error");
      setErrorMessage("Please complete all required fields (Name, Email, Phone).");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("error");
      setErrorMessage("Please provide a valid email address.");
      return;
    }

    // Simulate reliable form submission
    setTimeout(() => {
      setStatus("success");
      if (onSuccess) {
        setTimeout(onSuccess, 1800);
      }
    }, 600);
  };

  if (status === "success") {
    return (
      <div className="p-8 rounded-2xl bg-white border border-[#4EAE87]/30 text-center shadow-xs">
        <div className="w-14 h-14 rounded-full bg-[#4EAE87]/10 text-[#4EAE87] flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-[#2D3748] mb-2">Enquiry Received</h3>
        <p className="text-sm text-[#64748B] max-w-md mx-auto leading-relaxed mb-6">
          Thank you for reaching out to MCCIA Electronic Cluster Foundation. Our technical coordinator will review your requirement and respond within 1 business day.
        </p>
        <button
          onClick={() => {
            setStatus("idle");
            setFormData({
              name: "",
              email: "",
              phone: "",
              organization: "",
              organizationType: "Registered MSME",
              service: "Safety Testing",
              message: "",
            });
          }}
          className="text-xs font-semibold text-[#4EAE87] hover:underline"
        >
          Submit another request →
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-white rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] shadow-xs ${className}`}
    >
      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-[#2D3748] tracking-tight">
          Request a Quote / Facility Slot
        </h3>
        <p className="text-sm text-[#64748B] mt-1">
          Connect directly with MECF engineers for testing schedules, rate cards, and technical consultations.
        </p>
      </div>

      {status === "error" && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-start gap-2.5">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-600" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-semibold text-[#2D3748] uppercase tracking-wider mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Rajesh Sharma"
            className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#E2E8F0] bg-[#FAF8F5] text-[#2D3748] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4EAE87]/30 focus:border-[#4EAE87] transition-all"
          />
        </div>

        {/* Work Email */}
        <div>
          <label className="block text-xs font-semibold text-[#2D3748] uppercase tracking-wider mb-1.5">
            Work Email *
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="rajesh@company.com"
            className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#E2E8F0] bg-[#FAF8F5] text-[#2D3748] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4EAE87]/30 focus:border-[#4EAE87] transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {/* Phone */}
        <div>
          <label className="block text-xs font-semibold text-[#2D3748] uppercase tracking-wider mb-1.5">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#E2E8F0] bg-[#FAF8F5] text-[#2D3748] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4EAE87]/30 focus:border-[#4EAE87] transition-all"
          />
        </div>

        {/* Company / Organization Name */}
        <div>
          <label className="block text-xs font-semibold text-[#2D3748] uppercase tracking-wider mb-1.5">
            Company / Organization
          </label>
          <input
            type="text"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            placeholder="e.g. Acme Electronics Pvt Ltd"
            className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#E2E8F0] bg-[#FAF8F5] text-[#2D3748] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4EAE87]/30 focus:border-[#4EAE87] transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {/* Organization Type */}
        <div>
          <label className="block text-xs font-semibold text-[#2D3748] uppercase tracking-wider mb-1.5">
            Organization Type
          </label>
          <select
            name="organizationType"
            value={formData.organizationType}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#E2E8F0] bg-[#FAF8F5] text-[#2D3748] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4EAE87]/30 focus:border-[#4EAE87] transition-all"
          >
            <option value="Registered MSME">Registered MSME (Eligible for 50% Discount)</option>
            <option value="MCCIA Member">MCCIA Member (Eligible for 50% Discount)</option>
            <option value="Multinational Corporation (MNC)">Multinational Corporation (MNC)</option>
            <option value="Startup / Incubatee">Startup / Incubatee (Eligible for 50% Discount)</option>
            <option value="Incubator / Accelerator">Incubator / Accelerator</option>
            <option value="General Industry / Tier-1 Supplier">General Industry / Tier-1 Supplier</option>
            <option value="Academic & Research Institute">Academic & Research Institute</option>
          </select>
        </div>

        {/* Required Service */}
        <div>
          <label className="block text-xs font-semibold text-[#2D3748] uppercase tracking-wider mb-1.5">
            Required Service Vertical
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#E2E8F0] bg-[#FAF8F5] text-[#2D3748] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4EAE87]/30 focus:border-[#4EAE87] transition-all"
          >
            <option value="Safety Testing">Safety Testing (IEC 60950/61010/62368/60335)</option>
            <option value="Reliability & Environmental Testing">Reliability & Environmental Testing (Climatic / Thermal Shock)</option>
            <option value="Ingress Protection & Mechanical Testing">Ingress Protection (IP68) & 3.5T Shaker Vibration</option>
            <option value="EMI / EMC 10m Anechoic Chamber">EMI / EMC 10m Semi-Anechoic Chamber (to 40 GHz)</option>
            <option value="Test and Measurement & Calibration">Test & Measurement & Calibration (Cyronics)</option>
            <option value="Equipment on Rental">Equipment on Rental</option>
            <option value="Design & Simulation">Design & Simulation (Ansys / Siemens NX)</option>
            <option value="MECF Membership & Contribution">MECF Membership & Tier Contribution</option>
          </select>
        </div>
      </div>

      {/* Promo Offer Checkbox Callout */}
      <div className="mb-4 p-3 rounded-xl bg-[#4EAE87]/15 border border-[#4EAE87]/30 flex items-center justify-between text-xs text-[#3C5068]">
        <span className="font-semibold text-[#3D9E78]">
          ⚡ Claim Up to 50% Discount for MSMEs & MCCIA Members (Valid till 31st Aug 2026)
        </span>
      </div>

      {/* Message / Scope */}
      <div className="mb-6">
        <label className="block text-xs font-semibold text-[#2D3748] uppercase tracking-wider mb-1.5">
          Project / Testing Scope Details
        </label>
        <textarea
          name="message"
          rows={isCompact ? 3 : 4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Please describe your product type, target standards, sample dimensions, and preferred testing timeline..."
          className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#E2E8F0] bg-[#FAF8F5] text-[#2D3748] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4EAE87]/30 focus:border-[#4EAE87] transition-all resize-none"
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-medium text-white bg-[#4EAE87] hover:bg-[#3D9E78] active:scale-[0.99] transition-all shadow-xs disabled:opacity-70 cursor-pointer"
      >
        {status === "submitting" ? (
          <span>Transmitting Request...</span>
        ) : (
          <>
            <span>Submit Enquiry & Claim Quote</span>
            <Send className="w-4 h-4" />
          </>
        )}
      </button>

      <p className="text-[11px] text-[#64748B] text-center mt-3">
        MECF guarantees strict confidentiality for all proprietary product designs & test data.
      </p>
    </form>
  );
}
