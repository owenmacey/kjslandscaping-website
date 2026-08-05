import Image from 'next/image'
import { Check } from 'lucide-react'
import { CHECKLIST, IMAGES } from '@/lib/constants'

export default function CommonArea() {
  return (
    <section aria-label="Landscape and Turf Division" className="flex flex-col md:flex-row">
      {/* Left — forest */}
      <div className="flex-1 min-h-[480px] bg-forest px-10 md:px-16 py-20 flex flex-col justify-center">
        <p className="font-ui text-[10px] font-bold tracking-[0.25em] uppercase text-amber-lt mb-4">
          Common Area Excellence
        </p>
        <h2 className="font-display text-[clamp(32px,3.5vw,52px)] font-normal text-white leading-[1.15] mb-6">
          Common Area
          <br />
          <em className="italic text-amber-lt">Excellence</em>
        </h2>
        <p className="font-body text-[15px] text-white/70 leading-[1.75] mb-8">
          The difference between a property that&apos;s simply maintained and
          one that&apos;s truly cared for is visible from the moment you
          arrive. At KJS Landscaping, our crews focus on the details that
          create lasting curb appeal and a welcoming environment for residents,
          visitors, and tenants. Every service visit is completed with
          consistency, precision, and pride, ensuring your property always
          presents its best.
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
            A landscape that&apos;s simply maintained sends one message. A
            landscape that&apos;s consistently cared for throughout every
            season creates an entirely different experience for the people who
            live, work, and visit your property. At KJS Landscaping, every
            visit is guided by the same commitment to quality, attention to
            detail, and proactive care. We don&apos;t just maintain landscapes
            — we help preserve and enhance the appearance, value, and enjoyment
            of your property, season after season.
          </p>
        </div>
      </div>
    </section>
  )
}
