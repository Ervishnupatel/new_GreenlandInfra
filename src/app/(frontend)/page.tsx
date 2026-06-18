import { Hero } from '@/components/sections/Hero'
import { WhatWeDo } from '@/components/sections/WhatWeDo'
import { FeaturedProjects } from '@/components/sections/FeaturedProjects'

// HOME: Hero (main) -> What We Do -> Projects
export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <FeaturedProjects />
    </>
  )
}
