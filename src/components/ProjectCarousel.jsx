'use client'

import { useRef, useState } from 'react'

const projects = [
  { title: 'Balcony Waterproofing', location: 'South Dublin', src: '/media/images/balcony-card.jpg' },
  { title: 'Flat Roof Membrane', location: 'Dublin', src: '/media/images/project-02.jpeg' },
  { title: 'Roof Edge Waterproofing', location: 'West Dublin', src: '/media/images/project-03.jpeg' },
  { title: 'Wet Room Tanking', location: 'Dublin', src: '/media/images/wetroomtanking.jpg' },
  { title: 'Balcony Systems', location: 'South Dublin', src: '/media/images/project-05.jpeg' },
  { title: 'Roof Waterproofing', location: 'North Dublin', src: '/media/images/project-06.jpeg' },
  { title: 'Basement Waterproofing', location: 'Dublin City', src: '/media/images/project-07.jpeg' },
  { title: 'Flat Roof Waterproofing', location: 'Dublin', src: '/media/images/project-08.jpeg' },
  // TODO: replace with real single-shot project photo
  { title: 'Flat Roof Repair', location: 'Dublin', src: '/clean-roof-before-after.jpeg' },
  // TODO: replace with real single-shot project photo
  { title: 'Balcony Reseal', location: 'South Dublin', src: '/clean-balcony-before-after.jpeg' },
  { title: 'Commercial Waterproofing', location: 'Dublin', src: '/media/images/project-11.jpeg' },
  { title: 'Leak Prevention Works', location: 'West Dublin', src: '/media/images/project-12.jpeg' },
]

export default function ProjectCarousel() {
  const trackRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  function getCardWidth() {
    if (!trackRef.current) return 280
    const card = trackRef.current.children[0]
    return card ? card.offsetWidth + 16 : 280
  }

  function scrollToIndex(index) {
    if (!trackRef.current) return
    const clamped = Math.max(0, Math.min(projects.length - 1, index))
    trackRef.current.scrollTo({ left: clamped * getCardWidth(), behavior: 'smooth' })
    setActiveIndex(clamped)
  }

  function handleScroll(e) {
    const cardWidth = getCardWidth()
    const idx = Math.round(e.currentTarget.scrollLeft / cardWidth)
    setActiveIndex(Math.max(0, Math.min(projects.length - 1, idx)))
  }

  return (
    <div>
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="scrollbar-hide flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory"
      >
        {projects.map((project, i) => (
          <article
            key={i}
            className="group relative h-[260px] w-[240px] shrink-0 snap-start overflow-hidden rounded-2xl sm:h-[280px] sm:w-[268px]"
          >
            <img
              src={project.src}
              alt={`${project.title} in ${project.location}`}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.07]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071223]/88 via-[#071223]/22 to-transparent transition duration-300 group-hover:from-[#071223]/94 group-hover:via-[#071223]/40" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.13em] text-[#9FD0F8]">
                {project.location}
              </p>
              <h3 className="mt-1 text-sm font-bold leading-tight text-white">{project.title}</h3>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => scrollToIndex(activeIndex - 1)}
          disabled={activeIndex === 0}
          aria-label="Previous project"
          className="grid h-10 w-10 place-items-center rounded-full border border-white/22 text-white/70 transition duration-300 hover:border-[#165FA8] hover:bg-[#165FA8] hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="flex items-center gap-1">
          {projects.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to project ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? 'h-1.5 w-5 bg-[#165FA8]'
                  : 'h-1 w-1 bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
        <span className="text-[0.62rem] tabular-nums text-white/38">
          {activeIndex + 1} / {projects.length}
        </span>

        <button
          type="button"
          onClick={() => scrollToIndex(activeIndex + 1)}
          disabled={activeIndex === projects.length - 1}
          aria-label="Next project"
          className="grid h-10 w-10 place-items-center rounded-full border border-white/22 text-white/70 transition duration-300 hover:border-[#165FA8] hover:bg-[#165FA8] hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  )
}
