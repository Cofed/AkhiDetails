'use client';

import { useState } from 'react';

const beforeImage = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80';
const afterImage = 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80';

export default function BeforeAfterSlider() {
  const [position, setPosition] = useState(52);

  const handleMove = (clientX: number, element: HTMLDivElement | null) => {
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const ratio = Math.min(Math.max((clientX - rect.left) / rect.width, 0), 1);
    setPosition(ratio * 100);
  };

  return (
    <div
      className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0c0f13]"
      onPointerMove={(e) => handleMove(e.clientX, e.currentTarget)}
      onPointerDown={(e) => handleMove(e.clientX, e.currentTarget)}
      role="slider"
      aria-label="Before and after detail comparison"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={position}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') setPosition((p) => Math.max(p - 4, 0));
        if (e.key === 'ArrowRight') setPosition((p) => Math.min(p + 4, 100));
      }}
    >
      <div className="relative h-[440px] w-full select-none overflow-hidden">
        <img src={beforeImage} alt="Before detailing" className="h-full w-full object-cover" />
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
          <img src={afterImage} alt="After detailing" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-y-0 left-[calc(var(--split)-2px)] w-0.5 bg-[#f2dcab]" style={{ left: `${position}%` }} />
        <div className="absolute top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full border border-[#f2dcab] bg-[#040507]/80 px-3 py-2 text-[0.62rem] uppercase tracking-[0.2em] text-[#f2dcab]" style={{ left: `calc(${position}% - 48px)` }}>
          {position.toFixed(0)}%
        </div>
        <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-[#040507]/70 px-3 py-1 text-[0.62rem] uppercase tracking-[0.2em] text-white">Before</div>
        <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-[#040507]/70 px-3 py-1 text-[0.62rem] uppercase tracking-[0.2em] text-white">After</div>
      </div>
    </div>
  );
}
