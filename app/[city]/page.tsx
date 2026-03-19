import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Section, ParkCard, ParkGrid, FAQ, Breadcrumbs, RelatedLinks, Chip, ChipRow, GuideLink, CityRow, ChatInput } from '@/components/UI'
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
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(createFaqJsonLd(city.faq)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(createBreadcrumbJsonLd([{ name: 'Forside', url: '/' }, { name: city.name, url: `/${city.slug}` }])) }} />
      <Breadcrumbs items={[{ label: 'Forside', href: '/' }, { label: city.name }]} />
      <h1 className="text-xl font-bold mb-2" style={{ color: 'var(--ink)' }}>Fornøyelsesparker i {city.name}</h1>
      <p className="text-[14px] leading-relaxed mb-6" style={{ color: 'var(--ink2)' }}>{city.description}</p>
      <ChipRow>{getAllCategories().map(c => <Chip key={c.slug} label={c.name} href={`/kategori/${c.slug}`} />)}</ChipRow>
      {parks.length > 0 ? <Section title={`${parks.length} parker i ${city.name}`}><ParkGrid>{parks.map(p => <ParkCard key={p.id} name={p.name} href={`/park/${p.slug}`} description={p.shortDescription} city={p.city} county={p.county} category={p.category} featured={p.featured} audience={p.audience} />)}</ParkGrid></Section> : <Section><p className="text-[13px] py-6 text-center" style={{ color: 'var(--ink3)' }}>Vi legger til oppføringer for {city.name} snart.</p></Section>}
      <Section title="Guider"><div className="grid gap-3 sm:grid-cols-3">{getAllGuides().slice(0,3).map(g => <GuideLink key={g.slug} title={g.title} intro={g.intro} href={`/guide/${g.slug}`} />)}</div></Section>
      <RelatedLinks title="Andre byer" links={others.slice(0,8).map(c => ({ label: c.name, href: `/${c.slug}` }))} />
      <FAQ items={city.faq} />
      <div className="mt-8"><ChatInput placeholder={`Søk etter opplevelser i ${city.name}...`} /></div>
    </>
  )
}
