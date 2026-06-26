import CTAInlineStrip from '../../src/components/CTAInlineStrip'
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
  {
    title: 'Floor Preparation',
    desc: 'Every successful flooring installation starts with thorough substrate preparation. We assess existing floors, address defects, and create the correct base for the specified system — ensuring adhesion, stability, and long-term performance.',
  },
  {
    title: 'Floor Levelling',
    desc: 'Uneven or undulating floors are corrected using professional levelling compounds. Achieving a flat, stable sub-floor is critical before any flooring material is installed — particularly for rigid boards and tiles that will otherwise crack or lift.',
  },
  {
    title: 'Screeding',
    desc: 'Sand and cement or liquid screed applied to provide a smooth, consistent sub-floor finish. Used in new builds, refurbishments, and underfloor heating installations to create the correct base level and surface profile for the chosen flooring system.',
  },
  {
    title: 'Laminate Flooring',
    desc: 'Laminate floors offer a durable and cost-effective finish for kitchens, hallways, living rooms, and commercial spaces. Installed with correct underlays, expansion joints, and finishing trims for a clean, long-lasting result.',
  },
  {
    title: 'Engineered Timber Flooring',
    desc: 'Engineered wood flooring delivers the look and warmth of real timber with improved dimensional stability. Suitable for installation over underfloor heating and subfloor types where solid hardwood is not appropriate.',
  },
  {
    title: 'Vinyl Flooring',
    desc: 'Sheet vinyl and vinyl tile flooring provides a practical, water-resistant solution for kitchens, bathrooms, and high-traffic areas. Professionally installed with precise cutting, seaming, and perimeter finishing.',
  },
  {
    title: 'Luxury Vinyl Tile (LVT)',
    desc: 'LVT replicates the appearance of natural stone and timber with the practicality of a waterproof, resilient surface. Ideal for kitchens, bathrooms, hallways, and commercial environments where durability and design are both required.',
  },
  {
    title: 'Commercial Flooring',
    desc: 'Flooring solutions for retail, office, hospitality, and commercial premises where durability, safety ratings, and efficient installation are priorities. We work around business hours to minimise disruption on live sites.',
  },
  {
    title: 'Domestic Flooring',
    desc: 'Full residential flooring installations for entire homes, individual rooms, or targeted replacements. Kitchen, hallway, bedroom, and living room flooring assessed, specified, and installed to the correct standard.',
  },
  {
    title: 'Floor Repairs',
    desc: 'Lifting boards, cracked tiles, damaged vinyl, or uneven surfaces repaired and restored. We identify the root cause of flooring failure before applying the correct repair — preventing the same issue from recurring.',
  },
  {
    title: 'Floor Finishing',
    desc: 'Timber floor sanding, sealing, and lacquering to restore worn or damaged wood floors, or to complete a new engineered timber installation. A professional finish that extends the life of the floor and enhances its final appearance.',
  },
]

const prepSteps = [
  {
    title: 'Moisture Assessment',
    desc: 'Sub-floor moisture levels checked before any adhesive or timber-based flooring is installed — a critical step often skipped that causes early failure.',
  },
  {
    title: 'Level Survey',
    desc: 'Floor level tolerance measured to confirm suitability for rigid flooring types and identify areas requiring levelling compound before installation begins.',
  },
  {
    title: 'Substrate Repair',
    desc: 'Existing defects — hollow spots, cracks, loose fixings, contaminated surfaces — corrected before new flooring material is laid.',
  },
  {
    title: 'Correct Specification',
    desc: 'Flooring system and underlay specified to match the sub-floor type, room use, and expected foot traffic — avoiding mismatched products that fail prematurely.',
  },
]

const domesticItems = [
  'Laminate and LVT for kitchens and hallways',
  'Engineered timber for living rooms and bedrooms',
  'Vinyl and safety flooring for wet areas',
  'Floor levelling ahead of tile installation',
  'Screed for underfloor heating systems',
  'Timber floor repairs and refinishing',
]

const commercialItems = [
  'Heavy-duty LVT and safety vinyl',
  'Commercial laminate and sheet flooring',
  'Large-area screeding and floor levelling',
  'After-hours and weekend installation available',
  'Floor repairs and ongoing maintenance works',
  'Specification for high-traffic environments',
]

