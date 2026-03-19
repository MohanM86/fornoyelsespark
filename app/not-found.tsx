import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="py-20 text-center">
      <h1 className="text-xl font-bold" style={{ color: 'var(--txt)' }}>Siden ble ikke funnet</h1>
      <p className="mt-2 text-[13px]" style={{ color: 'var(--txt-m)' }}>Vi fant ikke siden du leter etter.</p>
      <Link href="/" className="mt-6 inline-block rounded-full px-6 py-2.5 text-[13px] font-semibold text-white" style={{ background: 'var(--blue)' }}>
        Tilbake til forsiden
      </Link>
    </div>
  )
}
