import ModuleCard from "./ModuleCard";

const modules: {
  title: string;
  desc: string;
  href: string;
  subdomain: string;
  status: "live" | "coming-soon";
}[] = [
  {
    title: "CRM System",
    desc: "Manage leads, contacts and internal communication.",
    href: "https://crm.odinovus.com",
    subdomain: "crm.odinovus.com",
    status: "coming-soon",
  },
  {
    title: "SaaS Platform",
    desc: "Create and deploy scalable SaaS solutions.",
    href: "https://saas.odinovus.com",
    subdomain: "saas.odinovus.com",
    status: "coming-soon",
  },
  {
    title: "AI Agents",
    desc: "Autonomous AI systems for intelligent tasks.",
    href: "https://agents.odinovus.com",
    subdomain: "agents.odinovus.com",
    status: "coming-soon",
  },
  {
    title: "Analytics",
    desc: "Insights powered by real-time intelligence.",
    href: "https://analytics.odinovus.com",
    subdomain: "analytics.odinovus.com",
    status: "coming-soon",
  },
  {
    title: "Developer Tools",
    desc: "APIs, SDKs and integrations.",
    href: "https://dev.odinovus.com",
    subdomain: "dev.odinovus.com",
    status: "coming-soon",
  },
  {
    title: "Automation",
    desc: "Automate workflows and business logic.",
    href: "https://automation.odinovus.com",
    subdomain: "automation.odinovus.com",
    status: "coming-soon",
  },
];

export default function HubGrid() {
  return (
    <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {modules.map((module, index) => (
        <ModuleCard key={index} {...module} />
      ))}
    </section>
  );
}
