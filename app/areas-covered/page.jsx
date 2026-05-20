import CTAInlineStrip from '../../src/components/CTAInlineStrip'
import PageHero from '../../src/components/PageHero'
import { serviceAreas } from '../../src/content/siteContent'

export const metadata = {
  title: 'Areas Covered in Dublin',
  description:
    'PrimeSeal Waterproofing provides leak inspections and waterproofing services across Dublin City Centre, South Dublin, North Dublin, West Dublin, and surrounding areas.',
  alternates: { canonical: '/areas-covered' },
}

export default function AreasCoveredPage() {
  return (
    <>
      <PageHero
        label="Areas Covered"
        title="Dublin Areas We Serve"
        summary="We carry out residential and commercial waterproofing inspections and repairs across Dublin with fast scheduling and practical site support."
      />

      <section className="section-shell bg-white">
        <div className="container-shell">
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {serviceAreas.map((area) => (
              <span key={area} className="rounded-lg border border-navy/12 bg-mist px-3 py-2 text-sm font-semibold text-navy/78">
                {area}
              </span>
            ))}
          </div>

          <CTAInlineStrip />
        </div>
      </section>
    </>
  )
}
