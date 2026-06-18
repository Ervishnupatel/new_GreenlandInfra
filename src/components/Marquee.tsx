/** A continuously scrolling row of words — pure CSS animation. */
export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items]
  return (
    <div className="marquee" aria-hidden>
      <div className="marquee-track">
        {row.map((t, i) => (
          <span key={i} className="marquee-item">
            {t}
            <span className="marquee-dot">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
