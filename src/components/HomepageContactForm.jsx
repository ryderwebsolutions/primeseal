'use client'

import { useState } from 'react'
import { servicesPreviewItems } from '../content/siteContent'

export default function HomepageContactForm() {
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    const formData = new FormData(e.target)
    const payload = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      location: formData.get('location'),
      service: formData.get('service'),
      message: formData.get('message'),
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

  const fieldCls =
    'w-full rounded-xl border border-navy/12 bg-white px-4 py-3 text-sm text-navy placeholder:text-navy/40 focus:border-blue focus:ring-2 focus:ring-blue/20 outline-none transition'

  const labelCls = 'block text-xs font-semibold uppercase tracking-[0.08em] text-navy/80 mb-2'

  return (
    <section className="section-shell bg-white">
      <div className="container-shell">
        <div className="max-w-4xl">
          <p className="label-text">Get Started</p>
          <h2 className="section-title">Quick Waterproofing Enquiry</h2>
          <p className="mt-4 max-w-[62ch] text-base leading-relaxed text-navy/70 sm:text-lg">
            Share your waterproofing challenge and location. PrimeSeal will respond with a free inspection estimate and clear next steps.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-navy/12 bg-mist p-6 sm:p-8">
          {status === 'success' ? (
            <div className="rounded-xl border border-blue/25 bg-blue/8 px-6 py-10 text-center">
              <svg className="mx-auto mb-3 h-8 w-8 text-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20,6 9,17 4,12" />
              </svg>
              <p className="text-sm font-semibold text-navy">Enquiry sent — we'll be in touch within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="homepage-name" className={labelCls}>Name *</label>
                  <input id="homepage-name" type="text" name="name" required placeholder="Your name" className={fieldCls} />
                </div>
                <div>
                  <label htmlFor="homepage-phone" className={labelCls}>Phone *</label>
                  <input id="homepage-phone" type="tel" name="phone" required placeholder="Your phone number" className={fieldCls} />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="homepage-location" className={labelCls}>Location in Dublin *</label>
                  <input id="homepage-location" type="text" name="location" required placeholder="e.g. Rathmines, South Dublin" className={fieldCls} />
                </div>
                <div>
                  <label htmlFor="homepage-service" className={labelCls}>Service Needed *</label>
                  <select id="homepage-service" name="service" required defaultValue="" className={fieldCls}>
                    <option value="">Select a service</option>
                    {servicesPreviewItems.map((s) => (
                      <option key={s.title} value={s.title}>{s.title}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="homepage-message" className={labelCls}>Project Details & Photos *</label>
                <textarea
                  id="homepage-message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Describe your waterproofing issue, any previous repairs attempted, and the best time to visit..."
                  className={`${fieldCls} resize-none`}
                />
                <p className="mt-2 text-xs text-navy/60">You can attach photos in a follow-up email after we respond.</p>
              </div>

              {status === 'error' && (
                <p className="text-xs text-red-600">{errorMsg || 'Something went wrong. Please try again.'}</p>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#6BB6F2] px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.12em] text-navy transition duration-300 hover:-translate-y-0.5 hover:bg-[#7CC0F5] hover:shadow-[0_14px_24px_-14px_rgba(53,99,143,0.45)] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === 'loading' ? 'Sending…' : 'Send Enquiry'}
                </button>
                <p className="mt-3 text-xs text-navy/60">
                  PrimeSeal will respond within 24 hours with a free inspection estimate.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
