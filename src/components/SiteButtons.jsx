import Link from 'next/link'

export function PrimaryButton({ href, children, className = '' }) {
  const isExternal = href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:')

  const classes = `inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-[#6BB6F2] px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.12em] text-navy transition duration-300 hover:-translate-y-0.5 hover:bg-[#7CC0F5] hover:shadow-[0_14px_24px_-14px_rgba(53,99,143,0.45)] sm:w-auto ${className}`

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

  const classes = `inline-flex min-h-[48px] w-full items-center justify-center rounded-full border border-navy/22 bg-white px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.12em] text-navy transition duration-300 hover:-translate-y-0.5 hover:bg-mist sm:w-auto ${className}`

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
