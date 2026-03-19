import { Metadata } from 'next'
import Link from 'next/link'
import {
  Section, CompareCard, CompareGrid, AIInsightBox, SmartInsight,
  FAQ, RelatedLinks, ChipNav, GuideCard, CityCard,
} from '@/components/UI'
import { getFeaturedParks, getAllParks, getAllCities, getAllCategories, getAllGuides, getParksByCity } from '@/lib/helpers'
import { createFaqJsonLd } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Beste fornøyelsesparker i Norge – Komplett guide og oversikt',
  description: 'Finn de beste fornøyelsesparkene, famileparkene, badelandene og aktivitetsparkene i Norge. Sammenlign parker, les guider og planlegg familieturen.',
  alternates: { canonical: '/' },
}

const homeFaq = [
  { question: 'Hva er den beste fornøyelsesparken i Norge?', answer: 'De mest populære fornøyelsesparkene i Norge er TusenFryd (størst, nær Oslo), Dyreparken i Kristiansand (mest besøkt), Hunderfossen Eventyrpark (best for barn), Kongeparken (Vestlandet) og Bø Sommarland (største vannpark).' },
  { question: 'Hvilke fornøyelsesparker passer best for barn?', answer: 'Hunderfossen Eventyrpark og Lilleputthammer ved Lillehammer er spesielt tilpasset barn. Dyreparken i Kristiansand er også svært populær blant barnefamilier med Kardemomme by og Kaptein Sabeltanns Verden.' },
  { question: 'Finnes det fornøyelsesparker som er åpne hele året?', answer: 'De fleste utendørs fornøyelsesparker har sommersesong. Innendørs badeland og lekeland er åpne hele året. Dyreparken i Kristiansand har også julåpent om vinteren.' },
  { question: 'Hva er forskjellen på en fornøyelsespark og en familiepark?', answer: 'En fornøyelsespark fokuserer på mekaniske attraksjoner og berg-og-dal-baner, mens en familiepark har et bredere tilbud med aktiviteter tilpasset alle aldre, ofte med tematisk innhold.' },
  { question: 'Hvor finner man badeland i Norge?', answer: 'Norge har badeland i de fleste større byer. De mest kjente er Bø Sommarland, Nordlandsbadet (Bodø), Aquarama (Kristiansand) og Badelandet (Bergen).' },
  { question: 'Hva koster det å besøke fornøyelsesparker i Norge?', answer: 'Prisene varierer mellom 300 og 600 kroner per person, avhengig av park og sesong. De fleste parker tilbyr billigere billetter ved nettkjøp.' },
]

