import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Section, QuickFacts, SmartInsight, FAQ, Breadcrumbs, RelatedLinks, CompareCard, CompareGrid, GuideCard } from '@/components/UI'
import { getParkBySlug, getAllParks, getRelatedParks, getRelatedGuides, getCityBySlug } from '@/lib/helpers'
import { createMetadata, createParkJsonLd, createFaqJsonLd, createBreadcrumbJsonLd } from '@/lib/seo'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return getAllParks().map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const park = getParkBySlug(params.slug)
  if (!park) return {}
  return createMetadata({ title: `${park.name} – Informasjon, tips og guide`, description: park.shortDescription, path: `/park/${park.slug}` })
}

export default function ParkPage({ params }: Props) {
  const park = getParkBySlug(params.slug)
  if (!park) notFound()

  const related = getRelatedParks(park)
  const relatedGuides = getRelatedGuides(park.slug)
  const city = getCityBySlug(park.citySlug)

  const breadcrumbs = [
    { name: 'Forside', url: '/' },
    ...(city ? [{ name: city.name, url: `/${city.slug}` }] : []),
    { name: park.name, url: `/park/${park.slug}` },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(createParkJsonLd(park)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(createFaqJsonLd(park.faq)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(createBreadcrumbJsonLd(breadcrumbs)) }} />

      <Breadcrumbs items={[
        { label: 'Forside', href: '/' },
        ...(city ? [{ label: city.name, href: `/${city.slug}` }] : []),
        { label: park.name },
      ]} />

      <article>
        <header className="mb-6">
          <div className="flex items-start gap-3 flex-wrap">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
              {park.name}
            </h1>
            {park.featured && (
              <span className="mt-1 inline-block px-3 py-1 text-xs font-semibold rounded-full" style={{ background: 'var(--accent)', color: '#fff' }}>
                Anbefalt
              </span>
            )}
          </div>
          <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {park.shortDescription}
          </p>
        </header>

        {/* Quick facts panel */}
        <div className="rounded-2xl p-5 mb-6" style={{ background: 'var(--surface-raised)', border: '0.5px solid var(--border)' }}>
          <QuickFacts facts={[
            { label: 'Sted', value: city ? `${park.city}, ${park.county}` : park.city, href: city ? `/${city.slug}` : undefined },
            { label: 'Type', value: park.category.charAt(0).toUpperCase() + park.category.slice(1).replace(/-/g, ' '), href: `/kategori/${park.category}` },
            ...(park.address ? [{ label: 'Adresse', value: park.address }] : []),
            { label: 'Passer for', value: park.audience.join(', ') },
          ]} />
        </div>

        {/* Smart tips */}
        {park.tips.length > 0 && (
          <div className="grid gap-2 sm:grid-cols-2 mb-6">
            {park.tips.slice(0, 4).map((tip, i) => (
              <SmartInsight
                key={i}
                icon="✓"
                text={tip}
                accent={i % 3 === 0 ? 'blue' : i % 3 === 1 ? 'green' : 'amber'}
              />
            ))}
          </div>
        )}

        {/* Main description */}
        <Section title={`Om ${park.name}`}>
          <div className="text-sm leading-relaxed space-y-3" style={{ color: 'var(--text-secondary)' }}>
            {park.description.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </Section>

        {/* Audience tags */}
        {park.audience.length > 0 && (
          <Section title="Hvem passer det for?">
            <div className="flex flex-wrap gap-2">
              {park.audience.map((a) => (
                <span key={a} className="rounded-full px-3.5 py-1.5 text-sm font-medium"
                  style={{ background: 'var(--surface-sunken)', color: 'var(--text-secondary)', border: '0.5px solid var(--border)' }}>
                  {a}
                </span>
              ))}
            </div>
          </Section>
        )}

        {/* Categories */}
        <RelatedLinks
          title="Kategorier"
          links={park.categories.map((c) => ({
            label: c.charAt(0).toUpperCase() + c.slice(1).replace(/-/g, ' '),
            href: `/kategori/${c}`,
          }))}
        />

        {/* City link */}
        {city && (
          <Section>
            <Link href={`/${city.slug}`} className="flex items-center gap-2 rounded-xl p-4 transition-all hover:shadow-sm"
              style={{ background: 'var(--surface-raised)', border: '0.5px solid var(--border)' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
              <span className="text-sm font-medium" style={{ color: 'var(--accent)' }}>
                Se alle fornøyelsesparker i {city.name}
              </span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" className="ml-auto"><path d="M9 18l6-6-6-6" /></svg>
            </Link>
          </Section>
        )}

        {/* Related parks */}
        {related.length > 0 && (
          <Section title="Lignende parker og opplevelser">
            <CompareGrid>
              {related.map((r) => (
                <CompareCard key={r.id} name={r.name} href={`/park/${r.slug}`}
                  description={r.shortDescription} city={r.city} category={r.category}
                  tags={r.tags?.slice(0, 2)} />
              ))}
            </CompareGrid>
          </Section>
        )}

        {/* Related guides */}
        {relatedGuides.length > 0 && (
          <Section title="Relevante guider">
            <div className="grid gap-3 sm:grid-cols-2">
              {relatedGuides.map((g) => (
                <GuideCard key={g.slug} title={g.title} intro={g.intro} href={`/guide/${g.slug}`} />
              ))}
            </div>
          </Section>
        )}

        <FAQ items={park.faq} />
      </article>
    </>
  )
}
