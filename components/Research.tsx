'use client'

import React from 'react'
import { motion } from 'framer-motion'

const research = ['Generative AI', 'Large Language Models', 'Responsible AI', 'Graph Neural Networks', 'AI Agents', 'Quantum Computing']

export default function Research(){
  return (
    <section className="py-20" id="research">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-12">Research Interests</h2>
        <div className="flex flex-wrap gap-3">
          {research.map((topic) => (
            <div key={topic} className="px-4 py-2 border border-slate-800 hover:border-blue-400/50 rounded-lg text-sm text-slate-300 hover:text-white transition">
              {topic}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
