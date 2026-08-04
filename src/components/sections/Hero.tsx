'use client'

import Image from 'next/image'
import { IMAGES } from '@/lib/constants'

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative min-h-screen bg-deep flex flex-col items-center justify-center overflow-hidden px-6 md:px-12 pt-[120px] pb-24 text-center"
    >
      {/* Background photo */}
      <Image
        src={IMAGES.hero}
        alt="KJS Landscaping — professionally maintained property"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-deep/75" />

      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 30%, rgba(60,120,70,0.18) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-[860px]">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-4 mb-7">
          <div className="w-10 h-px" style={{ background: 'rgba(224,154,40,0.6)' }} />
          <span className="font-ui text-[11px] font-bold tracking-[0.25em] uppercase text-amber-lt">
            Est. 1997 · Simcoe County, Ontario
          </span>
          <div className="w-10 h-px" style={{ background: 'rgba(224,154,40,0.6)' }} />
        </div>

        {/* Headline */}
        <h1 className="font-display font-light text-[clamp(42px,6vw,88px)] leading-[1.1] text-white mb-5">
          Elevating Your Outdoors
          <br />
          with <em className="italic text-amber-lt">Expert Care.</em>
        </h1>

        {/* Sub-tagline */}
        <p className="font-ui text-[12px] font-semibold tracking-[0.3em] uppercase text-white/35 mb-8">
          Design · Build · Maintain
        </p>

        {/* Body */}
        {/* <p className="font-body font-light text-[17px] text-white/65 max-w-[560px] leading-[1.7] mx-auto mb-10">
          From the Greater Toronto Area north through the Muskokas, KJS manages
          grounds maintenance, snow operations, and landscape construction for
          the condominium corporations, retirement communities, and commercial
          properties that hold their grounds to a higher standard. A family-run
          company in its 27th year — the kind where the owner&apos;s name is
          still on every property we maintain.
        </p> */}

        {/* CTAs */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href="#contact"
            className="font-ui text-[12px] font-bold tracking-[0.15em] uppercase bg-amber text-white px-9 py-[15px] rounded-[2px] hover:bg-amber-lt hover:-translate-y-px transition"
          >
            Get a Free Quote
          </a>
          <a
            href="#services"
            className="font-ui text-[12px] font-semibold tracking-[0.15em] uppercase border border-white/35 text-white/85 px-9 py-[15px] rounded-[2px] hover:border-amber-lt hover:text-amber-lt transition"
          >
            Our Services
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        aria-hidden="true"
      >
        <span className="font-ui text-[9px] font-semibold tracking-[0.2em] uppercase text-white/35">
          Scroll
        </span>
        <div className="w-px h-8 bg-white/35 animate-scroll-pulse" />
      </div>
    </section>
  )
}
