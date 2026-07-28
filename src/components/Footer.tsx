import Link from 'next/link'
import { nav, site } from '@/content/defaults'
import { WaveDivider } from '@/components/WaveDivider'
import { SocialIcon } from '@/components/SocialIcon'
import { CornerShape } from '@/components/CornerShape'

export function Footer() {
  const year = new Date().getFullYear()
  const socials = Object.entries(site.social).filter(([, url]) => Boolean(url))

  return ( 
    <footer className="site-footer">
      <WaveDivider fill="var(--bg-alt)" />
      <CornerShape variant="blob" seed={0} className="corner-shape--br " />
      <div className="container">
        <div className="footer-cta">
          <p className="eyebrow">Have a project in mind?</p>
          <Link href="/contact" className="footer-cta-link">
            Let&apos;s work together
          </Link>
        </div>

        <div className="footer-inner">
          <div className="footer-brand">
            <p className="brand">{site.name}</p>
            <p className="muted">{site.tagline}</p>
          </div>
          {/* <nav className="footer-nav">
            <span className="footer-col-title">Menu</span>
            {nav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav> */}
          <div className="footer-social">
            <span className="footer-col-title">Social</span>
            <div className="social-icons">
              {socials.map(([name, url]) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label={name}
                >
                  <SocialIcon name={name} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {year} {site.name}. All rights reserved.
          </span>
          <div className="footer-legal">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
