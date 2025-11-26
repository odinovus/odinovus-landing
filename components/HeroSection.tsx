"use client";

import React from "react";

export default function HeroSection() {
  return (
    <section className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-32 text-center">
      {/* subtle glow behind */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top, #00B4D8_0%, transparent_40%)] opacity-30" />

      {/* Headline */}
      <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
        Odinovus
        <span className="block bg-linear-to-r from-[#00B4D8] to-[#6C63FF] bg-clip-text text-transparent">
          The Intelligence Layer for the Next Web
        </span>
      </h1>

      {/* Subtext */}
      <p className="mt-8 max-w-2xl text-lg text-zinc-400">
        A modular platform powering SaaS, AI & intelligent systems.
      </p>

      {/* CTA Buttons */}
      <div className="mt-10 flex gap-4">
        <button className="rounded-xl bg-[#00B4D8] px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90">
          Get Early Access
        </button>
        <button className="rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#00B4D8]">
          View Modules
        </button>
      </div>
    </section>
  );
}
