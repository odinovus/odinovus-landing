// app/platform/page.tsx
import Link from "next/link";

const modules = [
  {
    id: "app-hub",
    title: "App Hub",
    desc: "Central gateway to all Odinovus applications.",
    href: "/platform/app-hub",
  },
  {
    id: "saas",
    title: "SaaS Platform",
    desc: "Build and deploy scalable SaaS solutions.",
    href: "/platform/saas",
  },
  {
    id: "agents",
    title: "AI Agents",
    desc: "Intelligent autonomous agents for real-world tasks.",
    href: "/platform/agents",
  },
  {
    id: "data",
    title: "Data & Analytics",
    desc: "Insights powered by real-time intelligence.",
    href: "/platform/analytics",
  },
  {
    id: "devtools",
    title: "Developer Tools",
    desc: "APIs & SDKs for fast integration.",
    href: "/platform/devtools",
  },
  {
    id: "automation",
    title: "Automation Layer",
    desc: "Connect, automate, and optimize processes.",
    href: "/platform/automation",
  },
];

export default function PlatformPage() {
  return (
    <main className="min-h-screen bg-[#0B0F1A] text-white pt-24">
      {/* HEADER SECTION */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-4xl font-bold">Odinovus — App Hub</h1>
          <p className="mt-3 text-zinc-400 max-w-2xl mx-auto">
            Central place for Odinovus products & modules. Click a module to
            view details or to deploy a sub-app.
          </p>
        </div>
      </section>

      {/* MODULE CARDS SECTION */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {modules.map((m) => (
              <article
                key={m.id}
                className="group relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition hover:-translate-y-1 hover:border-[#00B4D8]/50 hover:shadow-[0_0_30px_-10px_#00B4D8]"
              >
                <h3 className="text-lg font-semibold text-white group-hover:text-[#00B4D8] transition-colors">
                  {m.title}
                </h3>
                <p className="mt-2 text-zinc-400">{m.desc}</p>

                <div className="mt-4 flex items-center justify-between">
                  <Link
                    href={m.href}
                    className="text-sm font-medium text-[#00B4D8] hover:underline"
                    aria-label={`Öppna ${m.title} module`}
                  >
                    Öppna
                  </Link>

                  <span className="text-xs text-zinc-400">
                    {m.id}.odinovus.com
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 text-center text-sm text-zinc-500">
          Tips: varje kort är en framtida sub-app. Vi kan auto-create routes
          eller peka mot subdomäner (crm., app., dev., osv) när du är redo.
        </div>
      </section>
    </main>
  );
}
