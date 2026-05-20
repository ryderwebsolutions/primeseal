import { siteConfig } from '../src/siteConfig'

export default function sitemap() {
  const routes = [
    '',
    '/services',
    '/projects',
    '/reviews',
    '/areas-covered',
    '/about',
    '/contact',
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
