/**
 * PHOTO SWAP INSTRUCTIONS
 * When real KJS photos are ready:
 * 1. Add photo files to /public/images/
 * 2. Replace each URL in IMAGES below with the local path e.g. '/images/hero.jpg'
 * 3. Remove the placeholder tags from Carousel.tsx
 * 4. Remove the Unsplash attribution line from Footer.tsx
 * 5. Remove remotePatterns from next.config.ts if no external images remain
 */
export const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1920&q=80',

  services: {
    maintenance: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80',
    snow: 'https://images.unsplash.com/photo-1547754980-3df97fed72a8?auto=format&fit=crop&w=800&q=80',
    construction: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80',
    interior: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
  },

  about: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80',

  commonArea: 'https://images.unsplash.com/photo-1599598425947-5202edd56bdb?auto=format&fit=crop&w=1200&q=80',

  carousel: [
    'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1599598425947-5202edd56bdb?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1547754980-3df97fed72a8?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
  ],
} as const

export const CONTACT = {
  cell: '705.718.8826',
  cellHref: 'tel:7057188826',
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
  { value: '27', suffix: '+', suffixIsAccent: true, label: 'Years in Operation' },
  { value: 'GTA', accent: 'to', suffix: 'Muskokas', label: 'Service Area Coverage' },
  { value: '4', label: 'Season Full-Service Management' },
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
      'Precision grounds care through every growing season, keeping your property looking its best from first thaw to final leaf.',
    bullets: [
      'Crisp, clean mow lines',
      'Precision edging & detailing',
      'Healthy turf management',
      'Seasonal clean-ups',
      'Reliable scheduling',
    ],
  },
  {
    title: 'Snow & Ice Management',
    description:
      'Total winter coverage so your residents, tenants and visitors move safely — no matter what the season brings.',
    bullets: [
      'Proactive ice control',
      'Plowing & clearing',
      'Salting & de-icing',
      '24/7 storm response',
      'Contracted seasonal programs',
    ],
  },
  {
    title: 'Landscape Construction',
    description:
      'Full-service landscape design and build — transforming outdoor spaces from concept through completion.',
    bullets: [
      'Hardscaping & patios',
      'Planting & garden installation',
      'Irrigation systems',
      'Retaining walls & grading',
      'Common area enhancements',
    ],
  },
  {
    title: 'Interior Construction',
    description:
      'Year-round interior project capabilities through our dedicated construction division — built to the same standard as everything we do outdoors.',
    bullets: [
      'Year-round availability',
      'Commercial & multi-res projects',
      'Experienced crews',
      'Quality-first approach',
      'Full project management',
    ],
  },
]

export interface Specialization {
  title: string
  description: string
}

export const SPECIALIZATIONS: Specialization[] = [
  {
    title: 'Multi-Residential',
    description:
      "Large-scale residential communities where common area standards set the tone for every resident's experience.",
  },
  {
    title: 'Condominiums',
    description:
      'Condo corporations that demand consistent, professional grounds management that owners and boards can rely on.',
  },
  {
    title: 'Retirement Villages',
    description:
      'Communities where beautiful, safe, and well-maintained landscapes directly support quality of life.',
  },
  {
    title: 'Commercial & Industrial',
    description:
      'Business parks and industrial properties where first impressions drive business outcomes.',
  },
  {
    title: 'HOA Communities',
    description:
      'Homeowner associations that need a trusted partner to maintain community standards across shared spaces.',
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
  'Crisp, clean mow lines',
  'Healthy, green turf management',
  'Precision edging and detailing',
  'Reliable scheduling and responsive service',
]
