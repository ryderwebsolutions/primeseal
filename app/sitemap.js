import { siteConfig } from '../src/siteConfig'

export default function sitemap() {
  const routes = [
    '',
    '/services',
    '/projects',
    '/about',
    '/faq',
    '/contact',
    '/areas-covered',
    '/reviews',
    '/roof-waterproofing-dublin',
    '/balcony-waterproofing-dublin',
    '/flat-roof-waterproofing-dublin',
    '/basement-waterproofing-dublin',
    '/wet-room-waterproofing-dublin',
    '/commercial-waterproofing-dublin',
    '/liquid-waterproofing-dublin',
    '/leak-repairs-dublin',
    '/flooring-dublin',
  ]

  return [
    ...routes.map((route, index) => ({
      url: `${siteConfig.domain}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: index === 0 ? 1 : 0.8,
    })),
  ]
}
