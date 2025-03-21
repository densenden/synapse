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
                Werden Sie Beta-Tester
              </h1>
              <p className="text-body mb-8">
                Seien Sie unter den Ersten, die die Zukunft der Beziehungsoptimierung erleben. Helfen Sie uns, Synapse durch wertvolles Feedback und Einblicke zu gestalten.
              </p>
              <a
                href="mailto:beta@sen.studio"
                className="inline-block bg-synapse-gold text-white px-8 py-3 rounded-full hover:bg-synapse-lime transition-colors"
              >
                Als Beta-Tester bewerben
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
                alt="Beta-Programm"
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
          <h2 className="heading-2 text-center mb-12">Beispiel-Benachrichtigungen</h2>
          
          <Notification
            title="Geburtstagserinnerung"
            time="Vor 2 Stunden"
            content="Der Geburtstag deiner Partnerin ist in 3 Tagen. Möchtest du Blumen bestellen?"
            actions={[
              { label: "Blumen bestellen", onClick: () => {} },
              { label: "Später erinnern", onClick: () => {} }
            ]}
          />

          <Notification
            title="Emotionale Analyse"
            time="Vor 1 Stunde"
            content="Deine Partnerin scheint heute gestresst zu sein. Möchtest du sie unterstützen?"
            actions={[
              { label: "Nachfragen", onClick: () => {} },
              { label: "Später", onClick: () => {} }
            ]}
          />

          <Notification
            title="Gemeinsame Zeit"
            time="Vor 30 Minuten"
            content="Du hast heute Abend Zeit. Soll ich einen Tisch im Lieblingsrestaurant reservieren?"
            actions={[
              { label: "Tisch reservieren", onClick: () => {} },
              { label: "Andere Idee", onClick: () => {} }
            ]}
          />
        </div>
      </section>

      {/* Program Details */}
      <section className="section bg-gray-50">
        <div className="container-full">
          <h2 className="heading-2 text-center mb-12">Beta-Programm Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <MotionDiv
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-lg"
            >
              <h3 className="heading-3 mb-6">Was Sie bekommen</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-synapse-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-body">Frühzeitiger Zugang zu allen Funktionen</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-synapse-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-body">Direkter Einfluss auf die Produktentwicklung</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-synapse-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-body">Exklusiver Zugang zur Beta-Tester-Community</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-synapse-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-body">Lebenslanger Zugang zu Premium-Funktionen</span>
                </li>
              </ul>
            </MotionDiv>

            <MotionDiv
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-lg"
            >
              <h3 className="heading-3 mb-6">Was wir von Ihnen erwarten</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-synapse-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-body">Regelmäßiges Feedback und Bug-Reports</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-synapse-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-body">Teilnahme an Benutzerinterviews</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-synapse-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-body">Testen neuer Funktionen bei der Einführung</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-synapse-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-body">Teilen Sie Ihre Erfahrungen mit anderen</span>
                </li>
              </ul>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container-full">
          <h2 className="heading-2 text-center mb-12">Zeitplan des Beta-Programms</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
            <div className="space-y-24">
              <MotionDiv
                whileHover={{ x: 10 }}
                className="relative"
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-synapse-gold rounded-full"></div>
                <div className="w-1/2 ml-auto pl-8">
                  <h3 className="heading-3 mb-4">März 2025</h3>
                  <p className="text-body">
                    Bewerbungen für das Beta-Programm starten
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
                    Erste Beta-Tester werden onboarded
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
                    Beta-Test-Programm endet
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
                    Offizieller Launch mit Ihrem Feedback
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
          <h2 className="heading-2 text-center mb-12">Anforderungen für Beta-Tester</h2>
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
              <h3 className="heading-3 mb-4">Zeitaufwand</h3>
              <p className="text-body">
                2-3 Stunden pro Woche für Tests und Feedback
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
              <h3 className="heading-3 mb-4">Geräteanforderungen</h3>
              <p className="text-body">
                iOS 15+ oder Android 8+ Gerät
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
              <h3 className="heading-3 mb-4">Kommunikation</h3>
              <p className="text-body">
                Deutschkenntnisse für Feedback und Interviews
              </p>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-full text-center">
          <h2 className="heading-2 mb-6">Bereit mitzumachen?</h2>
          <p className="text-body mb-8 max-w-2xl mx-auto">
            Gestalten Sie die Zukunft der Beziehungsoptimierung mit. Bewerben Sie sich jetzt für unser Beta-Programm.
          </p>
          <a
            href="mailto:beta@sen.studio"
            className="inline-block bg-synapse-gold text-white px-8 py-3 rounded-full hover:bg-synapse-lime transition-colors"
          >
            Als Beta-Tester bewerben
          </a>
        </div>
      </section>
    </main>
  )
} 