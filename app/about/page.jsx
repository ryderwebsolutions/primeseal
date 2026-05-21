import CTAInlineStrip from '../../src/components/CTAInlineStrip'
import PageHero from '../../src/components/PageHero'

const aboutPoints = [
  'Dublin-based waterproofing specialists focused on long-term leak prevention.',
  'Residential and commercial waterproofing capability across roofs, balconies, basements, and wet areas.',
  'Inspection-first planning so recommendations are based on real substrate and moisture conditions.',
  'Clean workmanship standards with careful preparation and detail-focused application.',
  'Clear communication, written quotes, and dependable scheduling from first call to completion.',
  'Practical reliable service approach built for property owners, landlords, and businesses.',
]

export const metadata = {
  title: 'About PrimeSeal Waterproofing',
  description:
    'Learn about PrimeSeal, a Dublin-based waterproofing specialist delivering inspection-led solutions, clean workmanship, and reliable communication for residential and commercial properties.',
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About PrimeSeal"
        title="A Specialist Waterproofing Team Serving Dublin"
        summary="PrimeSeal is built around professional waterproofing standards, practical communication, and reliable delivery across residential and commercial projects."
      />

      <section className="section-shell bg-white">
        <div className="container-shell grid gap-8 lg:grid-cols-[1fr_1.02fr] lg:items-start">
          <article>
            <h2 className="section-title">Who We Are</h2>
            <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-navy/72 sm:text-lg">
              PrimeSeal focuses on protecting Dublin properties from water damage through properly specified systems, careful surface preparation, and detail-led waterproofing application.
            </p>
          </article>

          <div className="grid gap-3">
            {aboutPoints.map((point) => (
              <article key={point} className="rounded-xl border border-navy/12 bg-mist px-5 py-4">
                <p className="text-sm leading-relaxed text-navy/78 sm:text-base">{point}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="container-shell mt-8">
          <CTAInlineStrip />
        </div>
      </section>
    </>
  )
}
