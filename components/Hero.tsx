'use client'

import React from 'react'
import { motion } from 'framer-motion'

const subtitles = ['Machine Learning Engineer', 'Generative AI Researcher', 'AI Systems Builder']

export default function Hero(){
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-7xl md:text-8xl font-bold tracking-tighter">THRILOK M</h1>
        <motion.p 
          className="mt-6 text-xl md:text-2xl text-slate-400 font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <AnimatedSubtitle />
        </motion.p>
        
        <motion.div 
          className="mt-12 flex flex-wrap gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <a href="#projects" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition">View Projects</a>
          <a href="/resume.pdf" className="px-6 py-3 border border-slate-600 hover:border-slate-400 font-medium rounded-lg transition">Resume</a>
          <a href="https://github.com/thrilokm" className="px-6 py-3 border border-slate-600 hover:border-slate-400 font-medium rounded-lg transition">GitHub</a>
        </motion.div>
      </motion.div>
    </div>
  )
}

function AnimatedSubtitle(){
  const [i, setI] = React.useState(0)
  React.useEffect(()=>{
    const t = setInterval(()=> setI((s)=> (s+1)%subtitles.length), 3000)
    return ()=> clearInterval(t)
  },[])
  return <motion.span key={i} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.5}} className="text-blue-400">{subtitles[i]}</motion.span>
}
