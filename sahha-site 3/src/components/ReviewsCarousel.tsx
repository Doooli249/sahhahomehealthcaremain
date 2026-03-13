import { getReviews } from '@/lib/google/places'

function Stars({ n }: { n: number }) {
  const full = Math.max(0, Math.min(5, Math.round(n)))
  return (
    <span aria-label={`${full} stars`}>
      {'★'.repeat(full)}{'☆'.repeat(5 - full)}
    </span>
  )
}

export async function ReviewsCarousel() {
  const r = await getReviews()
  const items = (r.reviews ?? []).slice(0, 5)
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {items.map((rv, i) => (
        <article key={i} className="rounded-2xl border bg-white p-6 shadow-sm">
          <div className="text-sm text-amber-600"><Stars n={rv.rating ?? 5} /></div>
          <p className="mt-3 text-sm text-slate-700">“{rv.text ?? ''}”</p>
          <div className="mt-4 text-xs font-semibold text-slate-900">
            {rv.author_name ?? 'Client'}
            {rv.relative_time_description ? <span className="ml-2 font-normal text-slate-500">• {rv.relative_time_description}</span> : null}
          </div>
        </article>
      ))}
    </div>
  )
}
