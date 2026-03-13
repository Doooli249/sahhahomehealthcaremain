import Link from 'next/link'
import { notFound } from 'next/navigation'
import { brand } from '@/theme/brand'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sahhahomehealthcare.com'

const locations: Record<string, { name: string; nearby: string[] }> = {
  'home-health-care-centennial-co':       { name: 'Centennial, CO',        nearby: ['Greenwood Village', 'Englewood', 'Littleton', 'Lone Tree'] },
  'home-health-care-denver-co':           { name: 'Denver, CO',            nearby: ['Aurora', 'Lakewood', 'Englewood', 'Westminster'] },
  'home-health-care-aurora-co':           { name: 'Aurora, CO',            nearby: ['Denver', 'Centennial', 'Parker', 'Commerce City'] },
  'home-health-care-englewood-co':        { name: 'Englewood, CO',         nearby: ['Littleton', 'Centennial', 'Denver', 'Wheat Ridge'] },
  'home-health-care-littleton-co':        { name: 'Littleton, CO',         nearby: ['Centennial', 'Englewood', 'Highlands Ranch', 'Castle Rock'] },
  'home-health-care-greenwood-village-co':{ name: 'Greenwood Village, CO', nearby: ['Centennial', 'Englewood', 'Littleton', 'Lone Tree'] },
  'home-health-care-lakewood-co':         { name: 'Lakewood, CO',          nearby: ['Denver', 'Wheat Ridge', 'Arvada', 'Englewood'] },
  'home-health-care-arvada-co':           { name: 'Arvada, CO',            nearby: ['Westminster', 'Lakewood', 'Denver', 'Broomfield'] },
  'home-health-care-westminster-co':      { name: 'Westminster, CO',       nearby: ['Arvada', 'Broomfield', 'Thornton', 'Denver'] },
  'home-health-care-thornton-co':         { name: 'Thornton, CO',          nearby: ['Westminster', 'Commerce City', 'Denver', 'Broomfield'] },
  'home-health-care-broomfield-co':       { name: 'Broomfield, CO',        nearby: ['Westminster', 'Arvada', 'Thornton', 'Boulder'] },
  'home-health-care-parker-co':           { name: 'Parker, CO',            nearby: ['Aurora', 'Castle Rock', 'Highlands Ranch', 'Centennial'] },
  'home-health-care-castle-rock-co':      { name: 'Castle Rock, CO',       nearby: ['Parker', 'Littleton', 'Highlands Ranch', 'Colorado Springs'] },
  'home-health-care-highlands-ranch-co':  { name: 'Highlands Ranch, CO',   nearby: ['Littleton', 'Parker', 'Centennial', 'Castle Rock'] },
  'home-health-care-lone-tree-co':        { name: 'Lone Tree, CO',         nearby: ['Centennial', 'Greenwood Village', 'Highlands Ranch', 'Parker'] },
  'home-health-care-commerce-city-co':    { name: 'Commerce City, CO',     nearby: ['Denver', 'Thornton', 'Aurora', 'Westminster'] },
  'home-health-care-wheat-ridge-co':      { name: 'Wheat Ridge, CO',       nearby: ['Lakewood', 'Arvada', 'Denver', 'Englewood'] },
  'home-health-care-colorado-springs-co': { name: 'Colorado Springs, CO',  nearby: ['Castle Rock', 'Pueblo', 'Fountain', 'Manitou Springs'] },
  'home-health-care-fort-collins-co':     { name: 'Fort Collins, CO',      nearby: ['Loveland', 'Greeley', 'Windsor', 'Broomfield'] },
  'home-health-care-boulder-co':          { name: 'Boulder, CO',           nearby: ['Broomfield', 'Longmont', 'Lafayette', 'Denver'] },
}

