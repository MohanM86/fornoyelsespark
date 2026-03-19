import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Section, FAQ, Breadcrumbs, RelatedLinks, ParkCard, ParkGrid } from '@/components/UI'
import { getGuideBySlug, getAllGuides, getParkBySlug } from '@/lib/helpers'
import { createMetadata, createFaqJsonLd, createBreadcrumbJsonLd } from '@/lib/seo'

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
  const bc = [{ name: 'Forside', url: '/' }, { name: 'Guider', url: '/guide/beste-fornoyelsesparker-i-norge' }, { name: guide.title, url: `/guide/${guide.slug}` }]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(createFaqJsonLd(guide.faq)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(createBreadcrumbJsonLd(bc)) }} />
      <Breadcrumbs items={[{ label: 'Forside', href: '/' }, { label: 'Guider', href: '/guide/beste-fornoyelsesparker-i-norge' }, { label: guide.title }]} />

      <article>
        <h1 className="text-2xl font-bold mb-4" style={{ color: 'var(--ink)' }}>{guide.title}</h1>
        <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--ink-light)' }}>{guide.intro}</p>

        {/* TOC */}
        <div className="rounded-xl p-4 mb-6" style={{ background: 'var(--cream-dark)', border: '1px solid var(--border)' }}>
          <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--ink-muted)' }}>Innhold</p>
          {guide.sections.map((s, i) => (
            <a key={i} href={`#s${i}`} className="block text-sm py-1 hover:underline" style={{ color: 'var(--ink-light)' }}>{s.heading}</a>
          ))}
        </div>

        {guide.sections.map((s, i) => (
          <Section key={i} title={s.heading} id={`s${i}`}>
            <div className="text-sm leading-relaxed space-y-3" style={{ color: 'var(--ink-light)' }}>
              {s.content.split('\n\n').map((p, j) => <p key={j}>{p}</p>)}
            </div>
          </Section>
        ))}

        {parks.length > 0 && (
          <Section title="Parker nevnt i guiden">
            <ParkGrid>{parks.map(p => p && <ParkCard key={p.id} name={p.name} href={`/park/${p.slug}`} description={p.shortDescription} city={p.city} category={p.category} />)}</ParkGrid>
          </Section>
        )}

        {related.length > 0 && <RelatedLinks title="Les også" links={related.filter(Boolean).map(g => ({ label: g!.title, href: `/guide/${g!.slug}` }))} />}
        <FAQ items={guide.faq} />
      </article>
    </>
  )
}
