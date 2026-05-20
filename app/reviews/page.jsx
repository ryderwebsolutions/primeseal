import CTAInlineStrip from '../../src/components/CTAInlineStrip'
import PageHero from '../../src/components/PageHero'
import { clientValuePoints, feedbackSummaries } from '../../src/content/siteContent'

export const metadata = {
  title: 'Client Reviews and Reputation',
  description:
    'See why homeowners and property managers trust PrimeSeal Waterproofing for reliable communication, clean work standards, and long-term leak protection.',
  alternates: { canonical: '/reviews' },
}

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        label="Client Confidence"
        title="Trusted by Homeowners and Property Managers"
        summary="PrimeSeal Waterproofing is chosen for practical communication, careful workmanship, and long-term leak protection across Dublin projects."
      />

      <section className="section-shell bg-white">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <div>
            <h2 className="section-title">What Clients Value Most</h2>
            <ul className="mt-6 space-y-2 text-sm text-navy/72 sm:text-base">
              {clientValuePoints.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span className="mt-[2px] text-blue">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-4">
            {feedbackSummaries.map((item) => (
              <article key={item.heading} className="rounded-2xl border border-navy/12 bg-mist p-5">
                <h3 className="text-xs font-semibold uppercase tracking-[0.1em] text-blue">{item.heading}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/72">{item.text}</p>
              </article>
            ))}
            <article className="rounded-2xl border border-dashed border-navy/22 bg-white p-5">
              <p className="text-sm leading-relaxed text-navy/72">
                Verified review screenshot blocks can be added here once final review assets are approved.
              </p>
            </article>
          </div>
        </div>

        <div className="container-shell">
          <CTAInlineStrip />
        </div>
      </section>
    </>
  )
}
