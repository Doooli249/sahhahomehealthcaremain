'use client'

import { useState } from 'react'

const services = [
  'Personal Care Services',
  'Homemaker Services',
  'Companionship & Safety Supervision',
  'Alzheimer\u2019s & Dementia Care',
  'Medicaid Waiver Program Support',
  'Respite Care',
  'Hospice & Palliative Support',
  'Medication Reminders',
  'Mobility and Transfer Assistance',
  'Caregiver Education & Family Support',
  'Not sure — need guidance',
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
    <form onSubmit={onSubmit} noValidate>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="md:col-span-2">
          <label htmlFor="af-name" className="text-sm font-semibold text-slate-800">
            Your name <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <input
            id="af-name"
            name="name"
            required
            aria-required="true"
            autoComplete="name"
            placeholder="Jane Smith"
            className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2.5 text-slate-900 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/30"
          />
        </div>
        <div>
          <label htmlFor="af-email" className="text-sm font-semibold text-slate-800">
            Email address <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <input
            id="af-email"
            name="email"
            type="email"
            required
            aria-required="true"
            autoComplete="email"
            placeholder="jane@example.com"
            className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2.5 text-slate-900 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/30"
          />
        </div>
        <div>
          <label htmlFor="af-phone" className="text-sm font-semibold text-slate-800">
            Phone number <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <input
            id="af-phone"
            name="phone"
            type="tel"
            required
            aria-required="true"
            autoComplete="tel"
            placeholder="(720) 555-0100"
            className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2.5 text-slate-900 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/30"
          />
        </div>
        <div>
          <label htmlFor="af-date" className="text-sm font-semibold text-slate-800">
            Preferred date <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <input
            id="af-date"
            name="preferredDate"
            type="date"
            required
            aria-required="true"
            className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2.5 text-slate-900 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/30"
          />
        </div>
        <div>
          <label htmlFor="af-time" className="text-sm font-semibold text-slate-800">
            Preferred time <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <input
            id="af-time"
            name="preferredTime"
            type="time"
            required
            aria-required="true"
            className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2.5 text-slate-900 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/30"
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="af-service" className="text-sm font-semibold text-slate-800">
            Service interest <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <select
            id="af-service"
            name="serviceInterest"
            required
            aria-required="true"
            className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2.5 text-slate-900 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/30"
          >
            <option value="">Select a service...</option>
            {services.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div className="md:col-span-2">
          <label htmlFor="af-notes" className="text-sm font-semibold text-slate-800">
            Notes <span className="text-slate-400 font-normal">(optional)</span>
          </label>
          <textarea
            id="af-notes"
            name="notes"
            rows={4}
            placeholder="Any details that would help us prepare — location, specific needs, questions..."
            className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2.5 text-slate-900 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/30"
          />
        </div>
        <div className="hidden" aria-hidden="true">
          <label>Company</label>
          <input name="company" tabIndex={-1} autoComplete="off" />
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={status==='sending'}
          className="rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-primary/25 hover:bg-brand-primaryDark focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 disabled:opacity-60"
        >
          {status==='sending' ? 'Sending...' : 'Request Appointment'}
        </button>
        <p className="text-sm text-slate-500">No obligation. We&apos;ll confirm by phone or email.</p>
      </div>

      {status==='success' ? (
        <p role="status" className="mt-4 rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-800">
          ✓ Thanks — we received your request. We&apos;ll reach out to confirm a time.
        </p>
      ) : null}
      {status==='error' ? (
        <p role="alert" className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-800">{error}</p>
      ) : null}
    </form>
  )
}
