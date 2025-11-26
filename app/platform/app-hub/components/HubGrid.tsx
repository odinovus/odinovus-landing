"use client";

import ModuleCard from "./ModuleCard";

const modules = [
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
] as const;

export default function HubGrid() {
  return (
    <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {modules.map((module, i) => (
        <ModuleCard key={i} index={i} {...module} />
      ))}
    </section>
  );
}
