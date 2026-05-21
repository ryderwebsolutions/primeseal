import CTAInlineStrip from '../../src/components/CTAInlineStrip'
import PageHero from '../../src/components/PageHero'
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

      <section className="section-shell bg-white pt-8">
        <div className="container-shell grid gap-10">
          {projectItems.map((item, index) => (
            <article key={`${item.title}-${item.location}`} className="overflow-hidden rounded-2xl border border-navy/12 bg-mist">
              <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="grid gap-0.5 sm:grid-cols-2">
                  <figure className="relative h-[280px] overflow-hidden bg-white sm:h-[340px]">
                    <img
                      src={item.src}
                      alt={`${item.title} before waterproofing in ${item.location}`}
                      loading="lazy"
                      decoding="async"
                      className="h-[calc(100%+2.5rem)] w-full -translate-y-10 object-cover object-left"
                    />
                    <span className="absolute left-3 top-3 rounded-md border border-white/15 bg-navy px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.13em] text-white">
                      Before
                    </span>
                  </figure>

                  <figure className="relative h-[280px] overflow-hidden bg-white sm:h-[340px]">
                    <img
                      src={item.src}
                      alt={`${item.title} after waterproofing in ${item.location}`}
                      loading="lazy"
                      decoding="async"
                      className="h-[calc(100%+2.5rem)] w-full -translate-y-10 object-cover object-right"
                    />
                    <span className="absolute left-3 top-3 rounded-md border border-white/15 bg-navy px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.13em] text-white">
                      After
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
                </div>
              </div>
            </article>
          ))}

          <CTAInlineStrip />
        </div>
      </section>
    </>
  )
}
