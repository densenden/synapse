import { MotionDiv } from '../components/MotionWrapper'
import Image from 'next/image'

export default function Collaborators() {
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
                Partner with Synapse
              </h1>
              <p className="text-body mb-8">
                Join forces with us to revolutionize relationship optimization. We're looking for strategic partners who share our vision of transforming how people connect and grow together.
              </p>
              <a
                href="mailto:business@sen.studio"
                className="inline-block bg-synapse-gold text-white px-8 py-3 rounded-full hover:bg-synapse-lime transition-colors"
              >
                Become a Partner
              </a>
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px]"
            >
              <Image
                src="/partner-hero.png"
                alt="Partnership Opportunity"
                fill
                className="object-contain"
                priority
              />
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="section">
        <div className="container-full">
          <h2 className="heading-2 text-center mb-12">Partnership Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <MotionDiv
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <div className="w-16 h-16 bg-synapse-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="heading-3 mb-4 text-center">Technology Partners</h3>
              <p className="text-body text-center">
                AI, machine learning, and data analytics companies to enhance our core technology
              </p>
            </MotionDiv>

            <MotionDiv
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <div className="w-16 h-16 bg-synapse-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="heading-3 mb-4 text-center">Content Partners</h3>
              <p className="text-body text-center">
                Relationship experts, therapists, and content creators to provide valuable insights
              </p>
            </MotionDiv>

            <MotionDiv
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <div className="w-16 h-16 bg-synapse-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="heading-3 mb-4 text-center">Distribution Partners</h3>
              <p className="text-body text-center">
                Platforms and organizations to help us reach and serve more users
              </p>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section bg-gray-50">
        <div className="container-full">
          <h2 className="heading-2 text-center mb-12">Partner Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <MotionDiv
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <h3 className="heading-3 mb-6">Technology Partners</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-synapse-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-body">Access to our AI and ML infrastructure</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-synapse-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-body">Joint product development opportunities</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-synapse-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-body">Technical support and integration assistance</span>
                </li>
              </ul>
            </MotionDiv>

            <MotionDiv
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <h3 className="heading-3 mb-6">Content Partners</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-synapse-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-body">Platform to share expertise with our users</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-synapse-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-body">Revenue sharing opportunities</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-synapse-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-body">Access to our user base and analytics</span>
                </li>
              </ul>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="section">
        <div className="container-full">
          <h2 className="heading-2 text-center mb-12">Partnership Process</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
            <div className="space-y-24">
              <MotionDiv
                whileHover={{ x: 10 }}
                className="relative"
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-synapse-gold rounded-full"></div>
                <div className="w-1/2 ml-auto pl-8">
                  <h3 className="heading-3 mb-4">Initial Contact</h3>
                  <p className="text-body">
                    Reach out to discuss partnership opportunities and alignment
                  </p>
                </div>
              </MotionDiv>

              <MotionDiv
                whileHover={{ x: -10 }}
                className="relative"
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-synapse-gold rounded-full"></div>
                <div className="w-1/2 pr-8">
                  <h3 className="heading-3 mb-4">Evaluation</h3>
                  <p className="text-body">
                    We review your proposal and assess potential synergies
                  </p>
                </div>
              </MotionDiv>

              <MotionDiv
                whileHover={{ x: 10 }}
                className="relative"
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-synapse-gold rounded-full"></div>
                <div className="w-1/2 ml-auto pl-8">
                  <h3 className="heading-3 mb-4">Partnership Agreement</h3>
                  <p className="text-body">
                    Define terms, responsibilities, and success metrics
                  </p>
                </div>
              </MotionDiv>

              <MotionDiv
                whileHover={{ x: -10 }}
                className="relative"
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-synapse-gold rounded-full"></div>
                <div className="w-1/2 pr-8">
                  <h3 className="heading-3 mb-4">Launch & Support</h3>
                  <p className="text-body">
                    Implement partnership and provide ongoing support
                  </p>
                </div>
              </MotionDiv>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-full text-center">
          <h2 className="heading-2 mb-6">Ready to Partner?</h2>
          <p className="text-body mb-8 max-w-2xl mx-auto">
            Join us in building the future of relationship optimization. Contact our team to explore partnership opportunities.
          </p>
          <a
            href="mailto:business@sen.studio"
            className="inline-block bg-synapse-gold text-white px-8 py-3 rounded-full hover:bg-synapse-lime transition-colors"
          >
            Start Partnership Discussion
          </a>
        </div>
      </section>
    </main>
  )
} 