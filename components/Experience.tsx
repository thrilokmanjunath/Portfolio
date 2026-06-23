'use client'

import React from 'react'
import { motion } from 'framer-motion'

const experience = [
  { role: 'Senior AI Research Engineer', company: 'Company', period: '2024 - Present', desc: 'Leading ML infrastructure & generative AI initiatives.' },
  { role: 'AI/ML Engineer', company: 'Company', period: '2023 - 2024', desc: 'Built production LLM pipelines and data infrastructure.' },
  { role: 'Data Science Intern', company: 'Company', period: '2022 - 2023', desc: 'Research in graph neural networks and scalable AI.' }
]

export default function Experience(){
  return (
    <section className="py-20" id="experience">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-12">Experience</h2>
        <div className="space-y-8">
          {experience.map((exp, i) => (
            <div key={i} className="border-l-2 border-blue-500/30 pl-6 pb-6">
              <h3 className="font-semibold text-lg">{exp.role}</h3>
              <p className="text-blue-400 text-sm mt-1">{exp.company} • {exp.period}</p>
              <p className="text-slate-400 mt-3 leading-relaxed">{exp.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
