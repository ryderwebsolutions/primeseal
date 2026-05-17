"use client"

import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'
import { clientExpectations, serviceAreas, siteConfig, trustPillars } from './siteConfig'

const logoSrc = '/images/primeseal-logo.jpg'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Case Studies', href: '#before-after' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const services = [
  {
    title: 'Roof Waterproofing',
    text: 'Torch-on and liquid systems engineered for long-term weather resistance.',
    icon: 'M3 11.5 12 4l9 7.5M5 10.2V20h14v-9.8',
  },
  {
    title: 'Balcony Waterproofing',
    text: 'Membrane detailing for high-risk balcony perimeters, outlets, and upstands.',
    icon: 'M4 6h16M4 12h16M4 18h16',
  },
  {
    title: 'Basement Waterproofing',
    text: 'Sub-structure protection against hydrostatic pressure and persistent seepage.',
    icon: 'M3 20h18M6 20V9m6 11V5m6 15v-8',
  },
  {
    title: 'Flat Roof Systems',
    text: 'Complete flat roof waterproofing upgrades with premium membrane finishes.',
    icon: 'M4 15h16M6 15l1.8-6h8.4l1.8 6',
  },
  {
    title: 'Wet Room Waterproofing',
    text: 'Professional tanking and floor-to-wall transitions for leak-proof interiors.',
    icon: 'M8 4v7m8-7v7M6 20h12M4 13c.8 1.5 2.2 2.5 4 2.8',
  },
  {
    title: 'Liquid Waterproofing',
    text: 'Seamless liquid membrane coatings for complex details and hard-to-reach zones.',
    icon: 'M12 3c3.2 4 5 7 5 10a5 5 0 0 1-10 0c0-3 1.8-6 5-10Z',
  },
  {
    title: 'Leak Prevention',
    text: 'Survey-led defect prevention designed to stop expensive future damage.',
    icon: 'M4 12h5l2-5 2 10 2-5h5',
  },
  {
    title: 'Commercial Waterproofing',
    text: 'Large-scale waterproofing for apartment blocks, retail units, and facilities.',
    icon: 'M4 21V7l8-4 8 4v14M9 21v-6h6v6',
  },
]

const heroIndicators = ['Fully insured specialists', 'Residential & commercial', 'Free site surveys', 'High-grade membrane systems']

const featuredProjects = [
  {
    title: 'Commercial Roof Recovery',
    subtitle: 'Dublin Docklands',
    text: 'Multi-stage waterproofing remediation with reflective top coat and reinforced detailing around penetrations.',
    media: '/media/videos/site-01.mp4',
    type: 'video',
  },
  {
    title: 'Balcony Edge & Drain Detailing',
    subtitle: 'South Dublin',
    text: 'Balcony rewaterproofing package with priming, liquid membrane, and sealed drainage points.',
    media: '/media/images/project-08.jpeg',
    type: 'image',
  },
  {
    title: 'Wet Area Tanking Upgrade',
    subtitle: 'Dublin 6',
    text: 'Full wet-room rebuild support with substrate correction, corner reinforcement, and premium finish quality.',
    media: '/media/videos/site-03.mp4',
    type: 'video',
  },
]

const masonryItems = [
  { src: '/media/images/project-01.jpeg', title: 'Torch-on membrane finish', tag: 'Roofing' },
  { src: '/media/images/project-02.jpeg', title: 'Deck coating detail', tag: 'Balcony' },
  { src: '/media/images/project-03.jpeg', title: 'Substrate prep stage', tag: 'Preparation' },
  { src: '/media/images/project-04.jpeg', title: 'Liquid membrane pass', tag: 'Membrane' },
  { src: '/media/images/project-05.jpeg', title: 'Drain upstand treatment', tag: 'Detailing' },
  { src: '/media/images/project-06.jpeg', title: 'Industrial roof sealing', tag: 'Commercial' },
  { src: '/media/images/project-07.jpeg', title: 'Gloss coat finish', tag: 'Finishing' },
  { src: '/media/images/project-09.jpeg', title: 'Waterproofing texture', tag: 'Closeup' },
  { src: '/media/images/project-10.jpeg', title: 'Scaffold roof work', tag: 'Sitework' },
  { src: '/media/images/project-11.jpeg', title: 'Edge joint sealing', tag: 'Detailing' },
  { src: '/media/images/project-12.jpeg', title: 'Surface restoration', tag: 'Case Study' },
  { src: '/images/commercial-roof-waterproofing.jpg', title: 'Commercial roof system', tag: 'Prime Seal' },
]

