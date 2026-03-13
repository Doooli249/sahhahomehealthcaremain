import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getServiceBySlug } from '@/lib/services'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sahhahomehealthcare.com'

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const s = getServiceBySlug(params.slug)
  if (!s) return { title: 'Home Care Service | Sahha Home Health Care', description: 'In-home care services in Denver, Aurora, and Centennial, Colorado.' }
  return {
    title: `${s.title} in Denver, Aurora & Colorado | Sahha Home Health Care`,
    description: `${s.intro} Serving Centennial, Denver, Aurora, Englewood, and the greater Colorado area. Contact Sahha Home Health Care today.`,
    alternates: { canonical: `${siteUrl}/services/${s.slug}` },
  }
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const s = getServiceBySlug(params.slug)
  if (!s) return notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: s.title,
    serviceType: s.title,
    url: `${siteUrl}/services/${s.slug}`,
    areaServed: ['Centennial, CO', 'Denver, CO', 'Aurora, CO', 'Englewood, CO', 'Greenwood Village, CO', 'Littleton, CO'],
    provider: {
      '@type': 'MedicalBusiness',
      name: 'Sahha Home Health Care',
      telephone: '(720) 404-0335',
      url: siteUrl,
    },
    description: s.intro,
  }

  return (
    <section className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-6xl px-4 py-16">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
          <Link href="/services" className="font-semibold text-brand-primary hover:underline">Services</Link>
          <span className="mx-1">›</span>
          <span>{s.title}</span>
        </nav>

        <h1 className="mt-4 text-4xl font-extrabold tracking-tight">{s.title} in Denver, Aurora & Colorado</h1>
        <p className="mt-4 max-w-3xl text-slate-700">{s.intro}</p>
        <p className="mt-2 max-w-3xl text-sm text-slate-500">
          Serving Centennial, Denver, Aurora, Englewood, Greenwood Village, and Littleton, Colorado.
        </p>

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">What's Included</h2>
            <ul className="mt-4 space-y-2 text-slate-700">
              {s.bullets.map((b) => (
                <li key={b}>✔ {b}</li>
              ))}
            </ul>

            <div className="mt-10 rounded-2xl bg-slate-50 p-6">
              <h3 className="text-lg font-bold">Ready to Start?</h3>
              <p className="mt-2 text-sm text-slate-700">Request care in minutes. No obligation. Response within 24 hours.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link href="/#request-care" className="rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white hover:bg-brand-primaryDark">
                  Request Care
                </Link>
                <Link href="/book-appointment" className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50">
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
            <div className="mt-4 space-y-3">
              {s.faq.map((f) => (
                <details key={f.q} className="rounded-2xl border p-4">
                  <summary className="cursor-pointer font-semibold">{f.q}</summary>
                  <p className="mt-2 text-sm text-slate-700">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
