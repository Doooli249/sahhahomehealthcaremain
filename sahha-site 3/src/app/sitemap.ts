import type { MetadataRoute } from 'next'
import { services } from '@/lib/services'
import { posts } from '@/lib/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sahhahomehealthcare.com'

  const staticRoutes = [
    '',
    '/about-us',
    '/services',
    '/areas-we-serve',
    '/ihss',
    '/insurances/medicaid',
    '/insurances/medicare',
    '/insurances/private-pay',
    '/my-team',
    '/contact-us',
    '/book-appointment',
    '/blog',
  ]

  const now = new Date()
  const areaPages = [
    'home-health-care-centennial-co',
    'home-health-care-denver-co',
    'home-health-care-aurora-co',
    'home-health-care-englewood-co',
    'home-health-care-greenwood-village-co',
    'home-health-care-littleton-co',
  ]
  return [
    ...staticRoutes.map((p) => ({
      url: `${baseUrl}${p}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: p === '' ? 1 : 0.7,
    })),
    ...services.map((s) => ({
      url: `${baseUrl}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...areaPages.map((slug) => ({
      url: `${baseUrl}/areas-we-serve/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    ...posts.map((p) => ({
      url: `${baseUrl}/blog/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ]
}
