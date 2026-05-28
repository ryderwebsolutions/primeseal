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
          <div className="grid gap-5 md:grid-cols-2">
            <figure className="overflow-hidden rounded-2xl border border-navy/12 bg-mist shadow-[0_14px_28px_-24px_rgba(11,31,58,0.34)]">
              <img
                src="/media/images/project-10.jpeg"
                alt="Flat roof waterproofing membrane installation"
                loading="eager"
                decoding="async"
                className="h-full w-full object-cover"
              />
              <figcaption className="px-5 py-4 text-sm leading-relaxed text-navy/72">
                Waterproofing work in progress on a flat roof system with membrane detailing and edge protection.
              </figcaption>
            </figure>

            <figure className="overflow-hidden rounded-2xl border border-navy/12 bg-mist shadow-[0_14px_28px_-24px_rgba(11,31,58,0.34)]">
              <img
                src="/media/images/project-06.jpeg"
                alt="Completed waterproofing finish on a Dublin property"
                loading="eager"
                decoding="async"
                className="h-full w-full object-cover"
              />
              <figcaption className="px-5 py-4 text-sm leading-relaxed text-navy/72">
                Completed waterproofing detailing that supports long-term protection for exposed property surfaces.
              </figcaption>
            </figure>
          </div>

          <div className="mt-10 max-w-3xl">
            <p className="label-text">Before You Ask</p>
            <h2 className="section-title">Useful Context for Common Waterproofing Queries</h2>
            <p className="mt-4 max-w-[64ch] text-base leading-relaxed text-navy/72 sm:text-lg">
              These answers cover the issues we see most often on roofs, balconies, basements, and wet areas across Dublin.
            </p>
          </div>

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
