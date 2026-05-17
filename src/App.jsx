"use client"

import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'
import { serviceAreas, siteConfig } from './siteConfig'


const logoSrc = '/images/primeseal-logo.jpg'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Before & After', href: '#process' },
  { label: 'Showcase', href: '#showcase' },
  { label: 'About', href: '#about' },
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

const trustSignals = [
  'Residential & Commercial',
  'Dublin Based',
  'Fully Insured',
  'Long-Term Waterproofing Systems',
  'Free Inspections & Quotes',
  'Leak Prevention Specialists',
]

const beforeAfterItems = [
  { label: 'Balcony Waterproofing', src: '/balconybeforeandafter.jpeg' },
  { label: 'Garden Waterproofing', src: '/gardenbeforeandafter.jpeg' },
  { label: 'Roof Waterproofing', src: '/roofbeforeandafter.jpeg' },
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
    question: 'What waterproofing services do you provide?',
    answer:
      'We provide roof waterproofing, balcony systems, basement waterproofing, flat roof solutions, wet room tanking, liquid waterproofing, leak prevention, and commercial waterproofing works.',
  },
  {
    question: 'Do you work on residential and commercial projects?',
    answer:
      'Yes. Prime Seal delivers waterproofing works for both private residential properties and larger commercial sites.',
  },
  {
    question: 'What areas do you cover?',
    answer: 'We are Dublin based and cover Dublin and surrounding areas for inspection and project delivery.',
  },
  {
    question: 'How long does waterproofing last?',
    answer:
      'Lifespan depends on exposure, substrate, and system type, but professionally specified and installed systems are designed for long-term protection.',
  },
  {
    question: 'Do you offer inspections and quotes?',
    answer:
      'Yes. We provide inspections and clear quotations so you can understand scope, approach, and expected outcomes before work starts.',
  },
  {
    question: 'What causes recurring leaks and damp issues?',
    answer:
      'Recurring issues are often linked to failed detailing, poor drainage management, substrate movement, and unsuitable previous repairs.',
  },
  {
    question: 'What waterproofing systems do you use?',
    answer:
      'We use a range of high-grade systems including liquid membranes, torch-on solutions, and detail-specific waterproofing products based on project needs.',
  },
  {
    question: 'How quickly can projects begin?',
    answer:
      'Start times depend on project size and current scheduling, but we prioritise responsive planning and clear timelines after initial assessment.',
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
      className="inline-flex items-center justify-center rounded-full bg-[#6BB6F2] px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-navy transition duration-300 hover:-translate-y-0.5 hover:bg-[#7CC0F5] hover:shadow-[0_14px_24px_-14px_rgba(53,99,143,0.45)]"
    >
      {children}
    </a>
  )
}

