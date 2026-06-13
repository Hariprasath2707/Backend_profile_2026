import { education } from '../data/content'

export default function Education() {
  return (
    <section id="education" className="px-6 py-20 sm:py-24 bg-surface/30 border-t border-line scroll-mt-20">
      <div className="mx-auto max-w-6xl">
        <div className="reveal flex items-baseline justify-between mb-10">
          <h2 className="section-title">Education</h2>
          <span className="eyebrow">04</span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {education.map((ed, i) => (
            <div
              key={i}
              className="card reveal flex flex-col p-6 h-full"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <span className="font-mono text-xs text-muted uppercase tracking-widest">
                {ed.period}
              </span>
              <h3 className="font-display text-2xl tracking-tightest mt-4">{ed.title}</h3>
              <p className="text-accent font-mono text-sm mt-2">{ed.org}</p>
              {ed.detail && <p className="text-muted mt-auto pt-4">{ed.detail}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
