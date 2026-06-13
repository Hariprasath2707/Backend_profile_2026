import { useEffect, useState } from 'react'

// Splits a metric like "~35%" or "500+" into prefix / number / suffix so we
// can animate just the number and keep the decoration ("~", "+", "%") intact.
function parse(value) {
  const m = String(value).match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/)
  if (!m) return { target: null, raw: value }
  return {
    prefix: m[1],
    target: parseFloat(m[2]),
    suffix: m[3],
    decimals: (m[2].split('.')[1] || '').length,
  }
}

// Counts from 0 up to the metric's value when `play` becomes true.
// The trigger lives on the parent so every number starts and ends together.
export default function CountUp({ value, play, duration = 1400, className }) {
  const { prefix = '', target, suffix = '', decimals = 0, raw } = parse(value)
  const [display, setDisplay] = useState(target === null ? null : 0)

  useEffect(() => {
    if (target === null || !play) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(target)
      return
    }

    let raf
    const start = performance.now()
    const step = (now) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3) // easeOutCubic
      setDisplay(target * eased)
      if (t < 1) raf = requestAnimationFrame(step)
      else setDisplay(target)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [play, target, duration])

  if (target === null) return <span className={className}>{raw}</span>

  const shown = decimals ? display.toFixed(decimals) : Math.round(display)
  return (
    <span className={className}>
      {prefix}
      {shown}
      {suffix}
    </span>
  )
}
