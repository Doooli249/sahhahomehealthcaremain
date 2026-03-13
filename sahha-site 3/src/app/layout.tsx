import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { brand } from '@/theme/brand'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sahhahomehealthcare.com'

export const metadata: Metadata = {
  title: {
    default: `Private Home Health Care in ${brand.primaryCity} | ${brand.name}`,
    template: `%s | ${brand.name}`,
  },
  description:
    'Compassionate, culturally aware in-home care in Centennial, Colorado. Personalized care plans, experienced caregivers, and fast response times.',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: `Private Home Health Care in ${brand.primaryCity} | ${brand.name}`,
    description:
      'Compassionate, personalized in-home care that preserves dignity, independence, and peace of mind for families.',
    type: 'website',
    url: siteUrl,
    siteName: brand.name,
    locale: 'en_US',
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${brand.name} — Private Home Health Care in ${brand.primaryCity}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Private Home Health Care in ${brand.primaryCity} | ${brand.name}`,
    description:
      'Compassionate, personalized in-home care that preserves dignity, independence, and peace of mind for families.',
    images: [`${siteUrl}/og-image.jpg`],
  },
  metadataBase: new URL(siteUrl),
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
