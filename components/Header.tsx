import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b border-gray-100 bg-white">
      <div className="mx-auto max-w-5xl px-4 py-4 sm:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-lg font-bold tracking-tight text-gray-900">
            Fornøyelsespark<span className="text-brand-600">.no</span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium text-gray-600 sm:flex">
            <Link href="/kategori/fornoyelsesparker" className="hover:text-gray-900 transition-colors">
              Parker
            </Link>
            <Link href="/kategori/badeland" className="hover:text-gray-900 transition-colors">
              Badeland
            </Link>
            <Link href="/guide/beste-fornoyelsesparker-i-norge" className="hover:text-gray-900 transition-colors">
              Guider
            </Link>
            <Link href="/oslo" className="hover:text-gray-900 transition-colors">
              Byer
            </Link>
          </nav>
          <nav className="flex sm:hidden">
            <Link href="/kategori/fornoyelsesparker" className="px-2 py-1 text-sm text-gray-600">
              Parker
            </Link>
            <Link href="/guide/beste-fornoyelsesparker-i-norge" className="px-2 py-1 text-sm text-gray-600">
              Guider
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
