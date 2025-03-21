import { MotionDiv } from '../components/MotionWrapper'

export default function Privacy() {
  return (
    <main className="min-h-screen bg-white">
      <section className="section">
        <div className="container-full max-w-4xl mx-auto">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="heading-1 mb-8">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-body mb-8">
                Last updated: March 15, 2024
              </p>

              <h2 className="heading-2 mb-4">1. Introduction</h2>
              <p className="text-body mb-6">
                SEN.CO UG ("we", "our", or "us") operates Synapse, an AI-powered relationship optimization app. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our app.
              </p>

              <h2 className="heading-2 mb-4">2. Data Controller</h2>
              <p className="text-body mb-6">
                SEN.CO UG<br />
                Managing Director: Densen Den<br />
                Email: master@sen.studio<br />
                Address: [Your German Address]<br />
                Commercial Register: [Register Number]<br />
                VAT ID: [VAT Number]
              </p>

              <h2 className="heading-2 mb-4">3. Information We Collect</h2>
              <h3 className="heading-3 mb-2">3.1 Personal Information</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Account information (name, email, password)</li>
                <li>Profile information</li>
                <li>Relationship preferences and settings</li>
                <li>Communication preferences</li>
              </ul>

              <h3 className="heading-3 mb-2">3.2 Usage Data</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>App usage statistics</li>
                <li>Feature interaction data</li>
                <li>Performance metrics</li>
                <li>Error logs</li>
              </ul>

              <h2 className="heading-2 mb-4">4. How We Use Your Information</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>Provide and maintain our services</li>
                <li>Improve and personalize your experience</li>
                <li>Process your transactions</li>
                <li>Send you important updates</li>
                <li>Respond to your requests</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="heading-2 mb-4">5. Legal Basis for Processing</h2>
              <p className="text-body mb-6">
                We process your personal data based on the following legal grounds:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Contract performance</li>
                <li>Legal obligations</li>
                <li>Legitimate interests</li>
                <li>Your consent</li>
              </ul>

              <h2 className="heading-2 mb-4">6. Data Security</h2>
              <p className="text-body mb-6">
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2 className="heading-2 mb-4">7. Your Rights Under GDPR</h2>
              <p className="text-body mb-6">
                Under the GDPR, you have the following rights:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Right to access your personal data</li>
                <li>Right to rectification</li>
                <li>Right to erasure</li>
                <li>Right to restrict processing</li>
                <li>Right to data portability</li>
                <li>Right to object</li>
                <li>Right to withdraw consent</li>
              </ul>

              <h2 className="heading-2 mb-4">8. Data Retention</h2>
              <p className="text-body mb-6">
                We retain your personal data only for as long as necessary to fulfill the purposes for which we collected it, including legal, accounting, or reporting requirements.
              </p>

              <h2 className="heading-2 mb-4">9. International Data Transfers</h2>
              <p className="text-body mb-6">
                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your personal data.
              </p>

              <h2 className="heading-2 mb-4">10. Contact Us</h2>
              <p className="text-body mb-6">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-body mb-6">
                Email: master@sen.studio<br />
                Address: [Your German Address]
              </p>

              <h2 className="heading-2 mb-4">11. Changes to This Policy</h2>
              <p className="text-body mb-6">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </div>
          </MotionDiv>
        </div>
      </section>
    </main>
  )
} 