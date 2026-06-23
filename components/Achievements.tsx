'use client'

import React from 'react'

const achievements = [
  { title: 'Merit Scholarship', desc: 'Academic excellence recognition', year: '2023' },
  { title: 'Best Project Award', desc: 'AI/ML research competition', year: '2024' },
  { title: 'Publication', desc: 'In peer-reviewed conference', year: '2024' }
]

export default function Achievements(){
  return (
    <section className="hero-glass p-8" id="achievements">
      <h2 className="text-3xl font-bold">Achievements</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {achievements.map((ach, i) => (
          <div key={i} className="p-4 bg-gradient-to-br from-electric/10 to-accent/10 border border-electric/20 rounded-lg">
            <div className="text-xs text-electric font-semibold">{ach.year}</div>
            <h3 className="font-semibold mt-2">{ach.title}</h3>
            <p className="text-slate-400 text-sm mt-2">{ach.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
