import PageHero from '../../src/components/PageHero'
import { siteConfig } from '../../src/content/siteContent'
import { PrimaryButton, SecondaryButton } from '../../src/components/SiteButtons'
import { SocialIcon } from '../../src/components/Icons'

export const metadata = {
  title: 'Contact PrimeSeal Waterproofing',
  description:
    'Request a free waterproofing inspection in Dublin. Contact PrimeSeal by phone, email, or WhatsApp for leak assessments and clear written quotes.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Book a Free Leak Assessment"
        summary="Tell us about your roof, balcony, basement, or damp issue and we will provide a clear next-step plan with a written quote."
      />

      <section className="section-shell bg-navy text-white">
        <div className="container-shell grid gap-8 rounded-3xl border border-white/15 bg-navy px-6 py-10 sm:px-10 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.16em] text-[#9FD0F8]">
              Free Inspections & Quotes
            </p>
            <h2 className="font-display mt-4 text-3xl font-semibold uppercase leading-[1.08] sm:text-4xl">
              Need help with a leak or damp problem?
            </h2>
            <p className="mt-4 max-w-xl text-white/80">
              Book a free inspection and we will assess the issue, explain the best repair option, and provide a clear written quote.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryButton href={siteConfig.emailHref}>Request Free Inspection</PrimaryButton>
              <SecondaryButton href={siteConfig.phoneHref} className="border-white/45 bg-white text-navy hover:bg-white/92">Call Now</SecondaryButton>
              <SecondaryButton href={siteConfig.socials.whatsapp} className="border-white/45 bg-white text-navy hover:bg-white/92">WhatsApp Us</SecondaryButton>
            </div>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/5 p-6">
            <h3 className="font-display text-xl font-semibold uppercase text-white">Request Free Leak Assessment</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/80">Upload photos of the issue for a faster assessment.</p>

            <form className="mt-5 space-y-3" action={siteConfig.emailHref} method="post" encType="multipart/form-data">
              <input type="text" name="name" required placeholder="Name" className="w-full rounded-xl border border-white/30 bg-white/95 px-3 py-2.5 text-sm text-navy placeholder:text-navy/50" />
              <input type="tel" name="phone" required placeholder="Phone Number" className="w-full rounded-xl border border-white/30 bg-white/95 px-3 py-2.5 text-sm text-navy placeholder:text-navy/50" />
              <input type="email" name="email" required placeholder="Email" className="w-full rounded-xl border border-white/30 bg-white/95 px-3 py-2.5 text-sm text-navy placeholder:text-navy/50" />
              <textarea name="message" rows={4} placeholder="Message" className="w-full rounded-xl border border-white/30 bg-white/95 px-3 py-2.5 text-sm text-navy placeholder:text-navy/50" />
              <button
                type="submit"
                className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-[#6BB6F2] px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.08em] text-navy transition duration-300 hover:bg-[#7CC0F5]"
              >
                Request Free Leak Assessment
              </button>
            </form>

            <div className="mt-6 space-y-1.5 text-sm text-white/82">
              <p>Phone: {siteConfig.phone}</p>
              <p>Email: {siteConfig.email}</p>
              <p>Location: {siteConfig.location}</p>
            </div>

            <div className="mt-4 flex gap-2">
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
    </>
  )
}
