'use client'

import React from 'react'

const skills = [
  { category: 'AI/ML', items: ['PyTorch', 'TensorFlow', 'JAX', 'Hugging Face', 'LangChain', 'RAG'] },
  { category: 'Programming', items: ['Python', 'TypeScript', 'Rust', 'Go', 'SQL'] },
  { category: 'Cloud', items: ['AWS', 'GCP', 'Azure', 'Kubernetes', 'Docker'] },
  { category: 'Data', items: ['PostgreSQL', 'Redis', 'Elasticsearch', 'DuckDB', 'Parquet'] }
]

export default function SkillsMatrix(){
  return (
    <section className="hero-glass p-8" id="skills">
      <h2 className="text-3xl font-bold">Skills & Expertise</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((cat) => (
          <div key={cat.category} className="p-4 bg-slate-900 rounded-lg">
            <h3 className="font-semibold text-electric">{cat.category}</h3>
            <div className="mt-3 space-y-2">
              {cat.items.map((skill) => (
                <div key={skill} className="text-sm text-slate-300">{skill}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
