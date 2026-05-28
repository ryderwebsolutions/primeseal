import Link from 'next/link'
import { navLinks, serviceAreas, serviceLinks, siteConfig } from '../content/siteContent'
import { SocialIcon } from './Icons'

export default function SiteFooter() {
  return (
    <footer className="border-t border-navy/12 bg-navy py-14 text-white">
      <div className="container-shell grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-[1.85rem] uppercase tracking-[0.07em] text-white">{siteConfig.name}</p>
          <p className="mt-3 text-sm leading-relaxed text-white/72">
            Reliable waterproofing contractor solutions for homeowners, landlords, and commercial properties across Dublin.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-[#9FD0F8]">Services</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/74">
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
          <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-[#9FD0F8]">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/74">
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="transition hover:text-[#9FD0F8]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-[#9FD0F8]">Contact & Hours</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/74">
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
      <div className="container-shell mt-10 border-t border-white/16 pt-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/58">© {new Date().getFullYear()} {siteConfig.shortName}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.12em] text-white/50">
            {serviceAreas.slice(0, 6).map((area) => (
              <span key={area}>{area}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