export default function HomePage() {
  const featured = getFeaturedParks()
  const allParks = getAllParks()
  const allCities = getAllCities()
  const allCategories = getAllCategories()
  const allGuides = getAllGuides()

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(createFaqJsonLd(homeFaq)) }} />

      {/* Hero */}
      <header className="mb-8" style={{ animation: 'fadeUp 0.4s ease both' }}>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
          Beste fornøyelsesparker i Norge
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          Komplett oversikt over {allParks.length}+ fornøyelsesparker, familieparker, badeland og opplevelser.
          Sammenlign parker, finn den som passer din familie best, og planlegg neste tur.
        </p>
      </header>

      {/* AI Summary */}
      <div style={{ animation: 'fadeUp 0.4s ease both', animationDelay: '0.05s' }}>
        <AIInsightBox>
          <p>
            Norge har fem store fornøyelsesparker som skiller seg ut: <Link href="/park/tusenfryd" className="font-medium text-[var(--accent)] hover:underline">TusenFryd</Link> er
            landets største med over 30 attraksjoner. <Link href="/park/dyreparken-kristiansand" className="font-medium text-[var(--accent)] hover:underline">Dyreparken i Kristiansand</Link> er
            mest besøkt med nesten én million besøkende årlig. <Link href="/park/hunderfossen" className="font-medium text-[var(--accent)] hover:underline">Hunderfossen</Link> er
            best for barn, <Link href="/park/kongeparken" className="font-medium text-[var(--accent)] hover:underline">Kongeparken</Link> dekker
            Vestlandet, og <Link href="/park/bo-sommarland" className="font-medium text-[var(--accent)] hover:underline">Bø Sommarland</Link> er
            Skandinavias største vannpark. De fleste har sesong fra mai til september.
          </p>
        </AIInsightBox>
      </div>

      {/* Smart Insights */}
      <div className="mt-4 grid gap-2 sm:grid-cols-3" style={{ animation: 'fadeUp 0.4s ease both', animationDelay: '0.1s' }}>
        <SmartInsight icon="✓" text="268 registrerte aktører" detail="Fra Brønnøysundregisteret" accent="blue" />
        <SmartInsight icon="★" text="Sesong mai–september" detail="Innendørs er helårsåpne" accent="green" />
        <SmartInsight icon="↗" text="Kjøp alltid på nett" detail="Spar 10–20% på billetter" accent="amber" />
      </div>

      {/* Category filters */}
      <Section title="Utforsk etter type">
        <ChipNav items={allCategories.map((c) => ({
          label: c.name,
          href: `/kategori/${c.slug}`,
        }))} />
      </Section>

      {/* Featured parks as comparison cards */}
      <Section title="Anbefalte parker" subtitle="De mest populære og best anmeldte parkene i Norge">
        <CompareGrid>
          {featured.map((park) => (
            <CompareCard
              key={park.id}
              name={park.name}
              href={`/park/${park.slug}`}
              description={park.shortDescription}
              city={park.city}
              county={park.county}
              category={park.category}
              audience={park.audience}
              featured={park.featured}
              tags={park.tags?.slice(0, 2)}
            />
          ))}
        </CompareGrid>
      </Section>

      {/* Cities */}
      <Section title="Parker etter by" subtitle="Finn opplevelser i nærheten av deg">
        <div className="grid gap-2 sm:grid-cols-2">
          {allCities.map((city) => (
            <CityCard
              key={city.slug}
              name={city.name}
              href={`/${city.slug}`}
              parkCount={getParksByCity(city.slug).length}
            />
          ))}
        </div>
      </Section>

      {/* Guides */}
      <Section title="Guider og artikler" subtitle="Grundige gjennomganger for å finne riktig park">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {allGuides.map((guide) => (
            <GuideCard key={guide.slug} title={guide.title} intro={guide.intro} href={`/guide/${guide.slug}`} />
          ))}
        </div>
      </Section>

      {/* About */}
      <Section title="Om Fornøyelsespark.no">
        <div className="text-sm leading-relaxed space-y-3" style={{ color: 'var(--text-secondary)' }}>
          <p>
            Fornøyelsespark.no er en uavhengig guide til fornøyelsesparker, familieparker, badeland,
            vannparker og aktivitetsparker i Norge. Vi gir deg informasjonen du trenger for å finne
            riktig park for din familie – uten reklame og uten betalte anbefalinger.
          </p>
          <p>
            Alle oppføringer er basert på offentlige data fra Brønnøysundregisteret og redaksjonell
            research. Vi dekker alt fra store nasjonale attraksjoner til lokale lekeland og badeland
            i din by, med praktisk informasjon, sammenligninger og tips.
          </p>
        </div>
      </Section>

      <FAQ items={homeFaq} />

      <RelatedLinks
        title="Utforsk mer"
        links={[
          { label: 'Alle fornøyelsesparker', href: '/kategori/fornoyelsesparker' },
          { label: 'Alle familieparker', href: '/kategori/familieparker' },
          { label: 'Alle badeland', href: '/kategori/badeland' },
          { label: 'Parker i Oslo', href: '/oslo' },
          { label: 'Parker i Kristiansand', href: '/kristiansand' },
          { label: 'Parker i Lillehammer', href: '/lillehammer' },
          { label: 'Beste parker for barn', href: '/guide/fornoyelsesparker-for-barn' },
        ]}
      />
    </>
  )
}
