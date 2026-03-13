import Link from 'next/link'
import { notFound } from 'next/navigation'
import { posts } from '@/lib/blog'

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const p = posts.find((x) => x.slug === params.slug)
  if (!p) return { title: 'Blog' }
  return { title: p.title, description: p.excerpt }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const p = posts.find((x) => x.slug === params.slug)
  if (!p) return notFound()

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-16">
        <Link href="/blog" className="text-sm font-semibold text-brand-primary hover:underline">← Back to blog</Link>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight">{p.title}</h1>
        <p className="mt-2 text-sm text-slate-500">{new Date(p.date).toLocaleDateString()}</p>
        <article className="prose prose-slate mt-8 max-w-none">
          {p.content.split('\n').map((line, i) => (
            line.trim().length === 0 ? <div key={i} className="h-4" /> : <p key={i}>{line}</p>
          ))}
        </article>
        <div className="mt-12 rounded-2xl bg-slate-50 p-6">
          <h2 className="text-xl font-bold">Need help deciding next steps?</h2>
          <p className="mt-2 text-sm text-slate-700">Request a free consultation and we’ll guide you with clarity and compassion.</p>
          <div className="mt-4">
            <Link href="/#request-care" className="rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white hover:bg-brand-primaryDark">Request Care</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
