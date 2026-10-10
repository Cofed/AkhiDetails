export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-28 md:px-10">
      <div className="mb-12 max-w-2xl">
        <div className="text-[0.72rem] uppercase tracking-[0.28em] text-[#e3bd6d]">Services</div>
        <h1 className="mt-4 text-5xl md:text-7xl">Premium care for immaculate driving.</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {[
          { title: 'Exterior Detail', price: '$120', desc: 'Hand wash, paint protection finish, wheel detailing, trim revitalization, and gloss enhancement.' },
          { title: 'Interior Detail', price: '$175', desc: 'Deep interior reset with leather care, stains, carpets, upholstery, and odor treatment.' },
          { title: 'Full Detail', price: '$350', desc: 'Complete exterior and interior treatment with a luxury finish and meticulous finishing detail.' },
        ].map((service) => (
          <div key={service.title} className="soft-panel rounded-[28px] p-7">
            <div className="text-[0.72rem] uppercase tracking-[0.24em] text-[#e3bd6d]">Package</div>
            <h2 className="mt-4 text-3xl">{service.title}</h2>
            <div className="mt-4 text-3xl font-black text-white">{service.price}</div>
            <p className="mt-4 text-base text-[#8a939e]">{service.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
