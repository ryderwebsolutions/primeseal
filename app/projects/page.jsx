import CTAInlineStrip from '../../src/components/CTAInlineStrip'
import PageHero from '../../src/components/PageHero'
import { SecondaryButton } from '../../src/components/SiteButtons'
import { projectItems } from '../../src/content/siteContent'

export const metadata = {
  title: 'Waterproofing Projects Dublin',
  description:
    'Premium before-and-after waterproofing case studies from PrimeSeal projects in South Dublin, West Dublin, and across the wider Dublin area.',
  alternates: { canonical: '/projects' },
}

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        label="Projects"
        title="Before and After Waterproofing Case Studies"
        summary="A curated showcase of PrimeSeal project outcomes across Dublin, highlighting the issue, approach, and final waterproofing result."
      />

      <section className="section-shell bg-white pt-6">
        <div className="container-shell grid gap-10">
          {projectItems.map((item, index) => (
            <article key={`${item.title}-${item.location}`} className="overflow-hidden rounded-2xl border border-navy/12 bg-mist shadow-[0_18px_30px_-24px_rgba(11,31,58,0.45)]">
              <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="p-2">
                  <figure className="relative overflow-hidden rounded-xl bg-white">
                    <img
                      src={item.src}
                      alt={`${item.title} before and after waterproofing in ${item.location}`}
                      loading="lazy"
                      decoding="async"
                      className="h-[280px] w-full object-contain object-top sm:h-[320px]"
                    />
                    <span className="absolute left-3 top-3 rounded-full border border-white/35 bg-white/90 px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-navy">
                      {item.location}
                    </span>
                  </figure>
                </div>

                <div className="px-5 py-6 sm:px-7 sm:py-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue">Case Study {index + 1}</p>
                  <h2 className="mt-2 font-display text-2xl font-semibold uppercase leading-tight text-navy">
                    {item.title} - {item.location}
                  </h2>
                  <div className="mt-5 space-y-3 text-sm leading-relaxed text-navy/74 sm:text-base">
                    <p><span className="font-semibold text-navy">Problem:</span> {item.problem}</p>
                    <p><span className="font-semibold text-navy">Solution:</span> {item.solution}</p>
                    <p><span className="font-semibold text-navy">Result:</span> {item.result}</p>
                  </div>
                  <div className="mt-6">
                    <SecondaryButton href="/contact">Request Similar Work</SecondaryButton>
                  </div>
                </div>
              </div>
            </article>
          ))}

          {/* ── Flooring Projects (placeholder — ready for client photos) ── */}
          <article className="overflow-hidden rounded-2xl border border-navy/12 bg-mist shadow-[0_18px_30px_-24px_rgba(11,31,58,0.45)]">
            <div className="px-6 py-7 sm:px-8 sm:py-8">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue">Flooring Services</p>
              <h2 className="mt-2 font-display text-2xl font-semibold uppercase leading-tight text-navy">
                Flooring Installation Projects
              </h2>
              <p className="mt-3 max-w-[60ch] text-sm leading-relaxed text-navy/74 sm:text-base">
                PrimeSeal now provides professional flooring installation alongside our waterproofing services. Photos and case studies from completed flooring projects across Dublin will be added here. In the meantime, contact us to discuss your flooring requirements.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <SecondaryButton href="/flooring-dublin">View Flooring Services</SecondaryButton>
                <SecondaryButton href="/contact">Request a Flooring Quote</SecondaryButton>
              </div>
            </div>
          </article>

          <CTAInlineStrip />
        </div>
      </section>
    </>
  )
}
