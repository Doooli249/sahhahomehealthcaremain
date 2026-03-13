import { z } from 'zod'

const envSchema = z.object({
  GOOGLE_PLACES_API_KEY: z.string().min(1).optional(),
  GOOGLE_PLACE_ID: z.string().min(1).optional(),
})

type GoogleReview = {
  author_name?: string
  rating?: number
  relative_time_description?: string
  text?: string
}

export type ReviewsPayload = {
  rating: number | null
  total: number | null
  reviews: GoogleReview[]
  source: 'google' | 'placeholder'
}

let cache: { payload: ReviewsPayload; fetchedAt: number } | null = null
const TTL_MS = 1000 * 60 * 60 // 1 hour

export async function getReviews(): Promise<ReviewsPayload> {
  if (cache && Date.now() - cache.fetchedAt < TTL_MS) return cache.payload

  const { GOOGLE_PLACES_API_KEY, GOOGLE_PLACE_ID } = envSchema.parse({
    GOOGLE_PLACES_API_KEY: process.env.GOOGLE_PLACES_API_KEY,
    GOOGLE_PLACE_ID: process.env.GOOGLE_PLACE_ID,
  })

  if (!GOOGLE_PLACES_API_KEY || !GOOGLE_PLACE_ID) {
    const placeholder: ReviewsPayload = {
      rating: 4.9,
      total: 20,
      reviews: [
        { author_name: 'Linda M.', rating: 5, relative_time_description: 'Recently', text: 'Sahha gave us peace of mind. Professional, gentle, and truly caring.' },
        { author_name: 'Maya R.', rating: 5, relative_time_description: 'Recently', text: 'They treat my son like their own. Kind, informed, and reliable.' },
        { author_name: 'Derrick T.', rating: 5, relative_time_description: 'Recently', text: 'Support when we needed it most. Respectful and dependable.' },
      ],
      source: 'placeholder',
    }
    cache = { payload: placeholder, fetchedAt: Date.now() }
    return placeholder
  }

  // Places API (Place Details) – reviews returned are limited in count.
  const url = new URL('https://maps.googleapis.com/maps/api/place/details/json')
  url.searchParams.set('place_id', GOOGLE_PLACE_ID)
  url.searchParams.set('fields', 'rating,user_ratings_total,reviews')
  url.searchParams.set('key', GOOGLE_PLACES_API_KEY)

  const res = await fetch(url.toString(), { cache: 'no-store' })
  if (!res.ok) {
    throw new Error(`Google Places fetch failed: ${res.status}`)
  }
  const data = await res.json()
  const result = data?.result

  const payload: ReviewsPayload = {
    rating: typeof result?.rating === 'number' ? result.rating : null,
    total: typeof result?.user_ratings_total === 'number' ? result.user_ratings_total : null,
    reviews: Array.isArray(result?.reviews) ? result.reviews : [],
    source: 'google',
  }

  cache = { payload, fetchedAt: Date.now() }
  return payload
}
