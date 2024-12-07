'use client'

import { useState, useEffect } from 'react'
import SantaChat from '../components/SantaChat'
import { Snowflake, Github } from 'lucide-react'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24 bg-gradient-to-b from-red-600 to-green-700 overflow-hidden relative">
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-4xl animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 10 + 5}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            >
              {['🎅', '🎄', '🎁', '⛄', '🦌', '🔔', '❄️'][Math.floor(Math.random() * 7)]}
            </div>
          ))}
        </div>
      )}
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-yellow-300 mb-8">
          Reveal<br/>Santa's Secret
        </h1>
        <SantaChat />
      </div>
      <footer className="mt-8 text-center text-white">
        <p>Made with ❤️ by Santa's Elves | Powered by Next.js 15 🚀 | 
          <a 
            href="https://github.com/mjberli/santa-secret" 
            rel="noopener noreferrer"
            className="inline-flex items-center hover:text-yellow-300 transition-colors"
          >
            <Github className="w-4 h-4 ml-1 mr-1" />
            GitHub
          </a>
        </p>
        <Snowflake className="inline-block ml-2 animate-spin" />
      </footer>
    </main>
  )
}

