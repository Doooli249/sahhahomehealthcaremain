import Link from 'next/link'

export const metadata = {
  title: 'Medicaid',
  description: 'Learn about Medicaid-related in-home care options and how Sahha can help families navigate next steps.',
}

export default function MedicaidPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-4xl font-extrabold tracking-tight">Medicaid</h1>
        <p className="mt-4 max-w-3xl text-slate-700">
          Medicaid programs can support in-home care services for eligible individuals. Coverage and requirements vary.
        </p>
        <p className="mt-4 max-w-3xl text-slate-700">
          We can help you understand common pathways, paperwork needs, and how to start care as quickly as possible.
        </p>
        <div className="mt-8">
          <Link href="/#request-care" className="rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white hover:bg-brand-primaryDark">Request Care</Link>
        </div>
      </div>
    </section>
  )
}
