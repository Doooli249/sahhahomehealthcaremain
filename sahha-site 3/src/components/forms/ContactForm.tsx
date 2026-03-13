'use client'

import { useState } from 'react'

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
          <label className="text-sm font-semibold">Phone (optional)</label>
          <input name="phone" className="mt-1 w-full rounded-xl border px-3 py-2" />
        </div>
        <div className="md:col-span-2">
          <label className="text-sm font-semibold">Subject</label>
          <input name="subject" required className="mt-1 w-full rounded-xl border px-3 py-2" />
        </div>
        <div className="md:col-span-2">
          <label className="text-sm font-semibold">Message</label>
          <textarea name="message" required rows={5} className="mt-1 w-full rounded-xl border px-3 py-2" />
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
          {status==='sending' ? 'Sending...' : 'Send Message'}
        </button>
        <p className="text-sm text-slate-600">We typically respond within 24 hours.</p>
      </div>

      {status==='success' ? (
        <p className="mt-4 rounded-xl bg-green-50 px-4 py-3 text-sm text-green-800">
          Thanks — your message was sent. We’ll be in touch shortly.
        </p>
      ) : null}
      {status==='error' ? (
        <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-800">{error}</p>
      ) : null}
    </form>
  )
}
