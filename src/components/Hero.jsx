import { profile, socials } from '../data/content'
import BinaryBackdrop from './BinaryBackdrop'

export default function Hero() {
  // helper to stagger the load-in animation
  const delay = (ms) => ({ animationDelay: `${ms}ms` })

  return (
    <section id="top" className="relative min-h-screen flex items-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Minimal binary backdrop */}
      <BinaryBackdrop />

      {/* Animated background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-24 w-[40rem] h-[40rem] rounded-full opacity-40 blur-3xl animate-float"
        style={{ background: 'radial-gradient(circle, rgb(var(--color-accent) / 0.35), transparent 65%)' }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 w-[32rem] h-[32rem] rounded-full opacity-30 blur-3xl animate-float"
        style={{ animationDelay: '-7s', background: 'radial-gradient(circle, rgb(var(--color-accent2) / 0.3), transparent 65%)' }}
      />

      <div className="relative mx-auto max-w-5xl w-full">
        {/* Intro */}
        <div>
          {profile.available && (
            <div className="reveal-load inline-flex items-center gap-2 mb-8 font-mono text-xs uppercase tracking-widest text-muted" style={delay(0)}>
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-60 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Available for work
            </div>
          )}

          <p className="reveal-load eyebrow mb-5" style={delay(80)}>
            {profile.role} · {profile.location}
          </p>

          <h1 className="reveal-load font-display tracking-tightest leading-[0.92] text-6xl sm:text-8xl" style={delay(160)}>
            {profile.name}
          </h1>

          <p className="reveal-load mt-8 max-w-2xl text-xl sm:text-2xl text-muted leading-relaxed" style={delay(260)}>
            {profile.tagline}
          </p>

          <div className="reveal-load mt-10 flex flex-wrap items-center gap-4" style={delay(360)}>
            <a
              href="#work"
              className="group font-mono text-xs uppercase tracking-widest bg-accent text-ink px-6 py-3 rounded-full hover:bg-paper transition-colors"
            >
              View work
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">↓</span>
            </a>
            {profile.resumeUrl && (
              <a
                href={profile.resumeUrl}
                download
                className="font-mono text-xs uppercase tracking-widest border border-line px-6 py-3 rounded-full hover:border-paper transition-colors"
              >
                Résumé
              </a>
            )}
          </div>

          <div className="reveal-load mt-14 flex flex-wrap gap-6" style={delay(460)}>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs uppercase tracking-widest text-muted hover:text-accent transition-colors"
              >
                {s.label} ↗
              </a>
            ))}
          </div>
        </div>
      </div>

      <span className="pointer-events-none select-none absolute right-6 bottom-6 font-mono text-xs text-line tracking-widest">
        00 / PORTFOLIO
      </span>
    </section>
  )
}
