'use client'

import { useState } from 'react'

const subjects = [
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
]

export function RequestCareForm({ sourcePage = 'home' }: { sourcePage?: string }) {
  const [status, setStatus] = useState<'idle'|'sending'|'success'|'error'>('idle')
  const [error, setError] = useState<string>('')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setError('')
    const form = new FormData(e.currentTarget)
    const payload = {
      kind: 'request',
      firstName: String(form.get('firstName')||''),
      lastName: String(form.get('lastName')||''),
      email: String(form.get('email')||''),
      phone: String(form.get('phone')||''),
      subject: String(form.get('subject')||''),
      message: String(form.get('message')||''),
      sourcePage,
      honeypot: String(form.get('company')||''),
    }

    const res = await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      const j = await res.json().catch(() => null)
      setError(j?.error ? 'Please check the form fields and try again.' : 'Something went wrong.')
      setStatus('error')
      return
    }

    setStatus('success')
    e.currentTarget.reset()
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="rc-firstName" className="text-sm font-semibold text-slate-800">
            First name <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <input
            id="rc-firstName"
            name="firstName"
            required
            aria-required="true"
            autoComplete="given-name"
            placeholder="Jane"
            className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2.5 text-slate-900 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/30"
          />
        </div>
        <div>
          <label htmlFor="rc-lastName" className="text-sm font-semibold text-slate-800">
            Last name <span className="text-slate-400 font-normal">(optional)</span>
          </label>
          <input
            id="rc-lastName"
            name="lastName"
            autoComplete="family-name"
            placeholder="Smith"
            className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2.5 text-slate-900 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/30"
          />
        </div>
        <div>
          <label htmlFor="rc-email" className="text-sm font-semibold text-slate-800">
            Email address <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <input
            id="rc-email"
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
          <label htmlFor="rc-phone" className="text-sm font-semibold text-slate-800">
            Phone number <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <input
            id="rc-phone"
            name="phone"
            type="tel"
            required
            aria-required="true"
            autoComplete="tel"
            placeholder="(720) 555-0100"
            className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2.5 text-slate-900 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/30"
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="rc-subject" className="text-sm font-semibold text-slate-800">
            Service interest <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <select
            id="rc-subject"
            name="subject"
            required
            aria-required="true"
            className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2.5 text-slate-900 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/30"
          >
            <option value="">Select a service...</option>
            {subjects.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div className="md:col-span-2">
          <label htmlFor="rc-message" className="text-sm font-semibold text-slate-800">
            Tell us about your needs <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <textarea
            id="rc-message"
            name="message"
            required
            aria-required="true"
            rows={4}
            placeholder="E.g. My mother needs help with bathing and meals a few days a week in Centennial, CO..."
            className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2.5 text-slate-900 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/30"
          />
        </div>
        {/* Honeypot */}
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
          {status==='sending' ? 'Sending...' : 'Request Care Today'}
        </button>
        <p className="text-sm text-slate-500">No obligation. Confidential. Response within 24 hours.</p>
      </div>

      {status==='success' ? (
        <p role="status" className="mt-4 rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-800">
          ✓ Thanks — we received your request. A care coordinator will reach out shortly.
        </p>
      ) : null}
      {status==='error' ? (
        <p role="alert" className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-800">{error}</p>
      ) : null}
    </form>
  )
}
