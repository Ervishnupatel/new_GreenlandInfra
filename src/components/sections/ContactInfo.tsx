import { getSiteSettings } from '@/lib/data'
import { site } from '@/content/defaults'
import { Reveal } from '@/components/Reveal'
import { SocialIcon } from '@/components/SocialIcon'
import { CornerShape } from '@/components/CornerShape'

export async function ContactInfo() {
  const settings = await getSiteSettings()

  const email = settings?.email || site.email
  const phone = settings?.phone || site.phone
  const address = settings?.address || site.address
  const social = { ...site.social, ...(settings?.social || {}) }
  const handles = Object.entries(social).filter(([, url]) => Boolean(url))

  return (
    <section className="section decor-section" id="contact">
      <CornerShape variant="blob" seed={0} className="corner-shape--dark corner-shape--br" />
      <div className="container">
        <Reveal>
          <header className="section-head">
            <span className="eyebrow">Contact</span>
            <h1 className="contact-headline">
              Let&apos;s start
              <br />
              your project.
            </h1>
            <p className="lead">Tell us about your vision — we usually reply within two days.</p>
            <a href={`mailto:${email}`} className="btn">
              {email}
            </a>
          </header>
        </Reveal>

        <Reveal delay={120}>
          <div className="contact-grid">
            <div className="contact-block">
              <span className="contact-label">Phone</span>
              <a href={`tel:${phone}`}>{phone}</a>
            </div>
            <div className="contact-block">
              <span className="contact-label">Studio</span>
              <p>{address}</p>
            </div>
            <div className="contact-block">
              <span className="contact-label">Follow</span>
              <div className="social-icons">
                {handles.map(([name, url]) => (
                  <a
                    key={name}
                    href={url as string}
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
        </Reveal>
      </div>
    </section>
  )
}
