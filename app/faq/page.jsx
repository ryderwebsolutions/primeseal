import CTAInlineStrip from '../../src/components/CTAInlineStrip'
import PageHero from '../../src/components/PageHero'
import { faqItems } from '../../src/content/siteContent'

export const metadata = {
  title: 'Waterproofing FAQ Dublin',
  description:
    'Answers to common waterproofing questions from Dublin property owners, including costs, inspections, flat roof leaks, balconies, and warranty options.',
  alternates: { canonical: '/faq' },
}

export default function FaqPage() {
  return (
    <>
      <PageHero
        label="FAQ"
        title="Waterproofing Questions Answered"
        summary="Clear answers for homeowners, landlords, and commercial clients looking for reliable waterproofing solutions in Dublin."
      />

      <section className="section-shell bg-white">
        <div className="container-shell max-w-5xl">
          <div className="space-y-3">
            {faqItems.map((item) => (
              <article key={item.question} className="rounded-xl border border-navy/12 bg-mist px-5 py-5">
                <h2 className="text-lg font-semibold text-navy">{item.question}</h2>
                <p className="mt-2 text-sm leading-relaxed text-navy/72 sm:text-base">{item.answer}</p>
              </article>
            ))}
          </div>

          <CTAInlineStrip />
        </div>
      </section>
    </>
  )
}
