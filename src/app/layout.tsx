import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/workspace/Sidebar";
import Background from "@/components/layout/Background";
import { Analytics } from "@vercel/analytics/next";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Badri Vishal Pandey — AI Engineer · Embedded Systems Builder",
    template: "%s — Badri Vishal Pandey",
  },
  description:
    "Turning logic into intelligent systems and bold ideas into shipped products. B.Tech ECE student at GCET, Greater Noida.",
  keywords: [
    "Badri Vishal Pandey",
    "AI Engineer",
    "Embedded Systems",
    "Portfolio",
    "ECE",
    "GCET",
    "Deep Learning",
    "Arduino",
    "Product Engineer",
  ],
  authors: [{ name: "Badri Vishal Pandey" }],
  openGraph: {
    title: "Badri Vishal Pandey — AI Engineer · Embedded Systems Builder",
    description:
      "Turning logic into intelligent systems and bold ideas into shipped products.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Badri Vishal Pandey — AI Engineer · Embedded Systems Builder",
    description:
      "Turning logic into intelligent systems and bold ideas into shipped products.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geist.variable} ${inter.variable} ${jetbrainsMono.variable} font-sans antialiased noise-overlay`}
      >
        <Background />
        <div className="mx-auto flex h-screen w-full max-w-[1400px] overflow-hidden border-x border-border/30 bg-bg/80 shadow-2xl relative z-10">
          <Sidebar />
          <main className="custom-scrollbar relative flex-1 overflow-y-auto overflow-x-hidden bg-bg/50">
            {children}
          </main>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
