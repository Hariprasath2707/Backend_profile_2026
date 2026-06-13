import { useEffect, useRef } from 'react'

// Lightweight constellation network for the hero background.
//
// Performance budget:
//  - DPR forced to 1 (it's a subtle backdrop; half the fill of DPR 2).
//  - Low node count, all links batched into ONE Path2D / one stroke().
//  - Squared-distance comparison (no sqrt) in the O(N²) loop.
//  - Capped at ~30 FPS — imperceptible for slow drift, half the work.
//  - Paused entirely when the hero is off-screen.
//  - Skipped on small screens and under prefers-reduced-motion (static frame).
export default function Constellation({ className }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const parent = canvas.parentElement
    if (!parent) return
    const ctx = canvas.getContext('2d')

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const small = window.innerWidth < 768

    // Theme-reactive colours (re-read when the <html> theme class changes).
    const css = (name) =>
      getComputedStyle(document.documentElement).getPropertyValue(name).trim().replace(/\s+/g, ',')
    let accent = css('--color-accent')
    let accent2 = css('--color-accent2')
    let paper = css('--color-paper')
    const themeObserver = new MutationObserver(() => {
      accent = css('--color-accent')
      accent2 = css('--color-accent2')
      paper = css('--color-paper')
    })
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })

    let w = 0
    let h = 0
    let nodes = []

    const build = () => {
      const r = parent.getBoundingClientRect()
      w = r.width
      h = r.height
      canvas.width = Math.round(w)
      canvas.height = Math.round(h)
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      const count = Math.min(34, Math.max(12, Math.round((w * h) / 42000)))
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      }))
    }
    build()
    const ro = new ResizeObserver(build)
    ro.observe(parent)

    const mouse = { x: -9999, y: -9999, active: false }
    const onMove = (e) => {
      const r = canvas.getBoundingClientRect()
      mouse.x = e.clientX - r.left
      mouse.y = e.clientY - r.top
      mouse.active = mouse.x >= 0 && mouse.x <= w && mouse.y >= 0 && mouse.y <= h
    }
    const onLeave = () => {
      mouse.active = false
    }

    const LINK = 115
    const LINK2 = LINK * LINK
    const MOUSE = 160
    const MOUSE2 = MOUSE * MOUSE

    const draw = () => {
      ctx.clearRect(0, 0, w, h)

      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > w) n.vx *= -1
        if (n.y < 0 || n.y > h) n.vy *= -1
      }

      const links = new Path2D()
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          if (dx * dx + dy * dy < LINK2) {
            links.moveTo(a.x, a.y)
            links.lineTo(b.x, b.y)
          }
        }
      }
      ctx.strokeStyle = `rgba(${accent2},0.22)`
      ctx.lineWidth = 1
      ctx.stroke(links)

      if (mouse.active) {
        const ml = new Path2D()
        for (const n of nodes) {
          const dx = n.x - mouse.x
          const dy = n.y - mouse.y
          if (dx * dx + dy * dy < MOUSE2) {
            ml.moveTo(n.x, n.y)
            ml.lineTo(mouse.x, mouse.y)
          }
        }
        ctx.strokeStyle = `rgba(${accent},0.5)`
        ctx.stroke(ml)
      }

      const dots = new Path2D()
      for (const n of nodes) {
        dots.moveTo(n.x + 1.6, n.y)
        dots.arc(n.x, n.y, 1.6, 0, Math.PI * 2)
      }
      ctx.fillStyle = `rgba(${paper},0.55)`
      ctx.fill(dots)
    }

    // Static single frame on small screens / reduced motion — no loop, no listeners.
    if (reduce || small) {
      draw()
      return () => {
        themeObserver.disconnect()
        ro.disconnect()
      }
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseout', onLeave)

    // ~30 FPS cap: rAF runs at the display rate but we only draw every ~33ms.
    let raf = null
    let last = 0
    const frame = (t) => {
      raf = requestAnimationFrame(frame)
      if (t - last < 33) return
      last = t
      draw()
    }
    const start = () => {
      if (raf == null) {
        last = 0
        raf = requestAnimationFrame(frame)
      }
    }
    const stop = () => {
      if (raf != null) {
        cancelAnimationFrame(raf)
        raf = null
      }
    }

    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { threshold: 0 }
    )
    io.observe(parent)
    start()

    return () => {
      stop()
      io.disconnect()
      ro.disconnect()
      themeObserver.disconnect()
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseout', onLeave)
    }
  }, [])

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />
}
