import { PARTNERS } from '@/lib/constants'

export default function Partners() {
  const doubled = [...PARTNERS, ...PARTNERS]

  return (
    <section
      id="partners"
      aria-label="Our Partners"
      className="bg-white py-20"
    >
      <div className="text-center px-6 md:px-12 mb-12">
        <p className="font-ui text-[10px] font-bold tracking-[0.25em] uppercase text-amber mb-4">
          Trusted By
        </p>
        <h2 className="font-display text-[clamp(32px,4vw,56px)] font-normal text-ink leading-[1.15]">
          Long-Standing <em className="italic text-forest">Partnerships</em>
        </h2>
      </div>

      {/* Marquee */}
      <div
        className="marquee-wrap relative overflow-hidden border-t border-b border-mist"
        aria-label="Scrolling list of partners"
      >
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />

        <div
          className="marquee-track flex items-center py-5 w-max animate-marquee"
          aria-hidden="true"
        >
          {doubled.map((partner, i) => (
            <div
              key={`${partner}-${i}`}
              className="flex items-center px-12 relative"
            >
              <span className="font-display text-[22px] font-medium text-slate hover:text-forest transition-colors cursor-default whitespace-nowrap">
                {partner}
              </span>
              <div className="absolute right-0 top-[15%] h-[70%] w-px bg-mist" />
            </div>
          ))}
        </div>
      </div>

      <p className="text-center mt-6 px-6 font-body text-[13px] italic text-slate">
        A growing network of condominium corporations, retirement communities, and commercial property managers who trust KJS Landscaping season after season.
      </p>
    </section>
  )
}
