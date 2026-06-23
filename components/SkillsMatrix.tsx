'use client'

import React from 'react'
import { motion } from 'framer-motion'

const skills = [
  { category: 'AI/ML', items: ['PyTorch', 'TensorFlow', 'JAX', 'Hugging Face', 'LangChain', 'RAG'] },
  { category: 'Programming', items: ['Python', 'TypeScript', 'Rust', 'Go', 'SQL'] },
  { category: 'Cloud', items: ['AWS', 'GCP', 'Azure', 'Kubernetes', 'Docker'] },
  { category: 'Data', items: ['PostgreSQL', 'Redis', 'Elasticsearch', 'DuckDB', 'Parquet'] }
]

export default function SkillsMatrix(){
  return (
    <section className="py-20" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-12">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((cat) => (
            <div key={cat.category} className="">
              <h3 className="font-semibold text-lg text-blue-400 mb-4">{cat.category}</h3>
              <div className="space-y-2">
                {cat.items.map((skill) => (
                  <div key={skill} className="text-sm text-slate-300 hover:text-white transition">{skill}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
