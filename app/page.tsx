'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import { useState } from 'react';

const HeroScene = dynamic(() => import('@/components/HeroScene'), {
  ssr: false,
  loading: () => (
    <div className="h-[520px] w-full rounded-[32px] border border-[#d4af37]/20 bg-[#0f1420] animate-pulse flex items-center justify-center">
      <span className="text-[#8a939e]">Loading 3D scene...</span>
    </div>
  ),
});

const serviceCards = [
  {
    id: '01',
    title: 'Exterior Detail',
    price: '$120',
    description: 'Professional paint protection, hand wash, ceramic coating application, and premium wheel detailing.',
    image: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: '02',
    title: 'Interior Detail',
    price: '$175',
    description: 'Deep leather conditioning, premium fabric cleaning, odor treatment, and interior refinishing.',
    image: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: '03',
    title: 'Full Detail',
    price: '$350',
    description: 'Complete exterior and interior treatment. The ultimate showroom reset with full protection package.',
    image: 'https://images.unsplash.com/photo-1486262715619-67b519e0bbe5?auto=format&fit=crop&w=900&q=80',
  },
];

const stats = [
  { label: 'Projects completed', value: '500+' },
  { label: 'Client satisfaction', value: '99%' },
  { label: '24h turnaround', value: 'Available' },
];

export default function HomePage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <main className="relative z-10">
      {/* HERO SECTION */}
      <section className="relative min-h-screen overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(212,175,55,0.15),rgba(212,175,55,0))]" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:px-10 lg:grid-cols-[1.2fr_1fr]">
          <ScrollReveal>
            <div className="space-y-6">
              <div className="inline-block">
                <div className="rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 px-4 py-2 text-[0.75rem] uppercase tracking-[0.3em] text-[#e8c547]">
                  ✨ Luxury Mobile Detailing
                </div>
              </div>

              <h1 className="text-6xl md:text-7xl font-black leading-[0.95] text-white">
                Your car, perfected
              </h1>

              <p className="text-lg text-[#8a939e] max-w-lg leading-relaxed">
                Premium mobile detailing delivered to your door. We bring showroom-quality finishes to Las Vegas with precision, care, and unmatched professionalism.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/booking" className="btn-primary">
                  Book now
                </Link>
                <Link href="#services" className="btn-secondary">
                  View services
                </Link>
              </div>

              <div className="flex items-center gap-8 pt-8 border-t border-white/10">
                <div>
                  <p className="text-2xl font-black text-[#e8c547]">24/7</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#8a939e]">Available</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-[#e8c547]">Las Vegas</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#8a939e]">Local</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-[#e8c547]">Mobile</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#8a939e]">Service</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/20 to-[#3b82f6]/10 blur-3xl rounded-full" />
              <HeroScene />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((stat, idx) => (
            <ScrollReveal key={stat.label} delay={idx * 0.1}>
              <div className="soft-panel rounded-[24px] p-8 text-center card-hover">
                <p className="text-4xl md:text-5xl font-black text-[#e8c547]">{stat.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[#8a939e]">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-7xl px-6 md:px-10 py-20">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <div className="inline-block mb-4">
              <div className="rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 px-4 py-2 text-[0.75rem] uppercase tracking-[0.3em] text-[#e8c547]">
                Services
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white">Premium packages tailored for you</h2>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 lg:grid-cols-3">
          {serviceCards.map((card, idx) => (
            <ScrollReveal key={card.title} delay={idx * 0.12}>
              <div
                className="group relative overflow-hidden rounded-[28px] border border-[#d4af37]/20 bg-[#0f1420]/80 card-hover h-full"
                onMouseEnter={() => setHoveredCard(card.title)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {card.title === 'Full Detail' && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="rounded-full border border-[#d4af37]/60 bg-[#0a0e1a] px-3 py-1 text-[0.65rem] uppercase tracking-[0.25em] text-[#e8c547]">
                      ⭐ Most Popular
                    </div>
                  </div>
                )}

                <div className="relative h-72 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-transparent to-transparent" />
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[0.75rem] uppercase tracking-[0.25em] text-[#e8c547]">{card.id}</span>
                    <span className="text-3xl font-black text-[#e8c547]">{card.price}</span>
                  </div>

                  <h3 className="text-2xl font-black text-white mb-3">{card.title}</h3>
                  <p className="text-sm text-[#8a939e] mb-6">{card.description}</p>

                  <div className={`overflow-hidden transition-all duration-300 ${hoveredCard === card.title ? 'max-h-40' : 'max-h-0'}`}>
                    <div className="space-y-2 text-sm text-[#8a939e] py-4 border-t border-white/10">
                      <div className="flex justify-between"><span>Premium finish</span><span className="text-[#e8c547]">✓</span></div>
                      <div className="flex justify-between"><span>Mobile service</span><span className="text-[#e8c547]">✓</span></div>
                      <div className="flex justify-between"><span>24h availability</span><span className="text-[#e8c547]">✓</span></div>
                    </div>
                  </div>

                  <Link href="/booking" className="btn-primary w-full mt-6 inline-block text-center">
                    Book now
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-20">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <div className="inline-block mb-4">
              <div className="rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 px-4 py-2 text-[0.75rem] uppercase tracking-[0.3em] text-[#e8c547]">
                Process
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white">Simple, seamless, perfected</h2>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            { step: '01', title: 'Book', desc: 'Choose your service, date, and time in seconds.' },
            { step: '02', title: 'Confirm', desc: 'Receive instant confirmation and email receipt.' },
            { step: '03', title: 'Relax', desc: 'We arrive and deliver a showroom-quality finish.' },
          ].map((item, idx) => (
            <ScrollReveal key={item.step} delay={idx * 0.1}>
              <div className="soft-panel rounded-[24px] p-8 card-hover text-center">
                <div className="text-5xl font-black text-[#d4af37] mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-[#8a939e]">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-20">
        <ScrollReveal>
          <div className="soft-panel rounded-[32px] p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/10 to-transparent" />
            <div className="relative z-10">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6">Ready to elevate your ride?</h2>
              <p className="text-lg text-[#8a939e] mb-8 max-w-2xl mx-auto">Book your premium mobile detail today and experience the difference luxury service makes.</p>
              <Link href="/booking" className="btn-primary inline-block">
                Schedule your appointment
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
