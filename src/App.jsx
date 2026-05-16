import { useState } from 'react'

const logoSrc = '/images/primeseal-logo.jpg'
const backdropSrc = '/images/primeseal-backdrop.jpg'

const services = [
  {
    title: 'Roof Waterproofing',
    text: 'Advanced membrane and coating systems to prevent water ingress and prolong roof lifespan.',
  },
  {
    title: 'Balcony Waterproofing',
    text: 'Weather-resistant balcony sealing designed for Irish conditions and long-term performance.',
  },
  {
    title: 'Wet Rooms & Bathrooms',
    text: 'Full tanking and moisture control solutions for leak-free bathrooms and wet areas.',
  },
  {
    title: 'Damp Proofing',
    text: 'Targeted damp treatment to protect walls, interiors, and structural materials from moisture damage.',
  },
  {
    title: 'Leak Repairs',
    text: 'Fast leak diagnosis and repair to stop active water damage before it spreads.',
  },
  {
    title: 'Basements & Foundations',
    text: 'Below-ground waterproofing systems for robust protection against hydrostatic pressure.',
  },
  {
    title: 'Commercial Waterproofing',
    text: 'Reliable large-scale waterproofing for offices, retail units, apartment blocks, and facilities.',
  },
]

const reasons = [
  'Long-lasting waterproofing protection',
  'Experienced waterproofing specialists',
  'Residential and commercial expertise',
  'Premium-grade waterproofing materials',
  'Prevention of costly future damage',
  'Trusted local Dublin service',
  'Fast response and clear communication',
]

const processSteps = [
  { title: 'Free Inspection', text: 'On-site assessment of visible and hidden moisture risks.' },
  { title: 'Leak/Damp Diagnosis', text: 'Technical identification of root cause and exposure points.' },
  { title: 'Waterproofing Solution', text: 'Specification of the right system for your property type.' },
  { title: 'Long-Lasting Protection', text: 'Precision application focused on durable, dependable results.' },
]

const gallery = [
  {
    title: 'Roof Waterproofing',
    location: 'South Dublin',
    src: '/images/commercial-roof-waterproofing.jpg',
  },
  {
    title: 'Wet Room Protection',
    location: 'Dublin 6',
    src: '/images/bathroom-waterproofing.jpg',
  },
  {
    title: 'Balcony Sealing',
    location: 'Dublin 8',
    src: '/images/balcony-waterproofing-membrane.jpg',
  },
  {
    title: 'Basement Waterproofing',
    location: 'North Dublin',
    src: '/images/basement-waterproofing.jpg',
  },
  {
    title: 'Leak Detection & Repair',
    location: 'Dublin 12',
    src: '/images/leak-detection.jpg',
  },
  {
    title: 'Damp Proofing System',
    location: 'West Dublin',
    src: '/images/waterproofing-systems.jpg',
  },
]

const testimonials = [
  {
    name: 'Aoife M., Rathfarnham',
    text: 'PrimeSeal solved a persistent roof leak that two previous contractors could not fix. Very professional team and excellent finish.',
  },
  {
    name: 'Declan R., Clontarf',
    text: 'Quick response, clear quote, and high-quality damp proofing. The difference in our basement is night and day.',
  },
  {
    name: 'Property Manager, Dublin 2',
    text: 'Reliable and detail-focused. They handled multiple waterproofing issues across our building with minimal disruption.',
  },
]

const faqs = [
  {
    question: 'How long does waterproofing last?',
    answer:
      'Lifespan depends on the area and system used, but professionally installed solutions can protect for many years with proper maintenance.',
  },
  {
    question: 'Do you cover Dublin?',
    answer:
      'Yes. PrimeSeal Waterproofing serves Dublin and surrounding areas for both residential and commercial projects.',
  },
  {
    question: 'Do you provide free inspections?',
    answer:
      'Yes. We offer a free inspection and quote so you can understand the issue and the recommended solution clearly.',
  },
  {
    question: 'Can you fix existing leaks?',
    answer:
      'Absolutely. We identify leak sources, repair affected areas, and apply durable waterproofing systems to prevent recurrence.',
  },
  {
    question: 'Do you work on commercial properties?',
    answer:
      'Yes. We deliver commercial waterproofing solutions for offices, retail spaces, apartment blocks, and facilities.',
  },
  {
    question: 'What waterproofing systems do you use?',
    answer:
      'We specify system types based on substrate and exposure, including membranes, liquid-applied coatings, tanking systems, and damp-proof treatments.',
  },
]

