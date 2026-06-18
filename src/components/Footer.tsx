import Link from 'next/link'
import { nav, site } from '@/content/defaults'

export function Footer() {
  const year = new Date().getFullYear()
  const socials = Object.entries(site.social).filter(([, url]) => Boolean(url))

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <p className="brand">{site.name}</p>
          <p className="muted">{site.tagline}</p>
        </div>
        <nav className="footer-nav">
          {nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="footer-social">
          {socials.map(([name, url]) => (
            <a key={name} href={url} target="_blank" rel="noopener noreferrer">
              {name[0].toUpperCase() + name.slice(1)}
            </a>
          ))}
        </div>
      </div>
      <div className="container footer-bottom muted">
        © {year} {site.name}. All rights reserved.
      </div>
    </footer>
  )
}
