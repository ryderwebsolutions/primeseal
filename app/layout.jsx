import '../src/index.css'
import { Manrope, Rajdhani } from 'next/font/google'
import { siteConfig } from '../src/siteConfig'

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
  weight: ['400', '500', '600', '700', '800'],
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
    default: `${siteConfig.name} | Premium Waterproofing Specialists`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    'Premium waterproofing specialists for roofs, balconies, basements, wet rooms, and commercial projects across Dublin and Ireland.',
  keywords: [
    siteConfig.name,
    'waterproofing Dublin',
    'roof waterproofing',
    'balcony waterproofing',
    'basement waterproofing',
    'commercial waterproofing Ireland',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: '/',
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Premium Waterproofing Specialists`,
    description:
      'Protecting properties across Ireland with premium waterproofing systems and specialist workmanship.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description:
      'Premium waterproofing services across Dublin and Ireland: roofs, balconies, basements, and commercial sites.',
    images: ['/opengraph-image'],
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
      <body className={`${manrope.variable} ${rajdhani.variable} antialiased`}>{children}</body>
    </html>
  )
}
