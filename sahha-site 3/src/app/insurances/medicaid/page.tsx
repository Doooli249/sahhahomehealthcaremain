import Link from 'next/link'

export const metadata = {
  title: 'Medicaid Home Health Care in Denver & Aurora, CO | Sahha',
  description: 'Sahha Home Health Care helps Medicaid-eligible families access in-home care services in Colorado. We guide Denver, Aurora, and Centennial families through Medicaid waiver programs, coverage, and next steps.',
}

export default function MedicaidPage() {
  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Does Sahha accept Medicaid for home health care in Colorado?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Sahha Home Health Care works with Medicaid-eligible clients in Denver, Aurora, Centennial, and the greater Colorado area. We can help you understand coverage and next steps.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the Colorado Medicaid HCBS waiver program?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Home and Community Based Services (HCBS) waiver in Colorado allows eligible individuals to receive in-home care services rather than moving to a nursing facility. Sahha can help families navigate waiver program requirements.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I apply for Medicaid home health care in Colorado?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Start by contacting your local county social services office or the Colorado PEAK online portal to apply for Medicaid. Once approved, contact Sahha to begin coordinating in-home care services.',
        },
      },
    ],
  }

  return (
    <section className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-4xl font-extrabold tracking-tight">Medicaid Home Health Care in Colorado</h1>
        <p className="mt-4 max-w-3xl text-slate-700">
          Medicaid programs can support in-home care services for eligible individuals and families in Denver, Aurora, Centennial, and throughout Colorado. Sahha Home Health Care works with Medicaid clients to provide compassionate, personalized in-home care.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border bg-slate-50 p-6">
            <h2 className="text-xl font-bold">What Medicaid May Cover for Home Care</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>✔ Personal care assistance (bathing, dressing, grooming)</li>
              <li>✔ Homemaker services (meal prep, light housekeeping)</li>
              <li>✔ Companionship and safety supervision</li>
              <li>✔ Respite care for family caregivers</li>
              <li>✔ Medication reminders and routine support</li>
              <li>✔ Alzheimer's and dementia care assistance</li>
            </ul>
            <p className="mt-3 text-xs text-slate-500">Coverage and eligibility requirements vary. Contact us to verify your specific situation.</p>
          </div>

          <div className="rounded-2xl border bg-slate-50 p-6">
            <h2 className="text-xl font-bold">Colorado Medicaid Home Care Programs</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>✔ <strong>HCBS Waiver</strong> — Home & Community Based Services for eligible adults</li>
              <li>✔ <strong>CES Waiver</strong> — Community Engagement Supports for eligible individuals</li>
              <li>✔ <strong>Colorado Medicaid Standard</strong> — Covers qualifying home health services</li>
            </ul>
            <p className="mt-3 text-xs text-slate-500">Program names and rules vary. We can help you understand which programs may apply.</p>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold">How Sahha Helps Medicaid Families in Colorado</h2>
          <p className="mt-3 text-slate-700">
            Navigating Medicaid paperwork and waiver programs can feel overwhelming. Sahha Home Health Care helps families in Denver, Aurora, Englewood, and Centennial understand the options available to them, prepare documentation, and start care as quickly as possible.
          </p>
          <p className="mt-3 text-slate-700">
            Our care coordinators understand Colorado's Medicaid landscape and can walk you through next steps — from initial eligibility verification to caregiver matching and ongoing care management.
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
          <div className="mt-4 space-y-3">
            {[
              { q: 'Does Sahha accept Medicaid for home health care in Colorado?', a: 'Yes. Sahha works with Medicaid-eligible clients in Denver, Aurora, Centennial, and the greater Colorado area. We can help you verify coverage and start care.' },
              { q: 'What is the Colorado Medicaid HCBS waiver?', a: 'The Home and Community Based Services (HCBS) waiver allows eligible Coloradans to receive in-home care rather than moving to a facility. We help families navigate this program.' },
              { q: 'How do I apply for Medicaid home health care in Colorado?', a: 'Start by applying through Colorado PEAK or your county social services office. Once approved, contact Sahha to begin coordinating care.' },
            ].map((f) => (
              <details key={f.q} className="rounded-2xl border p-4">
                <summary className="cursor-pointer font-semibold">{f.q}</summary>
                <p className="mt-2 text-sm text-slate-700">{f.a}</p>
              </details>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-2xl bg-brand-soft p-6">
          <h2 className="text-xl font-bold">Ready to Start Medicaid Home Care?</h2>
          <p className="mt-2 text-sm text-slate-700">Request a free, confidential consultation and we'll walk you through what's available in your area.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/#request-care" className="rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white hover:bg-brand-primaryDark">Request Care</Link>
            <Link href="/book-appointment" className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50">Book Consultation</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
