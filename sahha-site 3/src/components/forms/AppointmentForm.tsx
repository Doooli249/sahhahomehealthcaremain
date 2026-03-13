'use client'

import { useState } from 'react'

const services = [
  'Personal Care Services',
  'Homemaker Services',
  'Companionship & Safety Supervision',
  'Alzheimer’s & Dementia Care',
  'Medicaid Waiver Program Support',
  'Respite Care',
  'Hospice & Palliative Support',
  'Medication Reminders',
  'Mobility and Transfer Assistance',
  'Caregiver Education & Family Support',
]

export function AppointmentForm() {
  const [status, setStatus] = useState<'idle'|'sending'|'success'|'error'>('idle')
  const [error, setError] = useState<string>('')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setError('')
    const form = new FormData(e.currentTarget)
    const payload = {
      name: String(form.get('name')||''),
      email: String(form.get('email')||''),
      phone: String(form.get('phone')||''),
      preferredDate: String(form.get('preferredDate')||''),
      preferredTime: String(form.get('preferredTime')||''),
      serviceInterest: String(form.get('serviceInterest')||''),
      notes: String(form.get('notes')||''),
      honeypot: String(form.get('company')||''),
    }

    const res = await fetch('/api/appointments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      setError('Please check the form and try again.')
      setStatus('error')
      return
    }

    setStatus('success')
    e.currentTarget.reset()
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="md:col-span-2">
          <label className="text-sm font-semibold">Name</label>
          <input name="name" required className="mt-1 w-full rounded-xl border px-3 py-2" />
        </div>
        <div>
          <label className="text-sm font-semibold">Email</label>
          <input name="email" type="email" required className="mt-1 w-full rounded-xl border px-3 py-2" />
        </div>
        <div>
          <label className="text-sm font-semibold">Phone</label>
          <input name="phone" required className="mt-1 w-full rounded-xl border px-3 py-2" />
        </div>
        <div>
          <label className="text-sm font-semibold">Preferred date</label>
          <input name="preferredDate" type="date" required className="mt-1 w-full rounded-xl border px-3 py-2" />
        </div>
        <div>
          <label className="text-sm font-semibold">Preferred time</label>
          <input name="preferredTime" type="time" required className="mt-1 w-full rounded-xl border px-3 py-2" />
        </div>
        <div className="md:col-span-2">
          <label className="text-sm font-semibold">Service interest</label>
          <select name="serviceInterest" required className="mt-1 w-full rounded-xl border px-3 py-2">
            <option value="">Select a service...</option>
            {services.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div className="md:col-span-2">
          <label className="text-sm font-semibold">Notes (optional)</label>
          <textarea name="notes" rows={4} className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="Any details that would help us prepare..." />
        </div>
        <div className="hidden">
          <label>Company</label>
          <input name="company" tabIndex={-1} autoComplete="off" />
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={status==='sending'}
          className="rounded-full bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-primaryDark disabled:opacity-60"
        >
          {status==='sending' ? 'Sending...' : 'Request Appointment'}
        </button>
        <p className="text-sm text-slate-600">No obligation. We’ll confirm by phone or email.</p>
      </div>

      {status==='success' ? (
        <p className="mt-4 rounded-xl bg-green-50 px-4 py-3 text-sm text-green-800">
          Thanks — we received your request. We’ll reach out to confirm a time.
        </p>
      ) : null}
      {status==='error' ? (
        <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-800">{error}</p>
      ) : null}
    </form>
  )
}
