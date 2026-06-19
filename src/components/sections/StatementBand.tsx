import { statement } from '@/content/defaults'
import { Reveal } from '@/components/Reveal'
import { CornerShape } from '@/components/CornerShape'

export function StatementBand() {
  return (
    <section className="statement blueprint-dark">
      <CornerShape variant="blob" seed={0} className="corner-shape--tr" />
      <CornerShape variant="blob" seed={1} className="corner-shape--bl" />
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
