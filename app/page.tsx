import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import About from '../components/About'
import SkillsMatrix from '../components/SkillsMatrix'
import Experience from '../components/Experience'
import Research from '../components/Research'
import Contact from '../components/Contact'

export default function Page(){
  return (
    <main className="bg-black text-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <section>
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="skills">
          <SkillsMatrix />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="research">
          <Research />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </div>

      <footer className="border-t border-slate-800/50 bg-black/50 py-12 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} THRILOK M
      </footer>
    </main>
  )
}
