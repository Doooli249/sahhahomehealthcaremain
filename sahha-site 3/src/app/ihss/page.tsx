import Link from 'next/link'

export const metadata = {
  title: 'IHSS & In-Home Supportive Services Colorado | Sahha Home Health Care',
  description: 'Learn how in-home supportive service programs work in Colorado. Sahha Home Health Care helps Denver, Aurora, and Centennial families navigate eligibility, paperwork, and in-home care options.',
}

export default function IhssPage() {
  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are in-home supportive services (IHSS)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'In-home supportive services are programs that help eligible individuals receive assistance with daily living tasks at home rather than in a facility. Program names, eligibility rules, and covered services vary by state and county.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who qualifies for in-home support programs in Colorado?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Eligibility typically depends on factors such as age, disability status, functional limitations, and income. Colorado offers several programs including Medicaid HCBS waivers that may provide in-home care support.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can Sahha help me navigate in-home support programs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Sahha Home Health Care can explain available programs in Colorado, help you understand eligibility requirements, and assist with next steps for families in Denver, Aurora, Centennial, and the surrounding area.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between IHSS and private pay home care?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'IHSS-style programs are publicly funded through Medicaid or state programs and require eligibility approval. Private pay home care allows families to hire caregivers directly without program approval, offering more flexibility.',
        },
      },
    ],
  }

  return (
    <section className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-4xl font-extrabold tracking-tight">IHSS & In-Home Supportive Services in Colorado</h1>
        <p className="mt-4 max-w-3xl text-slate-700">
          In-home supportive service programs help eligible individuals in Colorado receive assistance with daily tasks at home — preserving independence and avoiding nursing facility placement. Sahha Home Health Care helps Denver, Aurora, and Centennial families understand their options and navigate the process.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border bg-slate-50 p-6">
            <h2 className="text-xl font-bold">What Are In-Home Supportive Services?</h2>
            <p className="mt-3 text-sm text-slate-700">
              In-home supportive programs provide funded assistance for eligible individuals who need help with activities of daily living — such as bathing, dressing, meal preparation, and household tasks — in the comfort of their own home.
            </p>
            <p className="mt-3 text-sm text-slate-700">
              These programs are often tied to Medicaid or state-funded initiatives. In Colorado, the Medicaid HCBS (Home and Community Based Services) waiver is the most common pathway for eligible adults.
            </p>
          </div>

          <div className="rounded-2xl border bg-slate-50 p-6">
            <h2 className="text-xl font-bold">Who May Qualify in Colorado?</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>✔ Adults aged 65+ with functional limitations</li>
              <li>✔ Adults with physical or developmental disabilities</li>
              <li>✔ Individuals who meet Colorado Medicaid income requirements</li>
              <li>✔ Those who would otherwise require nursing home level care</li>
            </ul>
            <p className="mt-3 text-xs text-slate-500">Eligibility requirements vary. We can help clarify what applies to your specific situation.</p>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold">How Sahha Helps Families Navigate In-Home Support Programs</h2>
          <p className="mt-3 text-slate-700">
            Applying for in-home support programs can involve multiple agencies, assessments, and paperwork. Our care coordinators help families in Denver, Aurora, Englewood, and Centennial understand common requirements, prepare documentation, and connect with appropriate resources.
          </p>
          <p className="mt-3 text-slate-700">
            While Sahha is not a government agency, we bring experience working alongside families to navigate these programs — and we offer private pay alternatives if programs aren't available or have long waiting periods.
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
          <div className="mt-4 space-y-3">
            {[
              { q: 'What are in-home supportive services (IHSS)?', a: 'Programs that fund in-home assistance for eligible individuals with activities of daily living. Rules vary by state. In Colorado, Medicaid HCBS waivers are the most common pathway.' },
              { q: 'Who qualifies for in-home support programs in Colorado?', a: 'Adults 65+ or with disabilities who meet Medicaid income and functional requirements may qualify. Sahha can help you understand the criteria.' },
              { q: 'Can Sahha help me navigate these programs?', a: 'Yes. We help families in Denver, Aurora, and Centennial understand eligibility, prepare for assessments, and explore both program-funded and private pay options.' },
              { q: 'What if I don\'t qualify or there\'s a long wait?', a: 'Sahha offers private pay in-home care that can start within 24–48 hours, giving your family immediate support while program applications are pending.' },
            ].map((f) => (
              <details key={f.q} className="rounded-2xl border p-4">
                <summary className="cursor-pointer font-semibold">{f.q}</summary>
                <p className="mt-2 text-sm text-slate-700">{f.a}</p>
              </details>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-2xl bg-brand-soft p-6">
          <h2 className="text-xl font-bold">Need Help Navigating In-Home Support Options?</h2>
          <p className="mt-2 text-sm text-slate-700">Request a free consultation and we'll guide you with clarity and compassion — no obligation.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/#request-care" className="rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white hover:bg-brand-primaryDark">Request Care</Link>
            <Link href="/book-appointment" className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50">Book Consultation</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
