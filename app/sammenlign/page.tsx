import Link from 'next/link'
import { Metadata } from 'next'
import { Section, CompareCard, InsightPanel, FAQ, Breadcrumbs, RelatedLinks, SourceChips, FollowUpChips, ChatInput } from '@/components/UI'
import { createMetadata, createFaqJsonLd, createBreadcrumbJsonLd } from '@/lib/seo'

export const metadata: Metadata = createMetadata({
  title: 'Sammenlign fornøyelsesparker i Norge – Priser, attraksjoner og vurdering',
  description: 'Sammenlign de beste fornøyelsesparkene i Norge side om side. TusenFryd, Dyreparken, Hunderfossen, Kongeparken og Bø Sommarland – priser, alderstilpasning og vurdering.',
  path: '/sammenlign',
})

const faq = [
  { question: 'Hvilken fornøyelsespark er billigst i Norge?', answer: 'Lilleputthammer er vanligvis rimeligst med rundt 390 kr per voksen. Hunderfossen ligger på ca. 475 kr. TusenFryd og Dyreparken er dyrere med 500–600 kr. Nettkjøp gir alltid rabatt.' },
  { question: 'Hvilken park har flest attraksjoner?', answer: 'TusenFryd har over 30 attraksjoner og er størst på mekaniske rides. Hunderfossen har over 60 aktiviteter, men mange er interaktive opplevelser heller enn klassiske attraksjoner.' },
  { question: 'Hvilken park er best for tenåringer?', answer: 'TusenFryd er klart best for tenåringer med sine intense berg-og-dal-baner som SpeedMonster og ThunderCoaster. Bø Sommarland er også populært med sine ville vannrutsjebaner.' },
  { question: 'Kan man besøke to parker på én dag?', answer: 'Hunderfossen og Lilleputthammer ligger like ved hverandre og kan kombineres. De andre store parkene krever hver sin dag.' },
]

