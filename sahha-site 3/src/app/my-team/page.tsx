import Link from 'next/link'

export const metadata = {
  title: 'Our Home Health Care Team | Experienced Caregivers in Colorado',
  description: 'Meet Sahha\'s compassionate, vetted caregivers and care coordinators. We serve Denver, Aurora, Centennial, and Colorado families with skilled in-home care, nursing support, and personalized care plans.',
}

export default function TeamPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-4xl font-extrabold tracking-tight">Our Home Health Care Team</h1>
        <p className="mt-4 max-w-3xl text-slate-700">
          Sahha is built on experienced, vetted caregivers and a care coordination approach that prioritizes communication, consistency, and compatibility. Our team serves families across Denver, Aurora, Centennial, and the greater Colorado area.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border bg-slate-50 p-6">
            <h2 className="text-xl font-bold">How We Hire & Vet Caregivers</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>✔ Comprehensive background checks on every caregiver</li>
              <li>✔ Skills assessment and reference verification</li>
              <li>✔ Personality and compatibility matching with clients</li>
              <li>✔ Ongoing quality monitoring and family check-ins</li>
              <li>✔ Language and cultural fit considered for each placement</li>
            </ul>
          </div>

          <div className="rounded-2xl border bg-slate-50 p-6">
            <h2 className="text-xl font-bold">Nurse-Led Care Coordination</h2>
            <p className="mt-3 text-sm text-slate-700">
              Our care coordination team is led by a nurse with nearly two decades of clinical experience. Every care plan is reviewed with clinical insight — ensuring safety, accuracy, and continuity of care for each client.
            </p>
            <p className="mt-3 text-sm text-slate-700">
              We stay in close contact with families and case managers, providing updates and adjusting plans as needs evolve.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="h-12 w-12 rounded-full bg-brand-soft" />
            <h3 className="mt-4 text-lg font-bold">Care Coordinator</h3>
            <p className="mt-2 text-sm text-slate-700">Handles client onboarding, caregiver matching, family communication, and care plan management.</p>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="h-12 w-12 rounded-full bg-brand-soft" />
            <h3 className="mt-4 text-lg font-bold">Personal Care Aide</h3>
            <p className="mt-2 text-sm text-slate-700">Provides hands-on assistance with bathing, grooming, dressing, mobility, and daily routines with dignity and compassion.</p>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="h-12 w-12 rounded-full bg-brand-soft" />
            <h3 className="mt-4 text-lg font-bold">Homemaker Specialist</h3>
            <p className="mt-2 text-sm text-slate-700">Supports light housekeeping, meal preparation, laundry, and daily household routines for comfort and safety.</p>
          </div>
        </div>

        <div className="mt-12 rounded-3xl bg-brand-primary p-10 text-white">
          <h2 className="text-3xl font-extrabold">Want to Speak With a Care Coordinator?</h2>
          <p className="mt-3 text-white/90">We'll match you with the right care plan and the right caregiver for your family in Denver, Aurora, or anywhere we serve in Colorado.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/#request-care" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100">Request Care</Link>
            <Link href="/book-appointment" className="rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20">Book Consultation</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
