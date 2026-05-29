import { siteConfig } from '../content/siteContent'
import { SocialIcon } from './Icons'

export default function FloatingWhatsApp() {
  return (
    <a
      href={siteConfig.socials.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#165FA8] text-white shadow-[0_12px_28px_-10px_rgba(22,95,168,0.55)] transition duration-300 hover:scale-110 hover:bg-[#1a6cbf] hover:shadow-[0_16px_36px_-10px_rgba(22,95,168,0.65)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue/40 focus-visible:ring-offset-2"
      style={{ animation: 'float-pulse 3s ease-in-out infinite' }}
    >
      <SocialIcon type="whatsapp" />
    </a>
  )
}
