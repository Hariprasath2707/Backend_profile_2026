import { useEffect, useState } from 'react'

// Reads the current --color-accent CSS variable ("R G B" channels)
// and returns it as a usable CSS color string. Re-reads whenever the
// theme class on <html> changes, so visual effects
// always match the active theme accent.
export function useAccentColor() {
  const [color, setColor] = useState('rgb(255 92 53)')

  useEffect(() => {
    const read = () => {
      const raw = getComputedStyle(document.documentElement)
        .getPropertyValue('--color-accent')
        .trim()
      if (raw) setColor(`rgb(${raw})`)
    }
    read()
    const observer = new MutationObserver(read)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })
    return () => observer.disconnect()
  }, [])

  return color
}
