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
        scrolled ? 'border-b border-navy/10 bg-white/95 py-3' : 'bg-white/90 py-4'
      }`}
    >
      <div className="container-shell flex items-center justify-between gap-3 lg:gap-4 xl:gap-5">
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="flex shrink-0 items-center gap-2.5 sm:gap-3 xl:min-w-[380px]"
          aria-label="PrimeSeal Waterproofing home"
        >
          <img
            src={logoSrc}
            alt="PrimeSeal Waterproofing logo"
            className="h-20 w-auto object-contain sm:h-28"
            loading="eager"
            decoding="async"
            width="428"
            height="192"
          />
          <div className="hidden sm:block">
            <p className="font-display text-2xl font-semibold uppercase tracking-[0.08em] text-navy lg:text-[1.9rem]">PrimeSeal</p>
            <p className="text-sm uppercase tracking-[0.14em] text-navy/60">Waterproofing Specialists</p>
          </div>
        </Link>

        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-2.5 xl:flex 2xl:gap-3">
          {navLinks.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`whitespace-nowrap text-[10px] uppercase tracking-[0.05em] transition duration-300 2xl:text-xs ${
                  active ? 'text-blue' : 'text-navy/85 hover:text-blue'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden shrink-0 items-center xl:flex">
          <PrimaryButton href="/contact" className="px-5">Request Free Inspection</PrimaryButton>
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <a
            href={siteConfig.phoneHref}
            aria-label={`Call PrimeSeal Waterproofing at ${siteConfig.phone}`}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/70 bg-white/82 text-blue shadow-[0_10px_20px_-16px_rgba(11,31,58,0.35)] backdrop-blur-[2px] transition duration-300 hover:-translate-y-0.5 hover:bg-[#edf7ff]"
          >
            <SocialIcon type="phone" />
          </a>
          <a
            href={siteConfig.socials.whatsapp}
            target="_blank"
            rel="noreferrer"
            aria-label="Open PrimeSeal WhatsApp in a new tab"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/70 bg-white/82 text-blue shadow-[0_10px_20px_-16px_rgba(11,31,58,0.35)] backdrop-blur-[2px] transition duration-300 hover:-translate-y-0.5 hover:bg-[#edf7ff]"
          >
            <SocialIcon type="whatsapp" />
          </a>
          <a
            href={siteConfig.socials.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Open PrimeSeal Instagram in a new tab"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/70 bg-white/82 text-blue shadow-[0_10px_20px_-16px_rgba(11,31,58,0.35)] backdrop-blur-[2px] transition duration-300 hover:-translate-y-0.5 hover:bg-[#edf7ff]"
          >
            <SocialIcon type="instagram" />
          </a>
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-navy/20 bg-white text-navy"
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
            className="container-shell mt-4 rounded-2xl border border-navy/10 bg-white p-5 shadow-sm xl:hidden"
          >
            <div className="space-y-3">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-xl border border-navy/10 px-4 py-3 text-sm uppercase tracking-[0.12em] text-navy/80 transition hover:border-blue/35 hover:text-blue"
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
