import PageHero from './PageHero'
import { PrimaryButton, SecondaryButton } from './SiteButtons'
import { faqItems, siteConfig } from '../content/siteContent'

export default function ServiceSeoPage({ page }) {
  return (
    <>
      <PageHero
        label="Dublin Specialist Service"
        title={page.heroTitle}
        summary={page.heroSummary}
      />

      <section className="section-shell bg-white pt-8">
        <div className="container-shell grid gap-8 lg:grid-cols-2">
          <article className="rounded-2xl border border-navy/12 bg-mist p-6 sm:p-7">
            <h2 className="text-xl font-semibold text-navy sm:text-2xl">Common Waterproofing Problems</h2>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-navy/74 sm:text-base">
              {page.problems.map((problem) => (
                <li key={problem} className="flex items-start gap-2">
                  <span className="mt-[2px] text-blue">✓</span>
                  <span>{problem}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-navy/12 bg-mist p-6 sm:p-7">
            <h2 className="text-xl font-semibold text-navy sm:text-2xl">PrimeSeal Solution Approach</h2>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-navy/74 sm:text-base">
              {page.solutions.map((solution) => (
                <li key={solution} className="flex items-start gap-2">
                  <span className="mt-[2px] text-blue">✓</span>
                  <span>{solution}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section-shell bg-mist pt-6">
        <div className="container-shell">
          <div className="max-w-4xl">
            <p className="label-text">Before / After Example</p>
            <h2 className="section-title">Recent Dublin Waterproofing Case Study</h2>
          </div>

          <article className="mt-8 overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-[0_14px_28px_-22px_rgba(11,31,58,0.35)]">
            <div className="hidden grid-cols-2 gap-0.5 bg-navy/10 sm:grid">
              <figure className="relative h-[320px] overflow-hidden bg-mist">
                <img
                  src={page.beforeAfter.image}
                  alt={`${page.title} before waterproofing in ${page.beforeAfter.location}`}
                  className="h-[calc(100%+2.5rem)] w-full -translate-y-10 object-cover object-left"
                  loading="lazy"
                  decoding="async"
                />
                <span className="absolute left-3 top-3 rounded-md border border-white/15 bg-navy px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.13em] text-white">
                  Before
                </span>
              </figure>

              <figure className="relative h-[320px] overflow-hidden bg-mist">
                <img
                  src={page.beforeAfter.image}
                  alt={`${page.title} after waterproofing in ${page.beforeAfter.location}`}
                  className="h-[calc(100%+2.5rem)] w-full -translate-y-10 object-cover object-right"
                  loading="lazy"
                  decoding="async"
                />
                <span className="absolute left-3 top-3 rounded-md border border-white/15 bg-navy px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.13em] text-white">
                  After
                </span>
              </figure>
            </div>

            <figure className="relative h-[250px] overflow-hidden bg-mist sm:hidden">
              <img
                src={page.beforeAfter.image}
                alt={`${page.title} before and after waterproofing in ${page.beforeAfter.location}`}
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </figure>

            <div className="space-y-2.5 px-4 py-5 sm:px-6 sm:py-6">
              <h3 className="text-lg font-semibold leading-tight text-navy">{page.title} - {page.beforeAfter.location}</h3>
              <p className="text-sm leading-relaxed text-navy/72"><span className="font-semibold text-navy">Problem:</span> {page.beforeAfter.problem}</p>
              <p className="text-sm leading-relaxed text-navy/72"><span className="font-semibold text-navy">Solution:</span> {page.beforeAfter.solution}</p>
              <p className="text-sm leading-relaxed text-navy/72"><span className="font-semibold text-navy">Result:</span> {page.beforeAfter.result}</p>
            </div>
          </article>
        </div>
      </section>

      <section className="section-shell bg-white pt-8">
        <div className="container-shell grid gap-8 lg:grid-cols-[1fr_1.02fr] lg:items-center">
          <article>
            <p className="label-text">Trust & Communication</p>
            <h2 className="section-title">A Professional Waterproofing Standard Across Dublin</h2>
            <p className="mt-4 max-w-[62ch] text-base leading-relaxed text-navy/72 sm:text-lg">
              PrimeSeal combines specialist waterproofing expertise with clear communication, written quotations, and dependable site delivery for both homes and commercial properties.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <PrimaryButton href="/contact">Request Free Inspection</PrimaryButton>
              <SecondaryButton href={siteConfig.phoneHref}>Call Now</SecondaryButton>
            </div>
          </article>

          <article className="rounded-2xl border border-navy/12 bg-mist p-6 sm:p-7">
            <h3 className="text-lg font-semibold text-navy">Service FAQs</h3>
            <div className="mt-4 space-y-3">
              {faqItems.slice(0, 4).map((item) => (
                <div key={item.question} className="rounded-xl border border-navy/10 bg-white px-4 py-4">
                  <p className="text-sm font-semibold text-navy">{item.question}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-navy/72">{item.answer}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </>
  )
}
