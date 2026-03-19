import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-20 border-t" style={{ borderColor: 'var(--border)', background: 'var(--surface-raised)' }}>
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--text-tertiary)' }}>Kategorier</p>
            <ul className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
              <li><Link href="/kategori/fornoyelsesparker" className="hover:text-[var(--accent)] transition-colors">Fornøyelsesparker</Link></li>
              <li><Link href="/kategori/familieparker" className="hover:text-[var(--accent)] transition-colors">Familieparker</Link></li>
              <li><Link href="/kategori/badeland" className="hover:text-[var(--accent)] transition-colors">Badeland</Link></li>
              <li><Link href="/kategori/vannparker" className="hover:text-[var(--accent)] transition-colors">Vannparker</Link></li>
              <li><Link href="/kategori/aktivitetsparker" className="hover:text-[var(--accent)] transition-colors">Aktivitetsparker</Link></li>
              <li><Link href="/kategori/opplevelsesparker" className="hover:text-[var(--accent)] transition-colors">Opplevelsesparker</Link></li>
              <li><Link href="/kategori/dyrepark" className="hover:text-[var(--accent)] transition-colors">Dyreparker</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--text-tertiary)' }}>Byer</p>
            <ul className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
              <li><Link href="/oslo" className="hover:text-[var(--accent)] transition-colors">Oslo</Link></li>
              <li><Link href="/bergen" className="hover:text-[var(--accent)] transition-colors">Bergen</Link></li>
              <li><Link href="/trondheim" className="hover:text-[var(--accent)] transition-colors">Trondheim</Link></li>
              <li><Link href="/stavanger" className="hover:text-[var(--accent)] transition-colors">Stavanger</Link></li>
              <li><Link href="/kristiansand" className="hover:text-[var(--accent)] transition-colors">Kristiansand</Link></li>
              <li><Link href="/lillehammer" className="hover:text-[var(--accent)] transition-colors">Lillehammer</Link></li>
              <li><Link href="/tromso" className="hover:text-[var(--accent)] transition-colors">Tromsø</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--text-tertiary)' }}>Guider</p>
            <ul className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
              <li><Link href="/guide/beste-fornoyelsesparker-i-norge" className="hover:text-[var(--accent)] transition-colors">Beste parker i Norge</Link></li>
              <li><Link href="/guide/fornoyelsesparker-i-sverige" className="hover:text-[var(--accent)] transition-colors">Parker i Sverige</Link></li>
              <li><Link href="/guide/fornoyelsesparker-i-danmark" className="hover:text-[var(--accent)] transition-colors">Parker i Danmark</Link></li>
              <li><Link href="/guide/fornoyelsesparker-for-barn" className="hover:text-[var(--accent)] transition-colors">Parker for barn</Link></li>
              <li><Link href="/guide/badeland-i-norge" className="hover:text-[var(--accent)] transition-colors">Badeland i Norge</Link></li>
              <li><Link href="/guide/familieparker-i-norge" className="hover:text-[var(--accent)] transition-colors">Familieparker i Norge</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--text-tertiary)' }}>Populære parker</p>
            <ul className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
              <li><Link href="/park/tusenfryd" className="hover:text-[var(--accent)] transition-colors">TusenFryd</Link></li>
              <li><Link href="/park/dyreparken-kristiansand" className="hover:text-[var(--accent)] transition-colors">Dyreparken</Link></li>
              <li><Link href="/park/hunderfossen" className="hover:text-[var(--accent)] transition-colors">Hunderfossen</Link></li>
              <li><Link href="/park/kongeparken" className="hover:text-[var(--accent)] transition-colors">Kongeparken</Link></li>
              <li><Link href="/park/bo-sommarland" className="hover:text-[var(--accent)] transition-colors">Bø Sommarland</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t text-center text-xs" style={{ borderColor: 'var(--border)', color: 'var(--text-tertiary)' }}>
          <p>© {new Date().getFullYear()} Fornøyelsespark.no – Norges guide til fornøyelsesparker, familieparker og badeland.</p>
          <p className="mt-1">Sjekk alltid parkenes egne nettsider for oppdaterte priser og åpningstider.</p>
        </div>
      </div>
    </footer>
  )
}
