import { MetadataRoute } from 'next'
import { getAllParks, getAllCities, getAllCategories, getAllGuides, getAllFylker } from '@/lib/helpers'

const BASE = 'https://fornoyelsespark.no'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString()

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
  ]

  const cityPages: MetadataRoute.Sitemap = getAllCities().map(c => ({
    url: `${BASE}/${c.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  const fylkePages: MetadataRoute.Sitemap = getAllFylker().map(f => ({
    url: `${BASE}/fylke/${f.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  const categoryPages: MetadataRoute.Sitemap = getAllCategories().map(c => ({
    url: `${BASE}/kategori/${c.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  const parkPages: MetadataRoute.Sitemap = getAllParks().map(p => ({
    url: `${BASE}/park/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: p.featured ? 0.8 : 0.7,
  }))

  const guidePages: MetadataRoute.Sitemap = getAllGuides().map(g => ({
    url: `${BASE}/guide/${g.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.9,
  }))

  return [...staticPages, ...cityPages, ...fylkePages, ...categoryPages, ...parkPages, ...guidePages]
}
