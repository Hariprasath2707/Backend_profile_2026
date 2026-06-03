import { useState, useEffect } from 'react'
import { profile } from '../data/content'

const BASE = import.meta.env.BASE_URL

const links = [
  { label: 'Work', href: `${BASE}#work` },
  { label: 'About', href: `${BASE}#about` },
  { label: 'Experience', href: `${BASE}#experience` },
  { label: 'Education', href: `${BASE}#education` },
  { label: 'Contact', href: `${BASE}#contact` },
]

function ThemeToggle({ theme, toggle }) {
  return (
    <button
      onClick={toggle}
      aria-label="Toggle color theme"
      className="grid place-items-center w-9 h-9 rounded-full border border-line text-muted hover:text-accent hover:border-accent transition-colors"
    >
      {theme === 'light' ? (
        // moon
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      ) : (
        // sun
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      )}
    </button>
  )
}

export default function Nav({ theme, toggle }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-ink/80 backdrop-blur-md border-b border-line' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 h-20 flex items-center justify-between">
        <a href={`${BASE}#top`} className="font-display text-xl tracking-tightest">
          {profile.name.split(' ')[0]}
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-sm uppercase tracking-widest text-muted hover:text-paper transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle theme={theme} toggle={toggle} />
          <a
            href={BASE + '#contact'}
            className="font-mono text-sm uppercase tracking-widest border border-line px-4 py-2 rounded-full hover:border-accent hover:text-accent transition-colors"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle theme={theme} toggle={toggle} />
          <button
            className="font-mono text-xs uppercase tracking-widest text-paper"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="md:hidden border-t border-line bg-ink/95 backdrop-blur-md px-6 py-4 space-y-3">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block font-mono text-sm uppercase tracking-widest text-muted hover:text-paper"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
