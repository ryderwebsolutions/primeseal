import { serviceAreas, siteConfig } from '../siteConfig'

export const logoSrc = '/images/primeseal-logo-transparent.png'

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
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
  'Free Leak Assessments',
  'Written Quotes',
  'Warranty Available On Selected Works',
]

export const processSteps = [
  'Site Inspection',
  'Leak / Moisture Assessment',
  'System Recommendation',
  'Surface Preparation',
  'Waterproofing Application',
  'Final Inspection',
]

export const processStepsEnhanced = [
  {
    step: '01',
    title: 'Site Inspection',
    desc: 'We assess the waterproofing issue on site, identify failure points, and advise on the best-fit system for the substrate and exposure conditions.',
  },
  {
    step: '02',
    title: 'Surface Preparation',
    desc: 'Correct substrate preparation is critical. We clean, repair, and prime surfaces before any waterproofing system is applied.',
  },
  {
    step: '03',
    title: 'System Application',
    desc: 'Professional waterproofing application using the specified membrane system, with attention to critical detailing points and transitions.',
  },
  {
    step: '04',
    title: 'Final Checks & Protection',
    desc: 'Post-application inspection and walkthrough to confirm the installation meets standard and the property is protected.',
  },
]

export const waterproofingSystems = [
  {
    id: 'liquid',
    tab: 'Liquid Waterproofing',
    title: 'Liquid Membrane Waterproofing',
    desc: 'Seamless liquid-applied membranes for complex roof details, balconies, and high-risk transitions. Applied in multiple coats for a continuous, flexible waterproof layer with no joints or seams — ideal for intricate shapes and critical detailing zones.',
    image: '/media/images/project-06.jpeg',
  },
  {
    id: 'sheet',
    tab: 'Sheet Membrane',
    title: 'Sheet Membrane Systems',
    desc: 'Torch-on and cold-applied bitumen or polymer sheet membranes for large flat roof areas. Reliable long-term protection with proven performance across residential and commercial properties throughout Dublin.',
    image: '/media/images/project-08.jpeg',
  },
  {
    id: 'bituminous',
    tab: 'Bituminous Systems',
    title: 'Bituminous Waterproofing',
    desc: 'Modified bitumen systems for flat roofs and structural waterproofing. Excellent resistance to ponding water, UV exposure, and Irish weather conditions — a reliable long-term choice for exposed roof areas.',
    image: '/media/images/project-11.jpeg',
  },
  {
    id: 'cementitious',
    tab: 'Cementitious Waterproofing',
    title: 'Cementitious Waterproofing',
    desc: 'Rigid or flexible cementitious coatings for basements, wet rooms, and below-grade structures. Bonds directly to concrete and masonry surfaces for lasting protection against hydrostatic pressure and damp transfer.',
    video: '/media/videos/cementitious.mp4',
  },
]

export const insightCards = [
  {
    title: 'Flat Roof Waterproofing: What To Know',
    category: 'Flat Roofs',
    summary: 'Understanding system options, common failure points, and why correct specification matters for Dublin flat roof properties.',
    image: '/media/images/project-08.jpeg',
    date: 'May 2025',
  },
  {
    title: 'Balcony Waterproofing: Common Signs of Failure',
    category: 'Balconies',
    summary: 'What to look for when balcony waterproofing starts to fail — and why acting early prevents costly interior water damage.',
    image: '/media/images/project-05.jpeg',
    date: 'April 2025',
  },
  {
    title: 'Basement Tanking: How To Protect Your Property',
    category: 'Basement',
    summary: 'Basement waterproofing approaches for controlling seepage, moisture transfer, and persistent damp in below-ground structures.',
    image: '/images/basement-waterproofing.jpg',
    date: 'March 2025',
  },
]

