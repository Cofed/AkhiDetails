'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'How it works', href: '/#' },
  { label: 'Contact', href: 'tel:7253151011' },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#d4af37]/10 bg-[#0a0e1a]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <Link href="/" className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.2em] text-white">
          <div className="h-8 w-8 rounded-lg border border-[#d4af37] bg-[#d4af37] flex items-center justify-center text-[#0a0e1a] text-xs font-black">
            A
          </div>
          AKHI
        </Link>

        <nav className="hidden items-center gap-8 text-[0.75rem] uppercase tracking-[0.15em] text-[#8a939e] lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-[#e8c547]">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link href="/booking" className="btn-primary">
            Book now
          </Link>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#d4af37]/30 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-[#d4af37]/10 bg-[#0f1420]/95 px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-4 text-[0.75rem] uppercase tracking-[0.15em] text-[#8a939e]">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="hover:text-[#e8c547]">
                {item.label}
              </Link>
            ))}
            <Link href="/booking" onClick={() => setMobileOpen(false)} className="btn-primary block text-center">
              Book now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
