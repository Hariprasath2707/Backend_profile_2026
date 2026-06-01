import { Link } from 'react-router-dom'
import { about, profile } from '../data/content'

export default function About() {
  // Short version: first paragraph + a few skill groups as a preview.
  const intro = about.paragraphs[0]
  const skillPreview = about.skills.slice(0, 4).map((s) => s.group)

  return (
    <section id="about" className="px-6 py-24 sm:py-32 bg-surface/30 border-y border-line scroll-mt-20">
      <Link
        to="/about"
        aria-label="Read the full about page"
        className="group block mx-auto max-w-6xl rounded-2xl transition-colors hover:bg-surface/40 py-6 sm:py-8"
      >
        {/* heading row — same style as Selected Work */}
        <div className="reveal flex items-baseline justify-between mb-14">
          <h2 className="font-display text-4xl sm:text-5xl tracking-tightest">About</h2>
          <span className="eyebrow">02</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Portrait (left) */}
          {profile.photo && (
            <div className="lg:col-span-4">
              <figure className="reveal relative max-w-xs">
                <span
                  aria-hidden
                  className="absolute -inset-3 border border-accent/40 rounded-2xl translate-x-3 translate-y-3 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                />
                <div className="relative overflow-hidden rounded-2xl border border-line">
                  <img
                    src={profile.photo}
                    alt={`Portrait of ${profile.name}`}
                    loading="lazy"
                    className="w-full aspect-[4/5] object-cover grayscale-[35%] contrast-105 transition-all duration-500 group-hover:grayscale-0 group-hover:scale-[1.03]"
                  />
                  <span
                    aria-hidden
                    className="absolute inset-0 mix-blend-overlay opacity-40 group-hover:opacity-0 transition-opacity duration-500"
                    style={{ background: 'linear-gradient(160deg, rgb(var(--color-accent) / 0.5), transparent 60%)' }}
                  />
                </div>
                <figcaption className="mt-4 font-mono text-xs uppercase tracking-widest text-muted">
                  {profile.name} · {profile.location}
                </figcaption>
              </figure>
            </div>
          )}

          {/* Short overview (right) */}
          <div className="lg:col-span-8">
            <p className="reveal text-xl sm:text-2xl leading-relaxed text-paper/90">
              {intro}
            </p>

            <div className="reveal mt-8 flex flex-wrap gap-2.5">
              {skillPreview.map((g) => (
                <span
                  key={g}
                  className="font-mono text-[10px] uppercase tracking-wider border border-line rounded-full px-3 py-1.5 text-muted"
                >
                  {g}
                </span>
              ))}
            </div>

            <span className="reveal mt-10 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent group-hover:gap-3 transition-all">
              Read full bio
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </div>
        </div>
      </Link>
    </section>
  )
}
