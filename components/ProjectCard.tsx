'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function ProjectCard({ project }: { project: any }){
  return (
    <motion.div 
      whileHover={{ y: -4 }}
      className="p-6 border border-slate-800 rounded-lg hover:border-slate-700 transition"
    >
      <h4 className="font-semibold text-lg">{project.title}</h4>
      <p className="text-slate-400 mt-3 text-sm leading-relaxed">{project.desc}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t: string) => (
          <span key={t} className="text-xs px-2 py-1 bg-slate-900 text-slate-300 rounded">{t}</span>
        ))}
      </div>
      <div className="mt-4 flex gap-3">
        {project.repo !== '#' && <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-400 hover:text-blue-300 transition">GitHub</a>}
        {project.demo !== '#' && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-400 hover:text-blue-300 transition">Live Demo</a>}
      </div>
    </motion.div>
  )
}
