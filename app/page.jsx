import CTAInlineStrip from '../src/components/CTAInlineStrip'
import HeroBackgroundVideo from '../src/components/HeroBackgroundVideo'
import { PrimaryButton, SecondaryButton } from '../src/components/SiteButtons'
import {
  heroServices,
  projectItems,
  serviceAreas,
  serviceGroups,
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
        image: `${siteConfig.domain}/opengraph-image`,
        url: siteConfig.domain,
        telephone: siteConfig.phone.replace(/\s+/g, ''),
        email: siteConfig.email,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Dublin',
          addressCountry: 'IE',
        },
        areaServed: siteConfig.areaServed,
        priceRange: '$$',
      },
      {
        '@type': 'Service',
        '@id': `${siteConfig.domain}/#service`,
        name: 'Premium Waterproofing Services',
        provider: {
          '@id': `${siteConfig.domain}/#business`,
        },
        areaServed: siteConfig.areaServed,
        serviceType: [
          'Roof Waterproofing',
          'Balcony Waterproofing',
          'Basement Waterproofing',
          'Commercial Waterproofing',
        ],
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

            <p className="mt-4 max-w-[40ch] text-base font-semibold leading-snug text-white sm:text-xl">
              Protecting Roofs, Balconies and Properties From Water Damage
            </p>

            <p className="mt-6 max-w-[58ch] text-base leading-relaxed text-white/90 sm:text-lg">
              Reliable waterproofing solutions for flat roofs, balconies, basements, wet rooms, and commercial properties across Dublin.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryButton href="/contact">Request Free Inspection</PrimaryButton>
              <SecondaryButton href={siteConfig.phoneHref} className="border-white/50 bg-white/95 text-navy hover:bg-white">Call Now</SecondaryButton>
            </div>
          </div>

          <div className="rounded-2xl border border-white/16 bg-white/10 p-4 shadow-[0_12px_30px_-24px_rgba(11,31,58,0.38)] backdrop-blur-[7px] sm:p-5">
            <p className="text-[0.67rem] font-semibold uppercase tracking-[0.12em] text-[#B7DFFF]">Specialist Waterproofing Services</p>
            <ul className="mt-3 grid gap-y-2 text-sm leading-[1.35] text-white/90">
              {heroServices.map((service) => (
                <li key={service} className="flex items-start gap-2">
                  <span className="mt-[0.42rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#9FD0F8]" />
                  <span>{service}</span>
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
            <p className="label-text">Core Services</p>
            <h2 className="section-title">Protect Your Property Before Small Leaks Become Big Damage</h2>
            <p className="mt-4 max-w-[62ch] text-base leading-relaxed text-navy/70 sm:text-lg">
              We install and repair high-performance waterproofing systems for homes and commercial buildings, specified for long-term durability rather than short-term patching.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {serviceGroups.map((group) => (
              <article key={group.heading} className="rounded-2xl border border-navy/12 bg-mist p-6 sm:p-7">
                <h3 className="font-display text-2xl font-semibold uppercase leading-tight text-navy">{group.heading}</h3>
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

          <div className="mt-6 flex flex-wrap gap-3">
            <PrimaryButton href="/services">View All Services</PrimaryButton>
            <SecondaryButton href="/contact">Speak to PrimeSeal</SecondaryButton>
          </div>
        </div>
      </section>

      <section className="section-shell bg-mist">
        <div className="container-shell">
          <div className="max-w-4xl">
            <p className="label-text">Recent Work</p>
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

          <div className="mt-6 flex flex-wrap gap-3">
            <PrimaryButton href="/projects">Explore Project Gallery</PrimaryButton>
            <SecondaryButton href="/reviews">See Client Reputation</SecondaryButton>
          </div>
        </div>
      </section>

      <section className="section-shell bg-white">
        <div className="container-shell grid gap-8 lg:grid-cols-2">
          <div>
            <p className="label-text">Why PrimeSeal</p>
            <h2 className="section-title">Premium Workmanship With Practical Communication</h2>
            <p className="mt-4 max-w-[62ch] text-base leading-relaxed text-navy/72 sm:text-lg">
              We make waterproofing decisions around substrate condition, drainage detail, and long-term performance so your repairs stay resolved.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <PrimaryButton href="/about">Why Clients Choose Us</PrimaryButton>
              <SecondaryButton href="/areas-covered">Areas Covered</SecondaryButton>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {whyChooseItems.slice(0, 6).map((item) => (
              <div key={item} className="rounded-xl border border-navy/12 bg-mist px-4 py-4">
                <p className="flex items-start gap-2 text-sm leading-relaxed text-navy/78 sm:text-base">
                  <span className="mt-[2px] text-blue">✓</span>
                  <span>{item}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-mist">
        <div className="container-shell max-w-5xl">
          <p className="label-text">Areas Covered</p>
          <h2 className="section-title">Fast Scheduling Across Dublin</h2>
          <div className="mt-7 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {serviceAreas.map((area) => (
              <span key={area} className="rounded-lg border border-navy/12 bg-white px-3 py-2 text-sm font-semibold text-navy/78">
                {area}
              </span>
            ))}
          </div>
        </div>

        <div className="container-shell">
          <CTAInlineStrip />
        </div>
      </section>
    </>
  )
}
