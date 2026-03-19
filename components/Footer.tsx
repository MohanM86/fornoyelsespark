import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50 mt-16">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Kategorier</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/kategori/fornoyelsesparker" className="hover:text-gray-900">Fornøyelsesparker</Link></li>
              <li><Link href="/kategori/familieparker" className="hover:text-gray-900">Familieparker</Link></li>
              <li><Link href="/kategori/badeland" className="hover:text-gray-900">Badeland</Link></li>
              <li><Link href="/kategori/vannparker" className="hover:text-gray-900">Vannparker</Link></li>
              <li><Link href="/kategori/aktivitetsparker" className="hover:text-gray-900">Aktivitetsparker</Link></li>
              <li><Link href="/kategori/opplevelsesparker" className="hover:text-gray-900">Opplevelsesparker</Link></li>
              <li><Link href="/kategori/dyrepark" className="hover:text-gray-900">Dyreparker</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Populære byer</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/oslo" className="hover:text-gray-900">Oslo</Link></li>
              <li><Link href="/bergen" className="hover:text-gray-900">Bergen</Link></li>
              <li><Link href="/trondheim" className="hover:text-gray-900">Trondheim</Link></li>
              <li><Link href="/stavanger" className="hover:text-gray-900">Stavanger</Link></li>
              <li><Link href="/kristiansand" className="hover:text-gray-900">Kristiansand</Link></li>
              <li><Link href="/lillehammer" className="hover:text-gray-900">Lillehammer</Link></li>
              <li><Link href="/tromso" className="hover:text-gray-900">Tromsø</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Guider</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/guide/beste-fornoyelsesparker-i-norge" className="hover:text-gray-900">Beste parker i Norge</Link></li>
              <li><Link href="/guide/fornoyelsesparker-i-sverige" className="hover:text-gray-900">Parker i Sverige</Link></li>
              <li><Link href="/guide/fornoyelsesparker-i-danmark" className="hover:text-gray-900">Parker i Danmark</Link></li>
              <li><Link href="/guide/fornoyelsesparker-for-barn" className="hover:text-gray-900">Parker for barn</Link></li>
              <li><Link href="/guide/badeland-i-norge" className="hover:text-gray-900">Badeland i Norge</Link></li>
              <li><Link href="/guide/familieparker-i-norge" className="hover:text-gray-900">Familieparker i Norge</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Populære parker</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/park/tusenfryd" className="hover:text-gray-900">TusenFryd</Link></li>
              <li><Link href="/park/dyreparken-kristiansand" className="hover:text-gray-900">Dyreparken</Link></li>
              <li><Link href="/park/hunderfossen" className="hover:text-gray-900">Hunderfossen</Link></li>
              <li><Link href="/park/kongeparken" className="hover:text-gray-900">Kongeparken</Link></li>
              <li><Link href="/park/bo-sommarland" className="hover:text-gray-900">Bø Sommarland</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-200 pt-6 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Fornøyelsespark.no – Norges mest komplette guide til fornøyelsesparker, familieparker og badeland.</p>
          <p className="mt-1">Informasjonen på denne siden er ment som en veiledning. Sjekk alltid parkenes egne nettsider for oppdaterte priser og åpningstider.</p>
        </div>
      </div>
    </footer>
  )
}
