import { useMemo } from 'react'

// A refined, minimal field of 0s and 1s drifting slowly behind the hero.
// Improvements over a flat field: per-column opacity & speed for depth,
// occasional accent-colored "hot" bits, and a soft radial mask so it stays
// subtle. Freezes to a static field under prefers-reduced-motion.

export default function BinaryBackdrop() {
  const columns = useMemo(() => {
    const count = 18
    const rows = 26
    return Array.from({ length: count }, (_, i) => {
      const baseOp = 0.05 + Math.random() * 0.07 // 0.05–0.12 per column
      const digits = Array.from({ length: rows }, () => ({
        v: Math.random() > 0.5 ? '1' : '0',
        hot: Math.random() < 0.07, // ~7% accent-highlighted
      }))
      return {
        left: `${(i / count) * 100 + Math.random() * 2}%`,
        duration: 22 + Math.random() * 30, // 22–52s, slow & varied
        delay: -Math.random() * 45,
        baseOp,
        digits,
      }
    })
  }, [])

  return (
    <div
      aria-hidden
      className="absolute inset-0 overflow-hidden pointer-events-none select-none"
      style={{
        maskImage: 'radial-gradient(125% 95% at 50% 22%, black 35%, transparent 82%)',
        WebkitMaskImage: 'radial-gradient(125% 95% at 50% 22%, black 35%, transparent 82%)',
      }}
    >
      {columns.map((c, i) => (
        <div
          key={i}
          className="binary-col absolute top-0 font-mono text-[11px] leading-5 text-center"
          style={{ left: c.left, animationDuration: `${c.duration}s`, animationDelay: `${c.delay}s` }}
        >
          {/* duplicated for a seamless vertical loop */}
          {[...c.digits, ...c.digits].map((d, j) => (
            <div
              key={j}
              style={{
                color: d.hot
                  ? `rgb(var(--color-accent) / ${Math.min(c.baseOp + 0.16, 0.3)})`
                  : `rgb(var(--color-muted) / ${c.baseOp})`,
              }}
            >
              {d.v}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