function SecondaryButton({ href, children, className = '' }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full border border-navy/22 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-navy transition duration-300 hover:-translate-y-0.5 hover:bg-mist ${className}`}
    >
      {children}
    </a>
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
          <a href="#home" className="flex items-center gap-3" aria-label="Prime Seal Waterproofing home">
            <img src={logoSrc} alt="Prime Seal logo" className="h-10 w-auto rounded-md border border-navy/10 bg-white p-1 sm:h-11" loading="eager" />
            <div className="hidden sm:block">
              <p className="font-display text-lg font-semibold uppercase tracking-[0.12em] text-navy">Prime Seal</p>
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
            <PrimaryButton href="#contact">Get Free Quote</PrimaryButton>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="grid h-11 w-11 place-items-center rounded-full border border-navy/20 bg-white text-navy lg:hidden"
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
                <PrimaryButton href="#contact">Speak With Our Team</PrimaryButton>
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
          <div className="absolute inset-0 bg-white/74" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/86 via-white/72 to-[#edf4fb]/72" />

          <div className="container-shell relative grid gap-10 pb-16 lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:pb-20">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex rounded-full border border-navy/15 bg-white/88 px-4 py-1 text-xs uppercase tracking-[0.16em] text-blue"
              >
                Dublin Waterproofing Specialists
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.08 }}
                className="font-display mt-5 max-w-[16ch] text-4xl font-bold uppercase leading-[1.04] text-navy sm:text-5xl lg:text-[3.7rem]"
              >
                Protecting Properties Across Dublin With Long-Term Waterproofing Solutions
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.14 }}
                className="mt-6 max-w-[54ch] text-base leading-relaxed text-navy/72 sm:text-lg"
              >
                PrimeSeal Waterproofing delivers dependable systems for roofs, balconies, basements, wet areas, and commercial properties with contractor-grade workmanship and clear project communication.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.2 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <PrimaryButton href="#contact">Request Free Inspection</PrimaryButton>
                <SecondaryButton href={siteConfig.phoneHref}>Call Now</SecondaryButton>
              </motion.div>
            </div>

            <div className="rounded-2xl border border-navy/12 bg-white/86 p-5 shadow-[0_12px_30px_-24px_rgba(11,31,58,0.38)] backdrop-blur-[2px] sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue">Trusted Service Signals</p>
              <ul className="mt-4 space-y-2 text-sm text-navy/80">
                {trustSignals.map((signal) => (
                  <li key={signal} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#6BB6F2]" />
                    {signal}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="border-y border-navy/10 bg-mist py-8">
          <div className="container-shell">
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {trustSignals.map((signal) => (
                <li key={signal} className="flex items-center gap-2 text-sm font-medium text-navy/78">
                  <span className="h-2 w-2 rounded-full bg-[#6BB6F2]" />
                  {signal}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="services" className="section-shell bg-white">
          <div className="container-shell">
            <div className="max-w-4xl">
              <p className="label-text">Our Services</p>
              <h2 className="section-title">Built Around Waterproofing Performance, Finish Quality, and Long-Term Reliability</h2>
              <p className="mt-5 max-w-[58ch] text-base leading-relaxed text-navy/68 sm:text-lg">
                Prime Seal delivers specialist waterproofing solutions across residential and commercial properties, with clean technical execution and dependable long-term protection.
              </p>
            </div>

            <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
              {serviceGroups.map((group) => (
                <div key={group.heading} className="border-t border-navy/14 pt-7 lg:pt-8">
                  <h3 className="font-display text-xl font-semibold uppercase tracking-[0.07em] text-navy sm:text-2xl">
                    {group.heading}
                  </h3>
                  <ul className="mt-5 lg:mt-6">
                    {group.items.map((service) => (
                      <li key={service.title} className="flex gap-4 border-b border-navy/12 py-4 sm:py-5 lg:py-6">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue/80" />
                        <div>
                          <p className="font-display text-lg font-semibold leading-tight text-navy sm:text-xl">{service.title}</p>
                          <p className="mt-1.5 max-w-[38ch] text-sm leading-relaxed text-navy/63 sm:text-[15px]">{service.text}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="section-shell bg-mist">
          <div className="container-shell">
            <div className="max-w-4xl">
              <h2 className="section-title">Before & After Waterproofing Work</h2>
              <p className="mt-4 max-w-[64ch] text-base leading-relaxed text-navy/68 sm:text-lg">
                Real PrimeSeal waterproofing projects completed across Dublin and surrounding areas.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {beforeAfterItems.map((item) => (
                <article key={item.label} className="overflow-hidden rounded-2xl border border-navy/12 bg-white shadow-[0_8px_20px_-18px_rgba(11,31,58,0.35)]">
                  <img
                    src={item.src}
                    alt={item.label}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <div className="px-4 py-3">
                    <p className="text-sm font-semibold text-navy">{item.label}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="showcase" className="section-shell bg-white">
          <div className="container-shell">
            <div className="max-w-3xl">
              <p className="label-text">Project Showcase</p>
              <h2 className="section-title">Real Project Photography and Waterproofing Site Video</h2>
            </div>

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

        <section id="about" className="section-shell bg-mist">
          <div className="container-shell grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center">
            <div>
              <p className="label-text">About PrimeSeal</p>
              <h2 className="section-title">Straightforward, Reliable Waterproofing Expertise</h2>
              <p className="mt-5 max-w-[58ch] text-base leading-relaxed text-navy/72 sm:text-lg">
                PrimeSeal Waterproofing provides long-lasting waterproofing solutions for residential and commercial properties across Dublin and surrounding areas.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-navy/72 sm:text-base">
                <li>Years of practical waterproofing experience</li>
                <li>Quality workmanship and clean project delivery</li>
                <li>Leak prevention expertise for recurring issues</li>
                <li>Reliable materials selected for long-term performance</li>
                <li>Residential and commercial capability</li>
              </ul>
              <div className="mt-7 grid gap-2 sm:grid-cols-2">
                {serviceAreas.map((area) => (
                  <span key={area} className="rounded-lg border border-navy/12 bg-white px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-navy/72">
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-navy/12 bg-white">
              <video
                src="/about-video.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="h-full min-h-[360px] w-full object-cover"
              />
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
                Protect Your Property Before Small Leaks Become Major Damage.
              </h2>
              <p className="mt-4 max-w-xl text-white/80">
                Speak with PrimeSeal for a practical site assessment and long-term waterproofing approach tailored to your property.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <PrimaryButton href={siteConfig.emailHref}>Request Free Inspection</PrimaryButton>
                <SecondaryButton href={siteConfig.phoneHref} className="border-white/45 bg-white text-navy hover:bg-white/92">Call Now</SecondaryButton>
                <SecondaryButton href={siteConfig.socials.whatsapp} className="border-white/45 bg-white text-navy hover:bg-white/92">WhatsApp</SecondaryButton>
              </div>
            </div>

            <div className="rounded-2xl border border-white/20 bg-white/5 p-6">
              <h3 className="font-display text-xl font-semibold uppercase text-white">Contact Details</h3>
              <div className="mt-4 space-y-2 text-sm text-white/82">
                <p>Phone: {siteConfig.phone}</p>
                <p>Email: {siteConfig.email}</p>
                <p>Location: {siteConfig.location}</p>
                <p>Hours: Mon-Fri 8:00-18:00, Sat 9:00-14:00</p>
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
              Premium waterproofing contractor solutions for homes and commercial buildings across Dublin and surrounding areas.
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
              {serviceAreas.map((area) => (
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
