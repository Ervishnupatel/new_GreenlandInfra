import Link from 'next/link'
import { hero } from '@/content/defaults'

export function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <h1 className="hero-title">{hero.headline}</h1>
        <p className="hero-sub">{hero.subheadline}</p>
        <Link href={hero.ctaHref} className="btn">
          {hero.ctaLabel}
        </Link>
      </div>
    </section>
  )
}
