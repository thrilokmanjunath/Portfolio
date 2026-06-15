import './globals.css'
import React from 'react'

export const metadata = {
  title: 'THRILOK M — AI Engineer',
  description: 'Thrillok M — AI Research Engineer. Generative AI, LLMs, Responsible AI, Research & Production.'
}

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}
