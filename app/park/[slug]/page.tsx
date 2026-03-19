import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Section, FAQ, Breadcrumbs, RelatedLinks } from '@/components/UI'
import {
  getParkBySlug,
  getAllParks,
  getRelatedParks,
  getRelatedGuides,
  getCityBySlug,
} from '@/lib/helpers'
import { createMetadata, createParkJsonLd, createFaqJsonLd, createBreadcrumbJsonLd } from '@/lib/seo'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return getAllParks().map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const park = getParkBySlug(params.slug)
  if (!park) return {}
  return createMetadata({
    title: `${park.name} – Informasjon, tips og praktisk guide`,
    description: park.shortDescription,
    path: `/park/${park.slug}`,
  })
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(createParkJsonLd(park)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(createFaqJsonLd(park.faq)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(createBreadcrumbJsonLd(breadcrumbs)) }}
      />

      <Breadcrumbs
        items={[
          { label: 'Forside', href: '/' },
          ...(city ? [{ label: city.name, href: `/${city.slug}` }] : []),
          { label: park.name },
        ]}
      />

      <article>
        <header className="mb-8">
          {park.featured && (
            <span className="mb-2 inline-block rounded-full bg-brand-100 px-2.5 py-0.5 text-xs font-medium text-brand-800">
              Anbefalt
            </span>
          )}
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">{park.name}</h1>
          <p className="mt-3 text-sm leading-relaxed text-gray-600">{park.shortDescription}</p>

          {/* Quick facts */}
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
            <div>
              <span className="font-medium text-gray-800">Sted:</span>{' '}
              {city ? (
                <Link href={`/${city.slug}`} className="text-brand-700 hover:underline">
                  {park.city}
                </Link>
              ) : (
                park.city
              )}
              {park.county && `, ${park.county}`}
            </div>
            <div>
              <span className="font-medium text-gray-800">Type:</span>{' '}
              <Link
                href={`/kategori/${park.category}`}
                className="capitalize text-brand-700 hover:underline"
              >
                {park.category.replace(/-/g, ' ')}
              </Link>
            </div>
          </div>
        </header>

        {/* Description */}
        <Section title={`Om ${park.name}`}>
          <div className="text-sm leading-relaxed text-gray-600 space-y-3">
            {park.description.split('\n\n').map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Section>

        {/* Audience */}
        {park.audience.length > 0 && (
          <Section title="Hvem passer det for?">
            <div className="flex flex-wrap gap-2">
              {park.audience.map((a) => (
                <span
                  key={a}
                  className="rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-700"
                >
                  {a}
                </span>
              ))}
            </div>
          </Section>
        )}

        {/* Address */}
        {park.address && (
          <Section title="Adresse og beliggenhet">
            <p className="text-sm text-gray-600">{park.address}</p>
            {city && (
              <p className="mt-2 text-sm text-gray-600">
                Se alle{' '}
                <Link href={`/${city.slug}`} className="text-brand-700 hover:underline">
                  fornøyelsesparker i {city.name}
                </Link>
                .
              </p>
            )}
          </Section>
        )}

        {/* Tips */}
        {park.tips.length > 0 && (
          <Section title={`Tips før du besøker ${park.name}`}>
            <ul className="space-y-2">
              {park.tips.map((tip, i) => (
                <li key={i} className="flex gap-2 text-sm text-gray-600">
                  <span className="mt-0.5 flex-shrink-0 text-brand-600">✓</span>
                  {tip}
                </li>
              ))}
            </ul>
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

        {/* Related parks */}
        {related.length > 0 && (
          <Section title="Lignende parker og opplevelser">
            <div className="grid gap-3 sm:grid-cols-2">
              {related.map((r) => (
                <Link
                  key={r.id}
                  href={`/park/${r.slug}`}
                  className="rounded-lg border border-gray-100 px-4 py-3 transition-colors hover:border-brand-200 hover:bg-brand-50/30"
                >
                  <span className="text-sm font-medium text-gray-900">{r.name}</span>
                  <p className="mt-1 text-xs text-gray-500 line-clamp-2">
                    {r.shortDescription}
                  </p>
                </Link>
              ))}
            </div>
          </Section>
        )}

        {/* Related guides */}
        {relatedGuides.length > 0 && (
          <Section title="Relevante guider">
            <div className="space-y-2">
              {relatedGuides.map((g) => (
                <Link
                  key={g.slug}
                  href={`/guide/${g.slug}`}
                  className="block rounded-lg border border-gray-100 px-4 py-3 text-sm font-medium text-gray-900 hover:border-brand-200 hover:bg-brand-50/30 transition-colors"
                >
                  {g.title} <span className="text-gray-400">→</span>
                </Link>
              ))}
            </div>
          </Section>
        )}

        <FAQ items={park.faq} />
      </article>
    </>
  )
}