const beforeAfterCases = [
  {
    title: 'Flat Roof Refurbishment',
    location: 'Dublin 12',
    before: '/media/images/project-10.jpeg',
    after: '/media/images/project-11.jpeg',
  },
  {
    title: 'Balcony Waterproofing Upgrade',
    location: 'North Dublin',
    before: '/media/images/project-03.jpeg',
    after: '/media/images/project-07.jpeg',
  },
]

function Icon({ path, className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path d={path} stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function SocialIcon({ type }) {
  const paths = {
    whatsapp:
      'M16.7 14.4 17.8 20 12 16.8A8.9 8.9 0 1 1 21 12a8.9 8.9 0 0 1-4.3 7.6M8.4 7.7c-.2.4-.6 1.1-.6 2 0 .9.5 1.8.6 1.9.1.2 1.6 2.7 4 3.6 1.9.8 2.3.6 2.7.5.4-.1 1.2-.5 1.4-1 .2-.5.2-1 .1-1.1-.1-.1-.4-.2-.8-.4-.4-.2-.9-.5-1-.6-.2-.1-.4-.1-.6.1-.2.2-.7.8-.8.9-.2.2-.3.2-.6.1-.3-.2-1.2-.4-2.2-1.3-.8-.7-1.3-1.6-1.5-1.9-.2-.3 0-.4.1-.6.1-.1.3-.4.5-.6.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4Z',
    facebook: 'M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.6.4-1 1-1Z',
    instagram: 'M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5Zm8 5h.01M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z',
  }
  return <Icon path={paths[type]} className="h-4 w-4" />
}

function PrimaryButton({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-lime px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-obsidian transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_30px_-18px_rgba(181,230,29,0.95)]"
    >
      {children}
    </a>
  )
}

function GhostButton({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/14"
    >
      {children}
    </a>
  )
}

function BeforeAfterCard({ title, location, before, after }) {
  const [split, setSplit] = useState(52)

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55 }}
      className="overflow-hidden rounded-3xl border border-white/12 bg-[#0f1828]/90"
    >
      <div className="relative aspect-[16/10]">
        <img src={after} alt={`${title} after`} className="h-full w-full object-cover" loading="lazy" decoding="async" />
        <img
          src={before}
          alt={`${title} before`}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          decoding="async"
          style={{ clipPath: `inset(0 ${100 - split}% 0 0)` }}
        />
        <div className="absolute inset-y-0" style={{ left: `${split}%` }}>
          <div className="relative h-full w-px bg-lime shadow-[0_0_20px_rgba(181,230,29,0.95)]">
            <span className="absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-lime/50 bg-obsidian/80 text-xs text-lime">
              ↔
            </span>
          </div>
        </div>
        <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-obsidian/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white/90">
          Before
        </span>
        <span className="absolute right-4 top-4 rounded-full border border-lime/50 bg-lime/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-lime">
          After
        </span>
      </div>

      <div className="space-y-4 p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="font-display text-2xl font-semibold text-white">{title}</h3>
          <span className="rounded-full bg-white/8 px-3 py-1 text-xs uppercase tracking-[0.12em] text-white/70">{location}</span>
        </div>
        <input
          type="range"
          min="20"
          max="80"
          value={split}
          aria-label={`Adjust before and after for ${title}`}
          onChange={(event) => setSplit(Number(event.target.value))}
          className="w-full accent-lime"
        />
      </div>
    </motion.article>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  const heroDrift = useTransform(scrollY, [0, 500], [0, 120])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="bg-obsidian text-white">
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          scrolled ? 'border-b border-white/10 bg-obsidian/80 py-3 backdrop-blur-xl' : 'bg-transparent py-5'
        }`}
      >
        <div className="container-shell flex items-center justify-between gap-6">
          <a href="#home" className="flex items-center gap-3" aria-label="Prime Seal Waterproofing home">
            <img src={logoSrc} alt="Prime Seal logo" className="h-10 w-auto rounded-md bg-white/95 p-1 sm:h-11" loading="eager" />
            <div className="hidden sm:block">
              <p className="font-display text-lg font-semibold uppercase tracking-[0.12em]">Prime Seal</p>
              <p className="text-xs uppercase tracking-[0.18em] text-white/60">Waterproofing Specialists</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm uppercase tracking-[0.12em] text-white/85 transition duration-300 hover:text-lime"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a href={siteConfig.phoneHref} className="text-sm font-semibold tracking-wide text-white/90 transition hover:text-lime">
              Call {siteConfig.phone}
            </a>
            <PrimaryButton href="#contact">Get Free Quote</PrimaryButton>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/6 lg:hidden"
          >
            <Icon path={menuOpen ? 'M6 6l12 12M18 6 6 18' : 'M4 7h16M4 12h16M4 17h16'} />
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25 }}
              className="container-shell mt-4 rounded-2xl border border-white/10 bg-obsidian/95 p-5 backdrop-blur-xl lg:hidden"
            >
              <div className="space-y-3">
                {navLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-xl border border-white/10 px-4 py-3 text-sm uppercase tracking-[0.12em] text-white/80 transition hover:border-lime/35 hover:text-lime"
                  >
                    {item.label}
                  </a>
                ))}
                <PrimaryButton href="#contact">Speak With Our Team</PrimaryButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        <section id="home" className="relative isolate flex min-h-screen items-center overflow-hidden">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src="/media/videos/site-02.mp4"
            poster="/media/images/project-06.jpeg"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
          <div className="absolute inset-0 bg-[#040912]/70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(181,230,29,0.2),transparent_45%),radial-gradient(circle_at_90%_4%,rgba(22,95,168,0.55),transparent_38%)]" />
          <motion.div style={{ y: heroDrift }} className="absolute -right-28 top-1/4 hidden h-72 w-72 rounded-full bg-lime/10 blur-3xl lg:block" />

          <div className="container-shell relative z-10 pt-28">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.16em] text-lime"
            >
              Premium Specialist Waterproofing
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display mt-6 max-w-4xl text-4xl font-bold uppercase leading-[1.02] sm:text-5xl lg:text-7xl"
            >
              Premium Waterproofing Solutions Built To Last
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="mt-7 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg"
            >
              Prime Seal delivers high-performance waterproofing across Ireland with expert detailing, durable systems, and craftsmanship focused on long-term protection.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.28 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <PrimaryButton href="#contact">Get Free Quote</PrimaryButton>
              <GhostButton href={siteConfig.phoneHref}>Call Now</GhostButton>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-10 grid max-w-3xl gap-3 sm:grid-cols-2"
            >
              {heroIndicators.map((item) => (
                <li key={item} className="rounded-xl border border-white/15 bg-white/7 px-4 py-3 text-sm backdrop-blur-xl">
                  {item}
                </li>
              ))}
            </motion.ul>

            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              href="#services"
              className="mt-14 inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/65"
            >
              Scroll
              <span className="h-8 w-px animate-pulse bg-white/45" />
            </motion.a>
          </div>
        </section>

        <section id="services" className="section-shell bg-gradient-to-b from-[#050b17] to-[#070f1d]">
          <div className="container-shell">
            <div className="max-w-3xl">
              <p className="label-text">Our Services</p>
              <h2 className="section-title">Built Around Waterproofing Performance, Finish Quality, and Long-Term Reliability</h2>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {services.map((service, index) => (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] p-6 backdrop-blur-xl"
                >
                  <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-lime/10 blur-2xl transition duration-500 group-hover:scale-125" />
                  <div className="relative">
                    <span className="grid h-12 w-12 place-items-center rounded-xl border border-white/20 bg-obsidian/80 text-lime">
                      <Icon path={service.icon} />
                    </span>
                    <h3 className="font-display mt-5 text-2xl leading-tight text-white">{service.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/70">{service.text}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section-shell bg-[#050b16]">
          <div className="container-shell space-y-10">
            <div className="max-w-3xl">
              <p className="label-text">Project Showcase</p>
              <h2 className="section-title">Cinematic Waterproofing Case Work Using Real Prime Seal Site Media</h2>
            </div>

            {featuredProjects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55 }}
                className="grid gap-6 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-5 md:p-8 lg:grid-cols-2"
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''} relative overflow-hidden rounded-2xl border border-white/10`}>
                  {project.type === 'video' ? (
                    <video
                      src={project.media}
                      poster="/media/images/project-08.jpeg"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="none"
                      className="h-full min-h-[320px] w-full object-cover transition duration-700 hover:scale-105"
                    />
                  ) : (
                    <img
                      src={project.media}
                      alt={project.title}
                      className="h-full min-h-[320px] w-full object-cover transition duration-700 hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                </div>

                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} flex flex-col justify-center`}
                >
                  <p className="text-xs uppercase tracking-[0.16em] text-lime/90">{project.subtitle}</p>
                  <h3 className="font-display mt-3 text-3xl leading-tight text-white sm:text-4xl">{project.title}</h3>
                  <p className="mt-4 max-w-xl leading-relaxed text-white/75">{project.text}</p>
                  <div className="mt-6 inline-flex w-fit items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.12em] text-white/75">
                    Real site execution footage
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="before-after" className="section-shell relative overflow-hidden bg-[#030813]">
          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(22,95,168,0.22),transparent_45%,rgba(181,230,29,0.12))]" />
          <div className="container-shell relative">
            <div className="max-w-3xl">
              <p className="label-text">Before / After Case Studies</p>
              <h2 className="section-title">Proof of Performance Through Premium Waterproofing Transformations</h2>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {beforeAfterCases.map((entry) => (
                <BeforeAfterCard key={entry.title} {...entry} />
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell bg-[#060d1a]">
          <div className="container-shell">
            <div className="max-w-3xl">
              <p className="label-text">Premium Gallery</p>
              <h2 className="section-title">Membrane Textures, Scaffold Work, Surface Detail, and Real Project Finishes</h2>
            </div>

            <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
              {masonryItems.map((item) => (
                <motion.figure
                  key={item.src}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45 }}
                  className="group relative mb-5 break-inside-avoid overflow-hidden rounded-2xl border border-white/10"
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/10 to-black/0 opacity-80 transition duration-500 group-hover:opacity-100" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-4">
                    <p className="text-xs uppercase tracking-[0.14em] text-lime">{item.tag}</p>
                    <p className="mt-1 text-sm font-semibold text-white">{item.title}</p>
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section-shell bg-[#030813]">
          <div className="container-shell grid gap-8 lg:grid-cols-[1fr_1.25fr] lg:items-start">
            <div>
              <p className="label-text">About Prime Seal</p>
              <h2 className="section-title">Established Craftsmanship With Specialist Focus on Waterproofing Longevity</h2>
              <p className="mt-4 max-w-xl leading-relaxed text-white/75">
                Prime Seal combines technical waterproofing knowledge with premium site execution. Every detail from substrate prep to final finish is delivered to protect property value and prevent recurring failures.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {serviceAreas.map((area) => (
                  <span key={area} className="rounded-full border border-white/12 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.12em] text-white/65">
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {trustPillars.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-xl">
                  <p className="font-display text-2xl font-semibold uppercase text-lime">{item.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell bg-[#060d18]">
          <div className="container-shell">
            <div className="max-w-3xl">
              <p className="label-text">Why Clients Reach Out</p>
              <h2 className="section-title">Built Around the Things Property Owners Actually Care About</h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {clientExpectations.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="rounded-2xl border border-white/12 bg-white/[0.05] p-6 shadow-[0_18px_35px_-24px_rgba(0,0,0,0.9)] backdrop-blur-xl"
                >
                  <p className="font-display text-4xl leading-none text-lime/80">“</p>
                  <p className="mt-3 font-display text-2xl font-semibold uppercase text-white">{item.title}</p>
                  <p className="mt-4 leading-relaxed text-white/78">{item.text}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell border-y border-white/10 bg-[#050b15]">
          <div className="container-shell grid gap-5 rounded-3xl border border-white/12 bg-gradient-to-r from-[#0a1221] to-[#0f1f39] p-8 md:grid-cols-3">
            <div>
              <p className="label-text">Protect Your Property Today</p>
              <h3 className="font-display text-2xl font-semibold text-white">Get Your Free Waterproofing Quote</h3>
            </div>
            <div className="md:col-span-2 flex flex-wrap items-center gap-3 md:justify-end">
              <PrimaryButton href={siteConfig.emailHref}>Email Us</PrimaryButton>
              <GhostButton href={siteConfig.socials.whatsapp}>WhatsApp</GhostButton>
              <GhostButton href={siteConfig.phoneHref}>Speak With Our Team</GhostButton>
            </div>
          </div>
        </section>

        <section id="contact" className="section-shell bg-[#03070f]">
          <div className="container-shell grid gap-7 lg:grid-cols-[1fr_1.2fr]">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-lg">
              <p className="label-text">Contact</p>
              <h2 className="font-display mt-3 text-3xl font-semibold uppercase text-white">Speak With Prime Seal</h2>
              <p className="mt-4 text-white/70">Fast responses, practical advice, and premium waterproofing guidance from specialists.</p>
              <div className="mt-6 space-y-3 text-sm text-white/80">
                <p>Phone: {siteConfig.phone}</p>
                <p>Email: {siteConfig.email}</p>
                <p>Location: {siteConfig.location}</p>
              </div>
              <div className="mt-6 flex gap-2">
                <a href={siteConfig.socials.whatsapp} target="_blank" rel="noreferrer" className="social-chip" aria-label="WhatsApp">
                  <SocialIcon type="whatsapp" />
                </a>
                <a href={siteConfig.socials.facebook} target="_blank" rel="noreferrer" className="social-chip" aria-label="Facebook">
                  <SocialIcon type="facebook" />
                </a>
                <a href={siteConfig.socials.instagram} target="_blank" rel="noreferrer" className="social-chip" aria-label="Instagram">
                  <SocialIcon type="instagram" />
                </a>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/12">
              <video
                src="/media/videos/site-06.mp4"
                poster="/media/images/project-05.jpeg"
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                className="h-full min-h-[330px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/26 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="label-text">On-site execution</p>
                <p className="mt-2 max-w-lg text-sm text-white/84">
                  Every project is delivered with a focus on detail, durability, and finish quality that reflects a premium specialist brand.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#02060f] py-10">
        <div className="container-shell flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-2xl uppercase tracking-[0.08em]">{siteConfig.name}</p>
            <p className="mt-2 text-sm text-white/60">Premium waterproofing systems across Dublin and Ireland.</p>
          </div>
          <div className="flex flex-wrap items-center gap-5 text-xs uppercase tracking-[0.12em] text-white/60">
            {navLinks.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-lime">
                {item.label}
              </a>
            ))}
          </div>
          <p className="text-xs text-white/50">© {new Date().getFullYear()} {siteConfig.shortName}. All rights reserved.</p>
        </div>
      </footer>

      <a
        href={siteConfig.socials.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-lime text-obsidian shadow-[0_16px_34px_-16px_rgba(181,230,29,0.95)] transition duration-300 hover:scale-110"
      >
        <SocialIcon type="whatsapp" />
      </a>
    </div>
  )
}

export default App
