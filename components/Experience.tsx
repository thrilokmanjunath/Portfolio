'use client'

import React from 'react'

const experience = [
  { role: 'Senior AI Research Engineer', company: 'Company', period: '2024 - Present', desc: 'Leading ML infrastructure & generative AI initiatives.' },
  { role: 'AI/ML Engineer', company: 'Company', period: '2023 - 2024', desc: 'Built production LLM pipelines and data infrastructure.' },
  { role: 'Data Science Intern', company: 'Company', period: '2022 - 2023', desc: 'Research in graph neural networks and scalable AI.' }
]

export default function Experience(){
  return (
    <section className="hero-glass p-8" id="experience">
      <h2 className="text-3xl font-bold">Experience</h2>
      <div className="mt-6 space-y-6">
        {experience.map((exp, i) => (
          <div key={i} className="border-l-2 border-electric pl-6 pb-6">
            <h3 className="font-semibold text-lg">{exp.role}</h3>
            <p className="text-electric text-sm">{exp.company} • {exp.period}</p>
            <p className="text-slate-300 mt-2">{exp.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
