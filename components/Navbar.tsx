import React from 'react'
import Link from 'next/link'

export default function Navbar(){
  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-slate-900/30 border-b border-slate-700/30 py-4">
      <div className="container flex items-center justify-between">
        <Link href="/" className="font-semibold text-xl hover:text-electric transition">THRILOK M</Link>
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#projects" className="text-slate-300 hover:text-white transition">Projects</a>
          <a href="#skills" className="text-slate-300 hover:text-white transition">Skills</a>
          <a href="#experience" className="text-slate-300 hover:text-white transition">Experience</a>
          <a href="#research" className="text-slate-300 hover:text-white transition">Research</a>
          <a href="#contact" className="text-slate-300 hover:text-white transition">Contact</a>
        </div>
        <a href="https://github.com/thrilokm" className="px-3 py-2 text-sm border border-slate-600 rounded hover:bg-slate-800 transition">GitHub</a>
      </div>
    </nav>
  )
}

