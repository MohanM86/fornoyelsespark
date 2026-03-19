import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Section, QuickFacts, InsightPanel, FAQ, Breadcrumbs, RelatedLinks, ParkCard, ParkGrid, GuideLink, ChatInput } from '@/components/UI'
import { getParkBySlug, getAllParks, getRelatedParks, getRelatedGuides, getCityBySlug, getAllFylker } from '@/lib/helpers'
import { createMetadata, createParkJsonLd, createLocalBusinessJsonLd, createFaqJsonLd, createBreadcrumbJsonLd } from '@/lib/seo'

type Props = { params: { slug: string } }
export function generateStaticParams() { return getAllParks().map(p => ({ slug: p.slug })) }
export function generateMetadata({ params }: Props): Metadata {
  const park = getParkBySlug(params.slug); if (!park) return {}
  const catName = park.category.charAt(0).toUpperCase() + park.category.slice(1).replace(/-/g, ' ')
  return createMetadata({
    title: `${park.name} – ${catName} i ${park.city}, ${park.county}`,
    description: `${park.name} i ${park.city} kommune, ${park.county}. ${park.shortDescription.slice(0, 130)}`,
    path: `/park/${park.slug}`,
  })
}
export default function ParkPage({ params }: Props) {
  const park = getParkBySlug(params.slug); if (!park) notFound()
  const related = getRelatedParks(park)
  const guides = getRelatedGuides(park.slug)
  const city = getCityBySlug(park.citySlug)
  const fylke = getAllFylker().find(f => f.name === park.county)
  const bc = [
    { name: 'Forside', url: '/' },
    ...(fylke ? [{ name: fylke.name, url: `/fylke/${fylke.slug}` }] : []),
    ...(city ? [{ name: city.name, url: `/${city.slug}` }] : []),
    { name: park.name, url: `/park/${park.slug}` },
  ]
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        park.featured ? createParkJsonLd(park) : createLocalBusinessJsonLd({ name: park.name, description: park.shortDescription, address: park.address, city: park.city, county: park.county, slug: park.slug, category: park.category })
      ) }} />
      {park.faq.length > 0 && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(createFaqJsonLd(park.faq)) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(createBreadcrumbJsonLd(bc)) }} />
      <Breadcrumbs items={[
        { label: 'Forside', href: '/' },
        ...(fylke ? [{ label: fylke.name, href: `/fylke/${fylke.slug}` }] : []),
        ...(city ? [{ label: city.name, href: `/${city.slug}` }] : []),
        { label: park.name },
      ]} />
      <article>
        <div className="flex items-center gap-3 flex-wrap mb-2">
          <h1 className="text-xl font-bold" style={{ color: 'var(--ink)' }}>{park.name}</h1>
          {park.featured && <span className="px-2.5 py-0.5 text-[10px] font-semibold rounded-full" style={{ background: 'var(--green-bg)', color: 'var(--green-fg)' }}>Anbefalt</span>}
        </div>
        <p className="text-[14px] leading-relaxed mb-5" style={{ color: 'var(--ink2)' }}>{park.shortDescription}</p>
        <QuickFacts facts={[
          { label: 'Kommune', value: park.city, href: city ? `/${city.slug}` : undefined },
          { label: 'Fylke', value: park.county, href: fylke ? `/fylke/${fylke.slug}` : undefined },
          { label: 'Type', value: park.category.charAt(0).toUpperCase() + park.category.slice(1).replace(/-/g,' '), href: `/kategori/${park.category}` },
          ...(park.address ? [{ label: 'Adresse', value: park.address }] : []),
          { label: 'Passer for', value: park.audience.join(', ') },
        ]} />
        {park.tips.length > 0 && <div className="mt-4"><InsightPanel title="Tips før besøket" items={park.tips.slice(0,4).map(t => ({ icon: '✓', heading: t, detail: '' }))} /></div>}
        <Section title={`Om ${park.name}`}><div className="text-[13px] leading-relaxed space-y-3" style={{ color: 'var(--ink2)' }}>{park.description.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}</div></Section>
        <RelatedLinks title="Kategorier" links={park.categories.map(c => ({ label: c.charAt(0).toUpperCase() + c.slice(1).replace(/-/g,' '), href: `/kategori/${c}` }))} />
        {city && (
          <Section>
            <div className="grid gap-2 sm:grid-cols-2">
              <Link href={`/${city.slug}`} className="flex items-center rounded-xl p-4" style={{ background: 'var(--card)', border: '1px solid var(--brd)' }}>
                <span className="text-[13px] font-semibold" style={{ color: 'var(--blue)' }}>Alle parker i {city.name} →</span>
              </Link>
              {fylke && (
                <Link href={`/fylke/${fylke.slug}`} className="flex items-center rounded-xl p-4" style={{ background: 'var(--card)', border: '1px solid var(--brd)' }}>
                  <span className="text-[13px] font-semibold" style={{ color: 'var(--blue)' }}>Alle parker i {fylke.name} →</span>
                </Link>
              )}
            </div>
          </Section>
        )}
        {related.length > 0 && <Section title="Lignende parker"><ParkGrid>{related.map(r => <ParkCard key={r.id} name={r.name} href={`/park/${r.slug}`} description={r.shortDescription} city={r.city} county={r.county} category={r.category} />)}</ParkGrid></Section>}
        {guides.length > 0 && <Section title="Guider"><div className="grid gap-3 sm:grid-cols-2">{guides.map(g => <GuideLink key={g.slug} title={g.title} intro={g.intro} href={`/guide/${g.slug}`} />)}</div></Section>}
        <FAQ items={park.faq} />
        <div className="mt-8"><ChatInput placeholder={`Spør om ${park.name}...`} /></div>
      </article>
    </>
  )
}
