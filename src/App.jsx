"use client"

import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'
import { serviceAreas, siteConfig } from './siteConfig'


const logoSrc = '/images/primeseal-logo.jpg'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Why PrimeSeal', href: '#why-choose' },
  { label: 'Process', href: '#process' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Showcase', href: '#showcase' },
  { label: 'Areas', href: '#areas' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

const serviceGroups = [
  {
    heading: 'Residential & Structural Systems',
    items: [
      {
        title: 'Roof Waterproofing',
        text: 'Torch-on and liquid systems for long-term weather protection.',
      },
      {
        title: 'Balcony Waterproofing',
        text: 'Membrane detailing for exposed balcony perimeters and outlets.',
      },
      {
        title: 'Basement Waterproofing',
        text: 'Sub-structure protection against persistent seepage and pressure.',
      },
      {
        title: 'Flat Roof Systems',
        text: 'Complete flat roof waterproofing upgrades with durable finishes.',
      },
    ],
  },
  {
    heading: 'Specialist Protection Services',
    items: [
      {
        title: 'Wet Room Waterproofing',
        text: 'Professional tanking and transitions for leak-proof wet areas.',
      },
      {
        title: 'Liquid Waterproofing',
        text: 'Seamless liquid membrane application for complex detailing zones.',
      },
      {
        title: 'Leak Prevention',
        text: 'Survey-led prevention work focused on stopping future failures.',
      },
      {
        title: 'Commercial Waterproofing',
        text: 'Reliable systems for apartment blocks, retail sites, and facilities.',
      },
    ],
  },
]

const heroServices = [
  'Roof Waterproofing',
  'Balcony Waterproofing',
  'Basement Waterproofing',
  'Flat Roof Systems',
  'Wet Rooms',
  'Liquid Waterproofing',
  'Leak Prevention',
  'Commercial Waterproofing',
]

const trustBarItems = [
  'Fully Insured',
  'Dublin-Based Specialists',
  'Residential & Commercial Projects',
  'Long-Term Waterproofing Systems',
  'Free Leak Assessments',
  'Warranty Available On Selected Works',
]

const whyChooseItems = [
  'Long-lasting waterproofing systems',
  'Specialist leak prevention expertise',
  'Clean professional workmanship',
  'Fast inspections across Dublin',
  'Residential & commercial capability',
  'Solutions designed to prevent repeat failures',
  'Reliable communication throughout projects',
]

const processSteps = [
  { title: 'Site Inspection', icon: 'M3 9.75 9-6.75 9 6.75v10.5L12 27 3 20.25V9.75Z' },
  { title: 'Moisture & Leak Assessment', icon: 'M12 3v18m0 0-4-4m4 4 4-4M4 7h16' },
  { title: 'Waterproofing System Recommendation', icon: 'M4 5h16v14H4zM8 9h8M8 13h6' },
  { title: 'Surface Preparation', icon: 'M4 17 10 11m0 0 3 3m-3-3 7-7' },
  { title: 'Waterproofing Application', icon: 'M5 19h14M7 15h10M9 11h6M11 7h2' },
  { title: 'Final Inspection & Completion', icon: 'm5 13 4 4L19 7' },
]

const projectItems = [
  {
    title: 'Balcony Waterproofing',
    location: 'South Dublin',
    src: '/clean-balcony-before-after.jpeg',
    problem: 'Water ingress and worn waterproofing surface.',
    solution: 'Liquid waterproofing membrane system applied with edge sealing.',
    result: 'Long-term waterproof protection with clean durable finish.',
  },
  {
    title: 'Garden Area Waterproofing',
    location: 'North Dublin',
    src: '/clean-garden-before-after.jpeg',
    problem: 'Standing water and failed waterproofing causing ongoing damp risk.',
    solution: 'Surface prepared and new membrane system installed with proper drainage detailing.',
    result: 'Sealed surface with improved water run-off and long-term protection.',
  },
  {
    title: 'Roof Edge Waterproofing',
    location: 'West Dublin',
    src: '/clean-roof-before-after.jpeg',
    problem: 'Exposed roof edge showing weathered and failing protection layers.',
    solution: 'Edge rebuilt and waterproofed using a durable liquid membrane system.',
    result: 'Clean professional finish with reliable leak prevention at critical edges.',
  },
]

const testimonialItems = [
  {
    name: 'Homeowner, Dublin 4',
    text: 'PrimeSeal identified the leak source quickly and fixed the issue properly. The communication and finish quality were excellent.',
    rating: 5,
  },
  {
    name: 'Landlord, North Dublin',
    text: 'Very practical team. They explained the problem clearly, sent a written quote, and completed the waterproofing work to a high standard.',
    rating: 5,
  },
  {
    name: 'Commercial Client, West Dublin',
    text: 'Professional from inspection to completion. We needed a reliable long-term solution, and PrimeSeal delivered exactly that.',
    rating: 5,
  },
]

const showcaseItems = [
  {
    label: 'Roof Waterproofing',
    src: '/media/videos/site-01.mp4',
    type: 'video',
    poster: '/media/images/project-06.jpeg',
  },
  {
    label: 'Balcony Systems',
    src: '/media/images/project-08.jpeg',
    type: 'image',
  },
  {
    label: 'Leak Repairs',
    src: '/media/images/project-05.jpeg',
    type: 'image',
  },
  {
    label: 'Flat Roof Work',
    src: '/media/videos/site-03.mp4',
    type: 'video',
    poster: '/media/images/project-04.jpeg',
  },
  {
    label: 'Commercial Projects',
    src: '/media/images/project-11.jpeg',
    type: 'image',
  },
  {
    label: 'Liquid Waterproofing',
    src: '/media/videos/site-06.mp4',
    type: 'video',
    poster: '/media/images/project-07.jpeg',
  },
]

const faqItems = [
  {
    question: 'What waterproofing services do you provide in Dublin?',
    answer:
      'We provide roof, balcony, basement, and wet room waterproofing, plus leak prevention and commercial waterproofing systems across Dublin.',
  },
  {
    question: 'Do you handle both residential and commercial waterproofing?',
    answer:
      'Yes. We carry out waterproofing works for homeowners, landlords, and commercial properties across Dublin.',
  },
  {
    question: 'What areas of Dublin do you cover?',
    answer: 'We are Dublin-based and cover Dublin City Centre, South Dublin, North Dublin, West Dublin, and surrounding areas.',
  },
  {
    question: 'How long does professional waterproofing last?',
    answer:
      'Lifespan depends on exposure, surface condition, and system type, but correctly specified waterproofing is designed for long-term protection.',
  },
  {
    question: 'Do you offer free leak inspections and written quotes?',
    answer:
      'Yes. We provide free leak inspections and clear written quotes so you know exactly what work is needed before we start.',
  },
  {
    question: 'Why do leaks and damp problems keep coming back?',
    answer:
      'Recurring leaks are often caused by failed detailing, blocked or poor drainage, surface movement, or short-term patch repairs.',
  },
  {
    question: 'What waterproofing systems do you use for repairs?',
    answer:
      'We use proven systems including liquid membranes and torch-on solutions, selected to match the surface and leak risk on your property.',
  },
  {
    question: 'How quickly can a waterproofing project start?',
    answer:
      'Start dates depend on project size and current bookings, but we prioritise fast inspections and clear scheduling after assessment.',
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
    phone:
      'M7.2 4.9c.8-.8 2-.8 2.8 0l1.8 1.8c.6.6.7 1.5.3 2.2l-1 1.6c-.2.4-.2.9.1 1.2 1 1.5 2.3 2.8 3.8 3.8.4.3.9.3 1.2.1l1.6-1c.7-.4 1.6-.3 2.2.3l1.8 1.8c.8.8.8 2 0 2.8l-1.1 1.1c-.9.9-2.4 1.3-3.7.9-2.6-.8-5.6-2.7-8.3-5.4S5 11.5 4.2 8.9c-.4-1.3 0-2.8.9-3.7L7.2 4.9Z',
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
      className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-[#6BB6F2] px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.12em] text-navy transition duration-300 hover:-translate-y-0.5 hover:bg-[#7CC0F5] hover:shadow-[0_14px_24px_-14px_rgba(53,99,143,0.45)] sm:w-auto"
    >
      {children}
    </a>
  )
}

function SecondaryButton({ href, children, className = '' }) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-[48px] w-full items-center justify-center rounded-full border border-navy/22 bg-white px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.12em] text-navy transition duration-300 hover:-translate-y-0.5 hover:bg-mist sm:w-auto ${className}`}
    >
      {children}
    </a>
  )
}

function StarRating({ count = 5 }) {
  return (
    <div className="flex items-center gap-1 text-[#F6B70A]" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, index) => (
        <span key={index}>★</span>
      ))}
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)
  const { scrollY } = useScroll()
  const heroVideoY = useTransform(scrollY, [0, 500], [0, 45])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="bg-white text-navy">
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          scrolled ? 'border-b border-navy/10 bg-white/95 py-3' : 'bg-white/90 py-4'
        }`}
      >
        <div className="container-shell flex items-center justify-between gap-6">
          <a href="#home" className="flex items-center gap-3" aria-label="PrimeSeal Waterproofing home">
            <img src={logoSrc} alt="PrimeSeal Waterproofing logo" className="h-12 w-auto rounded-md border border-navy/10 bg-white p-1 sm:h-14" loading="eager" />
            <div className="hidden sm:block">
              <p className="font-display text-xl font-semibold uppercase tracking-[0.1em] text-navy">PrimeSeal</p>
              <p className="text-xs uppercase tracking-[0.18em] text-navy/60">Waterproofing Specialists</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm uppercase tracking-[0.12em] text-navy/85 transition duration-300 hover:text-blue"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a href={siteConfig.phoneHref} className="text-sm font-semibold tracking-wide text-navy/90 transition hover:text-blue">
              Call {siteConfig.phone}
            </a>
            <PrimaryButton href="#contact">Request Free Inspection</PrimaryButton>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={siteConfig.phoneHref}
              aria-label={`Call PrimeSeal Waterproofing at ${siteConfig.phone}`}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/70 bg-white/82 text-blue shadow-[0_10px_20px_-16px_rgba(11,31,58,0.35)] backdrop-blur-[2px] transition duration-300 hover:-translate-y-0.5 hover:bg-[#edf7ff]"
            >
              <SocialIcon type="phone" />
            </a>
            <a
              href={siteConfig.socials.whatsapp}
              target="_blank"
              rel="noreferrer"
              aria-label="Open PrimeSeal WhatsApp in a new tab"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/70 bg-white/82 text-blue shadow-[0_10px_20px_-16px_rgba(11,31,58,0.35)] backdrop-blur-[2px] transition duration-300 hover:-translate-y-0.5 hover:bg-[#edf7ff]"
            >
              <SocialIcon type="whatsapp" />
            </a>
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Open PrimeSeal Instagram in a new tab"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/70 bg-white/82 text-blue shadow-[0_10px_20px_-16px_rgba(11,31,58,0.35)] backdrop-blur-[2px] transition duration-300 hover:-translate-y-0.5 hover:bg-[#edf7ff]"
            >
              <SocialIcon type="instagram" />
            </a>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-navy/20 bg-white text-navy"
            >
              <Icon path={menuOpen ? 'M6 6l12 12M18 6 6 18' : 'M4 7h16M4 12h16M4 17h16'} />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.2 }}
              className="container-shell mt-4 rounded-2xl border border-navy/10 bg-white p-5 shadow-sm lg:hidden"
            >
              <div className="space-y-3">
                {navLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-xl border border-navy/10 px-4 py-3 text-sm uppercase tracking-[0.12em] text-navy/80 transition hover:border-blue/35 hover:text-blue"
                  >
                    {item.label}
                  </a>
                ))}
                <PrimaryButton href="#contact">Request Free Inspection</PrimaryButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        <section id="home" className="relative isolate overflow-hidden bg-white pt-28 sm:pt-32">
          <motion.div style={{ y: heroVideoY }} className="absolute inset-0">
            <video
              className="h-full w-full object-cover"
              src="/media/videos/site-02.mp4"
              poster="/media/images/project-06.jpeg"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          </motion.div>
          <div className="absolute inset-0 bg-[#071223]/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071223]/68 via-[#071223]/55 to-[#071223]/45" />

          <div className="container-shell relative grid gap-10 pb-16 lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:pb-20">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.16em] text-[#B7DFFF]"
              >
                Dublin Waterproofing Specialists
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.08 }}
                className="font-display mt-5 max-w-[18ch] text-4xl font-bold uppercase leading-[1.04] text-white sm:text-5xl lg:text-[3.7rem]"
              >
                Dublin Waterproofing Specialists
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.12 }}
                className="mt-4 max-w-[40ch] text-lg font-semibold leading-snug text-white sm:text-xl"
              >
                Protecting Roofs, Balconies & Properties From Water Damage
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.14 }}
                className="mt-6 max-w-[58ch] text-base leading-relaxed text-white/90 sm:text-lg"
              >
                Reliable waterproofing solutions for flat roofs, balconies, basements, wet rooms and commercial properties across Dublin.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.2 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <PrimaryButton href="#contact">Request Free Inspection</PrimaryButton>
                <SecondaryButton href={siteConfig.phoneHref} className="border-white/50 bg-white/95 text-navy hover:bg-white">Call Now</SecondaryButton>
              </motion.div>
            </div>

            <div className="rounded-2xl border border-white/16 bg-white/12 p-4 shadow-[0_12px_30px_-24px_rgba(11,31,58,0.38)] backdrop-blur-[3px] sm:p-5">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#B7DFFF]">Trusted Across Dublin</p>
              <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm leading-[1.3] text-white/90 sm:gap-x-5">
                {heroServices.map((service) => (
                  <li key={service} className="flex items-start gap-2">
                    <span className="mt-[0.42rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#9FD0F8]" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="border-y border-navy/8 bg-white py-4 sm:py-5">
          <div className="container-shell">
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {trustBarItems.map((item) => (
                <p key={item} className="flex items-start gap-2 text-sm text-navy/78">
                  <span className="mt-[2px] text-blue">✓</span>
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="section-shell bg-white">
          <div className="container-shell">
            <div className="max-w-4xl">
              <p className="label-text">Our Services</p>
              <p className="mt-4 max-w-[62ch] text-base leading-relaxed text-navy/70 sm:text-lg">
                Stop recurring leaks before they cause structural damage. PrimeSeal Waterproofing provides practical, long-term waterproofing systems designed to protect homes, rental properties, and commercial buildings across Dublin.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {serviceGroups.map((group) => (
                <article key={group.heading} className="rounded-2xl border border-navy/12 bg-mist p-6 sm:p-7">
                  <h3 className="font-display text-2xl font-semibold uppercase leading-tight text-navy">{group.heading}</h3>
                  <ul className="mt-5 space-y-3">
                    {group.items.map((item) => (
                      <li key={item.title} className="rounded-xl border border-navy/10 bg-white px-4 py-3">
                        <p className="text-sm font-semibold text-navy sm:text-base">{item.title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-navy/72">{item.text}</p>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="why-choose" className="section-shell bg-mist">
          <div className="container-shell">
            <div className="max-w-4xl">
              <p className="label-text">Why PrimeSeal</p>
              <h2 className="section-title">Why Property Owners Choose PrimeSeal</h2>
              <p className="mt-4 max-w-[64ch] text-base leading-relaxed text-navy/70 sm:text-lg">
                Protect your property from hidden water damage with specialist work focused on reliability, clean finishes, and results that last.
              </p>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {whyChooseItems.map((item) => (
                <div key={item} className="rounded-xl border border-navy/12 bg-white px-4 py-4">
                  <p className="flex items-start gap-2 text-sm leading-relaxed text-navy/78 sm:text-base">
                    <span className="mt-[2px] text-blue">✓</span>
                    <span>{item}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="section-shell bg-mist">
          <div className="container-shell">
            <div className="max-w-4xl">
              <p className="label-text">Our Method</p>
              <h2 className="section-title">Our Waterproofing Process</h2>
              <p className="mt-4 max-w-[64ch] text-base leading-relaxed text-navy/68 sm:text-lg">
                Fix waterproofing issues properly the first time with a clear process from site assessment to completion.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-6">
              {processSteps.map((step, index) => (
                <article key={step.title} className="rounded-2xl border border-navy/12 bg-white px-4 py-5 text-center sm:px-5">
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-mist text-blue">
                    <Icon path={step.icon} className="h-5 w-5" />
                  </div>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-blue/85">Step {index + 1}</p>
                  <p className="mt-2 text-sm font-semibold leading-snug text-navy">{step.title}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section-shell bg-white">
          <div className="container-shell">
            <div className="max-w-4xl">
              <p className="label-text">Project Results</p>
              <h2 className="section-title">Recent Waterproofing Projects</h2>
              <p className="mt-4 max-w-[64ch] text-base leading-relaxed text-navy/68 sm:text-lg">
                Real project photography and clear outcomes from residential and commercial waterproofing work across Dublin.
              </p>
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-3">
              {projectItems.map((item) => (
                <article key={`${item.title}-${item.location}`} className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-[0_14px_28px_-22px_rgba(11,31,58,0.35)]">
                  <div className="bg-navy/6">
                    <figure className="relative h-[250px] overflow-hidden bg-mist sm:hidden">
                      <img
                        src={item.src}
                        alt={`${item.title} before and after waterproofing in ${item.location}`}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover"
                      />
                      <span className="absolute left-3 top-3 rounded-md border border-navy/12 bg-white/92 px-2 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.13em] text-navy/78">
                        Before
                      </span>
                      <span className="absolute right-3 top-3 rounded-md border border-navy/12 bg-white/92 px-2 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.13em] text-navy/78">
                        After
                      </span>
                    </figure>

                    <div className="hidden gap-0.5 sm:grid sm:grid-cols-2">
                      <figure className="relative h-[280px] overflow-hidden bg-mist">
                        <img
                          src={item.src}
                          alt={`${item.title} before waterproofing in ${item.location}`}
                          loading="lazy"
                          decoding="async"
                          className="h-[calc(100%+2.5rem)] w-full -translate-y-10 object-cover object-left"
                        />
                        <span className="absolute left-3 top-3 rounded-md border border-navy/12 bg-white/92 px-2 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.13em] text-navy/78">
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
                        <span className="absolute left-3 top-3 rounded-md border border-navy/12 bg-white/92 px-2 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.13em] text-navy/78">
                          After
                        </span>
                      </figure>
                    </div>
                  </div>

                  <div className="space-y-2.5 px-4 py-5 sm:px-5">
                    <p className="font-display text-lg font-semibold uppercase leading-tight text-navy">{item.title} - {item.location}</p>
                    <p className="text-sm leading-relaxed text-navy/72"><span className="font-semibold text-navy">Problem:</span> {item.problem}</p>
                    <p className="text-sm leading-relaxed text-navy/72"><span className="font-semibold text-navy">Solution:</span> {item.solution}</p>
                    <p className="text-sm leading-relaxed text-navy/72"><span className="font-semibold text-navy">Result:</span> {item.result}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="showcase" className="section-shell bg-white">
          <div className="container-shell">
            <p className="label-text">Project Showcase</p>

            <div className="relative mt-10">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-14 bg-gradient-to-r from-white to-transparent md:block" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-14 bg-gradient-to-l from-white to-transparent md:block" />

              <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2">
                {showcaseItems.map((item) => (
                  <article
                    key={`${item.label}-${item.src}`}
                    className="min-w-[82%] snap-start overflow-hidden rounded-2xl border border-navy/10 bg-mist sm:min-w-[60%] lg:min-w-[42%] xl:min-w-[35%]"
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
          </div>
        </section>

        <section id="reviews" className="section-shell bg-mist">
          <div className="container-shell grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center">
            <div>
              <p className="label-text">Client Reviews</p>
              <h2 className="section-title">Trusted By Homeowners & Property Managers</h2>
              <p className="mt-5 max-w-[58ch] text-base leading-relaxed text-navy/72 sm:text-lg">
                Reliable waterproofing solutions across Dublin, backed by practical communication, clear quotes, and professional workmanship.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-navy/72 sm:text-base">
                <li>Fully insured Dublin-based specialists</li>
                <li>Fast response for active leaks and damp issues</li>
                <li>Free leak assessments and written quotes</li>
                <li>WhatsApp support for quick communication</li>
              </ul>
            </div>

            <div className="grid gap-4">
              {testimonialItems.map((item) => (
                <article key={item.name} className="rounded-2xl border border-navy/12 bg-white p-5">
                  <StarRating count={item.rating} />
                  <p className="mt-3 text-sm leading-relaxed text-navy/72">“{item.text}”</p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-blue">{item.name}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell bg-white py-14 sm:py-16">
          <div className="container-shell">
            <div className="rounded-2xl border border-navy/12 bg-mist px-6 py-8 sm:px-8">
              <p className="label-text">Workmanship Warranty</p>
              <h2 className="font-display mt-4 text-3xl font-semibold uppercase leading-[1.08] text-navy sm:text-4xl">
                Workmanship Warranty Available
              </h2>
              <p className="mt-4 max-w-[72ch] text-base leading-relaxed text-navy/72 sm:text-lg">
                Selected waterproofing works come with a written workmanship warranty depending on the repair type, waterproofing system and surface condition.
              </p>
            </div>
          </div>
        </section>

        <section id="areas" className="section-shell bg-mist">
          <div className="container-shell">
            <div className="max-w-4xl">
              <p className="label-text">Areas Covered</p>
              <h2 className="section-title">Dublin Areas We Cover</h2>
              <p className="mt-4 max-w-[64ch] text-base leading-relaxed text-navy/68 sm:text-lg">
                We carry out residential and commercial waterproofing inspections and repairs across Dublin with fast scheduling and practical site support.
              </p>
              <div className="mt-7 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {serviceAreas.map((area) => (
                  <span key={area} className="rounded-lg border border-navy/12 bg-white px-3 py-2 text-sm font-semibold text-navy/78">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="section-shell bg-white">
          <div className="container-shell max-w-5xl">
            <p className="label-text">FAQ</p>
            <h2 className="section-title">Frequently Asked Questions</h2>

            <div className="mt-10 space-y-3 lg:space-y-4">
              {faqItems.map((item, index) => {
                const isOpen = openFaq === index
                return (
                  <article key={item.question} className="overflow-hidden rounded-xl border border-navy/12 bg-mist">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left lg:px-6 lg:py-5"
                    >
                      <span className="font-semibold text-navy">{item.question}</span>
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-navy/20 bg-white text-navy">
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>
                    <div className={`grid transition-all duration-200 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                      <p className="overflow-hidden px-5 pb-5 text-sm leading-relaxed text-navy/70 lg:px-6 lg:pb-6">{item.answer}</p>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="section-shell bg-navy text-white">
          <div className="container-shell grid gap-8 rounded-3xl border border-white/15 bg-navy px-6 py-10 sm:px-10 lg:grid-cols-[1.05fr_1fr]">
            <div>
              <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.16em] text-[#9FD0F8]">
                Free Inspections & Quotes
              </p>
              <h2 className="font-display mt-4 text-3xl font-semibold uppercase leading-[1.08] sm:text-4xl">
                Need help with a leak or damp problem?
              </h2>
              <p className="mt-4 max-w-xl text-white/80">
                Book a free inspection and we will assess the issue, explain the best repair option, and provide a clear written quote.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <PrimaryButton href={siteConfig.emailHref}>Request Free Inspection</PrimaryButton>
                <SecondaryButton href={siteConfig.phoneHref} className="border-white/45 bg-white text-navy hover:bg-white/92">Call Now</SecondaryButton>
                <SecondaryButton href={siteConfig.socials.whatsapp} className="border-white/45 bg-white text-navy hover:bg-white/92">WhatsApp Us</SecondaryButton>
              </div>
            </div>

            <div className="rounded-2xl border border-white/20 bg-white/5 p-6">
              <h3 className="font-display text-xl font-semibold uppercase text-white">Contact Details</h3>
              <div className="mt-4 space-y-2 text-sm text-white/82">
                <p>Phone: {siteConfig.phone}</p>
                <p>Email: {siteConfig.email}</p>
                <p>Location: {siteConfig.location}</p>
                <p>Hours: Mon-Fri 8:00-18:00, Sat 9:00-14:00</p>
                <p>Fully insured | Residential & commercial | Free leak assessments</p>
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
          </div>
        </section>
      </main>

      <footer className="border-t border-navy/12 bg-[#f7f9fc] py-14">
        <div className="container-shell grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-2xl uppercase tracking-[0.08em] text-navy">{siteConfig.name}</p>
            <p className="mt-3 text-sm leading-relaxed text-navy/68">
              Reliable waterproofing contractor solutions for homeowners, landlords, and commercial properties across Dublin.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-blue">Services</h4>
            <ul className="mt-3 space-y-2 text-sm text-navy/72">
              {serviceGroups.flatMap((group) => group.items).map((service) => (
                <li key={service.title}>{service.title}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-blue">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm text-navy/72">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="transition hover:text-blue">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-blue">Contact & Hours</h4>
            <ul className="mt-3 space-y-2 text-sm text-navy/72">
              <li>{siteConfig.phone}</li>
              <li>{siteConfig.email}</li>
              <li>{siteConfig.location}</li>
              <li>Mon-Fri: 8:00-18:00</li>
              <li>Sat: 9:00-14:00</li>
            </ul>
            <div className="mt-4 flex gap-2">
              <a href={siteConfig.socials.facebook} target="_blank" rel="noreferrer" className="social-chip" aria-label="Facebook">
                <SocialIcon type="facebook" />
              </a>
              <a href={siteConfig.socials.instagram} target="_blank" rel="noreferrer" className="social-chip" aria-label="Instagram">
                <SocialIcon type="instagram" />
              </a>
            </div>
          </div>
        </div>
        <div className="container-shell mt-10 border-t border-navy/12 pt-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-navy/60">© {new Date().getFullYear()} {siteConfig.shortName}. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.12em] text-navy/58">
              {serviceAreas.slice(0, 6).map((area) => (
                <span key={area}>{area}</span>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <a
        href={siteConfig.socials.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#6BB6F2] text-navy shadow-[0_14px_26px_-14px_rgba(11,31,58,0.42)] transition duration-300 hover:scale-105 hover:bg-[#7CC0F5]"
      >
        <SocialIcon type="whatsapp" />
      </a>
    </div>
  )
}

export default App
