import { Link } from 'react-router-dom'
import { about, profile } from '../data/content'

export default function AboutDetail() {
  return (
    <article className="px-6 pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="mx-auto max-w-4xl">
        <Link
          to={{ pathname: '/', hash: '#about' }}
          className="reveal inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted hover:text-accent transition-colors"
        >
          ← Back home
        </Link>

        <header className="reveal mt-8">
          <span className="eyebrow">02 · About</span>
          <h1 className="font-display text-5xl sm:text-7xl tracking-tightest leading-[0.95] mt-4">
            About me
          </h1>
        </header>

        <div className="mt-12 grid lg:grid-cols-12 gap-12">
          {/* Portrait */}
          {profile.photo && (
            <div className="lg:col-span-4">
              <figure className="reveal relative max-w-xs lg:sticky lg:top-28">
                <span
                  aria-hidden
                  className="absolute -inset-3 border border-accent/40 rounded-2xl translate-x-3 translate-y-3"
                />
                <div className="relative overflow-hidden rounded-2xl border border-line">
                  <img
                    src={profile.photo}
                    alt={`Portrait of ${profile.name}`}
                    loading="lazy"
                    className="w-full aspect-[4/5] object-cover"
                  />
                </div>
                <figcaption className="mt-4 font-mono text-xs uppercase tracking-widest text-muted">
                  {profile.name} · {profile.location}
                </figcaption>
              </figure>
            </div>
          )}

          {/* Full bio */}
          <div className="lg:col-span-8">
            <div className="space-y-6 max-w-2xl">
              {about.paragraphs.map((para, i) => (
                <p
                  key={i}
                  className="reveal text-lg leading-relaxed text-paper/90"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  {para}
                </p>
              ))}
            </div>

            <div className="reveal mt-14">
              <h2 className="font-display text-2xl sm:text-3xl tracking-tightest mb-6">
                Skills & expertise
              </h2>
              <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
                {about.skills.map((s) => (
                  <div key={s.group}>
                    <h4 className="font-mono text-xs uppercase tracking-widest text-accent mb-3">
                      {s.group}
                    </h4>
                    <ul className="space-y-1.5">
                      {s.items.map((item) => (
                        <li key={item} className="text-muted">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="reveal mt-20 pt-10 border-t border-line flex flex-wrap items-center justify-between gap-4">
          <Link
            to={{ pathname: '/', hash: '#about' }}
            className="font-mono text-xs uppercase tracking-widest text-muted hover:text-accent transition-colors"
          >
            ← Back home
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
