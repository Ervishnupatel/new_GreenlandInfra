import Link from 'next/link'
import { getProjects } from '@/lib/data'
import { projectsSection, featuredProjectsFallback } from '@/content/defaults'
import { ProjectCard } from '@/components/ProjectCard'

export async function FeaturedProjects() {
  const live = await getProjects({ featured: true, limit: 6 })
  const projects = live.length > 0 ? live : featuredProjectsFallback

  return (
    <section className="section section-alt">
      <div className="container">
        <header className="section-head">
          <h2>{projectsSection.title}</h2>
          <p className="lead">{projectsSection.intro}</p>
        </header>
        <div className="grid grid-3">
          {projects.map((p: any) => (
            <ProjectCard key={p.slug || p.title} project={p} />
          ))}
        </div>
        <div className="section-cta">
          <Link href="/projects" className="btn btn-ghost">
            View all projects
          </Link>
        </div>
      </div>
    </section>
  )
}
