import { ContactForm } from '@/components/forms/ContactForm'
import { brand } from '@/theme/brand'

export const metadata = {
  title: 'Contact Us',
  description: 'Contact Sahha Home Health Care to request care, ask questions, or schedule a consultation.',
}

export default function ContactPage() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-4xl font-extrabold tracking-tight">Contact Us</h1>
        <p className="mt-4 max-w-3xl text-slate-700">
          Have a question or want to discuss care options? Send a message and we’ll respond within 24 hours.
        </p>

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <div>
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold">Call</h2>
              <p className="mt-2 text-sm text-slate-700">
                Prefer to talk? Call us at <a className="font-semibold text-brand-primary" href={`tel:${brand.phoneE164}`}>{brand.phone}</a>.
              </p>
            </div>
            <div className="mt-6 rounded-2xl border bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold">Service Area</h2>
              <p className="mt-2 text-sm text-slate-700">{brand.serviceArea.join(', ')}</p>
            </div>
          </div>
          <ContactForm sourcePage="contact-us" />
        </div>
      </div>
    </section>
  )
}
