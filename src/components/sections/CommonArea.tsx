import Image from 'next/image'
import { Check } from 'lucide-react'
import { CHECKLIST, IMAGES } from '@/lib/constants'

export default function CommonArea() {
  return (
    <section aria-label="Landscape and Turf Division" className="flex flex-col md:flex-row">
      {/* Left — forest */}
      <div className="flex-1 min-h-[480px] bg-forest px-10 md:px-16 py-20 flex flex-col justify-center">
        <p className="font-ui text-[10px] font-bold tracking-[0.25em] uppercase text-amber-lt mb-4">
          Landscape &amp; Turf Division
        </p>
        <h2 className="font-display text-[clamp(32px,3.5vw,52px)] font-normal text-white leading-[1.15] mb-6">
          Common Area
          <br />
          <em className="italic text-amber-lt">Excellence</em>
        </h2>
        <p className="font-body text-[15px] text-white/70 leading-[1.75] mb-8">
          Our Landscape &amp; Turf Department specializes in common area
          maintenance that elevates every property we touch — from open
          greenspaces and medians to entrances and gathering areas.
        </p>
        <ul className="flex flex-col gap-3.5">
          {CHECKLIST.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3.5 font-body text-[14px] text-white/85"
            >
              <span className="w-6 h-6 bg-amber rounded-full flex items-center justify-center shrink-0">
                <Check size={12} strokeWidth={2.5} color="white" />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Right — deep with photo background */}
      <div className="relative flex-1 min-h-[480px] bg-deep overflow-hidden px-10 md:px-16 py-20 flex flex-col justify-center">
        <Image
          src={IMAGES.commonArea}
          alt="Well-maintained commercial landscape"
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-deep/70" />
        <div className="relative z-10">
          <p className="font-display text-[clamp(28px,3vw,42px)] font-light italic text-white leading-[1.2] mb-2">
            A Well-Maintained Landscape
          </p>
          <p className="font-display text-[clamp(32px,4vw,48px)] font-semibold text-amber-lt leading-[1.1] mb-7">
            Speaks Volumes.
          </p>
          <p className="font-body text-[15px] text-white/60 leading-[1.75]">
            It's more than mowing and trimming — it's about creating inviting
            environments that residents, tenants, and visitors are proud to walk
            through. Our crews take pride in delivering consistent, professional,
            and timely results with every visit.
          </p>
        </div>
      </div>
    </section>
  )
}