export const servicesPreviewItems = [
  {
    title: 'Roof Waterproofing',
    text: 'Durable roof membrane systems designed for long-term weather resistance in Dublin conditions.',
    href: '/roof-waterproofing-dublin',
    image: '/images/commercial-roof-waterproofing.jpg',
  },
  {
    title: 'Balcony Waterproofing',
    text: 'Targeted balcony waterproofing to protect exposed edges, outlets, and tile interfaces.',
    href: '/balcony-waterproofing-dublin',
    image: '/images/balcony-waterproofing-membrane.jpg',
  },
  {
    title: 'Basement Waterproofing',
    text: 'Sub-structure waterproofing and damp-control solutions for basements and lower-ground spaces.',
    href: '/basement-waterproofing-dublin',
    image: '/images/basement-waterproofing.jpg',
  },
  {
    title: 'Flat Roof Systems',
    text: 'Complete flat roof waterproofing systems for homes, extensions, and apartment blocks.',
    href: '/flat-roof-waterproofing-dublin',
    image: '/media/images/project-08.jpeg',
  },
  {
    title: 'Wet Room Waterproofing',
    text: 'Professional wet room tanking and detailing to prevent hidden moisture ingress.',
    href: '/wet-room-waterproofing-dublin',
    image: '/images/bathroom-waterproofing.jpg',
  },
  {
    title: 'Liquid Waterproofing',
    text: 'Seamless liquid membrane applications for complex details and high-risk waterproofing points.',
    href: '/liquid-waterproofing-dublin',
    image: '/media/images/project-06.jpeg',
  },
  {
    title: 'Leak Prevention',
    text: 'Inspection-led leak prevention works to stop repeat failures before major damage occurs.',
    href: '/leak-repairs-dublin',
    image: '/images/leak-detection.jpg',
  },
  {
    title: 'Commercial Waterproofing',
    text: 'Reliable commercial waterproofing packages for retail, mixed-use, and managed properties.',
    href: '/commercial-waterproofing-dublin',
    image: '/media/images/project-11.jpeg',
  },
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
    location: 'Dublin',
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
    question: 'How much does waterproofing cost in Dublin?',
    answer:
      'Costs vary based on access, substrate condition, system type, and project size. After inspection, PrimeSeal provides a written quote with a clear scope of works.',
  },
  {
    question: 'Do you offer free inspections?',
    answer:
      'Yes. PrimeSeal offers free inspections and leak assessments across Dublin for residential and commercial properties.',
  },
  {
    question: 'Do you repair flat roof leaks?',
    answer:
      'Yes. We diagnose and repair flat roof leaks, including membrane failures, edge detailing issues, and drainage-related ingress points.',
  },
  {
    question: 'Do you waterproof balconies?',
    answer:
      'Yes. We carry out balcony waterproofing works with suitable systems for exposed traffic areas, edge details, and drainage outlets.',
  },
  {
    question: 'How long does waterproofing last?',
    answer:
      'Lifespan depends on exposure, surface condition, and system type, but correctly specified waterproofing is designed for long-term protection.',
  },
  {
    question: 'Do you provide warranty?',
    answer:
      'Warranty options are available on selected waterproofing works and are confirmed in writing within your project quotation.',
  },
  {
    question: 'Do you work on commercial properties?',
    answer:
      'Yes. PrimeSeal handles both residential and commercial waterproofing works across Dublin, including apartment blocks and managed buildings.',
  },
  {
    question: 'Can waterproofing be done during winter?',
    answer:
      'Many waterproofing works can be completed during winter, subject to substrate moisture levels, temperature, and weather windows. We advise the best schedule during inspection.',
  },
]

export const serviceList = serviceGroups.flatMap((group) => group.items.map((item) => item.title))

export const serviceLinks = [
  { label: 'Roof Waterproofing', href: '/roof-waterproofing-dublin' },
  { label: 'Balcony Waterproofing', href: '/balcony-waterproofing-dublin' },
  { label: 'Flat Roof Waterproofing', href: '/flat-roof-waterproofing-dublin' },
  { label: 'Basement Waterproofing', href: '/basement-waterproofing-dublin' },
  { label: 'Wet Room Waterproofing', href: '/wet-room-waterproofing-dublin' },
  { label: 'Liquid Waterproofing', href: '/liquid-waterproofing-dublin' },
  { label: 'Commercial Waterproofing', href: '/commercial-waterproofing-dublin' },
  { label: 'Leak Repairs', href: '/leak-repairs-dublin' },
]

export const ctaBlurb = 'Need a leak assessed? Request a free waterproofing inspection today.'

