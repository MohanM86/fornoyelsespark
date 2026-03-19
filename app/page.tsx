import { Metadata } from 'next'
import Link from 'next/link'
import { Section, ParkCard, ParkGrid, InfoBox, FAQ, RelatedLinks, Chip, ChipRow, GuideLink, CityRow } from '@/components/UI'
import { getFeaturedParks, getAllParks, getAllCities, getAllCategories, getAllGuides, getParksByCity } from '@/lib/helpers'
import { createFaqJsonLd } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Beste fornøyelsesparker i Norge – Komplett guide og oversikt',
  description: 'Finn de beste fornøyelsesparkene, famileparkene, badelandene og aktivitetsparkene i Norge. Sammenlign parker, les guider og planlegg familieturen.',
  alternates: { canonical: '/' },
}

const homeFaq = [
  { question: 'Hva er den beste fornøyelsesparken i Norge?', answer: 'De mest populære er TusenFryd (størst), Dyreparken i Kristiansand (mest besøkt), Hunderfossen (best for barn), Kongeparken (Vestlandet) og Bø Sommarland (største vannpark).' },
  { question: 'Hvilke fornøyelsesparker passer best for barn?', answer: 'Hunderfossen Eventyrpark og Lilleputthammer ved Lillehammer er spesielt tilpasset barn. Dyreparken er også svært populær med Kardemomme by og Kaptein Sabeltanns Verden.' },
  { question: 'Finnes det fornøyelsesparker åpne hele året?', answer: 'De fleste utendørs fornøyelsesparker har sommersesong. Innendørs badeland og lekeland er åpne hele året. Dyreparken har julåpent.' },
  { question: 'Hva er forskjellen på fornøyelsespark og familiepark?', answer: 'En fornøyelsespark fokuserer på mekaniske attraksjoner og berg-og-dal-baner. En familiepark har bredere tilbud tilpasset alle aldre, ofte med tematisk innhold.' },
  { question: 'Hvor finner man badeland i Norge?', answer: 'De mest kjente er Bø Sommarland, Nordlandsbadet (Bodø), Aquarama (Kristiansand) og Badelandet (Bergen).' },
  { question: 'Hva koster det å besøke fornøyelsesparker i Norge?', answer: 'Prisene varierer mellom 300 og 600 kroner per person. De fleste tilbyr billigere billetter ved nettkjøp.' },
]

export default function HomePage() {
  const featured = getFeaturedParks()
  const allCities = getAllCities()
  const allCategories = getAllCategories()
  const allGuides = getAllGuides()

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(createFaqJsonLd(homeFaq)) }} />

      <header className="mb-8">
        <h1 className="text-2xl font-bold" style={{ color: 'var(--ink)' }}>Beste fornøyelsesparker i Norge</h1>
        <p className="mt-3 text-sm leading-relaxed max-w-2xl" style={{ color: 'var(--ink-light)' }}>
          Komplett oversikt over fornøyelsesparker, familieparker, badeland og opplevelser i hele Norge.
          Sammenlign parker, les guider og planlegg neste familietur.
        </p>
      </header>

      {/* Insight boxes matching screenshot colored bars */}
      <div className="grid gap-2 sm:grid-cols-3">
        <InfoBox color="green" label="268 registrerte aktører" detail="Verifisert fra Brønnøysundregisteret" />
        <InfoBox color="yellow" label="Sesong mai – september" detail="Innendørs badeland er helårsåpne" />
        <InfoBox color="blue" label="Kjøp billetter på nett" detail="Spar 10–20% sammenlignet med dørpris" />
      </div>

      {/* Category chips */}
      <Section title="Utforsk etter type">
        <ChipRow>
          {allCategories.map(c => <Chip key={c.slug} label={c.name} href={`/kategori/${c.slug}`} />)}
        </ChipRow>
      </Section>

      {/* Featured parks */}
      <Section title="Anbefalte parker">
        <ParkGrid>
          {featured.map(p => (
            <ParkCard key={p.id} name={p.name} href={`/park/${p.slug}`} description={p.shortDescription}
              city={p.city} county={p.county} category={p.category} featured={p.featured}
              audience={p.audience} tags={p.tags?.slice(0,2)} />
          ))}
        </ParkGrid>
      </Section>

      {/* Cities */}
      <Section title="Parker etter by">
        <div>
          {allCities.map(c => <CityRow key={c.slug} name={c.name} href={`/${c.slug}`} count={getParksByCity(c.slug).length} />)}
        </div>
      </Section>

      {/* Guides */}
      <Section title="Guider">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {allGuides.map(g => <GuideLink key={g.slug} title={g.title} intro={g.intro} href={`/guide/${g.slug}`} />)}
        </div>
      </Section>

      {/* About */}
      <Section title="Om Fornøyelsespark.no">
        <div className="text-sm leading-relaxed space-y-3" style={{ color: 'var(--ink-light)' }}>
          <p>Fornøyelsespark.no er en uavhengig guide til fornøyelsesparker, familieparker, badeland, vannparker og aktivitetsparker i Norge. Alle oppføringer er basert på offentlige data fra Brønnøysundregisteret og redaksjonell research.</p>
        </div>
      </Section>

      <FAQ items={homeFaq} />
      <RelatedLinks title="Utforsk mer" links={[
        { label: 'Alle fornøyelsesparker', href: '/kategori/fornoyelsesparker' },
        { label: 'Alle familieparker', href: '/kategori/familieparker' },
        { label: 'Alle badeland', href: '/kategori/badeland' },
        { label: 'Parker i Oslo', href: '/oslo' },
        { label: 'Beste for barn', href: '/guide/fornoyelsesparker-for-barn' },
      ]} />
    </>
  )
}
