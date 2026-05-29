'use client'

import { servicesPreviewItems } from '../content/siteContent'
import { siteConfig } from '../siteConfig'

export default function QuoteForm() {
  function handleSubmit(e) {
    e.preventDefault()
    const d = new FormData(e.target)
    const name = d.get('name')
    const phone = d.get('phone')
    const location = d.get('location')
    const service = d.get('service')
    const message = d.get('message')
    const link = `mailto:${siteConfig.email}?subject=Waterproofing%20Enquiry%20-%20${encodeURIComponent(name)}&body=Name:%20${encodeURIComponent(name)}%0APhone:%20${encodeURIComponent(phone)}%0ALocation:%20${encodeURIComponent(location)}%0AService:%20${encodeURIComponent(service)}%0A%0AMessage:%0A${encodeURIComponent(message)}`
    window.location.href = link
  }

  const inputCls =
    'w-full rounded-xl border border-navy/12 bg-mist/55 px-4 py-3 text-sm text-navy placeholder:text-navy/38 outline-none transition duration-200 focus:border-blue focus:bg-white focus:ring-2 focus:ring-blue/18'

  const labelCls = 'mb-1.5 block text-[0.66rem] font-semibold uppercase tracking-[0.1em] text-navy/65'

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

      <div className="pt-1">
        <button
          type="submit"
          className="inline-flex min-h-[48px] w-full items-center justify-center rounded-xl bg-[#165FA8] px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.13em] text-white shadow-[0_10px_26px_-16px_rgba(22,95,168,0.6)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#1a6cbf] hover:shadow-[0_16px_32px_-16px_rgba(22,95,168,0.65)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue/40 focus-visible:ring-offset-2"
        >
          Request Free Inspection
        </button>
        <p className="mt-3 text-xs text-navy/52">We respond within 24 hours with a free inspection estimate.</p>
      </div>
    </form>
  )
}
