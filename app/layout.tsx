import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Santa's Jolly Chat",
  description: 'Chat with Santa and reveal the secret!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <div className="fixed bottom-4 right-4 text-6xl animate-jingle cursor-pointer" title="Jingle bells!">
          🔔
        </div>
      </body>
    </html>
  )
}

