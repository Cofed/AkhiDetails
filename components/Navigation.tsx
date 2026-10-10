'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
  { label: 'Booking', href: '/booking' },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#040507]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.26em] text-white">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[#c9a24b]/60 bg-[#0c0f13] text-[#e3bd6d]">A</span>
          AKHI DETAILS
        </Link>

        <nav className="hidden items-center gap-7 text-[0.68rem] uppercase tracking-[0.2em] text-[#8a939e] lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              <span className="gold-line">{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link href="/booking" className="rounded-full border border-[#c9a24b]/60 bg-[#c9a24b]/10 px-5 py-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#c9a24b] hover:text-[#040507]">
            Book now
          </Link>
        </div>

        <button className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#0c0f13] lg:hidden" onClick={() => setMobileOpen((open) => !open)} aria-label="Toggle navigation">
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#040507] px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-4 text-xs uppercase tracking-[0.24em] text-[#8a939e]">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
