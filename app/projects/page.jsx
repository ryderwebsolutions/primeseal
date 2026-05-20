import CTAInlineStrip from '../../src/components/CTAInlineStrip'
import PageHero from '../../src/components/PageHero'
import { projectItems, showcaseItems } from '../../src/content/siteContent'

export const metadata = {
  title: 'Projects Gallery',
  description:
    'See PrimeSeal Waterproofing project results from real roof, balcony, and commercial waterproofing work completed in Dublin.',
  alternates: { canonical: '/projects' },
}

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        label="Project Results"
        title="Waterproofing Projects and Gallery"
        summary="Real project photography and site footage from residential and commercial waterproofing works completed across Dublin."
      />

      <section className="section-shell bg-white pt-8">
        <div className="container-shell grid gap-8 lg:grid-cols-3">
          {projectItems.map((item) => (
            <article key={`${item.title}-${item.location}`} className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-[0_14px_28px_-22px_rgba(11,31,58,0.35)]">
              <div className="bg-navy/6">
                <div className="hidden gap-0.5 sm:grid sm:grid-cols-2">
                  <figure className="relative h-[280px] overflow-hidden bg-mist">
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

                  <figure className="relative h-[280px] overflow-hidden bg-mist">
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

                <figure className="relative h-[250px] overflow-hidden bg-mist sm:hidden">
                  <img
                    src={item.src}
                    alt={`${item.title} before and after waterproofing in ${item.location}`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </figure>
              </div>

              <div className="space-y-2.5 px-4 py-5 sm:px-5">
                <h2 className="text-lg font-semibold leading-tight text-navy">{item.title} - {item.location}</h2>
                <p className="text-sm leading-relaxed text-navy/72"><span className="font-semibold text-navy">Problem:</span> {item.problem}</p>
                <p className="text-sm leading-relaxed text-navy/72"><span className="font-semibold text-navy">Solution:</span> {item.solution}</p>
                <p className="text-sm leading-relaxed text-navy/72"><span className="font-semibold text-navy">Result:</span> {item.result}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell bg-mist pt-4">
        <div className="container-shell">
          <h2 className="section-title">Project Video Showcase</h2>
          <div className="relative mt-10">
            <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2">
              {showcaseItems.map((item) => (
                <article
                  key={`${item.label}-${item.src}`}
                  className="min-w-[82%] snap-start overflow-hidden rounded-2xl border border-navy/10 bg-white sm:min-w-[60%] lg:min-w-[42%] xl:min-w-[35%]"
                >
                  <div className="relative h-[280px] sm:h-[320px]">
                    {item.type === 'video' ? (
                      <video
                        src={item.src}
                        poster={item.poster}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="none"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <img src={item.src} alt={item.label} className="h-full w-full object-cover" loading="lazy" decoding="async" />
                    )}
                  </div>
                  <div className="border-t border-navy/10 px-4 py-3">
                    <p className="text-sm font-semibold uppercase tracking-[0.1em] text-navy">{item.label}</p>
                  </div>
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
