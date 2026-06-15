import React from 'react'

export default function Contact(){
  return (
    <main className="container">
      <section className="hero-glass p-8 mt-8" id="contact">
        <h2 className="text-2xl font-bold">Contact</h2>
        <p className="mt-3 text-slate-300">Professional inquiries only. Email: <a href="mailto:hello@thrillok.com" className="underline">hello@thrillok.com</a></p>
        <div className="mt-4 flex gap-3">
          <a href="https://github.com/thrilokm" className="px-4 py-2 bg-slate-700 rounded">GitHub</a>
          <a href="https://linkedin.com/in/thrilokm" className="px-4 py-2 bg-slate-700 rounded">LinkedIn</a>
          <a href="/resume.pdf" className="px-4 py-2 bg-slate-700 rounded">Resume</a>
        </div>
      </section>
    </main>
  )
}
