import React from 'react'
import Link from 'next/link'

export default function Navbar(){
  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-slate-800/50 py-6">
      <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg hover:text-blue-400 transition">THRILOK M</Link>
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#projects" className="text-slate-400 hover:text-white transition">Projects</a>
          <a href="#skills" className="text-slate-400 hover:text-white transition">Skills</a>
          <a href="#experience" className="text-slate-400 hover:text-white transition">Experience</a>
          <a href="#contact" className="text-slate-400 hover:text-white transition">Contact</a>
        </div>
        <a href="https://github.com/thrilokm" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition">GitHub</a>
      </div>
    </nav>
  )
}
