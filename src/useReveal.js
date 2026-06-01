import { useEffect } from 'react'

// Adds the `in-view` class to any element with the `reveal` class
// once it scrolls into the viewport. No external dependencies.
// Pass a `key` (e.g. the route path) so it re-scans when the page changes.
export function useReveal(key) {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [key])
}
