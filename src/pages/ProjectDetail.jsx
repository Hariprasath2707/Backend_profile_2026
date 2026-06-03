import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/content'

function NotFound() {
  return (
    <section className="px-6 pt-40 pb-32 min-h-screen">
      <div className="mx-auto max-w-3xl text-center">
        <span className="eyebrow">404</span>
        <h1 className="font-display text-4xl sm:text-5xl tracking-tightest mt-4">
          Project not found
        </h1>
        <p className="text-muted mt-4">
          The project you're looking for doesn't exist or may have moved.
        </p>
        <Link
          to={{ pathname: '/', hash: '#work' }}
          className="inline-block mt-8 font-mono text-xs uppercase tracking-widest border border-line px-6 py-3 rounded-full hover:border-accent hover:text-accent transition-colors"
        >
          ← Back to work
        </Link>
      </div>
    </section>
  )
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) return <NotFound />

  const {
    title,
    tagline,
    year,
    role,
    timeline,
    overview,
    challenge,
    approach,
    features,
    outcomes,
    stack,
    link,
    repo,
  } = project

  return (
    <article className="px-6 pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="mx-auto max-w-4xl">
        {/* Back link */}
        <Link
          to={{ pathname: '/', hash: '#work' }}
          className="reveal inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted hover:text-accent transition-colors"
        >
          ← Back to work
        </Link>

        {/* Header */}
        <header className="reveal mt-8">
          <span className="eyebrow">{year || timeline} · Case Study</span>
          <h1 className="font-display text-5xl sm:text-7xl tracking-tightest leading-[0.95] mt-4">
            {title}
          </h1>
          {tagline && (
            <p className="mt-5 text-xl sm:text-2xl text-muted leading-relaxed max-w-2xl">
              {tagline}
            </p>
          )}

          <div className="mt-8 flex flex-wrap gap-4">
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs uppercase tracking-widest bg-accent text-ink px-5 py-2.5 rounded-full hover:bg-paper transition-colors"
              >
                Live ↗
              </a>
            )}
            {repo && (
              <a
                href={repo}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs uppercase tracking-widest border border-line px-5 py-2.5 rounded-full hover:border-accent hover:text-accent transition-colors"
              >
                Source ↗
              </a>
            )}
          </div>
        </header>

        {/* Meta row */}
        <div className="reveal mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6 border-y border-line py-8">
          {role && (
            <div>
              <h4 className="font-mono text-[10px] uppercase tracking-widest text-accent mb-2">Role</h4>
              <p className="text-paper/90">{role}</p>
            </div>
          )}
          {(timeline || year) && (
            <div>
              <h4 className="font-mono text-[10px] uppercase tracking-widest text-accent mb-2">Timeline</h4>
              <p className="text-paper/90">{timeline || year}</p>
            </div>
          )}
          {stack && (
            <div className="col-span-2 sm:col-span-1">
              <h4 className="font-mono text-[10px] uppercase tracking-widest text-accent mb-2">Core Stack</h4>
              <p className="text-paper/90">{stack.slice(0, 4).join(' · ')}</p>
            </div>
          )}
        </div>

        {/* Outcomes */}
        {outcomes && (
          <div className="reveal mt-12 grid grid-cols-3 gap-4">
            {outcomes.map((o, i) => (
              <div key={i} className="border border-line rounded-2xl p-5 text-center">
                <div className="font-display text-3xl sm:text-4xl tracking-tightest text-accent">
                  {o.metric}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted mt-2 leading-relaxed">
                  {o.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Overview */}
        {overview && (
          <section className="reveal mt-16">
            <h2 className="font-display text-2xl sm:text-3xl tracking-tightest mb-4">Overview</h2>
            <p className="text-lg leading-relaxed text-paper/90">{overview}</p>
          </section>
        )}

        {/* Challenge */}
        {challenge && (
          <section className="reveal mt-12">
            <h2 className="font-display text-2xl sm:text-3xl tracking-tightest mb-4">The Challenge</h2>
            <p className="text-lg leading-relaxed text-paper/90">{challenge}</p>
          </section>
        )}

        {/* Approach */}
        {approach && (
          <section className="reveal mt-12">
            <h2 className="font-display text-2xl sm:text-3xl tracking-tightest mb-4">Approach</h2>
            <ul className="space-y-3">
              {approach.map((a, i) => (
                <li key={i} className="flex gap-3 text-lg leading-relaxed text-paper/90">
                  <span className="text-accent mt-2 text-[8px] shrink-0">◆</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Features */}
        {features && (
          <section className="reveal mt-12">
            <h2 className="font-display text-2xl sm:text-3xl tracking-tightest mb-4">Key Features</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <div key={i} className="border border-line rounded-xl p-5 bg-surface/30">
                  <p className="text-paper/90 leading-relaxed">{f}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Full stack */}
        {stack && (
          <section className="reveal mt-12">
            <h2 className="font-display text-2xl sm:text-3xl tracking-tightest mb-4">Built With</h2>
            <div className="flex flex-wrap gap-2.5">
              {stack.map((s) => (
                <span
                  key={s}
                  className="font-mono text-xs uppercase tracking-wider border border-line rounded-full px-3.5 py-1.5 text-muted"
                >
                  {s}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Footer nav */}
        <div className="reveal mt-20 pt-10 border-t border-line flex flex-wrap items-center justify-between gap-4">
          <Link
            to={{ pathname: '/', hash: '#work' }}
            className="font-mono text-xs uppercase tracking-widest text-muted hover:text-accent transition-colors"
          >
            ← All projects
          </Link>
          <Link
            to={{ pathname: '/', hash: '#contact' }}
            className="font-mono text-xs uppercase tracking-widest bg-accent text-ink px-5 py-2.5 rounded-full hover:bg-paper transition-colors"
          >
            Get in touch →
          </Link>
        </div>
      </div>
    </article>
  )
}
