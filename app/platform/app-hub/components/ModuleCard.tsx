"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export type ModuleStatus = "live" | "coming-soon";

export type ModuleCardProps = {
  title: string;
  desc: string;
  href: string;
  subdomain: string;
  status?: ModuleStatus;
  index?: number;
};

export default function ModuleCard({
  title,
  desc,
  href,
  subdomain,
  status = "live",
  index = 0,
}: ModuleCardProps) {
  const isComingSoon = status === "coming-soon";

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: "easeOut",
      }}
      whileHover={{
        y: -8,
      }}
      className="group relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition
      hover:border-[#00B4D8]/50 hover:shadow-[0_0_30px_-10px_#00B4D8]"
    >
      {/* Glow on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 blur-xl transition duration-500 group-hover:opacity-100 bg-[#00B4D8]/10" />

      <h3 className="relative z-10 text-lg font-semibold text-white group-hover:text-[#00B4D8] transition-colors">
        {title}
      </h3>

      <p className="relative z-10 mt-2 text-zinc-400">{desc}</p>

      <div className="relative z-10 mt-4 flex items-center justify-between">
        {isComingSoon ? (
          <span className="text-xs font-medium text-yellow-400">
            Coming Soon
          </span>
        ) : (
          <Link
            href={href}
            className="text-sm font-medium text-[#00B4D8] hover:underline"
          >
            Öppna
          </Link>
        )}

        <span className="text-xs text-zinc-500">
          subdomain: <span className="text-zinc-300">{subdomain}</span>
        </span>
      </div>
    </motion.article>
  );
}
