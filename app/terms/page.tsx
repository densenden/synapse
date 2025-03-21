import { MotionDiv } from '../components/MotionWrapper'

export default function Terms() {
  return (
    <main className="min-h-screen bg-white">
      <section className="section">
        <div className="container-full max-w-4xl mx-auto">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="heading-1 mb-8">Terms of Service</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-body mb-8">
                Last updated: March 15, 2024
              </p>

              <h2 className="heading-2 mb-4">1. Agreement to Terms</h2>
              <p className="text-body mb-6">
                By accessing or using Synapse, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.
              </p>

              <h2 className="heading-2 mb-4">2. Company Information</h2>
              <p className="text-body mb-6">
                SEN.CO UG<br />
                Managing Director: Densen Den<br />
                Email: master@sen.studio<br />
                Address: [Your German Address]<br />
                Commercial Register: [Register Number]<br />
                VAT ID: [VAT Number]
              </p>

              <h2 className="heading-2 mb-4">3. Description of Service</h2>
              <p className="text-body mb-6">
                Synapse is an AI-powered relationship optimization app that provides personalized insights and recommendations to help users improve their relationships.
              </p>

              <h2 className="heading-2 mb-4">4. User Accounts</h2>
              <p className="text-body mb-6">
                To use Synapse, you must:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Be at least 18 years old</li>
                <li>Register for an account</li>
                <li>Provide accurate information</li>
                <li>Maintain the security of your account</li>
                <li>Accept responsibility for all activities under your account</li>
              </ul>

              <h2 className="heading-2 mb-4">5. Privacy and Data Protection</h2>
              <p className="text-body mb-6">
                Your use of Synapse is also governed by our Privacy Policy. By using Synapse, you agree to our collection and use of information as detailed in the Privacy Policy.
              </p>

              <h2 className="heading-2 mb-4">6. User Content</h2>
              <p className="text-body mb-6">
                You retain all rights to any content you submit, post, or display on or through Synapse. By submitting content, you grant us a license to use, modify, and display that content.
              </p>

              <h2 className="heading-2 mb-4">7. Prohibited Activities</h2>
              <p className="text-body mb-6">
                You agree not to:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Violate any laws or regulations</li>
                <li>Impersonate others</li>
                <li>Share false or misleading information</li>
                <li>Attempt to access unauthorized areas</li>
                <li>Interfere with the service</li>
                <li>Use automated systems to access the service</li>
                <li>Share your account credentials</li>
              </ul>

              <h2 className="heading-2 mb-4">8. Intellectual Property</h2>
              <p className="text-body mb-6">
                The service and its original content, features, and functionality are owned by SEN.CO UG and are protected by international copyright, trademark, and other intellectual property laws.
              </p>

              <h2 className="heading-2 mb-4">9. Termination</h2>
              <p className="text-body mb-6">
                We may terminate or suspend your account and access to the service immediately, without prior notice, for any reason, including breach of these Terms.
              </p>

              <h2 className="heading-2 mb-4">10. Limitation of Liability</h2>
              <p className="text-body mb-6">
                In no event shall SEN.CO UG be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.
              </p>

              <h2 className="heading-2 mb-4">11. Changes to Terms</h2>
              <p className="text-body mb-6">
                We reserve the right to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on this page.
              </p>

              <h2 className="heading-2 mb-4">12. Governing Law</h2>
              <p className="text-body mb-6">
                These Terms shall be governed by and construed in accordance with the laws of Germany, without regard to its conflict of law provisions.
              </p>

              <h2 className="heading-2 mb-4">13. Contact Information</h2>
              <p className="text-body mb-6">
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="text-body mb-6">
                Email: master@sen.studio<br />
                Address: [Your German Address]
              </p>
            </div>
          </MotionDiv>
        </div>
      </section>
    </main>
  )
} 