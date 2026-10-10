export default function HowItWorksPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-28 md:px-10">
      <div className="mb-12 max-w-2xl">
        <div className="text-[0.72rem] uppercase tracking-[0.28em] text-[#e3bd6d]">How it works</div>
        <h1 className="mt-4 text-5xl md:text-7xl">A simple process, exceptional results.</h1>
      </div>

      <div className="space-y-6">
        {[
          'Choose your package and vehicle count.',
          'Select your date and preferred service window.',
          'We arrive with the equipment and products needed to restore your finish.',
          'Walk through the results and leave with a protected, refined vehicle.',
        ].map((step, idx) => (
          <div key={step} className="soft-panel flex items-center gap-4 rounded-[24px] p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#c9a24b] text-sm font-black text-[#040507]">{idx + 1}</div>
            <p className="text-lg text-white">{step}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