const flooringFaqs = [
  {
    question: 'What flooring types do you install?',
    answer:
      'PrimeSeal installs laminate, engineered timber, vinyl sheet, luxury vinyl tile (LVT), and safety flooring. We also carry out floor preparation, levelling, and screeding prior to tiling or other finishes.',
  },
  {
    question: 'Do you provide floor levelling before installation?',
    answer:
      'Yes. Floor levelling is a key part of the preparation process. We apply self-levelling compounds where required to create a flat, stable sub-floor before any flooring material is installed.',
  },
  {
    question: 'Can you screed for underfloor heating?',
    answer:
      'Yes. We carry out screeding works for underfloor heating installations, ensuring correct screed depth, mix, and curing time before any floor finish is applied.',
  },
  {
    question: 'Do you work on commercial flooring projects?',
    answer:
      'Yes. PrimeSeal handles commercial flooring for retail, office, and hospitality environments across Dublin. We can work outside business hours to minimise disruption where required.',
  },
  {
    question: 'Do you supply the flooring materials?',
    answer:
      'We can supply and install, or install materials supplied by the client. We advise on product selection to ensure the flooring system is matched to the sub-floor type, use, and expected traffic levels.',
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
    serviceType: [
      'Floor Preparation',
      'Floor Levelling',
      'Screeding',
      'Laminate Flooring',
      'Engineered Timber Flooring',
      'Vinyl Flooring',
      'Luxury Vinyl Tile (LVT)',
      'Commercial Flooring',
      'Domestic Flooring',
      'Floor Repairs',
      'Floor Finishing',
    ],
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
        summary="PrimeSeal provides professional flooring installation for domestic and commercial properties across Dublin — from floor preparation and levelling through to laminate, engineered timber, vinyl, and LVT installation."
      />

      {/* ── Intro + Services Grid ── */}
      <section className="section-shell bg-white">
        <div className="container-shell">
          <div className="max-w-4xl">
            <p className="label-text">What We Offer</p>
            <h2 className="section-title">Flooring Installation Services in Dublin</h2>
            <p className="mt-4 max-w-[66ch] text-base leading-relaxed text-navy/68 sm:text-lg">
              PrimeSeal offers professional flooring installation as an additional service alongside our waterproofing works. Whether you need floor preparation ahead of tiling, a complete laminate or LVT installation, or targeted floor repairs, we deliver the same standard of workmanship applied across all our projects.
            </p>
            <p className="mt-3 max-w-[66ch] text-base leading-relaxed text-navy/68 sm:text-lg">
              Correct floor preparation is the foundation of any flooring installation. Without proper levelling and substrate assessment, even premium flooring materials will fail prematurely. PrimeSeal brings the same detail-focused approach to flooring that we apply to waterproofing — getting the base right before anything goes down.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {flooringServices.map((service) => (
              <article
                key={service.title}
                className="surface-card bg-mist/65 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_34px_-24px_rgba(11,31,58,0.52)]"
              >
                <h3 className="font-display text-lg font-semibold uppercase leading-tight text-navy">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy/72">{service.desc}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryButton href="/contact">Request a Flooring Quote</PrimaryButton>
            <SecondaryButton href={siteConfig.phoneHref}>Call Now</SecondaryButton>
          </div>
        </div>
      </section>

      {/* ── Why Preparation Matters (dark) ── */}
      <section className="section-shell bg-[#0C1526]">
        <div className="container-shell grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-white/16 bg-white/7 px-3.5 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#9FD0F8]">
              Why It Matters
            </p>
            <h2 className="font-display mt-4 text-[2rem] font-semibold uppercase leading-[1.04] tracking-[0.02em] text-white sm:text-[2.45rem]">
              Why Proper Floor Preparation Is Critical
            </h2>
            <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-white/60">
              Poor sub-floor preparation is the leading cause of flooring failure. Uneven substrates cause boards to flex, crack, and lift. Moisture in the sub-floor causes adhesive failure and swelling in timber-based products. Skipping correct levelling results in costly remediation within months of installation.
            </p>
            <p className="mt-3 max-w-[60ch] text-base leading-relaxed text-white/60">
              PrimeSeal assesses the existing substrate before any flooring material is specified or installed. Moisture readings, level surveys, and structural checks are completed to confirm the base is suitable. Where issues are found, they are addressed before installation begins — not after.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {prepSteps.map((item) => (
              <div key={item.title} className="rounded-xl border border-white/12 bg-white/7 p-5">
                <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/58">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Commercial vs Domestic ── */}
      <section className="section-shell bg-mist">
        <div className="container-shell">
          <div className="max-w-4xl">
            <p className="label-text">Who We Work For</p>
            <h2 className="section-title">Domestic and Commercial Flooring in Dublin</h2>
            <p className="mt-4 max-w-[64ch] text-base leading-relaxed text-navy/70 sm:text-lg">
              PrimeSeal carries out flooring installation for private homeowners and commercial clients across Dublin, matching the correct system to the property type and intended use.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="surface-card bg-white p-6 sm:p-8">
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-blue">Domestic</p>
              <h3 className="font-display mt-2 text-2xl font-semibold uppercase leading-tight text-navy">
                Residential Flooring
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-navy/72 sm:text-base">
                Flooring installations for homeowners, landlords, and property renovations across Dublin. From single-room replacements to full-house flooring projects, each job is assessed and specified based on the room type, sub-floor condition, and client brief.
              </p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-navy/72">
                {domesticItems.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-[2px] shrink-0 text-blue">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="surface-card bg-white p-6 sm:p-8">
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-blue">Commercial</p>
              <h3 className="font-display mt-2 text-2xl font-semibold uppercase leading-tight text-navy">
                Commercial Flooring
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-navy/72 sm:text-base">
                Flooring for retail units, offices, hospitality venues, and commercial premises across Dublin. We work to specification and programme, minimising disruption to operations where required. Commercial flooring systems are selected for durability, slip resistance, and workplace compliance.
              </p>
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

      {/* ── Gallery placeholder (ready for client photos) ── */}
      <section className="section-shell bg-white">
        <div className="container-shell">
          <div className="max-w-4xl">
            <p className="label-text">Project Gallery</p>
            <h2 className="section-title">Flooring Installation Work Across Dublin</h2>
            <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-navy/68">
              Project photography from completed flooring installations will be added here. Contact us to discuss your flooring project and request a quote.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { src: '/media/images/project-02.jpeg', alt: 'Floor preparation and substrate assessment before flooring installation in Dublin' },
              { src: '/media/images/project-04.jpeg', alt: 'Professional flooring installation work in progress on a Dublin property' },
              { src: '/media/images/project-09.jpeg', alt: 'Completed flooring installation — Dublin residential project by PrimeSeal' },
            ].map((img, idx) => (
              <figure
                key={idx}
                className="overflow-hidden rounded-2xl border border-navy/12 bg-white shadow-[0_8px_16px_-12px_rgba(11,31,58,0.25)]"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-shell bg-mist">
        <div className="container-shell grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="label-text">Common Questions</p>
            <h2 className="section-title">Flooring FAQs</h2>
            <p className="mt-4 text-base leading-relaxed text-navy/68">
              Answers to common questions about our flooring services in Dublin.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryButton href="/contact">Request a Flooring Quote</PrimaryButton>
              <SecondaryButton href={siteConfig.socials.whatsapp}>WhatsApp Us</SecondaryButton>
            </div>
          </div>

          <div className="space-y-3">
            {flooringFaqs.map((item) => (
              <div key={item.question} className="rounded-xl border border-navy/10 bg-white px-5 py-4 shadow-[0_4px_12px_-8px_rgba(11,31,58,0.18)]">
                <p className="text-sm font-semibold text-navy">{item.question}</p>
                <p className="mt-2 text-sm leading-relaxed text-navy/70">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA (dark) ── */}
      <section className="bg-[#0C1526] py-16 sm:py-20 lg:py-24">
        <div className="container-shell text-center">
          <p className="inline-flex rounded-full border border-white/16 bg-white/7 px-3.5 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#9FD0F8]">
            Get Started
          </p>
          <h2 className="font-display mx-auto mt-4 max-w-[24ch] text-[2rem] font-semibold uppercase leading-[1.04] tracking-[0.02em] text-white sm:text-[2.45rem] lg:text-[3.05rem]">
            Need Professional Flooring Installation in Dublin?
          </h2>
          <p className="mx-auto mt-5 max-w-[52ch] text-base leading-relaxed text-white/65">
            Contact PrimeSeal for a flooring quote. We cover all of Dublin for domestic and commercial flooring installation, floor preparation, levelling, and repairs.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <PrimaryButton href="/contact">Request a Flooring Quote</PrimaryButton>
            <a
              href={siteConfig.phoneHref}
              style={{
                backgroundColor: '#0f2a4a',
                color: '#ffffff',
                border: '2px solid #ffffff',
                padding: '12px 20px',
                borderRadius: '6px',
                fontWeight: '600',
                fontSize: '14px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                whiteSpace: 'nowrap',
                textDecoration: 'none',
              }}
            >
              Call Us
            </a>
            <a
              href={siteConfig.socials.whatsapp}
              target="_blank"
              rel="noreferrer"
              style={{
                backgroundColor: '#0f2a4a',
                color: '#ffffff',
                border: '2px solid #ffffff',
                padding: '12px 20px',
                borderRadius: '6px',
                fontWeight: '600',
                fontSize: '14px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                whiteSpace: 'nowrap',
                textDecoration: 'none',
              }}
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="section-shell bg-white pt-6">
        <div className="container-shell">
          <CTAInlineStrip />
        </div>
      </section>
    </>
  )
}
