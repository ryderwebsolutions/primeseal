import App from '../src/App'
import { siteConfig } from '../src/siteConfig'

export default function Page() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': `${siteConfig.domain}/#business`,
        name: siteConfig.name,
        image: `${siteConfig.domain}/opengraph-image`,
        url: siteConfig.domain,
        telephone: siteConfig.phone.replace(/\s+/g, ''),
        email: siteConfig.email,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Dublin',
          addressCountry: 'IE',
        },
        areaServed: siteConfig.areaServed,
        priceRange: '$$',
      },
      {
        '@type': 'Service',
        '@id': `${siteConfig.domain}/#service`,
        name: 'Premium Waterproofing Services',
        provider: {
          '@id': `${siteConfig.domain}/#business`,
        },
        areaServed: siteConfig.areaServed,
        serviceType: [
          'Roof Waterproofing',
          'Balcony Waterproofing',
          'Basement Waterproofing',
          'Commercial Waterproofing',
        ],
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <App />
    </>
  )
}
