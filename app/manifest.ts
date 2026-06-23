import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'THRILOK M — AI Engineer',
    short_name: 'THRILOK M',
    description: 'Senior AI Research Engineer. Generative AI, LLMs, Responsible AI, Research & Production.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#0ea5ff',
    icons: [
      {
        src: '/favicon.svg',
        sizes: '192x192',
        type: 'image/svg+xml',
      },
    ],
  }
}
