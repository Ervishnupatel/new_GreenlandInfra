export const metadata = { title: 'Privacy Policy — Greenland Infra' }

export default function PrivacyPolicyPage() {
  return (
    <section className="section">
      <div className="container narrow">
        <span className="eyebrow">Legal</span>
        <h1 className="section-title">Privacy Policy</h1>
        <div className="prose prose-lg">
          <p className="muted">Last updated: {new Date().getFullYear()}</p>
          <p>
            This Privacy Policy explains how Greenland Infra collects, uses and protects the
            information you share with us when you use this website or get in touch.
          </p>
          <h3>Information we collect</h3>
          <p>
            We only collect the details you choose to provide — such as your name, email and
            project information when you contact us — along with basic, anonymous usage analytics
            that help us improve the site.
          </p>
          <h3>How we use it</h3>
          <p>
            Your information is used solely to respond to your enquiry, deliver our services and
            improve your experience. We never sell your data.
          </p>
          <h3>Contact</h3>
          <p>
            For any questions about this policy or your data, please reach us via the{' '}
            <a href="/contact">contact page</a>.
          </p>
          <p className="muted">
            This is placeholder text — replace it with your finalised privacy policy before going
            live.
          </p>
        </div>
      </div>
    </section>
  )
}
