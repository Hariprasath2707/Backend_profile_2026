import { useEffect, useState } from 'react'

// Light/dark theme with persistence.
// The initial class is set by an inline script in index.html
// (prevents a flash of the wrong theme before React mounts).
export function useTheme() {
  const [theme, setTheme] = useState(() =>
    typeof document !== 'undefined' &&
    document.documentElement.classList.contains('light')
      ? 'light'
      : 'dark',
  )

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('light', theme === 'light')
    root.classList.toggle('dark', theme === 'dark')
    try {
      localStorage.setItem('theme', theme)
    } catch {
      /* ignore storage errors (e.g. private mode) */
    }
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.setAttribute('content', theme === 'light' ? '#f7f4ed' : '#0d0c0a')
  }, [theme])

  const toggle = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'))
  return { theme, toggle }
}
