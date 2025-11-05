import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aviaire ? Birds in Glassmorphism',
  description: 'A modern, glassmorphic bird showcase built with Next.js + Tailwind.',
  metadataBase: new URL('https://agentic-fe3bddb8.vercel.app'),
  openGraph: {
    title: 'Aviaire ? Birds in Glassmorphism',
    description: 'A modern, glassmorphic bird showcase built with Next.js + Tailwind.',
    url: 'https://agentic-fe3bddb8.vercel.app',
    siteName: 'Aviaire',
    images: [
      { url: '/og.png', width: 1200, height: 630, alt: 'Aviaire' }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aviaire ? Birds in Glassmorphism',
    description: 'A modern, glassmorphic bird showcase built with Next.js + Tailwind.',
    images: ['/og.png']
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bokeh" aria-hidden>
          <span style={{ width: 320, height: 320, left: 40, top: 80, background: '#3b82f6' }} className="animate-float" />
          <span style={{ width: 260, height: 260, right: 80, top: 120, background: '#a78bfa' }} className="animate-pulseSlow" />
          <span style={{ width: 220, height: 220, left: 120, bottom: 120, background: '#f472b6' }} className="animate-float" />
        </div>
        {children}
      </body>
    </html>
  )
}
