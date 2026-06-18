import { whatWeDo } from '@/content/defaults'

export function WhatWeDo() {
  return (
    <section className="section">
      <div className="container">
        <header className="section-head">
          <h2>{whatWeDo.title}</h2>
          <p className="lead">{whatWeDo.intro}</p>
        </header>
        <div className="grid grid-4">
          {whatWeDo.services.map((s) => (
            <div key={s.title} className="card">
              <h3>{s.title}</h3>
              <p className="muted">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
