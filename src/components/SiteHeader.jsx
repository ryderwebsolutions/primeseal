"use client"

import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { logoSrc, navLinks, siteConfig } from '../content/siteContent'
import { Icon, SocialIcon } from './Icons'
import { PrimaryButton } from './SiteButtons'

export default function SiteHeader() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const headerRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const header = headerRef.current
    if (!header) return
    const setVar = () =>
      document.documentElement.style.setProperty('--header-h', `${header.offsetHeight}px`)
    setVar()
    window.addEventListener('resize', setVar)
    return () => window.removeEventListener('resize', setVar)
  }, [])

  return (
    <header ref={headerRef} className="fixed left-0 top-0 z-50 w-full">
      {/* Announcement bar */}
      <div className="bg-[#0B1F3A] py-1.5">
        <div className="container-shell flex items-center justify-between gap-4">
          <p className="min-w-0 overflow-hidden text-[0.62rem] font-semibold uppercase tracking-[0.13em] text-white sm:text-[0.65rem]">
            <span className="whitespace-nowrap">Dublin Waterproofing Specialists</span>
            <span className="hidden sm:inline">
              <span className="mx-2 text-[#6BB6F2]">•</span>
              Roofs • Balconies • Basements • Wet Rooms
            </span>
          </p>
          <div className="flex shrink-0 items-center gap-3">
            <a
              href="/contact"
              className="hidden text-[0.62rem] font-semibold tracking-[0.08em] text-[#9FD0F8] transition hover:text-white lg:inline"
              aria-label="Request a free waterproofing inspection"
            >
              Free Inspection →
            </a>
            <span className="hidden h-3 w-px bg-white/20 lg:inline-block" aria-hidden="true" />
            <a
              href={siteConfig.phoneHref}
              className="text-[0.62rem] font-semibold tracking-[0.08em] text-white transition hover:text-[#9FD0F8]"
              aria-label={`Call ${siteConfig.phone}`}
            >
              {siteConfig.phone}
            </a>
            <span className="h-3 w-px bg-white/20" aria-hidden="true" />
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="PrimeSeal Instagram"
              className="text-white/70 transition hover:text-[#9FD0F8]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a
              href={siteConfig.socials.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="PrimeSeal Facebook"
              className="text-white/70 transition hover:text-[#9FD0F8]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.931-1.956 1.886v2.269h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`w-full transition-all duration-500 ${
          scrolled
            ? 'border-b border-navy/12 bg-white/96 py-2 shadow-[0_12px_30px_-24px_rgba(11,31,58,0.5)] backdrop-blur-md xl:py-1.5'
            : 'bg-white/92 py-2.5 backdrop-blur-sm xl:py-2'
        }`}
      >
        <div className="container-shell flex items-center justify-between gap-3 lg:gap-4">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="flex shrink-0 items-center gap-2 sm:gap-2.5 xl:min-w-[240px]"
            aria-label="PrimeSeal Waterproofing home"
          >
            <img
              src={logoSrc}
              alt="PrimeSeal Waterproofing logo"
              className="h-14 w-auto object-contain sm:h-16 xl:h-[3.8rem]"
              loading="eager"
              decoding="async"
              width="428"
              height="192"
            />
            <div className="hidden sm:block">
              <p className="font-display text-[1.35rem] font-semibold uppercase tracking-[0.07em] text-navy lg:text-[1.48rem] xl:text-[1.44rem]">PrimeSeal</p>
              <p className="text-[0.58rem] uppercase tracking-[0.16em] text-navy/58">Waterproofing Specialists</p>
            </div>
          </Link>

          <nav className="hidden min-w-0 flex-1 items-center justify-center gap-5 xl:flex">
            {navLinks.map((item) => {
              const active = pathname === item.href
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative whitespace-nowrap text-[0.64rem] font-semibold uppercase tracking-[0.12em] transition duration-300 after:absolute after:-bottom-0.5 after:left-0 after:h-[1.5px] after:w-0 after:bg-blue after:transition-all after:duration-300 hover:after:w-full ${
                    active ? 'text-blue after:w-full' : 'text-navy/78 hover:text-blue'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <div className="hidden shrink-0 items-center gap-3 xl:flex">
            <a
              href={siteConfig.phoneHref}
              className="flex items-center gap-1.5 text-xs font-semibold text-navy/68 transition hover:text-blue"
              aria-label={`Call PrimeSeal at ${siteConfig.phone}`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              <span className="text-[0.63rem] tracking-[0.08em]">{siteConfig.phone}</span>
            </a>
            <PrimaryButton href="/contact" className="min-h-[42px] px-4 py-2 text-[0.62rem]">
              Request Free Inspection
            </PrimaryButton>
          </div>

          <div className="flex items-center gap-1.5 xl:hidden">
            <a
              href={siteConfig.phoneHref}
              aria-label={`Call PrimeSeal at ${siteConfig.phone}`}
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-navy/16 bg-white text-blue shadow-[0_10px_18px_-16px_rgba(11,31,58,0.32)] transition duration-300 hover:-translate-y-0.5"
            >
              <SocialIcon type="phone" />
            </a>
            <a
              href={siteConfig.socials.whatsapp}
              target="_blank"
              rel="noreferrer"
              aria-label="Open PrimeSeal WhatsApp"
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-navy/16 bg-white text-blue shadow-[0_10px_18px_-16px_rgba(11,31,58,0.32)] transition duration-300 hover:-translate-y-0.5"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-navy/18 bg-white text-navy shadow-[0_10px_18px_-16px_rgba(11,31,58,0.4)]"
            >
              <Icon path={menuOpen ? 'M6 6l12 12M18 6 6 18' : 'M4 7h16M4 12h16M4 17h16'} />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22 }}
              className="container-shell mt-2.5 rounded-2xl border border-navy/10 bg-white p-4 shadow-[0_18px_34px_-24px_rgba(11,31,58,0.55)] xl:hidden"
            >
              <div className="space-y-2">
                {navLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block rounded-xl border px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.13em] transition hover:border-blue/30 hover:text-blue ${
                      pathname === item.href ? 'border-blue/25 text-blue' : 'border-navy/10 text-navy/80'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <PrimaryButton href="/contact" className="mt-1">Request Free Inspection</PrimaryButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
