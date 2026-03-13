import Link from 'next/link'

export const metadata = {
  title: 'Medicare',
  description: 'Learn how Medicare may support in-home care and how Sahha can help you understand coverage options.',
}

export default function MedicarePage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-4xl font-extrabold tracking-tight">Medicare</h1>
        <p className="mt-4 max-w-3xl text-slate-700">
          Medicare coverage for home health services can depend on medical necessity and plan details. We can help you understand what questions to ask and how to prepare for next steps.
        </p>
        <div className="mt-8">
          <Link href="/#request-care" className="rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white hover:bg-brand-primaryDark">Request Care</Link>
        </div>
      </div>
    </section>
  )
}
