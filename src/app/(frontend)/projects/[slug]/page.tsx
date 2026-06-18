import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { getProjectBySlug } from '@/lib/data'
import { mediaSrc } from '@/lib/media'

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)
  if (!project) notFound()

  const hero = mediaSrc(project.hero)
  const gallery = Array.isArray(project.gallery) ? project.gallery : []

  return (
    <article className="project-detail">
      <div className="project-hero">
        {hero.url ? (
          <Image src={hero.url} alt={hero.alt || project.title} fill priority sizes="100vw" />
        ) : (
          <div className="thumb-placeholder" aria-hidden />
        )}
      </div>

      <div className="container narrow">
        <header className="section-head">
          <h1>{project.title}</h1>
          <p className="muted">
            {[project.category, project.location, project.year].filter(Boolean).join(' · ')}
          </p>
        </header>

        {project.description && (
          <div className="prose">
            <RichText data={project.description as any} />
          </div>
        )}

        {gallery.length > 0 && (
          <div className="gallery">
            {gallery.map((item: any, i: number) => {
              const img = mediaSrc(item.image)
              if (!img.url) return null
              return (
                <figure key={item.id || i}>
                  <div className="gallery-img">
                    <Image src={img.url} alt={img.alt || ''} fill sizes="100vw" />
                  </div>
                  {item.caption && <figcaption className="muted">{item.caption}</figcaption>}
                </figure>
              )
            })}
          </div>
        )}

        <p className="back-link">
          <Link href="/projects">← Back to projects</Link>
        </p>
      </div>
    </article>
  )
}
