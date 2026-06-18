import Link from 'next/link'
import { hero } from '@/content/defaults'

export function Hero() {
  return (
    <section className="hero hero-fixed">
      <div className="hero-overlay" aria-hidden />
      <div className="hero-grid blueprint-light" aria-hidden />
      <span className="plus plus--tl plus--dark">+</span>
      <span className="plus plus--tr plus--dark">+</span>
      <span className="plus plus--bl plus--dark">+</span>
      <span className="plus plus--br plus--dark">+</span>
      <div className="container hero-inner">
        <span className="eyebrow">Architecture · Interiors · Urban Design</span>
        <h1 className="hero-title">{hero.headline}</h1>
        <p className="hero-sub">{hero.subheadline}</p>
        <Link href={hero.ctaHref} className="btn">
          {hero.ctaLabel}
        </Link>
      </div>
    </section>
  )
}
