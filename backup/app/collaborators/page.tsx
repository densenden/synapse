import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Collaborators() {
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
            Für Partner
          </h1>
          <p className="text-xl text-synapse-gold">
            Werden Sie Teil unseres wachsenden Ökosystems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-synapse-lavender mb-6">
              Partner werden
            </h2>
            <p className="text-synapse-lavender mb-6">
              Synapse sucht nach strategischen Partnern, die unsere Vision teilen und uns helfen, die Zukunft der Beziehungsoptimierung zu gestalten.
            </p>
            <ul className="space-y-4 text-synapse-lavender mb-6">
              <li>• Therapeuten & Coaches</li>
              <li>• Beziehungsberater</li>
              <li>• Technologiepartner</li>
              <li>• Content Creator</li>
              <li>• Forschungsinstitute</li>
            </ul>
            <a
              href="mailto:partners@synapse.ai"
              className="inline-block bg-synapse-gold text-white px-6 py-3 rounded-full hover:bg-synapse-lime transition-colors"
            >
              Partner werden
            </a>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-synapse-lavender mb-6">
              Vorteile
            </h2>
            <ul className="space-y-4 text-synapse-lavender">
              <li>• Früher Zugang zu neuen Features</li>
              <li>• Direkter Einfluss auf Produktentwicklung</li>
              <li>• Marketing & Promotion Support</li>
              <li>• Exklusive Partner-Events</li>
              <li>• Revenue-Sharing Möglichkeiten</li>
              <li>• Technische Integration Support</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white p-8 rounded-lg shadow-lg mb-16"
        >
          <h2 className="text-2xl font-semibold text-synapse-lavender mb-6">
            Partner-Programm
          </h2>
          <p className="text-synapse-lavender mb-6">
            Unser Partner-Programm bietet verschiedene Stufen der Zusammenarbeit, von einfachen Affiliate-Partnerschaften bis hin zu tiefen technischen Integrationen.
          </p>
          <Link
            href="/partner-programm"
            className="inline-block bg-synapse-gold text-white px-6 py-3 rounded-full hover:bg-synapse-lime transition-colors"
          >
            Mehr erfahren
          </Link>
        </motion.div>
      </div>
    </main>
  )
} 