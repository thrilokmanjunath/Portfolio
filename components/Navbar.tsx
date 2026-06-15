import React from 'react'
import Link from 'next/link'

export default function Navbar(){
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex items-center gap-4">
        <Link href="/" className="font-semibold text-xl">THRILOK M</Link>
        <span className="text-slate-400">AI Engineer</span>
      </div>
      <div className="flex items-center gap-4">
        <a href="#projects" className="text-slate-300 hover:text-white">Projects</a>
        <a href="#github" className="text-slate-300 hover:text-white">GitHub</a>
        <a href="#contact" className="text-slate-300 hover:text-white">Contact</a>
      </div>
    </nav>
  )
}
