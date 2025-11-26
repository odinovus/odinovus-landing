"use client";

import { motion, Variants } from "framer-motion";

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

// Variants korrekt typad
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeInOut" }, // ✅ TS-kompatibel easing
  },
};

export default function ModulesSection() {
  return (
    <section
      id="modules"
      className="mx-auto max-w-7xl px-6 py-24 pt-36 scroll-mt-28 bg-[#0B0F1A]"
    >
      {/* Title */}
      <motion.h2
        variants={item}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-16 text-center text-4xl font-bold text-white"
      >
        Odinovus Modules
      </motion.h2>

      {/* Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {modules.map((module, i) => (
          <motion.div
            key={i}
            variants={item}
            className="group relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition hover:-translate-y-1 hover:border-[#00B4D8]/50 hover:shadow-[0_0_30px_-10px_#00B4D8]"
          >
            <h3 className="mb-4 text-xl font-semibold text-white group-hover:text-[#00B4D8] transition">
              {module.title}
            </h3>
            <p className="text-zinc-400">{module.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
