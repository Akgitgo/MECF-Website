import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { QuoteModalProvider } from "@/components/QuoteModalContext";
import QuoteModal from "@/components/QuoteModal";
import { SITE_CONFIG } from "@/data/siteData";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#3C5068",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "MECF — MCCIA Electronic Cluster Foundation | MeitY-Approved Testing & Certification CFC",
    template: "%s | MECF Pune",
  },
  description:
    "MECF is a MeitY-approved Common Facility Centre (CFC) in Pune offering world-class EMI/EMC 10m Anechoic Chamber testing, Safety, Environmental, IP68, 3.5T Vibration, and Calibration services.",
  keywords: [
    "MECF Pune",
    "MCCIA Electronic Cluster Foundation",
    "Electronics Testing Lab Pune",
    "EMI EMC Anechoic Chamber Pune",
    "10m Anechoic Chamber India",
    "MeitY EMC Scheme CFC",
    "NABL Accredited Electronics Lab",
    "TUV Rheinland Pune",
    "Cyronics Instruments",
    "IP68 Testing Pune",
    "Vibration Shaker Test 3.5 Ton",
    "IEC 60950 IEC 62368 IEC 61010",
  ],
  authors: [{ name: "MCCIA Electronic Cluster Foundation" }],
  creator: "MECF",
  publisher: "MCCIA Electronic Cluster Foundation",
  metadataBase: new URL("https://mecfpune.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://mecfpune.com",
    title: "MECF — India's Premier MeitY-Approved Electronics Testing CFC",
    description:
      "World-class EMI/EMC, Environmental, Safety, IP68, and Calibration testing lab for automotive, medical, and electronics manufacturers.",
    siteName: "MCCIA Electronic Cluster Foundation (MECF)",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/assets/images/icons/MECFLOGO.png",
    apple: "/assets/images/icons/MECFLOGO.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${outfit.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-[#FAF8F5] text-[#2D3748] font-sans antialiased">
        <QuoteModalProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <QuoteModal />
        </QuoteModalProvider>
      </body>
    </html>
  );
}
