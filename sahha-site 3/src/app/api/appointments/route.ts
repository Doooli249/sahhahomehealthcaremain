import { NextResponse } from 'next/server'
import { airtableCreateRecord, getAirtableEnv } from '@/lib/airtable/client'
import { sendOwnerAlert } from '@/lib/resend/email'
import { appointmentSchema } from '@/lib/forms'
import { rateLimit } from '@/lib/rateLimit'

export async function POST(req: Request) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')?.[0]?.trim() || 'unknown'
  const rl = rateLimit(`appointments:${ip}`, { limit: 6, windowMs: 1000 * 60 * 10 })
  if (!rl.ok) {
    return NextResponse.json({ ok: false, error: 'Too many requests. Please try again shortly.' }, { status: 429 })
  }

  const body = await req.json().catch(() => null)
  if (!body) return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 })

  const parsed = appointmentSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: parsed.error.flatten() }, { status: 400 })
  }
  if (parsed.data.honeypot && parsed.data.honeypot.length > 0) {
    return NextResponse.json({ ok: true })
  }

  const env = getAirtableEnv()

  const fields: Record<string, unknown> = {
    'Created At': new Date().toISOString(),
    Name: parsed.data.name,
    Email: parsed.data.email,
    Phone: parsed.data.phone,
    'Preferred Date': parsed.data.preferredDate,
    'Preferred Time': parsed.data.preferredTime,
    'Service Interest': parsed.data.serviceInterest,
    Notes: parsed.data.notes ?? '',
    Status: 'New',
  }

  const { id } = await airtableCreateRecord({
    tableIdOrName: env.AIRTABLE_TABLE_APPOINTMENTS,
    fields,
  })

  const recordUrl = `https://airtable.com/${env.AIRTABLE_BASE_ID}`

  await sendOwnerAlert({
    subject: `[Sahha] New Appointment request`,
    html: `
      <div style="font-family:Arial,sans-serif;line-height:1.5">
        <h2 style="margin:0 0 12px 0">New Appointment request</h2>
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
