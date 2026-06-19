import { whatWeDo } from '@/content/defaults'
import { Reveal } from '@/components/Reveal'
import { CornerShape } from '@/components/CornerShape'

export function WhatWeDo() {
  return (
    <section className="section decor-section" id="what-we-do">
      <CornerShape variant="blob" seed={1} className="corner-shape--dark corner-shape--tr" />
      <div className="container">
        <Reveal>
          <header className="section-head">
            <span className="eyebrow">01 — Our Practice</span>
            <h2 className="section-title">{whatWeDo.title}</h2>
            <p className="lead">{whatWeDo.intro}</p>
          </header>
        </Reveal>

        <div className="service-list">
          {whatWeDo.services.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <article className="service-row">
                <span className="service-num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="service-name">{s.title}</h3>
                <p className="service-desc">{s.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
