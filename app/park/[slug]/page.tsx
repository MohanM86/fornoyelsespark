import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Section, QuickFacts, InfoBox, FAQ, Breadcrumbs, RelatedLinks, ParkCard, ParkGrid, GuideLink } from '@/components/UI'
import { getParkBySlug, getAllParks, getRelatedParks, getRelatedGuides, getCityBySlug } from '@/lib/helpers'
import { createMetadata, createParkJsonLd, createFaqJsonLd, createBreadcrumbJsonLd } from '@/lib/seo'

type Props = { params: { slug: string } }
export function generateStaticParams() { return getAllParks().map(p => ({ slug: p.slug })) }
export function generateMetadata({ params }: Props): Metadata {
  const park = getParkBySlug(params.slug); if (!park) return {}
  return createMetadata({ title: `${park.name} – Informasjon, tips og guide`, description: park.shortDescription, path: `/park/${park.slug}` })
}

export default function ParkPage({ params }: Props) {
  const park = getParkBySlug(params.slug); if (!park) notFound()
  const related = getRelatedParks(park)
  const guides = getRelatedGuides(park.slug)
  const city = getCityBySlug(park.citySlug)
  const bc = [{ name: 'Forside', url: '/' }, ...(city ? [{ name: city.name, url: `/${city.slug}` }] : []), { name: park.name, url: `/park/${park.slug}` }]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(createParkJsonLd(park)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(createFaqJsonLd(park.faq)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(createBreadcrumbJsonLd(bc)) }} />
      <Breadcrumbs items={[{ label: 'Forside', href: '/' }, ...(city ? [{ label: city.name, href: `/${city.slug}` }] : []), { label: park.name }]} />

      <article>
        <header className="mb-6">
          <div className="flex items-center gap-3 flex-wrap">
            <h1 className="text-2xl font-bold" style={{ color: 'var(--ink)' }}>{park.name}</h1>
            {park.featured && <span className="px-2.5 py-0.5 text-[11px] font-semibold rounded-full" style={{ background: 'var(--green)', color: '#fff' }}>Anbefalt</span>}
          </div>
          <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--ink-light)' }}>{park.shortDescription}</p>
        </header>

        <QuickFacts facts={[
          { label: 'Sted', value: `${park.city}, ${park.county}`, href: city ? `/${city.slug}` : undefined },
          { label: 'Type', value: park.category.charAt(0).toUpperCase() + park.category.slice(1).replace(/-/g,' '), href: `/kategori/${park.category}` },
          ...(park.address ? [{ label: 'Adresse', value: park.address }] : []),
          { label: 'Passer for', value: park.audience.join(', ') },
        ]} />

        {park.tips.length > 0 && (
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {park.tips.slice(0, 4).map((t, i) => (
              <InfoBox key={i} color={(['green', 'blue', 'yellow', 'green'] as const)[i % 4]} label={t} />
            ))}
          </div>
        )}

        <Section title={`Om ${park.name}`}>
          <div className="text-sm leading-relaxed space-y-3" style={{ color: 'var(--ink-light)' }}>
            {park.description.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </Section>

        <RelatedLinks title="Kategorier" links={park.categories.map(c => ({ label: c.charAt(0).toUpperCase() + c.slice(1).replace(/-/g,' '), href: `/kategori/${c}` }))} />

        {city && (
          <Section>
            <Link href={`/${city.slug}`} className="flex items-center gap-2 rounded-xl p-4"
              style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
              <span className="text-sm font-semibold" style={{ color: 'var(--blue)' }}>Alle fornøyelsesparker i {city.name} →</span>
            </Link>
          </Section>
        )}

        {related.length > 0 && (
          <Section title="Lignende parker">
            <ParkGrid>{related.map(r => <ParkCard key={r.id} name={r.name} href={`/park/${r.slug}`} description={r.shortDescription} city={r.city} category={r.category} />)}</ParkGrid>
          </Section>
        )}

        {guides.length > 0 && (
          <Section title="Guider">
            <div className="grid gap-3 sm:grid-cols-2">{guides.map(g => <GuideLink key={g.slug} title={g.title} intro={g.intro} href={`/guide/${g.slug}`} />)}</div>
          </Section>
        )}

        <FAQ items={park.faq} />
      </article>
    </>
  )
}
