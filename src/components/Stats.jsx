import { useEffect, useMemo, useRef, useState } from 'react'
import { stats, techStack } from '../data/content'
import CountUp from './CountUp'
import LogoLoop from './LogoLoop'

// Sits where the sliding marquee used to be: a row of headline numbers
// plus a smoothly looping strip of the core stack (LogoLoop). Fills the
// hero -> work gap with substance.
export default function Stats() {
  const ref = useRef(null)
  const [play, setPlay] = useState(false)

  // Tech stack rendered as styled chip "logos" for the loop.
  const techLogos = useMemo(
    () =>
      techStack.map((t) => ({
        title: t,
        node: (
          <span className="font-mono text-xs tracking-wide border border-line rounded-full px-3 py-1.5 text-paper/80">
            {t}
          </span>
        ),
      })),
    []
  )

  // One observer for the whole row, so every number counts in lock-step.
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPlay(true)
          io.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section className="px-6 py-16 bg-surface/30 border-b border-line">
      <div className="mx-auto max-w-6xl">
        {/* Headline numbers */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
          {stats.map((s) => (
            <div key={s.label} className="reveal text-center md:text-left">
              <div className="font-display text-4xl sm:text-5xl tracking-tightest leading-none">
                <CountUp value={s.metric} play={play} />
              </div>
              <div className="mt-3 font-mono text-[10px] uppercase tracking-widest text-muted">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Core stack — smooth infinite loop (LogoLoop) */}
        <div className="reveal mt-14 pt-8 border-t border-line flex items-center gap-4">
          <span className="font-mono text-[10px] uppercase tracking-widest text-accent shrink-0">
            Stack /
          </span>
          <div className="relative flex-1 overflow-hidden">
            <LogoLoop
              logos={techLogos}
              speed={42}
              direction="left"
              logoHeight={24}
              gap={26}
              hoverSpeed={8}
              fadeOut
              fadeOutColor="rgb(var(--color-ink))"
              ariaLabel="Core tech stack"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
