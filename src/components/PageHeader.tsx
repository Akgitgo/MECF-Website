import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeaderProps {
  badge?: string;
  title: string;
  description: string;
  breadcrumbs?: { label: string; href?: string }[];
  highlight?: string;
  theme?: "light" | "navy";
}

export default function PageHeader({
  badge,
  title,
  description,
  breadcrumbs = [{ label: "Home", href: "/" }],
  highlight,
  theme = "light",
}: PageHeaderProps) {
  if (theme === "navy") {
    return (
      <section className="bg-[#3C5068] text-white pt-12 pb-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-1.5 text-xs text-[#E2E8F0] mb-6">
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="hover:text-white transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white/60">{crumb.label}</span>
                )}
                {idx < breadcrumbs.length - 1 && (
                  <ChevronRight className="w-3.5 h-3.5 text-white/40" />
                )}
              </React.Fragment>
            ))}
            <ChevronRight className="w-3.5 h-3.5 text-white/40" />
            <span className="text-[#74C69D] font-medium truncate max-w-[200px] sm:max-w-none">
              {title}
            </span>
          </nav>

          {badge && (
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white/90 border border-white/20 mb-4">
              {badge}
            </div>
          )}

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white max-w-3xl leading-tight">
            {title} {highlight && <span className="text-[#74C69D]">{highlight}</span>}
          </h1>

          <p className="text-base sm:text-lg text-[#E2E8F0] mt-4 max-w-2xl leading-relaxed">
            {description}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#F0F4F8] pt-12 pb-14 border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-1.5 text-xs text-[#64748B] mb-6">
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="hover:text-[#4EAE87] transition-colors"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-[#2D3748]">{crumb.label}</span>
              )}
              {idx < breadcrumbs.length - 1 && (
                <ChevronRight className="w-3.5 h-3.5 text-[#CBD5E1]" />
              )}
            </React.Fragment>
          ))}
          <ChevronRight className="w-3.5 h-3.5 text-[#CBD5E1]" />
          <span className="text-[#4EAE87] font-medium truncate max-w-[200px] sm:max-w-none">
            {title}
          </span>
        </nav>

        {badge && (
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#4EAE87]/15 text-[#3D9E78] border border-[#4EAE87]/30 mb-4">
            {badge}
          </div>
        )}

        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#2D3748] max-w-3xl leading-tight">
          {title} {highlight && <span className="text-[#4EAE87]">{highlight}</span>}
        </h1>

        <p className="text-base sm:text-lg text-[#64748B] mt-4 max-w-2xl leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}
