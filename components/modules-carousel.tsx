'use client';

import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type ModuleItem = {
  title: string;
  description: string;
};

export function ModulesCarousel({
  eyebrow,
  title,
  items,
  contactHref,
}: {
  eyebrow: string;
  title: string;
  items: ModuleItem[];
  contactHref: string;
}) {
  const trackRef = useRef<HTMLDivElement | null>(null);

  function scrollByAmount(direction: 'left' | 'right') {
    const el = trackRef.current;
    if (!el) return;
    const amount = Math.min(360, Math.max(280, el.clientWidth * 0.86));
    el.scrollBy({ left: direction === 'right' ? amount : -amount, behavior: 'smooth' });
  }

  return (
    <section id="modulos" className="py-20 md:py-28">
      <div className="section-shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#8f7668]">{eyebrow}</p>
            <h2 className="text-3xl leading-tight md:text-5xl">{title}</h2>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => scrollByAmount('left')}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#c8b0a2] bg-white/80 transition hover:bg-white"
              aria-label="Voltar módulos"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => scrollByAmount('right')}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#c8b0a2] bg-white/80 transition hover:bg-white"
              aria-label="Avançar módulos"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 no-scrollbar"
        >
          {items.map((item, index) => (
            <article
              key={item.title}
              className="min-w-[290px] max-w-[290px] snap-start rounded-[2rem] border border-white/70 bg-[rgba(255,255,255,0.62)] p-7 shadow-soft md:min-w-[360px] md:max-w-[360px]"
            >
              <span className="text-sm uppercase tracking-[0.3em] text-[#8f7668]">Módulo 0{index + 1}</span>
              <h3 className="mt-4 text-2xl">{item.title}</h3>
              <p className="mt-4 min-h-[108px] leading-8 text-[#6c5d55]">{item.description}</p>
              <a
                href={contactHref}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex rounded-full bg-[#3b302a] px-5 py-3 text-sm text-white transition hover:-translate-y-0.5"
              >
                Entrar em contato
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
