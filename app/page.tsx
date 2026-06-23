import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import About from '../components/About'
import SkillsMatrix from '../components/SkillsMatrix'
import Experience from '../components/Experience'
import Research from '../components/Research'
import Leadership from '../components/Leadership'
import Achievements from '../components/Achievements'
import Blog from '../components/Blog'
import Contact from '../components/Contact'
import GithubPanel from '../components/GithubPanel'

export default function Page(){
  return (
    <main className="container">
      <Navbar />
      <section className="mt-12">
        <Hero />
      </section>

      <section className="mt-20">
        <About />
      </section>

      <section className="mt-20" id="projects">
        <Projects />
      </section>

      <section className="mt-20">
        <SkillsMatrix />
      </section>

      <section className="mt-20">
        <Experience />
      </section>

      <section className="mt-20">
        <Research />
      </section>

      <section className="mt-20">
        <Leadership />
      </section>

      <section className="mt-20">
        <Achievements />
      </section>

      <section className="mt-20">
        <Blog />
      </section>

      <section className="mt-20" id="github">
        <GithubPanel />
      </section>

      <section className="mt-20">
        <Contact />
      </section>

      <footer className="mt-32 text-center text-sm text-slate-400">© {new Date().getFullYear()} THRILOK M — Crafted for research & production.</footer>
    </main>
  )
}
