import { parks } from '@/data/parks'
import { brregParks } from '@/data/brreg'
import { cities } from '@/data/cities'
import { kommuneSider } from '@/data/kommuner'
import { fylker } from '@/data/fylker'
import { categories } from '@/data/categories'
import { guides } from '@/data/guides'
import { Park, City, Category, Guide, ParkCategory } from '@/lib/types'

// Merge all parks: manual first, then register data
const allParks: Park[] = [...parks, ...brregParks]

// Merge all cities: manual cities + auto kommune pages
const allCities: City[] = [...cities, ...kommuneSider]

// Fylker as cities (same type)
const allFylker: City[] = fylker

export function getAllParks(): Park[] { return allParks }
export function getParkBySlug(slug: string): Park | undefined { return allParks.find(p => p.slug === slug) }
export function getFeaturedParks(): Park[] { return allParks.filter(p => p.featured) }
export function getParksByCity(citySlug: string): Park[] { return allParks.filter(p => p.citySlug === citySlug) }
export function getParksByCategory(categorySlug: ParkCategory): Park[] { return allParks.filter(p => p.categories.includes(categorySlug)) }
export function getParksByFylke(fylkeSlug: string): Park[] {
  const fylke = allFylker.find(f => f.slug === fylkeSlug)
  if (!fylke) return []
  return allParks.filter(p => p.county === fylke.name)
}

export function getRelatedParks(park: Park, limit = 4): Park[] {
  return allParks
    .filter(p => p.id !== park.id && (p.citySlug === park.citySlug || p.county === park.county || p.categories.some(c => park.categories.includes(c))))
    .slice(0, limit)
}

export function getAllCities(): City[] { return allCities }
export function getMainCities(): City[] { return cities }
export function getCityBySlug(slug: string): City | undefined { return allCities.find(c => c.slug === slug) }

export function getAllFylker(): City[] { return allFylker }
export function getFylkeBySlug(slug: string): City | undefined { return allFylker.find(f => f.slug === slug) }

export function getAllCategories(): Category[] { return categories }
export function getCategoryBySlug(slug: string): Category | undefined { return categories.find(c => c.slug === slug) }

export function getAllGuides(): Guide[] { return guides }
export function getGuideBySlug(slug: string): Guide | undefined { return guides.find(g => g.slug === slug) }
export function getRelatedGuides(parkSlug: string): Guide[] { return guides.filter(g => g.relatedParks.includes(parkSlug)) }
