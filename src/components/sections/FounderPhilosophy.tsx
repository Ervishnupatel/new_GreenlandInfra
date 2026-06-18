import Image from 'next/image'
import { getFounder } from '@/lib/data'
import { founderPhilosophy as fallback } from '@/content/defaults'
import { mediaSrc } from '@/lib/media'

export async function FounderPhilosophy() {
  const founder = await getFounder()
  const { url, alt } = mediaSrc(founder?.photo)

  const name = founder?.name || fallback.name
  const role = founder?.role || fallback.role
  const quote = founder?.philosophy || fallback.quote

  return (
    <section className="section section-alt">
      <div className="container">
        <header className="section-head">
          <h2>{fallback.title}</h2>
        </header>
        <div className="founder">
          <div className="founder-photo">
            {url ? (
              <Image src={url} alt={alt || name} fill sizes="(max-width: 768px) 100vw, 40vw" />
            ) : (
              <div className="thumb-placeholder" aria-hidden />
            )}
          </div>
          <div className="founder-body">
            <blockquote>“{quote}”</blockquote>
            {fallback.body.map((p, i) => (
              <p key={i} className="muted">
                {p}
              </p>
            ))}
            <p className="founder-name">
              <strong>{name}</strong>
              <span className="muted"> — {role}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
