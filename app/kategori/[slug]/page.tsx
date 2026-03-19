import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Section, ListingCard, ListingList, FAQ, Breadcrumbs, RelatedLinks } from '@/components/UI'
import {
  getCategoryBySlug,
  getParksByCategory,
  getAllCategories,
  getAllCities,
  getGuidesForCategory,
  getAllGuides,
} from '@/lib/helpers'
import { createMetadata, createFaqJsonLd, createBreadcrumbJsonLd } from '@/lib/seo'
import { ParkCategory } from '@/lib/types'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return getAllCategories().map((c) => ({ slug: c.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const category = getCategoryBySlug(params.slug)
  if (!category) return {}
  return createMetadata({
    title: category.metaTitle,
    description: category.metaDescription,
    path: `/kategori/${category.slug}`,
  })
}

export default function CategoryPage({ params }: Props) {
  const category = getCategoryBySlug(params.slug)
  if (!category) notFound()

  const parks = getParksByCategory(category.slug as ParkCategory)
  const allCategories = getAllCategories().filter((c) => c.slug !== category.slug)
  const allCities = getAllCities()
  const relatedGuides = getAllGuides().filter(
    (g) =>
      g.slug.includes(category.slug) ||
      g.relatedParks.some((rp) => parks.some((p) => p.slug === rp))
  )

  const breadcrumbs = [
    { name: 'Forside', url: '/' },
    { name: 'Kategorier', url: '/kategori/fornoyelsesparker' },
    { name: category.name, url: `/kategori/${category.slug}` },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(createFaqJsonLd(category.faq)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(createBreadcrumbJsonLd(breadcrumbs)) }}
      />

      <Breadcrumbs
        items={[
          { label: 'Forside', href: '/' },
          { label: 'Kategorier', href: '/kategori/fornoyelsesparker' },
          { label: category.name },
        ]}
      />

      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          {category.name} i Norge
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-600">
          {category.description}
        </p>
      </header>

      {/* Long description */}
      <Section>
        <div className="text-sm leading-relaxed text-gray-600 space-y-3">
          {category.longDescription.split('\n\n').map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </Section>

      {/* Parks in category */}
      <Section title={`Alle ${category.name.toLowerCase()} i Norge`}>
        {parks.length > 0 ? (
          <ListingList>
            {parks.map((park) => (
              <ListingCard
                key={park.id}
                name={park.name}
                href={`/park/${park.slug}`}
                description={park.shortDescription}
                city={park.city}
                category={park.category}
                featured={park.featured}
              />
            ))}
          </ListingList>
        ) : (
          <p className="text-sm text-gray-600">
            Vi jobber med å legge til oppføringer i denne kategorien. Sjekk tilbake snart.
          </p>
        )}
      </Section>

      {/* Browse by city */}
      <RelatedLinks
        title="Se parker etter by"
        links={allCities.slice(0, 8).map((c) => ({
          label: c.name,
          href: `/${c.slug}`,
        }))}
      />

      {/* Related guides */}
      {relatedGuides.length > 0 && (
        <Section title="Relevante guider">
          <div className="space-y-2">
            {relatedGuides.map((g) => (
              <a
                key={g.slug}
                href={`/guide/${g.slug}`}
                className="block rounded-lg border border-gray-100 px-4 py-3 text-sm font-medium text-gray-900 hover:border-brand-200 hover:bg-brand-50/30 transition-colors"
              >
                {g.title} <span className="text-gray-400">→</span>
              </a>
            ))}
          </div>
        </Section>
      )}

      {/* Other categories */}
      <RelatedLinks
        title="Andre kategorier"
        links={allCategories.map((c) => ({
          label: c.name,
          href: `/kategori/${c.slug}`,
        }))}
      />

      <FAQ items={category.faq} />
    </>
  )
}
