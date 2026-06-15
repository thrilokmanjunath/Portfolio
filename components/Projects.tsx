import React from 'react'
import ProjectCard from './ProjectCard'

const featured = [
  {title:'SynStream AI', desc:'Real-time multimodal stream processing for generative agents.', tech:['PyTorch','FastAPI','Redis'], repo:'#', demo:'#'},
  {title:'Driver Drowsiness Detection', desc:'Edge ML pipeline for driver monitoring with high accuracy.', tech:['TensorFlow','ONNX','Edge TPU'], repo:'#', demo:'#'},
  {title:'Nexus-One', desc:'Unified model orchestration platform.', tech:['Kubernetes','Beam','JAX'], repo:'#', demo:'#'}
]

export default function Projects(){
  return (
    <div>
      <h3 className="text-2xl font-bold">Featured Projects</h3>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {featured.map(p=> <ProjectCard key={p.title} project={p} />)}
      </div>
    </div>
  )
}
