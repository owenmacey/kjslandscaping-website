import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="flex flex-col min-h-screen"
      style={{ paddingTop: '64px' }}
    >
      {/* Layer 1 — Top green band */}
      <div
        className="flex items-center justify-center px-6"
        style={{
          background: 'var(--forest)',
          minHeight: '15vh',
          borderBottom: '3px solid white',
        }}
      >
        <p
          className="font-display font-normal text-white text-center"
          style={{ fontSize: 'clamp(20px, 2.5vw, 32px)', letterSpacing: '0.05em' }}
        >
          Design{' '}
          <span style={{ color: 'var(--amber-lt)', fontWeight: 300 }}>·</span>
          {' '}Build{' '}
          <span style={{ color: 'var(--amber-lt)', fontWeight: 300 }}>·</span>
          {' '}Maintain
        </p>
      </div>

      {/* Layer 2 — Photo centre */}
      <div className="flex-1 relative flex flex-col items-center justify-center gap-6 px-6 md:px-12 py-12">
        {/* Background photo */}
        <Image
          src="/images/common-area/IMG_0135.JPG"
          alt="KJS Landscaping — professionally maintained property"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* White overlay — keeps text colours readable */}
        <div className="absolute inset-0" style={{ background: 'rgba(255,255,255,0.85)' }} />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-6">
          <Image
            src="/kjs_logo.png"
            alt="KJS Landscaping"
            width={420}
            height={140}
            className="w-[clamp(200px,70vw,320px)] md:w-[clamp(240px,30vw,420px)] h-auto"
          />

          <h1
            className="font-display font-light text-center leading-[1.15] max-w-[700px]"
            style={{ fontSize: 'clamp(28px, 4vw, 64px)', color: 'var(--ink)' }}
          >
            Elevating Your Outdoors
            <br />
            <em className="italic" style={{ color: 'var(--forest)' }}>with Expert Care.</em>
          </h1>

          <p
            className="font-ui font-semibold uppercase text-center"
            style={{ fontSize: '11px', letterSpacing: '0.2em', color: 'var(--slate)' }}
          >
            Premium Landscape Management · Since 1997
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-3">
            <Link
              href="#contact"
              className="w-full md:w-auto max-w-[280px] md:max-w-none text-center font-ui font-bold uppercase tracking-widest text-white bg-forest hover:bg-leaf transition-colors duration-200 rounded-[2px]"
              style={{ fontSize: '11px', padding: '13px 32px' }}
            >
              Request a Quote
            </Link>
            <Link
              href="#services"
              className="w-full md:w-auto max-w-[280px] md:max-w-none text-center font-ui font-bold uppercase tracking-widest text-forest border-2 border-forest hover:bg-forest hover:text-white transition-colors duration-200 rounded-[2px]"
              style={{ fontSize: '11px', padding: '13px 32px' }}
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>

    </section>
  )
}
