import Link from 'next/link'

export function PrimaryButton({ href, children, className = '' }) {
  const isExternal = href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:')

  const classes = `inline-flex min-h-[50px] w-full items-center justify-center rounded-xl bg-[#165FA8] px-6 py-3 text-center text-[0.72rem] font-semibold uppercase tracking-[0.13em] text-white shadow-[0_12px_30px_-20px_rgba(22,95,168,0.55)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#1a6cbf] hover:shadow-[0_22px_34px_-20px_rgba(22,95,168,0.65)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue/45 focus-visible:ring-offset-2 sm:w-auto ${className}`

  if (isExternal) {
    return (
      <a href={href} className={classes} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  )
}

export function SecondaryButton({ href, children, className = '' }) {
  const isExternal = href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:')

  const classes = `inline-flex min-h-[50px] w-full items-center justify-center rounded-xl border border-navy/20 bg-white px-6 py-3 text-center text-[0.72rem] font-semibold uppercase tracking-[0.13em] text-navy transition duration-300 hover:-translate-y-0.5 hover:border-blue/35 hover:bg-[#f1f7fc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue/30 focus-visible:ring-offset-2 sm:w-auto ${className}`

  if (isExternal) {
    return (
      <a href={href} className={classes} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  )
}
