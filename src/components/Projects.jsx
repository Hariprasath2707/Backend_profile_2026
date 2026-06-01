import { useNavigate } from 'react-router-dom'
import { projects } from '../data/content'

export default function Projects() {
  const navigate = useNavigate()

  const go = (slug) => navigate(`/projects/${slug}`)
  const onKey = (e, slug) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      go(slug)
    }
  }
  // keep external links from triggering card navigation
  const stop = (e) => e.stopPropagation()

  return (
    <section id="work" className="px-6 py-24 sm:py-32 scroll-mt-20">
      <div className="mx-auto max-w-6xl">
        <div className="reveal flex items-baseline justify-between mb-14">
          <h2 className="font-display text-4xl sm:text-5xl tracking-tightest">
            Selected Work
          </h2>
          <span className="eyebrow">01</span>
        </div>

        <div className="border-t border-line">
          {projects.map((p, i) => (
            <article
              key={i}
              onClick={() => go(p.slug)}
              onKeyDown={(e) => onKey(e, p.slug)}
              role="link"
              tabIndex={0}
              aria-label={`View ${p.title} case study`}
              className="reveal group cursor-pointer border-b border-line py-8 sm:py-10 grid sm:grid-cols-12 gap-4 sm:gap-8 items-start hover:bg-surface/40 transition-colors px-2 sm:px-4 -mx-2 sm:-mx-4 rounded-lg focus:outline-none focus-visible:ring-1 focus-visible:ring-accent"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="sm:col-span-1 font-mono text-xs text-muted pt-2">
                {String(i + 1).padStart(2, '0')}
              </div>

              <div className="sm:col-span-5">
                <h3 className="font-display text-2xl sm:text-3xl tracking-tightest flex items-center gap-3 group-hover:text-accent transition-colors">
                  {p.title}
                  {p.featured && <span className="text-accent text-sm">◆</span>}
                </h3>
                <span className="font-mono text-xs text-muted">{p.year}</span>
              </div>

              <p className="sm:col-span-4 text-muted leading-relaxed">{p.blurb}</p>

              <div className="sm:col-span-2 flex flex-col items-start gap-3">
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] uppercase tracking-wider border border-line rounded-full px-2.5 py-1 text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-4 mt-1">
                  <span className="font-mono text-xs uppercase tracking-widest text-accent group-hover:text-paper transition-colors">
                    Case study →
                  </span>
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      onClick={stop}
                      className="font-mono text-xs uppercase tracking-widest text-paper hover:text-accent transition-colors"
                    >
                      Live ↗
                    </a>
                  )}
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      onClick={stop}
                      className="font-mono text-xs uppercase tracking-widest text-muted hover:text-accent transition-colors"
                    >
                      Code ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
