import { NextResponse } from 'next/server'
import { airtableCreateRecord, getAirtableEnv } from '@/lib/airtable/client'
import { sendOwnerAlert } from '@/lib/resend/email'
import { requestCareSchema, contactSchema } from '@/lib/forms'
import { rateLimit } from '@/lib/rateLimit'

export async function POST(req: Request) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')?.[0]?.trim() || 'unknown'
  const rl = rateLimit(`leads:${ip}`, { limit: 8, windowMs: 1000 * 60 * 10 })
  if (!rl.ok) {
    return NextResponse.json({ ok: false, error: 'Too many requests. Please try again shortly.' }, { status: 429 })
  }

  const body = await req.json().catch(() => null)
  if (!body) return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 })

  const kind = body.kind === 'contact' ? 'contact' : 'request'
  const parsed = kind === 'contact' ? contactSchema.safeParse(body) : requestCareSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: parsed.error.flatten() }, { status: 400 })
  }
  if (parsed.data.honeypot && parsed.data.honeypot.length > 0) {
    // bot
    return NextResponse.json({ ok: true })
  }

  const env = getAirtableEnv()

  const fields: Record<string, unknown> =
    kind === 'contact'
      ? {
          'Created At': new Date().toISOString(),
          'First Name': String(parsed.data.name).split(' ')[0],
          'Last Name': String(parsed.data.name).split(' ').slice(1).join(' '),
          Email: parsed.data.email,
          Phone: parsed.data.phone ?? '',
          'Form Type': 'Contact',
          Subject: parsed.data.subject,
          Message: parsed.data.message,
          'Source Page': parsed.data.sourcePage ?? 'contact',
          Status: 'New',
        }
      : {
          'Created At': new Date().toISOString(),
          'First Name': parsed.data.firstName,
          'Last Name': parsed.data.lastName ?? '',
          Email: parsed.data.email,
          Phone: parsed.data.phone,
          'Form Type': 'Request Care',
          Subject: parsed.data.subject,
          Message: parsed.data.message,
          'Source Page': parsed.data.sourcePage ?? 'home',
          Status: 'New',
        }

  const { id } = await airtableCreateRecord({
    tableIdOrName: env.AIRTABLE_TABLE_LEADS,
    fields,
  })

  const recordUrl = `https://airtable.com/${env.AIRTABLE_BASE_ID}`

  await sendOwnerAlert({
    subject: `[Sahha] New ${kind === 'contact' ? 'Contact' : 'Request Care'} submission`,
    html: `
      <div style="font-family:Arial,sans-serif;line-height:1.5">
        <h2 style="margin:0 0 12px 0">New ${kind === 'contact' ? 'Contact' : 'Request Care'} submission</h2>
        <p style="margin:0 0 12px 0"><b>Record ID:</b> ${id}</p>
        <table cellpadding="6" cellspacing="0" border="0" style="border-collapse:collapse">
          ${Object.entries(fields)
            .map(([k, v]) => `<tr><td style="border:1px solid #eee"><b>${k}</b></td><td style="border:1px solid #eee">${String(v ?? '')}</td></tr>`)
            .join('')}
        </table>
        <p style="margin:12px 0 0 0">Open Airtable: <a href="${recordUrl}">${recordUrl}</a></p>
      </div>
    `,
  })

  return NextResponse.json({ ok: true })
}
