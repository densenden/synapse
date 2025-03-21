import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-synapse-cream to-synapse-mint">
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

      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-synapse-lavender mb-6">
              Synapse
            </h1>
            <p className="text-2xl text-synapse-gold mb-8">
              I see you
            </p>
            <p className="text-xl text-synapse-lavender max-w-2xl mx-auto mb-12">
              Der KI-gestützte Beziehungsassistent, der Ihnen hilft, tiefere Verbindungen aufzubauen
            </p>
            <Link
              href="/beta"
              className="bg-synapse-gold text-white px-8 py-3 rounded-full hover:bg-synapse-lime transition-colors"
            >
              Jetzt für Beta Testing bewerben
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold text-synapse-lavender mb-4">
                Für Investoren
              </h3>
              <p className="text-synapse-lavender">
                Entdecken Sie die Zukunft der KI-gestützten Beziehungsoptimierung
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold text-synapse-lavender mb-4">
                Für Partner
              </h3>
              <p className="text-synapse-lavender">
                Werden Sie Teil unseres wachsenden Ökosystems
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold text-synapse-lavender mb-4">
                Beta Testing
              </h3>
              <p className="text-synapse-lavender">
                Seien Sie unter den ersten, die Synapse erleben
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
} 