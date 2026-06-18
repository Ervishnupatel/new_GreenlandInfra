/** Monochrome social glyphs (currentColor) — adopt the surrounding theme color. */
const paths: Record<string, React.ReactNode> = {
  instagram: (
    <>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </>
  ),
  linkedin: (
    <>
      <rect x="2" y="2" width="20" height="20" rx="3" />
      <line x1="7" y1="10" x2="7" y2="17" />
      <line x1="7" y1="6.8" x2="7" y2="6.8" />
      <path d="M11 17v-4a2.5 2.5 0 0 1 5 0v4" />
      <line x1="11" y1="10" x2="11" y2="17" />
    </>
  ),
  facebook: <path d="M14 9h2V6h-2a3 3 0 0 0-3 3v2H9v3h2v6h3v-6h2.2l.8-3H14V9.5A.5.5 0 0 1 14 9z" />,
  youtube: (
    <>
      <rect x="2.5" y="5.5" width="19" height="13" rx="3.5" />
      <path d="M10.5 9.2l5 2.8-5 2.8z" fill="currentColor" stroke="none" />
    </>
  ),
  pinterest: (
    <>
      <circle cx="12" cy="12" r="9.5" />
      <path d="M12 7.2c-2.2 0-3.6 1.4-3.6 3.2 0 .9.4 1.8 1.2 2.1.1 0 .2 0 .2-.1l.2-.7c0-.1 0-.2-.1-.3a1.7 1.7 0 0 1-.4-1.1c0-1.3 1-2.4 2.6-2.4 1.4 0 2.2.9 2.2 2 0 1.6-.7 2.9-1.7 2.9-.6 0-1-.5-.9-1.1.2-.7.5-1.4.5-1.9 0-.4-.2-.8-.7-.8-.6 0-1 .6-1 1.4 0 .5.2.9.2.9l-.8 3.2c-.2.9-.1 2 0 2.1 0 .1.1.1.2 0 .1-.1.8-1 1-1.9l.4-1.4c.3.5.9.8 1.6.8 2.1 0 3.5-1.9 3.5-4.4 0-1.9-1.6-3.6-4.1-3.6z" fill="currentColor" stroke="none" />
    </>
  ),
}

export function SocialIcon({ name }: { name: string }) {
  const icon = paths[name.toLowerCase()]
  if (!icon) return <span className="social-fallback">{name[0].toUpperCase()}</span>
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {icon}
    </svg>
  )
}
