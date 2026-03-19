import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Section, ParkCard, ParkGrid, FAQ, Breadcrumbs, RelatedLinks, Chip, ChipRow, GuideLink, CityRow } from '@/components/UI'
import { getCityBySlug, getParksByCity, getAllCities, getAllCategories, getAllGuides } from '@/lib/helpers'
import { createMetadata, createFaqJsonLd, createBreadcrumbJsonLd } from '@/lib/seo'

type Props = { params: { city: string } }
export function generateStaticParams() { return getAllCities().map(c => ({ city: c.slug })) }
export function generateMetadata({ params }: Props): Metadata {
  const city = getCityBySlug(params.city); if (!city) return {}
  return createMetadata({ title: city.metaTitle, description: city.metaDescription, path: `/${city.slug}` })
}

export default function CityPage({ params }: Props) {
  const city = getCityBySlug(params.city); if (!city) notFound()
  const parks = getParksByCity(city.slug)
  const others = getAllCities().filter(c => c.slug !== city.slug)
  const guides = getAllGuides().slice(0, 3)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(createFaqJsonLd(city.faq)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(createBreadcrumbJsonLd([{ name: 'Forside', url: '/' }, { name: city.name, url: `/${city.slug}` }])) }} />
      <Breadcrumbs items={[{ label: 'Forside', href: '/' }, { label: city.name }]} />
      <h1 className="text-2xl font-bold mb-4" style={{ color: 'var(--ink)' }}>Fornøyelsesparker i {city.name}</h1>
      <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--ink-light)' }}>{city.description}</p>
      <ChipRow>{getAllCategories().map(c => <Chip key={c.slug} label={c.name} href={`/kategori/${c.slug}`} />)}</ChipRow>
      {parks.length > 0 ? (
        <Section title={`${parks.length} parker i ${city.name}`}>
          <ParkGrid>{parks.map(p => <ParkCard key={p.id} name={p.name} href={`/park/${p.slug}`} description={p.shortDescription} city={p.city} county={p.county} category={p.category} featured={p.featured} audience={p.audience} />)}</ParkGrid>
        </Section>
      ) : <Section><p className="text-sm py-6 text-center" style={{ color: 'var(--ink-muted)' }}>Vi legger til oppføringer for {city.name} snart.</p></Section>}
      <Section title="Guider"><div className="grid gap-3 sm:grid-cols-3">{guides.map(g => <GuideLink key={g.slug} title={g.title} intro={g.intro} href={`/guide/${g.slug}`} />)}</div></Section>
      <RelatedLinks title="Andre byer" links={others.slice(0, 8).map(c => ({ label: c.name, href: `/${c.slug}` }))} />
      <FAQ items={city.faq} />
    </>
  )
}
