import { profile, socials } from '../data/content'

const sections = [
  { label: 'Work', hash: '#work' },
  { label: 'About', hash: '#about' },
  { label: 'Experience', hash: '#experience' },
  { label: 'Education', hash: '#education' },
  { label: 'Contact', hash: '#contact' },
]

export default function Footer() {
  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="px-6 pt-20 pb-10 border-t border-line bg-surface/30">
      <div className="mx-auto max-w-6xl">
        {/* Closing CTA */}
        <div className="reveal flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-14 border-b border-line">
          <div>
            <p className="eyebrow mb-4">Let’s work together</p>
            <h2 className="font-display text-4xl sm:text-5xl tracking-tightest leading-[0.95]">
              Have a backend to build?
            </h2>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <a href={`mailto:${profile.email}`} className="btn-primary px-6 py-3">
              Get in touch
            </a>
            {profile.resumeUrl && (
              <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="btn-ghost px-6 py-3">
                Résumé
              </a>
            )}
          </div>
        </div>

        {/* Columns */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 py-14">
          <div className="lg:col-span-2 max-w-sm">
            <div className="font-display text-2xl tracking-tightest">
              {profile.name}
              <span className="text-accent">.</span>
            </div>
            <p className="text-muted mt-3 leading-relaxed">
              {profile.role} based in {profile.location}. Building scalable, secure
              server-side systems with Python, Django & well-designed REST APIs.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="inline-block mt-4 font-mono text-sm text-accent hover:text-paper transition-colors break-all"
            >
              {profile.email}
            </a>
          </div>

          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-widest text-muted mb-4">
              Sections
            </h3>
            <ul className="space-y-2.5">
              {sections.map((s) => (
                <li key={s.hash}>
                  <a
                    href={s.hash}
                    className="text-paper/80 hover:text-accent transition-colors"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-widest text-muted mb-4">
              Connect
            </h3>
            <ul className="space-y-2.5">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.url}
                    target={s.url.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="text-paper/80 hover:text-accent transition-colors"
                  >
                    {s.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-muted tracking-widest">
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p className="font-mono text-xs text-muted tracking-widest">
            Built with React · Vite · Tailwind
          </p>
          <button
            onClick={toTop}
            className="font-mono text-xs uppercase tracking-widest text-muted hover:text-accent transition-colors"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  )
}
