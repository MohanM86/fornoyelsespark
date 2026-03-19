import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="py-20 text-center">
      <h1 className="text-3xl font-bold text-gray-900">Siden ble ikke funnet</h1>
      <p className="mt-4 text-sm text-gray-600">
        Beklager, vi fant ikke siden du leter etter.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-700 transition-colors"
      >
        Tilbake til forsiden
      </Link>
    </div>
  )
}
