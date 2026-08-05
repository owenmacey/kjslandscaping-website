'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail } from 'lucide-react'
import { NAV_LINKS, CONTACT } from '@/lib/constants'

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
    return () => { document.body.style.overflow = '' }
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
      <div className="fixed top-0 left-0 right-0 z-50">
        {/* Top bar — desktop only */}
        <div className="hidden md:flex bg-forest h-9 items-center justify-between px-12">
          <span className="font-ui text-[10px] font-semibold tracking-[0.15em] uppercase text-white/80">
            Est. 1997 · Simcoe County, Ontario
          </span>
          <div className="flex items-center gap-6 font-ui text-[10px] font-semibold tracking-[0.15em] uppercase">
            <a
              href={CONTACT.officeHref}
              className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors duration-200"
            >
              <Phone size={11} className="text-white/70" />
              {CONTACT.office}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors duration-200"
            >
              <Mail size={11} className="text-white/70" />
              {CONTACT.email}
            </a>
          </div>
        </div>

        {/* Main nav bar */}
        <nav
          aria-label="Main navigation"
          className={`bg-white border-b-2 border-forest h-20 flex items-center justify-between px-6 md:px-12 transition-shadow duration-300 ${
            scrolled ? 'shadow-[0_2px_16px_rgba(0,0,0,0.1)]' : ''
          }`}
        >
          <Link href="#hero" aria-label="KJS Landscaping Home" className="shrink-0">
            <Image
              src="/kjs_logo.png"
              alt="KJS Landscaping"
              width={240}
              height={64}
              className="h-14 md:h-[60px] w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-9">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-ui text-[11px] font-semibold tracking-[0.12em] uppercase text-forest hover:text-amber transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="mailto:quotes.kjslandscaping@gmail.com"
              className="ml-6 font-ui text-[11px] font-bold tracking-[0.12em] uppercase bg-forest text-white px-[22px] py-[10px] rounded-[2px] hover:bg-leaf transition-colors duration-200"
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
            <span className="block w-full h-[2px] bg-forest rounded-sm" />
            <span className="block w-full h-[2px] bg-forest rounded-sm" />
            <span className="block w-full h-[2px] bg-forest rounded-sm" />
          </button>
        </nav>
      </div>

      {/* Mobile overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-white border-t-[3px] border-forest z-[60] flex flex-col items-center justify-center animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <button
            className="absolute top-7 right-7 text-forest text-[28px] leading-none opacity-70 hover:opacity-100 transition-opacity"
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
                className="font-display text-4xl text-forest hover:text-amber transition-colors duration-200"
                onClick={close}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="mailto:quotes.kjslandscaping@gmail.com"
            className="font-ui text-[12px] font-bold tracking-[0.15em] uppercase bg-forest text-white px-10 py-[15px] rounded-[2px] hover:bg-leaf transition-colors duration-200"
            onClick={close}
          >
            Get a Quote
          </Link>
        </div>
      )}
    </>
  )
}
