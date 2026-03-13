import Link from 'next/link'

export const metadata = {
  title: 'Our Team',
  description: 'Meet the Sahha Home Health Care team — compassionate professionals dedicated to dignity and safety at home.',
}

export default function TeamPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-4xl font-extrabold tracking-tight">Our Team</h1>
        <p className="mt-4 max-w-3xl text-slate-700">
          Sahha is built on experienced, vetted caregivers and a care coordination approach that prioritizes communication, consistency, and compatibility.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="h-12 w-12 rounded-full bg-brand-soft" />
              <div className="mt-4 text-lg font-bold">Care Team Member</div>
              <p className="mt-2 text-sm text-slate-700">Add caregiver bios here when ready (roles, certifications, specialties).</p>
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-3xl bg-brand-primary p-10 text-white">
          <h2 className="text-3xl font-extrabold">Want to speak with a coordinator?</h2>
          <p className="mt-3 text-white/90">We’ll match you with the right care plan and the right caregiver.</p>
          <div className="mt-6">
            <Link href="/#request-care" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100">Request Care</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
