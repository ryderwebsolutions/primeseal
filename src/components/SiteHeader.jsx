"use client"

import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { logoSrc, navLinks, siteConfig } from '../content/siteContent'
import { Icon, SocialIcon } from './Icons'
import { PrimaryButton } from './SiteButtons'

export default function SiteHeader() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? 'border-b border-navy/12 bg-white/94 py-2 shadow-[0_12px_30px_-24px_rgba(11,31,58,0.55)] backdrop-blur-md xl:py-1.5'
          : 'bg-white/88 py-2.5 backdrop-blur-sm xl:py-2'
      }`}
    >
      <div className="container-shell flex items-center justify-between gap-3 lg:gap-4">
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="flex shrink-0 items-center gap-2 sm:gap-2.5 xl:min-w-[250px]"
          aria-label="PrimeSeal Waterproofing home"
        >
          <img
            src={logoSrc}
            alt="PrimeSeal Waterproofing logo"
            className="h-14 w-auto object-contain sm:h-[4.8rem] xl:h-[4.4rem]"
            loading="eager"
            decoding="async"
            width="428"
            height="192"
          />
          <div className="hidden sm:block">
            <p className="font-display text-[1.45rem] font-semibold uppercase tracking-[0.07em] text-navy lg:text-[1.58rem] xl:text-[1.54rem]">PrimeSeal</p>
            <p className="text-[0.63rem] uppercase tracking-[0.16em] text-navy/64">Waterproofing Specialists</p>
          </div>
        </Link>

        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-5 xl:flex">
          {navLinks.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`whitespace-nowrap text-[0.66rem] font-semibold uppercase tracking-[0.12em] transition duration-300 ${
                  active ? 'text-blue' : 'text-navy/80 hover:text-blue'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 xl:flex">
          <a
            href={siteConfig.phoneHref}
            className="text-xs font-semibold uppercase tracking-[0.11em] text-navy/74 transition hover:text-blue"
            aria-label={`Call PrimeSeal Waterproofing at ${siteConfig.phone}`}
          >
            {siteConfig.phone}
          </a>
          <PrimaryButton href="/contact" className="min-h-[44px] px-4 py-2 text-[0.64rem]">Request Free Inspection</PrimaryButton>
        </div>

        <div className="flex items-center gap-1.5 xl:hidden">
          <a
            href={siteConfig.phoneHref}
            aria-label={`Call PrimeSeal Waterproofing at ${siteConfig.phone}`}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-navy/16 bg-white text-blue shadow-[0_12px_20px_-16px_rgba(11,31,58,0.35)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#edf7ff]"
          >
            <SocialIcon type="phone" />
          </a>
          <a
            href={siteConfig.socials.whatsapp}
            target="_blank"
            rel="noreferrer"
            aria-label="Open PrimeSeal WhatsApp in a new tab"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-navy/16 bg-white text-blue shadow-[0_12px_20px_-16px_rgba(11,31,58,0.35)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#edf7ff]"
          >
            <SocialIcon type="whatsapp" />
          </a>
          <a
            href={siteConfig.socials.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Open PrimeSeal Instagram in a new tab"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-navy/16 bg-white text-blue shadow-[0_12px_20px_-16px_rgba(11,31,58,0.35)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#edf7ff]"
          >
            <SocialIcon type="instagram" />
          </a>
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-navy/20 bg-white text-navy shadow-[0_10px_20px_-16px_rgba(11,31,58,0.45)]"
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
            transition={{ duration: 0.24 }}
            className="container-shell mt-3 rounded-2xl border border-navy/10 bg-white p-4 shadow-[0_18px_34px_-24px_rgba(11,31,58,0.58)] xl:hidden"
          >
            <div className="space-y-2.5">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-xl border border-navy/10 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.13em] text-navy/82 transition hover:border-blue/35 hover:text-blue"
                >
                  {item.label}
                </Link>
              ))}
              <PrimaryButton href="/contact">Request Free Inspection</PrimaryButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
