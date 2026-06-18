/**
 * Layered wave divider — a filled curve plus a thin accent line, like the
 * reference. Reusable across the site for smooth section transitions.
 *
 * `fill` should match the LIGHT section the wave belongs to; the dark area
 * (footer / hero) shows through below it. Add `wave-divider--rise` via
 * className to flip it so the wave rises upward over a dark section.
 */
export function WaveDivider({
  fill = 'var(--bg-alt)',
  className = '',
}: {
  fill?: string
  className?: string
}) {
  return (
    <div className={`wave-divider ${className}`.trim()} aria-hidden>
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path
          className="wave-fill"
          fill={fill}
          d="M0,0 L1440,0 L1440,50 C1170,98 900,18 660,60 C470,94 210,86 0,52 Z"
        />
        <path
          className="wave-line"
          fill="none"
          vectorEffect="non-scaling-stroke"
          d="M0,66 C260,28 560,100 860,58 C1080,30 1280,64 1440,52"
        />
      </svg>
    </div>
  )
}
