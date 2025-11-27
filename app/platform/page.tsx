// app/platform/page.tsx
"use client";

import { motion, Variants } from "framer-motion";
import HubGrid, { HubModule } from "./app-hub/components/HubGrid";

// Lista med alla moduler i Platform (alla klickbara)
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
    status: "live",
  },
  {
    title: "AI Agents",
    desc: "Intelligent autonomous agents for real-world tasks.",
    href: "/platform/agents",
    subdomain: "agents.odinovus.com",
    status: "live",
  },
  {
    title: "Data & Analytics",
    desc: "Insights powered by real-time intelligence.",
    href: "/platform/analytics",
    subdomain: "analytics.odinovus.com",
    status: "live",
  },
  {
    title: "Developer Tools",
    desc: "APIs & SDKs for fast integration.",
    href: "/platform/devtools",
    subdomain: "devtools.odinovus.com",
    status: "live",
  },
  {
    title: "Automation Layer",
    desc: "Connect, automate, and optimize processes.",
    href: "/platform/automation",
    subdomain: "automation.odinovus.com",
    status: "live",
  },
];

// Framer Motion container för stagger
const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

export default function PlatformPage() {
  return (
    <main className="min-h-screen bg-[#0B0F1A] text-white pt-24">
      {/* HEADER */}
      <section className="py-16 text-center">
        <h1 className="text-4xl font-bold">Odinovus Platform Hub</h1>
        <p className="mt-3 text-zinc-400 max-w-2xl mx-auto">
          Central hub for all Odinovus modules and applications.
        </p>
      </section>

      {/* HUB GRID */}
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

      {/* FOOTER */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 text-center text-sm text-zinc-500">
          Tips: varje kort är en framtida sub-app. Vi kan auto-create routes
          eller peka mot subdomäner (crm., app., dev., osv) när du är redo.
        </div>
      </section>
    </main>
  );
}
