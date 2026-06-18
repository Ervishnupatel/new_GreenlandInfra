import { statement } from '@/content/defaults'
import { Reveal } from '@/components/Reveal'

export function StatementBand() {
  return (
    <section className="statement blueprint-dark">
      <span className="plus plus--tl">+</span>
      <span className="plus plus--tr">+</span>
      <span className="plus plus--bl">+</span>
      <span className="plus plus--br">+</span>
      <div className="container">
        <Reveal>
          <span className="eyebrow statement-eyebrow">{statement.small}</span>
          <h2 className="statement-text">
            {statement.lines.map((line, i) => (
              <span key={i} className="statement-line">
                {line}
              </span>
            ))}
          </h2>
        </Reveal>
      </div>
    </section>
  )
}
