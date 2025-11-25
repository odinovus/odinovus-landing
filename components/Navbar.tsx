"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Funktion som stänger menyn vid klick på länk
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="w-full border-b border-white/5 bg-[#0B0F1A] fixed top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo + brand */}
        <Link href="/" className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-[#00B4D8]" />
          <span className="text-lg font-semibold tracking-widest text-white">
            ODINOVUS
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
          <a href="#modules" className="hover:text-[#00B4D8] transition">
            Modules
          </a>
          <a href="#roadmap" className="hover:text-[#00B4D8] transition">
            Roadmap
          </a>
          <a href="#contact" className="hover:text-[#00B4D8] transition">
            Contact
          </a>
        </div>

        {/* Mobile hamburger / close button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-zinc-300 hover:text-[#00B4D8] transition text-2xl"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/80 backdrop-blur-md flex flex-col items-center justify-center md:hidden">
          {/* Stäng-knapp */}
          <button
            onClick={handleLinkClick}
            className="absolute top-6 right-6 text-white text-3xl hover:text-[#00B4D8] transition"
          >
            ✕
          </button>

          {/* Meny-länkar */}
          <a
            href="#modules"
            onClick={handleLinkClick}
            className="text-white text-2xl font-semibold hover:text-[#00B4D8] transition mb-6"
          >
            Modules
          </a>
          <a
            href="#roadmap"
            onClick={handleLinkClick}
            className="text-white text-2xl font-semibold hover:text-[#00B4D8] transition mb-6"
          >
            Roadmap
          </a>
          <a
            href="#contact"
            onClick={handleLinkClick}
            className="text-white text-2xl font-semibold hover:text-[#00B4D8] transition"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
