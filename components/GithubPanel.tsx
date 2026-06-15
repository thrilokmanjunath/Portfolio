import React from 'react'

async function fetchRepos(){
  const res = await fetch('https://api.github.com/users/thrilokm/repos?per_page=8&sort=updated', { next: { revalidate: 60 } })
  if(!res.ok) return []
  return res.json()
}

export default async function GithubPanel(){
  const repos: any = await fetchRepos()
  return (
    <div className="hero-glass p-6">
      <h3 className="text-2xl font-bold">GitHub</h3>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {repos && repos.slice(0,6).map((r:any)=> (
          <div key={r.id} className="p-3 rounded-md bg-slate-900">
            <a href={r.html_url} className="font-semibold">{r.name}</a>
            <p className="text-slate-400 text-sm">{r.description}</p>
            <div className="mt-2 text-xs text-slate-400">⭐ {r.stargazers_count} • {r.language}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
