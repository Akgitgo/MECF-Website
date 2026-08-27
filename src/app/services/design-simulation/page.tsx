import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SpecTable, { ColumnDef } from "@/components/SpecTable";
import ImageSlot from "@/components/ImagePlaceholder";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Design & Simulation Vertical — Ansys, Siemens NX & Digital Twin Toolchains",
  description:
    "Explore MECF's Design & Simulation vertical in partnership with 3D Engineering Automation LLP. Ansys multiphysics CAE, Siemens NX CAD/CAM, Teamcenter PLM, and Digital Twin virtual commissioning.",
};

interface ToolchainRow {
  domain: string;
  softwareEcosystem: string;
  capabilities: string;
}

export default function DesignSimulationPage() {
  const toolchains: ToolchainRow[] = [
    {
      domain: "Electromagnetic & RF Simulation",
      softwareEcosystem: "Ansys HFSS / Ansys Maxwell / SIwave",
      capabilities: "Antenna design, PCB trace signal & power integrity (SI/PI), EMI suppression, and motor electromagnetic field simulation.",
    },
    {
      domain: "Thermal & Multiphysics CAE",
      softwareEcosystem: "Ansys Icepak / Ansys Mechanical / Fluent",
      capabilities: "Enclosure thermal management, heatsink airflow optimization, structural drop-test simulation, and vibration stress fatigue.",
    },
    {
      domain: "CAD/CAM & Digital Product Engineering",
      softwareEcosystem: "Siemens NX / Solid Edge",
      capabilities: "High-precision mechanical enclosure modeling, PCB mechatronic packaging, injection mold design, and CNC toolpath generation.",
    },
    {
      domain: "PLM & Smart Manufacturing Systems",
      softwareEcosystem: "Siemens Teamcenter / Siemens Machinum / AVEVA",
      capabilities: "Bill of materials (BOM) management, engineering change tracking, shop-floor MES integration, and industrial IoT architecture.",
    },
    {
      domain: "Virtual Reality & Additive Simulation",
      softwareEcosystem: "iQ3 VR / EOS GmbH Additive Suite",
      capabilities: "Immersive multi-user VR design reviews, digital twin virtual commissioning, and industrial 3D metal/polymer printing simulation.",
    },
  ];

  const columns: ColumnDef<ToolchainRow>[] = [
    {
      header: "Engineering Domain",
      cell: (row) => (
        <span className="font-semibold text-[#263241]">{row.domain}</span>
      ),
      className: "w-1/4",
    },
    {
      header: "Partner Toolchain Ecosystem",
      cell: (row) => (
        <span className="font-mono text-xs font-bold text-[#5C82A6]">{row.softwareEcosystem}</span>
      ),
    },
    {
      header: "Capabilities & Industry Outcomes",
      cell: (row) => (
        <span className="text-xs text-[#667085]">{row.capabilities}</span>
      ),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        badge="Operating Partner: 3D Engineering Automation LLP"
        title="Design & Simulation Vertical"
        description="Accelerate hardware development through advanced multiphysics CAE simulation, Siemens NX CAD/CAM engineering, PLM systems, and Digital Twin virtual commissioning."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
      />

      {/* 1. Overview */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E7E2D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#5C82A6]">
                Virtual Prototyping Advantage
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#263241] leading-tight">
                Simulate Before You Fabricate
              </h2>
              <p className="text-base text-[#667085] leading-relaxed">
                Physical prototyping iterations can add months of delay and massive tooling costs to an electronics product launch. In partnership with 3D Engineering Automation LLP — an elite tier partner for Ansys, Siemens Digital Industries, AVEVA, EOS, and iQ3 VR — MECF brings world-class simulation tools directly to Indian manufacturers.
              </p>
              <p className="text-base text-[#667085] leading-relaxed">
                By validating thermal dissipation, high-speed trace crosstalk, structural shock resistance, and electromagnetic radiation in a virtual sandbox, engineering teams get designs right on the first revision before entering physical lab certification.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#FBFAF8] border border-[#E7E2D9]">
                  <div className="text-xs font-bold text-[#2F4054] uppercase">Ansys Channel Partner</div>
                  <div className="text-xs text-[#667085] mt-1">
                    Industry-leading HFSS electromagnetic and Icepak thermal simulation solvers.
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-[#FBFAF8] border border-[#E7E2D9]">
                  <div className="text-xs font-bold text-[#2F4054] uppercase">Siemens Digital Industries</div>
                  <div className="text-xs text-[#667085] mt-1">
                    NX CAD/CAM and Teamcenter PLM for enterprise product lifecycle governance.
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="app-store-card rounded-3xl overflow-hidden shadow-xl border border-[#E7E2D9]">
                <ImageSlot
                  src="/assets/images/facility/design-prototype-center.jpg"
                  alt="3D Engineering Design and Simulation Workstations at MECF Pune"
                  width={800}
                  height={600}
                  badge="Ansys & Siemens Suite"
                  overlayTitle="Design & Simulation Centre"
                  overlaySub="Virtual Prototyping Sandbox"
                  recommendedDimensions="800×600 px"
                  aspectRatio="aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Simulation Toolchains Table */}
      <section className="py-16 bg-[#F6F4F0] border-b border-[#E7E2D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5C82A6]">
              Software Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#263241] mt-1">
              Simulation & CAD/CAM Toolchain Suites
            </h2>
            <p className="text-sm text-[#667085] mt-2">
              Integrated toolchains spanning electromagnetics, CFD, structural mechanics, PLM, and additive manufacturing.
            </p>
          </div>

          <SpecTable
            columns={columns}
            data={toolchains}
            caption="Design, Simulation & PLM Software Capabilities"
          />
        </div>
      </section>

      {/* 3. Value Props */}
      <section className="py-16 bg-white border-b border-[#E7E2D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-[#FBFAF8] border border-[#E7E2D9]">
              <h3 className="text-lg font-bold text-[#263241] mb-2">
                1. First-Pass Compliance
              </h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Simulate radiated emissions in Ansys HFSS to identify shielding leaks and trace resonant loops before building costly chamber test units.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#FBFAF8] border border-[#E7E2D9]">
              <h3 className="text-lg font-bold text-[#263241] mb-2">
                2. Thermal Optimization
              </h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Prevent field overheating in power electronics and automotive ECUs with CFD-based conduction, convection, and radiation analysis.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#FBFAF8] border border-[#E7E2D9]">
              <h3 className="text-lg font-bold text-[#263241] mb-2">
                3. Digital Twin & PLM
              </h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Connect Siemens Teamcenter PLM and VR reviews with shop-floor manufacturing to maintain continuous traceability from concept to production.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Consult With Our Simulation Specialists"
        subtitle="Request engineering simulation consulting or software training packages for your R&D engineers."
      />
    </div>
  );
}
