'use client'

import React from 'react'
import { Mail, Code, FileText } from 'lucide-react'

export default function Contact(){
  return (
    <section className="hero-glass p-8" id="contact">
      <h2 className="text-3xl font-bold">Get in Touch</h2>
      <p className="text-slate-300 mt-4">Open to opportunities, collaborations, and discussions on AI research.</p>
      <div className="mt-6 flex flex-wrap gap-4">
        <a href="mailto:hello@thrillok.com" className="flex items-center gap-2 px-4 py-2 bg-electric text-black rounded-lg hover:opacity-90">
          <Mail size={18} /> Email
        </a>
        <a href="https://github.com/thrilokm" className="flex items-center gap-2 px-4 py-2 border border-slate-600 rounded-lg hover:bg-slate-900">
          <Code size={18} /> GitHub
        </a>
        <a href="https://linkedin.com/in/thrilokm" className="flex items-center gap-2 px-4 py-2 border border-slate-600 rounded-lg hover:bg-slate-900">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/></svg>
          LinkedIn
        </a>
        <a href="/resume.pdf" className="flex items-center gap-2 px-4 py-2 border border-slate-600 rounded-lg hover:bg-slate-900">
          <FileText size={18} /> Resume
        </a>
      </div>
    </section>
  )
}
