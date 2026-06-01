import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/Nav'
import ScrollProgress from './components/ScrollProgress'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import AboutDetail from './pages/AboutDetail'
import ExperienceDetail from './pages/ExperienceDetail'
import { useReveal } from './useReveal'
import { useTheme } from './useTheme'

// Scroll to top on route change, or to a #hash target when present.
function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])
  return null
}

export default function App() {
  const { theme, toggle } = useTheme()
  const location = useLocation()
  useReveal(location.pathname) // re-scan reveals when the page changes

  return (
    <div className="grain">
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
  )
}
