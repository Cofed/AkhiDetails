'use client';

import { useMemo, useState } from 'react';

const servicePriceMap = {
  exterior: 120,
  interior: 175,
  full: 350,
};

export default function BookingPage() {
  const [service, setService] = useState<'exterior' | 'interior' | 'full'>('full');
  const [vehicleCount, setVehicleCount] = useState(1);
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const total = useMemo(() => servicePriceMap[service] * vehicleCount, [service, vehicleCount]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !date || !address) {
      return;
    }
    setSubmitted(true);
  };

  return (
    <main className="mx-auto max-w-6xl px-6 py-28 md:px-10">
      <div className="mb-12 max-w-2xl">
        <div className="text-[0.72rem] uppercase tracking-[0.28em] text-[#e3bd6d]">Booking</div>
        <h1 className="mt-4 text-5xl md:text-7xl">Reserve your mobile detail.</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <form onSubmit={handleSubmit} className="soft-panel rounded-[28px] p-8 md:p-10">
          <div className="grid gap-6 md:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm uppercase tracking-[0.2em] text-[#e3bd6d]">Service</span>
              <select value={service} onChange={(e) => setService(e.target.value as 'exterior' | 'interior' | 'full')} className="w-full rounded-xl border border-white/10 bg-[#080a0d] p-3 text-white">
                <option value="exterior">Exterior Detail — $120</option>
                <option value="interior">Interior Detail — $175</option>
                <option value="full">Full Detail — $350</option>
              </select>
            </label>

            <label className="block">
              <span className="mb-2 block text-sm uppercase tracking-[0.2em] text-[#e3bd6d]">Vehicles</span>
              <select value={vehicleCount} onChange={(e) => setVehicleCount(Number(e.target.value))} className="w-full rounded-xl border border-white/10 bg-[#080a0d] p-3 text-white">
                {[1,2,3,4,5].map((count) => (
                  <option key={count} value={count}>{count}</option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="mb-2 block text-sm uppercase tracking-[0.2em] text-[#e3bd6d]">Date</span>
              <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full rounded-xl border border-white/10 bg-[#080a0d] p-3 text-white" />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm uppercase tracking-[0.2em] text-[#e3bd6d]">Name</span>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="w-full rounded-xl border border-white/10 bg-[#080a0d] p-3 text-white" />
            </label>

            <label className="block md:col-span-2">
              <span className="mb-2 block text-sm uppercase tracking-[0.2em] text-[#e3bd6d]">Email</span>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="w-full rounded-xl border border-white/10 bg-[#080a0d] p-3 text-white" />
            </label>

            <label className="block md:col-span-2">
              <span className="mb-2 block text-sm uppercase tracking-[0.2em] text-[#e3bd6d]">Mobile service address</span>
              <textarea value={address} onChange={(e) => setAddress(e.target.value)} rows={4} placeholder="Street, city, ZIP" className="w-full rounded-xl border border-white/10 bg-[#080a0d] p-3 text-white" />
            </label>
          </div>

          <div className="mt-8 flex items-center justify-between gap-4">
            <button type="submit" className="rounded-full bg-[#c9a24b] px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#040507] hover:bg-[#e3bd6d]">
              Confirm booking
            </button>
            {submitted && <span className="text-sm uppercase tracking-[0.2em] text-[#e3bd6d]">Booking requested</span>}
          </div>
        </form>

        <aside className="soft-panel rounded-[28px] p-8">
          <div className="text-[0.72rem] uppercase tracking-[0.24em] text-[#e3bd6d]">Review</div>
          <div className="mt-4 space-y-5 text-base text-[#8a939e]">
            <div className="flex items-center justify-between border-b border-white/10 pb-3"><span>Service</span><span className="text-white">{service}</span></div>
            <div className="flex items-center justify-between border-b border-white/10 pb-3"><span>Vehicles</span><span className="text-white">{vehicleCount}</span></div>
            <div className="flex items-center justify-between border-b border-white/10 pb-3"><span>Base rate</span><span className="text-white">${servicePriceMap[service]}</span></div>
            <div className="flex items-center justify-between border-b border-white/10 pb-3"><span>Total</span><span className="text-2xl font-black text-white">${total}</span></div>
          </div>

          <div className="mt-8 rounded-xl border border-[#c9a24b]/30 bg-[#c9a24b]/5 p-4 text-sm text-[#f2dcab]">
            Large vehicle pricing notice: SUVs, trucks, and vehicles with elevated size may require an added rate based on access and time. Final pricing will be confirmed before booking completion.
          </div>
        </aside>
      </div>
    </main>
  );
}
