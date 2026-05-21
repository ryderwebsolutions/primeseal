import ServiceSeoPage from '../../src/components/ServiceSeoPage'
import { serviceSeoPages } from '../../src/content/siteContent'

const route = '/balcony-waterproofing-dublin'
const page = serviceSeoPages[route]

export const metadata = {
  title: page.title,
  description: page.heroSummary,
  keywords: page.keywords,
  alternates: { canonical: route },
}

export default function BalconyWaterproofingDublinPage() {
  return <ServiceSeoPage page={page} />
}
