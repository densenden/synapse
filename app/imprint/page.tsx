import { MotionDiv } from '../components/MotionWrapper'

export default function Imprint() {
  return (
    <main className="min-h-screen bg-white py-16">
      <div className="container-full">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="heading-1 mb-12">Legal Information</h1>

          <div className="space-y-8">
            <section>
              <h2 className="heading-2 mb-4">Information pursuant to § 5 TMG</h2>
              <p className="text-body">
                SEN.CO UG (haftungsbeschränkt)<br />
                Paradiesgasse 53<br />
                60594 Frankfurt am Main<br />
                Germany
              </p>
            </section>

            <section>
              <h2 className="heading-2 mb-4">Represented by</h2>
              <p className="text-body">Denis Kreuzer</p>
            </section>

            <section>
              <h2 className="heading-2 mb-4">Contact</h2>
              <p className="text-body">
                Phone: +49 155 66179807<br />
                Email: sound@sen.studio
              </p>
            </section>

            <section>
              <h2 className="heading-2 mb-4">Commercial Register</h2>
              <p className="text-body">
                Registered in the Commercial Register<br />
                Register Court: Amtsgericht Frankfurt am Main<br />
                Registration Number: HRB 129222
              </p>
            </section>

            <section>
              <h2 className="heading-2 mb-4">VAT ID</h2>
              <p className="text-body">
                VAT Identification Number pursuant to § 27 a of the German VAT Act:<br />
                DE358821685
              </p>
            </section>

            <section>
              <h2 className="heading-2 mb-4">Content Responsibility</h2>
              <p className="text-body">
                Responsible for content pursuant to § 55 Abs. 2 RStV:<br />
                Denis Kreuzer<br />
                Paradiesgasse 53<br />
                60594 Frankfurt am Main
              </p>
            </section>
          </div>
        </MotionDiv>
      </div>
    </main>
  )
} 