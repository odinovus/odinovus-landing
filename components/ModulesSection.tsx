"use client";

import React from "react";

const modules = [
  { title: "App Hub", desc: "Central gateway to all Odinovus applications." },
  { title: "SaaS Platform", desc: "Build and deploy scalable SaaS solutions." },
  {
    title: "AI Agents",
    desc: "Intelligent autonomous agents for real-world tasks.",
  },
  {
    title: "Data & Analytics",
    desc: "Insights powered by real-time intelligence.",
  },
  { title: "Developer Tools", desc: "APIs & SDKs for fast integration." },
  {
    title: "Automation Layer",
    desc: "Connect, automate, and optimize processes.",
  },
];

export default function ModulesSection() {
  return (
    <section id="modules" className="mx-auto max-w-7xl px-6 py-24">
      <h2 className="mb-16 text-center text-4xl font-bold text-white">
        Odinovus Modules
      </h2>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {modules.map((module, i) => (
          <div
            key={i}
            className="group relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition hover:-translate-y-1 hover:border-[#00B4D8]/50 hover:shadow-[0_0_30px_-10px_#00B4D8]"
          >
            <h3 className="mb-4 text-xl font-semibold text-white">
              {module.title}
            </h3>
            <p className="text-zinc-400">{module.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
