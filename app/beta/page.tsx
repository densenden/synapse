import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Beta() {
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
            Beta Testing
          </h1>
          <p className="text-xl text-synapse-gold">
            Seien Sie unter den ersten, die Synapse erleben
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-synapse-lavender mb-6">
              Beta-Programm Details
            </h2>
            <ul className="space-y-4 text-synapse-lavender mb-6">
              <li>• Start: August 2025</li>
              <li>• Dauer: 4 Wochen</li>
              <li>• Exklusiver Zugang zu allen Features</li>
              <li>• Direkter Einfluss auf Produktentwicklung</li>
              <li>• Persönliches Feedback-Gespräch</li>
              <li>• 6 Monate kostenlose Nutzung nach Launch</li>
            </ul>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-synapse-lavender mb-6">
              Anforderungen
            </h2>
            <ul className="space-y-4 text-synapse-lavender">
              <li>• iOS oder Android Smartphone</li>
              <li>• Bereitschaft für regelmäßiges Feedback</li>
              <li>• Interesse an KI-gestützter Beziehungsoptimierung</li>
              <li>• Zeit für wöchentliche Check-ins</li>
              <li>• Offenheit für neue Technologien</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white p-8 rounded-lg shadow-lg mb-16"
        >
          <h2 className="text-2xl font-semibold text-synapse-lavender mb-6">
            Bewerbung
          </h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-synapse-lavender">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-synapse-lavender shadow-sm focus:border-synapse-gold focus:ring-synapse-gold"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-synapse-lavender">
                E-Mail
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-synapse-lavender shadow-sm focus:border-synapse-gold focus:ring-synapse-gold"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-synapse-lavender">
                Telefon
              </label>
              <input
                type="tel"
                id="phone"
                className="mt-1 block w-full rounded-md border-synapse-lavender shadow-sm focus:border-synapse-gold focus:ring-synapse-gold"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-synapse-lavender">
                Warum möchten Sie am Beta-Programm teilnehmen?
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-synapse-lavender shadow-sm focus:border-synapse-gold focus:ring-synapse-gold"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-synapse-gold text-white px-6 py-3 rounded-full hover:bg-synapse-lime transition-colors"
            >
              Bewerbung einreichen
            </button>
          </form>
        </motion.div>
      </div>
    </main>
  )
} 