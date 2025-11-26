// /components/ContactSection.tsx
"use client";

import React, { useState } from "react";

export default function ContactSection() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Här kan du koppla till API/SMTP senare
    try {
      console.log("Sending:", { email, message });
      setStatus("success");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="mx-auto max-w-4xl px-6 py-16 text-center md:text-left"
    >
      <h2 className="text-3xl font-bold text-white mb-4">Contact Us</h2>
      <p className="text-zinc-400 mb-8">
        Reach us via email or send a message using the form below.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 md:flex-row md:gap-6"
      >
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 px-4 py-3 rounded-md border border-zinc-700 bg-[#0B0F1A] text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#00B4D8]"
        />
        <textarea
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="flex-1 px-4 py-3 rounded-md border border-zinc-700 bg-[#0B0F1A] text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#00B4D8] resize-none h-32"
        />
        <button
          type="submit"
          className="bg-[#00B4D8] hover:bg-[#00a0c1] text-white font-semibold rounded-md px-6 py-3 transition-colors"
        >
          Send
        </button>
      </form>

      {status === "success" && (
        <p className="mt-4 text-green-400">Message sent successfully!</p>
      )}
      {status === "error" && (
        <p className="mt-4 text-red-500">Failed to send message. Try again.</p>
      )}
    </section>
  );
}
