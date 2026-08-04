'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Smartphone, Phone, Mail, Globe } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { CONTACT, IMAGES } from '@/lib/constants'

const REGIONS = ['Greater Toronto Area', 'Muskokas', 'Collingwood', 'Simcoe County']

type AboutContactRow = {
  Icon: LucideIcon
  label: string
  value: string
  href: string
  external?: boolean
}

const CONTACT_ROWS: AboutContactRow[] = [
  { Icon: Smartphone, label: 'Cell', value: '705.718.8826', href: 'tel:7057188826' },
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
              <blockquote className="font-display text-[22px] italic text-forest leading-[1.5]">
                &ldquo;After 27 years, I&apos;m still the one who notices a
                missed edge on a Tuesday morning. The crews know that if I&apos;d
                stop to fix it, they should have caught it first. That
                standard runs through everything we do.&rdquo;
              </blockquote>
            </div>

            <p className="font-body text-[15px] text-slate leading-[1.8] mb-5">
              Kevin Smith founded KJS Landscaping in Simcoe County in 1997,
              taking on his first commercial accounts with a single crew and a
              straightforward measure: every property maintained as if it were
              his own. That approach built a reputation, and the reputation
              built the company. Today, KJS operates multiple crews across a
              territory stretching from the Greater Toronto Area to the
              Muskokas, serving some of Ontario&apos;s most demanding
              condominium corporations, retirement communities, and commercial
              accounts.
            </p>
            <p className="font-body text-[15px] text-slate leading-[1.8] mb-7">
              Jodie Smith has been part of KJS from the beginning. She is the
              operational foundation that keeps a family business running when
              the crews are in the field and the phones are ringing. Their sons
              Tyler and Bryden grew up in the company, learning the trade and
              the standard firsthand, and now carry both forward as part of the
              team. For the Smiths, these aren&apos;t just properties. They&apos;re
              the communities that have trusted the family for nearly three
              decades.
            </p>

            <div className="w-12 h-[2px] bg-amber mb-7" />

            <p className="font-display text-[20px] font-medium text-ink mb-4">
              Kevin Smith, Founder &amp; Owner
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
              &ldquo;The most valuable thing we offer isn&apos;t equipment or
              manpower. It&apos;s one team that designs it, builds it, and
              maintains it.&rdquo;
            </p>
            <p className="font-display text-[22px] font-semibold text-amber-lt mb-3">
              Design. Build. Maintain.
            </p>
            <p className="font-body text-[14px] text-white/55 leading-[1.7]">
              For property managers and HOA boards, that means consistent
              standards from day one, accountability that doesn&apos;t
              disappear after handover, and a landscape that improves with
              each season.
            </p>
          </div>

          {/* Territory card */}
          <div className="bg-chalk p-9">
            <p className="font-ui text-[10px] font-bold tracking-[0.25em] uppercase text-amber mb-3">
              Service Territory
            </p>
            <p className="font-body text-[14px] text-slate leading-[1.8] mb-4">
              KJS is based in{' '}
              <strong className="text-ink font-medium">Simcoe County</strong>,
              placing our crews within reach of the{' '}
              <strong className="text-ink font-medium">
                Greater Toronto Area
              </strong>{' '}
              to the south, the{' '}
              <strong className="text-ink font-medium">Muskokas</strong>{' '}
              to the north, and{' '}
              <strong className="text-ink font-medium">Collingwood</strong>{' '}
              to the west. That coverage reflects 27 years of clients who
              stayed, referred, and expanded across Ontario&apos;s most
              demanding residential and commercial markets.
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
