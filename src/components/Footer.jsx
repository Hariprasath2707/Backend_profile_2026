import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="px-6 py-10 border-t border-line">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted tracking-widest">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono text-xs text-muted tracking-widest">
          Built with React · Vite · Tailwind
        </p>
        <a
          href="#top"
          className="font-mono text-xs uppercase tracking-widest text-muted hover:text-accent transition-colors"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
