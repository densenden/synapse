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

   
    </main>
  )
} 