import Link from 'next/link'
import { brand } from '@/theme/brand'

export const metadata = {
  title: 'Areas We Serve in Colorado | Sahha Home Health Care',
  description: 'Sahha Home Health Care provides compassionate in-home care across Colorado — Denver, Aurora, Colorado Springs, Fort Collins, Boulder, and beyond. Find your city.',
}

const locations = [
  // Denver Metro – core
  { name: 'Centennial, CO',       slug: 'home-health-care-centennial-co' },
  { name: 'Denver, CO',           slug: 'home-health-care-denver-co' },
  { name: 'Aurora, CO',           slug: 'home-health-care-aurora-co' },
  { name: 'Englewood, CO',        slug: 'home-health-care-englewood-co' },
  { name: 'Littleton, CO',        slug: 'home-health-care-littleton-co' },
  { name: 'Greenwood Village, CO',slug: 'home-health-care-greenwood-village-co' },
  { name: 'Lakewood, CO',         slug: 'home-health-care-lakewood-co' },
  { name: 'Arvada, CO',           slug: 'home-health-care-arvada-co' },
  { name: 'Westminster, CO',      slug: 'home-health-care-westminster-co' },
  { name: 'Thornton, CO',         slug: 'home-health-care-thornton-co' },
  { name: 'Broomfield, CO',       slug: 'home-health-care-broomfield-co' },
  { name: 'Parker, CO',           slug: 'home-health-care-parker-co' },
  { name: 'Castle Rock, CO',      slug: 'home-health-care-castle-rock-co' },
  { name: 'Highlands Ranch, CO',  slug: 'home-health-care-highlands-ranch-co' },
  { name: 'Lone Tree, CO',        slug: 'home-health-care-lone-tree-co' },
  { name: 'Commerce City, CO',    slug: 'home-health-care-commerce-city-co' },
  { name: 'Wheat Ridge, CO',      slug: 'home-health-care-wheat-ridge-co' },
  // Front Range – major cities
  { name: 'Colorado Springs, CO', slug: 'home-health-care-colorado-springs-co' },
  { name: 'Fort Collins, CO',     slug: 'home-health-care-fort-collins-co' },
  { name: 'Boulder, CO',          slug: 'home-health-care-boulder-co' },
]

export default function AreasWeServePage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-4xl font-extrabold tracking-tight">In-Home Care Areas We Serve in Colorado</h1>
        <p className="mt-4 max-w-3xl text-slate-700">
          Sahha Home Health Care provides compassionate, nurse-led in-home care throughout Colorado —
          from the Denver metro to Colorado Springs, Fort Collins, Boulder, and beyond.
          Don&apos;t see your city? Contact us — we serve all of Colorado.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {locations.map((l) => (
            <Link
              key={l.slug}
              href={`/areas-we-serve/${l.slug}`}
              className="rounded-2xl border bg-slate-50 p-5 hover:bg-slate-100 transition-colors"
            >
              <div className="text-base font-bold text-slate-900">Home Health Care in {l.name}</div>
              <p className="mt-1 text-sm text-slate-600">Services, coverage &amp; next steps</p>
            </Link>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-brand-primary p-10 text-white">
          <h2 className="text-3xl font-extrabold">Don&apos;t see your city?</h2>
          <p className="mt-3 text-white/90">We serve all of Colorado. Call us and we&apos;ll confirm availability and walk you through next steps.</p>
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
