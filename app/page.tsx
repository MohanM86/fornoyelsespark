import Link from 'next/link'
import {
  Section, CompareCard, ParkGrid, ActionButton, InsightPanel, DayPlan,
  SourceChips, FollowUpChips, ChatInput, FAQ, RelatedLinks, Chip, ChipRow,
  GuideLink, CityRow,
} from '@/components/UI'
import { getAllParks, getAllCities, getAllCategories, getAllGuides, getParksByCity } from '@/lib/helpers'
import { createFaqJsonLd } from '@/lib/seo'

export const metadata = {
  title: 'Beste fornøyelsesparker i Norge – Komplett guide og oversikt',
  description: 'Finn de beste fornøyelsesparkene i Norge. Sammenlign parker, les guider og planlegg familieturen.',
}

const faq = [
  { question: 'Hva er den beste fornøyelsesparken i Norge?', answer: 'De mest populære er TusenFryd (størst), Dyreparken i Kristiansand (mest besøkt), Hunderfossen (best for barn), Kongeparken (Vestlandet) og Bø Sommarland (største vannpark).' },
  { question: 'Hvilke fornøyelsesparker passer best for barn?', answer: 'Hunderfossen og Lilleputthammer ved Lillehammer er spesielt tilpasset barn. Dyreparken er også svært populær med Kardemomme by.' },
  { question: 'Hva koster det å besøke fornøyelsesparker?', answer: 'Prisene varierer mellom 300 og 600 kroner per person. De fleste tilbyr billigere billetter ved nettkjøp.' },
  { question: 'Er det fornøyelsesparker åpne om vinteren?', answer: 'De fleste har sommersesong. Innendørs badeland og lekeland er åpne hele året. Dyreparken har julåpent.' },
]

export default function HomePage() {
  const cities = getAllCities()
  const categories = getAllCategories()
  const guides = getAllGuides()

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(createFaqJsonLd(faq)) }} />

      {/* AI-style intro text */}
      <p className="text-[14px] leading-relaxed mb-6" style={{ color: 'var(--txt-s)' }}>
        Norge har flere populære fornøyelsesparker for familier. Her er en oversikt over de beste
        alternativene, med praktisk informasjon om alderstilpasning, priser og beliggenhet.
      </p>

      {/* Compare cards — matching screenshot exactly */}
      <div className="grid gap-3 sm:grid-cols-2 mb-4">
        <CompareCard name="Hunderfossen" href="/park/hunderfossen" subtitle="45 min fra Lillehammer"
          badge="Best match" badgeColor="blue"
          metrics={[{ label: 'Alderstilpasning', value: '9.2/10' }, { label: 'Familie på 4', value: '~1 890 kr' }, { label: 'Popularitet', value: 'Meget høy' }]}
          barColor="var(--blue)" barWidth={92} />
        <CompareCard name="TusenFryd" href="/park/tusenfryd" subtitle="Norges største fornøyelsespark"
          badge="Mest populær" badgeColor="red"
          metrics={[{ label: 'Alderstilpasning', value: '7.8/10' }, { label: 'Familie på 4', value: '~2 380 kr' }, { label: 'Popularitet', value: 'Svært høy' }]}
          barColor="var(--red)" barWidth={85} />
        <CompareCard name="Lilleputthammer" href="/park/lilleputthammer" subtitle="Best for de yngste barna"
          metrics={[{ label: 'Alderstilpasning', value: '8.5/10' }, { label: 'Familie på 4', value: '~1 560 kr' }, { label: 'Popularitet', value: 'Høy' }]}
          barColor="var(--green)" barWidth={72} />
        <CompareCard name="Bø Sommarland" href="/park/bo-sommarland" subtitle="Skandinavias største vannpark"
          metrics={[{ label: 'Alderstilpasning', value: '8.9/10' }, { label: 'Familie på 4', value: '~2 200 kr' }, { label: 'Popularitet', value: 'Svært høy' }]}
          barColor="var(--yellow)" barWidth={88} />
      </div>

      {/* Action buttons */}
      <div className="flex flex-wrap gap-2 mb-6">
        <ActionButton label="Planlegg dagstur" primary icon="📅" />
        <ActionButton label="Sammenlign alle" icon="◇" />
        <ActionButton label="Sjekk åpningstider" icon="⏰" />
      </div>

      {/* Insight panel */}
      <div className="mb-6">
        <InsightPanel title="Tilpasset for dere" items={[
          { icon: '◇', heading: 'Hunderfossen + Lilleputthammer', detail: 'Kombiner begge på én dag – ligger like ved hverandre', extra: 'Spart 1 490 kr' },
          { icon: '⏱', heading: 'Hverdager er minst travelt', detail: 'Basert på besøkstrender – 40% kortere køer', extra: 'Live data' },
          { icon: '☺', heading: 'Barn får inn på de fleste attraksjoner', detail: 'Høydekrav sjekket mot barnas alder' },
        ]} />
      </div>

      {/* Day plan */}
      <div className="mb-6">
        <DayPlan title="Forslag til dagsplan – Hunderfossen" badge="AI-generert"
          steps={[
            { label: 'Kjøring', time: '09:00', color: 'var(--green)', height: 60 },
            { label: 'Eventyr', time: '10:00', color: 'var(--blue)', height: 100 },
            { label: 'Lunsj', time: '12:30', color: 'var(--yellow)', height: 45 },
            { label: 'Rafting', time: '13:30', color: 'var(--green)', height: 90 },
            { label: 'Il Tempo', time: '15:00', color: 'var(--blue)', height: 75 },
            { label: 'Butikk', time: '16:30', color: 'var(--red)', height: 50 },
            { label: 'Hjem', time: '17:00', color: 'var(--green)', height: 60 },
          ]}
          total="Estimert total: ~2 940 kr inkl. mat"
        />
      </div>

      {/* Sources */}
      <div className="mb-6">
        <SourceChips sources={[
          { letter: 'F', name: 'fornoyelsespark.no' },
          { letter: 'H', name: 'hunderfossen.no' },
          { letter: 'T', name: 'tripadvisor.no' },
        ]} />
      </div>

      {/* Follow up */}
      <div className="mb-8">
        <FollowUpChips label="Spør videre" chips={[
          'Hva om det regner?',
          'Vis overnatting i nærheten',
          'Sammenlign med Dyreparken',
          'Book billetter nå',
        ]} />
      </div>

      {/* Category chips */}
      <Section title="Utforsk etter type">
        <ChipRow>{categories.map(c => <Chip key={c.slug} label={c.name} href={`/kategori/${c.slug}`} />)}</ChipRow>
      </Section>

      {/* Cities */}
      <Section title="Parker etter by">
        {cities.map(c => <CityRow key={c.slug} name={c.name} href={`/${c.slug}`} count={getParksByCity(c.slug).length} />)}
      </Section>

      {/* Guides */}
      <Section title="Guider">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map(g => <GuideLink key={g.slug} title={g.title} intro={g.intro} href={`/guide/${g.slug}`} />)}
        </div>
      </Section>

      <FAQ items={faq} />

      {/* Chat input at bottom */}
      <div className="mt-8">
        <ChatInput placeholder="Søk etter fornøyelsesparker..." />
      </div>
    </>
  )
}
