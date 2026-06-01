import { education } from '../data/content'

export default function Education() {
  return (
    <section id="education" className="px-6 py-24 sm:py-32 bg-surface/30 border-t border-line scroll-mt-20">
      <div className="mx-auto max-w-6xl">
        <div className="reveal flex items-baseline justify-between mb-14">
          <h2 className="font-display text-4xl sm:text-5xl tracking-tightest">Education</h2>
          <span className="eyebrow">04</span>
        </div>

        <div className="border-t border-line">
          {education.map((ed, i) => (
            <div
              key={i}
              className="reveal grid sm:grid-cols-12 gap-3 sm:gap-8 border-b border-line py-8"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="sm:col-span-3 font-mono text-xs text-muted uppercase tracking-widest pt-1">
                {ed.period}
              </div>
              <div className="sm:col-span-9">
                <h3 className="font-display text-2xl tracking-tightest">{ed.title}</h3>
                <p className="text-accent font-mono text-sm mt-1">{ed.org}</p>
                {ed.detail && <p className="text-muted mt-2">{ed.detail}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
