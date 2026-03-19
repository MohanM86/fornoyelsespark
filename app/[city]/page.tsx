import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Section, CompareCard, CompareGrid, AIInsightBox, FAQ, Breadcrumbs, RelatedLinks, ChipNav, GuideCard } from '@/components/UI'
import { getCityBySlug, getParksByCity, getAllCities, getAllCategories, getAllGuides } from '@/lib/helpers'
import { createMetadata, createFaqJsonLd, createBreadcrumbJsonLd } from '@/lib/seo'

type Props = { params: { city: string } }

export function generateStaticParams() {
  return getAllCities().map((c) => ({ city: c.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const city = getCityBySlug(params.city)
  if (!city) return {}
  return createMetadata({ title: city.metaTitle, description: city.metaDescription, path: `/${city.slug}` })
}

export default function CityPage({ params }: Props) {
  const city = getCityBySlug(params.city)
  if (!city) notFound()

  const parks = getParksByCity(city.slug)
  const allCategories = getAllCategories()
  const otherCities = getAllCities().filter((c) => c.slug !== city.slug)
  const guides = getAllGuides().slice(0, 3)

  const breadcrumbs = [{ name: 'Forside', url: '/' }, { name: city.name, url: `/${city.slug}` }]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(createFaqJsonLd(city.faq)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(createBreadcrumbJsonLd(breadcrumbs)) }} />

      <Breadcrumbs items={[{ label: 'Forside', href: '/' }, { label: city.name }]} />

      <header className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
          Fornøyelsesparker i {city.name}
        </h1>
      </header>

      <AIInsightBox>
        <p>{city.description}</p>
      </AIInsightBox>

      <Section>
        <ChipNav items={allCategories.map((c) => ({ label: c.name, href: `/kategori/${c.slug}` }))} />
      </Section>

      {parks.length > 0 ? (
        <Section title={`${parks.length} parker og opplevelser i ${city.name}`}>
          <CompareGrid>
            {parks.map((park) => (
              <CompareCard
                key={park.id} name={park.name} href={`/park/${park.slug}`}
                description={park.shortDescription} city={park.city} county={park.county}
                category={park.category} audience={park.audience} featured={park.featured}
                tags={park.tags?.slice(0, 2)}
              />
            ))}
          </CompareGrid>
        </Section>
      ) : (
        <Section>
          <div className="rounded-xl p-6 text-center" style={{ background: 'var(--surface-sunken)' }}>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              Vi jobber med å legge til oppføringer for {city.name}. Sjekk tilbake snart.
            </p>
          </div>
        </Section>
      )}

      <Section title="Relevante guider">
        <div className="grid gap-3 sm:grid-cols-3">
          {guides.map((g) => <GuideCard key={g.slug} title={g.title} intro={g.intro} href={`/guide/${g.slug}`} />)}
        </div>
      </Section>

      <RelatedLinks title="Andre byer" links={otherCities.slice(0, 8).map((c) => ({ label: c.name, href: `/${c.slug}` }))} />

      <FAQ items={city.faq} />
    </>
  )
}
