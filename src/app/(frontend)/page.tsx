import { Hero } from '@/components/sections/Hero'
import { WhatWeDo } from '@/components/sections/WhatWeDo'
import { StatementBand } from '@/components/sections/StatementBand'
import { FeaturedProjects } from '@/components/sections/FeaturedProjects'
import { Marquee } from '@/components/Marquee'
import { marqueeWords } from '@/content/defaults'

// HOME: Hero (main) -> What We Do -> Statement -> Projects
export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <StatementBand />
      <Marquee items={marqueeWords} />
      <FeaturedProjects />
    </>
  )
}
