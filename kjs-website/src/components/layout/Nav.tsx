'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { NAV_LINKS } from '@/lib/constants'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) setMenuOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <>
      <nav
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-50 h-20 flex items-center justify-between px-6 md:px-12 transition-all duration-[350ms] ${
          scrolled
            ? 'bg-deep shadow-[0_2px_24px_rgba(0,0,0,0.4)]'
            : 'bg-transparent'
        }`}
      >
        <Link href="#hero" aria-label="KJS Landscaping Home" className="shrink-0">
          <Image
            src="/kjs_logo.png"
            alt="KJS Landscaping"
            width={200}
            height={52}
            className="h-[52px] w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-ui text-[11px] font-semibold tracking-[0.12em] uppercase text-white/85 hover:text-amber-lt transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="ml-6 font-ui text-[11px] font-bold tracking-[0.12em] uppercase bg-amber text-white px-[22px] py-[10px] rounded-[2px] hover:bg-amber-lt transition-colors duration-200"
          >
            Get a Quote
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col justify-between w-6 h-[18px]"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
        >
          <span className="block w-full h-[2px] bg-white rounded-sm" />
          <span className="block w-full h-[2px] bg-white rounded-sm" />
          <span className="block w-full h-[2px] bg-white rounded-sm" />
        </button>
      </nav>

      {/* Mobile full-screen overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-deep z-[60] flex flex-col items-center justify-center animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <button
            className="absolute top-7 right-7 text-white text-[28px] leading-none opacity-70 hover:opacity-100 transition-opacity"
            onClick={close}
            aria-label="Close menu"
          >
            &#x2715;
          </button>

          <nav className="flex flex-col items-center gap-8 mb-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-display text-4xl text-white hover:text-amber-lt transition-colors duration-200"
                onClick={close}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="#contact"
            className="font-ui text-[12px] font-bold tracking-[0.15em] uppercase bg-amber text-white px-10 py-[15px] rounded-[2px] hover:bg-amber-lt transition-colors duration-200"
            onClick={close}
          >
            Get a Quote
          </Link>
        </div>
      )}
    </>
  )
}
