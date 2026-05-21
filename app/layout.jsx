import '../src/index.css'
import { Inter, Rajdhani } from 'next/font/google'
import { siteConfig } from '../src/siteConfig'
import FloatingWhatsApp from '../src/components/FloatingWhatsApp'
import SiteFooter from '../src/components/SiteFooter'
import SiteHeader from '../src/components/SiteHeader'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
})

const rajdhani = Rajdhani({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rajdhani',
  weight: ['500', '600', '700'],
})

export const metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: `${siteConfig.name} | Dublin Waterproofing Specialists`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    'Reliable waterproofing specialists for roofs, balconies, basements, wet rooms, and commercial properties across Dublin.',
  keywords: [
    siteConfig.name,
    'waterproofing Dublin',
    'roof waterproofing',
    'balcony waterproofing',
    'basement waterproofing',
    'commercial waterproofing Dublin',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: '/',
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Dublin Waterproofing Specialists`,
    description:
      'Protecting Dublin properties with specialist waterproofing systems and professional workmanship.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} social preview image`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | Dublin Waterproofing Specialists`,
    description:
      'Reliable waterproofing services across Dublin: roofs, balconies, basements, and commercial sites.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
  },
}

export const viewport = {
  themeColor: '#030813',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${rajdhani.variable} antialiased`}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
