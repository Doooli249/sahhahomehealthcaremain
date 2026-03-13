import { NextResponse } from 'next/server'
import { getReviews } from '@/lib/google/places'

export async function GET() {
  try {
    const payload = await getReviews()
    return NextResponse.json({ ok: true, ...payload }, { status: 200 })
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message ?? 'Failed' }, { status: 500 })
  }
}
