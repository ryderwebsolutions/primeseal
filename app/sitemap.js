import { siteConfig } from '../src/siteConfig'

export default function sitemap() {
  return [
    {
      url: siteConfig.domain,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}
