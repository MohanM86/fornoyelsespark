import Link from 'next/link'
import { Metadata } from 'next'
import { Section, InsightPanel, FAQ, Breadcrumbs, RelatedLinks, SourceChips, FollowUpChips, ChatInput } from '@/components/UI'
import { createMetadata, createFaqJsonLd, createBreadcrumbJsonLd } from '@/lib/seo'

export const metadata: Metadata = createMetadata({
  title: 'Åpningstider fornøyelsesparker i Norge 2025 – Sesong og priser',
  description: 'Oversikt over åpningstider og sesong for fornøyelsesparker i Norge. TusenFryd, Dyreparken, Hunderfossen, Kongeparken og Bø Sommarland – når er de åpne?',
  path: '/apningstider',
})

const faq = [
  { question: 'Når åpner fornøyelsesparkene i Norge?', answer: 'De fleste norske fornøyelsesparker åpner i mai eller juni. TusenFryd åpner vanligvis i mai, mens Hunderfossen og Bø Sommarland åpner i juni. Dyreparken er åpen hele året.' },
  { question: 'Hvilke fornøyelsesparker er åpne om vinteren?', answer: 'Dyreparken i Kristiansand har julåpent. Innendørs badeland som Bø Sommarland BadeLandet, Nordlandsbadet og Aquarama er åpne hele året. De fleste utendørsparker stenger i september/oktober.' },
  { question: 'Har fornøyelsesparkene åpent i høstferien?', answer: 'TusenFryd har vanligvis Halloween-sesong i høstferien (oktober). Dyreparken har ofte åpent i høstferien. Sjekk alltid parkenes egne nettsider for oppdaterte åpningstider.' },
  { question: 'Hvilken tid på dagen bør man besøke?', answer: 'Kom til parkåpning (vanligvis kl. 10) for kortest køer. De fleste parker er mest travle mellom 12:00 og 15:00. Siste par timene før stenging er ofte roligere igjen.' },
]

type ParkSeason = {
  name: string
  href: string
  months: boolean[] // 12 months, true = open
  notes: string
  indoor: boolean
  winterOpen: boolean
  price: string
}

const parkSeasons: ParkSeason[] = [
  {
    name: 'TusenFryd',
    href: '/park/tusenfryd',
    months: [false, false, false, false, true, true, true, true, true, true, false, false],
    notes: 'Mai–oktober. Halloween-sesong sept/okt. Utvidede helger i mai.',
    indoor: false,
    winterOpen: false,
    price: '~595 kr',
  },
  {
    name: 'Dyreparken',
    href: '/park/dyreparken-kristiansand',
    months: [true, false, false, false, true, true, true, true, true, false, false, true],
    notes: 'Hovedsesong mai–sept. Julåpent i desember. Helgeåpent vår/høst.',
    indoor: false,
    winterOpen: true,
    price: '~550 kr',
  },
  {
    name: 'Hunderfossen',
    href: '/park/hunderfossen',
    months: [false, false, false, false, false, true, true, true, false, false, false, false],
    notes: 'Juni–august. Utvidede helger i mai og september.',
    indoor: false,
    winterOpen: false,
    price: '~475 kr',
  },
  {
    name: 'Kongeparken',
    href: '/park/kongeparken',
    months: [false, false, false, false, true, true, true, true, true, false, false, false],
    notes: 'Mai–september. Varierer noe fra år til år.',
    indoor: false,
    winterOpen: false,
    price: '~525 kr',
  },
  {
    name: 'Bø Sommarland',
    href: '/park/bo-sommarland',
    months: [false, false, false, false, false, true, true, true, false, false, false, false],
    notes: 'Utendørs: juni–august. BadeLandet innendørs: hele året.',
    indoor: true,
    winterOpen: true,
    price: '~550 kr',
  },
  {
    name: 'Lilleputthammer',
    href: '/park/lilleputthammer',
    months: [false, false, false, false, false, true, true, true, false, false, false, false],
    notes: 'Juni–august. Følger omtrent samme sesong som Hunderfossen.',
    indoor: false,
    winterOpen: false,
    price: '~390 kr',
  },
]

const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Des']

