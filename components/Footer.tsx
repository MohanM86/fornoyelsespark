import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-16" style={{ borderTop: '1px solid var(--brd)', background: 'var(--bg)' }}>
      <div className="mx-auto max-w-3xl px-4 py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: 'Kategorier', items: [{n:'Fornøyelsesparker',h:'/kategori/fornoyelsesparker'},{n:'Familieparker',h:'/kategori/familieparker'},{n:'Badeland',h:'/kategori/badeland'},{n:'Vannparker',h:'/kategori/vannparker'},{n:'Aktivitetsparker',h:'/kategori/aktivitetsparker'},{n:'Opplevelsesparker',h:'/kategori/opplevelsesparker'},{n:'Dyreparker',h:'/kategori/dyrepark'}] },
            { title: 'Byer', items: [{n:'Oslo',h:'/oslo'},{n:'Bergen',h:'/bergen'},{n:'Trondheim',h:'/trondheim'},{n:'Stavanger',h:'/stavanger'},{n:'Kristiansand',h:'/kristiansand'},{n:'Lillehammer',h:'/lillehammer'},{n:'Tromsø',h:'/tromso'}] },
            { title: 'Guider', items: [{n:'Beste parker',h:'/guide/beste-fornoyelsesparker-i-norge'},{n:'Parker i Sverige',h:'/guide/fornoyelsesparker-i-sverige'},{n:'Parker i Danmark',h:'/guide/fornoyelsesparker-i-danmark'},{n:'Parker for barn',h:'/guide/fornoyelsesparker-for-barn'},{n:'Badeland',h:'/guide/badeland-i-norge'},{n:'Familieparker',h:'/guide/familieparker-i-norge'}] },
            { title: 'Populære', items: [{n:'TusenFryd',h:'/park/tusenfryd'},{n:'Dyreparken',h:'/park/dyreparken-kristiansand'},{n:'Hunderfossen',h:'/park/hunderfossen'},{n:'Kongeparken',h:'/park/kongeparken'},{n:'Bø Sommarland',h:'/park/bo-sommarland'}] },
          ].map(col => (
            <div key={col.title}>
              <p className="text-[11px] font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--txt-m)' }}>{col.title}</p>
              <ul className="space-y-2 text-[13px]" style={{ color: 'var(--txt-s)' }}>
                {col.items.map(i => <li key={i.h}><Link href={i.h} className="hover:text-white transition-colors">{i.n}</Link></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 pt-6 text-center text-[11px]" style={{ borderTop: '1px solid var(--brd)', color: 'var(--txt-f)' }}>
          © {new Date().getFullYear()} Fornøyelsespark.no
        </div>
      </div>
    </footer>
  )
}
