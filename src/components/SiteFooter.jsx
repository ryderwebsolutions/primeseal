import Link from 'next/link'
import { logoSrc, navLinks, serviceAreas, serviceLinks, siteConfig } from '../content/siteContent'
import { SocialIcon } from './Icons'

export default function SiteFooter() {
  return (
    <footer className="bg-[#0B1F3A] pt-14 pb-8 text-white">
      <div className="container-shell grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="inline-flex items-center gap-2.5" aria-label="PrimeSeal home">
            <img
              src={logoSrc}
              alt="PrimeSeal Waterproofing logo"
              className="h-12 w-auto object-contain brightness-0 invert"
              loading="lazy"
              width="428"
              height="192"
            />
            <div>
              <p className="font-display text-[1.3rem] font-semibold uppercase tracking-[0.07em] text-white">PrimeSeal</p>
              <p className="text-[0.55rem] uppercase tracking-[0.16em] text-white/50">Waterproofing Specialists</p>
            </div>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-white/62">
            Reliable waterproofing for homes, landlords, and commercial properties across Dublin.
          </p>
          <div className="mt-5 space-y-2 text-sm text-white/65">
            <a href={siteConfig.phoneHref} className="flex items-center gap-2 transition hover:text-[#9FD0F8]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              {siteConfig.phone}
            </a>
            <a href={siteConfig.socials.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-2 transition hover:text-[#9FD0F8]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>
          <div className="mt-4 flex gap-2">
            <a href={siteConfig.socials.facebook} target="_blank" rel="noreferrer" className="social-chip" aria-label="Facebook">
              <SocialIcon type="facebook" />
            </a>
            <a href={siteConfig.socials.instagram} target="_blank" rel="noreferrer" className="social-chip" aria-label="Instagram">
              <SocialIcon type="instagram" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#6BB6F2]">Services</h4>
          <ul className="mt-3.5 space-y-2 text-sm text-white/65">
            {serviceLinks.map((service) => (
              <li key={service.label}>
                <Link href={service.href} className="transition hover:text-[#9FD0F8]">
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#6BB6F2]">Quick Links</h4>
          <ul className="mt-3.5 space-y-2 text-sm text-white/65">
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="transition hover:text-[#9FD0F8]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <h4 className="mt-6 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#6BB6F2]">Areas Covered</h4>
          <ul className="mt-3.5 space-y-1.5 text-sm text-white/55">
            {serviceAreas.slice(0, 6).map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#6BB6F2]">Contact</h4>
          <ul className="mt-3.5 space-y-2 text-sm text-white/65">
            <li>
              <a href={siteConfig.phoneHref} className="transition hover:text-[#9FD0F8]">
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a href={siteConfig.emailHref} className="transition hover:text-[#9FD0F8]">
                {siteConfig.email}
              </a>
            </li>
            <li>{siteConfig.location}</li>
            <li>Mon–Fri: 8:00–18:00</li>
            <li>Sat: 9:00–14:00</li>
          </ul>
          <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs font-semibold text-white">Free Inspections Available</p>
            <p className="mt-1 text-xs leading-relaxed text-white/60">
              Call or WhatsApp to book a free on-site assessment across Dublin.
            </p>
            <a
              href="/contact"
              className="mt-3 inline-flex text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[#6BB6F2] transition hover:text-white"
            >
              Book Inspection →
            </a>
          </div>
        </div>
      </div>

      <div className="container-shell mt-10 border-t border-white/10 pt-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/42">
            © {new Date().getFullYear()} {siteConfig.shortName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-3 text-[0.6rem] uppercase tracking-[0.12em] text-white/38">
            {serviceAreas.slice(0, 5).map((area) => (
              <span key={area}>{area}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