export default function SammenlignPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(createFaqJsonLd(faq)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(createBreadcrumbJsonLd([
        { name: 'Forside', url: '/' },
        { name: 'Sammenlign parker', url: '/sammenlign' },
      ])) }} />

      <Breadcrumbs items={[{ label: 'Forside', href: '/' }, { label: 'Sammenlign parker' }]} />

      <h1 className="text-[22px] font-bold mb-3" style={{ color: 'var(--ink)' }}>Sammenlign fornøyelsesparker i Norge</h1>

      <p className="text-[15px] leading-relaxed mb-6" style={{ color: 'var(--ink2)' }}>
        Her er en sammenligning av Norges fem største fornøyelsesparker, vurdert på alderstilpasning,
        pris, antall attraksjoner og samlet opplevelse. Velg den parken som passer best for din familie.
      </p>

      {/* Best for each use case */}
      <div className="mb-6">
        <InsightPanel title="Rask anbefaling" items={[
          { icon: '👶', heading: 'Best for småbarn (2–5 år)', detail: 'Lilleputthammer – rolig tempo, trygt, tilpasset de minste', extra: '~390 kr' },
          { icon: '👦', heading: 'Best for barn (5–12 år)', detail: 'Hunderfossen – interaktive eventyr, trollslottet, mye å utforske', extra: '~475 kr' },
          { icon: '🎢', heading: 'Best for ungdom (12+ år)', detail: 'TusenFryd – SpeedMonster, ThunderCoaster, BadeFryd', extra: '~595 kr' },
          { icon: '👨‍👩‍👧‍👦', heading: 'Best totalpakke for familien', detail: 'Dyreparken – dyr, Kardemomme by, Sabeltann, badeland. Noe for alle.', extra: '~550 kr' },
          { icon: '🌊', heading: 'Best for vannelskere', detail: 'Bø Sommarland – 100+ vannattraksjoner, Norges desidert største', extra: '~550 kr' },
        ]} />
      </div>

      {/* Compare cards */}
      <Section title="De fem store – side om side">
        <div className="grid gap-3 sm:grid-cols-2">
          <CompareCard name="TusenFryd" href="/park/tusenfryd" subtitle="Vinterbro, Akershus" badge="Størst" badgeColor="red"
            metrics={[
              { label: 'Alderstilpasning', value: '7.8/10' },
              { label: 'Familie på 4', value: '~2 380 kr' },
              { label: 'Attraksjoner', value: '30+' },
              { label: 'Beste for', value: 'Ungdom/voksne' },
            ]}
            barColor="var(--red)" barPct={85} />

          <CompareCard name="Dyreparken" href="/park/dyreparken-kristiansand" subtitle="Kristiansand, Agder" badge="Mest besøkt" badgeColor="green"
            metrics={[
              { label: 'Alderstilpasning', value: '9.0/10' },
              { label: 'Familie på 4', value: '~2 600 kr' },
              { label: 'Attraksjoner', value: 'Dyrehage + park' },
              { label: 'Beste for', value: 'Hele familien' },
            ]}
            barColor="var(--green)" barPct={95} />

          <CompareCard name="Hunderfossen" href="/park/hunderfossen" subtitle="Lillehammer, Innlandet" badge="Best match" badgeColor="blue"
            metrics={[
              { label: 'Alderstilpasning', value: '9.2/10' },
              { label: 'Familie på 4', value: '~1 890 kr' },
              { label: 'Attraksjoner', value: '60+' },
              { label: 'Beste for', value: 'Barn 3–12 år' },
            ]}
            barColor="var(--blue)" barPct={92} />

          <CompareCard name="Kongeparken" href="/park/kongeparken" subtitle="Ålgård, Rogaland" badge="Vestlandet" badgeColor="yellow"
            metrics={[
              { label: 'Alderstilpasning', value: '8.5/10' },
              { label: 'Familie på 4', value: '~2 100 kr' },
              { label: 'Attraksjoner', value: '20+' },
              { label: 'Beste for', value: 'Familier alle aldre' },
            ]}
            barColor="var(--yellow)" barPct={78} />

          <CompareCard name="Bø Sommarland" href="/park/bo-sommarland" subtitle="Bø, Telemark" badge="Vannpark" badgeColor="blue"
            metrics={[
              { label: 'Alderstilpasning', value: '8.9/10' },
              { label: 'Familie på 4', value: '~2 200 kr' },
              { label: 'Attraksjoner', value: '100+ vann' },
              { label: 'Beste for', value: 'Vannelskere' },
            ]}
            barColor="var(--blue)" barPct={88} />

          <CompareCard name="Lilleputthammer" href="/park/lilleputthammer" subtitle="Lillehammer, Innlandet" badge="Småbarn" badgeColor="green"
            metrics={[
              { label: 'Alderstilpasning', value: '8.5/10' },
              { label: 'Familie på 4', value: '~1 560 kr' },
              { label: 'Attraksjoner', value: '15+' },
              { label: 'Beste for', value: 'Barn 2–8 år' },
            ]}
            barColor="var(--green)" barPct={72} />
        </div>
      </Section>

      {/* Detailed comparison table as cards */}
      <Section title="Pris per person (voksen, dørpris)">
        <div className="rounded-xl overflow-hidden" style={{ background: 'var(--card)', border: '1px solid var(--brd)' }}>
          {[
            { name: 'Lilleputthammer', price: '~390 kr', pct: 45 },
            { name: 'Hunderfossen', price: '~475 kr', pct: 55 },
            { name: 'Kongeparken', price: '~525 kr', pct: 65 },
            { name: 'Bø Sommarland', price: '~550 kr', pct: 70 },
            { name: 'Dyreparken', price: '~550 kr', pct: 70 },
            { name: 'TusenFryd', price: '~595 kr', pct: 80 },
          ].map((p, i) => (
            <div key={p.name} className="flex items-center gap-4 px-4 py-3" style={{ borderTop: i > 0 ? '1px solid var(--brd)' : 'none' }}>
              <span className="text-[13px] font-semibold w-36" style={{ color: 'var(--ink)' }}>{p.name}</span>
              <div className="flex-1 h-[6px] rounded-full" style={{ background: 'var(--brd)' }}>
                <div className="h-full rounded-full" style={{ width: `${p.pct}%`, background: 'var(--blue)' }} />
              </div>
              <span className="text-[13px] font-semibold w-20 text-right" style={{ color: 'var(--ink)' }}>{p.price}</span>
            </div>
          ))}
          <div className="px-4 py-2 text-[11px]" style={{ borderTop: '1px solid var(--brd)', color: 'var(--ink3)' }}>
            Priser er veiledende og kan variere. Nettkjøp gir vanligvis 10–20% rabatt.
          </div>
        </div>
      </Section>

      <Section title="Sesong og åpningstider">
        <div className="rounded-xl overflow-hidden" style={{ background: 'var(--card)', border: '1px solid var(--brd)' }}>
          {[
            { name: 'TusenFryd', season: 'Mai – oktober', note: 'Halloween i sept/okt' },
            { name: 'Dyreparken', season: 'Hele året', note: 'Julåpent i desember' },
            { name: 'Hunderfossen', season: 'Juni – august', note: 'Utvidede helger i mai/sept' },
            { name: 'Kongeparken', season: 'Mai – september', note: 'Varierer etter år' },
            { name: 'Bø Sommarland', season: 'Juni – august (ute)', note: 'BadeLandet helår' },
            { name: 'Lilleputthammer', season: 'Juni – august', note: 'Følger Hunderfossen' },
          ].map((p, i) => (
            <div key={p.name} className="flex items-center justify-between px-4 py-3" style={{ borderTop: i > 0 ? '1px solid var(--brd)' : 'none' }}>
              <span className="text-[13px] font-semibold" style={{ color: 'var(--ink)' }}>{p.name}</span>
              <div className="text-right">
                <span className="text-[13px]" style={{ color: 'var(--ink2)' }}>{p.season}</span>
                <span className="text-[11px] ml-2" style={{ color: 'var(--ink3)' }}>{p.note}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Avstand fra storbyer">
        <div className="rounded-xl overflow-hidden" style={{ background: 'var(--card)', border: '1px solid var(--brd)' }}>
          {[
            { park: 'TusenFryd', oslo: '20 min', bergen: '7 t', trondheim: '5.5 t', stavanger: '6 t' },
            { park: 'Hunderfossen', oslo: '2.5 t', bergen: '7 t', trondheim: '4 t', stavanger: '7.5 t' },
            { park: 'Dyreparken', oslo: '3.5 t', bergen: '5.5 t', trondheim: '8 t', stavanger: '4 t' },
            { park: 'Kongeparken', oslo: '6 t', bergen: '4.5 t', trondheim: '10 t', stavanger: '30 min' },
            { park: 'Bø Sommarland', oslo: '2 t', bergen: '7 t', trondheim: '6 t', stavanger: '5 t' },
          ].map((p, i) => (
            <div key={p.park} className="grid grid-cols-5 gap-2 px-4 py-3 text-[12px]" style={{ borderTop: i > 0 ? '1px solid var(--brd)' : 'none' }}>
              <span className="font-semibold text-[13px]" style={{ color: 'var(--ink)' }}>{p.park}</span>
              <span style={{ color: 'var(--ink2)' }}>Oslo: {p.oslo}</span>
              <span style={{ color: 'var(--ink2)' }}>Bergen: {p.bergen}</span>
              <span style={{ color: 'var(--ink2)' }}>Tr.heim: {p.trondheim}</span>
              <span style={{ color: 'var(--ink2)' }}>Stavanger: {p.stavanger}</span>
            </div>
          ))}
        </div>
      </Section>

      <div className="mb-6">
        <SourceChips sources={[{ letter: 'F', name: 'fornoyelsespark.no' }, { letter: 'P', name: 'Parkenes nettsider' }, { letter: 'G', name: 'Google Maps' }]} />
      </div>

      <div className="mb-8">
        <FollowUpChips label="Utforsk videre" chips={['Planlegg dagstur', 'Sjekk åpningstider', 'Parker for barn', 'Badeland i Norge']} />
      </div>

      <RelatedLinks title="Relevante guider" links={[
        { label: 'Beste fornøyelsesparker', href: '/guide/beste-fornoyelsesparker-i-norge' },
        { label: 'Parker for barn', href: '/guide/fornoyelsesparker-for-barn' },
        { label: 'Familieparker', href: '/guide/familieparker-i-norge' },
      ]} />

      <FAQ items={faq} />
      <div className="mt-8"><ChatInput placeholder="Søk etter fornøyelsesparker..." /></div>
    </>
  )
}
