'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Leaf, Snowflake, Hammer, Sprout } from 'lucide-react'
import { IMAGES, SERVICES } from '@/lib/constants'

const SERVICE_ICONS = [Leaf, Snowflake, Hammer, Sprout]
const SERVICE_IMAGES = [
  IMAGES.services.maintenance,
  IMAGES.services.snow,
  IMAGES.services.construction,
  IMAGES.services.interior,
]
const SERVICE_ALTS = [
  'Lawn maintenance and grounds care',
  'Snow and ice management',
  'Landscape construction and hardscaping',
  'Interior landscaping and plant displays',
]

export default function Services() {
  const cardRefs = useRef<(HTMLElement | null)[]>([])
  const [visible, setVisible] = useState<boolean[]>(
    () => new Array(SERVICES.length).fill(false)
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = cardRefs.current.indexOf(entry.target as HTMLElement)
            if (idx !== -1) {
              const delay = idx * 100
              setTimeout(() => {
                setVisible((prev) => {
                  const next = [...prev]
                  next[idx] = true
                  return next
                })
              }, delay)
              observer.unobserve(entry.target)
            }
          }
        })
      },
      { threshold: 0.1 }
    )

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="services"
      aria-label="Services"
      className="bg-chalk py-[100px] px-6 md:px-12"
    >
      {/* Header */}
      <div className="text-center mb-16 max-w-[700px] mx-auto">
        <p className="font-ui text-[10px] font-bold tracking-[0.25em] uppercase text-amber mb-4">
          What We Do
        </p>
        <h2 className="font-display text-[clamp(32px,4vw,56px)] font-normal text-ink leading-[1.15] mb-5">
          Four-Season Landscape{' '}
          <em className="italic text-forest">Management</em>
        </h2>
        <p className="font-body text-[16px] text-slate leading-[1.7]">
          KJS operates as a full-service landscape partner year-round. One
          company handling maintenance and snow
          for the same properties across every season. One point of contact,
          consistent crews, and the same high standard from the first spring
          cut to the last winter salt.
        </p>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2px] max-w-[1400px] mx-auto">
        {SERVICES.map((service, i) => {
          const Icon = SERVICE_ICONS[i]
          return (
            <article
              key={service.title}
              ref={(el) => {
                cardRefs.current[i] = el
              }}
              className={`relative bg-white overflow-hidden group transition-all duration-[600ms] hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.1)] ${
                visible[i]
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
            >
              {/* Amber bottom border */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-amber scale-x-0 origin-left transition-transform duration-[350ms] group-hover:scale-x-100" />

              {/* Card photo */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={SERVICE_IMAGES[i]}
                  alt={SERVICE_ALTS[i]}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-white to-transparent" />
              </div>

              {/* Card content */}
              <div className="p-12">
                <div className="w-[52px] h-[52px] bg-chalk rounded-full flex items-center justify-center mb-6">
                  <Icon size={24} strokeWidth={1.5} style={{ color: 'var(--forest)' }} />
                </div>
                <h3 className="font-display text-[26px] font-medium text-ink leading-[1.2] mb-4">
                  {service.title}
                </h3>
                <p className="font-body text-[14px] text-slate leading-[1.7] mb-6">
                  {service.description}
                </p>
                <ul className="flex flex-col gap-2.5">
                  {service.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-3 font-body text-[13px] text-slate leading-[1.5]"
                    >
                      <span className="block w-4 h-[2px] bg-amber mt-2 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
