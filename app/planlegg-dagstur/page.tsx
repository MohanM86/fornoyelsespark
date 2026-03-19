import Link from 'next/link'
import { Metadata } from 'next'
import { Section, DayPlan, InsightPanel, FAQ, Breadcrumbs, RelatedLinks, SourceChips, FollowUpChips, ChatInput } from '@/components/UI'
import { createMetadata, createFaqJsonLd, createBreadcrumbJsonLd } from '@/lib/seo'

export const metadata: Metadata = createMetadata({
  title: 'Planlegg dagstur til fornøyelsespark – Ferdig dagsplan',
  description: 'Planlegg en perfekt dagstur til fornøyelsespark i Norge. Ferdige dagsplaner for Hunderfossen, TusenFryd, Dyreparken, Kongeparken og Bø Sommarland.',
  path: '/planlegg-dagstur',
})

const faq = [
  { question: 'Når bør man komme til en fornøyelsespark?', answer: 'Kom helst til parkåpning (vanligvis kl. 10:00). De første to timene har kortest køer, og du rekker de mest populære attraksjonene før det fylles opp.' },
  { question: 'Hvor lang tid trenger man i en fornøyelsespark?', answer: 'Beregn 5–7 timer for de store parkene som TusenFryd og Dyreparken. Lilleputthammer og mindre parker kan gjøres på 3–4 timer.' },
  { question: 'Bør man ta med mat til fornøyelsesparken?', answer: 'De fleste parker tillater medbrakt mat. En matpakke sparer 300–600 kr for en familie på fire. Sjekk parkens regler på forhånd.' },
  { question: 'Hvilken ukedag er best å besøke fornøyelsesparker?', answer: 'Tirsdager og onsdager har generelt kortest køer. Unngå lørdager og de første ukene i juli om mulig.' },
]

