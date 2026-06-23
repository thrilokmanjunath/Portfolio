'use client'

import React from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

const featured = [
  {title:'SynStream AI', desc:'Real-time multimodal stream processing for generative agents.', tech:['PyTorch','FastAPI','Redis'], repo:'#', demo:'#'},
  {title:'Driver Drowsiness Detection', desc:'Edge ML pipeline for driver monitoring with high accuracy.', tech:['TensorFlow','ONNX','Edge TPU'], repo:'#', demo:'#'},
  {title:'Nexus-One', desc:'Unified model orchestration platform.', tech:['Kubernetes','Beam','JAX'], repo:'#', demo:'#'}
]

export default function Projects(){
  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map(p=> <ProjectCard key={p.title} project={p} />)}
        </div>
      </motion.div>
    </section>
  )
}
