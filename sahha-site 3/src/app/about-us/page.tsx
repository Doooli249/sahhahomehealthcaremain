import Link from 'next/link'

export const metadata = {
  title: 'About Us',
  description: 'Learn about Sahha Home Health Care — a compassionate, nurse-founded home care team serving Centennial and the Denver metro area.',
}

export default function AboutPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-4xl font-extrabold tracking-tight">About Sahha Home Health Care</h1>
        <p className="mt-4 max-w-3xl text-slate-700">
          Providing care is a calling — not merely a service. Sahha Home Health Care is founded on nearly two decades of clinical nursing experience, delivered with empathy, cultural respect, and professional precision.
        </p>
        <p className="mt-4 max-w-3xl text-slate-700">
          Our focus is simple: help individuals live safely and independently at home while giving families true peace of mind.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/#request-care" className="rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white hover:bg-brand-primaryDark">Request Care</Link>
          <Link href="/book-appointment" className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50">Book Appointment</Link>
        </div>
      </div>
    </section>
  )
}
