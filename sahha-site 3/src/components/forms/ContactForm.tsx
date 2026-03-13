'use client'

import { useState } from 'react'

const subjects = [
  'Request information about services',
  'Medicaid / Medicare coverage questions',
  'Private pay care inquiry',
  'IHSS / in-home support programs',
  'Schedule a consultation',
  'Other question',
]

export function ContactForm({ sourcePage = 'contact' }: { sourcePage?: string }) {
  const [status, setStatus] = useState<'idle'|'sending'|'success'|'error'>('idle')
  const [error, setError] = useState<string>('')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setError('')
    const form = new FormData(e.currentTarget)
    const payload = {
      kind: 'contact',
      name: String(form.get('name')||''),
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
          <label htmlFor="cf-name" className="text-sm font-semibold text-slate-800">
            Your name <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <input
            id="cf-name"
            name="name"
            required
            aria-required="true"
            autoComplete="name"
            placeholder="Jane Smith"
            className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2.5 text-slate-900 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/30"
          />
        </div>
        <div>
          <label htmlFor="cf-email" className="text-sm font-semibold text-slate-800">
            Email address <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <input
            id="cf-email"
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
          <label htmlFor="cf-phone" className="text-sm font-semibold text-slate-800">
            Phone <span className="text-slate-400 font-normal">(optional)</span>
          </label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(720) 555-0100"
            className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2.5 text-slate-900 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/30"
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="cf-subject" className="text-sm font-semibold text-slate-800">
            What can we help with? <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <select
            id="cf-subject"
            name="subject"
            required
            aria-required="true"
            className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2.5 text-slate-900 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/30"
          >
            <option value="">Select a topic...</option>
            {subjects.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div className="md:col-span-2">
          <label htmlFor="cf-message" className="text-sm font-semibold text-slate-800">
            Message <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <textarea
            id="cf-message"
            name="message"
            required
            aria-required="true"
            rows={5}
            placeholder="Tell us a bit about your situation or what you'd like to know..."
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
          {status==='sending' ? 'Sending...' : 'Send Message'}
        </button>
        <p className="text-sm text-slate-500">We typically respond within 24 hours.</p>
      </div>

      {status==='success' ? (
        <p role="status" className="mt-4 rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-800">
          ✓ Thanks — your message was sent. We&apos;ll be in touch shortly.
        </p>
      ) : null}
      {status==='error' ? (
        <p role="alert" className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-800">{error}</p>
      ) : null}
    </form>
  )
}
