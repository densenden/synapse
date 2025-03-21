import Link from 'next/link'
import { MotionDiv } from './components/MotionWrapper'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="container-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="heading-1 mb-6">
                Transform Your Relationships with AI
              </h1>
              <p className="text-body mb-8 text-gray-700">
                Synapse is your intelligent relationship companion, helping you build deeper connections through personalized insights and actionable recommendations.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://apps.apple.com"
                  className="inline-block"
                >
                  <Image
                    src="/app-store-badge.svg"
                    alt="Download on the App Store"
                    width={160}
                    height={48}
                    className="h-12 w-auto"
                  />
                </a>
                <a
                  href="https://play.google.com"
                  className="inline-block"
                >
                  <Image
                    src="/google-play-badge.svg"
                    alt="Get it on Google Play"
                    width={160}
                    height={48}
                    className="h-12 w-auto"
                  />
                </a>
              </div>
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative h-[600px]"
            >
              <Image
                src="/app-preview.png"
                alt="Synapse App Preview"
                fill
                className="object-contain"
                priority
              />
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-gray-50">
        <div className="container-full">
          <h2 className="heading-2 text-center mb-16">
            Intelligent Relationship Insights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <MotionDiv
              whileHover={{ y: -5 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-synapse-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="heading-3 mb-4">Real-time Analysis</h3>
              <p className="text-body text-gray-700">
                Get instant insights into your relationship dynamics with our advanced AI algorithms.
              </p>
            </MotionDiv>
            <MotionDiv
              whileHover={{ y: -5 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-synapse-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="heading-3 mb-4">Personalized Guidance</h3>
              <p className="text-body text-gray-700">
                Receive tailored recommendations based on your unique relationship patterns.
              </p>
            </MotionDiv>
            <MotionDiv
              whileHover={{ y: -5 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-synapse-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="heading-3 mb-4">Privacy First</h3>
              <p className="text-body text-gray-700">
                Your data is encrypted and secure, with complete control over what you share.
              </p>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section">
        <div className="container-full">
          <h2 className="heading-2 text-center mb-16">
            Development Timeline
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
            <div className="space-y-24">
              <MotionDiv
                whileHover={{ x: 10 }}
                className="relative"
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-synapse-gold rounded-full"></div>
                <div className="w-1/2 ml-auto pl-8">
                  <h3 className="heading-3 mb-4">March 2025</h3>
                  <p className="text-body text-gray-700">
                    MVP development begins with core relationship analysis features.
                  </p>
                </div>
              </MotionDiv>
              <MotionDiv
                whileHover={{ x: -10 }}
                className="relative"
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-synapse-gold rounded-full"></div>
                <div className="w-1/2 pr-8">
                  <h3 className="heading-3 mb-4">August 2025</h3>
                  <p className="text-body text-gray-700">
                    Beta testing program launches with selected users.
                  </p>
                </div>
              </MotionDiv>
              <MotionDiv
                whileHover={{ x: 10 }}
                className="relative"
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-synapse-gold rounded-full"></div>
                <div className="w-1/2 ml-auto pl-8">
                  <h3 className="heading-3 mb-4">September 2025</h3>
                  <p className="text-body text-gray-700">
                    Official launch on App Store and Google Play.
                  </p>
                </div>
              </MotionDiv>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container-full">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Synapse</h3>
              <p className="text-gray-400">
                Transforming relationships through AI
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link href="/investors" className="text-gray-400 hover:text-white">For Investors</Link></li>
                <li><Link href="/collaborators" className="text-gray-400 hover:text-white">For Partners</Link></li>
                <li><Link href="/beta" className="text-gray-400 hover:text-white">Beta Testing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 Synapse. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
} 