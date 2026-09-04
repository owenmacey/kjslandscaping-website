'use client'

import { useEffect, useRef, useState } from 'react'
import { REVIEWS } from '@/lib/constants'

export default function Reviews() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const [visible, setVisible] = useState<boolean[]>([false, false, false])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const i = cardRefs.current.indexOf(entry.target as HTMLDivElement)
          if (entry.isIntersecting && i !== -1) {
            setVisible((prev) => {
              const next = [...prev]
              next[i] = true
              return next
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    cardRefs.current.forEach((ref) => { if (ref) observer.observe(ref) })
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="reviews"
      aria-label="Client reviews"
      className="bg-chalk py-[100px] px-6 md:px-12"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-ui text-[10px] font-bold tracking-[0.25em] uppercase text-amber mb-4">
            WHAT OUR CLIENTS SAY
          </p>
          <h2 className="font-display text-[clamp(32px,4vw,52px)] font-normal text-forest leading-[1.15] mb-6">
            Trusted by the Properties
            <br />
            <em className="italic">We&apos;re Proud to Maintain</em>
          </h2>
          <div className="w-12 h-[2px] bg-amber mx-auto" />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {REVIEWS.map((review, i) => (
            <div
              key={i}
              ref={(el) => { cardRefs.current[i] = el }}
              className={`bg-white px-9 py-10 border-b-[3px] border-amber transition-all duration-700 ${
                visible[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{
                boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                transitionDelay: `${i * 150}ms`,
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: review.stars }).map((_, si) => (
                  <span key={si} style={{ color: 'var(--amber)', fontSize: '16px' }}>★</span>
                ))}
              </div>

              {/* Decorative quote mark */}
              <span
                className="font-display font-light block mb-4"
                aria-hidden="true"
                style={{ fontSize: '80px', lineHeight: 0, color: 'var(--mist)' }}
              >
                &ldquo;
              </span>

              {/* Review body */}
              <p className="font-display text-[19px] font-normal italic text-ink leading-[1.7]">
                {review.body}
              </p>

              {/* Divider */}
              <div className="my-6" style={{ width: '32px', height: '1px', background: 'var(--amber)' }} />

              {/* Reviewer name */}
              <p className="font-body text-[14px] font-semibold text-ink">
                {review.name}
              </p>

              {/* Reviewer property */}
              <p className="font-ui text-[10px] font-semibold tracking-[0.15em] uppercase text-slate mt-1">
                {review.property}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
