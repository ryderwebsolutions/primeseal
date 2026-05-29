'use client'

import { useState } from 'react'

export default function FaqAccordion({ items }) {
  const [open, setOpen] = useState(null)

  return (
    <div className="divide-y divide-navy/10">
      {items.map((item, i) => (
        <div key={i}>
          <button
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-start justify-between gap-4 py-4 text-left"
            aria-expanded={open === i}
          >
            <span className="text-sm font-semibold leading-snug text-navy sm:text-base">
              {item.question}
            </span>
            <span
              className={`mt-0.5 shrink-0 text-blue transition-transform duration-300 ${
                open === i ? 'rotate-45' : ''
              }`}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </span>
          </button>
          <div
            className="overflow-hidden transition-all duration-300 ease-in-out"
            style={{ maxHeight: open === i ? '300px' : '0' }}
          >
            <p className="pb-5 text-sm leading-relaxed text-navy/70">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
