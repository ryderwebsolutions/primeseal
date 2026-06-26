import PageHero from '../../src/components/PageHero'
import { PrimaryButton, SecondaryButton } from '../../src/components/SiteButtons'
import { siteConfig } from '../../src/content/siteContent'

export const metadata = {
  title: 'Flooring Services Dublin | Laminate, LVT & Engineered Timber',
  description:
    'Professional flooring installation across Dublin. PrimeSeal installs laminate, engineered timber, vinyl, and LVT flooring, with expert floor preparation, levelling, and screeding for domestic and commercial properties.',
  keywords: [
    'flooring Dublin',
    'floor installation Dublin',
    'LVT flooring Dublin',
    'laminate flooring Dublin',
    'engineered wood flooring Dublin',
    'vinyl flooring Dublin',
    'floor levelling Dublin',
    'screeding Dublin',
    'commercial flooring Dublin',
    'floor repairs Dublin',
  ],
  alternates: { canonical: '/flooring-dublin' },
}

const flooringServices = [
  { title: 'Floor Preparation', desc: 'Substrate assessed, defects addressed, and the correct base created before any flooring is laid.' },
  { title: 'Floor Levelling', desc: 'Self-levelling compounds applied where required to achieve a flat, stable sub-floor.' },
  { title: 'Screeding', desc: 'Sand/cement or liquid screed for new builds, refurbishments, and underfloor heating systems.' },
  { title: 'Laminate Flooring', desc: 'Durable laminate installed with correct underlay, expansion joints, and trims.' },
  { title: 'Engineered Timber', desc: 'Real wood tops with improved stability — suitable over underfloor heating.' },
  { title: 'Vinyl Flooring', desc: 'Practical, water-resistant sheet vinyl for kitchens, bathrooms, and high-traffic areas.' },
  { title: 'Luxury Vinyl Tile (LVT)', desc: 'Waterproof, stone or timber-look LVT for areas where durability and finish both matter.' },
  { title: 'Commercial Flooring', desc: 'Heavy-duty systems for retail, office, and hospitality — installed around business hours.' },
  { title: 'Domestic Flooring', desc: 'Full home installations from single rooms to whole-house flooring replacements.' },
  { title: 'Floor Repairs', desc: 'Lifting boards, cracked tiles, and damaged vinyl repaired at the root cause.' },
  { title: 'Floor Finishing', desc: 'Timber floor sanding, sealing, and lacquering for a clean, long-lasting result.' },
]

const domesticItems = [
  'Laminate and LVT for kitchens and hallways',
  'Engineered timber for living rooms and bedrooms',
  'Vinyl for wet areas and bathrooms',
  'Floor levelling ahead of tile installation',
  'Screed for underfloor heating systems',
  'Timber floor repairs and refinishing',
]

const commercialItems = [
  'Heavy-duty LVT and safety vinyl',
  'Large-area screeding and floor levelling',
  'After-hours and weekend installation',
  'Floor repairs and maintenance works',
  'Specification for high-traffic environments',
]

const flooringFaqs = [
  {
    question: 'What flooring types do you install?',
    answer: 'Laminate, engineered timber, vinyl sheet, luxury vinyl tile (LVT), and safety flooring. We also carry out floor preparation, levelling, and screeding.',
  },
  {
    question: 'Do you provide floor levelling before installation?',
    answer: 'Yes. We apply self-levelling compounds where required to create a flat, stable sub-floor before any material goes down.',
  },
  {
    question: 'Do you work on commercial projects?',
    answer: 'Yes. We handle commercial flooring across Dublin and can work outside business hours to minimise disruption.',
  },
  {
    question: 'Do you supply materials?',
    answer: 'We can supply and install, or install client-supplied materials. We advise on product selection to match the sub-floor and intended use.',
  },
]

