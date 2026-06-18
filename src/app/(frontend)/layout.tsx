import React from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { site } from '@/content/defaults'
import './styles.css'

export const metadata = {
  title: `${site.name} — ${site.tagline}`,
  description: site.tagline,
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
