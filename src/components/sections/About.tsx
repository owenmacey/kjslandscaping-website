'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Phone, Mail, Globe } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { CONTACT, IMAGES } from '@/lib/constants'

const REGIONS = ['Simcoe County', 'Greater Toronto Area', 'Muskoka', 'Collingwood']

type AboutContactRow = {
  Icon: LucideIcon
  label: string
  value: string
  href: string
  external?: boolean
}

const CONTACT_ROWS: AboutContactRow[] = [
  { Icon: Phone, label: 'Office', value: '705.792.1984', href: 'tel:7057921984' },
  { Icon: Mail, label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { Icon: Globe, label: 'Website', value: CONTACT.website, href: CONTACT.websiteHref, external: true },
]

export default function About() {
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)
  const [leftVis, setLeftVis] = useState(false)
  const [rightVis, setRightVis] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === leftRef.current) setLeftVis(true)
            if (entry.target === rightRef.current) setRightVis(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    if (leftRef.current) observer.observe(leftRef.current)
    if (rightRef.current) observer.observe(rightRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      aria-label="About KJS Landscaping"
      className="bg-white py-[100px] px-6 md:px-12"
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-start">

        {/* Left column */}
        <div className="relative">
          {/* Year watermark */}
          <div
            className="absolute -top-5 -left-5 font-display text-[180px] font-semibold leading-none select-none pointer-events-none z-0 hidden md:block"
            style={{ color: 'transparent', WebkitTextStroke: '1px var(--mist)' }}
            aria-hidden="true"
          >
            1997
          </div>

          <div
            ref={leftRef}
            className={`relative z-10 transition-all duration-700 ${
              leftVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <p className="font-ui text-[10px] font-bold tracking-[0.25em] uppercase text-amber mb-3">
              Our Story
            </p>
            <h2 className="font-display text-[clamp(32px,4vw,48px)] font-normal text-ink leading-[1.15] mb-7">
              Rooted in Simcoe County.
              <br />
              <em className="italic text-forest">Trusted Across Ontario.</em>
            </h2>

            <div className="border-l-[3px] border-amber pl-5 mb-7">
              <blockquote className="font-display text-[22px] italic text-forest leading-[1.5] mb-3">
                &ldquo;After 30 years in this industry, I&apos;m still the one
                who notices the small details that make a property stand out.
                Our crews take the same pride in their work that I&apos;ve
                always believed in, and they understand that every edge, every
                detail, and every finish reflects the care we put into the
                properties we maintain. That commitment to quality is what
                defines KJS Landscaping.&rdquo;
              </blockquote>
              <p className="font-display text-[14px] font-medium text-forest/70">
                — Kevin Smith, Founder
              </p>
            </div>

            <p className="font-body text-[15px] text-slate leading-[1.8] mb-5">
              KJS Landscaping began in the Greater Toronto Area in 1997 before
              planting its roots in Simcoe County, where the company continues
              to grow today. Built on a simple philosophy — treat every property
              as if it were your own — what started with a single crew and a
              handful of commercial accounts has evolved into a trusted,
              year-round facility maintenance company serving condominium
              communities, retirement residences, homeowners&apos; associations,
              and commercial properties throughout the Simcoe region and cottage
              country.
            </p>
            <p className="font-body text-[15px] text-slate leading-[1.8] mb-7">
              KJS Landscaping has always been a family business. Jodie, who
              represents the &lsquo;J&rsquo; in KJS, has been an integral part
              of the company from the very beginning, providing the operational
              leadership that keeps projects moving, clients informed, and
              day-to-day operations running smoothly. Their family — Alexis,
              Tyler, Bryden, and Kyle — have grown up alongside the business,
              learning firsthand the dedication, pride, and standards that have
              shaped KJS Landscaping from the beginning.
            </p>

            <div className="w-12 h-[2px] bg-amber mb-7" />

            <p className="font-display text-[20px] font-medium text-ink mb-1">
              Kevin Smith
            </p>
            <p className="font-body text-[13px] text-slate tracking-wide uppercase mb-4">
              Founder
            </p>

            <div className="flex flex-col gap-2.5">
              {CONTACT_ROWS.map((row) => (
                <div
                  key={row.label}
                  className="flex items-center gap-2.5 font-body text-[14px] text-slate"
                >
                  <row.Icon
                    size={16}
                    strokeWidth={2}
                    style={{ color: 'var(--forest)' }}
                    className="shrink-0"
                  />
                  <a
                    href={row.href}
                    {...(row.external ? { target: '_blank', rel: 'noopener' } : {})}
                    className="text-forest hover:text-amber transition-colors"
                  >
                    {row.value}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column */}
        <div
          ref={rightRef}
          className={`flex flex-col transition-all duration-700 delay-200 ${
            rightVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* Team photo */}
          <div className="relative h-64 w-full overflow-hidden border-b-[3px] border-amber">
            <Image
              src={IMAGES.about}
              alt="KJS Landscaping team"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Dark quote card */}
          <div className="bg-deep border-l-[3px] border-amber p-12">
            <p className="font-display text-[28px] font-light italic text-white leading-[1.4] mb-4">
              &ldquo;The most valuable thing we offer isn&apos;t our equipment
              or the size of our crews — it&apos;s the continuity of one
              experienced team that designs your landscape, builds it with
              precision, and maintains it to the same exacting standard for
              years to come.&rdquo;
            </p>
            <p className="font-display text-[22px] font-semibold text-amber-lt">
              Design. Build. Maintain.
            </p>
          </div>

          {/* Territory card */}
          <div className="bg-chalk p-9">
            <p className="font-ui text-[10px] font-bold tracking-[0.25em] uppercase text-amber mb-3">
              Service Territory
            </p>
            <p className="font-display text-[18px] font-medium text-ink leading-[1.3] mb-4">
              Rooted in Simcoe County. Trusted Across the Region.
            </p>
            <p className="font-body text-[14px] text-slate leading-[1.8] mb-4">
              Based in Simcoe County, KJS Landscaping proudly serves clients
              throughout Simcoe County, the Greater Toronto Area, Muskoka,
              Collingwood, and the surrounding communities. Our service area
              has grown through nearly 30 years of building lasting
              relationships with condominium corporations, retirement
              communities, commercial properties, and multi-residential
              developments.
            </p>
            <div className="flex flex-wrap gap-2">
              {REGIONS.map((region) => (
                <span
                  key={region}
                  className="font-ui text-[10px] font-semibold tracking-[0.1em] uppercase text-slate bg-mist px-3 py-1.5 rounded-[2px]"
                >
                  {region}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
