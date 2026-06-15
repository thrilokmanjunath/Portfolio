import React from 'react'
import { motion } from 'framer-motion'

export default function About(){
  return (
    <section className="hero-glass p-8">
      <motion.h2 initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} className="text-3xl font-bold">About</motion.h2>
      <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.1}} className="mt-4 text-slate-300">
        Senior AI Research Engineer focused on building scalable, production-grade machine learning systems.
        Experienced in generative models, LLM pipelines, and engineering research into robust, responsible AI that delivers measurable impact.
      </motion.p>
    </section>
  )
}
