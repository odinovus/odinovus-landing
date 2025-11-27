"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import HubGrid, { HubModule } from "./components/HubGrid";

// Lista med alla moduler i Platform
const platformModules: HubModule[] = [
  {
    title: "App Hub",
    desc: "Central gateway to all Odinovus applications.",
    href: "/platform/app-hub",
    subdomain: "app-hub.odinovus.com",
    status: "live",
  },
  {
    title: "SaaS Platform",
    desc: "Build and deploy scalable SaaS solutions.",
    href: "/platform/saas",
    subdomain: "saas.odinovus.com",
    status: "coming-soon",
  },
  {
    title: "AI Agents",
    desc: "Intelligent autonomous agents for real-world tasks.",
    href: "/platform/agents",
    subdomain: "agents.odinovus.com",
    status: "coming-soon",
  },
  {
    title: "Data & Analytics",
    desc: "Insights powered by real-time intelligence.",
    href: "/platform/analytics",
    subdomain: "analytics.odinovus.com",
    status: "coming-soon",
  },
  {
    title: "Developer Tools",
    desc: "APIs & SDKs for fast integration.",
    href: "/platform/devtools",
    subdomain: "devtools.odinovus.com",
    status: "coming-soon",
  },
  {
    title: "Automation Layer",
    desc: "Connect, automate, and optimize processes.",
    href: "/platform/automation",
    subdomain: "automation.odinovus.com",
    status: "coming-soon",
  },
];

// Variants för framer-motion
const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

export default function PlatformPage() {
  return (
    <main className="min-h-screen bg-[#0B0F1A] text-white pt-24">
      {/* Header */}
      <section className="py-16 text-center">
        <h1 className="text-4xl font-bold">Odinovus Platform Hub</h1>
        <p className="mt-3 text-zinc-400 max-w-2xl mx-auto">
          Central hub for all Odinovus modules and applications.
        </p>
      </section>

      {/* Hub Grid */}
      <motion.section
        className="py-16"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="mx-auto max-w-7xl px-6">
          <HubGrid modules={platformModules} />
        </div>
      </motion.section>

      {/* Footer */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 text-center text-sm text-zinc-500">
          Tips: varje kort är en framtida sub-app. Vi kan auto-create routes
          eller peka mot subdomäner (crm., app., dev., osv) när du är redo.
        </div>
      </section>
    </main>
  );
}
