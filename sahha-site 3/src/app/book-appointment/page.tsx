import { AppointmentForm } from '@/components/forms/AppointmentForm'
import { brand } from '@/theme/brand'

export const metadata = {
  title: 'Book a Free In-Home Care Consultation | Denver & Aurora, CO',
  description: 'Schedule your free, no-obligation in-home care consultation with Sahha Home Health Care. Serving Denver, Aurora, Centennial, Englewood, Littleton, and greater Colorado.',
}

export default function BookAppointmentPage() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-4xl font-extrabold tracking-tight">Book an Appointment</h1>
        <p className="mt-4 max-w-3xl text-slate-700">
          Request a consultation — we’ll confirm by phone or email. Prefer to call? <a className="font-semibold text-brand-primary" href={`tel:${brand.phoneE164}`}>{brand.phone}</a>
        </p>
        <div className="mt-10 max-w-2xl">
          <AppointmentForm />
        </div>
      </div>
    </section>
  )
}
