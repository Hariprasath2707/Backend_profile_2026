import LogoLoop from './LogoLoop'
import { marquee } from '../data/content'

// The sliding strip under the hero, powered by LogoLoop.
// Slows to a crawl on hover; freezes under prefers-reduced-motion.
export default function Marquee() {
  const items = marquee.map((label) => ({
    node: (
      <span className="flex items-center font-display text-2xl sm:text-3xl tracking-tightest text-paper">
        {label}
        {/* small hollow-ring separator */}
        <span className="ml-8 inline-block w-2.5 h-2.5 rounded-full border-2 border-accent/70" aria-hidden />
      </span>
    ),
    title: label,
  }))

  return (
    <div className="border-b border-line py-5 overflow-hidden bg-surface/40">
      <LogoLoop
        logos={items}
        speed={60}
        direction="left"
        logoHeight={36}
        gap={32}
        hoverSpeed={12}
        fadeOut
        fadeOutColor="rgb(var(--color-ink))"
        ariaLabel="Skills and focus areas"
      />
    </div>
  )
}
