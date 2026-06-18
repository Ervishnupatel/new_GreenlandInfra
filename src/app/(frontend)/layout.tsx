import React from 'react'
import { Plus_Jakarta_Sans } from 'next/font/google'
import localFont from 'next/font/local'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { site } from '@/content/defaults'
import './styles.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

// Nevera (Almeera Studio / circlefont) — modern futuristic display, hero headline.
// NOTE: "Free For Personal Use" build; commercial use requires a license.
const nevera = localFont({
  src: '../../fonts/Nevera-Regular.otf',
  variable: '--font-display',
  display: 'swap',
})

export const metadata = {
  title: `${site.name} — ${site.tagline}`,
  description: site.tagline,
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" className={`${jakarta.variable} ${nevera.variable}`}>
      <body>
        <div className="grain" aria-hidden />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
