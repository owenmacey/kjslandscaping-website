import { STATS } from '@/lib/constants'

export default function Stats() {
  return (
    <section
      id="stats"
      aria-label="Key statistics"
      className="bg-forest border-t-[3px] border-amber"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="py-10 px-12 text-center flex flex-col items-center justify-center"
          >
            <div className="font-display font-light text-[56px] leading-none text-white mb-2.5">
              {stat.value}
              {stat.accent && (
                <span className="text-amber-lt text-[32px] leading-none align-middle mx-2">
                  {stat.accent}
                </span>
              )}
              {stat.suffix && (
                <span className={stat.suffixIsAccent ? 'text-amber-lt' : ''}>
                  {stat.suffix}
                </span>
              )}
            </div>
            <div className="font-ui text-[10px] font-semibold tracking-[0.2em] uppercase text-white/55">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
