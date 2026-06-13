import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/Nav'
import ScrollProgress from './components/ScrollProgress'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import AboutDetail from './pages/AboutDetail'
import ExperienceDetail from './pages/ExperienceDetail'
import ClickSpark from './components/ClickSpark'
import { useReveal } from './useReveal'
import { useTheme } from './useTheme'
import { useAccentColor } from './useAccentColor'

// Scroll to top on route change, or to a #hash target when present.
// Keyed on location.key so clicking the same link again still scrolls.
// Native scroll — light and smooth (CSS handles smooth anchor behaviour).
function ScrollManager() {
  const { pathname, hash, key } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash, key])
  return null
}

export default function App() {
  const { theme, toggle } = useTheme()
  const location = useLocation()
  const accent = useAccentColor()
  useReveal(location.pathname) // re-scan reveals when the page changes

  return (
    <ClickSpark sparkColor={accent} sparkSize={10} sparkRadius={18} sparkCount={8} duration={420}>
      <div className="grain">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 font-mono text-xs uppercase tracking-widest bg-accent text-ink px-4 py-2 rounded-full"
      >
        Skip to content
      </a>
      <ScrollManager />
      <ScrollProgress />
      <Nav theme={theme} toggle={toggle} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutDetail />} />
        <Route path="/experience" element={<ExperienceDetail />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
      <Footer />
      </div>
    </ClickSpark>
  )
}
