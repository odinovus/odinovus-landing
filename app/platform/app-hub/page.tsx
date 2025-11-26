import HubHeader from "./components/HubHeader";
import HubGrid from "./components/HubGrid";

export default function AppHubPage() {
  return (
    <main className="min-h-screen bg-[#0B0F1A] text-white pt-24">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <HubHeader />
        <HubGrid />
      </div>
    </main>
  );
}
