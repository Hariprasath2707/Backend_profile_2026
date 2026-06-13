import { useEffect } from 'react'

// Adds the `in-view` class to any `.reveal` element when it scrolls into
// view. Pass a `key` (e.g. the route path) so it re-scans on page change.
//
// Two independent reveal mechanisms so a section can never get stuck hidden:
//   1. IntersectionObserver (primary).
//   2. A cheap rAF-throttled scroll backstop that reveals anything near the
//      viewport — detaches itself once everything has been revealed.
// If IntersectionObserver is unavailable, everything is revealed immediately.
export function useReveal(key) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal'))
    if (els.length === 0) return

    const reveal = (el) => el.classList.add('in-view')

    if (!('IntersectionObserver' in window)) {
      els.forEach(reveal)
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target)
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -8% 0px' }
    )
    els.forEach((el) => io.observe(el))

    // Scroll backstop — reveals elements as they near the viewport even if the
    // observer misses one (e.g. after a late layout shift). Removes itself
    // once all elements are revealed, so it costs nothing afterwards.
    let pending = els.slice()
    let ticking = false
    const check = () => {
      ticking = false
      const vh = window.innerHeight
      pending = pending.filter((el) => {
        if (el.getBoundingClientRect().top < vh * 0.92) {
          reveal(el)
          io.unobserve(el)
          return false
        }
        return true
      })
      if (pending.length === 0) window.removeEventListener('scroll', onScroll)
    }
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(check)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    const initial = window.setTimeout(check, 600)

    return () => {
      io.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.clearTimeout(initial)
    }
  }, [key])
}
