// /components/HeroSection.tsx
"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, x: -30 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut", // ✅ FIX: TypeScript-safe easing
    },
  },
};

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0B0F1A]">
      {/* Glow behind */}
      <div className="pointer-events-none absolute left-1/2 top-[-50px] -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#00B4D8]/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-6 py-28">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 items-center">
          {/* LEFT */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-8"
          >
            <motion.h1
              variants={item}
              className="text-5xl md:text-6xl font-bold leading-tight"
            >
              Odinovus — The intelligence layer for the next web
            </motion.h1>

            <motion.p
              variants={item}
              className="text-lg text-zinc-400 max-w-2xl"
            >
              A modular platform powering SaaS, AI & intelligent systems. Build,
              connect and deploy sub-apps under a unified hub.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-4 pt-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Link
                  href="#modules"
                  className="inline-block bg-[#00B4D8] text-black font-semibold px-7 py-3 rounded-xl shadow-[0_0_20px_-8px_#00B4D8]"
                >
                  Get early access
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Link
                  href="/platform"
                  className="inline-block border border-white/10 px-7 py-3 rounded-xl text-white hover:bg-white/5 transition"
                >
                  Explore Platform
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative flex items-center justify-center"
          >
            {/* Glass glow */}
            <div className="absolute -inset-8 -z-10 rounded-full bg-[#00B4D8]/20 blur-3xl" />

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut", // ✅ FIXED
              }}
              className="group w-full max-w-md rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-[0_10px_50px_-20px_rgba(0,180,216,0.4)]"
            >
              {/* Placeholder visual */}
              <div className="h-48 w-full rounded-xl bg-gradient-to-b from-white/5 to-transparent flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,180,216,0.3),_transparent_60%)] opacity-40" />

                <span className="relative z-10 text-zinc-300">
                  Visual / Illustration
                </span>
              </div>

              <div className="mt-5 space-y-1">
                <div className="text-sm text-zinc-400">Live demo</div>
                <div className="font-medium">Realtime modules & connectors</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
