import Image from 'next/image'
import Link from 'next/link'
import { services } from '@/lib/services'
import { FadeIn } from '@/components/motion/FadeIn'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Home Care Services',
  description: 'Explore Sahha Home Health Care services including personal care, homemaker services, companionship, Alzheimer’s support, respite care, and more.',
}

export default function ServicesPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <FadeIn>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">Services</h1>
          <p className="mt-4 max-w-3xl text-slate-700">
            Explore our top services — compassionate, structured support designed to protect dignity and strengthen independence at home.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-7">
          {services.map((s, idx) => {
            const reversed = idx % 2 === 1
            return (
              <FadeIn key={s.slug}>
                <article
                  className={
                    'group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-2xl ' +
                    'md:grid md:grid-cols-12'
                  }
                >
                  <div className={(reversed ? 'md:order-2 ' : '') + 'relative h-64 md:col-span-5 md:h-full'}>
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(min-width: 768px) 40vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/10 to-transparent" />
                    <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold text-white ring-1 ring-white/25 backdrop-blur">
                      {s.tagline}
                    </div>
                  </div>

                  <div className={(reversed ? 'md:order-1 ' : '') + 'md:col-span-7'}>
                    <div className="flex h-full flex-col p-8">
                      <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">{s.title}</h2>
                      <p className="mt-3 text-slate-700">{s.intro}</p>

                      <div className="mt-6 grid gap-2 text-sm text-slate-700 md:grid-cols-2">
                        {s.bullets.slice(0, 4).map((b) => (
                          <div key={b} className="flex gap-2">
                            <span className="mt-0.5 h-5 w-5 flex-none rounded-full bg-brand-soft ring-1 ring-brand-primary/30" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-7 flex flex-wrap items-center gap-3">
                        <Link
                          href={`/services/${s.slug}`}
                          className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-primary/25 transition hover:bg-brand-primaryDark"
                        >
                          Read more <ArrowRight size={16} />
                        </Link>
                        <Link
                          href="/#request-care"
                          className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
                        >
                          Request Care
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </FadeIn>
            )
          })}
        </div>

        <FadeIn>
          <div className="mt-14 overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-r from-brand-primary to-brand-accent p-[1px]">
            <div className="rounded-3xl bg-slate-950 px-8 py-12 text-white md:px-12">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Not sure what you need?</h2>
                <p className="mt-3 text-white/85">
                  We’ll help you choose the right care plan in a free, confidential consultation. Tell us what’s going on — we’ll respond within 24 hours.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href="/#request-care"
                    className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100"
                  >
                    Request Care
                  </Link>
                  <Link
                    href="/book-appointment"
                    className="rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15"
                  >
                    Book Appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
