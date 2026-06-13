import { profile, socials } from '../data/content'
import Constellation from './Constellation'

export default function Hero() {
  // helper to stagger the load-in animation
  const delay = (ms) => ({ animationDelay: `${ms}ms` })

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center px-6 pt-24 pb-16 overflow-hidden border-b border-line"
    >
      {/* Static background glow — intensity is theme-aware (see index.css).
          Kept static (no animation) so the large blurred layers don't
          re-composite every frame. */}
      <div
        aria-hidden
        className="hero-glow-1 pointer-events-none absolute -top-32 -left-24 w-[40rem] h-[40rem] rounded-full blur-2xl"
      />
      <div
        aria-hidden
        className="hero-glow-2 pointer-events-none absolute bottom-0 right-0 w-[32rem] h-[32rem] rounded-full blur-2xl"
      />

      {/* Interactive constellation network — full-bleed hero background */}
      <Constellation className="pointer-events-none absolute inset-0 w-full h-full" />

      <div className="relative mx-auto max-w-6xl w-full pointer-events-none grid lg:grid-cols-2 gap-12 items-center">
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

          <h1 className="reveal-load font-display tracking-tightest leading-[0.95] text-5xl sm:text-7xl" style={delay(160)}>
            {profile.name}
          </h1>

          <p className="reveal-load mt-8 max-w-2xl text-xl sm:text-2xl text-muted leading-relaxed" style={delay(260)}>
            {profile.tagline}
          </p>

          <div className="reveal-load mt-10 flex flex-wrap items-center gap-4 pointer-events-auto" style={delay(360)}>
            <a href="#work" className="btn-primary group px-6 py-3">
              View work
              <span className="inline-block ml-2 group-hover:translate-y-0.5 transition-transform">↓</span>
            </a>
            {profile.resumeUrl && (
              <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="btn-ghost px-6 py-3">
                Résumé
              </a>
            )}
          </div>

          <div className="reveal-load mt-14 flex flex-wrap gap-6 pointer-events-auto" style={delay(460)}>
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

        {/* Quick-facts spec card — balances the right half over the constellation */}
        <div
          className="reveal-load hidden lg:block select-none"
          style={delay(540)}
          aria-hidden
        >
          <dl className="rounded-2xl border border-line bg-surface/40 divide-y divide-line overflow-hidden">
            {[
              ['Role', profile.role],
              ['Based in', profile.location],
              ['Experience', '1+ years'],
              ['Focus', 'Python · Django · REST APIs'],
              ['Currently', 'Backend @ Emayam Technology'],
            ].map(([k, v]) => (
              <div key={k} className="flex items-baseline justify-between gap-6 px-5 py-4">
                <dt className="font-mono text-[10px] uppercase tracking-widest text-muted shrink-0">
                  {k}
                </dt>
                <dd className="text-right text-paper/90">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <span className="pointer-events-none select-none absolute right-6 bottom-6 font-mono text-xs text-muted/60 tracking-widest">
        00 / PORTFOLIO
      </span>
    </section>
  )
}
