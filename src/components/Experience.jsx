import { Link } from 'react-router-dom'
import { experience } from '../data/content'

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-20 sm:py-24 scroll-mt-20">
      <div className="mx-auto max-w-6xl">
        {/* heading row — same style as Selected Work */}
        <div className="reveal flex items-baseline justify-between mb-10">
          <h2 className="section-title">Experience</h2>
          <span className="eyebrow">03</span>
        </div>

        {/* Short version: header line + one-line summary per role */}
        <div className="border-t border-line">
          {experience.map((job, i) => (
            <Link
              key={i}
              to="/experience"
              aria-label={`View details for ${job.role} at ${job.company}`}
              className="reveal group grid sm:grid-cols-12 gap-3 sm:gap-8 border-b border-line py-8 px-2 sm:px-4 -mx-2 sm:-mx-4 rounded-lg hover:bg-surface/40 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-accent"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="sm:col-span-3 font-mono text-xs text-muted uppercase tracking-widest pt-1.5">
                {job.period}
                {job.location && (
                  <div className="mt-1 normal-case tracking-normal">{job.location}</div>
                )}
              </div>
              <div className="sm:col-span-9">
                <h3 className="font-display text-2xl tracking-tightest group-hover:text-accent transition-colors">
                  {job.role}
                </h3>
                <p className="text-accent font-mono text-sm mt-1">{job.company}</p>
                {job.summary && (
                  <p className="text-muted leading-relaxed mt-3 max-w-2xl">{job.summary}</p>
                )}
                {job.points && job.points.length > 0 && (
                  <ul className="mt-4 space-y-2 max-w-2xl">
                    {job.points.slice(0, 3).map((pt, k) => (
                      <li key={k} className="flex gap-3 text-muted leading-relaxed">
                        <span className="text-accent mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-accent" aria-hidden />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Link>
          ))}
        </div>

        <Link
          to="/experience"
          className="reveal group mt-10 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent hover:gap-3 transition-all"
        >
          View full experience
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </section>
  )
}
