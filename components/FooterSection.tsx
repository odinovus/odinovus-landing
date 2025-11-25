"use client";

import React from "react";

export default function FooterSection() {
  return (
    <footer className="border-t border-white/10 bg-[#070A12] py-12 text-center text-sm text-zinc-400">
      <p className="mb-4">© 2025 Odinovus. All rights reserved.</p>
      <div className="flex justify-center gap-6">
        <a href="#" className="hover:text-[#00B4D8] transition">
          Terms
        </a>
        <a href="#" className="hover:text-[#00B4D8] transition">
          Privacy
        </a>
        <a href="#" className="hover:text-[#00B4D8] transition">
          Contact
        </a>
      </div>
    </footer>
  );
}
