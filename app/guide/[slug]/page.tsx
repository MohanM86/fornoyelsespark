import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Section, FAQ, Breadcrumbs, RelatedLinks, ParkCard, ParkGrid, ChatInput } from '@/components/UI'
import { getGuideBySlug, getAllGuides, getParkBySlug } from '@/lib/helpers'
import { createMetadata, createFaqJsonLd, createBreadcrumbJsonLd, createArticleJsonLd } from '@/lib/seo'

type Props = { params: { slug: string } }
export function generateStaticParams() { return getAllGuides().map(g => ({ slug: g.slug })) }
export function generateMetadata({ params }: Props): Metadata {
  const g = getGuideBySlug(params.slug); if (!g) return {}
  return createMetadata({ title: g.metaTitle, description: g.metaDescription, path: `/guide/${g.slug}` })
}
export default function GuidePage({ params }: Props) {
  const guide = getGuideBySlug(params.slug); if (!guide) notFound()
  const parks = guide.relatedParks.map(s => getParkBySlug(s)).filter(Boolean)
  const related = guide.relatedGuides.map(s => getGuideBySlug(s)).filter(Boolean)
  return (
    <>
      {guide.faq.length > 0 && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(createFaqJsonLd(guide.faq)) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(createBreadcrumbJsonLd([{ name: 'Forside', url: '/' }, { name: 'Guider', url: '/guide/beste-fornoyelsesparker-i-norge' }, { name: guide.title, url: `/guide/${guide.slug}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(createArticleJsonLd(guide)) }} />
      <Breadcrumbs items={[{ label: 'Forside', href: '/' }, { label: 'Guider', href: '/guide/beste-fornoyelsesparker-i-norge' }, { label: guide.title }]} />
      <h1 className="text-xl font-bold mb-2" style={{ color: 'var(--ink)' }}>{guide.title}</h1>
      <p className="text-[14px] leading-relaxed mb-6" style={{ color: 'var(--ink2)' }}>{guide.intro}</p>
      <div className="rounded-xl p-4 mb-6" style={{ background: 'var(--card)', border: '1px solid var(--brd)' }}>
        <p className="text-[11px] font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--ink3)' }}>Innhold</p>
        {guide.sections.map((s, i) => <a key={i} href={`#s${i}`} className="block text-[13px] py-1 hover:underline" style={{ color: 'var(--ink2)' }}>{s.heading}</a>)}
      </div>
      {guide.sections.map((s, i) => <Section key={i} title={s.heading} id={`s${i}`}><div className="text-[13px] leading-relaxed space-y-3" style={{ color: 'var(--ink2)' }}>{s.content.split('\n\n').map((p, j) => <p key={j}>{p}</p>)}</div></Section>)}
      {parks.length > 0 && <Section title="Parker nevnt i guiden"><ParkGrid>{parks.map(p => p && <ParkCard key={p.id} name={p.name} href={`/park/${p.slug}`} description={p.shortDescription} city={p.city} category={p.category} />)}</ParkGrid></Section>}
      {related.length > 0 && <RelatedLinks title="Les også" links={related.filter(Boolean).map(g => ({ label: g!.title, href: `/guide/${g!.slug}` }))} />}
      <FAQ items={guide.faq} />
      <div className="mt-8"><ChatInput placeholder="Søk etter fornøyelsesparker..." /></div>
    </>
  )
}
