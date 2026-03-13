import { z } from 'zod'

const envSchema = z.object({
  AIRTABLE_TOKEN: z.string().min(1),
  AIRTABLE_BASE_ID: z.string().min(1),
  AIRTABLE_TABLE_LEADS: z.string().min(1),
  AIRTABLE_TABLE_APPOINTMENTS: z.string().min(1),
})

export function getAirtableEnv() {
  const parsed = envSchema.safeParse({
    AIRTABLE_TOKEN: process.env.AIRTABLE_TOKEN,
    AIRTABLE_BASE_ID: process.env.AIRTABLE_BASE_ID,
    AIRTABLE_TABLE_LEADS: process.env.AIRTABLE_TABLE_LEADS,
    AIRTABLE_TABLE_APPOINTMENTS: process.env.AIRTABLE_TABLE_APPOINTMENTS,
  })
  if (!parsed.success) {
    throw new Error('Missing Airtable env vars. See .env.example')
  }
  return parsed.data
}

export async function airtableCreateRecord(opts: {
  tableIdOrName: string
  fields: Record<string, unknown>
}): Promise<{ id: string }>
{
  const { AIRTABLE_TOKEN, AIRTABLE_BASE_ID } = getAirtableEnv()
  const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(opts.tableIdOrName)}`

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${AIRTABLE_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      records: [{ fields: opts.fields }],
    }),
    // Airtable is external
    cache: 'no-store',
  })

  if (!res.ok) {
    const text = await res.text().catch(() => '')
    throw new Error(`Airtable create failed (${res.status}): ${text}`)
  }

  const data = await res.json()
  const id = data?.records?.[0]?.id
  if (!id) throw new Error('Airtable response missing record id')
  return { id }
}
