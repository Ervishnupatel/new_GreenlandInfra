export const metadata = { title: 'Terms & Conditions — Greenland Infra' }

export default function TermsPage() {
  return (
    <section className="section">
      <div className="container narrow">
        <span className="eyebrow">Legal</span>
        <h1 className="section-title">Terms &amp; Conditions</h1>
        <div className="prose prose-lg">
          <p className="muted">Last updated: {new Date().getFullYear()}</p>
          <p>
            By accessing and using this website, you agree to the following terms. Please read them
            carefully before using our services.
          </p>
          <h3>Use of the site</h3>
          <p>
            All content on this site — including text, imagery and designs — is the property of
            Greenland Infra and may not be reproduced without permission.
          </p>
          <h3>Services</h3>
          <p>
            Any project engagement is governed by a separate written agreement. Information on this
            site is for general guidance and does not constitute a contract.
          </p>
          <h3>Liability</h3>
          <p>
            We take care to keep this site accurate and available, but we are not liable for any
            loss arising from its use.
          </p>
          <p className="muted">
            This is placeholder text — replace it with your finalised terms before going live.
          </p>
        </div>
      </div>
    </section>
  )
}