function Icon({ path, className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path d={path} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Button({ href, children, variant = 'primary', ariaLabel }) {
  const styles = variant === 'primary' ? 'ps-btn ps-btn-primary' : 'ps-btn ps-btn-secondary'
  return (
    <a href={href} className={styles} aria-label={ariaLabel}>
      {children}
    </a>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <div className="min-h-screen bg-white text-navy">
      <header className="sticky top-0 z-50 border-b border-blue/15 bg-white/95 backdrop-blur-md">
        <div className="container-shell flex h-24 items-center justify-between">
          <a href="#home" className="flex items-center gap-4" aria-label="PrimeSeal Waterproofing home">
            <div className="rounded-xl border border-navy/12 bg-white p-1.5 shadow-sm">
              <img
                src={logoSrc}
                alt="PrimeSeal Waterproofing logo"
                className="h-10 w-auto max-w-[168px] object-contain sm:h-12 sm:max-w-[210px]"
                loading="eager"
                decoding="async"
              />
            </div>
            <div className="hidden sm:block">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue">Dublin & Surrounding Areas</p>
              <p className="text-base font-bold text-navy">Waterproofing Specialists</p>
            </div>
          </a>

          <button
            type="button"
            className="rounded-lg border border-navy/20 p-2 text-navy lg:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <Icon path="M4 6h16M4 12h16M4 18h16" />
          </button>

          <nav
            className={`${menuOpen ? 'block' : 'hidden'} absolute left-0 top-24 w-full border-b border-blue/15 bg-white px-5 py-5 lg:static lg:block lg:w-auto lg:border-0 lg:bg-transparent lg:p-0`}
          >
            <ul className="flex flex-col gap-4 text-sm font-semibold lg:flex-row lg:items-center lg:gap-7">
              <li><a href="#services" className="hover:text-blue">Services</a></li>
              <li><a href="#about" className="hover:text-blue">About</a></li>
              <li><a href="#process" className="hover:text-blue">Process</a></li>
              <li><a href="#faq" className="hover:text-blue">FAQ</a></li>
              <li><a href="#contact" className="hover:text-blue">Contact</a></li>
            </ul>
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <a
              href="https://wa.me/353871372847"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="rounded-lg border border-navy/20 p-2 hover:bg-mist"
            >
              <Icon path="M16.7 14.4 17.8 20 12 16.8A8.9 8.9 0 1 1 21 12a8.9 8.9 0 0 1-4.3 7.6M8.4 7.7c-.2.4-.6 1.1-.6 2 0 .9.5 1.8.6 1.9.1.2 1.6 2.7 4 3.6 1.9.8 2.3.6 2.7.5.4-.1 1.2-.5 1.4-1 .2-.5.2-1 .1-1.1-.1-.1-.4-.2-.8-.4-.4-.2-.9-.5-1-.6-.2-.1-.4-.1-.6.1-.2.2-.7.8-.8.9-.2.2-.3.2-.6.1-.3-.2-1.2-.4-2.2-1.3-.8-.7-1.3-1.6-1.5-1.9-.2-.3 0-.4.1-.6.1-.1.3-.4.5-.6.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4Z" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61575446935350"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="rounded-lg border border-navy/20 p-2 hover:bg-mist"
            >
              <Icon path="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.6.4-1 1-1Z" />
            </a>
            <a
              href="https://www.instagram.com/primeseal_waterproofing/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="rounded-lg border border-navy/20 p-2 hover:bg-mist"
            >
              <Icon path="M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5Zm8 5h.01M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />
            </a>
            <Button href="#contact" ariaLabel="Free inspection and quote">Free Inspection & Quote</Button>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="relative isolate overflow-hidden bg-navy text-white">
          <img
            src={backdropSrc}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-[22%_center] sm:object-[26%_center] lg:object-[38%_32%]"
            loading="eager"
          />
          <div className="absolute inset-0 bg-navy/78" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/88 to-blue/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-navy/25" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(181,230,29,0.13),transparent_38%),radial-gradient(circle_at_84%_5%,rgba(22,95,168,0.5),transparent_42%)]" />
          <div className="container-shell section-shell relative grid items-center gap-10 py-20 sm:py-24 lg:grid-cols-[1.2fr_1fr] lg:py-28">
            <div className="reveal" style={{ animationDelay: '120ms' }}>
              <p className="mb-6 inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-lime">
                Dublin Waterproofing Specialists
              </p>
              <h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                Protect Your Property From Leaks, Damp & Water Damage
              </h1>
              <p className="mt-6 max-w-2xl text-base text-white/92 sm:text-lg">
                High-quality waterproofing solutions for roofs, balconies, bathrooms, basements, and commercial properties across Dublin and surrounding areas.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="#contact" ariaLabel="Get a free inspection">Get A Free Inspection</Button>
                <Button href="https://wa.me/353871372847" variant="secondary" ariaLabel="WhatsApp PrimeSeal">WhatsApp Us</Button>
                <Button href="tel:+353871372847" variant="secondary" ariaLabel="Call PrimeSeal">Call +353 87 137 2847</Button>
              </div>
            </div>

            <div className="reveal rounded-2xl border border-white/20 bg-white/12 p-6 shadow-lift backdrop-blur-md" style={{ animationDelay: '220ms' }}>
              <h2 className="text-xl font-bold text-lime">Trusted Waterproofing Team</h2>
              <ul className="mt-5 grid gap-3 text-sm sm:text-base">
                {[
                  'Dublin Based',
                  'Residential & Commercial',
                  'Long-Lasting Waterproofing Solutions',
                  'Fast Response',
                  'Free Inspection & Quote',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-lg bg-white/10 px-3 py-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-lime" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="services" className="section-shell bg-mist">
          <div className="container-shell">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue">Core Services</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">Specialist Waterproofing Services</h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <article key={service.title} className="reveal rounded-2xl border border-blue/15 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lift" style={{ animationDelay: `${index * 80}ms` }}>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy/80">{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section-shell bg-white">
          <div className="container-shell grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue">Why Choose PrimeSeal</p>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Built for Long-Term Protection, Not Short-Term Patches</h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy/80">
                PrimeSeal Waterproofing provides high-quality, long-lasting waterproofing and damp-proofing solutions for homes and businesses across Dublin and surrounding areas.
              </p>
            </div>
            <ul className="grid gap-3">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-center gap-3 rounded-xl border border-blue/15 bg-mist px-4 py-3 text-sm font-semibold sm:text-base">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-navy text-lime">✓</span>
                  {reason}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="process" className="section-shell relative isolate overflow-hidden bg-mist">
          <img
            src={backdropSrc}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-center opacity-10"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-mist/90" />
          <div className="container-shell relative">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue">Waterproofing Process</p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">A Clear 4-Step Route to Protection</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, index) => (
                <article key={step.title} className="rounded-2xl border border-blue/20 bg-white p-6 shadow-sm">
                  <p className="inline-flex rounded-full bg-navy px-3 py-1 text-xs font-bold tracking-[0.16em] text-lime">Step {index + 1}</p>
                  <h3 className="mt-4 text-lg font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm text-navy/75">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell bg-white">
          <div className="container-shell">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue">Project Showcase</p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Recent Waterproofing Work</h2>
            <p className="mt-4 max-w-3xl text-base text-navy/75 sm:text-lg">
              Real waterproofing and damp-proofing projects completed across Dublin and surrounding areas.
            </p>
            <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
              {gallery.map((item) => (
                <figure key={item.title} className="group mb-5 break-inside-avoid overflow-hidden rounded-2xl border border-blue/10 bg-white">
                  <div className="overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-auto transition duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <figcaption className="flex items-center justify-between gap-3 px-4 py-3">
                    <span className="text-sm font-semibold text-navy">{item.title}</span>
                    <span className="rounded-full bg-mist px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-blue">
                      {item.location}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell bg-mist">
          <div className="container-shell">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue">Testimonials</p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Trusted by Property Owners Across Dublin</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {testimonials.map((review) => (
                <article key={review.name} className="rounded-2xl border border-blue/15 bg-white p-6 shadow-sm">
                  <p className="text-sm leading-relaxed text-navy/80">“{review.text}”</p>
                  <p className="mt-5 text-sm font-bold text-blue">{review.name}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="section-shell bg-white">
          <div className="container-shell max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue">FAQ</p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Frequently Asked Questions</h2>
            <div className="mt-10 space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index
                return (
                  <article key={faq.question} className="rounded-2xl border border-blue/20 bg-mist px-5 py-4 transition duration-300 hover:border-blue/35">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                      className="flex w-full items-center justify-between gap-4 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="font-bold">{faq.question}</span>
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-navy text-lime">{isOpen ? '−' : '+'}</span>
                    </button>
                    <div className={`grid transition-all duration-300 ${isOpen ? 'mt-3 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                      <p className="overflow-hidden text-sm leading-relaxed text-navy/80">{faq.answer}</p>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="section-shell bg-navy text-white">
          <div className="container-shell relative isolate overflow-hidden rounded-3xl border border-white/15 bg-blue/25 p-8 sm:p-12">
            <img
              src={backdropSrc}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-30"
              loading="lazy"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy/85 to-blue/70" />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime">Free Inspection & Quote</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">Don’t Wait Until Small Problems Become Costly Damage</h2>
            <p className="mt-4 max-w-2xl text-white/90">
              Book a free inspection and protect your property with long-lasting waterproofing solutions.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="mailto:info@primesealwaterproof.com" ariaLabel="Request a free quote">Request A Free Quote</Button>
              <Button href="https://wa.me/353871372847" variant="secondary" ariaLabel="WhatsApp us now">WhatsApp Us</Button>
              <Button href="tel:+353871372847" variant="secondary" ariaLabel="Call now">Call Now</Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-navy py-12 text-white">
        <div className="container-shell grid gap-8 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <h3 className="text-2xl font-extrabold">PrimeSeal Waterproofing</h3>
            <p className="mt-4 max-w-md text-sm text-white/80">
              High-quality waterproofing and damp-proofing for homes and businesses across Dublin and surrounding areas.
            </p>
            <p className="mt-4 text-sm text-white/90">info@primesealwaterproof.com</p>
            <p className="text-sm text-white/90">+353 87 137 2847</p>
            <p className="text-sm text-white/90">Dublin & surrounding areas</p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-lime">Services</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/85">
              <li>Roof & Balcony Waterproofing</li>
              <li>Wet Rooms & Bathrooms</li>
              <li>Damp Proofing</li>
              <li>Leak Detection & Repairs</li>
              <li>Basements & Foundations</li>
              <li>Commercial Waterproofing</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-lime">Connect</h4>
            <div className="mt-4 flex gap-3">
              <a href="https://wa.me/353871372847" target="_blank" rel="noreferrer" className="rounded-lg border border-white/25 p-2 hover:bg-white/10" aria-label="WhatsApp">
                <Icon path="M16.7 14.4 17.8 20 12 16.8A8.9 8.9 0 1 1 21 12a8.9 8.9 0 0 1-4.3 7.6M8.4 7.7c-.2.4-.6 1.1-.6 2 0 .9.5 1.8.6 1.9.1.2 1.6 2.7 4 3.6 1.9.8 2.3.6 2.7.5.4-.1 1.2-.5 1.4-1 .2-.5.2-1 .1-1.1-.1-.1-.4-.2-.8-.4-.4-.2-.9-.5-1-.6-.2-.1-.4-.1-.6.1-.2.2-.7.8-.8.9-.2.2-.3.2-.6.1-.3-.2-1.2-.4-2.2-1.3-.8-.7-1.3-1.6-1.5-1.9-.2-.3 0-.4.1-.6.1-.1.3-.4.5-.6.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4Z" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61575446935350" target="_blank" rel="noreferrer" className="rounded-lg border border-white/25 p-2 hover:bg-white/10" aria-label="Facebook">
                <Icon path="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.6.4-1 1-1Z" />
              </a>
              <a href="https://www.instagram.com/primeseal_waterproofing/" target="_blank" rel="noreferrer" className="rounded-lg border border-white/25 p-2 hover:bg-white/10" aria-label="Instagram">
                <Icon path="M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5Zm8 5h.01M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />
              </a>
            </div>
            <p className="mt-6 text-xs text-white/60">© {new Date().getFullYear()} PrimeSeal Waterproofing. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/353871372847"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-lime text-navy shadow-lift transition duration-300 hover:scale-105"
      >
        <Icon path="M16.7 14.4 17.8 20 12 16.8A8.9 8.9 0 1 1 21 12a8.9 8.9 0 0 1-4.3 7.6M8.4 7.7c-.2.4-.6 1.1-.6 2 0 .9.5 1.8.6 1.9.1.2 1.6 2.7 4 3.6 1.9.8 2.3.6 2.7.5.4-.1 1.2-.5 1.4-1 .2-.5.2-1 .1-1.1-.1-.1-.4-.2-.8-.4-.4-.2-.9-.5-1-.6-.2-.1-.4-.1-.6.1-.2.2-.7.8-.8.9-.2.2-.3.2-.6.1-.3-.2-1.2-.4-2.2-1.3-.8-.7-1.3-1.6-1.5-1.9-.2-.3 0-.4.1-.6.1-.1.3-.4.5-.6.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4Z" className="h-7 w-7" />
      </a>
    </div>
  )
}

export default App
