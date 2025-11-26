"use client";

import React from "react";
import Link from "next/link";

export default function FooterSection() {
  return (
    <footer className="border-t border-white/10 bg-[#070A12] py-12 text-center text-sm text-zinc-400">
      <p className="mb-4">© 2025 Odinovus. All rights reserved.</p>
      <div className="flex justify-center gap-6">
        <Link href="/terms" className="hover:text-[#00B4D8] transition">
          Terms
        </Link>
        <Link href="/privacy" className="hover:text-[#00B4D8] transition">
          Privacy
        </Link>
        <Link href="#contact" className="hover:text-[#00B4D8] transition">
          Contact
        </Link>
      </div>
    </footer>
  );
}
