type Bucket = { count: number; resetAt: number }
const buckets = new Map<string, Bucket>()

export function rateLimit(key: string, opts: { limit: number; windowMs: number }) {
  const now = Date.now()
  const bucket = buckets.get(key)
  if (!bucket || now > bucket.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + opts.windowMs })
    return { ok: true }
  }
  if (bucket.count >= opts.limit) {
    return { ok: false, retryAfterMs: bucket.resetAt - now }
  }
  bucket.count += 1
  buckets.set(key, bucket)
  return { ok: true }
}
