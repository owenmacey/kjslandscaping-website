export const IMAGES = {
  hero: '/images/hero/IMG_3795.PNG',

  services: {
    maintenance: '/images/services/maintenance/IMG_3793.PNG',
    snow: '/images/services/snow/IMG_3630.PNG',
    construction: '/images/services/construction/Screenshot_18.png',
    interior: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=800&q=80', // No client photo available — Unsplash placeholder
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
  { value: '27', suffix: '+', suffixIsAccent: true, label: 'Years of Proven Excellence' },
  { value: 'GTA', accent: 'to', suffix: 'Muskokas', label: 'From the GTA to the Muskokas' },
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
      'A sharp, well-maintained property signals quality to every resident, tenant, and visitor who passes through. KJS delivers consistent grounds care across every growing season, so the standard never slips between visits.',
    bullets: [
      'Precision mow lines, every visit',
      'Clean edges and defined borders',
      'Turf health programmes',
      'Spring and fall clean-ups',
      'Scheduled, dependable service',
    ],
  },
  {
    title: 'Snow & Ice Management',
    description:
      'Winter conditions wait for no one. Properties that fall behind create liability, damage reputations, and put people at risk. KJS operates around the clock through every storm, with the equipment and response time property managers can depend on.',
    bullets: [
      'Proactive pre-treatment and ice control',
      'Full-lot plowing and clearing',
      'Salting and de-icing programmes',
      '24/7 storm monitoring and response',
      'Contracted seasonal coverage',
    ],
  },
  {
    title: 'Landscape Construction',
    description:
      'When a property needs more than maintenance, KJS takes on the full build. From the first consultation to final installation, one team handles design, build, and handover so nothing is lost between phases.',
    bullets: [
      'Hardscaping and patio installation',
      'Planting and garden bed design',
      'Irrigation system installation',
      'Retaining walls and site grading',
      'Common area upgrades',
    ],
  },
  {
    title: 'Interior Construction',
    description:
      "KJS's interior division handles common area renovations for condominium buildings, retirement communities, and commercial properties: lobbies, corridors, amenity spaces, and shared areas brought to the standard the exterior already reflects. Year-round availability means your property keeps moving forward regardless of season.",
    bullets: [
      'Lobby, corridor, and amenity renovations',
      'Year-round project availability',
      'Multi-residential and commercial experience',
      'End-to-end project management',
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
      'Property managers overseeing large residential communities need a landscape partner they can count on without supervising. KJS operates on consistent schedules with the same experienced crews, so the standard holds whether it\'s week two or week twenty.',
  },
  {
    title: 'Condominiums',
    description:
      'Condo boards answer directly to owners, and the first thing residents notice is how the grounds are kept. KJS delivers the level of detail that makes a condo corporation look like it takes its reputation seriously.',
  },
  {
    title: 'Retirement Villages',
    description:
      'In retirement communities, the landscape is part of the dignity of the environment residents call home. KJS maintains these properties with the consistency and attention to safety that residents and their families can rely on.',
  },
  {
    title: 'Commercial & Industrial',
    description:
      "A commercial property's landscape is the first impression tenants, clients, and visitors form, and it forms immediately. KJS keeps commercial and industrial grounds to a standard that reflects the organisations operating from them.",
  },
  {
    title: 'HOA Communities',
    description:
      'In HOA communities, shared spaces define neighbourhood character and directly affect property values. KJS maintains common areas to a standard residents notice, boards can report on, and the neighbourhood reflects.',
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
  'Crisp mow lines, every visit',
  'Turf health and fertilisation',
  'Precision edging and bed detailing',
  'Scheduled service, with storm response',
]
