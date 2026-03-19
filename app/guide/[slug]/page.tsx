import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Section, FAQ, Breadcrumbs, RelatedLinks } from '@/components/UI'
import { getGuideBySlug, getAllGuides, getParkBySlug } from '@/lib/helpers'
import { createMetadata, createFaqJsonLd, createBreadcrumbJsonLd } from '@/lib/seo'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return getAllGuides().map((g) => ({ slug: g.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const guide = getGuideBySlug(params.slug)
  if (!guide) return {}
  return createMetadata({
    title: guide.metaTitle,
    description: guide.metaDescription,
    path: `/guide/${guide.slug}`,
  })
}

export default function GuidePage({ params }: Props) {
  const guide = getGuideBySlug(params.slug)
  if (!guide) notFound()

  const relatedParks = guide.relatedParks
    .map((slug) => getParkBySlug(slug))
    .filter(Boolean)
  const relatedGuideData = guide.relatedGuides
    .map((slug) => getGuideBySlug(slug))
    .filter(Boolean)

  const breadcrumbs = [
    { name: 'Forside', url: '/' },
    { name: 'Guider', url: '/guide/beste-fornoyelsesparker-i-norge' },
    { name: guide.title, url: `/guide/${guide.slug}` },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(createFaqJsonLd(guide.faq)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(createBreadcrumbJsonLd(breadcrumbs)) }}
      />

      <Breadcrumbs
        items={[
          { label: 'Forside', href: '/' },
          { label: 'Guider', href: '/guide/beste-fornoyelsesparker-i-norge' },
          { label: guide.title },
        ]}
      />

      <article>
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">{guide.title}</h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-600">{guide.intro}</p>
        </header>

        {/* Sections */}
        {guide.sections.map((section, i) => (
          <Section key={i} title={section.heading}>
            <div className="text-sm leading-relaxed text-gray-600 space-y-3">
              {section.content.split('\n\n').map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </div>
          </Section>
        ))}

        {/* Related parks */}
        {relatedParks.length > 0 && (
          <Section title="Parker nevnt i denne guiden">
            <div className="grid gap-3 sm:grid-cols-2">
              {relatedParks.map((park) =>
                park ? (
                  <Link
                    key={park.id}
                    href={`/park/${park.slug}`}
                    className="rounded-lg border border-gray-100 px-4 py-3 transition-colors hover:border-brand-200 hover:bg-brand-50/30"
                  >
                    <span className="text-sm font-medium text-gray-900">{park.name}</span>
                    <p className="mt-1 text-xs text-gray-500">{park.city}</p>
                  </Link>
                ) : null
              )}
            </div>
          </Section>
        )}

        {/* Related guides */}
        {relatedGuideData.length > 0 && (
          <RelatedLinks
            title="Les også"
            links={relatedGuideData
              .filter(Boolean)
              .map((g) => ({
                label: g!.title,
                href: `/guide/${g!.slug}`,
              }))}
          />
        )}

        <FAQ items={guide.faq} />
      </article>
    </>
  )
}
