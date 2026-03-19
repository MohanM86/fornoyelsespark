'use client'

import Link from 'next/link'
import { useState } from 'react'

const navItems = [
  { label: 'Parker', href: '/kategori/fornoyelsesparker' },
  { label: 'Badeland', href: '/kategori/badeland' },
  { label: 'Byer', href: '/oslo' },
  { label: 'Guider', href: '/guide/beste-fornoyelsesparker-i-norge' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md" style={{ borderColor: 'var(--border)' }}>
      <div className="mx-auto flex max-w-5xl items-center gap-3 px-4 py-3 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg" style={{ background: 'var(--accent)' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="text-base font-semibold tracking-tight hidden sm:inline" style={{ color: 'var(--text-primary)' }}>
            Fornøyelsespark<span style={{ color: 'var(--accent)' }}>.no</span>
          </span>
        </Link>

        {/* Search bar */}
        <div className="flex-1 mx-2">
          <div
            className="flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-all"
            style={{
              background: 'var(--surface-sunken)',
              border: '0.5px solid var(--border)',
              color: 'var(--text-tertiary)',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <span className="hidden sm:inline">Søk etter parker, byer eller opplevelser...</span>
            <span className="sm:hidden">Søk...</span>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1.5 text-sm font-medium transition-colors hover:bg-[var(--surface-sunken)]"
              style={{ color: 'var(--text-secondary)' }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 rounded-lg"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Meny"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--text-secondary)" strokeWidth="2" strokeLinecap="round">
            {menuOpen ? (
              <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
            ) : (
              <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="md:hidden border-t px-4 py-3 flex flex-wrap gap-2" style={{ borderColor: 'var(--border)', background: 'var(--surface-raised)' }}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium"
              style={{ background: 'var(--surface-sunken)', color: 'var(--text-primary)' }}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
