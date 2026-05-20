import { ctaBlurb, siteConfig } from '../content/siteContent'
import { PrimaryButton, SecondaryButton } from './SiteButtons'

export default function CTAInlineStrip() {
  return (
    <div className="mt-10 rounded-2xl border border-navy/12 bg-mist px-5 py-5 sm:px-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <p className="max-w-[70ch] text-sm leading-relaxed text-navy/78 sm:text-base">{ctaBlurb}</p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <PrimaryButton href="/contact">Request Inspection</PrimaryButton>
          <SecondaryButton href={siteConfig.socials.whatsapp}>WhatsApp PrimeSeal</SecondaryButton>
        </div>
      </div>
    </div>
  )
}
