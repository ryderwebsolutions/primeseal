import CTAInlineStrip from '../../src/components/CTAInlineStrip'
import PageHero from '../../src/components/PageHero'

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
          <p className="mb-6 max-w-[62ch] text-base leading-relaxed text-navy/70">
            Based in Dublin 8 — serving all of Dublin and surrounding areas. We travel for the right job.
          </p>

          <div className="overflow-hidden rounded-2xl border border-navy/12 shadow-[0_18px_40px_-24px_rgba(11,31,58,0.28)]">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=-6.5%2C53.23%2C-6.0%2C53.45&layer=mapnik&marker=53.333%2C-6.283"
              title="PrimeSeal service area — Dublin and surrounding areas"
              loading="lazy"
              style={{ border: 'none', display: 'block', width: '100%', height: '480px' }}
            />
          </div>

          <div className="mt-8 rounded-2xl border border-navy/12 bg-mist p-6">
            <h2 className="text-xl font-semibold text-navy sm:text-2xl">Not sure if we cover your area?</h2>
            <p className="mt-3 max-w-[64ch] text-sm leading-relaxed text-navy/72 sm:text-base">
              Get in touch — PrimeSeal regularly travels beyond the map for the right project. Both residential and commercial enquiries welcome across Dublin and surrounding counties.
            </p>
          </div>

          <CTAInlineStrip />
        </div>
      </section>
    </>
  )
}
