/**
 * Decorative nested-line corner shapes for empty corners.
 * `blob` = organic topographic-style contour lines (default).
 * Also supports geometric rings / squares / diamond.
 * Rendered subtle and bleeding off the corner.
 */
type Variant = 'blob' | 'rings' | 'squares' | 'diamond'

// irregular radius multipliers (8 points) — different "seeds" give variety
const PRESETS: number[][] = [
  [1, 0.82, 1.12, 0.9, 1.06, 0.78, 1.14, 0.88],
  [0.95, 1.12, 0.84, 1.08, 0.8, 1.13, 0.9, 1.04],
  [1.1, 0.86, 1.0, 0.92, 1.15, 0.8, 1.06, 0.9],
]

function blobPath(cx: number, cy: number, r: number, radii: number[]): string {
  const n = radii.length
  const pts: [number, number][] = radii.map((m, i) => {
    const a = (i / n) * Math.PI * 2
    return [cx + Math.cos(a) * r * m, cy + Math.sin(a) * r * m]
  })
  let d = `M${pts[0][0].toFixed(1)},${pts[0][1].toFixed(1)}`
  for (let i = 0; i < n; i++) {
    const p0 = pts[(i - 1 + n) % n]
    const p1 = pts[i]
    const p2 = pts[(i + 1) % n]
    const p3 = pts[(i + 2) % n]
    const c1x = p1[0] + (p2[0] - p0[0]) / 6
    const c1y = p1[1] + (p2[1] - p0[1]) / 6
    const c2x = p2[0] - (p3[0] - p1[0]) / 6
    const c2y = p2[1] - (p3[1] - p1[1]) / 6
    d += `C${c1x.toFixed(1)},${c1y.toFixed(1)} ${c2x.toFixed(1)},${c2y.toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}`
  }
  return d + 'Z'
}

export function CornerShape({
  variant = 'blob',
  seed = 0,
  className = '',
}: {
  variant?: Variant
  seed?: number
  className?: string
}) {
  const c = 110
  const els: React.ReactNode[] = []
  const count = 7

  if (variant === 'blob') {
    const radii = PRESETS[seed % PRESETS.length]
    for (let i = 0; i < count; i++) {
      els.push(<path key={i} d={blobPath(c, c, 16 + i * 13, radii)} />)
    }
  } else if (variant === 'rings') {
    for (let i = 0; i < count; i++) els.push(<circle key={i} cx={c} cy={c} r={12 + i * 14} />)
  } else {
    for (let i = 0; i < count; i++) {
      const d = 14 + i * 13
      els.push(
        <rect
          key={i}
          x={c - d}
          y={c - d}
          width={d * 2}
          height={d * 2}
          transform={variant === 'diamond' ? `rotate(45 ${c} ${c})` : undefined}
        />,
      )
    }
  }

  return (
    <svg className={`corner-shape ${className}`.trim()} viewBox="0 0 220 220" fill="none" aria-hidden>
      {els}
    </svg>
  )
}
