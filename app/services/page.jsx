import CTAInlineStrip from '../../src/components/CTAInlineStrip'
import Link from 'next/link'
import PageHero from '../../src/components/PageHero'
import { servicesPreviewItems } from '../../src/content/siteContent'

export const metadata = {
  title: 'Waterproofing Services Dublin',
  description:
    'Explore PrimeSeal waterproofing services in Dublin, including roof, balcony, basement, wet room, flat roof, leak repair, and commercial waterproofing.',
  alternates: { canonical: '/services' },
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        title="Specialist Waterproofing Services in Dublin"
        summary="Choose a dedicated service page to learn about common waterproofing failures, system options, and PrimeSeal's inspection-led approach."
      />

      <section className="section-shell bg-white">
        <div className="container-shell">
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {servicesPreviewItems.map((item) => (
              <article key={item.title} className="rounded-2xl border border-navy/12 bg-mist p-6">
                <h2 className="font-display text-2xl font-semibold uppercase leading-tight text-navy">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-navy/72 sm:text-base">{item.text}</p>
                <Link
                  href={item.href}
                  className="mt-5 inline-flex text-xs font-semibold uppercase tracking-[0.14em] text-blue transition hover:text-navy"
                >
                  Learn More
                </Link>
              </article>
            ))}
          </div>

          <CTAInlineStrip />
        </div>
      </section>
    </>
  )
}
