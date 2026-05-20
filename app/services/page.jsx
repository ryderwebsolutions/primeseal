import CTAInlineStrip from '../../src/components/CTAInlineStrip'
import PageHero from '../../src/components/PageHero'
import { serviceGroups } from '../../src/content/siteContent'

export const metadata = {
  title: 'Waterproofing Services Dublin',
  description:
    'Roof, balcony, basement, wet room, and commercial waterproofing services delivered by PrimeSeal Waterproofing across Dublin.',
  alternates: { canonical: '/services' },
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Our Services"
        title="Professional Waterproofing Services"
        summary="Stop recurring leaks before they cause structural damage. PrimeSeal provides practical, long-term waterproofing systems for homes, rentals, and commercial buildings across Dublin."
      />

      <section className="section-shell bg-white">
        <div className="container-shell">
          <div className="grid gap-5 md:grid-cols-2">
            {serviceGroups.map((group) => (
              <article key={group.heading} className="rounded-2xl border border-navy/12 bg-mist p-6 sm:p-7">
                <h2 className="font-display text-2xl font-semibold uppercase leading-tight text-navy">{group.heading}</h2>
                <ul className="mt-5 space-y-3">
                  {group.items.map((item) => (
                    <li key={item.title} className="rounded-xl border border-navy/10 bg-white px-4 py-3">
                      <p className="text-sm font-semibold text-navy sm:text-base">{item.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-navy/72">{item.text}</p>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <CTAInlineStrip />
        </div>
      </section>
    </>
  )
}
