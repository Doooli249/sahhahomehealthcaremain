import Link from 'next/link'

export const metadata = {
  title: 'IHSS',
  description: 'Learn how in-home supportive programs work and how Sahha can help families navigate in-home care options.',
}

export default function IhssPage() {
  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is IHSS?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'IHSS is a program concept used in some regions to support in-home assistance. Program names and rules vary by state and county.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you help me understand eligibility?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We can explain common requirements and help you understand next steps for your area.',
        },
      },
    ],
  }

  return (
    <section className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-4xl font-extrabold tracking-tight">IHSS & In-Home Support Programs</h1>
        <p className="mt-4 max-w-3xl text-slate-700">
          Some in-home supportive programs help eligible individuals receive assistance at home. Program names, eligibility, and covered services vary by location.
        </p>
        <p className="mt-4 max-w-3xl text-slate-700">
          If you’re unsure which programs apply to your situation, we can help you understand your options and what the next steps look like.
        </p>
        <div className="mt-8 rounded-2xl bg-slate-50 p-6">
          <h2 className="text-xl font-bold">Need help navigating your options?</h2>
          <p className="mt-2 text-sm text-slate-700">Request a free consultation and we’ll guide you with clarity and compassion.</p>
          <div className="mt-4">
            <Link href="/#request-care" className="rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white hover:bg-brand-primaryDark">Request Care</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
