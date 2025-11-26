"use client";

import React from "react";

const roadmap = [
  {
    phase: "Phase 01",
    title: "Foundation",
    desc: "Setup core architecture and basic modules.",
  },
  {
    phase: "Phase 02",
    title: "AI & SaaS Core",
    desc: "Integrate AI agents and deploy SaaS platform.",
  },
  {
    phase: "Phase 03",
    title: "Expansion",
    desc: "Add automation layer, analytics & developer tools.",
  },
];

export default function RoadmapSection() {
  return (
    <section
      id="roadmap"
      className="mx-auto max-w-7xl px-6 py-24 pt-32 scroll-mt-28"
    >
      {" "}
      <h2 className="mb-16 text-center text-4xl font-bold text-white">
        Roadmap
      </h2>
      <div className="relative mx-auto max-w-4xl space-y-12">
        {roadmap.map((item, i) => (
          <div key={i} className="relative flex items-start gap-6">
            {/* Dot */}
            <span className="mt-1 block h-4 w-4 shrink-0 rounded-full bg-[#00B4D8]"></span>

            {/* Text */}
            <div>
              <h3 className="text-xl font-semibold text-white">
                {item.phase} — {item.title}
              </h3>
              <p className="mt-1 text-zinc-400">{item.desc}</p>
            </div>

            {/* Line connecting dots, except last */}
            {i < roadmap.length - 1 && (
              <span className="absolute top-5 left-1/2 -ml-px h-12 w-px bg-white/10"></span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
