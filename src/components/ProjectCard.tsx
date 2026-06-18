import Link from 'next/link'
import Image from 'next/image'
import { mediaSrc } from '@/lib/media'

type CardProject = {
  title: string
  slug: string
  location?: string | null
  year?: number | null
  category?: string | null
  hero?: unknown
}

export function ProjectCard({ project }: { project: CardProject }) {
  const { url, alt } = mediaSrc(project.hero)
  const href = project.slug && project.slug !== '#' ? `/projects/${project.slug}` : '#'

  return (
    <Link href={href} className="project-card">
      <div className="project-thumb">
        {url ? (
          <Image src={url} alt={alt || project.title} fill sizes="(max-width: 768px) 100vw, 33vw" />
        ) : (
          <div className="thumb-placeholder" aria-hidden />
        )}
      </div>
      <div className="project-meta">
        <h3>{project.title}</h3>
        <p className="muted">
          {[project.category, project.location, project.year].filter(Boolean).join(' · ')}
        </p>
      </div>
    </Link>
  )
}
