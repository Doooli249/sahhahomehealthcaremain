import { z } from 'zod'

const envSchema = z.object({
  RESEND_API_KEY: z.string().min(1),
  OWNER_EMAIL: z.string().email(),
  FROM_EMAIL: z.string().email().optional(),
})

function getEmailEnv() {
  const parsed = envSchema.safeParse({
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    OWNER_EMAIL: process.env.OWNER_EMAIL,
    FROM_EMAIL: process.env.FROM_EMAIL,
  })
  if (!parsed.success) {
    throw new Error('Missing email env vars. See .env.example')
  }
  return parsed.data
}

export async function sendOwnerEmail(opts: {
  subject: string
  html: string
}): Promise<void> {
  const { RESEND_API_KEY, OWNER_EMAIL, FROM_EMAIL } = getEmailEnv()
  const from = FROM_EMAIL ?? 'Sahha Home Health Care <onboarding@resend.dev>'

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [OWNER_EMAIL],
      subject: opts.subject,
      html: opts.html,
    }),
  })

  if (!res.ok) {
    const text = await res.text().catch(() => '')
    throw new Error(`Resend failed (${res.status}): ${text}`)
  }
}
