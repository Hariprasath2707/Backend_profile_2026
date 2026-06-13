import Lenis from 'lenis'

// Single shared Lenis instance for momentum/smooth scrolling.
// Disabled entirely under prefers-reduced-motion (falls back to native scroll).
let lenis = null
let rafId = null

export function initLenis() {
  if (lenis) return lenis
  if (typeof window === 'undefined') return null
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return null

  lenis = new Lenis({
    lerp: 0.14, // higher = snappier, less floaty/laggy (0.1 felt delayed)
    smoothWheel: true,
    syncTouch: false, // leave touch devices on native scroll (smoother there)
    wheelMultiplier: 1,
    anchors: true, // smooth-scroll plain <a href="#..."> links automatically
  })

  const raf = (time) => {
    lenis.raf(time)
    rafId = requestAnimationFrame(raf)
  }
  rafId = requestAnimationFrame(raf)

  return lenis
}

export function destroyLenis() {
  if (rafId != null) cancelAnimationFrame(rafId)
  rafId = null
  if (lenis) {
    lenis.destroy()
    lenis = null
  }
}

export function getLenis() {
  return lenis
}
