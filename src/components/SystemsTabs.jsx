'use client'

import { useState } from 'react'

export default function SystemsTabs({ systems }) {
  const [active, setActive] = useState(0)
  const current = systems[active]

  return (
    <div className="grid gap-6 lg:grid-cols-[260px_1fr] lg:gap-10">
      <div className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0">
        {systems.map((sys, i) => (
          <button
            key={sys.id}
            type="button"
            onClick={() => setActive(i)}
            className={`shrink-0 rounded-xl px-4 py-3.5 text-left text-sm font-semibold transition duration-300 lg:w-full ${
              i === active
                ? 'bg-[#165FA8] text-white shadow-[0_8px_24px_-12px_rgba(22,95,168,0.65)]'
                : 'bg-white/8 text-white/68 hover:bg-white/14 hover:text-white'
            }`}
          >
            {sys.tab}
          </button>
        ))}
      </div>

      <div className="relative overflow-hidden rounded-2xl">
        <img
          key={current.id}
          src={current.image}
          alt={current.title}
          className="animate-fade-in h-[320px] w-full object-cover lg:h-[400px]"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030813]/92 via-[#030813]/45 to-[#030813]/10" />
        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
          <span className="inline-flex rounded-full bg-[#165FA8]/80 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
            Waterproofing System
          </span>
          <h3 className="font-display mt-3 text-xl font-bold uppercase leading-tight text-white lg:text-2xl">
            {current.title}
          </h3>
          <p className="mt-3 max-w-[62ch] text-sm leading-relaxed text-white/80 lg:text-base">
            {current.desc}
          </p>
          <a
            href="/contact"
            className="mt-4 inline-flex items-center gap-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[#9FD0F8] transition duration-300 hover:text-white"
          >
            Request Inspection
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
