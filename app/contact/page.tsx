export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-28 md:px-10">
      <div className="mb-12 max-w-2xl">
        <div className="text-[0.72rem] uppercase tracking-[0.28em] text-[#e3bd6d]">Contact</div>
        <h1 className="mt-4 text-5xl md:text-7xl">Let’s plan your next detail.</h1>
      </div>

      <div className="soft-panel rounded-[28px] p-8 md:p-10">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-[#e3bd6d]">Call</p>
            <p className="mt-2 text-xl text-white">725-315-1011</p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-[#e3bd6d]">Email</p>
            <p className="mt-2 text-xl text-white">akhiammar7@gmail.com</p>
          </div>
        </div>
      </div>
    </main>
  );
}
