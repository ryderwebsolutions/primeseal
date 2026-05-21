import CTAInlineStrip from '../../src/components/CTAInlineStrip'
import PageHero from '../../src/components/PageHero'
import { serviceAreas } from '../../src/content/siteContent'

export const metadata = {
  title: 'Areas Covered in Dublin',
  description:
    'PrimeSeal Waterproofing serves Dublin City Centre, South Dublin, North Dublin, West Dublin, Tallaght, Rathmines, Lucan, Swords, Ranelagh, Blanchardstown, Dun Laoghaire, and nearby areas.',
  alternates: { canonical: '/areas-covered' },
}

export default function AreasCoveredPage() {
  return (
    <>
      <PageHero
        label="Areas Covered"
        title="Dublin Areas PrimeSeal Serves"
        summary="PrimeSeal provides inspection-led waterproofing services across Dublin for residential and commercial properties, with fast response and clear scheduling."
      />

      <section className="section-shell bg-white">
        <div className="container-shell max-w-6xl">
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {serviceAreas.map((area) => (
              <span key={area} className="rounded-lg border border-navy/12 bg-mist px-3 py-2 text-sm font-semibold text-navy/78">
                {area}
              </span>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-navy/12 bg-mist p-6">
            <h2 className="text-xl font-semibold text-navy sm:text-2xl">Need an inspection in your area?</h2>
            <p className="mt-3 max-w-[64ch] text-sm leading-relaxed text-navy/72 sm:text-base">
              If your location is not listed above, contact PrimeSeal and we will confirm availability for your project. We regularly serve surrounding Dublin areas for both leak repair and full waterproofing works.
            </p>
          </div>

          <CTAInlineStrip />
        </div>
      </section>
    </>
  )
}
