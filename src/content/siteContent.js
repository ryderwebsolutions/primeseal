import { serviceAreas, siteConfig } from '../siteConfig'

export const logoSrc = '/images/primeseal-logo-transparent.png'

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Areas Covered', href: '/areas-covered' },
  { label: 'Why PrimeSeal', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export const heroServices = [
  'Roof Waterproofing',
  'Balcony Waterproofing',
  'Basement Waterproofing',
  'Wet Room Tanking',
  'Flat Roof Systems',
  'Commercial Waterproofing',
]

export const trustBarItems = [
  'Fully Insured',
  'Dublin-Based Specialists',
  'Residential & Commercial Projects',
  'Long-Term Waterproofing Systems',
  'Free Leak Assessments',
  'Warranty Available On Selected Works',
]

export const serviceGroups = [
  {
    heading: 'Residential & Structural Systems',
    items: [
      {
        title: 'Roof Waterproofing',
        text: 'Torch-on and liquid systems for long-term weather protection.',
      },
      {
        title: 'Balcony Waterproofing',
        text: 'Membrane detailing for exposed balcony perimeters and outlets.',
      },
      {
        title: 'Basement Waterproofing',
        text: 'Sub-structure protection against persistent seepage and pressure.',
      },
      {
        title: 'Flat Roof Systems',
        text: 'Complete flat roof waterproofing upgrades with durable finishes.',
      },
    ],
  },
  {
    heading: 'Specialist Protection Services',
    items: [
      {
        title: 'Wet Room Waterproofing',
        text: 'Professional tanking and transitions for leak-proof wet areas.',
      },
      {
        title: 'Liquid Waterproofing',
        text: 'Seamless liquid membrane application for complex detailing zones.',
      },
      {
        title: 'Leak Prevention',
        text: 'Survey-led prevention work focused on stopping future failures.',
      },
      {
        title: 'Commercial Waterproofing',
        text: 'Reliable systems for apartment blocks, retail sites, and facilities.',
      },
    ],
  },
]

export const whyChooseItems = [
  'Long-lasting waterproofing systems',
  'Specialist leak prevention expertise',
  'Clean professional workmanship',
  'Fast inspections across Dublin',
  'Residential & commercial capability',
  'Solutions designed to prevent repeat failures',
  'Reliable communication throughout projects',
]

export const projectItems = [
  {
    title: 'Balcony Waterproofing',
    location: 'South Dublin',
    src: '/clean-balcony-before-after.jpeg',
    problem: 'Water ingress and worn waterproofing surface.',
    solution: 'Liquid waterproofing membrane system applied with edge sealing.',
    result: 'Long-term waterproof protection with clean durable finish.',
  },
  {
    title: 'Flat Roof Waterproofing',
    location: 'North Dublin',
    src: '/clean-garden-before-after.jpeg',
    problem: 'Standing water and failed waterproofing causing ongoing damp risk.',
    solution: 'Surface prepared and new membrane system installed with proper drainage detailing.',
    result: 'Sealed surface with improved water run-off and long-term protection.',
  },
  {
    title: 'Roof Edge Waterproofing',
    location: 'West Dublin',
    src: '/clean-roof-before-after.jpeg',
    problem: 'Exposed roof edge showing weathered and failing protection layers.',
    solution: 'Edge rebuilt and waterproofed using a durable liquid membrane system.',
    result: 'Clean professional finish with reliable leak prevention at critical edges.',
  },
]

export const showcaseItems = [
  {
    label: 'Roof Waterproofing',
    src: '/media/videos/site-01.mp4',
    type: 'video',
    poster: '/media/images/project-06.jpeg',
  },
  {
    label: 'Flat Roof Waterproofing',
    src: '/media/images/project-08.jpeg',
    type: 'image',
  },
  {
    label: 'Balcony Systems',
    src: '/media/images/project-05.jpeg',
    type: 'image',
  },
  {
    label: 'Flat Roof Work',
    src: '/media/videos/site-03.mp4',
    type: 'video',
    poster: '/media/images/project-04.jpeg',
  },
  {
    label: 'Commercial Projects',
    src: '/media/images/project-11.jpeg',
    type: 'image',
  },
  {
    label: 'Liquid Waterproofing',
    src: '/media/videos/site-06.mp4',
    type: 'video',
    poster: '/media/images/project-07.jpeg',
  },
]

export const clientValuePoints = [
  'Clear communication from inspection to completion',
  'Clean and respectful project delivery on site',
  'Reliable waterproofing systems matched to the issue',
  'Long-term leak prevention focus over short-term patching',
  'Fast inspections across Dublin and surrounding areas',
  'Written quotations provided before work starts',
]

export const feedbackSummaries = [
  {
    heading: 'Communication',
    text: 'Clients value straightforward updates, clear expectations, and direct answers throughout the project.',
  },
  {
    heading: 'Work Standard',
    text: 'Projects are delivered with tidy workmanship, careful detailing, and durable waterproofing finishes.',
  },
  {
    heading: 'Reliability',
    text: 'Assessments are scheduled quickly and solutions are specified for long-term protection, not temporary fixes.',
  },
]

export const faqItems = [
  {
    question: 'What waterproofing services do you provide in Dublin?',
    answer:
      'We provide roof, balcony, basement, and wet room waterproofing, plus leak prevention and commercial waterproofing systems across Dublin.',
  },
  {
    question: 'Do you handle both residential and commercial waterproofing?',
    answer:
      'Yes. We carry out waterproofing works for homeowners, landlords, and commercial properties across Dublin.',
  },
  {
    question: 'What areas of Dublin do you cover?',
    answer: 'We are Dublin-based and cover Dublin City Centre, South Dublin, North Dublin, West Dublin, and surrounding areas.',
  },
  {
    question: 'How long does professional waterproofing last?',
    answer:
      'Lifespan depends on exposure, surface condition, and system type, but correctly specified waterproofing is designed for long-term protection.',
  },
]

export const serviceList = serviceGroups.flatMap((group) => group.items.map((item) => item.title))

export const ctaBlurb = 'Need a leak assessed? Request a free waterproofing inspection today.'

export { serviceAreas, siteConfig }
