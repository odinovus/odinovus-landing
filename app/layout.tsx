import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Odinovus — Digital Ecosystem",
  description:
    "Odinovus is a modular digital ecosystem for SaaS, CRM, trading tools and automation.",
  icons: {
    icon: "/og-image.png",
  },
  openGraph: {
    title: "Odinovus — Digital Ecosystem",
    description:
      "A modular digital ecosystem for SaaS, CRM, trading tools and automation.",
    url: "https://odinovus.com",
    siteName: "Odinovus",
    images: [
      {
        url: "/Logo-odinovus.png",
        width: 800,
        height: 800,
        alt: "Odinovus Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Odinovus — Digital Ecosystem",
    description:
      "A modular digital ecosystem for SaaS, CRM, trading tools and automation.",
    images: ["/odinovus-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
