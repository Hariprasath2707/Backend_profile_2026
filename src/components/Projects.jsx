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
    <section id="work" className="px-6 py-20 sm:py-24 scroll-mt-20">
      <div className="mx-auto max-w-6xl">
        <div className="reveal flex items-baseline justify-between mb-10">
          <h2 className="section-title">
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
              {/* Generated thumbnail tile (no screenshots) — adds visual weight */}
              <div className="sm:col-span-4">
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-line bg-gradient-to-br from-surface to-ink grid place-items-center group-hover:border-accent/50 transition-colors">
                  <span className="font-display text-6xl tracking-tightest text-accent/70 transition-transform duration-300 group-hover:scale-110">
                    {p.title.charAt(0)}
                  </span>
                  <span className="absolute top-3 left-3 font-mono text-[10px] text-muted tracking-widest">
                    {String(i + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                  </span>
                  <span className="absolute bottom-3 right-3 font-mono text-[10px] text-muted">{p.year}</span>
                </div>
              </div>

              {/* Details */}
              <div className="sm:col-span-8 flex flex-col">
                <h3 className="font-display text-2xl sm:text-3xl tracking-tightest flex items-center gap-3 group-hover:text-accent transition-colors">
                  {p.title}
                  {p.featured && <span className="text-accent text-sm">◆</span>}
                </h3>
                <p className="text-muted leading-relaxed mt-3 max-w-2xl">{p.blurb}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] uppercase tracking-wider border border-line rounded-full px-2.5 py-1 text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-4 mt-5">
                  <span className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-accent">
                    Case study
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
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
