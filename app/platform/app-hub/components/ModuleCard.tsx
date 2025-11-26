// app/platform/app-hub/components/ModuleCard.tsx
import Link from "next/link";

interface ModuleCardProps {
  title: string;
  desc: string;
  href: string;
  subdomain: string;
}

export default function ModuleCard({
  title,
  desc,
  href,
  subdomain,
}: ModuleCardProps) {
  return (
    <article className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:-translate-y-1 hover:border-[#00B4D8]/50 hover:shadow-[0_0_30px_-10px_#00B4D8]">
      <h3 className="text-lg font-semibold text-white group-hover:text-[#00B4D8] transition-colors">
        {title}
      </h3>
      <p className="mt-2 text-zinc-400">{desc}</p>

      <div className="mt-4 flex items-center justify-between">
        <Link
          href={href}
          className="text-sm font-medium text-[#00B4D8] hover:underline"
        >
          Open
        </Link>
        <span className="text-xs text-zinc-500">
          subdomain: <span className="text-zinc-300">{subdomain}</span>
        </span>
      </div>
    </article>
  );
}
