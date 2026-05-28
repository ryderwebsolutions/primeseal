import Link from 'next/link'
import CTAInlineStrip from '../src/components/CTAInlineStrip'
import HeroBackgroundVideo from '../src/components/HeroBackgroundVideo'
import { PrimaryButton, SecondaryButton } from '../src/components/SiteButtons'
import {
  clientValuePoints,
  processSteps,
  projectItems,
  serviceAreas,
  servicesPreviewItems,
  siteConfig,
  trustBarItems,
  whyChooseItems,
} from '../src/content/siteContent'

export const metadata = {
  alternates: { canonical: '/' },
}

export default function Page() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': `${siteConfig.domain}/#business`,
        name: siteConfig.name,
        image: `${siteConfig.domain}/og-image.jpg`,
        url: siteConfig.domain,
        telephone: siteConfig.phone.replace(/\s+/g, ''),
        email: siteConfig.email,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Dublin',
          addressCountry: 'IE',
        },
        areaServed: serviceAreas,
        priceRange: '$$',
      },
      {
        '@type': 'Service',
        '@id': `${siteConfig.domain}/#service`,
        name: 'Waterproofing Services Dublin',
        provider: {
          '@id': `${siteConfig.domain}/#business`,
        },
        areaServed: serviceAreas,
        serviceType: servicesPreviewItems.map((service) => service.title),
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="relative isolate overflow-hidden pt-28 sm:pt-32">
        <HeroBackgroundVideo />

        <div className="container-shell relative grid gap-8 pb-16 sm:gap-9 lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:gap-10 lg:pb-20">
          <div>
            <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.16em] text-[#B7DFFF]">
              Roof • Balcony • Basement Waterproofing
            </p>

            <h1 className="font-display mt-5 max-w-[18ch] text-[2rem] font-bold uppercase leading-[1.04] text-white sm:text-5xl lg:text-[3.7rem]">
              Dublin Waterproofing Specialists
            </h1>

            <p className="mt-4 max-w-[44ch] text-base font-semibold leading-snug text-white sm:text-xl">
              Protecting roofs, balconies and properties from water damage across Dublin.
            </p>

            <p className="mt-6 max-w-[58ch] text-base leading-relaxed text-white/90 sm:text-lg">
              Reliable waterproofing solutions for flat roofs, balconies, basements, wet rooms, and commercial properties.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryButton href="/contact">Request Free Inspection</PrimaryButton>
              <SecondaryButton href={siteConfig.phoneHref} className="border-white/50 bg-white/95 text-navy hover:bg-white">Call Now</SecondaryButton>
              <SecondaryButton href={siteConfig.socials.whatsapp} className="border-white/50 bg-white/95 text-navy hover:bg-white">WhatsApp</SecondaryButton>
            </div>
          </div>

          <div className="rounded-2xl border border-white/16 bg-white/10 p-4 shadow-[0_12px_30px_-24px_rgba(11,31,58,0.38)] backdrop-blur-[7px] sm:p-5">
            <p className="text-[0.67rem] font-semibold uppercase tracking-[0.12em] text-[#B7DFFF]">Specialist Waterproofing Services</p>
            <ul className="mt-3 grid gap-y-2 text-sm leading-[1.35] text-white/90">
              {servicesPreviewItems.slice(0, 6).map((service) => (
                <li key={service.title} className="flex items-start gap-2">
                  <span className="mt-[0.42rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#9FD0F8]" />
                  <span>{service.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-navy/8 bg-white py-4 sm:py-5">
        <div className="container-shell">
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {trustBarItems.map((item) => (
              <p key={item} className="flex items-start gap-2 text-sm text-navy/78">
                <span className="mt-[2px] text-blue">✓</span>
                <span>{item}</span>
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-white">
        <div className="container-shell">
          <div className="max-w-4xl">
            <p className="label-text">Services Preview</p>
            <h2 className="section-title">Specialist Waterproofing Services Across Dublin</h2>
            <p className="mt-4 max-w-[62ch] text-base leading-relaxed text-navy/70 sm:text-lg">
              PrimeSeal provides targeted waterproofing systems for residential and commercial projects. Choose a service to see detailed guidance and local project context.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {servicesPreviewItems.map((item) => (
              <article key={item.title} className="rounded-2xl border border-navy/12 bg-mist p-5 sm:p-6">
                <h3 className="font-display text-xl font-semibold uppercase leading-tight text-navy">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy/72">{item.text}</p>
                <Link
                  href={item.href}
                  className="mt-5 inline-flex text-xs font-semibold uppercase tracking-[0.14em] text-blue transition hover:text-navy"
                >
                  Learn More
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <PrimaryButton href="/services">View All Services</PrimaryButton>
            <SecondaryButton href="/contact">Book Free Inspection</SecondaryButton>
          </div>
        </div>
      </section>

      <section className="section-shell bg-mist">
        <div className="container-shell grid gap-8 lg:grid-cols-2">
          <div>
            <p className="label-text">Why Choose PrimeSeal</p>
            <h2 className="section-title">Built for Long-Term Leak Prevention</h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {whyChooseItems.slice(0, 6).map((item) => (
              <div key={item} className="rounded-xl border border-navy/12 bg-white px-4 py-4">
                <p className="flex items-start gap-2 text-sm leading-relaxed text-navy/78 sm:text-base">
                  <span className="mt-[2px] text-blue">✓</span>
                  <span>{item}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-white">
        <div className="container-shell">
          <div className="max-w-4xl">
            <p className="label-text">Our Process</p>
            <h2 className="section-title">A Clear Waterproofing Process From Inspection to Completion</h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {processSteps.map((step, index) => (
              <article key={step} className="rounded-2xl border border-navy/12 bg-mist p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue">Step {index + 1}</p>
                <h3 className="mt-2 text-lg font-semibold text-navy">{step}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-mist">
        <div className="container-shell">
          <div className="max-w-4xl">
            <p className="label-text">Featured Projects</p>
            <h2 className="section-title">Real Waterproofing Results Across Dublin</h2>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {projectItems.map((item) => (
              <article key={`${item.title}-${item.location}`} className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-[0_14px_28px_-22px_rgba(11,31,58,0.35)]">
                <figure className="relative h-[260px] overflow-hidden bg-mist">
                  <img src={item.src} alt={`${item.title} waterproofing project in ${item.location}`} loading="lazy" decoding="async" className="h-full w-full object-cover" />
                </figure>
                <div className="space-y-2.5 px-4 py-5 sm:px-5">
                  <h3 className="text-lg font-semibold leading-tight text-navy">{item.title} - {item.location}</h3>
                  <p className="text-sm leading-relaxed text-navy/72">{item.result}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6">
            <PrimaryButton href="/projects">Explore Project Case Studies</PrimaryButton>
          </div>
        </div>
      </section>

      <section className="section-shell bg-white">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <div>
            <p className="label-text">Client Feedback / Trust</p>
            <h2 className="section-title">What Clients Value About Our Work</h2>
            <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-navy/72">
              PrimeSeal focuses on clear communication, clean workmanship and long-term waterproofing results for homes and commercial properties across Dublin.
            </p>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {clientValuePoints.slice(0, 5).map((point) => (
              <li key={point} className="rounded-xl border border-navy/12 bg-mist px-4 py-4 text-sm leading-relaxed text-navy/78 sm:text-base">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-shell bg-mist">
        <div className="container-shell max-w-6xl">
          <p className="label-text">Areas Covered</p>
          <h2 className="section-title">Fast Scheduling Across Dublin</h2>
          <div className="mt-7 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {serviceAreas.map((area) => (
              <span key={area} className="rounded-lg border border-navy/12 bg-white px-3 py-2 text-sm font-semibold text-navy/78">
                {area}
              </span>
            ))}
          </div>
          <div className="mt-6">
            <SecondaryButton href="/areas-covered">View Full Areas Covered</SecondaryButton>
          </div>
        </div>
      </section>

      <section className="section-shell bg-white">
        <div className="container-shell">
          <div className="rounded-2xl border border-navy/12 bg-mist p-6 sm:p-8 lg:p-10">
            <p className="label-text">Free Inspection</p>
            <h2 className="section-title max-w-[20ch]">Book Your Free Waterproofing Assessment</h2>
            <p className="mt-4 max-w-[64ch] text-base leading-relaxed text-navy/72 sm:text-lg">
              Have a specific question or prefer to speak directly? Contact PrimeSeal by phone, WhatsApp, or email and we'll schedule your free inspection.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <PrimaryButton href="/contact">View Contact Page</PrimaryButton>
              <SecondaryButton href={siteConfig.phoneHref}>Call: {siteConfig.phone}</SecondaryButton>
            </div>
          </div>

          <CTAInlineStrip />
        </div>
      </section>
    </>
  )
}