export default function ApningstiderPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(createFaqJsonLd(faq)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(createBreadcrumbJsonLd([
        { name: 'Forside', url: '/' },
        { name: 'Åpningstider', url: '/apningstider' },
      ])) }} />

      <Breadcrumbs items={[{ label: 'Forside', href: '/' }, { label: 'Åpningstider' }]} />

      <h1 className="text-[22px] font-bold mb-3" style={{ color: 'var(--ink)' }}>Åpningstider for fornøyelsesparker i Norge</h1>

      <p className="text-[15px] leading-relaxed mb-6" style={{ color: 'var(--ink2)' }}>
        De fleste norske fornøyelsesparker har sommersesong fra mai/juni til august/september.
        Her er en komplett oversikt over åpningstider, sesong og priser for de største parkene.
      </p>

      <div className="mb-6">
        <InsightPanel title="Nøkkelpunkter" items={[
          { icon: '☀️', heading: 'Hovedsesong: juni–august', detail: 'Alle store utendørsparker er åpne. Lengst åpningstider og flest attraksjoner i drift.' },
          { icon: '🏊', heading: 'Helårstilbud finnes', detail: 'Innendørs badeland som Bø Sommarland BadeLandet, Nordlandsbadet og Aquarama er åpne hele året.' },
          { icon: '🎃', heading: 'Spesialsesonger', detail: 'TusenFryd har Halloween (okt), Dyreparken har jul (des). Sjekk parkenes nettsider.' },
        ]} />
      </div>

      {/* Season calendar visualization */}
      <Section title="Sesongkalender">
        <div className="rounded-xl overflow-hidden" style={{ background: 'var(--card)', border: '1px solid var(--brd)' }}>
          {/* Header */}
          <div className="grid gap-0 px-4 py-3" style={{ gridTemplateColumns: '140px repeat(12, 1fr)', borderBottom: '1px solid var(--brd)' }}>
            <span className="text-[11px] font-semibold" style={{ color: 'var(--ink3)' }}>Park</span>
            {monthLabels.map(m => (
              <span key={m} className="text-[10px] text-center font-semibold" style={{ color: 'var(--ink3)' }}>{m}</span>
            ))}
          </div>

          {/* Park rows */}
          {parkSeasons.map((park, i) => (
            <div key={park.name}>
              <div className="grid gap-0 px-4 py-3 items-center" style={{ gridTemplateColumns: '140px repeat(12, 1fr)', borderTop: i > 0 ? '1px solid var(--brd)' : 'none' }}>
                <Link href={park.href} className="text-[12px] font-semibold hover:underline" style={{ color: 'var(--blue)' }}>
                  {park.name}
                </Link>
                {park.months.map((open, mi) => (
                  <div key={mi} className="flex justify-center">
                    <div className="w-5 h-5 rounded-sm" style={{
                      background: open ? 'var(--green)' : 'var(--brd)',
                      opacity: open ? 1 : 0.4,
                    }} />
                  </div>
                ))}
              </div>
              <div className="px-4 pb-2 -mt-1">
                <span className="text-[11px]" style={{ color: 'var(--ink3)' }}>{park.notes}</span>
              </div>
            </div>
          ))}

          <div className="flex items-center gap-4 px-4 py-2 text-[11px]" style={{ borderTop: '1px solid var(--brd)', color: 'var(--ink3)' }}>
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-sm inline-block" style={{ background: 'var(--green)' }} /> Åpen</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-sm inline-block" style={{ background: 'var(--brd)' }} /> Stengt</span>
            <span>· Sjekk alltid parkenes nettsider for nøyaktige datoer</span>
          </div>
        </div>
      </Section>

      {/* Helårstilbud */}
      <Section title="Åpent hele året">
        <p className="text-[13px] leading-relaxed mb-4" style={{ color: 'var(--ink2)' }}>
          Disse attraksjonene er åpne hele året og er gode alternativer utenfor sommersesongen:
        </p>
        <div className="rounded-xl overflow-hidden" style={{ background: 'var(--card)', border: '1px solid var(--brd)' }}>
          {[
            { name: 'Bø Sommarland BadeLandet', href: '/park/bo-sommarland', desc: 'Innendørs tropisk badeland i Bø, Telemark', type: 'Badeland' },
            { name: 'Nordlandsbadet', href: '/park/nordlandsbadet', desc: 'Nord-Norges største badeland i Bodø', type: 'Badeland' },
            { name: 'Aquarama Bad', href: '/park/aquarama-kristiansand', desc: 'Moderne badeanlegg i Kristiansand', type: 'Badeland' },
            { name: 'Badelandet i Bergen', href: '/park/badelandet-bergen', desc: 'Vannrutsjebaner og bølgebasseng i Bergen', type: 'Badeland' },
            { name: 'Atlanterhavsparken', href: '/park/atlanterhavsparken', desc: 'Norges største saltvannsakvarium i Ålesund', type: 'Akvarium' },
            { name: 'Bergen Akvariet', href: '/park/bergen-akvariet', desc: 'Pingviner, sjøløver og tropiske fisker', type: 'Akvarium' },
            { name: 'Polaria', href: '/park/polaria', desc: 'Arktisk opplevelsessenter i Tromsø', type: 'Opplevelse' },
          ].map((item, i) => (
            <Link key={item.name} href={item.href} className="flex items-center justify-between px-4 py-3 hover:bg-gray-50" style={{ borderTop: i > 0 ? '1px solid var(--brd)' : 'none', textDecoration: 'none' }}>
              <div>
                <span className="text-[13px] font-semibold" style={{ color: 'var(--ink)' }}>{item.name}</span>
                <span className="text-[11px] ml-2" style={{ color: 'var(--ink3)' }}>{item.desc}</span>
              </div>
              <span className="shrink-0 px-2.5 py-0.5 text-[10px] font-semibold rounded-full" style={{ background: 'var(--green-bg)', color: 'var(--green-fg)' }}>
                {item.type}
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Priser */}
      <Section title="Billettpriser (voksen, veiledende)">
        <div className="rounded-xl overflow-hidden" style={{ background: 'var(--card)', border: '1px solid var(--brd)' }}>
          {parkSeasons.sort((a, b) => parseInt(a.price.replace(/\D/g, '')) - parseInt(b.price.replace(/\D/g, ''))).map((p, i) => (
            <div key={p.name} className="flex items-center gap-4 px-4 py-3" style={{ borderTop: i > 0 ? '1px solid var(--brd)' : 'none' }}>
              <Link href={p.href} className="text-[13px] font-semibold w-36 hover:underline" style={{ color: 'var(--blue)' }}>{p.name}</Link>
              <div className="flex-1 h-[6px] rounded-full" style={{ background: 'var(--brd)' }}>
                <div className="h-full rounded-full" style={{ width: `${(parseInt(p.price.replace(/\D/g, '')) / 600) * 100}%`, background: 'var(--blue)' }} />
              </div>
              <span className="text-[13px] font-semibold w-20 text-right" style={{ color: 'var(--ink)' }}>{p.price}</span>
            </div>
          ))}
          <div className="px-4 py-2 text-[11px]" style={{ borderTop: '1px solid var(--brd)', color: 'var(--ink3)' }}>
            Priser er veiledende dørpriser for voksen. Barn og nettkjøp er vanligvis billigere. Sjekk parkenes nettsider.
          </div>
        </div>
      </Section>

      <Section title="Tips for å spare penger">
        <div className="mb-4">
          <InsightPanel title="Sparetips" items={[
            { icon: '🎫', heading: 'Kjøp billetter på nett', detail: 'De fleste parker gir 10–20% rabatt ved nettkjøp sammenlignet med dørpris.', extra: 'Spar 50–120 kr' },
            { icon: '📆', heading: 'Bestill tidlig', detail: 'Noen parker som TusenFryd gir ekstra early bird-rabatt.', extra: 'Spar 50–100 kr' },
            { icon: '🎫', heading: 'Vurder sesongkort', detail: 'Sesongkort lønner seg fra 2–3 besøk og gir ofte rabatter på mat og parkering.', extra: 'Best verdi' },
            { icon: '🍱', heading: 'Ta med matpakke', detail: 'Mat i parkene koster 150–250 kr per person. Medbrakt mat sparer familien 500+ kr.', extra: 'Spar ~500 kr' },
          ]} />
        </div>
      </Section>

      <div className="mb-6">
        <SourceChips sources={[{ letter: 'F', name: 'fornoyelsespark.no' }, { letter: 'P', name: 'Parkenes nettsider' }]} />
      </div>

      <div className="mb-8">
        <FollowUpChips label="Utforsk videre" chips={[
          { text: 'Planlegg dagstur', href: '/planlegg-dagstur' },
          { text: 'Sammenlign alle parker', href: '/sammenlign' },
          { text: 'Parker for barn', href: '/guide/fornoyelsesparker-for-barn' },
          { text: 'Badeland i Norge', href: '/guide/badeland-i-norge' },
        ]} />
      </div>

      <RelatedLinks title="Relevante guider" links={[
        { label: 'Beste fornøyelsesparker', href: '/guide/beste-fornoyelsesparker-i-norge' },
        { label: 'Badeland i Norge', href: '/guide/badeland-i-norge' },
        { label: 'Parker for barn', href: '/guide/fornoyelsesparker-for-barn' },
      ]} />

      <FAQ items={faq} />
      <div className="mt-8"><ChatInput placeholder="Søk etter fornøyelsesparker..." /></div>
    </>
  )
}
