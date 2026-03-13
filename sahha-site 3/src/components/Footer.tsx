import Image from 'next/image'
import Link from 'next/link'
import { brand } from '@/theme/brand'

export function Footer() {
  return (
    <footer className="border-t bg-gradient-to-b from-white to-brand-soft">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt={brand.name} width={180} height={56} />
          </div>
          <p className="mt-2 text-sm text-slate-600">
            We are a caring partner in your family’s path to improved health — not just a home health care service.
          </p>
          <a className="mt-4 inline-block text-sm font-semibold text-brand-primary" href={`tel:${brand.phoneE164}`}>
            Call {brand.phone}
          </a>
          <p className="mt-2 text-xs text-slate-500">Serving: {brand.serviceArea.join(', ')}</p>
        </div>

        <div>
          <div className="text-sm font-semibold text-slate-900">Quick Links</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link className="text-slate-600 hover:text-slate-900" href="/">Home</Link></li>
            <li><Link className="text-slate-600 hover:text-slate-900" href="/about-us">About Us</Link></li>
            <li><Link className="text-slate-600 hover:text-slate-900" href="/services">Services</Link></li>
            <li><Link className="text-slate-600 hover:text-slate-900" href="/ihss">IHSS</Link></li>
            <li><Link className="text-slate-600 hover:text-slate-900" href="/contact-us">Contact</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold text-slate-900">Insurances</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link className="text-slate-600 hover:text-slate-900" href="/insurances/medicare">Medicare</Link></li>
            <li><Link className="text-slate-600 hover:text-slate-900" href="/insurances/medicaid">Medicaid</Link></li>
            <li><Link className="text-slate-600 hover:text-slate-900" href="/insurances/private-pay">Private Pay</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold text-slate-900">Newsletter</div>
          <p className="mt-3 text-sm text-slate-600">Stay tuned for helpful caregiving updates and resources.</p>
          <p className="mt-6 text-xs text-slate-500">© {new Date().getFullYear()} Sahha Home Health Care. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
