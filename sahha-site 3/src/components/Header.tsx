'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { brand } from '@/theme/brand'

const nav = [
  { href: '/services', label: 'Services' },
  { href: '/areas-we-serve', label: 'Areas' },
  { href: '/about-us', label: 'About Us' },
  { href: '/ihss', label: 'IHSS' },
  { href: '/insurances/medicaid', label: 'Insurances' },
  { href: '/contact-us', label: 'Contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-xl">
      <div aria-hidden="true" className="h-[3px] w-full bg-gradient-to-r from-brand-primary via-brand-accent to-brand-primary" />
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3" aria-label="Sahha Home Health Care">
          <Image src="/logo.png" alt="Sahha Home Health Care" width={180} height={54} priority />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative text-sm font-medium text-slate-700 transition hover:text-slate-900"
            >
              {item.label}
              <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-gradient-to-r from-brand-primary to-brand-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            className="hidden items-center gap-2 rounded-full bg-white/70 px-3 py-2 text-sm font-semibold text-slate-800 shadow-sm ring-1 ring-slate-200 transition hover:bg-white md:flex"
            href={`tel:${brand.phoneE164}`}
          >
            <Phone size={16} />
            {brand.phone}
          </a>
          <Link
            href="/#request-care"
            className="hidden rounded-full bg-brand-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-primaryDark md:inline-flex"
          >
            Request Care
          </Link>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex items-center justify-center rounded-full bg-white/80 p-2 shadow-sm ring-1 ring-slate-200 transition hover:bg-white md:hidden"
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-slate-900/40" onClick={() => setOpen(false)} />

            <motion.div
              className="absolute right-0 top-0 h-full w-[88%] max-w-sm bg-white shadow-2xl"
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 60, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 26 }}
            >
              <div className="flex items-center justify-between border-b px-4 py-3">
                <Image src="/logo.png" alt="Sahha Home Health Care" width={170} height={50} />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-full bg-slate-100 p-2 text-slate-800"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="p-4">
                <div className="grid gap-2">
                  {nav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="rounded-2xl px-4 py-3 text-base font-semibold text-slate-800 transition hover:bg-brand-soft"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                <div className="mt-6 grid gap-3">
                  <Link
                    href="/#request-care"
                    onClick={() => setOpen(false)}
                    className="rounded-2xl bg-brand-primary px-4 py-3 text-center text-sm font-semibold text-white"
                  >
                    Request Care
                  </Link>
                  <a
                    href={`tel:${brand.phoneE164}`}
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-center text-sm font-semibold text-slate-800"
                  >
                    Call {brand.phone}
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
