'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { IMAGES } from '@/lib/constants'

const SLIDES = IMAGES.carousel
const N = SLIDES.length

const ALTS = [
  'Manicured lawn and grounds',
  'Premium landscape property',
  'Hardscape and patio construction',
  'Commercial common area',
  'Snow management and winter service',
  'Interior construction project',
]

const EASE = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'

// Circular offset: maps index i relative to active into range [-(N/2), N/2]
function circularOffset(i: number, active: number, total: number): number {
  const raw = ((i - active) % total + total) % total
  return raw > Math.floor(total / 2) ? raw - total : raw
}

type PosConfig = { left: string; width: string; opacity: number; scale: number; z: number }

function getPosConfig(offset: number, mobile: boolean): PosConfig | null {
  if (mobile) {
    if (offset === -1) return { left: '0%',  width: '15%', opacity: 0.5, scale: 0.92, z: 1 }
    if (offset === 0)  return { left: '15%', width: '70%', opacity: 1,   scale: 1,    z: 2 }
    if (offset === 1)  return { left: '85%', width: '15%', opacity: 0.5, scale: 0.92, z: 1 }
    return null
  }
  if (offset === -2) return { left: '0%',  width: '8%',  opacity: 0.4, scale: 0.88, z: 0 }
  if (offset === -1) return { left: '8%',  width: '20%', opacity: 0.8, scale: 0.95, z: 1 }
  if (offset === 0)  return { left: '28%', width: '44%', opacity: 1,   scale: 1,    z: 2 }
  if (offset === 1)  return { left: '72%', width: '20%', opacity: 0.8, scale: 0.95, z: 1 }
  if (offset === 2)  return { left: '92%', width: '8%',  opacity: 0.4, scale: 0.88, z: 0 }
  return null
}

export default function Carousel() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const pausedRef = useRef(false)
  const dirRef = useRef<'next' | 'prev'>('next')
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const touchStartX = useRef<number | null>(null)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)')
    setIsMobile(mq.matches)
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    if (pausedRef.current) return
    timerRef.current = setInterval(() => {
      dirRef.current = 'next'
      setActiveIdx(i => (i + 1) % N)
    }, 4000)
  }, [])

  useEffect(() => {
    startTimer()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [startTimer])

  const prev = useCallback(() => {
    dirRef.current = 'prev'
    setActiveIdx(i => (i - 1 + N) % N)
    startTimer()
  }, [startTimer])

  const next = useCallback(() => {
    dirRef.current = 'next'
    setActiveIdx(i => (i + 1) % N)
    startTimer()
  }, [startTimer])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev()
      else if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [prev, next])

  // Arrow positions anchor to edges of center slide
  const arrowL = isMobile ? 'calc(15% - 20px)' : 'calc(28% - 26px)'
  const arrowR = isMobile ? 'calc(85% - 20px)' : 'calc(72% - 26px)'

  return (
    <section
      aria-label="Photo gallery"
      className="bg-chalk py-[100px]"
      onMouseEnter={() => {
        pausedRef.current = true
        if (timerRef.current) clearInterval(timerRef.current)
      }}
      onMouseLeave={() => {
        pausedRef.current = false
        startTimer()
      }}
    >
      {/* Header */}
      <div className="text-center mb-12 px-6 md:px-12">
        <p className="font-ui text-[10px] font-bold tracking-[0.25em] uppercase text-amber mb-4">
          Our Work
        </p>
        <h2 className="font-display text-[clamp(32px,4vw,56px)] font-normal text-ink leading-[1.15]">
          Landscapes We&apos;re{' '}
          <em className="italic text-forest">Proud Of</em>
        </h2>
      </div>

      {/* Track */}
      <div
        className="relative overflow-hidden aspect-[4/3] md:aspect-[16/7]"
        onTouchStart={e => { touchStartX.current = e.touches[0].clientX }}
        onTouchEnd={e => {
          if (touchStartX.current === null) return
          const d = touchStartX.current - e.changedTouches[0].clientX
          if (d > 50) next()
          else if (d < -50) prev()
          touchStartX.current = null
        }}
      >
        {SLIDES.map((src, i) => {
          const offset = circularOffset(i, activeIdx, N)
          const pos = getPosConfig(offset, isMobile)
          // Hidden slides park off-screen in the direction of travel
          const hiddenLeft = dirRef.current === 'prev' ? '-8%' : '100%'

          return (
            <div
              key={i}
              className="absolute top-0 h-full"
              aria-hidden={offset !== 0}
              style={{
                left: pos?.left ?? hiddenLeft,
                width: pos?.width ?? '8%',
                opacity: pos?.opacity ?? 0,
                zIndex: pos?.z ?? 0,
                transition: `left 600ms ${EASE}, width 600ms ${EASE}, opacity 500ms ease-in-out`,
              }}
            >
              {/* Inner card — scale + ring */}
              <div
                className="relative w-full h-full overflow-hidden rounded-[2px]"
                style={{
                  transform: `scale(${pos?.scale ?? 0.88})`,
                  transition: `transform 500ms ease-in-out`,
                }}
              >
                <Image
                  src={src}
                  alt={ALTS[i] ?? 'KJS Landscaping work'}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 70vw, 44vw"
                  priority={i === 0}
                />

                {/* Dark overlay on non-active slides */}
                <div
                  className="absolute inset-0 bg-deep/30 transition-opacity duration-500"
                  style={{ opacity: offset === 0 ? 0 : 1 }}
                />

                {/* Amber ring on active slide */}
                <div
                  className="absolute inset-0 rounded-[2px] pointer-events-none transition-opacity duration-500"
                  style={{
                    boxShadow: 'inset 0 0 0 2px #DE671A',
                    opacity: offset === 0 ? 1 : 0,
                  }}
                />

                {/* Placeholder tag */}
                <span className="absolute top-3 left-3 bg-deep/50 text-white/50 font-ui text-[10px] tracking-widest uppercase px-3 py-1 pointer-events-none">
                  Placeholder — replace with KJS photo
                </span>
              </div>
            </div>
          )
        })}

        {/* Arrow — prev */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute top-1/2 -translate-y-1/2 z-10 flex items-center justify-center rounded-full bg-deep/70 hover:bg-deep border border-white/10 hover:border-amber text-white transition-all duration-200 w-10 h-10 md:w-[52px] md:h-[52px]"
          style={{ left: arrowL }}
        >
          <ChevronLeft size={22} strokeWidth={1.5} />
        </button>

        {/* Arrow — next */}
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute top-1/2 -translate-y-1/2 z-10 flex items-center justify-center rounded-full bg-deep/70 hover:bg-deep border border-white/10 hover:border-amber text-white transition-all duration-200 w-10 h-10 md:w-[52px] md:h-[52px]"
          style={{ left: arrowR }}
        >
          <ChevronRight size={22} strokeWidth={1.5} />
        </button>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 mt-6" role="tablist">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === activeIdx}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => { setActiveIdx(i); startTimer() }}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === activeIdx ? 'w-6 bg-amber' : 'w-2 bg-slate/40 hover:bg-slate/70'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
