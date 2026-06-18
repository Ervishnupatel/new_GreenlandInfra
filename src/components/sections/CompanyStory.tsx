import { companyStory } from '@/content/defaults'

export function CompanyStory() {
  return (
    <section className="section">
      <div className="container narrow">
        <header className="section-head">
          <h2>{companyStory.title}</h2>
        </header>
        <div className="prose">
          {companyStory.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
