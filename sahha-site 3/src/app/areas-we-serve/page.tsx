import Link from 'next/link'
import { brand } from '@/theme/brand'

export const metadata = {
  title: 'Areas We Serve | Sahha Home Health Care',
  description: 'Home health care services in Centennial and the greater Denver metro area.',
}

const locations = [
  { name: 'Centennial, CO', slug: 'home-health-care-centennial-co' },
  { name: 'Denver, CO', slug: 'home-health-care-denver-co' },
  { name: 'Aurora, CO', slug: 'home-health-care-aurora-co' },
  { name: 'Englewood, CO', slug: 'home-health-care-englewood-co' },
  { name: 'Littleton, CO', slug: 'home-health-care-littleton-co' },
]

export default function AreasWeServePage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-4xl font-extrabold tracking-tight">Areas We Serve</h1>
        <p className="mt-4 max-w-3xl text-slate-700">
          Sahha Home Health Care provides compassionate, personalized in-home care throughout {brand.city} and the greater Denver metro
          area. If you don’t see your neighborhood listed, contact us — we may still be able to help.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {locations.map((l) => (
            <Link
              key={l.slug}
              href={`/areas-we-serve/${l.slug}`}
              className="rounded-2xl border bg-slate-50 p-6 hover:bg-slate-100"
            >
              <div className="text-lg font-bold">Home Health Care in {l.name}</div>
              <p className="mt-2 text-sm text-slate-700">Services, coverage guidance, and next steps for families in {l.name}.</p>
            </Link>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-brand-primary p-10 text-white">
          <h2 className="text-3xl font-extrabold">Not sure if we serve your area?</h2>
          <p className="mt-3 text-white/90">Call us and we’ll confirm availability and next steps.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact-us" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100">
              Contact Us
            </Link>
            <a href={`tel:${brand.phoneE164}`} className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
              Call {brand.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
