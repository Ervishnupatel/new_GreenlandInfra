import Link from 'next/link'
import { getProjects } from '@/lib/data'
import { projectsSection, featuredProjectsFallback } from '@/content/defaults'
import { ProjectCard } from '@/components/ProjectCard'
import { Reveal } from '@/components/Reveal'
import { CornerShape } from '@/components/CornerShape'

export async function FeaturedProjects() {
  const live = await getProjects({ featured: true, limit: 6 })
  const projects = live.length > 0 ? live : featuredProjectsFallback

  return (
    <section className="section section-alt decor-section" id="work">
      <CornerShape variant="blob" seed={2} className="corner-shape--dark corner-shape--br" />
      <div className="container">
        <Reveal>
          <header className="section-head section-head--row">
            <div>
              <span className="eyebrow">02 — Portfolio</span>
              <h2 className="section-title">{projectsSection.title}</h2>
            </div>
            <Link href="/projects" className="link-arrow">
              All projects
            </Link>
          </header>
        </Reveal>

        <div className="grid grid-3">
          {projects.map((p: any, i: number) => (
            <Reveal key={p.id ?? `${p.title}-${i}`} delay={(i % 3) * 90}>
              <ProjectCard project={p} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
