import { MetadataRoute } from 'next'
import { servicesData } from '@/constants/services-data'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://insprosoftware.com'
  
  // Main pages
  const routes = [
    '',
    '/about-us',
    '/blog',
    '/contact',
    '/web-portfolio',
    '/mobile-portfolio',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))
 
  // Dynamic service pages
  const serviceRoutes = Object.keys(servicesData).map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))
 
  return [...routes, ...serviceRoutes]
}
