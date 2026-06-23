'use client'

import React from 'react'

const articles = [
  { title: 'Building SynStream AI', date: 'Coming Soon', category: 'Technical' },
  { title: 'LLMs Explained: From Theory to Practice', date: 'Coming Soon', category: 'Research' },
  { title: 'Implementing RAG Systems', date: 'Coming Soon', category: 'Tutorial' },
  { title: 'Prompt Engineering Best Practices', date: 'Coming Soon', category: 'Guide' }
]

export default function Blog(){
  return (
    <section className="hero-glass p-8" id="blog">
      <h2 className="text-3xl font-bold">Technical Blog</h2>
      <div className="mt-6 space-y-4">
        {articles.map((article, i) => (
          <div key={i} className="p-4 border border-slate-700 rounded-lg hover:border-electric/50 transition">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold">{article.title}</h3>
                <p className="text-slate-400 text-sm mt-1">{article.date}</p>
              </div>
              <span className="text-xs px-2 py-1 bg-electric/10 text-electric rounded">{article.category}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
