import { parks } from '@/data/parks'
import { cities } from '@/data/cities'
import { categories } from '@/data/categories'
import { guides } from '@/data/guides'
import { Park, City, Category, Guide, ParkCategory } from '@/lib/types'

export function getAllParks(): Park[] {
  return parks
}

export function getParkBySlug(slug: string): Park | undefined {
  return parks.find((p) => p.slug === slug)
}

export function getFeaturedParks(): Park[] {
  return parks.filter((p) => p.featured)
}

export function getParksByCity(citySlug: string): Park[] {
  return parks.filter((p) => p.citySlug === citySlug)
}

export function getParksByCategory(categorySlug: ParkCategory): Park[] {
  return parks.filter((p) => p.categories.includes(categorySlug))
}

export function getRelatedParks(park: Park, limit = 4): Park[] {
  return parks
    .filter(
      (p) =>
        p.id !== park.id &&
        (p.citySlug === park.citySlug ||
          p.categories.some((c) => park.categories.includes(c)))
    )
    .slice(0, limit)
}

export function getAllCities(): City[] {
  return cities
}

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug)
}

export function getAllCategories(): Category[] {
  return categories
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug)
}

export function getAllGuides(): Guide[] {
  return guides
}

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug)
}

export function getRelatedGuides(parkSlug: string): Guide[] {
  return guides.filter((g) => g.relatedParks.includes(parkSlug))
}

export function getGuidesForCategory(categorySlug: string): Guide[] {
  return guides.filter(
    (g) =>
      g.slug.includes(categorySlug) ||
      g.title.toLowerCase().includes(categorySlug.replace(/-/g, ' '))
  )
}
