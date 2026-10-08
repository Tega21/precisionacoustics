import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://precisionacousticsaz.com"),
  title: "Precision Acoustics — Commercial Acoustical Ceilings",
  description:
      "Precision Acoustics is a commercial acoustical ceiling subcontractor with 35+ years of experience, serving general contractors across Arizona.",
  openGraph: {
    title: "Precision Acoustics — Commercial Acoustical Ceilings",
    description:
        "Commercial acoustical ceiling subcontractor with 35+ years of experience, serving Arizona general contractors.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="en" className={`${montserrat.variable} ${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
      <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
      >
          Skip to main content
      </a>
      <Header />
      <main id="main-content" tabIndex={-1} className="flex-1">
          {children}
      </main>
      <Footer />
      </body>
      </html>
  );
}