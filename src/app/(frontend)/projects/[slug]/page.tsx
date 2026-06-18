import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { getProjectBySlug } from '@/lib/data'
import { featuredProjectsFallback } from '@/content/defaults'
import { mediaSrc } from '@/lib/media'
import { Reveal } from '@/components/Reveal'

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const live = await getProjectBySlug(slug)
  const project: any = live || featuredProjectsFallback.find((p) => p.slug === slug)
  if (!project) notFound()

  const hero = mediaSrc(project.hero)
  const gallery = Array.isArray(project.gallery) ? project.gallery : []
  const facts = [
    { label: 'Year', value: project.year },
    { label: 'Location', value: project.location },
    { label: 'Category', value: project.category },
    { label: 'Area', value: project.area },
    { label: 'Client', value: project.client },
    {
      label: 'Services',
      value: Array.isArray(project.services) ? project.services.join(', ') : project.services,
    },
  ].filter((f) => f.value)

  const descIsArray = Array.isArray(project.description)

  return (
    <article className="project-detail">
      {/* hero */}
      <div className="pd-hero">
        <div className="pd-hero-media">
          {hero.url ? (
            <Image src={hero.url} alt={hero.alt || project.title} fill priority sizes="100vw" />
          ) : (
            <div className="thumb-placeholder" aria-hidden />
          )}
          <div className="pd-hero-scrim" aria-hidden />
        </div>
        <span className="plus plus--tl">+</span>
        <span className="plus plus--tr">+</span>
        <span className="plus plus--bl">+</span>
        <span className="plus plus--br">+</span>
        <div className="container pd-hero-inner">
          <Link href="/projects" className="pd-back">
            All projects
          </Link>
          <span className="eyebrow">{project.category}</span>
          <h1 className="pd-title">{project.title}</h1>
          <p className="pd-loc">
            {[project.location, project.year].filter(Boolean).join(' · ')}
          </p>
        </div>
      </div>

      {/* spec sheet */}
      <section className="section pd-facts-section">
        <div className="container">
          <div className="pd-axis" aria-hidden>
            <span className="axis-plus">+</span>
            <span className="axis-line" />
            <span className="axis-label">Project Information</span>
            <span className="axis-line" />
            <span className="axis-plus">+</span>
          </div>
          <Reveal>
            <dl className="pd-facts">
              {facts.map((f) => (
                <div className="pd-fact" key={f.label}>
                  <dt className="pd-fact-label">{f.label}</dt>
                  <dd className="pd-fact-value">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* overview */}
      <section className="section">
        <div className="container pd-overview">
          {project.summary && (
            <Reveal>
              <p className="pd-summary">{project.summary}</p>
            </Reveal>
          )}
          <Reveal delay={120}>
            <div className="prose prose-lg">
              {descIsArray ? (
                project.description.map((p: string, i: number) => <p key={i}>{p}</p>)
              ) : project.description ? (
                <RichText data={project.description as any} />
              ) : null}
            </div>
          </Reveal>
        </div>
      </section>

      {/* gallery */}
      {gallery.length > 0 && (
        <section className="section section-alt">
          <div className="container">
            <span className="eyebrow">Gallery</span>
            <div className="pd-gallery">
              {gallery.map((item: any, i: number) => {
                const img = mediaSrc(item.image ?? item)
                if (!img.url) return null
                return (
                  <Reveal key={item.id || i} delay={(i % 2) * 90} className="pd-gallery-item">
                    <figure>
                      <div className="pd-gallery-img">
                        <Image src={img.url} alt={img.alt || ''} fill sizes="(max-width: 768px) 100vw, 50vw" />
                      </div>
                      {item.caption && <figcaption className="muted">{item.caption}</figcaption>}
                    </figure>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section pd-cta blueprint-dark">
        <span className="plus plus--tl">+</span>
        <span className="plus plus--tr">+</span>
        <span className="plus plus--bl">+</span>
        <span className="plus plus--br">+</span>
        <div className="container">
          <Reveal>
            <span className="eyebrow pd-cta-eyebrow">Like what you see?</span>
            <Link href="/contact" className="pd-cta-link">
              Start your project
            </Link>
            <p className="pd-cta-back">
              <Link href="/projects">Back to all projects</Link>
            </p>
          </Reveal>
        </div>
      </section>
    </article>
  )
}
