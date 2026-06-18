import { getProjects } from '@/lib/data'
import { featuredProjectsFallback } from '@/content/defaults'
import { ProjectCard } from '@/components/ProjectCard'

export const metadata = { title: 'Projects — Greenland Infra' }

export default async function ProjectsPage() {
  const live = await getProjects({ limit: 100 })
  const projects = live.length > 0 ? live : featuredProjectsFallback

  return (
    <section className="section section-alt">
      <div className="container">
        <header className="section-head">
          <h1 className="section-title">Projects</h1>
          <p className="lead">Our work across architecture, interiors and urban design.</p>
        </header>
        {live.length === 0 && (
          <p className="notice">
            Showing sample projects. Add projects in the admin panel to see them here.
          </p>
        )}
        <div className="grid grid-3">
          {projects.map((p: any, i: number) => (
            <ProjectCard key={p.id ?? `${p.title}-${i}`} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
