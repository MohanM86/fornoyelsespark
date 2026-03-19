import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Section, AIInsightBox, FAQ, Breadcrumbs, RelatedLinks, CompareCard, CompareGrid } from '@/components/UI'
import { getGuideBySlug, getAllGuides, getParkBySlug } from '@/lib/helpers'
import { createMetadata, createFaqJsonLd, createBreadcrumbJsonLd } from '@/lib/seo'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return getAllGuides().map((g) => ({ slug: g.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const guide = getGuideBySlug(params.slug)
  if (!guide) return {}
  return createMetadata({ title: guide.metaTitle, description: guide.metaDescription, path: `/guide/${guide.slug}` })
}

export default function GuidePage({ params }: Props) {
  const guide = getGuideBySlug(params.slug)
  if (!guide) notFound()

  const relatedParks = guide.relatedParks.map((slug) => getParkBySlug(slug)).filter(Boolean)
  const relatedGuideData = guide.relatedGuides.map((slug) => getGuideBySlug(slug)).filter(Boolean)

  const breadcrumbs = [
    { name: 'Forside', url: '/' },
    { name: 'Guider', url: '/guide/beste-fornoyelsesparker-i-norge' },
    { name: guide.title, url: `/guide/${guide.slug}` },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(createFaqJsonLd(guide.faq)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(createBreadcrumbJsonLd(breadcrumbs)) }} />

      <Breadcrumbs items={[
        { label: 'Forside', href: '/' },
        { label: 'Guider', href: '/guide/beste-fornoyelsesparker-i-norge' },
        { label: guide.title },
      ]} />

      <article>
        <header className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
            {guide.title}
          </h1>
        </header>

        <AIInsightBox>
          <p>{guide.intro}</p>
        </AIInsightBox>

        {/* Table of contents */}
        <Section>
          <div className="rounded-xl p-4" style={{ background: 'var(--surface-sunken)', border: '0.5px solid var(--border)' }}>
            <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--text-tertiary)' }}>Innhold</p>
            <nav className="space-y-1">
              {guide.sections.map((s, i) => (
                <a key={i} href={`#section-${i}`}
                  className="block text-sm py-1 transition-colors hover:text-[var(--accent)]"
                  style={{ color: 'var(--text-secondary)' }}>
                  {s.heading}
                </a>
              ))}
            </nav>
          </div>
        </Section>

        {/* Sections */}
        {guide.sections.map((section, i) => (
          <Section key={i} title={section.heading} id={`section-${i}`}>
            <div className="text-sm leading-relaxed space-y-3" style={{ color: 'var(--text-secondary)' }}>
              {section.content.split('\n\n').map((p, j) => <p key={j}>{p}</p>)}
            </div>
          </Section>
        ))}

        {/* Related parks */}
        {relatedParks.length > 0 && (
          <Section title="Parker nevnt i denne guiden">
            <CompareGrid>
              {relatedParks.map((park) => park && (
                <CompareCard key={park.id} name={park.name} href={`/park/${park.slug}`}
                  description={park.shortDescription} city={park.city} category={park.category}
                  tags={park.tags?.slice(0, 2)} />
              ))}
            </CompareGrid>
          </Section>
        )}

        {/* Related guides */}
        {relatedGuideData.length > 0 && (
          <RelatedLinks title="Les også"
            links={relatedGuideData.filter(Boolean).map((g) => ({
              label: g!.title, href: `/guide/${g!.slug}`,
            }))} />
        )}

        <FAQ items={guide.faq} />
      </article>
    </>
  )
}