export default function PlanleggDagsturPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(createFaqJsonLd(faq)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(createBreadcrumbJsonLd([
        { name: 'Forside', url: '/' },
        { name: 'Planlegg dagstur', url: '/planlegg-dagstur' },
      ])) }} />

      <Breadcrumbs items={[{ label: 'Forside', href: '/' }, { label: 'Planlegg dagstur' }]} />

      <h1 className="text-[22px] font-bold mb-3" style={{ color: 'var(--ink)' }}>Planlegg dagstur til fornøyelsespark</h1>

      <p className="text-[15px] leading-relaxed mb-6" style={{ color: 'var(--ink2)' }}>
        Vi har laget ferdige dagsplaner for Norges mest populære fornøyelsesparker. Hver plan er
        optimalisert for å gi deg mest mulig opplevelse med minst mulig køtid.
      </p>

      <div className="mb-4">
        <InsightPanel title="Tips for en vellykket dag" items={[
          { icon: '⏰', heading: 'Kom til parkåpning', detail: 'De to første timene har 40–60% kortere køer enn midt på dagen' },
          { icon: '📅', heading: 'Velg tirsdag eller onsdag', detail: 'Hverdager midt i uken er minst travle – unngå lørdager' },
          { icon: '🎒', heading: 'Pakk smart', detail: 'Ta med matpakke, solkrem, ekstra klær og regntøy', extra: 'Spar ~500 kr' },
          { icon: '🎫', heading: 'Kjøp billetter på nett', detail: 'Nettpriser er vanligvis 10–20% billigere enn i døra', extra: 'Spar ~200 kr' },
        ]} />
      </div>

      {/* Hunderfossen */}
      <Section title="Hunderfossen Eventyrpark">
        <p className="text-[13px] leading-relaxed mb-4" style={{ color: 'var(--ink2)' }}>
          Ideell for familier med barn 3–12 år. Parken ligger 15 min nord for Lillehammer langs E6.
          Kombiner gjerne med Lilleputthammer som ligger like ved.
        </p>
        <DayPlan title="Dagsplan – Hunderfossen" badge="Anbefalt"
          steps={[
            { label: 'Ankomst', time: '09:45', color: 'var(--green)', pct: 50 },
            { label: 'Il Tempo', time: '10:00', color: 'var(--blue)', pct: 100 },
            { label: 'Grottene', time: '11:00', color: 'var(--blue)', pct: 85 },
            { label: 'Lunsj', time: '12:00', color: 'var(--yellow)', pct: 45 },
            { label: 'Rafting', time: '13:00', color: 'var(--green)', pct: 90 },
            { label: 'Trollslott', time: '14:30', color: 'var(--blue)', pct: 75 },
            { label: 'Hjem', time: '16:00', color: 'var(--green)', pct: 50 },
          ]} total="Estimert total: ~1 890 kr for familie på 4 (billetter + mat)" />
        <div className="mt-3">
          <Link href="/park/hunderfossen" className="text-[13px] font-semibold" style={{ color: 'var(--blue)' }}>Les mer om Hunderfossen →</Link>
        </div>
      </Section>

      {/* TusenFryd */}
      <Section title="TusenFryd">
        <p className="text-[13px] leading-relaxed mb-4" style={{ color: 'var(--ink2)' }}>
          Norges største fornøyelsespark. Best for familier med eldre barn og ungdom som liker fart og spenning.
          20 min sør for Oslo sentrum.
        </p>
        <DayPlan title="Dagsplan – TusenFryd" badge="Fartsfylt"
          steps={[
            { label: 'Ankomst', time: '10:00', color: 'var(--green)', pct: 50 },
            { label: 'SpeedM.', time: '10:15', color: 'var(--red)', pct: 100 },
            { label: 'Thunder', time: '11:00', color: 'var(--red)', pct: 95 },
            { label: 'Familie', time: '12:00', color: 'var(--blue)', pct: 70 },
            { label: 'Lunsj', time: '13:00', color: 'var(--yellow)', pct: 45 },
            { label: 'BadeFryd', time: '14:00', color: 'var(--blue)', pct: 85 },
            { label: 'Hjem', time: '17:00', color: 'var(--green)', pct: 50 },
          ]} total="Estimert total: ~2 380 kr for familie på 4 (billetter + mat)" />
        <div className="mt-3">
          <Link href="/park/tusenfryd" className="text-[13px] font-semibold" style={{ color: 'var(--blue)' }}>Les mer om TusenFryd →</Link>
        </div>
      </Section>

      {/* Dyreparken */}
      <Section title="Dyreparken i Kristiansand">
        <p className="text-[13px] leading-relaxed mb-4" style={{ color: 'var(--ink2)' }}>
          Norges mest besøkte familiepark. Best å bruke to dager, men kan gjøres på én lang dag
          om du prioriterer. Kardemomme by og dyrehagen er hovedattraksjonene for de yngste.
        </p>
        <DayPlan title="Dagsplan – Dyreparken (1 dag)" badge="Intensivt"
          steps={[
            { label: 'Ankomst', time: '09:30', color: 'var(--green)', pct: 50 },
            { label: 'Dyr', time: '10:00', color: 'var(--green)', pct: 100 },
            { label: 'Kardem.', time: '11:30', color: 'var(--blue)', pct: 90 },
            { label: 'Lunsj', time: '12:30', color: 'var(--yellow)', pct: 45 },
            { label: 'Kaptein', time: '13:30', color: 'var(--red)', pct: 95 },
            { label: 'Badeland', time: '15:00', color: 'var(--blue)', pct: 80 },
            { label: 'Hjem', time: '17:00', color: 'var(--green)', pct: 50 },
          ]} total="Estimert total: ~2 600 kr for familie på 4 (billetter + mat)" />
        <div className="mt-3">
          <Link href="/park/dyreparken-kristiansand" className="text-[13px] font-semibold" style={{ color: 'var(--blue)' }}>Les mer om Dyreparken →</Link>
        </div>
      </Section>

      {/* Kongeparken */}
      <Section title="Kongeparken">
        <p className="text-[13px] leading-relaxed mb-4" style={{ color: 'var(--ink2)' }}>
          Vestlandets største familiepark, 30 min fra Stavanger. Godt tilbud for alle aldersgrupper
          med berg-og-dal-bane, vannattraksjoner og eget småbarnsområde.
        </p>
        <DayPlan title="Dagsplan – Kongeparken" badge="Familie"
          steps={[
            { label: 'Ankomst', time: '10:00', color: 'var(--green)', pct: 50 },
            { label: 'Humla', time: '10:15', color: 'var(--red)', pct: 90 },
            { label: 'Småbarn', time: '11:00', color: 'var(--blue)', pct: 70 },
            { label: 'Lunsj', time: '12:00', color: 'var(--yellow)', pct: 45 },
            { label: 'Rafta', time: '13:00', color: 'var(--blue)', pct: 85 },
            { label: 'Klatre', time: '14:30', color: 'var(--green)', pct: 75 },
            { label: 'Hjem', time: '16:00', color: 'var(--green)', pct: 50 },
          ]} total="Estimert total: ~2 100 kr for familie på 4 (billetter + mat)" />
        <div className="mt-3">
          <Link href="/park/kongeparken" className="text-[13px] font-semibold" style={{ color: 'var(--blue)' }}>Les mer om Kongeparken →</Link>
        </div>
      </Section>

      {/* Bø Sommarland */}
      <Section title="Bø Sommarland">
        <p className="text-[13px] leading-relaxed mb-4" style={{ color: 'var(--ink2)' }}>
          Skandinavias største vannpark. Ta med badetøy, solkrem og håndklær. Utendørsparken er
          kun åpen om sommeren – innendørs BadeLandet er helårsdrift.
        </p>
        <DayPlan title="Dagsplan – Bø Sommarland (sommer)" badge="Vann"
          steps={[
            { label: 'Ankomst', time: '10:00', color: 'var(--green)', pct: 50 },
            { label: 'Rutsjeb.', time: '10:15', color: 'var(--blue)', pct: 100 },
            { label: 'Bølgebad', time: '11:30', color: 'var(--blue)', pct: 85 },
            { label: 'Lunsj', time: '12:30', color: 'var(--yellow)', pct: 45 },
            { label: 'Strand', time: '13:30', color: 'var(--green)', pct: 70 },
            { label: 'Magasug.', time: '15:00', color: 'var(--red)', pct: 95 },
            { label: 'Hjem', time: '17:00', color: 'var(--green)', pct: 50 },
          ]} total="Estimert total: ~2 200 kr for familie på 4 (billetter + mat)" />
        <div className="mt-3">
          <Link href="/park/bo-sommarland" className="text-[13px] font-semibold" style={{ color: 'var(--blue)' }}>Les mer om Bø Sommarland →</Link>
        </div>
      </Section>

      {/* Kombinasjonsforslag */}
      <Section title="Kombiner to parker på én tur">
        <div className="mb-4">
          <InsightPanel title="Smarte kombinasjoner" items={[
            { icon: '🎪', heading: 'Hunderfossen + Lilleputthammer', detail: 'Ligger 1 km fra hverandre. Lilleputthammer på formiddagen, Hunderfossen etter lunsj.', extra: '1 dag' },
            { icon: '🦁', heading: 'Dyreparken + Aquarama', detail: 'Dyreparken dag 1, Aquarama Bad dag 2. Perfekt ferieopplegg i Kristiansand.', extra: '2 dager' },
            { icon: '🎢', heading: 'TusenFryd + Oslo-museer', detail: 'TusenFryd dag 1, Norsk Folkemuseum eller Teknisk museum dag 2.', extra: '2 dager' },
          ]} />
        </div>
      </Section>

      <div className="mb-6">
        <SourceChips sources={[{ letter: 'F', name: 'fornoyelsespark.no' }, { letter: 'P', name: 'Parkenes nettsider' }, { letter: 'B', name: 'Besøksdata' }]} />
      </div>

      <div className="mb-8">
        <FollowUpChips label="Utforsk videre" chips={['Sammenlign alle parker', 'Sjekk åpningstider', 'Parker for barn', 'Badeland i Norge']} />
      </div>

      <RelatedLinks title="Relevante guider" links={[
        { label: 'Beste fornøyelsesparker', href: '/guide/beste-fornoyelsesparker-i-norge' },
        { label: 'Parker for barn', href: '/guide/fornoyelsesparker-for-barn' },
        { label: 'Familieparker', href: '/guide/familieparker-i-norge' },
        { label: 'Badeland', href: '/guide/badeland-i-norge' },
      ]} />

      <FAQ items={faq} />
      <div className="mt-8"><ChatInput placeholder="Søk etter fornøyelsesparker..." /></div>
    </>
  )
}
