import Link from "next/link";

const features = [
  {
    title: "Workflow Automation",
    desc: "Automate repetitive tasks across your apps.",
  },
  {
    title: "Triggers & Actions",
    desc: "Connect events to intelligent actions.",
  },
  { title: "Monitoring", desc: "Track and optimize your automated processes." },
];

export default function AutomationPage() {
  return (
    <main className="min-h-screen bg-[#0B0F1A] text-white pt-24">
      <section className="py-16 text-center">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-4xl font-bold">Automation Layer</h1>
          <p className="mt-3 text-zinc-400 max-w-2xl mx-auto">
            Connect, automate, and optimize processes.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {features.map((f, i) => (
            <article
              key={i}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition hover:-translate-y-1 hover:border-[#00B4D8]/50 hover:shadow-[0_0_30px_-10px_#00B4D8]"
            >
              <h3 className="text-lg font-semibold text-white group-hover:text-[#00B4D8] transition-colors">
                {f.title}
              </h3>
              <p className="mt-2 text-zinc-400">{f.desc}</p>
              <div className="mt-4 text-right">
                <Link
                  href="#"
                  className="text-sm font-medium text-[#00B4D8] hover:underline"
                >
                  Learn more
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16 bg-[#070A12] text-center">
        <h2 className="text-3xl font-bold mb-4">Automate Today</h2>
        <p className="text-zinc-400 mb-6">
          Streamline your processes with Odinovus automation.
        </p>
        <Link
          href="#"
          className="inline-block bg-[#00B4D8] hover:bg-[#00a3c7] text-black font-semibold py-3 px-6 rounded-lg transition"
        >
          Get Started
        </Link>
      </section>
    </main>
  );
}
