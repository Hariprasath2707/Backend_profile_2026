import { Link } from 'react-router-dom'
import { experience } from '../data/content'

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24 sm:py-32 scroll-mt-20">
      <Link
        to="/experience"
        aria-label="View full experience"
        className="group block mx-auto max-w-6xl rounded-2xl transition-colors hover:bg-surface/40 py-6 sm:py-8"
      >
        {/* heading row — same style as Selected Work */}
        <div className="reveal flex items-baseline justify-between mb-14">
          <h2 className="font-display text-4xl sm:text-5xl tracking-tightest">Experience</h2>
          <span className="eyebrow">03</span>
        </div>

        {/* Short version: header line + one-line summary per role (left-aligned) */}
        <div className="border-t border-line">
          {experience.map((job, i) => (
            <div
              key={i}
              className="reveal grid sm:grid-cols-12 gap-3 sm:gap-8 border-b border-line py-8"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="sm:col-span-3 font-mono text-xs text-muted uppercase tracking-widest pt-1">
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
                  <p className="text-muted leading-relaxed mt-3">{job.summary}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <span className="reveal mt-10 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent group-hover:gap-3 transition-all">
          View full experience
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </span>
      </Link>
    </section>
  )
}
