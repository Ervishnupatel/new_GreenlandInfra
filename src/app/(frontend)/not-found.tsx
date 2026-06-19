import Link from 'next/link'
import { CornerShape } from '@/components/CornerShape'

export const metadata = { title: 'Page not found — Greenland Infra' }

export default function NotFound() {
  return (
    <section className="notfound blueprint-dark">
      <CornerShape variant="blob" seed={1} className="corner-shape--tl" />
      <CornerShape variant="blob" seed={2} className="corner-shape--br" />
      <div className="container notfound-inner">
        <span className="eyebrow notfound-eyebrow">Error 404</span>
        <h1 className="notfound-code">404</h1>
        <p className="notfound-title">This page is still on the drawing board.</p>
        <p className="notfound-text">
          The page you&apos;re looking for doesn&apos;t exist, may have moved, or hasn&apos;t been
          built yet.
        </p>
        <div className="notfound-actions">
          <Link href="/" className="btn">
            Back home
          </Link>
          <Link href="/projects" className="link-arrow">
            View projects
          </Link>
        </div>
      </div>
    </section>
  )
}
