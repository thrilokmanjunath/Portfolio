import React from 'react'
import { motion } from 'framer-motion'

export default function ProjectCard({ project }: { project: any }){
  return (
    <motion.div whileHover={{y:-6}} className="hero-glass p-4">
      <div className="h-36 bg-gradient-to-br from-slate-800 to-slate-700 rounded-md mb-4" />
      <h4 className="font-semibold text-lg">{project.title}</h4>
      <p className="text-slate-300 mt-2">{project.desc}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.tech.map((t:string)=>(<span key={t} className="text-xs px-2 py-1 bg-slate-800 rounded">{t}</span>))}
      </div>
      <div className="mt-4 flex gap-2">
        <a href={project.repo} className="text-sm underline">GitHub</a>
        <a href={project.demo} className="text-sm underline">Live</a>
      </div>
    </motion.div>
  )
}
