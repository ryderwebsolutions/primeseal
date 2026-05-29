import PageHero from '../../src/components/PageHero'
import { siteConfig, serviceAreas } from '../../src/content/siteContent'
import { PrimaryButton, SecondaryButton } from '../../src/components/SiteButtons'
import { SocialIcon } from '../../src/components/Icons'

export const metadata = {
  title: 'Contact PrimeSeal Waterproofing',
  description:
    'Contact PrimeSeal for waterproofing inspections and leak assessments in Dublin. Reach us by phone, WhatsApp, email, or online enquiry form.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Request Your Waterproofing Inspection"
        summary="Tell PrimeSeal about your roof, balcony, basement, wet room, or commercial waterproofing issue and we will respond with clear next steps."
      />

      <section className="section-shell bg-navy text-white">
        <div className="container-shell grid gap-8 rounded-3xl border border-white/15 bg-navy px-6 py-10 sm:px-10 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.16em] text-[#9FD0F8]">
              Free Inspections & Written Quotes
            </p>
            <h2 className="font-display mt-4 text-3xl font-semibold uppercase leading-[1.08] sm:text-4xl">
              Speak directly with PrimeSeal
            </h2>
            <p className="mt-4 max-w-xl text-white/80">
              PrimeSeal personally reviews every enquiry.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryButton href={siteConfig.phoneHref}>Call {siteConfig.phone}</PrimaryButton>
              <SecondaryButton href={siteConfig.socials.whatsapp} className="border-white/45 bg-white text-navy hover:bg-white/92">WhatsApp</SecondaryButton>
              <SecondaryButton href={siteConfig.emailHref} className="border-white/45 bg-white text-navy hover:bg-white/92">Email</SecondaryButton>
            </div>

            <div className="mt-8 space-y-2 text-sm text-white/84 sm:text-base">
              <p><span className="font-semibold text-white">Phone:</span> {siteConfig.phone}</p>
              <p><span className="font-semibold text-white">Email:</span> {siteConfig.email}</p>
              <p><span className="font-semibold text-white">Service Base:</span> {siteConfig.location}</p>
            </div>

            <div className="mt-8 rounded-2xl border border-white/20 bg-white/5 p-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#9FD0F8]">Opening Hours</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-white/82">
                <li>Monday to Friday: 8:00 - 18:00</li>
                <li>Saturday: 9:00 - 14:00</li>
                <li>Sunday: By appointment</li>
              </ul>
            </div>

            <div className="mt-4 flex gap-2">
              <a href={siteConfig.socials.whatsapp} target="_blank" rel="noreferrer" className="social-chip" aria-label="WhatsApp">
                <SocialIcon type="whatsapp" />
              </a>
              <a href={siteConfig.socials.instagram} target="_blank" rel="noreferrer" className="social-chip" aria-label="Instagram">
                <SocialIcon type="instagram" />
              </a>
              <a href={siteConfig.socials.facebook} target="_blank" rel="noreferrer" className="social-chip" aria-label="Facebook">
                <SocialIcon type="facebook" />
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/5 p-6">
            <h3 className="font-display text-xl font-semibold uppercase text-white">Send an Enquiry</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/80">Share project details and photos for a faster assessment.</p>

            <form className="mt-5 space-y-3" action={siteConfig.emailHref} method="post" encType="multipart/form-data">
              <input type="text" name="name" required placeholder="Name" className="w-full rounded-xl border border-white/30 bg-white/95 px-3 py-2.5 text-sm text-navy placeholder:text-navy/50" />
              <input type="tel" name="phone" required placeholder="Phone" className="w-full rounded-xl border border-white/30 bg-white/95 px-3 py-2.5 text-sm text-navy placeholder:text-navy/50" />
              <input type="email" name="email" required placeholder="Email" className="w-full rounded-xl border border-white/30 bg-white/95 px-3 py-2.5 text-sm text-navy placeholder:text-navy/50" />
              <input type="text" name="location" required placeholder="Location" className="w-full rounded-xl border border-white/30 bg-white/95 px-3 py-2.5 text-sm text-navy placeholder:text-navy/50" />
              <input type="text" name="issueType" required placeholder="Type of Issue" className="w-full rounded-xl border border-white/30 bg-white/95 px-3 py-2.5 text-sm text-navy placeholder:text-navy/50" />
              <input type="file" name="photos" accept="image/*" className="w-full rounded-xl border border-white/30 bg-white/95 px-3 py-2.5 text-sm text-navy file:mr-3 file:rounded-full file:border-0 file:bg-[#165FA8] file:px-3 file:py-1.5 file:text-xs file:font-semibold file:uppercase file:tracking-[0.08em] file:text-white" />
              <textarea name="message" rows={4} placeholder="Message" className="w-full rounded-xl border border-white/30 bg-white/95 px-3 py-2.5 text-sm text-navy placeholder:text-navy/50" />
              <button
                type="submit"
                className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-[#165FA8] px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.08em] text-white transition duration-300 hover:bg-[#1a6cbf]"
              >
                Submit Enquiry
              </button>
            </form>

            <div className="mt-6 rounded-xl border border-white/20 bg-white/5 px-4 py-4 text-sm text-white/82">
              <p className="font-semibold text-white">Areas Covered</p>
              <p className="mt-2 leading-relaxed">{serviceAreas.slice(0, 8).join(', ')}, and surrounding Dublin locations.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
