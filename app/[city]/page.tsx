import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Section, ParkCard, ParkGrid, FAQ, Breadcrumbs, RelatedLinks, Chip, ChipRow, GuideLink, ChatInput } from '@/components/UI'
import { getCityBySlug, getParksByCity, getAllCities, getMainCities, getAllCategories, getAllGuides, getAllFylker } from '@/lib/helpers'
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
  const fylke = getAllFylker().find(f => f.name === city.county)
  const otherCities = getMainCities().filter(c => c.slug !== city.slug).slice(0, 6)
  const guides = getAllGuides().slice(0, 3)

  const bc = [
    { name: 'Forside', url: '/' },
    ...(fylke ? [{ name: fylke.name, url: `/fylke/${fylke.slug}` }] : []),
    { name: city.name, url: `/${city.slug}` },
  ]

  return (
    <>
      {city.faq.length > 0 && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(createFaqJsonLd(city.faq)) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(createBreadcrumbJsonLd(bc)) }} />
      <Breadcrumbs items={[
        { label: 'Forside', href: '/' },
        ...(fylke ? [{ label: fylke.name, href: `/fylke/${fylke.slug}` }] : []),
        { label: city.name },
      ]} />
      <h1 className="text-xl font-bold mb-2" style={{ color: 'var(--ink)' }}>Fornøyelsesparker i {city.name}</h1>
      {fylke && <p className="text-[12px] mb-2" style={{ color: 'var(--ink3)' }}>{city.name} kommune, {fylke.name}</p>}
      <p className="text-[14px] leading-relaxed mb-6" style={{ color: 'var(--ink2)' }}>{city.description}</p>

      <ChipRow>{getAllCategories().map(c => <Chip key={c.slug} label={c.name} href={`/kategori/${c.slug}`} />)}</ChipRow>

      {parks.length > 0 ? (
        <Section title={`${parks.length} parker i ${city.name}`}>
          <ParkGrid>{parks.map(p => (
            <ParkCard key={p.id} name={p.name} href={`/park/${p.slug}`} description={p.shortDescription}
              city={p.city} county={p.county} category={p.category} featured={p.featured} audience={p.audience} />
          ))}</ParkGrid>
        </Section>
      ) : (
        <Section><p className="text-[13px] py-6 text-center" style={{ color: 'var(--ink3)' }}>Vi legger til oppføringer for {city.name} snart.</p></Section>
      )}

      {fylke && (
        <Section>
          <a href={`/fylke/${fylke.slug}`} className="flex items-center rounded-xl p-4"
            style={{ background: 'var(--card)', border: '1px solid var(--brd)' }}>
            <span className="text-[13px] font-semibold" style={{ color: 'var(--blue)' }}>Se alle parker i {fylke.name} →</span>
          </a>
        </Section>
      )}

      <Section title="Guider">
        <div className="grid gap-3 sm:grid-cols-3">
          {guides.map(g => <GuideLink key={g.slug} title={g.title} intro={g.intro} href={`/guide/${g.slug}`} />)}
        </div>
      </Section>

      <RelatedLinks title="Andre byer" links={otherCities.map(c => ({ label: c.name, href: `/${c.slug}` }))} />
      <FAQ items={city.faq} />
      <div className="mt-8"><ChatInput placeholder={`Søk etter opplevelser i ${city.name}...`} /></div>
    </>
  )
}
