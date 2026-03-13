import { z } from 'zod'

const envSchema = z.object({
  RESEND_API_KEY: z.string().min(1),
  OWNER_EMAIL: z.string().email(),
  FROM_EMAIL: z.string().email().optional(),
})

function getEnv() {
  const parsed = envSchema.safeParse({
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    OWNER_EMAIL: process.env.OWNER_EMAIL,
    FROM_EMAIL: process.env.FROM_EMAIL,
  })
  if (!parsed.success) {
    throw new Error('Missing Resend env vars. See .env.example')
  }
  return parsed.data
}

export async function sendOwnerAlert(opts: {
  subject: string
  html: string
}): Promise<void> {
  const { RESEND_API_KEY, OWNER_EMAIL, FROM_EMAIL } = getEnv()
  const from = FROM_EMAIL ?? 'Sahha Website <onboarding@resend.dev>'

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [OWNER_EMAIL],
      subject: opts.subject,
      html: opts.html,
    }),
    cache: 'no-store',
  })

  if (!res.ok) {
    const text = await res.text().catch(() => '')
    throw new Error(`Resend send failed (${res.status}): ${text}`)
  }
}
