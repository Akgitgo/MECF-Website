"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";
import { useQuoteModal } from "./QuoteModalContext";
import EnquiryForm from "./EnquiryForm";

export default function QuoteModal() {
  const { isOpen, closeQuoteModal, selectedService } = useQuoteModal();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeQuoteModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeQuoteModal]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#E2E8F0] my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeQuoteModal}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-xl bg-[#F0F4F8] hover:bg-[#E2E8F0] text-[#2D3748] flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="max-h-[90vh] overflow-y-auto p-1">
          <EnquiryForm
            initialService={selectedService}
            className="border-none shadow-none"
            onSuccess={closeQuoteModal}
          />
        </div>
      </div>
    </div>
  );
}
