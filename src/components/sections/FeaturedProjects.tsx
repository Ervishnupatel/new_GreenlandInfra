import Link from 'next/link'
import { getProjects } from '@/lib/data'
import { projectsSection, featuredProjectsFallback } from '@/content/defaults'
import { ProjectCard } from '@/components/ProjectCard'
import { Reveal } from '@/components/Reveal'

export async function FeaturedProjects() {
  const live = await getProjects({ featured: true, limit: 6 })
  const projects = live.length > 0 ? live : featuredProjectsFallback

  return (
    <section className="section section-alt" id="work">
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
