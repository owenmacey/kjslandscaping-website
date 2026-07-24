import Link from 'next/link'

interface ButtonProps {
  variant?: 'primary' | 'outline'
  href?: string
  children: React.ReactNode
  className?: string
}

const BASE =
  'inline-block font-ui text-[12px] tracking-[0.15em] uppercase rounded-[2px] transition px-9 py-[15px] cursor-pointer'

const VARIANTS = {
  primary:
    'bg-amber text-white font-bold hover:bg-amber-lt hover:-translate-y-px',
  outline:
    'border border-white/35 text-white/85 font-semibold hover:border-amber-lt hover:text-amber-lt',
}

export default function Button({
  variant = 'primary',
  href,
  children,
  className = '',
}: ButtonProps) {
  const cls = `${BASE} ${VARIANTS[variant]} ${className}`

  if (href) {
    if (href.startsWith('#') || href.startsWith('/')) {
      return (
        <Link href={href} className={cls}>
          {children}
        </Link>
      )
    }
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    )
  }

  return <button className={cls}>{children}</button>
}
