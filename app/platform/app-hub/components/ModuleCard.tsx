import Link from "next/link";

export interface ModuleCardProps {
  title: string;
  desc: string;
  href: string;
  subdomain: string;
  status?: "live" | "coming-soon";
}

export default function ModuleCard({
  title,
  desc,
  href,
  subdomain,
  status = "live",
}: ModuleCardProps) {
  return (
    <article className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:-translate-y-1 hover:border-[#00B4D8]/50 hover:shadow-[0_0_30px_-10px_#00B4D8]">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white group-hover:text-[#00B4D8] transition-colors">
          {title}
        </h3>

        {status === "coming-soon" && (
          <span className="rounded-full bg-[#6C63FF] px-2 py-0.5 text-xs text-white">
            Coming Soon
          </span>
        )}
      </div>

      <p className="mt-2 text-zinc-400">{desc}</p>

      {status === "live" ? (
        <div className="mt-4 flex items-center justify-between">
          <Link
            href={href}
            target="_blank"
            className="text-sm font-medium text-[#00B4D8] hover:underline"
          >
            Open
          </Link>

          <span className="text-xs text-zinc-500">
            subdomain: <span className="text-zinc-300">{subdomain}</span>
          </span>
        </div>
      ) : (
        <div className="mt-4 flex items-center justify-between opacity-60">
          <span className="text-sm text-zinc-400">Unavailable</span>

          <span className="text-xs text-zinc-500">
            subdomain: <span className="text-zinc-300">{subdomain}</span>
          </span>
        </div>
      )}
    </article>
  );
}
