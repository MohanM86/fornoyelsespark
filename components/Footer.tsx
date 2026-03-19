import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-16" style={{ borderTop: '1px solid var(--border)', background: 'var(--cream)' }}>
      <div className="mx-auto max-w-4xl px-5 py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--ink-muted)' }}>Kategorier</p>
            <ul className="space-y-2 text-sm" style={{ color: 'var(--ink-light)' }}>
              {['fornoyelsesparker','familieparker','badeland','vannparker','aktivitetsparker','opplevelsesparker','dyrepark'].map(s=>(
                <li key={s}><Link href={`/kategori/${s}`} className="hover:underline capitalize">{s.replace(/-/g,' ')}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--ink-muted)' }}>Byer</p>
            <ul className="space-y-2 text-sm" style={{ color: 'var(--ink-light)' }}>
              {[{n:'Oslo',s:'oslo'},{n:'Bergen',s:'bergen'},{n:'Trondheim',s:'trondheim'},{n:'Stavanger',s:'stavanger'},{n:'Kristiansand',s:'kristiansand'},{n:'Lillehammer',s:'lillehammer'},{n:'Tromsø',s:'tromso'}].map(c=>(
                <li key={c.s}><Link href={`/${c.s}`} className="hover:underline">{c.n}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--ink-muted)' }}>Guider</p>
            <ul className="space-y-2 text-sm" style={{ color: 'var(--ink-light)' }}>
              {[{n:'Beste parker',s:'beste-fornoyelsesparker-i-norge'},{n:'Parker i Sverige',s:'fornoyelsesparker-i-sverige'},{n:'Parker i Danmark',s:'fornoyelsesparker-i-danmark'},{n:'Parker for barn',s:'fornoyelsesparker-for-barn'},{n:'Badeland',s:'badeland-i-norge'},{n:'Familieparker',s:'familieparker-i-norge'}].map(g=>(
                <li key={g.s}><Link href={`/guide/${g.s}`} className="hover:underline">{g.n}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--ink-muted)' }}>Populære</p>
            <ul className="space-y-2 text-sm" style={{ color: 'var(--ink-light)' }}>
              {[{n:'TusenFryd',s:'tusenfryd'},{n:'Dyreparken',s:'dyreparken-kristiansand'},{n:'Hunderfossen',s:'hunderfossen'},{n:'Kongeparken',s:'kongeparken'},{n:'Bø Sommarland',s:'bo-sommarland'}].map(p=>(
                <li key={p.s}><Link href={`/park/${p.s}`} className="hover:underline">{p.n}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 text-center text-xs" style={{ borderTop: '1px solid var(--border)', color: 'var(--ink-faint)' }}>
          <p>© {new Date().getFullYear()} Fornøyelsespark.no – Norges guide til fornøyelsesparker og badeland.</p>
        </div>
      </div>
    </footer>
  )
}
