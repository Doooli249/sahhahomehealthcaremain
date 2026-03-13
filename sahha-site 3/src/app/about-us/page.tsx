import Link from 'next/link'
import { brand } from '@/theme/brand'

export const metadata = {
  title: 'About Sahha Home Health Care | Nurse-Led In-Home Care Colorado',
  description: 'Sahha Home Health Care is built on nearly two decades of clinical nursing experience. Compassionate, culturally aware in-home care serving Denver, Aurora, Centennial, and all of Colorado.',
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
          Our focus is simple: help individuals live safely and independently at home — whether through personal care, skilled nursing support, or companionship — while giving families across Denver, Aurora, and Centennial true peace of mind.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border bg-slate-50 p-6">
            <h2 className="text-xl font-bold">Our Mission</h2>
            <p className="mt-3 text-slate-700">
              We exist to protect dignity and strengthen independence for seniors and individuals who need in-home care services across Denver, Aurora, Centennial, and the greater Colorado area. Every care plan is personalized — because no two people are the same.
            </p>
          </div>
          <div className="rounded-2xl border bg-slate-50 p-6">
            <h2 className="text-xl font-bold">Why Families Choose Sahha</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>✔ Nurse-founded with 18+ years of clinical experience</li>
              <li>✔ Culturally aware, multilingual care coordination</li>
              <li>✔ Thorough caregiver vetting and compatibility matching</li>
              <li>✔ Clear communication with families and case managers</li>
              <li>✔ Medicare, Medicaid, and private pay accepted</li>
              <li>✔ In-home care can begin within 24–48 hours</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold">Our Service Area in Colorado</h2>
          <p className="mt-3 text-slate-700">
            We proudly serve families in <strong>Centennial, Denver, Aurora, Englewood, Greenwood Village, and Littleton, Colorado</strong>. Not sure if we cover your neighborhood? Contact us — we may still be able to help.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {brand.serviceArea.map((city) => (
              <span key={city} className="rounded-full bg-brand-soft px-3 py-1 text-sm font-semibold text-slate-800">{city}</span>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-2xl border bg-slate-50 p-6">
          <h2 className="text-xl font-bold">Our Approach to In-Home Care</h2>
          <p className="mt-3 text-slate-700">
            We don't believe in cookie-cutter care. Every client receives a personalized care plan developed through a free consultation with a care coordinator. We match caregivers based on skills, personality, and language — and we stay in close contact with families throughout.
          </p>
          <p className="mt-3 text-slate-700">
            Whether you need short-term respite care, ongoing personal care assistance, skilled nursing support, or help navigating Medicaid waiver programs in Colorado — Sahha is here.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/#request-care" className="rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white hover:bg-brand-primaryDark">Request Care</Link>
          <Link href="/book-appointment" className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50">Book Appointment</Link>
        </div>
      </div>
    </section>
  )
}
