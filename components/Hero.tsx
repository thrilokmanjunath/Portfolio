import React from 'react'
import { motion } from 'framer-motion'

const subtitles = ['Machine Learning', 'Generative AI', 'Data Scientist']

export default function Hero(){
  return (
    <div className="hero-glass p-10">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-6xl font-extrabold tracking-tight">THRILOK M</h1>
          <p className="mt-3 text-2xl text-slate-300">AI Engineer • Research & Production</p>

          <div className="mt-6 flex items-center gap-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
              className="w-12 h-12 rounded-full bg-gradient-to-tr from-electric-400 to-accent-400"
            />
            <div>
              <AnimatedSubtitle />
              <div className="mt-4 flex gap-3">
                <a href="#projects" className="px-4 py-2 rounded-md bg-electric text-black">View Projects</a>
                <a href="/resume.pdf" className="px-4 py-2 rounded-md border border-slate-700">Download Resume</a>
                <a href="https://github.com/thrilokm" className="px-3 py-2 rounded-md border">GitHub</a>
                <a href="https://linkedin.com/in/thrilokm" className="px-3 py-2 rounded-md border">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3 hidden md:block">
          <div className="rounded-xl overflow-hidden shadow-xl">
            <div style={{padding:'40% 0', background:'linear-gradient(135deg,#071024,#0ea5ff)'}} />
          </div>
        </div>
      </div>
    </div>
  )
}

function AnimatedSubtitle(){
  const [i, setI] = React.useState(0)
  React.useEffect(()=>{
    const t = setInterval(()=> setI((s)=> (s+1)%subtitles.length), 2200)
    return ()=> clearInterval(t)
  },[])
  return <motion.div key={i} initial={{opacity:0, y:6}} animate={{opacity:1, y:0}} transition={{duration:0.4}} className="text-lg text-slate-300">{subtitles[i]}</motion.div>
}
