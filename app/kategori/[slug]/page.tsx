import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Section, ParkCard, ParkGrid, FAQ, Breadcrumbs, RelatedLinks, GuideLink } from '@/components/UI'
import { getCategoryBySlug, getParksByCategory, getAllCategories, getAllCities, getAllGuides } from '@/lib/helpers'
import { createMetadata, createFaqJsonLd, createBreadcrumbJsonLd } from '@/lib/seo'
import { ParkCategory } from '@/lib/types'

type Props = { params: { slug: string } }
export function generateStaticParams() { return getAllCategories().map(c => ({ slug: c.slug })) }
export function generateMetadata({ params }: Props): Metadata {
  const cat = getCategoryBySlug(params.slug); if (!cat) return {}
  return createMetadata({ title: cat.metaTitle, description: cat.metaDescription, path: `/kategori/${cat.slug}` })
}

export default function CategoryPage({ params }: Props) {
  const cat = getCategoryBySlug(params.slug); if (!cat) notFound()
  const parks = getParksByCategory(cat.slug as ParkCategory)
  const others = getAllCategories().filter(c => c.slug !== cat.slug)
  const guides = getAllGuides().filter(g => g.slug.includes(cat.slug) || g.relatedParks.some(rp => parks.some(p => p.slug === rp)))

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(createFaqJsonLd(cat.faq)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(createBreadcrumbJsonLd([{ name: 'Forside', url: '/' }, { name: cat.name, url: `/kategori/${cat.slug}` }])) }} />
      <Breadcrumbs items={[{ label: 'Forside', href: '/' }, { label: cat.name }]} />
      <h1 className="text-2xl font-bold mb-4" style={{ color: 'var(--ink)' }}>{cat.name} i Norge</h1>
      <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--ink-light)' }}>{cat.description}</p>
      <Section>
        <div className="text-sm leading-relaxed space-y-3" style={{ color: 'var(--ink-light)' }}>
          {cat.longDescription.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </Section>
      <Section title={`${parks.length} ${cat.name.toLowerCase()}`}>
        {parks.length > 0 ? <ParkGrid>{parks.map(p => <ParkCard key={p.id} name={p.name} href={`/park/${p.slug}`} description={p.shortDescription} city={p.city} county={p.county} category={p.category} featured={p.featured} audience={p.audience} />)}</ParkGrid>
        : <p className="text-sm" style={{ color: 'var(--ink-muted)' }}>Ingen oppføringer ennå.</p>}
      </Section>
      <RelatedLinks title="Se etter by" links={getAllCities().slice(0,8).map(c => ({ label: c.name, href: `/${c.slug}` }))} />
      {guides.length > 0 && <Section title="Guider"><div className="grid gap-3 sm:grid-cols-2">{guides.map(g => <GuideLink key={g.slug} title={g.title} intro={g.intro} href={`/guide/${g.slug}`} />)}</div></Section>}
      <RelatedLinks title="Andre kategorier" links={others.map(c => ({ label: c.name, href: `/kategori/${c.slug}` }))} />
      <FAQ items={cat.faq} />
    </>
  )
}
