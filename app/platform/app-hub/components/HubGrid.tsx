"use client";

import ModuleCard, { ModuleStatus } from "./ModuleCard";
import { motion, Variants } from "framer-motion";

// Typ för en modul
export type HubModule = {
  title: string;
  desc: string;
  href: string;
  subdomain: string;
  status: ModuleStatus;
};

// Props för HubGrid
type HubGridProps = {
  modules: HubModule[];
};

// Framer Motion container
const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function HubGrid({ modules }: HubGridProps) {
  return (
    <motion.section
      className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      {modules.map((module, i) => (
        <ModuleCard key={i} index={i} {...module} />
      ))}
    </motion.section>
  );
}
