import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import About from '../components/About'
import GithubPanel from '../components/GithubPanel'

export default async function Page(){
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

      <section className="mt-20" id="github">
        <GithubPanel />
      </section>

      <footer className="mt-32 text-center text-sm text-slate-400">© {new Date().getFullYear()} THRILOK M — Crafted for research & production.</footer>
    </main>
  )
}
