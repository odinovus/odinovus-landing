"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const isHome = pathname === "/";

  const goTo = useCallback(
    (id: string) => {
      setMenuOpen(false);

      if (isHome) {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        router.push(`/#${id}`);
      }
    },
    [isHome, router]
  );

  return (
    <nav className="w-full border-b border-white/5 bg-[#0B0F1A] fixed top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo + brand */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/Logo-odinovus.png"
            alt="Odinovus logo"
            width={50}
            height={50}
            className="object-contain"
            priority
          />
          <span className="text-lg font-semibold tracking-widest text-white">
            ODINOVUS
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
          <Link href="/platform" className="hover:text-[#00B4D8] transition">
            Platform
          </Link>

          <button
            onClick={() => goTo("modules")}
            className="hover:text-[#00B4D8] transition"
          >
            Modules
          </button>

          <button
            onClick={() => goTo("roadmap")}
            className="hover:text-[#00B4D8] transition"
          >
            Roadmap
          </button>

          <button
            onClick={() => goTo("contact")}
            className="hover:text-[#00B4D8] transition"
          >
            Contact
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-zinc-300 hover:text-[#00B4D8] transition text-2xl z-50"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/80 backdrop-blur-md flex flex-col items-center justify-center md:hidden">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-white text-3xl hover:text-[#00B4D8] transition"
          >
            ✕
          </button>

          <Link
            href="/platform"
            onClick={() => setMenuOpen(false)}
            className="text-white text-2xl font-semibold transition mb-6"
          >
            Platform
          </Link>

          <button
            onClick={() => goTo("modules")}
            className="text-white text-2xl font-semibold hover:text-[#00B4D8] transition mb-6"
          >
            Modules
          </button>

          <button
            onClick={() => goTo("roadmap")}
            className="text-white text-2xl font-semibold hover:text-[#00B4D8] transition mb-6"
          >
            Roadmap
          </button>

          <button
            onClick={() => goTo("contact")}
            className="text-white text-2xl font-semibold hover:text-[#00B4D8] transition"
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
}
