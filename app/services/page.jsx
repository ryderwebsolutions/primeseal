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
          <div className="grid gap-5 lg:grid-cols-2">
            <figure className="overflow-hidden rounded-2xl border border-navy/12 bg-mist shadow-[0_18px_30px_-24px_rgba(11,31,58,0.42)]">
              <img
                src="/media/images/project-04.jpeg"
                alt="Balcony waterproofing before and after transformation"
                loading="eager"
                decoding="async"
                className="h-full w-full object-cover"
              />
              <figcaption className="px-5 py-4 text-sm leading-relaxed text-navy/72">
                Balcony waterproofing detail work that helps prevent repeat leaks and protects exposed edges.
              </figcaption>
            </figure>

            <figure className="overflow-hidden rounded-2xl border border-navy/12 bg-mist shadow-[0_18px_30px_-24px_rgba(11,31,58,0.42)]">
              <img
                src="/media/images/project-11.jpeg"
                alt="Flat roof parapet waterproofing detail on a Dublin project"
                loading="eager"
                decoding="async"
                className="h-full w-full object-cover"
              />
              <figcaption className="px-5 py-4 text-sm leading-relaxed text-navy/72">
                Roof and parapet protection for exposed surfaces that need durable, weather-resistant detailing.
              </figcaption>
            </figure>
          </div>

          <div className="mt-10 max-w-4xl">
            <p className="label-text">What We Cover</p>
            <h2 className="section-title">Services Built Around Real Site Conditions</h2>
            <p className="mt-4 max-w-[64ch] text-base leading-relaxed text-navy/72 sm:text-lg">
              Each service page explains the issue, the waterproofing approach, and the type of property most often affected.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {servicesPreviewItems.map((item) => (
              <article key={item.title} className="surface-card bg-mist/65 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_34px_-24px_rgba(11,31,58,0.52)]">
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
