'use client'
import Link from 'next/link'
import { useState } from 'react'

const nav = [
  { label: 'Parker', href: '/kategori/fornoyelsesparker' },
  { label: 'Badeland', href: '/kategori/badeland' },
  { label: 'Byer', href: '/oslo' },
  { label: 'Guider', href: '/guide/beste-fornoyelsesparker-i-norge' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header style={{ borderBottom: '1px solid var(--brd)', background: 'var(--bg)' }}>
      <div className="mx-auto flex max-w-3xl items-center gap-3 px-4 py-3">
        <Link href="/" className="shrink-0 text-[15px] font-bold" style={{ color: 'var(--ink)' }}>
          Fornøyelsespark<span style={{ color: 'var(--green)' }}>.no</span>
        </Link>
        <div className="flex-1 mx-1">
          <div className="flex items-center gap-2 rounded-full px-4 py-2 text-[13px]"
            style={{ background: 'var(--card)', border: '1px solid var(--brd)', color: 'var(--ink3)' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <span className="hidden sm:inline">Søk etter parker, byer eller opplevelser...</span>
            <span className="sm:hidden">Søk...</span>
          </div>
        </div>
        <nav className="hidden sm:flex items-center gap-1">
          {nav.map(n => (
            <Link key={n.href} href={n.href} className="px-3 py-1.5 text-[13px]" style={{ color: 'var(--ink2)' }}>{n.label}</Link>
          ))}
        </nav>
        <button className="sm:hidden p-1" onClick={() => setOpen(!open)} aria-label="Meny">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--ink3)" strokeWidth="2" strokeLinecap="round">
            {open ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></> : <><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></>}
          </svg>
        </button>
      </div>
      {open && <div className="sm:hidden flex flex-wrap gap-2 px-4 pb-3">{nav.map(n => <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="rounded-full px-4 py-2 text-[13px]" style={{ background: 'var(--card)', border: '1px solid var(--brd)', color: 'var(--ink2)' }}>{n.label}</Link>)}</div>}
    </header>
  )
}
