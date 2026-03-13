'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import { brand } from '@/theme/brand'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Private home health care in Centennial, Colorado"
          fill
          priority
          className="object-cover opacity-80"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/55 to-slate-950/25" />
      </div>

      {/* Animated ambient blobs */}
      <motion.div
        aria-hidden="true"
        className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-brand-primary/35 blur-3xl"
        animate={{ x: [0, 28, 0], y: [0, 18, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-brand-accent/25 blur-3xl"
        animate={{ x: [0, -22, 0], y: [0, -12, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white ring-1 ring-white/15"
          >
            Nurse-led • Culturally aware • Dignity-first care
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 text-4xl font-extrabold tracking-tight text-white md:text-6xl"
          >
            Private Home Health Care in{' '}
            <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
              Centennial, Colorado
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85"
          >
            Compassionate, personalized in-home care that preserves dignity, independence, and peace of mind for families across
            Centennial and the greater Denver metro area.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 grid gap-2 text-sm text-white/85 md:grid-cols-3"
          >
            <div className="rounded-2xl bg-white/10 p-3 ring-1 ring-white/15">✔ Medicare • Medicaid • Private Pay</div>
            <div className="rounded-2xl bg-white/10 p-3 ring-1 ring-white/15">✔ Response within 24 hours</div>
            <div className="rounded-2xl bg-white/10 p-3 ring-1 ring-white/15">✔ Serving Centennial + Denver metro</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Link
              href="#request-care"
              className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-primary/30 transition hover:bg-brand-primaryDark"
            >
              Request Care Today <ArrowRight size={16} />
            </Link>
            <a
              href={`tel:${brand.phoneE164}`}
              className="inline-flex items-center gap-2 rounded-full bg-white/15 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/20"
            >
              <Phone size={16} /> Call {brand.phone}
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.32 }}
            className="mt-4 text-xs text-white/70"
          >
            No obligation. Confidential consultation.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
