import CTAInlineStrip from '../../src/components/CTAInlineStrip'
import PageHero from '../../src/components/PageHero'
import { faqItems, whyChooseItems } from '../../src/content/siteContent'

export const metadata = {
  title: 'Why PrimeSeal Waterproofing',
  description:
    'Learn why property owners choose PrimeSeal Waterproofing for detail-led leak prevention, premium finish quality, and reliable waterproofing systems in Dublin.',
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="Why PrimeSeal"
        title="Built for Long-Term Leak Prevention"
        summary="PrimeSeal focuses on robust waterproofing systems, detail-led installation, and clean project delivery that protects properties beyond short-term patching."
      />

      <section className="section-shell bg-white">
        <div className="container-shell">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseItems.map((item) => (
              <div key={item} className="rounded-xl border border-navy/12 bg-mist px-4 py-4">
                <p className="flex items-start gap-2 text-sm leading-relaxed text-navy/78 sm:text-base">
                  <span className="mt-[2px] text-blue">✓</span>
                  <span>{item}</span>
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-5xl">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="mt-6 space-y-3">
              {faqItems.map((item) => (
                <article key={item.question} className="rounded-xl border border-navy/12 bg-mist px-5 py-5">
                  <h3 className="font-semibold text-navy">{item.question}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/72">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>

          <CTAInlineStrip />
        </div>
      </section>
    </>
  )
}
