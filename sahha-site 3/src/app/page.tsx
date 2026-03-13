import Image from 'next/image'
import Link from 'next/link'
import { Hero } from '@/components/Hero'
import { ReviewsSummary } from '@/components/ReviewsSummary'
import { ReviewsCarousel } from '@/components/ReviewsCarousel'
import { RequestCareForm } from '@/components/forms/RequestCareForm'
import { FadeIn } from '@/components/motion/FadeIn'
import { Stagger } from '@/components/motion/Stagger'
import { brand } from '@/theme/brand'
import { services } from '@/lib/services'
import { HeartHandshake, ShieldCheck, Users, Sparkles, ArrowRight, MapPin } from 'lucide-react'

export const dynamic = 'force-static'
export const revalidate = 3600

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sahhahomehealthcare.com'

export default function HomePage() {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: brand.name,
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: brand.phone,
      areaServed: 'US',
      availableLanguage: 'English',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Centennial',
      addressRegion: 'CO',
      addressCountry: 'US',
    },
  }

  const medicalBusiness = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: brand.name,
    url: siteUrl,
    telephone: brand.phone,
    image: `${siteUrl}/og-image.jpg`,
    areaServed: brand.serviceArea,
    medicalSpecialty: 'HomeHealth',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Centennial',
      addressRegion: 'CO',
      addressCountry: 'US',
    },
  }

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do you accept Medicaid or Medicare?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We accept Medicare, Medicaid, and private pay options. Contact us to confirm your specific coverage.',
        },
      },
      {
        '@type': 'Question',
        name: 'How quickly can care begin?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'In many cases, care can begin within 24–48 hours after your consultation and assessment.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are caregivers background-checked?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Caregivers are screened and evaluated before joining our team.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you provide Alzheimer’s and dementia support?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We provide structured, compassionate Alzheimer’s and dementia care tailored to each client.',
        },
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />

      <Hero />

      {/* Reviews + Trust Row */}
      <section className="relative bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
              <h2 className="text-xl font-extrabold tracking-tight text-slate-900 md:text-2xl">
                Trusted care — designed for families, loved by case managers.
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Clear communication, reliable scheduling, and dignity-first care in Centennial and across the Denver metro.
              </p>
            </div>
            <div className="md:justify-self-end">
              {/* @ts-expect-error Server Component */}
              <ReviewsSummary />
            </div>
          </div>
        </div>
      </section>

      {/* Story / Mission with image mosaic */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-brand-soft">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center">
          <FadeIn>
            <p className="text-sm font-semibold text-brand-primary">Care That Comes From the Heart</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl">Hospital-grade attentiveness — at home.</h2>
            <p className="mt-5 text-slate-700">
              At Sahha Home Health Care, providing care is a calling — not merely a service. With more than 18 years of nursing experience
              guiding every plan, we bring calm, competence, and cultural respect into the place that matters most: home.
            </p>
            <p className="mt-4 text-slate-700">
              We don’t do cookie-cutter care. We listen. We tailor. We communicate clearly. And we support families through every step —
              from consultation to caregiver matching to ongoing quality check-ins.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/book-appointment"
                className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-primary/25 transition hover:bg-brand-primaryDark"
              >
                Schedule a Free Consultation <ArrowRight size={16} />
              </Link>
              <Link
                href="/about-us"
                className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
              >
                Read our story
              </Link>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="relative">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-7 overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-slate-200">
                  <Image src="/images/story.jpg" alt="Home health care nurse speaking with an elderly client in Centennial, Colorado" width={900} height={900} className="h-full w-full object-cover" />
                </div>
                <div className="col-span-5 grid gap-4">
                  <div className="overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-slate-200">
                    <Image src="/images/medication.jpg" alt="Medication support and reminders" width={700} height={700} className="h-full w-full object-cover" />
                  </div>
                  <div className="overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-slate-200">
                    <Image src="/images/caregiver-walk.jpg" alt="In-home caregiver walking with an older adult in Denver, Colorado" width={700} height={700} className="h-full w-full object-cover" />
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-brand-primary/15 blur-2xl" />
              <div className="pointer-events-none absolute -top-10 right-0 h-56 w-56 rounded-full bg-sky-400/15 blur-2xl" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Insurance strip - elevated */}
      <section className="bg-brand-soft">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <Stagger className="grid gap-4 md:grid-cols-3">
            {[
              { title: 'Medicare', desc: 'Guidance and support to help you navigate coverage confidently.' },
              { title: 'Medicaid', desc: 'Support for eligible families and Colorado waiver programs.' },
              { title: 'Private Pay', desc: 'Flexible options tailored to your schedule and goals.' },
            ].map((x) => (
              <FadeIn key={x.title} className="rounded-3xl border border-white/40 bg-white/70 p-8 shadow-sm backdrop-blur">
                <div className="text-lg font-extrabold">{x.title}</div>
                <p className="mt-2 text-sm text-slate-600">{x.desc}</p>
              </FadeIn>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Services - richer cards */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <FadeIn>
            <div className="max-w-3xl">
              <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Our Home Care Services</h2>
              <p className="mt-4 text-slate-700">
                Care with heart, skill, and soul — because home is where healing happens. From personal care to companionship to memory
                support, we tailor every plan to fit your needs.
              </p>
            </div>
          </FadeIn>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.slice(0, 6).map((s, i) => (
              <FadeIn key={s.slug} delay={i * 0.04} className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-2xl">
                <div className="relative h-60">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />
                  <div className="absolute left-5 top-5 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold text-white ring-1 ring-white/25 backdrop-blur">
                    {s.tagline}
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="text-lg font-extrabold tracking-tight md:text-xl">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-700">{s.intro}</p>
                  <Link className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-primary hover:underline" href={`/services/${s.slug}`}>
                    Read more <ArrowRight size={16} />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-8">
            <Link href="/services" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50">
              View all services <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Why choose */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <FadeIn>
              <p className="text-sm font-semibold text-brand-accent">Why families choose Sahha</p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white md:text-4xl">Compassion you can trust. Care you can feel.</h2>
              <p className="mt-4 text-white/80">
                We bring years of practical medical experience and a profound understanding of what families really need while caring for a
                loved one.
              </p>

              <div className="mt-7 grid gap-4">
                {[{ icon: HeartHandshake, title: 'Personalized, heartfelt care', text: 'We listen deeply and tailor care to lifestyle, culture, and needs.' },
                  { icon: ShieldCheck, title: 'Trustworthy & vetted professionals', text: 'Safety-first screening and standards we’d want for our own family.' },
                  { icon: Users, title: 'Support for family caregivers', text: 'Guidance through programs like IHSS, plus education and reassurance.' },
                  { icon: Sparkles, title: 'Nurse-led expertise', text: 'Care plans supported by clinical insight and compassionate leadership.' },
                ].map((f) => (
                  <div key={f.title} className="flex gap-4 rounded-3xl bg-white/5 p-5 ring-1 ring-white/10">
                    <div className="mt-1 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
                      <f.icon className="text-brand-primary" size={20} />
                    </div>
                    <div>
                      <div className="font-semibold text-white">{f.title}</div>
                      <div className="mt-1 text-sm text-white/75">{f.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn>
              <div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10">
                <Image src="/images/team.jpg" alt="Sahha Home Health Care team — skilled in-home caregivers serving Denver, Aurora, and Centennial, Colorado" width={1200} height={900} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 rounded-3xl bg-white/10 p-5 text-white ring-1 ring-white/15 backdrop-blur">
                  <div className="flex items-center gap-2 text-sm font-semibold text-white/90">
                    <MapPin size={16} /> Serving Centennial & the greater Denver metro
                  </div>
                  <p className="mt-2 text-sm text-white/75">
                    Fast response times, clear documentation, and reliable coordination for families and case managers.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Appointment + Form */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <FadeIn>
              <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Request care in minutes.</h2>
              <p className="mt-4 text-slate-700">
                Tell us what you need and we’ll follow up quickly. Prefer scheduling? Book an appointment and we’ll walk you through next
                steps.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/book-appointment" className="rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-primary/25 transition hover:bg-brand-primaryDark">
                  Book Appointment
                </Link>
                <Link href="#request-care" className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50">
                  Request Care
                </Link>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[{ title: 'Free consultation', text: 'No obligation. Confidential and supportive.' }, { title: 'Fast start', text: 'Many families begin care within 24–48 hours.' }].map((x) => (
                  <div key={x.title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="font-semibold">{x.title}</div>
                    <div className="mt-1 text-sm text-slate-600">{x.text}</div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn>
              <div id="request-care" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
                <RequestCareForm />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-brand-primary">Easy Steps to In-Home Support</p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl">Getting quality care at home is simpler than you think.</h2>
              <p className="mt-4 text-slate-700">
                We guide you with kindness and clarity — whether you’re applying for IHSS or choosing private pay.
              </p>
            </div>
          </FadeIn>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              { n: '01', t: 'Get in Touch', d: 'Use our form or call to share your needs.' },
              { n: '02', t: 'Free Consultation', d: 'We discuss routines, preferences, and care goals.' },
              { n: '03', t: 'Personalized Plan', d: 'A plan based on comfort, lifestyle, and health.' },
              { n: '04', t: 'Care Begins', d: 'We match you with a kind caregiver and start on your schedule.' },
            ].map((s, idx) => (
              <FadeIn key={s.n} delay={idx * 0.06} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-xs font-bold text-brand-primary">STEP {s.n}</div>
                <div className="mt-2 text-lg font-extrabold">{s.t}</div>
                <p className="mt-2 text-sm text-slate-600">{s.d}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <FadeIn>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold text-brand-primary">What families are saying</p>
                <h2 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl">Real stories. Real relief. Real care.</h2>
              </div>
              <Link href="#request-care" className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-primary/25 transition hover:bg-brand-primaryDark">
                Request Care <ArrowRight size={16} />
              </Link>
            </div>
          </FadeIn>

          <div className="mt-8">
            {/* @ts-expect-error Server Component */}
            <ReviewsCarousel />
          </div>
        </div>
      </section>

      {/* FAQ + Final CTA */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <FadeIn>
              <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">Frequently asked questions</h2>
              <div className="mt-6 space-y-4">
                {[
                  { q: 'Do you accept Medicaid or Medicare?', a: 'Yes. We accept Medicare, Medicaid, and private pay options. Contact us to confirm your specific coverage.' },
                  { q: 'How quickly can care begin?', a: 'In many cases, care can begin within 24–48 hours after your consultation and assessment.' },
                  { q: 'Are caregivers background-checked?', a: 'Yes. Caregivers are screened and evaluated before joining our team.' },
                  { q: 'Do you provide Alzheimer’s and dementia support?', a: 'Yes. We provide structured, compassionate memory care tailored to each client.' },
                ].map((x) => (
                  <div key={x.q} className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
                    <div className="font-semibold text-white">{x.q}</div>
                    <div className="mt-2 text-sm text-white/75">{x.a}</div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn>
              <div className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10">
                <p className="text-sm font-semibold text-brand-accent">Ready to get started?</p>
                <h3 className="mt-2 text-3xl font-extrabold tracking-tight text-white">Speak with a care coordinator today.</h3>
                <p className="mt-4 text-white/80">
                  Receive a personalized care plan designed around your family’s needs — with clear next steps and fast follow-up.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link href="#request-care" className="rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-primary/25 transition hover:bg-brand-primaryDark">
                    Request Care
                  </Link>
                  <a href={`tel:${brand.phoneE164}`} className="rounded-full bg-white/15 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/20">
                    Call {brand.phone}
                  </a>
                </div>
                <p className="mt-4 text-xs text-white/70">No obligation. Confidential consultation.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
