import Link from 'next/link'

export const metadata = {
  title: 'Private Pay In-Home Care | Centennial, Denver & Aurora, Colorado',
  description: 'Flexible private pay in-home care in Centennial, Denver, Aurora, and Colorado. No insurance required. Personalized home health care plans tailored to your schedule and budget with Sahha.',
}

export default function PrivatePayPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-4xl font-extrabold tracking-tight">Private Pay In-Home Care in Colorado</h1>
        <p className="mt-4 max-w-3xl text-slate-700">
          Private pay care gives families in Denver, Aurora, Centennial, and the greater Colorado area full flexibility to choose the right care — on their timeline, at their pace, with no insurance approval required. Sahha will help you build a plan that fits your routine, priorities, and budget.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border bg-slate-50 p-6">
            <h2 className="text-xl font-bold">Benefits of Private Pay Home Care</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>✔ No insurance approval or authorization required</li>
              <li>✔ Start care quickly — often within 24–48 hours</li>
              <li>✔ Fully customized care plans and schedules</li>
              <li>✔ Choose your own caregiver and adjust hours freely</li>
              <li>✔ Short-term, long-term, or occasional care available</li>
            </ul>
          </div>

          <div className="rounded-2xl border bg-slate-50 p-6">
            <h2 className="text-xl font-bold">Services Available on Private Pay</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>✔ Personal care assistance</li>
              <li>✔ Homemaker and household support</li>
              <li>✔ Companionship and safety supervision</li>
              <li>✔ Alzheimer's and dementia care</li>
              <li>✔ Respite care for family caregivers</li>
              <li>✔ Medication reminders and mobility support</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold">How Private Pay Home Care Works</h2>
          <p className="mt-3 text-slate-700">
            Private pay home care is simple and direct. You contact Sahha, we conduct a free consultation to understand your needs, and we build a customized care plan. You choose the services, schedule, and caregiver — with the flexibility to adjust as your needs change.
          </p>
          <p className="mt-3 text-slate-700">
            Whether you need a few hours of support each week or full-time in-home care in Denver, Aurora, or Centennial, Colorado — Sahha makes it easy to get started quickly and affordably.
          </p>
        </div>

        <div className="mt-8 rounded-2xl bg-brand-soft p-6">
          <h2 className="text-xl font-bold">Get a Tailored Private Pay Care Plan</h2>
          <p className="mt-2 text-sm text-slate-700">Request a free consultation and we'll outline your options clearly — no pressure, no obligation.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/#request-care" className="rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white hover:bg-brand-primaryDark">Request Care</Link>
            <Link href="/book-appointment" className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50">Book Consultation</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
