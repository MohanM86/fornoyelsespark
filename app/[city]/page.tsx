import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Section, ListingCard, ListingList, FAQ, Breadcrumbs, RelatedLinks } from '@/components/UI'
import { getCityBySlug, getParksByCity, getAllCities, getAllCategories, getAllGuides } from '@/lib/helpers'
import { createMetadata, createFaqJsonLd, createBreadcrumbJsonLd } from '@/lib/seo'

type Props = { params: { city: string } }

export function generateStaticParams() {
  return getAllCities().map((c) => ({ city: c.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const city = getCityBySlug(params.city)
  if (!city) return {}
  return createMetadata({
    title: city.metaTitle,
    description: city.metaDescription,
    path: `/${city.slug}`,
  })
}

export default function CityPage({ params }: Props) {
  const city = getCityBySlug(params.city)
  if (!city) notFound()

  const parks = getParksByCity(city.slug)
  const allCategories = getAllCategories()
  const allCities = getAllCities().filter((c) => c.slug !== city.slug)
  const allGuides = getAllGuides()

  const breadcrumbs = [
    { name: 'Forside', url: '/' },
    { name: city.name, url: `/${city.slug}` },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(createFaqJsonLd(city.faq)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(createBreadcrumbJsonLd(breadcrumbs)) }}
      />

      <Breadcrumbs items={[{ label: 'Forside', href: '/' }, { label: city.name }]} />

      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Fornøyelsesparker i {city.name}
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-600">{city.description}</p>
      </header>

      {/* Parks in this city */}
      {parks.length > 0 ? (
        <Section title={`Parker og opplevelser i ${city.name}`}>
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
        </Section>
      ) : (
        <Section>
          <p className="text-sm text-gray-600">
            Vi jobber med å legge til flere oppføringer for {city.name}. Sjekk tilbake snart for
            oppdatert informasjon om fornøyelsesparker og aktiviteter i området.
          </p>
        </Section>
      )}

      {/* Categories */}
      <RelatedLinks
        title="Utforsk kategorier"
        links={allCategories.map((c) => ({
          label: c.name,
          href: `/kategori/${c.slug}`,
        }))}
      />

      {/* Related guides */}
      <Section title="Relevante guider">
        <div className="space-y-2">
          {allGuides.slice(0, 4).map((g) => (
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

      {/* Other cities */}
      <RelatedLinks
        title="Andre byer"
        links={allCities.slice(0, 8).map((c) => ({
          label: c.name,
          href: `/${c.slug}`,
        }))}
      />

      <FAQ items={city.faq} />
    </>
  )
}
