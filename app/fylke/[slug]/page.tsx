import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Section, ParkCard, ParkGrid, FAQ, Breadcrumbs, RelatedLinks, Chip, ChipRow, ChatInput, CityRow } from '@/components/UI'
import { getFylkeBySlug, getParksByFylke, getAllFylker, getAllCities, getAllCategories } from '@/lib/helpers'
import { createMetadata, createFaqJsonLd, createBreadcrumbJsonLd } from '@/lib/seo'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return getAllFylker().map(f => ({ slug: f.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const fylke = getFylkeBySlug(params.slug)
  if (!fylke) return {}
  return createMetadata({
    title: fylke.metaTitle,
    description: fylke.metaDescription,
    path: `/fylke/${fylke.slug}`,
  })
}

export default function FylkePage({ params }: Props) {
  const fylke = getFylkeBySlug(params.slug)
  if (!fylke) notFound()

  const parks = getParksByFylke(fylke.slug)
  const otherFylker = getAllFylker().filter(f => f.slug !== fylke.slug)

  // Group parks by kommune
  const byKommune: Record<string, typeof parks> = {}
  for (const p of parks) {
    const k = p.city || 'Annet'
    if (!byKommune[k]) byKommune[k] = []
    byKommune[k].push(p)
  }
  const kommuner = Object.keys(byKommune).sort()

  const bc = [
    { name: 'Forside', url: '/' },
    { name: 'Fylker', url: '/fylke/vestland' },
    { name: fylke.name, url: `/fylke/${fylke.slug}` },
  ]

  return (
    <>
      {fylke.faq.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(createFaqJsonLd(fylke.faq)) }} />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(createBreadcrumbJsonLd(bc)) }} />

      <Breadcrumbs items={[{ label: 'Forside', href: '/' }, { label: 'Fylker' }, { label: fylke.name }]} />

      <h1 className="text-xl font-bold mb-2" style={{ color: 'var(--ink)' }}>
        Fornøyelsesparker i {fylke.name}
      </h1>
      <p className="text-[14px] leading-relaxed mb-6" style={{ color: 'var(--ink2)' }}>
        {fylke.description}
      </p>

      {/* Stats */}
      <div className="flex flex-wrap gap-3 mb-6">
        <span className="rounded-full px-4 py-2 text-[13px] font-semibold"
          style={{ background: 'var(--green-bg)', color: 'var(--green-fg)' }}>
          {parks.length} aktører
        </span>
        <span className="rounded-full px-4 py-2 text-[13px] font-semibold"
          style={{ background: 'var(--blue-bg)', color: 'var(--blue-fg)' }}>
          {kommuner.length} kommuner
        </span>
      </div>

      {/* Parks grouped by kommune */}
      {kommuner.map(kommune => (
        <Section key={kommune} title={`${kommune} (${byKommune[kommune].length})`}>
          <ParkGrid>
            {byKommune[kommune].map(p => (
              <ParkCard key={p.id} name={p.name} href={`/park/${p.slug}`}
                description={p.shortDescription} city={p.city} county={p.county}
                category={p.category} featured={p.featured} audience={p.audience} />
            ))}
          </ParkGrid>
        </Section>
      ))}

      <RelatedLinks title="Andre fylker"
        links={otherFylker.map(f => ({ label: f.name, href: `/fylke/${f.slug}` }))} />

      <RelatedLinks title="Kategorier"
        links={getAllCategories().map(c => ({ label: c.name, href: `/kategori/${c.slug}` }))} />

      <FAQ items={fylke.faq} />

      <div className="mt-8">
        <ChatInput placeholder={`Søk etter opplevelser i ${fylke.name}...`} />
      </div>
    </>
  )
}
