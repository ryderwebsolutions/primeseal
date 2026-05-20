import { siteConfig } from '../content/siteContent'
import { SocialIcon } from './Icons'

export default function FloatingWhatsApp() {
  return (
    <a
      href={siteConfig.socials.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#6BB6F2] text-navy shadow-[0_14px_26px_-14px_rgba(11,31,58,0.42)] transition duration-300 hover:scale-105 hover:bg-[#7CC0F5]"
    >
      <SocialIcon type="whatsapp" />
    </a>
  )
}