export function generateStaticParams() {
  return Object.keys(locations).map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const loc = locations[params.slug]
  if (!loc) return { title: 'Area | Sahha Home Health Care' }
  return {
    title: `Home Health Care in ${loc.name} | Sahha Home Health Care`,
    description: `Compassionate, nurse-led in-home care services for families in ${loc.name}. Personal care, homemaker, dementia support, Medicaid, Medicare & private pay. Request care or schedule a free consultation.`,
    alternates: { canonical: `${siteUrl}/areas-we-serve/${params.slug}` },
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
    url: siteUrl,
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
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-1 text-sm text-slate-500">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/areas-we-serve" className="hover:underline">Areas We Serve</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-slate-800 font-medium" aria-current="page">{loc.name}</li>
          </ol>
        </nav>

        <h1 className="mt-4 text-4xl font-extrabold tracking-tight">Home Health Care in {loc.name}</h1>
        <p className="mt-4 max-w-3xl text-slate-700">
          Sahha Home Health Care provides compassionate, nurse-led in-home care for individuals and families in {loc.name}.
          We help clients live with dignity, independence, and peace of mind — with flexible scheduling,
          responsive communication, and culturally aware caregivers.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border bg-slate-50 p-6">
            <h2 className="text-xl font-bold">Services available in {loc.name}</h2>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li>✔ Personal Care Assistance (bathing, grooming, dressing)</li>
              <li>✔ Homemaker Services (meals, laundry, light housekeeping)</li>
              <li>✔ Companionship &amp; Safety Supervision</li>
              <li>✔ Alzheimer&apos;s &amp; Dementia Support</li>
              <li>✔ Respite Care for family caregivers</li>
              <li>✔ Medication Reminders</li>
              <li>✔ Mobility &amp; Transfer Assistance</li>
            </ul>
            <p className="mt-4 text-sm text-slate-600">
              See the full list on our{' '}
              <Link className="font-semibold text-brand-primary hover:underline" href="/services">Services</Link> page.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6">
            <h2 className="text-xl font-bold">Insurance &amp; payment options</h2>
            <p className="mt-3 text-slate-700">
              We accept Medicare, Medicaid (including Colorado Medicaid Waiver programs), and Private Pay.
              We&apos;ll help you understand coverage and navigate next steps — at no obligation.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link href="/insurances/medicare" className="rounded-full bg-brand-soft px-4 py-2 text-sm font-semibold text-slate-900">Medicare</Link>
              <Link href="/insurances/medicaid" className="rounded-full bg-brand-soft px-4 py-2 text-sm font-semibold text-slate-900">Medicaid</Link>
              <Link href="/insurances/private-pay" className="rounded-full bg-brand-soft px-4 py-2 text-sm font-semibold text-slate-900">Private Pay</Link>
              <Link href="/ihss" className="rounded-full bg-brand-soft px-4 py-2 text-sm font-semibold text-slate-900">IHSS Programs</Link>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold">Why families in {loc.name} choose Sahha</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border bg-white p-5 shadow-sm">
              <div className="text-2xl font-extrabold text-brand-primary">20+</div>
              <p className="mt-1 text-sm text-slate-700">Years of clinical nursing experience behind every care plan</p>
            </div>
            <div className="rounded-2xl border bg-white p-5 shadow-sm">
              <div className="text-2xl font-extrabold text-brand-primary">24–48h</div>
              <p className="mt-1 text-sm text-slate-700">Typical time from consultation to care starting in {loc.name}</p>
            </div>
            <div className="rounded-2xl border bg-white p-5 shadow-sm">
              <div className="text-2xl font-extrabold text-brand-primary">100%</div>
              <p className="mt-1 text-sm text-slate-700">Background-checked, skills-assessed caregivers matched to your family</p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">FAQ</h2>
            <div className="mt-4 space-y-3">
              <details className="rounded-2xl border p-4">
                <summary className="cursor-pointer font-semibold">How fast can care start in {loc.name}?</summary>
                <p className="mt-2 text-sm text-slate-700">In many cases, care can begin within 24–48 hours after consultation and assessment.</p>
              </details>
              <details className="rounded-2xl border p-4">
                <summary className="cursor-pointer font-semibold">Does Medicaid cover home care in {loc.name}?</summary>
                <p className="mt-2 text-sm text-slate-700">Yes — Colorado Medicaid Waiver programs may cover in-home care for eligible individuals. We can help you verify eligibility and start the process.</p>
              </details>
              <details className="rounded-2xl border p-4">
                <summary className="cursor-pointer font-semibold">Do you serve areas near {loc.name}?</summary>
                <p className="mt-2 text-sm text-slate-700">Yes — we also serve nearby communities including {loc.nearby.join(', ')}, and all of Colorado.</p>
              </details>
              <details className="rounded-2xl border p-4">
                <summary className="cursor-pointer font-semibold">What&apos;s the first step?</summary>
                <p className="mt-2 text-sm text-slate-700">Request care online or call us to schedule a free, confidential consultation with no obligation.</p>
              </details>
            </div>
          </div>

          <div className="rounded-3xl bg-brand-primary p-10 text-white">
            <h2 className="text-3xl font-extrabold">Request care in {loc.name}</h2>
            <p className="mt-3 text-white/90">No obligation. Confidential. Response within 24 hours.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/#request-care" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100">Request Care</Link>
              <Link href="/book-appointment" className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">Book Consultation</Link>
            </div>
            <p className="mt-4 text-xs text-white/80">Prefer to call? <a href={`tel:${brand.phoneE164}`} className="underline">{brand.phone}</a></p>
          </div>
        </div>
      </div>
    </section>
  )
}
