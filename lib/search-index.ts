import type { SearchItem } from '@/components/SearchBox'
import { getAllParks, getMainCities, getAllFylker, getAllCategories, getAllGuides } from '@/lib/helpers'
import { kommuneSider } from '@/data/kommuner'

export function getSearchIndex(): SearchItem[] {
  const items: SearchItem[] = []

  // Parks (282)
  for (const p of getAllParks()) {
    items.push({
      name: p.name,
      href: `/park/${p.slug}`,
      type: 'park',
      detail: `${p.city}, ${p.county}`,
    })
  }

  // Main cities (11)
  for (const c of getMainCities()) {
    items.push({
      name: c.name,
      href: `/${c.slug}`,
      type: 'by',
      detail: c.county,
    })
  }

  // Kommune pages (113)
  for (const k of kommuneSider) {
    items.push({
      name: k.name,
      href: `/${k.slug}`,
      type: 'by',
      detail: k.county,
    })
  }

  // Fylker (15)
  for (const f of getAllFylker()) {
    items.push({
      name: f.name,
      href: `/fylke/${f.slug}`,
      type: 'fylke',
    })
  }

  // Categories (7)
  for (const c of getAllCategories()) {
    items.push({
      name: c.name,
      href: `/kategori/${c.slug}`,
      type: 'kategori',
    })
  }

  // Guides (6)
  for (const g of getAllGuides()) {
    items.push({
      name: g.title,
      href: `/guide/${g.slug}`,
      type: 'guide',
    })
  }

  return items
}
