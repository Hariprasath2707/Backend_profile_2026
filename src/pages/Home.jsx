import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Projects from '../components/Projects'
import About from '../components/About'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Stats />
      <Projects />
      <About />
      <Experience />
      <Education />
      <Contact />
    </main>
  )
}
