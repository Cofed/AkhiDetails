export default function AdminPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-28 md:px-10">
      <div className="mb-12 max-w-2xl">
        <div className="text-[0.72rem] uppercase tracking-[0.28em] text-[#e3bd6d]">Admin</div>
        <h1 className="mt-4 text-5xl md:text-7xl">Operations dashboard.</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {[
          ['Pending appointments', '12'],
          ['Completed this week', '24'],
          ['Revenue', '$4,850'],
        ].map(([label, value]) => (
          <div key={label} className="soft-panel rounded-[24px] p-6">
            <div className="text-[0.72rem] uppercase tracking-[0.22em] text-[#e3bd6d]">{label}</div>
            <div className="mt-4 text-4xl font-black text-white">{value}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
