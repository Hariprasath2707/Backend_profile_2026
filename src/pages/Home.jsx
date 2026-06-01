import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import Projects from '../components/Projects'
import About from '../components/About'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Projects />
      <About />
      <Experience />
      <Education />
      <Contact />
    </main>
  )
}
