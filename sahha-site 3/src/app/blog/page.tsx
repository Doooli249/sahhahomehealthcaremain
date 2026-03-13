import Link from 'next/link'
import { posts } from '@/lib/blog'

export const metadata = {
  title: 'Home Health Care Blog & Resources | Sahha Home Health Care',
  description: 'Helpful guides and resources for Colorado families navigating in-home care, skilled nursing, Medicaid, Medicare, and caregiver support in Denver and Aurora, CO.',
}

export default function BlogIndexPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-4xl font-extrabold tracking-tight">Home Health Care Resources &amp; Blog</h1>
        <p className="mt-4 max-w-3xl text-slate-700">Simple, loving resources to help families make confident care decisions.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {posts.map((p) => (
            <article key={p.slug} className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="text-xs text-slate-500">{p.date}</div>
              <h2 className="mt-2 text-xl font-bold">{p.title}</h2>
              <p className="mt-2 text-sm text-slate-700">{p.excerpt}</p>
              <Link className="mt-4 inline-block text-sm font-semibold text-brand-primary hover:underline" href={`/blog/${p.slug}`}>Continue reading</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
