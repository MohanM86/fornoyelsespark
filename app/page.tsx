import { Metadata } from 'next'
import Link from 'next/link'
import { Section, ListingCard, ListingList, FAQ, RelatedLinks } from '@/components/UI'
import { getFeaturedParks, getAllCities, getAllCategories, getAllGuides } from '@/lib/helpers'
import { createFaqJsonLd } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Beste fornøyelsesparker i Norge – Komplett guide og oversikt',
  description:
    'Finn de beste fornøyelsesparkene, famileparkene, badelandene og aktivitetsparkene i Norge. Sammenlign parker, les guider og planlegg familieturen.',
  alternates: { canonical: '/' },
}

const homeFaq = [
  {
    question: 'Hva er den beste fornøyelsesparken i Norge?',
    answer:
      'De mest populære fornøyelsesparkene i Norge er TusenFryd (størst, nær Oslo), Dyreparken i Kristiansand (mest besøkt), Hunderfossen Eventyrpark (best for barn), Kongeparken (Vestlandet) og Bø Sommarland (største vannpark).',
  },
  {
    question: 'Hvilke fornøyelsesparker passer best for barn?',
    answer:
      'Hunderfossen Eventyrpark og Lilleputthammer ved Lillehammer er spesielt tilpasset barn. Dyreparken i Kristiansand er også svært populær blant barnefamilier med Kardemomme by og Kaptein Sabeltanns Verden.',
  },
  {
    question: 'Finnes det fornøyelsesparker som er åpne hele året?',
    answer:
      'De fleste utendørs fornøyelsesparker har sommersesong. Innendørs badeland og lekeland er åpne hele året. Dyreparken i Kristiansand har også julåpent om vinteren.',
  },
  {
    question: 'Hva er forskjellen på en fornøyelsespark og en familiepark?',
    answer:
      'En fornøyelsespark fokuserer på mekaniske attraksjoner og berg-og-dal-baner, mens en familiepark har et bredere tilbud med aktiviteter tilpasset alle aldre, ofte med tematisk innhold. Mange parker er en kombinasjon av begge.',
  },
  {
    question: 'Hvor finner man badeland i Norge?',
    answer:
      'Norge har badeland i de fleste større byer. De mest kjente er Bø Sommarland (Telemark), Nordlandsbadet (Bodø), Aquarama (Kristiansand) og Badelandet (Bergen).',
  },
  {
    question: 'Hva koster det å besøke fornøyelsesparker i Norge?',
    answer:
      'Prisene varierer mellom 300 og 600 kroner per person, avhengig av park og sesong. De fleste parker tilbyr billigere billetter ved nettkjøp, og familiekort gir ytterligere rabatt.',
  },
]

export default function HomePage() {
  const featured = getFeaturedParks()
  const allCities = getAllCities()
  const allCategories = getAllCategories()
  const allGuides = getAllGuides()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(createFaqJsonLd(homeFaq)) }}
      />

      {/* Hero */}
      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Beste fornøyelsesparker i Norge
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-600">
          Velkommen til Fornøyelsespark.no – Norges mest komplette guide til fornøyelsesparker,
          familieparker, badeland og aktivitetsparker. Vi hjelper deg med å finne den beste parken
          for din familie, enten du er ute etter berg-og-dal-baner, vannrutsjebaner eller rolige
          opplevelser for de minste. Utforsk oversikten vår over parker i hele Norge, les guider og
          planlegg neste familietur.
        </p>
      </header>

      {/* Featured parks */}
      <Section title="Utvalgte fornøyelsesparker">
        <p className="mb-4 text-sm text-gray-600">
          Her er noen av de mest populære og best anmeldte fornøyelsesparkene og famileparkene i
          Norge. Klikk deg videre for å lese mer om hver enkelt park.
        </p>
        <ListingList>
          {featured.map((park) => (
            <ListingCard
              key={park.id}
              name={park.name}
              href={`/park/${park.slug}`}
              description={park.shortDescription}
              city={park.city}
              category={park.category}
              featured={park.featured}
            />
          ))}
        </ListingList>
      </Section>

      {/* Cities */}
      <Section title="Fornøyelsesparker etter by">
        <p className="mb-4 text-sm text-gray-600">
          Finn fornøyelsesparker og familieaktiviteter i nærheten av deg. Vi dekker de største byene
          og regionene i Norge.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {allCities.map((city) => (
            <Link
              key={city.slug}
              href={`/${city.slug}`}
              className="rounded-lg border border-gray-100 px-4 py-3 text-sm font-medium text-gray-900 transition-colors hover:border-brand-200 hover:bg-brand-50/30"
            >
              Fornøyelsesparker i {city.name}
              <span className="ml-1 text-gray-400">→</span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Categories */}
      <Section title="Kategorier">
        <p className="mb-4 text-sm text-gray-600">
          Utforsk ulike typer parker og opplevelser. Fra tradisjonelle fornøyelsesparker til badeland
          og naturopplevelser.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {allCategories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/kategori/${cat.slug}`}
              className="rounded-lg border border-gray-100 px-4 py-3 transition-colors hover:border-brand-200 hover:bg-brand-50/30"
            >
              <span className="text-sm font-medium text-gray-900">{cat.name}</span>
              <p className="mt-1 text-xs text-gray-500 line-clamp-2">{cat.description}</p>
            </Link>
          ))}
        </div>
      </Section>

      {/* Guides */}
      <Section title="Guider og artikler">
        <p className="mb-4 text-sm text-gray-600">
          Les våre grundige guider for å finne riktig park for familien din. Vi dekker alt fra de
          beste parkene i Norge til tips for reiser til Sverige og Danmark.
        </p>
        <div className="space-y-3">
          {allGuides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guide/${guide.slug}`}
              className="block rounded-lg border border-gray-100 px-5 py-4 transition-colors hover:border-brand-200 hover:bg-brand-50/30"
            >
              <span className="text-sm font-medium text-gray-900">{guide.title}</span>
              <p className="mt-1 text-xs text-gray-500 line-clamp-1">{guide.intro}</p>
            </Link>
          ))}
        </div>
      </Section>

      {/* About section for SEO */}
      <Section title="Om Fornøyelsespark.no">
        <div className="prose-sm text-sm leading-relaxed text-gray-600 space-y-3">
          <p>
            Fornøyelsespark.no er en uavhengig guide og oversiktstjeneste for fornøyelsesparker,
            familieparker, badeland, vannparker og aktivitetsparker i Norge. Målet vårt er å gi deg
            den informasjonen du trenger for å finne riktig park for din familie.
          </p>
          <p>
            Vi dekker alt fra store nasjonale attraksjoner som TusenFryd og Dyreparken til lokale
            lekeland og badeland i din by. Alle oppføringer inneholder praktisk informasjon,
            beskrivelser og tips for å få mest mulig ut av besøket.
          </p>
          <p>
            Norge har et overraskende rikt tilbud av fornøyelsesparker og familieopplevelser.
            Enten du bor i Oslo, Bergen, Trondheim eller Nord-Norge, finnes det gode alternativer
            for en morsom dag med familien. Vi oppdaterer siden jevnlig med ny informasjon og nye
            oppføringer.
          </p>
        </div>
      </Section>

      {/* FAQ */}
      <FAQ items={homeFaq} />

      {/* Extra internal links */}
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
