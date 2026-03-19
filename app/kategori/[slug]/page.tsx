import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Section, CompareCard, CompareGrid, AIInsightBox, FAQ, Breadcrumbs, RelatedLinks, GuideCard } from '@/components/UI'
import { getCategoryBySlug, getParksByCategory, getAllCategories, getAllCities, getAllGuides } from '@/lib/helpers'
import { createMetadata, createFaqJsonLd, createBreadcrumbJsonLd } from '@/lib/seo'
import { ParkCategory } from '@/lib/types'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return getAllCategories().map((c) => ({ slug: c.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const category = getCategoryBySlug(params.slug)
  if (!category) return {}
  return createMetadata({ title: category.metaTitle, description: category.metaDescription, path: `/kategori/${category.slug}` })
}

export default function CategoryPage({ params }: Props) {
  const category = getCategoryBySlug(params.slug)
  if (!category) notFound()

  const parks = getParksByCategory(category.slug as ParkCategory)
  const otherCategories = getAllCategories().filter((c) => c.slug !== category.slug)
  const allCities = getAllCities()
  const relatedGuides = getAllGuides().filter((g) =>
    g.slug.includes(category.slug) || g.relatedParks.some((rp) => parks.some((p) => p.slug === rp))
  )

  const breadcrumbs = [
    { name: 'Forside', url: '/' },
    { name: 'Kategorier', url: '/kategori/fornoyelsesparker' },
    { name: category.name, url: `/kategori/${category.slug}` },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(createFaqJsonLd(category.faq)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(createBreadcrumbJsonLd(breadcrumbs)) }} />

      <Breadcrumbs items={[{ label: 'Forside', href: '/' }, { label: 'Kategorier', href: '/kategori/fornoyelsesparker' }, { label: category.name }]} />

      <header className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
          {category.name} i Norge
        </h1>
      </header>

      <AIInsightBox>
        <p>{category.description}</p>
      </AIInsightBox>

      <Section>
        <div className="text-sm leading-relaxed space-y-3" style={{ color: 'var(--text-secondary)' }}>
          {category.longDescription.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </Section>

      <Section title={`${parks.length} ${category.name.toLowerCase()} i Norge`}>
        {parks.length > 0 ? (
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
        ) : (
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Ingen oppføringer ennå. Sjekk tilbake snart.</p>
        )}
      </Section>

      <RelatedLinks title="Se parker etter by" links={allCities.slice(0, 8).map((c) => ({ label: c.name, href: `/${c.slug}` }))} />

      {relatedGuides.length > 0 && (
        <Section title="Relevante guider">
          <div className="grid gap-3 sm:grid-cols-2">
            {relatedGuides.map((g) => <GuideCard key={g.slug} title={g.title} intro={g.intro} href={`/guide/${g.slug}`} />)}
          </div>
        </Section>
      )}

      <RelatedLinks title="Andre kategorier" links={otherCategories.map((c) => ({ label: c.name, href: `/kategori/${c.slug}` }))} />

      <FAQ items={category.faq} />
    </>
  )
}
