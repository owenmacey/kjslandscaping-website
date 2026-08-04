import { Smartphone, Phone, Mail, Globe, MapPin } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { CONTACT } from '@/lib/constants'

type ContactRow =
  | { Icon: LucideIcon; label: string; value: string; href: string; external?: boolean }
  | { Icon: LucideIcon; label: string; value: string }

const CONTACT_ROWS: ContactRow[] = [
  { Icon: Smartphone, label: 'Cell', value: CONTACT.cell, href: CONTACT.cellHref },
  { Icon: Phone, label: 'Office', value: CONTACT.office, href: CONTACT.officeHref },
  { Icon: Mail, label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { Icon: Globe, label: 'Website', value: CONTACT.website, href: CONTACT.websiteHref, external: true },
  { Icon: MapPin, label: 'Location', value: CONTACT.location },
]

export default function Contact() {
  return (
    <section
      id="contact"
      aria-label="Contact KJS Landscaping"
      className="bg-forest py-[100px] px-6 md:px-12"
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

        {/* Left */}
        <div>
          <p className="font-ui text-[10px] font-bold tracking-[0.25em] uppercase text-amber-lt mb-4">
            Get In Touch
          </p>
          <h2 className="font-display text-[clamp(36px,4vw,56px)] font-normal text-white leading-[1.15] mb-6">
            Ready to Elevate
            <br />
            <em className="italic">Your Property?</em>
          </h2>
          <p className="font-body text-[15px] text-white/65 leading-[1.75] mb-9">
            If you manage a condominium, retirement community, or commercial
            property, a conversation with KJS starts with a site visit, not a
            sales call. Kevin Smith personally leads every initial consultation,
            because the right programme starts with actually seeing what your
            property needs.
          </p>
          <a
            href={`mailto:${CONTACT.email}`}
            className="inline-block font-ui text-[12px] font-bold tracking-[0.15em] uppercase bg-amber text-white px-9 py-[15px] rounded-[2px] hover:bg-amber-lt hover:-translate-y-px transition"
          >
            Send Us an Email
          </a>
        </div>

        {/* Right — contact card */}
        <div className="bg-white/[0.06] border border-white/[0.1] p-12 rounded-[2px]">
          <h3 className="font-display text-[28px] font-normal text-white mb-8">
            Contact KJS Landscaping
          </h3>

          <div className="flex flex-col gap-5 mb-9">
            {CONTACT_ROWS.map((row) => (
              <div key={row.label} className="flex items-center gap-4">
                <div className="w-9 h-9 bg-amber rounded-full flex items-center justify-center shrink-0">
                  <row.Icon size={16} strokeWidth={2} color="white" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="font-ui text-[9px] font-semibold tracking-[0.15em] uppercase text-white/40">
                    {row.label}
                  </span>
                  {'href' in row ? (
                    <a
                      href={row.href}
                      {...('external' in row && row.external
                        ? { target: '_blank', rel: 'noopener' }
                        : {})}
                      className="font-body text-[15px] text-white hover:text-amber-lt transition-colors"
                    >
                      {row.value}
                    </a>
                  ) : (
                    <span className="font-body text-[15px] text-white">
                      {row.value}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <a
            href={CONTACT.cellHref}
            className="block w-full font-ui text-[12px] font-bold tracking-[0.15em] uppercase bg-amber text-white py-4 text-center rounded-[2px] hover:bg-amber-lt transition-colors"
          >
            Call Now
          </a>
        </div>
      </div>
    </section>
  )
}
