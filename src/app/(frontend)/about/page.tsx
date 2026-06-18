import { CompanyStory } from '@/components/sections/CompanyStory'
import { FounderPhilosophy } from '@/components/sections/FounderPhilosophy'

export const metadata = { title: 'About — Greenland Infra' }

// ABOUT: Company Story -> Founder Philosophy
export default function AboutPage() {
  return (
    <>
      <CompanyStory />
      <FounderPhilosophy />
    </>
  )
}
