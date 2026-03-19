import Link from 'next/link'

const cols = [
  { t: 'Kategorier', items: [{n:'Fornøyelsesparker',h:'/kategori/fornoyelsesparker'},{n:'Familieparker',h:'/kategori/familieparker'},{n:'Badeland',h:'/kategori/badeland'},{n:'Vannparker',h:'/kategori/vannparker'},{n:'Aktivitetsparker',h:'/kategori/aktivitetsparker'},{n:'Opplevelsesparker',h:'/kategori/opplevelsesparker'},{n:'Dyreparker',h:'/kategori/dyrepark'}] },
  { t: 'Byer', items: [{n:'Oslo',h:'/oslo'},{n:'Bergen',h:'/bergen'},{n:'Trondheim',h:'/trondheim'},{n:'Stavanger',h:'/stavanger'},{n:'Kristiansand',h:'/kristiansand'},{n:'Lillehammer',h:'/lillehammer'},{n:'Tromsø',h:'/tromso'}] },
  { t: 'Fylker', items: [{n:'Vestland',h:'/fylke/vestland'},{n:'Troms',h:'/fylke/troms'},{n:'Rogaland',h:'/fylke/rogaland'},{n:'Innlandet',h:'/fylke/innlandet'},{n:'Trøndelag',h:'/fylke/troendelag'},{n:'Akershus',h:'/fylke/akershus'},{n:'Agder',h:'/fylke/agder'},{n:'Nordland',h:'/fylke/nordland'}] },
  { t: 'Guider', items: [{n:'Beste parker',h:'/guide/beste-fornoyelsesparker-i-norge'},{n:'Parker i Sverige',h:'/guide/fornoyelsesparker-i-sverige'},{n:'Parker i Danmark',h:'/guide/fornoyelsesparker-i-danmark'},{n:'For barn',h:'/guide/fornoyelsesparker-for-barn'},{n:'Badeland',h:'/guide/badeland-i-norge'},{n:'Familieparker',h:'/guide/familieparker-i-norge'}] },
]

export default function Footer() {
  return (
    <footer className="mt-16" style={{ borderTop: '1px solid var(--brd)' }}>
      <div className="mx-auto max-w-3xl px-4 py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {cols.map(c => (
            <div key={c.t}>
              <p className="text-[11px] font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--ink3)' }}>{c.t}</p>
              <ul className="space-y-2 text-[13px]" style={{ color: 'var(--ink2)' }}>
                {c.items.map(i => <li key={i.h}><Link href={i.h} className="hover:underline">{i.n}</Link></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 pt-6 text-center text-[11px]" style={{ borderTop: '1px solid var(--brd)', color: 'var(--ink4)' }}>
          © {new Date().getFullYear()} Fornøyelsespark.no
        </div>
      </div>
    </footer>
  )
}
