'use client'

import { useState } from 'react'
import { servicesPreviewItems } from '../content/siteContent'

export default function QuoteForm() {
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    const d = new FormData(e.target)
    const payload = {
      name: d.get('name'),
      phone: d.get('phone'),
      location: d.get('location'),
      service: d.get('service'),
      message: d.get('message'),
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json.error || 'Submission failed.')
      setStatus('success')
      e.target.reset()
    } catch (err) {
      setErrorMsg(err.message)
      setStatus('error')
    }
  }

  const inputCls =
    'w-full rounded-xl border border-navy/12 bg-mist/55 px-4 py-3 text-sm text-navy placeholder:text-navy/38 outline-none transition duration-200 focus:border-blue focus:bg-white focus:ring-2 focus:ring-blue/18'

  const labelCls = 'mb-1.5 block text-[0.66rem] font-semibold uppercase tracking-[0.1em] text-navy/65'

  if (status === 'success') {
    return (
      <div className="mt-6 rounded-xl border border-blue/25 bg-blue/8 px-6 py-8 text-center">
        <svg className="mx-auto mb-3 h-8 w-8 text-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20,6 9,17 4,12" />
        </svg>
        <p className="text-sm font-semibold text-navy">Enquiry sent — we'll be in touch within 24 hours.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor="qf-name" className={labelCls}>Name *</label>
          <input id="qf-name" type="text" name="name" required placeholder="Your name" className={inputCls} />
        </div>
        <div>
          <label htmlFor="qf-phone" className={labelCls}>Phone *</label>
          <input id="qf-phone" type="tel" name="phone" required placeholder="Your phone number" className={inputCls} />
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor="qf-location" className={labelCls}>Location *</label>
          <input id="qf-location" type="text" name="location" required placeholder="e.g. South Dublin" className={inputCls} />
        </div>
        <div>
          <label htmlFor="qf-service" className={labelCls}>Service Required *</label>
          <select id="qf-service" name="service" required defaultValue="" className={inputCls}>
            <option value="">Select a service</option>
            {servicesPreviewItems.map((s) => (
              <option key={s.title} value={s.title}>{s.title}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="qf-message" className={labelCls}>Describe the Issue *</label>
        <textarea
          id="qf-message"
          name="message"
          required
          rows={3}
          placeholder="Describe your waterproofing issue and the best time to visit..."
          className={`${inputCls} resize-none`}
        />
      </div>

      {status === 'error' && (
        <p className="text-xs text-red-600">{errorMsg || 'Something went wrong. Please try again.'}</p>
      )}

      <div className="pt-1">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="inline-flex min-h-[48px] w-full items-center justify-center rounded-xl bg-[#165FA8] px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.13em] text-white shadow-[0_10px_26px_-16px_rgba(22,95,168,0.6)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#1a6cbf] hover:shadow-[0_16px_32px_-16px_rgba(22,95,168,0.65)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'loading' ? 'Sending…' : 'Request Free Inspection'}
        </button>
        <p className="mt-3 text-xs text-navy/52">We respond within 24 hours with a free inspection estimate.</p>
      </div>
    </form>
  )
}
