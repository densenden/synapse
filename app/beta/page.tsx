import { MotionDiv } from '../components/MotionWrapper'
import Image from 'next/image'
import Notification from '../components/Notification'

export default function Beta() {
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
                Become a Beta Tester
              </h1>
              <p className="text-body mb-8">
                Be among the first to experience the future of relationship optimization. Help us shape Synapse through valuable feedback and insights.
              </p>
              <a
                href="mailto:beta@sen.studio"
                className="inline-block bg-synapse-gold text-white px-8 py-3 rounded-full hover:bg-synapse-lime transition-colors"
              >
                Apply as Beta Tester
              </a>
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px]"
            >
              <Image
                src="/images/beta-hero.png"
                alt="Beta Program"
                fill
                className="object-contain"
                priority
              />
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Example Notifications */}
      <section className="section">
        <div className="container-full">
          <h2 className="heading-2 text-center mb-12">Example Notifications</h2>
          
          <Notification
            title="Birthday Reminder"
            time="2 hours ago"
            content="Your partner's birthday is in 3 days. Would you like to order flowers?"
            actions={[
              { label: "Order Flowers", href: "https://example.com/flowers" },
              { label: "Remind Later", href: "#" }
            ]}
          />

          <Notification
            title="Emotional Analysis"
            time="1 hour ago"
            content="Your partner seems stressed today. Would you like to offer support?"
            actions={[
              { label: "Check In", href: "#" },
              { label: "Later", href: "#" }
            ]}
          />

          <Notification
            title="Quality Time"
            time="30 minutes ago"
            content="You have time tonight. Should I reserve a table at your favorite restaurant?"
            actions={[
              { label: "Reserve Table", href: "https://example.com/restaurant" },
              { label: "Other Idea", href: "#" }
            ]}
          />
        </div>
      </section>

      {/* Program Details */}
      <section className="section bg-gray-50">
        <div className="container-full">
          <h2 className="heading-2 text-center mb-12">Beta Program Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <MotionDiv
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-lg"
            >
              <h3 className="heading-3 mb-6">What You Get</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-synapse-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-body">Early access to all features</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-synapse-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-body">Direct influence on product development</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-synapse-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-body">Exclusive access to beta tester community</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-synapse-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-body">Lifetime access to premium features</span>
                </li>
              </ul>
            </MotionDiv>

            <MotionDiv
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-lg"
            >
              <h3 className="heading-3 mb-6">What We Expect</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-synapse-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-body">Regular feedback and bug reports</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-synapse-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-body">Participation in user interviews</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-synapse-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-body">Testing new features upon release</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-synapse-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-body">Share your experiences with others</span>
                </li>
              </ul>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container-full">
          <h2 className="heading-2 text-center mb-12">Beta Program Timeline</h2>
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
                    Beta program applications open
                  </p>
                </div>
              </MotionDiv>

              <MotionDiv
                whileHover={{ x: -10 }}
                className="relative"
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-synapse-gold rounded-full"></div>
                <div className="w-1/2 pr-8">
                  <h3 className="heading-3 mb-4">April 2025</h3>
                  <p className="text-body">
                    First beta testers onboarded
                  </p>
                </div>
              </MotionDiv>

              <MotionDiv
                whileHover={{ x: 10 }}
                className="relative"
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-synapse-gold rounded-full"></div>
                <div className="w-1/2 ml-auto pl-8">
                  <h3 className="heading-3 mb-4">August 2025</h3>
                  <p className="text-body">
                    Beta testing program ends
                  </p>
                </div>
              </MotionDiv>

              <MotionDiv
                whileHover={{ x: -10 }}
                className="relative"
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-synapse-gold rounded-full"></div>
                <div className="w-1/2 pr-8">
                  <h3 className="heading-3 mb-4">September 2025</h3>
                  <p className="text-body">
                    Official launch with your feedback
                  </p>
                </div>
              </MotionDiv>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="section bg-gray-50">
        <div className="container-full">
          <h2 className="heading-2 text-center mb-12">Beta Tester Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <MotionDiv
              whileHover={{ y: -5 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-synapse-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="heading-3 mb-4">Time Commitment</h3>
              <p className="text-body">
                2-3 hours per week for testing and feedback
              </p>
            </MotionDiv>

            <MotionDiv
              whileHover={{ y: -5 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-synapse-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="heading-3 mb-4">Device Requirements</h3>
              <p className="text-body">
                iOS 15+ or Android 8+ device
              </p>
            </MotionDiv>

            <MotionDiv
              whileHover={{ y: -5 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-synapse-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="heading-3 mb-4">Communication</h3>
              <p className="text-body">
                English language skills for feedback and interviews
              </p>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-full text-center">
          <h2 className="heading-2 mb-6">Ready to Join?</h2>
          <p className="text-body mb-8 max-w-2xl mx-auto">
            Help shape the future of relationship optimization. Apply now for our beta program.
          </p>
          <a
            href="mailto:beta@sen.studio"
            className="inline-block bg-synapse-gold text-white px-8 py-3 rounded-full hover:bg-synapse-lime transition-colors"
          >
            Apply as Beta Tester
          </a>
        </div>
      </section>
    </main>
  )
} 