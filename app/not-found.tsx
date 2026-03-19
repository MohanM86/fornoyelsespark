import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="py-20 text-center">
      <div className="mx-auto mb-4 h-12 w-12 rounded-2xl flex items-center justify-center" style={{ background: 'var(--surface-sunken)' }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-tertiary)" strokeWidth="2">
          <circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" />
        </svg>
      </div>
      <h1 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Siden ble ikke funnet</h1>
      <p className="mt-2 text-sm" style={{ color: 'var(--text-secondary)' }}>Vi fant ikke siden du leter etter.</p>
      <Link href="/" className="mt-6 inline-block rounded-full px-6 py-2.5 text-sm font-medium text-white transition-colors"
        style={{ background: 'var(--accent)' }}>
        Tilbake til forsiden
      </Link>
    </div>
  )
}