export default function FlooringDublinPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Flooring Services Dublin',
    provider: {
      '@type': 'LocalBusiness',
      name: siteConfig.name,
      telephone: siteConfig.phone,
      url: siteConfig.domain,
    },
    areaServed: 'Dublin, Ireland',
    description:
      'Professional flooring installation in Dublin — laminate, engineered timber, vinyl, LVT, screeding, and floor preparation for domestic and commercial properties.',
    serviceType: flooringServices.map((s) => s.title),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <PageHero
        label="Flooring Services Dublin"
        title="Professional Flooring Installation in Dublin"
        summary="PrimeSeal provides flooring installation for domestic and commercial properties across Dublin — from floor preparation and levelling through to laminate, engineered timber, vinyl, and LVT."
      />

      {/* ── Services Grid ── */}
      <section className="section-shell bg-white">
        <div className="container-shell">
          <div className="max-w-3xl">
            <p className="label-text">What We Offer</p>
            <h2 className="section-title">Flooring Services in Dublin</h2>
            <p className="mt-4 max-w-[62ch] text-base leading-relaxed text-navy/68">
              Offered alongside our waterproofing works. The same attention to preparation and detail applies — correct sub-floor assessment before anything goes down.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {flooringServices.map((service) => (
              <article
                key={service.title}
                className="surface-card bg-mist/65 p-5"
              >
                <h3 className="font-display text-base font-semibold uppercase leading-tight text-navy">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/68">{service.desc}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryButton href="/contact">Request a Flooring Quote</PrimaryButton>
            <SecondaryButton href={siteConfig.phoneHref}>Call Now</SecondaryButton>
          </div>
        </div>
      </section>

      {/* ── Domestic / Commercial ── */}
      <section className="section-shell bg-mist">
        <div className="container-shell">
          <div className="max-w-3xl">
            <p className="label-text">Who We Work For</p>
            <h2 className="section-title">Domestic and Commercial Flooring</h2>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <article className="surface-card bg-white p-6 sm:p-7">
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-blue">Domestic</p>
              <h3 className="font-display mt-1.5 text-xl font-semibold uppercase leading-tight text-navy">Residential Flooring</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-navy/72">
                {domesticItems.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-[2px] shrink-0 text-blue">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="surface-card bg-white p-6 sm:p-7">
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-blue">Commercial</p>
              <h3 className="font-display mt-1.5 text-xl font-semibold uppercase leading-tight text-navy">Commercial Flooring</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-navy/72">
                {commercialItems.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-[2px] shrink-0 text-blue">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-shell bg-white">
        <div className="container-shell max-w-3xl">
          <p className="label-text">Common Questions</p>
          <h2 className="section-title">Flooring FAQs</h2>
          <div className="mt-8 space-y-3">
            {flooringFaqs.map((item) => (
              <div key={item.question} className="rounded-xl border border-navy/10 bg-mist/60 px-5 py-4">
                <p className="text-sm font-semibold text-navy">{item.question}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-navy/70">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0C1526] py-14 sm:py-20">
        <div className="container-shell text-center">
          <h2 className="font-display mx-auto max-w-[22ch] text-[2rem] font-semibold uppercase leading-[1.04] tracking-[0.02em] text-white sm:text-[2.45rem]">
            Need Professional Flooring in Dublin?
          </h2>
          <p className="mx-auto mt-4 max-w-[48ch] text-base leading-relaxed text-white/65">
            Contact PrimeSeal for a flooring quote. Domestic and commercial installation across Dublin.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <PrimaryButton href="/contact">Request a Flooring Quote</PrimaryButton>
            <a
              href={siteConfig.phoneHref}
              style={{ backgroundColor: '#0f2a4a', color: '#ffffff', border: '2px solid #ffffff', padding: '12px 20px', borderRadius: '6px', fontWeight: '600', fontSize: '14px', display: 'inline-flex', alignItems: 'center', whiteSpace: 'nowrap', textDecoration: 'none' }}
            >
              Call Us
            </a>
            <a
              href={siteConfig.socials.whatsapp}
              target="_blank"
              rel="noreferrer"
              style={{ backgroundColor: '#0f2a4a', color: '#ffffff', border: '2px solid #ffffff', padding: '12px 20px', borderRadius: '6px', fontWeight: '600', fontSize: '14px', display: 'inline-flex', alignItems: 'center', whiteSpace: 'nowrap', textDecoration: 'none' }}
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
