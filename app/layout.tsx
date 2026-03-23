import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata: Metadata = {
  title: "Crawgod — AI Web Intelligence Agent",
  description: "Crawgod is an autonomous AI agent that monitors, extracts, and delivers intelligence from any corner of the internet — in real time.",
  openGraph: {
    title: "Crawgod — AI Web Intelligence Agent",
    description: "The AI agent that crawls the web so you don't have to.",
    url: "https://crawgod.fun",
    siteName: "Crawgod",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geist.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
