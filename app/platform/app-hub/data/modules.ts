// app/platform/app-hub/data/modules.ts
import { ModuleStatus } from "../components/ModuleCard";

export type Module = {
  title: string;
  desc: string;
  href: string;
  subdomain: string;
  status: ModuleStatus;
};

export const modules: Module[] = [
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
