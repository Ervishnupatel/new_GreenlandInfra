import { getFaqs } from '@/lib/data'
import { faqs as fallback } from '@/content/defaults'

export async function Faq() {
  const live = await getFaqs()
  const items = live.length > 0 ? live : fallback

  return (
    <section className="section section-alt">
      <div className="container narrow">
        <header className="section-head">
          <h2>Frequently Asked Questions</h2>
        </header>
        <div className="faq-list">
          {items.map((item: any, i: number) => (
            <details key={item.id || i} className="faq-item">
              <summary>{item.question}</summary>
              <p className="muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
