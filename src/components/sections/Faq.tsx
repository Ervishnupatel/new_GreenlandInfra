import { getFaqs } from '@/lib/data'
import { faqs as fallback } from '@/content/defaults'
import { Reveal } from '@/components/Reveal'

export async function Faq() {
  const live = await getFaqs()
  const items = live.length > 0 ? live : fallback

  return (
    <section className="section section-alt" id="faq">
      <div className="container faq-layout">
        <Reveal className="faq-intro">
          <span className="eyebrow">FAQ</span>
          <h2 className="section-title">Questions,&nbsp;answered</h2>
          <p className="muted">Everything you might want to know before reaching out.</p>
        </Reveal>
        <Reveal className="faq-list" delay={100}>
          {items.map((item: any, i: number) => (
            <div key={item.id || i} className="faq-item" tabIndex={0}>
              <div className="faq-q">
                <span>{item.question}</span>
                <span className="faq-icon" aria-hidden />
              </div>
              <div className="faq-a">
                <div className="faq-a-inner">
                  <p className="muted">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
