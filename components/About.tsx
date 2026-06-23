'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function About(){
  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-8">About</h2>
        <p className="text-lg text-slate-300 leading-relaxed max-w-3xl">
          AI Research Engineer building scalable machine learning systems. 
          Focused on generative models, LLM architectures, and responsible AI systems that deliver real-world impact.
        </p>
      </motion.div>
    </section>
  )
}
