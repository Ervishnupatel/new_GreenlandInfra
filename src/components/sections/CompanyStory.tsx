import { companyStory, stats } from '@/content/defaults'
import { Reveal } from '@/components/Reveal'

export function CompanyStory() {
  return (
    <section className="section" id="story">
      <div className="container story-container">
        {/* blueprint drafting grid behind the story */}
        <div className="story-grid-bg" aria-hidden />

        {/* architectural corner brackets */}
        <div className="corner-frame" aria-hidden>
          <span className="corner corner--tl" />
          <span className="corner corner--tr" />
          <span className="corner corner--bl" />
          <span className="corner corner--br" />
        </div>

        <Reveal>
          <div className="story-head">
            <span className="eyebrow">Our Story</span>
            <p className="story-lead">{companyStory.lead}</p>
          </div>
        </Reveal>

        {/* architectural axis line with survey marks */}
        <div className="story-axis" aria-hidden>
          <span className="axis-plus">+</span>
          <span className="axis-line" />
          <span className="axis-label">Est. 2009 — Present</span>
          <span className="axis-line" />
          <span className="axis-plus">+</span>
        </div>

        <div className="story-layout">
          <Reveal className="story-meta">
            <span className="since-label">Established</span>
            <span className="since-year">{companyStory.since}</span>
            <p className="muted">Greenland Infra — architecture &amp; design studio</p>
          </Reveal>

          <Reveal className="story-text" delay={120}>
            {companyStory.body.map((p, i) => (
              <p key={i} className={i === 0 ? 'story-dropcap' : undefined}>
                {p}
              </p>
            ))}
          </Reveal>
        </div>

        <div className="timeline">
          {companyStory.milestones.map((m, i) => (
            <Reveal key={m.year} delay={i * 80} className="timeline-item">
              <span className="timeline-year">{m.year}</span>
              <div className="timeline-body">
                <h3 className="timeline-title">{m.title}</h3>
                <p className="muted">{m.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="stats">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="stat">
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
