import Link from 'next/link'

export const metadata = {
  title: 'Private Pay',
  description: 'Private pay home care options with flexible scheduling and customized care plans from Sahha Home Health Care.',
}

export default function PrivatePayPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-4xl font-extrabold tracking-tight">Private Pay</h1>
        <p className="mt-4 max-w-3xl text-slate-700">
          Private pay care offers flexible scheduling and personalized support tailored to your family’s goals. We’ll help you build a plan
          that fits your routine, priorities, and budget.
        </p>
        <div className="mt-8 rounded-2xl bg-slate-50 p-6">
          <h2 className="text-xl font-bold">Get a tailored care plan</h2>
          <p className="mt-2 text-sm text-slate-700">Request a free consultation and we’ll outline options clearly — no pressure.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/#request-care" className="rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white hover:bg-brand-primaryDark">Request Care</Link>
            <Link href="/book-appointment" className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50">Book Appointment</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
