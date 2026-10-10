import Link from 'next/link';
import HeroScene from '@/components/HeroScene';
import ScrollReveal from '@/components/ScrollReveal';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';

const serviceCards = [
  {
    id: '01',
    title: 'Exterior Detail',
    price: '$120',
    description: 'Paint correction prep, hand wash, decontamination, gloss finishing, and wheel care.',
    blurb: 'Paint restored to a deep, reflective finish.',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: '02',
    title: 'Interior Detail',
    price: '$175',
    description: 'Leather conditioning, stain treatment, steam cleaning, and interior reset.',
    blurb: 'Cabin comfort elevated with meticulous finishing.',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: '03',
    title: 'Full Detail',
    price: '$350',
    description: 'The complete premium treatment for paint, trim, interior, glass, and finishing details.',
    blurb: 'Most popular for a complete showroom reset.',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80'
  },
];

const stats = [
  { label: 'Mobile service', value: '7 days' },
  { label: 'Avg. response', value: '2 hrs' },
  { label: 'Vehicles detailed', value: '1k+' },
];

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(201,162,75,0.18),_transparent_48%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 pb-10 pt-28 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:pb-20 lg:pt-32">
          <ScrollReveal>
            <div className="relative z-10 max-w-xl">
              <div className="mb-6 flex items-center gap-3 text-[0.68rem] uppercase tracking-[0.28em] text-[#e3bd6d]">
                <span className="inline-block h-px w-10 bg-[#c9a24b]" />
                Las Vegas • Mobile Detailers
              </div>

              <h1 className="text-5xl font-black leading-[0.92] text-white md:text-7xl">
                Premium detailing. <span className="text-gradient">We come to you.</span>
              </h1>

              <p className="mt-6 max-w-lg text-base text-[#8a939e] md:text-lg">
                AKHI DETAILS delivers luxury automotive care directly to your home, workplace, or hotel with showroom-level finishing and mobile convenience.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/booking" className="inline-flex items-center gap-3 rounded-full bg-[#c9a24b] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#040507] transition hover:translate-y-[-1px] hover:bg-[#e3bd6d]">
                  Schedule an appointment
                  <span aria-hidden="true">→</span>
                </Link>
                <Link href="/services" className="inline-flex items-center gap-3 rounded-full border border-[#c9a24b]/40 bg-white/0 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:border-[#e3bd6d] hover:bg-[#0c0f13]">
                  View services
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-6 text-xs uppercase tracking-[0.18em] text-[#8a939e]">
                <span>Mobile service</span>
                <span>7-day availability</span>
                <span>No online payment</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="relative mx-auto w-full max-w-[620px]">
              <div className="absolute inset-x-10 top-8 h-48 rounded-full bg-[#c9a24b]/20 blur-3xl" />
              <HeroScene />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((stat, idx) => (
            <ScrollReveal key={stat.label} delay={idx * 0.08}>
              <div className="soft-panel rounded-[28px] p-8">
                <div className="text-4xl font-black text-white md:text-5xl">{stat.value}</div>
                <div className="mt-2 text-[0.72rem] uppercase tracking-[0.22em] text-[#8a939e]">{stat.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <ScrollReveal>
          <div className="mb-12 max-w-2xl">
            <div className="text-[0.72rem] uppercase tracking-[0.28em] text-[#e3bd6d]">Premium packages</div>
            <h2 className="mt-3 text-4xl md:text-6xl">Precision detailing for every finish.</h2>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {serviceCards.map((card, idx) => (
            <ScrollReveal key={card.title} delay={idx * 0.12}>
              <div className={`group relative overflow-hidden rounded-[28px] border ${card.title === 'Full Detail' ? 'border-[#c9a24b]/60 bg-[#0c0f13] shadow-[0_0_30px_rgba(201,162,75,0.12)]' : 'border-white/10 bg-[#0c0f13]/80'} transition hover:-translate-y-1 hover:border-[#e3bd6d]/60`}>
                {card.title === 'Full Detail' && (
                  <div className="absolute right-4 top-4 z-10 rounded-full border border-[#c9a24b]/60 bg-[#0b0d10] px-3 py-1 text-[0.62rem] uppercase tracking-[0.24em] text-[#e3bd6d]">
                    Most popular
                  </div>
                )}

                <div className="overflow-hidden">
                  <img src={card.image} alt={card.title} className="h-72 w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>

                <div className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-[0.72rem] uppercase tracking-[0.24em] text-[#e3bd6d]">{card.id}</span>
                    <span className="text-xl font-semibold text-white">{card.price}</span>
                  </div>

                  <h3 className="text-2xl text-white">{card.title}</h3>
                  <p className="mt-3 text-sm text-[#8a939e]">{card.description}</p>
                  <p className="mt-4 text-sm text-[#f2dcab]">{card.blurb}</p>

                  <div className="mt-6 space-y-3 text-sm text-[#8a939e]">
                    <div className="flex items-center justify-between border-t border-white/10 pt-3"><span>Paint and trim</span><span>Included</span></div>
                    <div className="flex items-center justify-between"><span>Interior finish</span><span>{card.title === 'Exterior Detail' ? 'Optional' : 'Included'}</span></div>
                    <div className="flex items-center justify-between"><span>Detailing tools</span><span>Premium</span></div>
                  </div>

                  <Link href="/booking" className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#c9a24b]/50 bg-[#c9a24b]/5 px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#c9a24b] hover:text-[#040507]">
                    Book this service
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <ScrollReveal>
            <div className="soft-panel rounded-[30px] p-8">
              <div className="text-[0.72rem] uppercase tracking-[0.3em] text-[#e3bd6d]">Before & after</div>
              <h2 className="mt-3 text-4xl">A dramatic showroom reset.</h2>
              <p className="mt-4 max-w-md text-base text-[#8a939e]">
                Genuine detailing work transforms dull, tired finishes into deep, reflective, premium surfaces with detail that lasts.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <BeforeAfterSlider />
          </ScrollReveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <ScrollReveal>
          <div className="mb-10 max-w-2xl">
            <div className="text-[0.72rem] uppercase tracking-[0.28em] text-[#e3bd6d]">How it works</div>
            <h2 className="mt-3 text-4xl md:text-6xl">Luxury service, built around your schedule.</h2>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            ['01', 'Tell us about your vehicle and preferred timing.'],
            ['02', 'We arrive fully equipped for a mobile, precise detailing session.'],
            ['03', 'You receive a glossy, protected finish with final walkthrough.'],
          ].map(([step, desc], idx) => (
            <ScrollReveal key={step} delay={idx * 0.1}>
              <div className="soft-panel rounded-[28px] p-7">
                <div className="text-4xl font-black text-[#e3bd6d]">{step}</div>
                <p className="mt-4 text-lg text-white">{desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="soft-panel grid gap-8 rounded-[30px] p-8 md:grid-cols-[1fr_auto] md:p-12">
          <div>
            <div className="text-[0.72rem] uppercase tracking-[0.28em] text-[#e3bd6d]">Ready to elevate your finish?</div>
            <h2 className="mt-3 text-4xl md:text-5xl">Book a premium mobile detail today.</h2>
          </div>
          <Link href="/booking" className="inline-flex items-center justify-center rounded-full bg-[#c9a24b] px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#040507] transition hover:bg-[#e3bd6d]">
            Schedule an appointment
          </Link>
        </div>
      </section>
    </main>
  );
}
