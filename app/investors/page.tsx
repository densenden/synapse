import { MotionDiv } from '../components/MotionWrapper'
import Image from 'next/image'

export default function Investors() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="heading-1 mb-6">
                Invest in the Future of Relationships
              </h1>
              <p className="text-body mb-8">
                Join us in building the next generation of AI-powered relationship optimization technology. We're seeking strategic investors who share our vision of transforming how people connect and grow together.
              </p>
              <a
                href="mailto:business@sen.studio"
                className="inline-block bg-synapse-gold text-white px-8 py-3 rounded-full hover:bg-synapse-lime transition-colors"
              >
                Contact Our Team
              </a>
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px]"
            >
              <Image
                src="/investor-hero.png"
                alt="Investment Opportunity"
                fill
                className="object-contain"
                priority
              />
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Investment Details */}
      <section className="section">
        <div className="container-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <MotionDiv
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <h2 className="heading-2 mb-6">Investment Round</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="heading-3 mb-2">Round Size</h3>
                  <p className="text-body">€100,000 Seed Round</p>
                </div>
                <div>
                  <h3 className="heading-3 mb-2">Equity Offered</h3>
                  <p className="text-body">10-15%</p>
                </div>
                <div>
                  <h3 className="heading-3 mb-2">Valuation</h3>
                  <p className="text-body">€1.5M Pre-Money</p>
                </div>
                <div>
                  <h3 className="heading-3 mb-2">Minimum Investment</h3>
                  <p className="text-body">€25,000</p>
                </div>
              </div>
            </MotionDiv>

            <MotionDiv
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <h2 className="heading-2 mb-6">Use of Funds</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="heading-3 mb-2">Product Development</h3>
                  <p className="text-body">40% - Core AI features and platform development</p>
                </div>
                <div>
                  <h3 className="heading-3 mb-2">Team Growth</h3>
                  <p className="text-body">30% - Key hires in AI and product development</p>
                </div>
                <div>
                  <h3 className="heading-3 mb-2">Marketing</h3>
                  <p className="text-body">20% - User acquisition and brand building</p>
                </div>
                <div>
                  <h3 className="heading-3 mb-2">Operations</h3>
                  <p className="text-body">10% - Legal, office, and other expenses</p>
                </div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="section bg-gray-50">
        <div className="container-full">
          <h2 className="heading-2 text-center mb-12">Market Opportunity</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <MotionDiv
              whileHover={{ y: -5 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-synapse-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="heading-3 mb-4">Market Size</h3>
              <p className="text-body">
                $3.2B TAM in relationship wellness and personal development
              </p>
            </MotionDiv>

            <MotionDiv
              whileHover={{ y: -5 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-synapse-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="heading-3 mb-4">Growth Rate</h3>
              <p className="text-body">
                25% CAGR in AI-powered relationship tools
              </p>
            </MotionDiv>

            <MotionDiv
              whileHover={{ y: -5 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-synapse-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="heading-3 mb-4">Target Users</h3>
              <p className="text-body">
                500M+ potential users in developed markets
              </p>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container-full">
          <h2 className="heading-2 text-center mb-12">Development Timeline</h2>
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
                  <p className="text-body">
                    MVP development begins with core AI features
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
                  <p className="text-body">
                    Beta testing program launches
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
                  <p className="text-body">
                    Official launch on App Store and Google Play
                  </p>
                </div>
              </MotionDiv>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section bg-gray-50">
        <div className="container-full">
          <h2 className="heading-2 text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <MotionDiv
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
                <div>
                  <h3 className="heading-3">Densen Den</h3>
                  <p className="text-body text-gray-600">Founder & CEO</p>
                </div>
              </div>
              <p className="text-body mt-4">
                AI researcher and entrepreneur with 10+ years of experience in machine learning and relationship psychology.
              </p>
            </MotionDiv>

            <MotionDiv
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
                <div>
                  <h3 className="heading-3">Advisory Board</h3>
                  <p className="text-body text-gray-600">Strategic Advisors</p>
                </div>
              </div>
              <p className="text-body mt-4">
                Industry experts in AI, psychology, and relationship counseling providing strategic guidance.
              </p>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-full text-center">
          <h2 className="heading-2 mb-6">Ready to Invest?</h2>
          <p className="text-body mb-8 max-w-2xl mx-auto">
            Join us in building the future of relationship optimization. Contact our team to learn more about investment opportunities.
          </p>
          <a
            href="mailto:business@sen.studio"
            className="inline-block bg-synapse-gold text-white px-8 py-3 rounded-full hover:bg-synapse-lime transition-colors"
          >
            Schedule a Call
          </a>
        </div>
      </section>
    </main>
  )
} 