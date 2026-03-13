import Link from 'next/link'
import { getReviews } from '@/lib/google/places'

export async function ReviewsSummary() {
  const r = await getReviews()
  const rating = r.rating ?? 0
  const total = r.total ?? 0
  return (
    <div className="flex flex-wrap items-center gap-3 rounded-2xl border bg-white/70 px-4 py-3 text-sm">
      <div className="font-semibold">⭐ {rating.toFixed(1)}/5</div>
      <div className="text-slate-600">{total} Google reviews</div>
      <div className="text-slate-400">•</div>
      <Link href="/#request-care" className="font-semibold text-brand-primary hover:underline">Request Care</Link>
    </div>
  )
}
