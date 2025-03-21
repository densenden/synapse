import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Investors() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-synapse-cream to-synapse-mint pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-synapse-lavender mb-4">
            Für Investoren
          </h1>
          <p className="text-xl text-synapse-gold">
            Investieren Sie in die Zukunft der KI-gestützten Beziehungsoptimierung
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-synapse-lavender mb-6">
              Pitchdeck
            </h2>
            <p className="text-synapse-lavender mb-6">
              Erfahren Sie mehr über unsere Vision, Technologie und Wachstumsstrategie
            </p>
            <Link
              href="/Pitchdeck_Synapse-The-Smart-Partnership-Optimization-App.pdf"
              className="inline-block bg-synapse-gold text-white px-6 py-3 rounded-full hover:bg-synapse-lime transition-colors"
            >
              Pitchdeck herunterladen
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-synapse-lavender mb-6">
              Investment Details
            </h2>
            <ul className="space-y-4 text-synapse-lavender">
              <li>• Seed Funding: $100k</li>
              <li>• MVP Entwicklung: März-Juli 2025</li>
              <li>• Beta Testing: August 2025</li>
              <li>• Launch: September 2025</li>
              <li>• Freemium Geschäftsmodell</li>
              <li>• Datenschutz-First Ansatz</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white p-8 rounded-lg shadow-lg mb-16"
        >
          <h2 className="text-2xl font-semibold text-synapse-lavender mb-6">
            Kontakt
          </h2>
          <p className="text-synapse-lavender mb-6">
            Interessiert an einer Investition? Lassen Sie uns sprechen.
          </p>
          <a
            href="mailto:investors@synapse.ai"
            className="inline-block bg-synapse-gold text-white px-6 py-3 rounded-full hover:bg-synapse-lime transition-colors"
          >
            Kontakt aufnehmen
          </a>
        </motion.div>
      </div>
    </main>
  )
} 