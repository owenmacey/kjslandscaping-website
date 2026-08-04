import Image from 'next/image'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      id="footer"
      className="bg-deep border-t border-white/[0.07] py-12 px-6 md:px-12"
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between flex-wrap gap-6">
        <Image
          src="/kjs_logo.png"
          alt="KJS Landscaping"
          width={110}
          height={44}
          className="h-11 w-auto object-contain opacity-90"
        />
        <p className="font-display text-[16px] italic text-white/45">
          Elevating Your Outdoors with Expert Care.
        </p>
        <div className="flex flex-col items-end gap-1">
          <p className="font-ui text-[12px] text-white/25">
            &copy; {year} {' '} &middot; KJS Landscaping &middot; Est. 1997 &middot; Simcoe County, ON
          </p>
          <p className="font-ui text-[9px] text-white/20 tracking-widest">
            Site by MadeByMacey
          </p>
        </div>
      </div>
    </footer>
  )
}
