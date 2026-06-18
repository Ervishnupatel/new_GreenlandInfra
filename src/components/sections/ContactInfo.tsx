import { getSiteSettings } from '@/lib/data'
import { site } from '@/content/defaults'

export async function ContactInfo() {
  const settings = await getSiteSettings()

  const email = settings?.email || site.email
  const phone = settings?.phone || site.phone
  const address = settings?.address || site.address
  const social = { ...site.social, ...(settings?.social || {}) }
  const handles = Object.entries(social).filter(([, url]) => Boolean(url))

  return (
    <section className="section">
      <div className="container">
        <header className="section-head">
          <h1>Contact Us</h1>
          <p className="lead">We&apos;d love to hear about your project.</p>
        </header>

        <div className="grid grid-2">
          <div className="contact-details">
            <p>
              <span className="muted">Email</span>
              <br />
              <a href={`mailto:${email}`}>{email}</a>
            </p>
            <p>
              <span className="muted">Phone</span>
              <br />
              <a href={`tel:${phone}`}>{phone}</a>
            </p>
            <p>
              <span className="muted">Studio</span>
              <br />
              {address}
            </p>
          </div>

          <div className="social-block">
            <p className="muted">Follow us</p>
            <ul className="social-list">
              {handles.map(([name, url]) => (
                <li key={name}>
                  <a href={url as string} target="_blank" rel="noopener noreferrer">
                    {name[0].toUpperCase() + name.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
