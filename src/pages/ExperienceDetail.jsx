import { Link } from 'react-router-dom'
import { experience } from '../data/content'

export default function ExperienceDetail() {
  return (
    <article className="px-6 pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="mx-auto max-w-4xl">
        <Link
          to={{ pathname: '/', hash: '#experience' }}
          className="reveal inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted hover:text-accent transition-colors"
        >
          ← Back home
        </Link>

        <header className="reveal mt-8">
          <span className="eyebrow">03 · Experience</span>
          <h1 className="font-display text-5xl sm:text-7xl tracking-tightest leading-[0.95] mt-4">
            Experience
          </h1>
        </header>

        <div className="mt-12 border-t border-line">
          {experience.map((job, i) => (
            <div
              key={i}
              className="reveal grid sm:grid-cols-12 gap-3 sm:gap-8 border-b border-line py-10"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="sm:col-span-3 font-mono text-xs text-muted uppercase tracking-widest pt-1">
                {job.period}
                {job.location && (
                  <div className="mt-1 normal-case tracking-normal">{job.location}</div>
                )}
              </div>
              <div className="sm:col-span-9">
                <h2 className="font-display text-2xl sm:text-3xl tracking-tightest">{job.role}</h2>
                <p className="text-accent font-mono text-sm mt-1">{job.company}</p>
                {job.summary && (
                  <p className="text-paper/90 leading-relaxed mt-4 max-w-2xl">{job.summary}</p>
                )}
                {job.points && (
                  <ul className="mt-5 space-y-3 max-w-2xl">
                    {job.points.map((pt, k) => (
                      <li key={k} className="flex gap-3 text-muted leading-relaxed">
                        <span className="text-accent mt-2 text-[8px] shrink-0">●</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-20 pt-10 border-t border-line flex flex-wrap items-center justify-between gap-4">
          <Link
            to={{ pathname: '/', hash: '#experience' }}
            className="font-mono text-xs uppercase tracking-widest text-muted hover:text-accent transition-colors"
          >
            ← Back home
          </Link>
          <Link
            to={{ pathname: '/', hash: '#contact' }}
            className="btn-primary px-5 py-2.5"
          >
            Get in touch →
          </Link>
        </div>
      </div>
    </article>
  )
}
