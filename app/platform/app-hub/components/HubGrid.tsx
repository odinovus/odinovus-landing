// app/platform/app-hub/components/HubGrid.tsx
import ModuleCard from "./ModuleCard";

const modules = [
  {
    title: "SaaS Platform",
    desc: "Build and deploy scalable SaaS solutions.",
    href: "/platform/saas",
    subdomain: "saas.odinovus.com",
  },
  {
    title: "AI Agents",
    desc: "Intelligent autonomous agents.",
    href: "/platform/agents",
    subdomain: "agents.odinovus.com",
  },
  {
    title: "Data & Analytics",
    desc: "Insights powered by intelligence.",
    href: "/platform/analytics",
    subdomain: "analytics.odinovus.com",
  },
  {
    title: "Developer Tools",
    desc: "APIs & SDKs for integration.",
    href: "/platform/devtools",
    subdomain: "devtools.odinovus.com",
  },
  {
    title: "Automation Layer",
    desc: "Connect, automate, optimize processes.",
    href: "/platform/automation",
    subdomain: "automation.odinovus.com",
  },
];

export default function HubGrid() {
  return (
    <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10 mx-auto max-w-7xl px-6 py-16">
      {modules.map((m, i) => (
        <ModuleCard key={i} {...m} />
      ))}
    </section>
  );
}
