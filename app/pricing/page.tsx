export default function PricingPage() {
  const packages = [
    { name: 'Exterior Detail', price: '$120', summary: 'Per car' },
    { name: 'Interior Detail', price: '$175', summary: 'Per car' },
    { name: 'Full Detail', price: '$350', summary: 'Per car' },
  ];

  return (
    <main className="mx-auto max-w-6xl px-6 py-28 md:px-10">
      <div className="mb-12 max-w-2xl">
        <div className="text-[0.72rem] uppercase tracking-[0.28em] text-[#e3bd6d]">Pricing</div>
        <h1 className="mt-4 text-5xl md:text-7xl">Simple luxury pricing.</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {packages.map((pkg) => (
          <div key={pkg.name} className="soft-panel rounded-[28px] p-7">
            <div className="text-[0.72rem] uppercase tracking-[0.22em] text-[#e3bd6d]">{pkg.summary}</div>
            <h2 className="mt-4 text-3xl">{pkg.name}</h2>
            <div className="mt-6 text-5xl font-black text-white">{pkg.price}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
