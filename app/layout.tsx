import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import Footer from './components/Footer'

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Synapse - KI-gestützte Beziehungsoptimierung',
  description: 'Optimieren Sie Ihre Beziehungen mit KI-gestützter Analyse und personalisierten Empfehlungen.',
  keywords: 'Beziehungen, KI, Künstliche Intelligenz, Beziehungsoptimierung, Dating, Partnerschaft',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={dmSans.className}>
        {children}
        <Footer />
      </body>
    </html>
  )
} 