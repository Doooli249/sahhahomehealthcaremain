import Link from 'next/link'

export const metadata = {
  title: 'Medicare Home Health Benefits in Colorado | Sahha Home Health Care',
  description: 'Understand your Medicare home health care benefits with Sahha. We help Denver, Aurora, and Centennial, CO families navigate skilled nursing and in-home care services covered by Medicare.',
}

export default function MedicarePage() {
  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Does Sahha accept Medicare for home health care?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Sahha Home Health Care works with Medicare beneficiaries in Denver, Aurora, Centennial, and greater Colorado. Medicare coverage for home health services depends on medical necessity and plan details. Contact us to verify your eligibility.',
        },
      },
      {
        '@type': 'Question',
        name: 'What home health services does Medicare cover in Colorado?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Medicare Part A and Part B may cover skilled nursing visits, physical and occupational therapy, speech-language services, home health aide services, and medical social services when deemed medically necessary.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I qualify for Medicare home health care?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'To qualify, you generally need a doctor certification that you are homebound and need skilled care, a care plan from a physician, and enrollment in Medicare Part A or Part B. Sahha can help you understand what documentation you need.',
        },
      },
    ],
  }

  return (
    <section className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-4xl font-extrabold tracking-tight">Medicare Home Health Care Benefits in Colorado</h1>
        <p className="mt-4 max-w-3xl text-slate-700">
          Medicare coverage for home health services can support skilled nursing and in-home care for eligible beneficiaries in Denver, Aurora, Centennial, and throughout Colorado. Sahha Home Health Care can help you understand what questions to ask and how to access benefits.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border bg-slate-50 p-6">
            <h2 className="text-xl font-bold">What Medicare May Cover for Home Health</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>✔ Skilled nursing visits (wound care, medication management)</li>
              <li>✔ Physical, occupational, and speech therapy</li>
              <li>✔ Home health aide services for personal care</li>
              <li>✔ Medical social services and care coordination</li>
              <li>✔ Durable medical equipment (DME) when ordered by a physician</li>
            </ul>
            <p className="mt-3 text-xs text-slate-500">Coverage depends on medical necessity and plan details. Always confirm with your physician and Medicare plan.</p>
          </div>

          <div className="rounded-2xl border bg-slate-50 p-6">
            <h2 className="text-xl font-bold">Medicare Part A vs. Part B Home Health</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li><strong>Part A</strong> — Covers home health after a qualifying hospital or skilled nursing facility stay</li>
              <li><strong>Part B</strong> — Covers outpatient home health services when medically necessary, without requiring a prior hospital stay</li>
            </ul>
            <p className="mt-3 text-xs text-slate-500">Talk to your doctor about which Medicare benefit applies to your situation.</p>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold">How to Start Medicare Home Health Care in Denver & Aurora, CO</h2>
          <p className="mt-3 text-slate-700">
            To access Medicare home health benefits, you generally need a physician certification that you are homebound and require skilled care. Your doctor will create a care plan and refer you to a Medicare-certified home health agency.
          </p>
          <p className="mt-3 text-slate-700">
            Sahha Home Health Care can help you understand what documentation you need, what to ask your doctor, and how to transition into home care smoothly in Centennial, Denver, Aurora, or anywhere we serve across Colorado.
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
          <div className="mt-4 space-y-3">
            {[
              { q: 'Does Sahha accept Medicare for home health care?', a: 'Yes. Sahha works with Medicare beneficiaries in Denver, Aurora, Centennial, and greater Colorado. Coverage depends on medical necessity — contact us to verify your eligibility.' },
              { q: 'What home health services does Medicare cover?', a: 'Medicare Part A and Part B may cover skilled nursing, therapy services, home health aide visits, and medical social services when medically necessary.' },
              { q: 'How do I qualify for Medicare home health care?', a: 'You typically need a doctor certification that you are homebound and require skilled care, plus enrollment in Medicare Part A or Part B.' },
            ].map((f) => (
              <details key={f.q} className="rounded-2xl border p-4">
                <summary className="cursor-pointer font-semibold">{f.q}</summary>
                <p className="mt-2 text-sm text-slate-700">{f.a}</p>
              </details>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-2xl bg-brand-soft p-6">
          <h2 className="text-xl font-bold">Questions About Medicare Home Care?</h2>
          <p className="mt-2 text-sm text-slate-700">Our care coordinators are happy to help you understand your options and get started. No obligation.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/#request-care" className="rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white hover:bg-brand-primaryDark">Request Care</Link>
            <Link href="/book-appointment" className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50">Book Consultation</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
