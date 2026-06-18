import Link from 'next/link'
import Image from 'next/image'
import { mediaSrc } from '@/lib/media'
import { slugify } from '@/lib/slug'

type CardProject = {
  title: string
  slug: string
  location?: string | null
  year?: number | null
  category?: string | null
  hero?: unknown
}

export function ProjectCard({
  project,
  index,
}: {
  project: CardProject
  index?: number
}) {
  const { url, alt } = mediaSrc(project.hero)
  const clean = slugify(project.slug || project.title || '')
  const href = clean ? `/projects/${clean}` : '#'
  const meta = [project.category, project.location, project.year].filter(Boolean).join(' · ')

  return (
    <Link href={href} className="project-card">
      <div className="project-thumb">
        {url ? (
          <Image src={url} alt={alt || project.title} fill sizes="(max-width: 768px) 100vw, 33vw" />
        ) : (
          <div className="thumb-placeholder" aria-hidden />
        )}
        {typeof index === 'number' && (
          <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
        )}
        <span className="project-view">View project</span>
      </div>
      <div className="project-meta">
        <h3>{project.title}</h3>
        <p className="muted">{meta}</p>
      </div>
    </Link>
  )
}
