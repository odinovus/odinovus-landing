// app/platform/app-hub/components/HubHeader.tsx
export default function HubHeader() {
  return (
    <header className="text-center py-16 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-white">Odinovus — App Hub</h1>
      <p className="mt-3 text-zinc-400 max-w-2xl mx-auto">
        Central place for all Odinovus products. Click a module to explore or
        deploy a sub-app.
      </p>
    </header>
  );
}
