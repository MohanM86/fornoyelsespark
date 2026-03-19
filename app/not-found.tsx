import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="py-20 text-center">
      <h1 className="text-2xl font-bold" style={{ color: 'var(--ink)' }}>Siden ble ikke funnet</h1>
      <p className="mt-2 text-sm" style={{ color: 'var(--ink-muted)' }}>Vi fant ikke siden du leter etter.</p>
      <Link href="/" className="mt-6 inline-block rounded-full px-6 py-2.5 text-sm font-semibold text-white"
        style={{ background: 'var(--green)' }}>Tilbake til forsiden</Link>
    </div>
  )
}
