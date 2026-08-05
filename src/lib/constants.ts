export const IMAGES = {
  hero: '/images/hero/IMG_3795.PNG',

  services: {
    maintenance: '/images/services/maintenance/IMG_3793.PNG',
    snow: '/images/services/snow/IMG_3630.PNG',
    construction: '/images/services/construction/Screenshot_18.png',
    interior: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=800&q=80',
  },

  about: '/images/about/IMG_3797.PNG',

  commonArea: '/images/common-area/IMG_3746.jpg',

  carousel: [
    '/images/carousel/IMG_3791.PNG',
    '/images/carousel/IMG_3790.PNG',
    '/images/carousel/IMG_3626.PNG',
    '/images/carousel/Screenshot_20.png',
    '/images/carousel/841ee7bd-60b0-4100-a75f-eb20fb0dbc23.jpg',
    '/images/carousel/IMG_3625.PNG',
    '/images/carousel/IMG_3792.PNG',
    '/images/carousel/IMG_3760.jpg',
    '/images/carousel/IMG_3631.PNG',
    '/images/carousel/IMG_3632.PNG',
    '/images/carousel/IMG_3744.jpg',
    '/images/carousel/IMG_3769.jpg',
  ],
} as const

export const CONTACT = {
  office: '705.792.1984',
  officeHref: 'tel:7057921984',
  email: 'kjslandscaping1997@gmail.com',
  website: 'kjslandscaping.com',
  websiteHref: 'https://kjslandscaping.com',
  location: 'Simcoe County, Ontario',
} as const

export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Who We Serve', href: '#serve' },
  { label: 'Partners', href: '#partners' },
  { label: 'Contact', href: '#contact' },
] as const

export interface Stat {
  value: string
  /** Smaller amber-tinted part displayed between value and suffix */
  accent?: string
  suffix?: string
  /** When true, suffix renders in amber-lt instead of white */
  suffixIsAccent?: boolean
  label: string
}

export const STATS: Stat[] = [
  { value: '27', suffix: '+', suffixIsAccent: true, label: 'Years of Proven Excellence' },
  { value: 'GTA', accent: 'to', suffix: 'Muskokas', label: 'Trusted Across the Region' },
  { value: '4', label: 'Seasons. One Trusted Partner.' },
]

export interface Service {
  title: string
  description: string
  bullets: string[]
}

export const SERVICES: Service[] = [
  {
    title: 'Spring, Summer & Fall Maintenance',
    description:
      'A well-maintained property makes a lasting impression. From the first arrival of spring through the final cleanup of fall, KJS Landscaping delivers consistent grounds care that keeps your property looking professional, welcoming, and well cared for throughout every growing season.',
    bullets: [
      'Consistent mowing heights and clean, defined patterns',
      'Precision edging and crisp landscape borders',
      'Turf health programs designed to promote stronger, greener lawns',
      'Seasonal spring and fall cleanups',
      'Reliable scheduled service with dependable communication',
    ],
  },
  {
    title: 'Snow & Ice Management',
    description:
      'Winter conditions can change quickly, and reliable snow and ice management is essential to protecting your property, reducing risk, and keeping residents, tenants, employees, and visitors safe. KJS Landscaping provides dependable winter services supported by experienced crews, professional equipment, and proactive storm monitoring.',
    bullets: [
      'Proactive pre-treatment and ice control strategies',
      'Full property snow clearing and efficient lot management',
      'Salting and de-icing programs tailored to site conditions',
      '24/7 storm monitoring and responsive service',
      'Contracted seasonal winter coverage with dedicated support',
    ],
  },
  {
    title: 'Landscape Construction',
    description:
      'When a property requires more than ongoing maintenance, KJS Landscaping provides complete landscape construction services from concept through completion. By keeping design, construction, and ongoing care under one roof, we ensure consistency, accountability, and a finished landscape built to perform for years to come.',
    bullets: [
      'Custom hardscaping and patio installations',
      'Planting plans and garden bed enhancements',
      'Irrigation system design and installation',
      'Retaining walls, drainage solutions, and site grading',
      'Common area renovations and property improvements',
    ],
  },
  {
    title: 'Interior Landscaping & Planting Services',
    description:
      "KJS Landscaping's interior division brings the same attention to detail and care found outdoors into the shared spaces of condominium buildings, retirement communities, and commercial properties. From lobbies and corridors to amenity spaces and common areas, we design and maintain interior plant displays that enhance atmosphere and create welcoming environments.",
    bullets: [
      'Interior plant design, installation, and placement',
      'Lobby, corridor, and amenity area plant displays',
      'Ongoing interior plant care and maintenance programs',
      'Multi-residential and commercial property experience',
      'End-to-end coordination from planning through installation',
    ],
  },
]

export interface Specialization {
  title: string
  description: string
}

export const SPECIALIZATIONS: Specialization[] = [
  {
    title: 'Multi-Residential Communities',
    description:
      'Managing a multi-residential property requires a landscape partner you can trust to deliver consistent results without constant oversight. KJS Landscaping works to dependable schedules with experienced crews who understand your property, ensuring the same high standard is maintained from the first visit of the season to the last.',
  },
  {
    title: 'Condominium Communities',
    description:
      'Condominium boards are accountable to homeowners, and the condition of the grounds is one of the first things residents and visitors notice. KJS Landscaping provides meticulous landscape maintenance that enhances curb appeal, protects property values, and reflects the pride your community deserves.',
  },
  {
    title: 'Retirement Communities',
    description:
      'Beautiful, well-maintained landscapes contribute to the comfort, safety, and quality of life of residents. KJS Landscaping delivers thoughtful, dependable maintenance with an emphasis on accessibility, cleanliness, and attention to detail, creating outdoor spaces residents and their families can enjoy with confidence.',
  },
  {
    title: 'Commercial & Industrial Properties',
    description:
      'Your landscape is often the first impression customers, tenants, employees, and visitors have of your business. KJS Landscaping maintains commercial and industrial properties with professionalism, consistency, and efficiency, ensuring your grounds reflect the quality and reputation of your organisation.',
  },
  {
    title: "Homeowners' Associations (HOAs)",
    description:
      "Shared green spaces shape the identity of an HOA community and play an important role in preserving property values. KJS Landscaping maintains entrances, parks, pathways, and common areas to a consistently high standard that residents appreciate, boards can confidently stand behind, and the entire community can take pride in.",
  },
]

export const PARTNERS: string[] = [
  'Jarlette',
  'Chartwell',
  'Hassey',
  'Bayshore',
  'DMS',
  'Integrity',
  'First Residential',
  'Laker Property Management',
]

export const CHECKLIST: string[] = [
  'Crisp mowing patterns and sharp, clean edges on every visit',
  'Healthy, vibrant turf through proactive lawn care and fertilisation',
  'Precision edging, garden bed maintenance, and detailed landscape grooming',
  'Clean entrances, boulevards, medians, and common gathering spaces',
]
