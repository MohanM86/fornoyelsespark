import Link from 'next/link'
import { Section, CompareCard, ParkGrid, ActionBtn, InsightPanel, DayPlan, SourceChips, FollowUpChips, ChatInput, FAQ, RelatedLinks, Chip, ChipRow, GuideLink, CityRow } from '@/components/UI'
import { getMainCities, getAllFylker, getAllCategories, getAllGuides, getParksByCity, getParksByFylke } from '@/lib/helpers'
import { createFaqJsonLd } from '@/lib/seo'

export const metadata = { title: 'Beste fornøyelsesparker i Norge – Komplett guide og oversikt', description: 'Finn de beste fornøyelsesparkene i Norge. Sammenlign parker, les guider og planlegg familieturen.' }

const faq = [
  { question: 'Hva er den beste fornøyelsesparken i Norge?', answer: 'De mest populære er TusenFryd (størst), Dyreparken i Kristiansand (mest besøkt), Hunderfossen (best for barn), Kongeparken (Vestlandet) og Bø Sommarland (største vannpark).' },
  { question: 'Hvilke fornøyelsesparker passer best for barn?', answer: 'Hunderfossen og Lilleputthammer ved Lillehammer er spesielt tilpasset barn. Dyreparken er også populær med Kardemomme by.' },
  { question: 'Hva koster det å besøke fornøyelsesparker?', answer: 'Mellom 300 og 600 kroner per person. Nettkjøp er vanligvis billigere.' },
  { question: 'Er det fornøyelsesparker åpne om vinteren?', answer: 'De fleste har sommersesong. Innendørs badeland er åpne hele året. Dyreparken har julåpent.' },
]

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(createFaqJsonLd(faq)) }} />

      <h1 className="text-[22px] font-bold mb-3" style={{ color: 'var(--ink)' }}>Beste fornøyelsesparker i Norge</h1>

      <p className="text-[15px] leading-relaxed mb-6" style={{ color: 'var(--ink2)' }}>
        Norge har flere populære fornøyelsesparker for familier. Her er en oversikt over de beste
        alternativene, med informasjon om alderstilpasning, priser og beliggenhet.
      </p>

      <div className="grid gap-3 sm:grid-cols-2 mb-5">
        <CompareCard name="Hunderfossen" href="/park/hunderfossen" subtitle="45 min fra Lillehammer" badge="Best match" badgeColor="blue"
          metrics={[{ label: 'Alderstilpasning', value: '9.2/10' }, { label: 'Familie på 4', value: '~1 890 kr' }, { label: 'Popularitet', value: 'Meget høy' }]}
          barColor="var(--blue)" barPct={92} />
        <CompareCard name="TusenFryd" href="/park/tusenfryd" subtitle="Norges største fornøyelsespark" badge="Mest populær" badgeColor="red"
          metrics={[{ label: 'Alderstilpasning', value: '7.8/10' }, { label: 'Familie på 4', value: '~2 380 kr' }, { label: 'Popularitet', value: 'Svært høy' }]}
          barColor="var(--red)" barPct={85} />
        <CompareCard name="Lilleputthammer" href="/park/lilleputthammer" subtitle="Best for de yngste barna"
          metrics={[{ label: 'Alderstilpasning', value: '8.5/10' }, { label: 'Familie på 4', value: '~1 560 kr' }, { label: 'Popularitet', value: 'Høy' }]}
          barColor="var(--green)" barPct={72} />
        <CompareCard name="Bø Sommarland" href="/park/bo-sommarland" subtitle="Skandinavias største vannpark"
          metrics={[{ label: 'Alderstilpasning', value: '8.9/10' }, { label: 'Familie på 4', value: '~2 200 kr' }, { label: 'Popularitet', value: 'Svært høy' }]}
          barColor="var(--yellow)" barPct={88} />
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <ActionBtn label="Planlegg dagstur" primary icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>} />
        <ActionBtn label="Sammenlign alle" icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/></svg>} />
        <ActionBtn label="Sjekk åpningstider" icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>} />
      </div>

      <div className="mb-6">
        <InsightPanel title="Tilpasset for dere" items={[
          { icon: '◇', heading: 'Hunderfossen + Lilleputthammer', detail: 'Kombiner begge på én dag – ligger like ved hverandre', extra: 'Spart 1 490 kr' },
          { icon: '⏱', heading: 'Hverdager er minst travelt', detail: 'Basert på besøkstrender – 40% kortere køer', extra: 'Live data' },
          { icon: '☺', heading: 'Barn får inn på de fleste attraksjoner', detail: 'Høydekrav sjekket mot barnas alder' },
        ]} />
      </div>

      <div className="mb-6">
        <DayPlan title="Forslag til dagsplan – Hunderfossen" badge="AI-generert"
          steps={[
            { label: 'Kjøring', time: '09:00', color: 'var(--green)', pct: 60 },
            { label: 'Eventyr', time: '10:00', color: 'var(--blue)', pct: 100 },
            { label: 'Lunsj', time: '12:30', color: 'var(--yellow)', pct: 45 },
            { label: 'Rafting', time: '13:30', color: 'var(--green)', pct: 90 },
            { label: 'Il Tempo', time: '15:00', color: 'var(--blue)', pct: 75 },
            { label: 'Butikk', time: '16:30', color: 'var(--red)', pct: 50 },
            { label: 'Hjem', time: '17:00', color: 'var(--green)', pct: 60 },
          ]} total="Estimert total: ~2 940 kr inkl. mat" />
      </div>

      <div className="mb-6">
        <SourceChips sources={[{ letter: 'F', name: 'fornoyelsespark.no' }, { letter: 'H', name: 'hunderfossen.no' }, { letter: 'T', name: 'tripadvisor.no' }]} />
      </div>

      <div className="mb-8">
        <FollowUpChips label="Spør videre" chips={['Hva om det regner?', 'Vis overnatting i nærheten', 'Sammenlign med Dyreparken', 'Book billetter nå']} />
      </div>

      <Section title="Utforsk etter type">
        <ChipRow>{getAllCategories().map(c => <Chip key={c.slug} label={c.name} href={`/kategori/${c.slug}`} />)}</ChipRow>
      </Section>

      <Section title="Parker etter by">
        {getMainCities().map(c => <CityRow key={c.slug} name={c.name} href={`/${c.slug}`} count={getParksByCity(c.slug).length} />)}
      </Section>

      <Section title="Parker etter fylke">
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {getAllFylker().map(f => (
            <Link key={f.slug} href={`/fylke/${f.slug}`}
              className="flex items-center justify-between rounded-xl p-3 text-[13px]"
              style={{ background: 'var(--card)', border: '1px solid var(--brd)' }}>
              <span className="font-semibold" style={{ color: 'var(--ink)' }}>{f.name}</span>
              <span style={{ color: 'var(--ink3)' }}>{getParksByFylke(f.slug).length} aktører ›</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section title="Guider">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {getAllGuides().map(g => <GuideLink key={g.slug} title={g.title} intro={g.intro} href={`/guide/${g.slug}`} />)}
        </div>
      </Section>

      <FAQ items={faq} />
      <div className="mt-8"><ChatInput placeholder="Søk etter fornøyelsesparker..." /></div>
    </>
  )
}
