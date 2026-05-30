import Link from 'next/link'
import FaqAccordion from '../src/components/FaqAccordion'
import HeroBackgroundVideo from '../src/components/HeroBackgroundVideo'
import ProjectCarousel from '../src/components/ProjectCarousel'
import { PrimaryButton, SecondaryButton } from '../src/components/SiteButtons'
import SystemsTabs from '../src/components/SystemsTabs'
import QuoteForm from '../src/components/QuoteForm'
import {
  faqItems,
  insightCards,
  processStepsEnhanced,
  serviceAreas,
  servicesPreviewItems,
  siteConfig,
  trustBarItems,
  waterproofingSystems,
} from '../src/content/siteContent'

export const metadata = {
  alternates: { canonical: '/' },
}

const serviceStripItems = [
  {
    label: 'Roof Waterproofing',
    href: '/roof-waterproofing-dublin',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9,22 9,12 15,12 15,22" />
      </svg>
    ),
  },
  {
    label: 'Balcony Waterproofing',
    href: '/balcony-waterproofing-dublin',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="13" width="20" height="2" rx="1" />
        <line x1="5" y1="15" x2="5" y2="21" />
        <line x1="19" y1="15" x2="19" y2="21" />
        <line x1="8" y1="15" x2="8" y2="19" />
        <line x1="12" y1="15" x2="12" y2="19" />
        <line x1="16" y1="15" x2="16" y2="19" />
        <line x1="2" y1="21" x2="22" y2="21" />
      </svg>
    ),
  },
  {
    label: 'Basement Tanking',
    href: '/basement-waterproofing-dublin',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="6,9 12,15 18,9" />
        <rect x="3" y="3" width="18" height="6" rx="1" />
        <rect x="3" y="15" width="18" height="6" rx="1" />
      </svg>
    ),
  },
  {
    label: 'Wet Room Waterproofing',
    href: '/wet-room-waterproofing-dublin',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
      </svg>
    ),
  },
  {
    label: 'Long-Term Protection',
    href: '/contact',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
]

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
        provider: { '@id': `${siteConfig.domain}/#business` },
        areaServed: serviceAreas,
        serviceType: servicesPreviewItems.map((s) => s.title),
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* ── 1. HERO ── */}
      <section className="relative isolate min-h-[600px] overflow-hidden pt-36 sm:min-h-[680px] sm:pt-[10rem] lg:min-h-[740px]">
        <HeroBackgroundVideo />
        <div className="container-shell relative pb-16 sm:pb-20 lg:pb-28">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/22 bg-white/10 px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#B7DFFF] backdrop-blur-sm">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#6BB6F2]" />
              Dublin Waterproofing Specialists
            </p>

            <h1 className="font-display mt-5 text-[2.5rem] font-bold uppercase leading-[1.01] text-white sm:text-5xl lg:text-[3.75rem]">
              Protecting Dublin Properties With Professional Waterproofing
            </h1>

            <p className="mt-5 max-w-[54ch] text-lg leading-relaxed text-white/82 sm:text-xl">
              Reliable waterproofing for flat roofs, balconies, basements, wet rooms, and commercial properties across Dublin.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryButton href="/contact">Request Free Inspection</PrimaryButton>
              <a
                href={siteConfig.phoneHref}
                className="inline-flex min-h-[50px] w-full items-center justify-center gap-2 rounded-xl border border-white/35 bg-white/12 px-6 py-3 text-center text-[0.72rem] font-semibold uppercase tracking-[0.13em] text-white backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:bg-white/20 hover:border-white/55 sm:w-auto"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                Call Us
              </a>
              <a
                href={siteConfig.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[50px] w-full items-center justify-center gap-2 rounded-xl border border-white/35 bg-white/12 px-6 py-3 text-center text-[0.72rem] font-semibold uppercase tracking-[0.13em] text-white backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:bg-white/20 hover:border-white/55 sm:w-auto"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.121.554 4.11 1.523 5.836L0 24l6.336-1.498A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.373l-.36-.214-3.727.88.934-3.617-.235-.373A9.77 9.77 0 012.182 12C2.182 6.578 6.578 2.182 12 2.182S21.818 6.578 21.818 12 17.422 21.818 12 21.818z" />
                </svg>
                WhatsApp
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              {['All Dublin Areas', 'Residential & Commercial', 'Free Inspections'].map((tag) => (
                <div key={tag} className="flex items-center gap-1.5 rounded-xl border border-white/18 bg-white/10 px-3 py-2 backdrop-blur-sm">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#9FD0F8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20,6 9,17 4,12" />
                  </svg>
                  <span className="text-xs font-semibold text-white/88">{tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. SERVICE STRIP ── */}
      <section className="bg-[#165FA8] py-4">
        <div className="container-shell">
          <div className="scrollbar-hide flex items-center gap-y-1 overflow-x-auto pb-0.5 sm:flex-wrap sm:justify-center sm:overflow-visible sm:pb-0">
            {serviceStripItems.map((item, i) => (
              <div key={item.label} className="flex shrink-0 items-center">
                {i > 0 && (
                  <span className="mx-1 hidden text-white/20 sm:inline" aria-hidden="true">|</span>
                )}
                <Link
                  href={item.href}
                  className="group flex items-center gap-2 rounded-lg px-3 py-1.5 text-white transition duration-300 hover:bg-white/10"
                >
                  <span className="text-white/70 transition duration-300 group-hover:text-white" aria-hidden="true">
                    {item.icon}
                  </span>
                  <span className="whitespace-nowrap text-[0.7rem] font-semibold uppercase tracking-[0.11em]">
                    {item.label}
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. SERVICES (image-led cards) ── */}
      <section className="section-shell bg-white">
        <div className="container-shell">
          <div className="max-w-4xl">
            <p className="label-text">Our Services</p>
            <h2 className="section-title">Reliable Waterproofing Solutions for Long-Term Protection</h2>
            <p className="mt-4 max-w-[66ch] text-base leading-relaxed text-navy/68 sm:text-lg">
              From flat roofs and balconies to basements and wet rooms, PrimeSeal provides practical waterproofing systems designed to stop water ingress and protect your property for the long term.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {servicesPreviewItems.slice(0, 6).map((item) => (
              <article
                key={item.title}
                className="group relative h-[265px] cursor-pointer overflow-hidden rounded-2xl"
              >
                <img
                  src={item.image}
                  alt={`${item.title} Dublin`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.07]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071223]/90 via-[#071223]/32 to-transparent transition duration-400 group-hover:from-[#071223]/95 group-hover:via-[#071223]/52" />
                <div className="absolute bottom-0 left-0 right-0 p-5 transition duration-300 group-hover:translate-y-0">
                  <h3 className="font-display text-lg font-bold uppercase leading-tight text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-white/70">{item.text}</p>
                  <Link
                    href={item.href}
                    className="mt-3 inline-flex items-center gap-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.11em] text-[#9FD0F8] transition duration-300 group-hover:gap-2.5 group-hover:text-white"
                  >
                    Learn More
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryButton href="/services">View All Services</PrimaryButton>
            <SecondaryButton href="/contact">Book Free Inspection</SecondaryButton>
          </div>
        </div>
      </section>

      {/* ── 4. WATERPROOFING SYSTEMS (dark tabbed) ── */}
      <section className="section-shell bg-[#0C1526]">
        <div className="container-shell">
          <p className="inline-flex rounded-full border border-white/16 bg-white/7 px-3.5 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#9FD0F8]">
            Our Waterproofing Systems
          </p>
          <h2 className="font-display mt-4 text-[2rem] font-semibold uppercase leading-[1.04] tracking-[0.02em] text-white sm:text-[2.45rem] lg:text-[3.05rem]">
            Types of Waterproofing Systems We Use
          </h2>
          <p className="mt-4 max-w-[62ch] text-base leading-relaxed text-white/60">
            Every waterproofing project starts with correct system selection. PrimeSeal specifies and applies the appropriate system based on substrate condition, exposure, and long-term performance requirements.
          </p>
          <div className="mt-12">
            <SystemsTabs systems={waterproofingSystems} />
          </div>
        </div>
      </section>

      {/* ── 5. PROCESS ── */}
      <section className="section-shell bg-white">
        <div className="container-shell">
          <p className="label-text">Our Process</p>
          <h2 className="section-title">Waterproofing Done Right — Built To Last</h2>
          <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-navy/68">
            Every PrimeSeal project follows a structured approach — from inspection and substrate preparation through to final checks and handover.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {processStepsEnhanced.map((step) => (
              <div
                key={step.step}
                className="group rounded-2xl border border-navy/10 bg-white p-6 shadow-[0_14px_34px_-28px_rgba(11,31,58,0.38)] transition duration-300 hover:-translate-y-1 hover:border-blue/22 hover:shadow-[0_24px_42px_-28px_rgba(22,95,168,0.28)]"
              >
                <p className="font-display text-5xl font-bold text-[#165FA8]/16 transition duration-300 group-hover:text-[#165FA8]/28">
                  {step.step}
                </p>
                <h3 className="mt-3 text-base font-semibold text-navy sm:text-lg">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/60">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. PROJECT PORTFOLIO ── */}
      <section className="section-shell bg-[#0C1526]">
        <div className="container-shell">
          <p className="inline-flex rounded-full border border-white/16 bg-white/7 px-3.5 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#9FD0F8]">
            Project Portfolio
          </p>
          <h2 className="font-display mt-4 text-[2rem] font-semibold uppercase leading-[1.04] tracking-[0.02em] text-white sm:text-[2.45rem] lg:text-[3.05rem]">
            Discover Our Project Portfolio
          </h2>
          <p className="mt-4 max-w-[58ch] text-base leading-relaxed text-white/60">
            Real waterproofing results from across Dublin — roofs, balconies, basements, and commercial properties.
          </p>

          <div className="mt-10">
            <ProjectCarousel />
          </div>

          <div className="mt-8 flex justify-center">
            <PrimaryButton href="/projects">View All Projects</PrimaryButton>
          </div>
        </div>
      </section>

      {/* ── 7. STATS + QUOTE FORM ── */}
      <section className="section-shell bg-mist">
        <div className="container-shell grid gap-12 lg:grid-cols-[1fr_1.12fr] lg:items-start">
          <div>
            <p className="label-text">Need Waterproofing?</p>
            <h2 className="section-title">Let's Talk About Your Project</h2>
            <p className="mt-4 max-w-[54ch] text-base leading-relaxed text-navy/70">
              PrimeSeal offers free site inspections and written quotes for all waterproofing works across Dublin. Call, WhatsApp, or fill in the form to get started.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {trustBarItems.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2.5 rounded-xl border border-navy/10 bg-white px-4 py-3.5 shadow-[0_8px_20px_-20px_rgba(11,31,58,0.38)]"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#165FA8"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-[2px] shrink-0"
                    aria-hidden="true"
                  >
                    <polyline points="20,6 9,17 4,12" />
                  </svg>
                  <span className="text-sm font-medium text-navy/78">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <SecondaryButton href={siteConfig.phoneHref}>Call: {siteConfig.phone}</SecondaryButton>
              <SecondaryButton href={siteConfig.socials.whatsapp}>WhatsApp</SecondaryButton>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-[0_24px_48px_-28px_rgba(11,31,58,0.35)] sm:p-8">
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-blue">Free Inspection</p>
            <h3 className="font-display mt-2 text-2xl font-semibold uppercase leading-tight text-navy">
              Request Your Free Waterproofing Inspection
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-navy/62">
              Fill in your details and we'll be in touch within 24 hours.
            </p>
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* ── 8. FAQ ── */}
      <section className="section-shell bg-white">
        <div className="container-shell grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="label-text">Common Questions</p>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="mt-4 text-base leading-relaxed text-navy/68">
              Straight answers to common waterproofing questions from Dublin homeowners and property managers.
            </p>
            <div className="mt-8 overflow-hidden rounded-2xl">
              <img
                src="/media/images/project-03.jpeg"
                alt="PrimeSeal waterproofing project"
                loading="lazy"
                decoding="async"
                className="h-[300px] w-full object-cover sm:h-[380px]"
              />
            </div>
            <div className="mt-5 flex gap-3">
              <PrimaryButton href="/faq">View All FAQs</PrimaryButton>
              <SecondaryButton href="/contact">Ask a Question</SecondaryButton>
            </div>
          </div>
          <div className="lg:pt-4">
            <FaqAccordion items={faqItems.slice(0, 5)} />
          </div>
        </div>
      </section>

      {/* ── 9. INSIGHTS & ADVICE ── */}
      <section className="section-shell bg-mist">
        <div className="container-shell">
          <div className="max-w-3xl">
            <p className="label-text">Expert Advice</p>
            <h2 className="section-title">Waterproofing Insights & Expert Advice</h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {insightCards.map((card) => (
              <article
                key={card.title}
                className="group overflow-hidden rounded-2xl bg-white shadow-[0_14px_34px_-28px_rgba(11,31,58,0.38)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_44px_-28px_rgba(11,31,58,0.48)]"
              >
                <div className="relative h-[200px] overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.06]"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-[#165FA8] px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-white">
                    {card.category}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-navy/42">{card.date}</p>
                  <h3 className="mt-2 text-base font-semibold leading-snug text-navy">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/64">{card.summary}</p>
                  <Link
                    href="/contact"
                    className="mt-4 inline-flex items-center gap-1 text-[0.68rem] font-semibold uppercase tracking-[0.11em] text-blue transition duration-300 hover:gap-2 hover:text-navy"
                  >
                    Read More
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <SecondaryButton href="/contact">Get Expert Waterproofing Advice</SecondaryButton>
          </div>
        </div>
      </section>

      {/* ── 10. TRUST BADGE STRIP ── */}
      <section className="border-y border-navy/8 bg-white py-10">
        <div className="container-shell">
          <p className="mb-6 text-center text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-navy/42">
            Why Choose PrimeSeal
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {trustBarItems.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-full border border-navy/12 bg-mist/60 px-4 py-2 transition duration-200 hover:border-blue/28 hover:bg-[#EDF7FF]"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#165FA8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20,6 9,17 4,12" />
                </svg>
                <span className="text-xs font-semibold text-navy/76">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 11. AREAS COVERED ── */}
      <section className="section-shell bg-mist">
        <div className="container-shell max-w-6xl">
          <p className="label-text">Areas Covered</p>
          <h2 className="section-title">Fast Scheduling Across Dublin</h2>
          <div className="mt-7 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="flex items-center gap-2.5 rounded-lg border border-navy/12 bg-white px-3.5 py-2.5 text-sm font-semibold text-navy/76 shadow-[0_8px_18px_-20px_rgba(11,31,58,0.42)]"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#165FA8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {area}
              </span>
            ))}
          </div>
          <div className="mt-6">
            <SecondaryButton href="/areas-covered">View Full Areas Covered</SecondaryButton>
          </div>
        </div>
      </section>

      {/* ── 12. FINAL CTA ── */}
      <section className="bg-[#0C1526] py-16 sm:py-20 lg:py-24">
        <div className="container-shell text-center">
          <p className="inline-flex rounded-full border border-white/16 bg-white/7 px-3.5 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#9FD0F8]">
            Get Started Today
          </p>
          <h2 className="font-display mx-auto mt-4 max-w-[22ch] text-[2rem] font-semibold uppercase leading-[1.04] tracking-[0.02em] text-white sm:text-[2.45rem] lg:text-[3.05rem]">
            Need Waterproofing? Let's Protect Your Property
          </h2>
          <p className="mx-auto mt-5 max-w-[54ch] text-base leading-relaxed text-white/65">
            Free inspections, written quotes, and reliable waterproofing systems for Dublin homes and commercial properties.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <PrimaryButton href="/contact">Request Free Inspection</PrimaryButton>
            <SecondaryButton href={siteConfig.phoneHref} className="border-white/25 bg-white/8 text-white hover:bg-white/16 hover:border-white/40">
              Call: {siteConfig.phone}
            </SecondaryButton>
            <SecondaryButton href={siteConfig.socials.whatsapp} className="border-white/25 bg-white/8 text-white hover:bg-white/16 hover:border-white/40">
              WhatsApp
            </SecondaryButton>
          </div>
        </div>
      </section>
    </>
  )
}
