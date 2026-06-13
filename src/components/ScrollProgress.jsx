import { useEffect, useRef } from 'react'

// Top scroll-progress bar. Updates the bar width directly via a ref inside a
// rAF-throttled scroll handler — no React state, so scrolling triggers no
// re-renders (one DOM write per frame at most).
export default function ScrollProgress() {
  const barRef = useRef(null)

  useEffect(() => {
    let ticking = false

    const update = () => {
      ticking = false
      const height = document.documentElement.scrollHeight - window.innerHeight
      const pct = height > 0 ? (window.scrollY / height) * 100 : 0
      if (barRef.current) barRef.current.style.width = `${pct}%`
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-0.5 bg-transparent">
      <div
        ref={barRef}
        className="h-full bg-accent transition-[width] duration-100 ease-out"
        style={{ width: '0%' }}
      />
    </div>
  )
}
