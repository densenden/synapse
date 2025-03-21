import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Synapse - Der KI-gestützte Beziehungsassistent',
  description: 'Synapse ist ein KI-gestützter Beziehungsassistent, der Ihnen hilft, tiefere Verbindungen aufzubauen.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold text-synapse-lavender">
                  Synapse
                </Link>
              </div>
              <div className="flex items-center space-x-8">
                <Link href="/investors" className="text-synapse-lavender hover:text-synapse-gold">
                  Für Investoren
                </Link>
                <Link href="/collaborators" className="text-synapse-lavender hover:text-synapse-gold">
                  Für Partner
                </Link>
                <Link href="/beta" className="text-synapse-lavender hover:text-synapse-gold">
                  Beta Testing
                </Link>
              </div>
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-white/50 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-synapse-lavender">
              <p>© 2024 Synapse. Alle Rechte vorbehalten.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
} 