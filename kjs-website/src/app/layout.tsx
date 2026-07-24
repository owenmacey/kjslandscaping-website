import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, DM_Sans, Montserrat } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
})

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
})

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})

export const metadata: Metadata = {
  title: 'KJS Landscaping | Elevating Your Outdoors with Expert Care',
  description:
    'Family-run premium landscape management company serving the GTA, Muskokas & Collingwood since 1997. Spring/Fall maintenance, Snow & Ice, Landscape Construction.',
  icons: {
    icon: '/kjs_tree_symbol.png',
    apple: '/kjs_tree_symbol.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0B2316',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} ${montserrat.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
