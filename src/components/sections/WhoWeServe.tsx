import { Building2, Landmark, TreePine, Factory, Home } from 'lucide-react'
import { SPECIALIZATIONS } from '@/lib/constants'

const SPEC_ICONS = [Building2, Landmark, TreePine, Factory, Home]

export default function WhoWeServe() {
  return (
    <section id="serve" aria-label="Who we serve" style={{ background: '#102C1A' }}>
      {/* Green stripe header */}
      <div className="bg-forest border-b-[3px] border-amber px-6 py-8 md:px-12 md:py-10">
        <p className="font-ui text-[10px] font-bold tracking-[0.25em] uppercase text-amber-lt mb-4">
          Who We Serve
        </p>
        <h2 className="font-display text-[clamp(32px,4vw,56px)] font-normal text-white leading-[1.15]">
          <span className="md:hidden">
            Properties That<br />
            <em className="italic">Set the Standard</em>
          </span>
          <span className="hidden md:inline">
            Properties That <em className="italic">Set the Standard</em>
          </span>
        </h2>
      </div>

      {/* Cards */}
      <div className="py-[100px] px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[2px] max-w-[1100px] mx-auto">
          {SPECIALIZATIONS.map((spec, i) => {
            const Icon = SPEC_ICONS[i]
            return (
              <div
                key={spec.title}
                className="bg-white/[0.10] border border-white/20 hover:bg-white/[0.16] transition-colors duration-200 px-7 py-10 text-center"
              >
                <div className="flex justify-center mb-[18px]">
                  <Icon size={28} strokeWidth={1.5} style={{ color: 'var(--amber-lt)' }} />
                </div>
                <h3 className="font-display text-[22px] font-medium text-white leading-[1.2] mb-3">
                  {spec.title}
                </h3>
                <p className="font-body text-[13px] text-white/70 leading-[1.6]">
                  {spec.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
