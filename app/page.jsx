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

      <section className="relative isolate overflow-hidden pt-24 sm:pt-28">
        <HeroBackgroundVideo />

        <div className="container-shell relative grid gap-8 pb-14 sm:gap-9 sm:pb-16 lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:gap-10 lg:pb-20">
          <div>
            <p className="inline-flex rounded-full border border-white/22 bg-white/10 px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#B7DFFF]">
              Roof • Balcony • Basement Waterproofing
            </p>

            <h1 className="font-display mt-5 max-w-[16ch] text-[2rem] font-bold uppercase leading-[1.03] text-white sm:text-5xl lg:text-[3.55rem]">
              Dublin Waterproofing Specialists
            </h1>

            <p className="mt-4 max-w-[45ch] text-base font-semibold leading-snug text-white sm:text-[1.35rem]">
              Protecting roofs, balconies and properties from water damage across Dublin.
            </p>

            <p className="mt-5 max-w-[58ch] text-base leading-relaxed text-white/88 sm:text-lg">
              Reliable waterproofing solutions for flat roofs, balconies, basements, wet rooms, and commercial properties.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <PrimaryButton href="/contact">Request Free Inspection</PrimaryButton>
              <SecondaryButton href={siteConfig.phoneHref} className="border-white/50 bg-white/94 text-navy hover:bg-white">Call Now</SecondaryButton>
              <SecondaryButton href={siteConfig.socials.whatsapp} className="border-white/50 bg-white/94 text-navy hover:bg-white">WhatsApp</SecondaryButton>
            </div>

            <div className="mt-7 grid max-w-2xl gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-white/20 bg-white/10 px-3 py-3 backdrop-blur-[2px]">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#b6dcfd]">Coverage</p>
                <p className="mt-1 text-sm font-semibold text-white">All Dublin Areas</p>
              </div>
              <div className="rounded-xl border border-white/20 bg-white/10 px-3 py-3 backdrop-blur-[2px]">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#b6dcfd]">Service Type</p>
                <p className="mt-1 text-sm font-semibold text-white">Residential + Commercial</p>
              </div>
              <div className="rounded-xl border border-white/20 bg-white/10 px-3 py-3 backdrop-blur-[2px]">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#b6dcfd]">Response</p>
                <p className="mt-1 text-sm font-semibold text-white">Fast Free Inspections</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/18 bg-white/12 p-5 shadow-[0_24px_38px_-28px_rgba(11,31,58,0.58)] backdrop-blur-[10px] sm:p-6">
            <p className="text-[0.67rem] font-semibold uppercase tracking-[0.14em] text-[#B7DFFF]">Specialist Waterproofing Services</p>
            <h2 className="mt-2 font-display text-2xl font-semibold uppercase leading-[1.06] text-white">Inspection-Led, Detail-Focused Work</h2>
            <ul className="mt-4 grid gap-y-2.5 text-sm leading-[1.35] text-white/92">
              {servicesPreviewItems.slice(0, 6).map((service) => (
                <li key={service.title} className="flex items-start gap-2">
                  <span className="mt-[0.42rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#9FD0F8]" />
                  <span>{service.title}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 rounded-xl border border-white/18 bg-[#071a30]/52 px-4 py-4 text-sm text-white/90">
              <p className="font-semibold text-white">Need urgent leak support?</p>
              <p className="mt-1 leading-relaxed text-white/82">Call or WhatsApp PrimeSeal for fast guidance and an inspection slot.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-navy/8 bg-white/95 py-4 sm:py-5">
        <div className="container-shell">
          <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {trustBarItems.map((item) => (
              <p key={item} className="flex items-start gap-2 rounded-lg border border-navy/10 bg-mist/45 px-3 py-2 text-sm text-navy/78">
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
              <article key={item.title} className="surface-card group p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_34px_-24px_rgba(11,31,58,0.52)] sm:p-6">
                <h3 className="font-display text-xl font-semibold uppercase leading-tight text-navy">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy/72">{item.text}</p>
                <Link
                  href={item.href}
                  className="mt-5 inline-flex text-xs font-semibold uppercase tracking-[0.14em] text-blue transition group-hover:text-navy"
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
              <div key={item} className="rounded-xl border border-navy/12 bg-white px-4 py-4 shadow-[0_8px_20px_-20px_rgba(11,31,58,0.45)]">
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
              <article key={step} className="surface-card p-5">
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

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {projectItems.map((item) => (
              <article key={`${item.title}-${item.location}`} className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-[0_18px_30px_-24px_rgba(11,31,58,0.44)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_38px_-24px_rgba(11,31,58,0.52)]">
                <figure className="relative h-[270px] overflow-hidden bg-mist">
                  <img src={item.src} alt={`${item.title} waterproofing project in ${item.location}`} loading="lazy" decoding="async" className="h-full w-full object-cover" />
                  <span className="absolute left-3 top-3 rounded-full border border-white/45 bg-white/90 px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-navy">
                    {item.location}
                  </span>
                </figure>
                <div className="space-y-2.5 px-4 py-5 sm:px-5">
                  <h3 className="text-lg font-semibold leading-tight text-navy">{item.title}</h3>
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
              <li key={point} className="rounded-xl border border-navy/12 bg-mist/55 px-4 py-4 text-sm leading-relaxed text-navy/78 sm:text-base">
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
              <span key={area} className="rounded-lg border border-navy/12 bg-white px-3 py-2 text-sm font-semibold text-navy/78 shadow-[0_8px_18px_-20px_rgba(11,31,58,0.45)]">
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
          <div className="rounded-2xl border border-navy/12 bg-mist p-6 shadow-[0_24px_34px_-30px_rgba(11,31,58,0.5)] sm:p-8 lg:p-10">
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
