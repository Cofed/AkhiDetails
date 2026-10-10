export default function FAQPage() {
  const faqs = [
    'Do you offer mobile service?',
    'What is the typical turnaround time?',
    'Can I request interior conditioning only?',
    'Are prices per vehicle?',
  ];

  return (
    <main className="mx-auto max-w-5xl px-6 py-28 md:px-10">
      <div className="mb-12 max-w-2xl">
        <div className="text-[0.72rem] uppercase tracking-[0.28em] text-[#e3bd6d]">FAQ</div>
        <h1 className="mt-4 text-5xl md:text-7xl">Questions, answered clearly.</h1>
      </div>

      <div className="space-y-4">
        {faqs.map((faq) => (
          <div key={faq} className="soft-panel rounded-[24px] p-6 text-lg text-white">{faq}</div>
        ))}
      </div>
    </main>
  );
}
