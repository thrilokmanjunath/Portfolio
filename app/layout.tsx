import type { Metadata } from 'next'
import './globals.css'
import React from 'react'

export const metadata: Metadata = {
  title: 'THRILOK M — AI Engineer',
  description: 'Senior AI Research Engineer. Generative AI, LLMs, Responsible AI, Machine Learning, Data Science, Research & Production Systems.',
  keywords: ['AI', 'Machine Learning', 'Generative AI', 'LLM', 'Research', 'Data Science'],
  authors: [{ name: 'Thrillok M' }],
  creator: 'Thrillok M',
  metadataBase: new URL('https://your-domain.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    title: 'THRILOK M — AI Engineer',
    description: 'Senior AI Research Engineer. Generative AI, LLMs, Responsible AI, Machine Learning, Data Science.',
    siteName: 'THRILOK M Portfolio',
    images: [{ url: '/favicon.svg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'THRILOK M — AI Engineer',
    description: 'Senior AI Research Engineer. Generative AI, LLMs, Responsible AI.',
    images: ['/favicon.svg'],
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.svg" />
        <link rel="canonical" href="https://your-domain.com" />
      </head>
      <body>
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}
