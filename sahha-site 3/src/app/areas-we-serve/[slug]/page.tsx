import Link from 'next/link'
import { notFound } from 'next/navigation'
import { brand } from '@/theme/brand'

const locations: Record<string, { name: string; nearby: string[] }> = {
  'home-health-care-centennial-co': { name: 'Centennial, CO', nearby: ['Greenwood Village', 'Englewood', 'Littleton'] },
  'home-health-care-denver-co': { name: 'Denver, CO', nearby: ['Aurora', 'Lakewood', 'Englewood'] },
  'home-health-care-aurora-co': { name: 'Aurora, CO', nearby: ['Denver', 'Centennial', 'Parker'] },
  'home-health-care-englewood-co': { name: 'Englewood, CO', nearby: ['Littleton', 'Centennial', 'Denver'] },
  'home-health-care-littleton-co': { name: 'Littleton, CO', nearby: ['Centennial', 'Englewood', 'Highlands Ranch'] },
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const loc = locations[params.slug]
  if (!loc) return { title: 'Area' }
  return {
    title: `Home Health Care in ${loc.name} | Sahha Home Health Care`,
    description: `Private in-home care services for families in ${loc.name}. Request care, verify coverage, and schedule a consultation with Sahha Home Health Care.`,
  }
}

export default function LocationPage({ params }: { params: { slug: string } }) {
  const loc = locations[params.slug]
  if (!loc) return notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: brand.name,
    telephone: brand.phone,
    areaServed: [loc.name, ...loc.nearby.map((n) => `${n}, CO`)],
    address: {
      '@type': 'PostalAddress',
      addressLocality: brand.city,
      addressRegion: 'CO',
      addressCountry: 'US',
    },
  }

  return (
    <section className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-6xl px-4 py-16">
        <Link href="/areas-we-serve" className="text-sm font-semibold text-brand-primary hover:underline">← Back to Areas</Link>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight">Home Health Care in {loc.name}</h1>
        <p className="mt-4 max-w-3xl text-slate-700">
          Sahha Home Health Care provides compassionate, personalized in-home care for individuals and families in {loc.name}.
          We help clients live with dignity, independence, and peace of mind — with flexible scheduling and responsive communication.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border bg-slate-50 p-6">
            <h2 className="text-xl font-bold">Services available in {loc.name}</h2>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li>✔ Personal Care Assistance</li>
              <li>✔ Homemaker Services</li>
              <li>✔ Companionship & Safety Support</li>
              <li>✔ Alzheimer’s & Dementia Support</li>
              <li>✔ Respite Care</li>
            </ul>
            <p className="mt-4 text-sm text-slate-600">See the full list on our <Link className="font-semibold text-brand-primary hover:underline" href="/services">Services</Link> page.</p>
          </div>

          <div className="rounded-2xl border bg-white p-6">
            <h2 className="text-xl font-bold">Insurance & payment</h2>
            <p className="mt-3 text-slate-700">We accept Medicare, Medicaid, and Private Pay. We’ll help you understand options and next steps.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link href="/insurances/medicare" className="rounded-full bg-brand-soft px-4 py-2 text-sm font-semibold text-slate-900">Medicare</Link>
              <Link href="/insurances/medicaid" className="rounded-full bg-brand-soft px-4 py-2 text-sm font-semibold text-slate-900">Medicaid</Link>
              <Link href="/insurances/private-pay" className="rounded-full bg-brand-soft px-4 py-2 text-sm font-semibold text-slate-900">Private Pay</Link>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">FAQ</h2>
            <div className="mt-4 space-y-3">
              <details className="rounded-2xl border p-4"><summary className="cursor-pointer font-semibold">How fast can care start in {loc.name}?</summary><p className="mt-2 text-sm text-slate-700">In many cases, care can begin within 24–48 hours after consultation and assessment.</p></details>
              <details className="rounded-2xl border p-4"><summary className="cursor-pointer font-semibold">Do you serve nearby areas?</summary><p className="mt-2 text-sm text-slate-700">Yes — we also serve nearby communities such as {loc.nearby.join(', ')}.</p></details>
              <details className="rounded-2xl border p-4"><summary className="cursor-pointer font-semibold">What’s the first step?</summary><p className="mt-2 text-sm text-slate-700">Request care online or call to schedule a free, confidential consultation.</p></details>
            </div>
          </div>

          <div className="rounded-3xl bg-brand-primary p-10 text-white">
            <h2 className="text-3xl font-extrabold">Request care in {loc.name}</h2>
            <p className="mt-3 text-white/90">No obligation. Response within 24 hours.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/#request-care" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100">Request Care</Link>
              <Link href="/book-appointment" className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">Book Appointment</Link>
            </div>
            <p className="mt-4 text-xs text-white/80">Prefer to call? {brand.phone}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
