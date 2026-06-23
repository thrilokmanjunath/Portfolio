'use client'

import React from 'react'

const leadership = [
  { role: 'President', org: 'Quantum Club', school: 'CHRIST (Deemed)', desc: 'Leading research initiatives in quantum computing.' },
  { role: 'Core Team', org: 'AI Research Lab', school: 'University', desc: 'Contributing to cutting-edge AI research.' }
]

export default function Leadership(){
  return (
    <section className="hero-glass p-8" id="leadership">
      <h2 className="text-3xl font-bold">Leadership</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {leadership.map((lead, i) => (
          <div key={i} className="p-4 bg-slate-900 rounded-lg border border-slate-700">
            <h3 className="font-semibold text-electric">{lead.role}</h3>
            <p className="text-sm text-slate-400 mt-1">{lead.org} • {lead.school}</p>
            <p className="text-slate-300 mt-3">{lead.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