export const serviceSeoPages = {
  '/roof-waterproofing-dublin': {
    title: 'Roof Waterproofing Dublin',
    heroTitle: 'Roof Waterproofing Contractors in Dublin',
    heroSummary:
      'PrimeSeal installs and repairs roof waterproofing systems that protect Dublin properties from persistent leaks, ponding water, and weather exposure.',
    keywords: ['roof waterproofing Dublin', 'roof leak repair Dublin', 'flat roof waterproofing contractor Dublin'],
    problems: [
      'Recurring roof leaks during heavy rainfall',
      'Failed joints, laps, or aging membranes',
      'Water ingress at edges, upstands, and roof penetrations',
    ],
    solutions: [
      'Inspection-led diagnosis and moisture mapping',
      'System-specific repair or full waterproofing upgrade',
      'Detail-focused edge and penetration sealing',
    ],
    beforeAfter: {
      location: 'West Dublin',
      problem: 'Weathered roof edge with active ingress risk.',
      solution: 'Edge rebuilt and sealed using durable liquid membrane detailing.',
      result: 'Reliable weather protection and a clean professional finish.',
      image: '/clean-roof-before-after.jpeg',
    },
  },
  '/balcony-waterproofing-dublin': {
    title: 'Balcony Waterproofing Dublin',
    heroTitle: 'Balcony Waterproofing Specialists Dublin',
    heroSummary:
      'PrimeSeal delivers balcony waterproofing systems in Dublin for exposed terraces, apartment balconies, and residential outdoor areas.',
    keywords: ['balcony waterproofing Dublin', 'balcony leak repair Dublin', 'terrace waterproofing contractor Dublin'],
    problems: [
      'Water ingress through cracked finishes and failed seals',
      'Drainage outlet detailing causing repeat damp problems',
      'Deteriorated waterproof layer in exposed balcony zones',
    ],
    solutions: [
      'Substrate preparation and corrective detailing',
      'Liquid or membrane waterproofing systems for exposed traffic areas',
      'Edge, threshold, and outlet sealing to reduce repeat failures',
    ],
    beforeAfter: {
      location: 'South Dublin',
      problem: 'Worn balcony surface with visible ingress risk at perimeters.',
      solution: 'Balcony recoated with specialist waterproof membrane and perimeter detailing.',
      result: 'Long-term protection with a neat and durable final finish.',
      image: '/clean-balcony-before-after.jpeg',
    },
  },
  '/flat-roof-waterproofing-dublin': {
    title: 'Flat Roof Waterproofing Dublin',
    heroTitle: 'Flat Roof Waterproofing in Dublin',
    heroSummary:
      'We waterproof flat roofs for homes and commercial properties across Dublin using long-lasting systems designed for Irish weather conditions.',
    keywords: ['flat roof waterproofing Dublin', 'flat roof leak repairs Dublin', 'flat roof systems Dublin'],
    problems: [
      'Ponding water and recurring damp patches',
      'Aged waterproofing layers causing repeated callouts',
      'Poor detailing around outlets and roof transitions',
    ],
    solutions: [
      'Condition-based specification for repair or full overlay',
      'Improved detailing and drainage integration',
      'Professional application with written scope and handover guidance',
    ],
    beforeAfter: {
      location: 'Dublin',
      problem: 'Standing water and recurring roof ingress after patch repairs.',
      solution: 'Surface prepared and waterproofing system upgraded with improved detailing.',
      result: 'Improved runoff and long-term waterproof roof performance.',
      image: '/clean-garden-before-after.jpeg',
    },
  },
  '/basement-waterproofing-dublin': {
    title: 'Basement Waterproofing Dublin',
    heroTitle: 'Basement Waterproofing Services Dublin',
    heroSummary:
      'PrimeSeal provides basement waterproofing in Dublin to control seepage, damp transfer, and moisture risk in lower-ground structures.',
    keywords: ['basement waterproofing Dublin', 'basement damp proofing Dublin', 'substructure waterproofing Dublin'],
    problems: [
      'Seepage through basement walls and slab edges',
      'Persistent damp smell and moisture build-up',
      'Water ingress after heavy rain events',
    ],
    solutions: [
      'Assessment of ingress source and pressure points',
      'Appropriate waterproofing and moisture-management system',
      'Detailing works to reduce recurring damp transfer',
    ],
    beforeAfter: {
      location: 'Dublin City Centre',
      problem: 'Moisture ingress affecting lower-ground internal finishes.',
      solution: 'Corrective substrate prep and waterproofing detail application.',
      result: 'Controlled moisture risk and improved long-term protection.',
      image: '/media/images/project-07.jpeg',
    },
  },
  '/wet-room-waterproofing-dublin': {
    title: 'Wet Room Waterproofing Dublin',
    heroTitle: 'Wet Room Waterproofing Contractors Dublin',
    heroSummary:
      'PrimeSeal installs wet room waterproofing systems in Dublin to prevent hidden leaks behind finishes and around floor-wall transitions.',
    keywords: ['wet room waterproofing Dublin', 'wet room tanking Dublin', 'bathroom leak prevention Dublin'],
    problems: [
      'Leaks around shower zones and floor junctions',
      'Hidden moisture behind tiled surfaces',
      'Poor detailing at drains and penetrations',
    ],
    solutions: [
      'Professional tanking and transition detailing',
      'Waterproofing around drains, corners, and service entries',
      'System recommendations based on substrate and finish type',
    ],
    beforeAfter: {
      location: 'South Dublin',
      problem: 'Early signs of moisture ingress around shower perimeter details.',
      solution: 'Wet room tanking system installed with reinforced transitions.',
      result: 'Leak-resistant wet area with reliable waterproof protection.',
      image: '/media/images/project-04.jpeg',
    },
  },
  '/commercial-waterproofing-dublin': {
    title: 'Commercial Waterproofing Dublin',
    heroTitle: 'Commercial Waterproofing Specialists Dublin',
    heroSummary:
      'PrimeSeal delivers commercial waterproofing solutions in Dublin for managed buildings, apartment schemes, and business premises.',
    keywords: ['commercial waterproofing Dublin', 'waterproofing contractor Dublin commercial', 'building waterproofing Dublin'],
    problems: [
      'Large-area roof or balcony ingress across managed properties',
      'Disruption risk from recurring reactive repairs',
      'Complex detailing across mixed surfaces and access zones',
    ],
    solutions: [
      'Planned inspection and scope definition',
      'Phased waterproofing works with clear communication',
      'Durable systems specified for ongoing property performance',
    ],
    beforeAfter: {
      location: 'North Dublin',
      problem: 'Recurring ingress affecting shared roof deck areas.',
      solution: 'Commercial membrane system installed with upgraded edge detailing.',
      result: 'Reduced leak risk and stronger long-term maintenance outcomes.',
      image: '/media/images/project-11.jpeg',
    },
  },
  '/liquid-waterproofing-dublin': {
    title: 'Liquid Waterproofing Dublin',
    heroTitle: 'Liquid Waterproofing Specialists Dublin',
    heroSummary:
      'PrimeSeal applies liquid waterproofing systems in Dublin for complex details, roof edges, balconies, and difficult transition zones.',
    keywords: ['liquid waterproofing Dublin', 'liquid membrane Dublin', 'roof liquid waterproofing Dublin'],
    problems: [
      'Complex detailing where sheet systems are difficult to install',
      'Cracked or weathered waterproof layers needing seamless renewal',
      'Leak risk around penetrations, corners, and edge transitions',
    ],
    solutions: [
      'Inspection and substrate preparation before coating',
      'Specialist liquid membrane application with reinforced detailing',
      'Seamless system build-up for long-term protection and flexibility',
    ],
    beforeAfter: {
      location: 'West Dublin',
      problem: 'Exposed detail zones with recurring ingress at roof perimeter.',
      solution: 'Liquid waterproofing system applied with reinforced edge detailing.',
      result: 'Continuous waterproof protection across high-risk transitions.',
      image: '/clean-roof-before-after.jpeg',
    },
  },
  '/leak-repairs-dublin': {
    title: 'Leak Repairs Dublin',
    heroTitle: 'Leak Repairs and Waterproofing Solutions Dublin',
    heroSummary:
      'PrimeSeal provides specialist leak repairs in Dublin, identifying the true ingress source and applying lasting waterproofing solutions.',
    keywords: ['leak repairs Dublin', 'water leak specialist Dublin', 'roof and balcony leak repair Dublin'],
    problems: [
      'Recurring leaks after short-term patching',
      'Difficult-to-trace ingress around joints and details',
      'Moisture spread causing interior damage risk',
    ],
    solutions: [
      'Targeted leak diagnosis and assessment',
      'Corrective waterproofing at failure points',
      'Preventive detailing to reduce future callouts',
    ],
    beforeAfter: {
      location: 'Dublin',
      problem: 'Persistent water ingress around multiple detail zones.',
      solution: 'Leak points isolated and repaired with specialist waterproofing treatment.',
      result: 'Leaks resolved and property protected against repeat failures.',
      image: '/media/images/project-06.jpeg',
    },
  },
}

export { serviceAreas, siteConfig }
