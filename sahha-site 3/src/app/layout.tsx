import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { brand } from '@/theme/brand'

export const metadata: Metadata = {
  title: {
    default: `Private Home Health Care in ${brand.primaryCity} | ${brand.name}`,
    template: `%s | ${brand.name}`,
  },
  description:
    'Compassionate, culturally aware in-home care in Centennial, Colorado. Personalized care plans, experienced caregivers, and fast response times.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `Private Home Health Care in ${brand.primaryCity}`,
    description:
      'Compassionate, personalized in-home care that preserves dignity, independence, and peace of mind for families.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
