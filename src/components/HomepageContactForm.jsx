'use client'

import { siteConfig } from '../siteConfig'
import { servicesPreviewItems } from '../content/siteContent'

export default function HomepageContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const name = formData.get('name')
    const phone = formData.get('phone')
    const location = formData.get('location')
    const service = formData.get('service')
    const message = formData.get('message')

    // Create mailto link with encoded data
    const mailtoLink = `mailto:${siteConfig.email}?subject=Waterproofing%20Enquiry%20-%20${encodeURIComponent(name)}&body=Name:%20${encodeURIComponent(name)}%0APhone:%20${encodeURIComponent(phone)}%0ALocation:%20${encodeURIComponent(location)}%0AService:%20${encodeURIComponent(service)}%0A%0AMessage:%0A${encodeURIComponent(message)}`
    window.location.href = mailtoLink
  }

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
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="homepage-name" className="block text-xs font-semibold uppercase tracking-[0.08em] text-navy/80 mb-2">
                  Name *
                </label>
                <input
                  id="homepage-name"
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full rounded-xl border border-navy/12 bg-white px-4 py-3 text-sm text-navy placeholder:text-navy/40 focus:border-blue focus:ring-2 focus:ring-blue/20 outline-none transition"
                />
              </div>
              <div>
                <label htmlFor="homepage-phone" className="block text-xs font-semibold uppercase tracking-[0.08em] text-navy/80 mb-2">
                  Phone *
                </label>
                <input
                  id="homepage-phone"
                  type="tel"
                  name="phone"
                  required
                  placeholder="Your phone number"
                  className="w-full rounded-xl border border-navy/12 bg-white px-4 py-3 text-sm text-navy placeholder:text-navy/40 focus:border-blue focus:ring-2 focus:ring-blue/20 outline-none transition"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="homepage-location" className="block text-xs font-semibold uppercase tracking-[0.08em] text-navy/80 mb-2">
                  Location in Dublin *
                </label>
                <input
                  id="homepage-location"
                  type="text"
                  name="location"
                  required
                  placeholder="e.g. Rathmines, South Dublin"
                  className="w-full rounded-xl border border-navy/12 bg-white px-4 py-3 text-sm text-navy placeholder:text-navy/40 focus:border-blue focus:ring-2 focus:ring-blue/20 outline-none transition"
                />
              </div>
              <div>
                <label htmlFor="homepage-service" className="block text-xs font-semibold uppercase tracking-[0.08em] text-navy/80 mb-2">
                  Service Needed *
                </label>
                <select
                  id="homepage-service"
                  name="service"
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-navy/12 bg-white px-4 py-3 text-sm text-navy focus:border-blue focus:ring-2 focus:ring-blue/20 outline-none transition"
                >
                  <option value="">Select a service</option>
                  {servicesPreviewItems.map((service) => (
                    <option key={service.title} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="homepage-message" className="block text-xs font-semibold uppercase tracking-[0.08em] text-navy/80 mb-2">
                Project Details & Photos *
              </label>
              <textarea
                id="homepage-message"
                name="message"
                required
                rows={4}
                placeholder="Describe your waterproofing issue, any previous repairs attempted, and the best time to visit..."
                className="w-full rounded-xl border border-navy/12 bg-white px-4 py-3 text-sm text-navy placeholder:text-navy/40 focus:border-blue focus:ring-2 focus:ring-blue/20 outline-none transition resize-none"
              />
              <p className="mt-2 text-xs text-navy/60">You can attach photos in a follow-up email after we respond.</p>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#6BB6F2] px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.12em] text-navy transition duration-300 hover:-translate-y-0.5 hover:bg-[#7CC0F5] hover:shadow-[0_14px_24px_-14px_rgba(53,99,143,0.45)]"
              >
                Send Enquiry
              </button>
              <p className="mt-3 text-xs text-navy/60">
                PrimeSeal will respond within 24 hours with a free inspection estimate.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
