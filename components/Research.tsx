'use client'

import React from 'react'

const research = ['Generative AI', 'Large Language Models', 'Responsible AI', 'Graph Neural Networks', 'AI Agents', 'Quantum Computing']

export default function Research(){
  return (
    <section className="hero-glass p-8" id="research">
      <h2 className="text-3xl font-bold">Research Interests</h2>
      <div className="mt-6 flex flex-wrap gap-3">
        {research.map((topic) => (
          <div key={topic} className="px-4 py-2 bg-gradient-to-r from-electric/20 to-accent/20 border border-electric/30 rounded-full text-sm">
            {topic}
          </div>
        ))}
      </div>
    </section>
  )
}
