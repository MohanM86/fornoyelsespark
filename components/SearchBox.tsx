'use client'
import { useState, useRef, useEffect, useMemo } from 'react'
import Link from 'next/link'

export type SearchItem = {
  name: string
  href: string
  type: 'park' | 'by' | 'fylke' | 'kategori' | 'guide'
  detail?: string
}

const typeLabels: Record<string, string> = {
  park: 'Park', by: 'Kommune', fylke: 'Fylke', kategori: 'Kategori', guide: 'Guide',
}
const typeColors: Record<string, { bg: string; fg: string }> = {
  park: { bg: 'var(--green-bg)', fg: 'var(--green-fg)' },
  by: { bg: 'var(--blue-bg)', fg: 'var(--blue-fg)' },
  fylke: { bg: 'var(--yellow-bg)', fg: 'var(--yellow-fg)' },
  kategori: { bg: 'var(--red-bg)', fg: 'var(--red-fg)' },
  guide: { bg: '#F3E8FF', fg: '#6B21A8' },
}

function normalize(s: string) {
  return s.toLowerCase()
    .replace(/æ/g, 'ae').replace(/ø/g, 'o').replace(/å/g, 'a')
    .replace(/é/g, 'e').replace(/ö/g, 'o').replace(/ä/g, 'a').replace(/ü/g, 'u')
}

export default function SearchBox({ items, placeholder, variant = 'inline' }: {
  items: SearchItem[]
  placeholder: string
  variant?: 'header' | 'inline'
}) {
  const [q, setQ] = useState('')
  const [focused, setFocused] = useState(false)
  const [selected, setSelected] = useState(-1)
  const ref = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Precompute normalized names
  const indexed = useMemo(() => items.map(it => ({
    ...it,
    _norm: normalize(it.name) + ' ' + normalize(it.detail || ''),
  })), [items])

  const results = useMemo(() => {
    if (!q.trim()) return []
    const terms = normalize(q).split(/\s+/).filter(Boolean)
    return indexed
      .filter(it => terms.every(t => it._norm.includes(t)))
      .slice(0, 8)
  }, [q, indexed])

  // Reset selection on results change
  useEffect(() => setSelected(-1), [results])

  // Click outside to close
  useEffect(() => {
    function handle(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setFocused(false)
      }
    }
    document.addEventListener('mousedown', handle)
    return () => document.removeEventListener('mousedown', handle)
  }, [])

  function onKey(e: React.KeyboardEvent) {
    if (e.key === 'ArrowDown') { e.preventDefault(); setSelected(s => Math.min(s + 1, results.length - 1)) }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setSelected(s => Math.max(s - 1, -1)) }
    else if (e.key === 'Enter' && selected >= 0 && results[selected]) {
      e.preventDefault()
      window.location.href = results[selected].href
    }
    else if (e.key === 'Escape') { setFocused(false); inputRef.current?.blur() }
  }

  const showResults = focused && q.trim().length > 0
  const isHeader = variant === 'header'

  return (
    <div ref={ref} className="relative" style={{ width: '100%' }}>
      <div className="flex items-center gap-2 rounded-full px-4"
        style={{
          background: 'var(--card)', border: '1px solid var(--brd)',
          height: isHeader ? 36 : 48,
        }}>
        <svg width={isHeader ? 14 : 16} height={isHeader ? 14 : 16} viewBox="0 0 24 24" fill="none" stroke="var(--ink3)" strokeWidth="2">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <input
          ref={inputRef}
          type="text"
          value={q}
          onChange={e => setQ(e.target.value)}
          onFocus={() => setFocused(true)}
          onKeyDown={onKey}
          placeholder={placeholder}
          className="flex-1 bg-transparent outline-none"
          style={{ fontSize: isHeader ? 13 : 14, color: 'var(--ink)', caretColor: 'var(--blue)' }}
          autoComplete="off"
          spellCheck={false}
        />
        {q && (
          <button onClick={() => { setQ(''); inputRef.current?.focus() }}
            className="shrink-0 flex items-center justify-center" style={{ width: 20, height: 20, borderRadius: '50%', background: 'var(--brd)' }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--ink3)" strokeWidth="3" strokeLinecap="round">
              <line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/>
            </svg>
          </button>
        )}
      </div>

      {showResults && (
        <div className="absolute left-0 right-0 z-50 mt-1 overflow-hidden"
          style={{
            background: 'var(--card)', border: '1px solid var(--brd)', borderRadius: 12,
            boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
            top: isHeader ? 38 : 50,
          }}>
          {results.length === 0 ? (
            <div className="px-4 py-4 text-[13px]" style={{ color: 'var(--ink3)' }}>
              Ingen resultater for «{q}»
            </div>
          ) : (
            <div>
              {results.map((r, i) => {
                const tc = typeColors[r.type]
                return (
                  <Link key={r.href} href={r.href}
                    onClick={() => { setFocused(false); setQ('') }}
                    className="flex items-center gap-3 px-4 py-2.5"
                    style={{
                      background: i === selected ? 'var(--brd)' : 'transparent',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={() => setSelected(i)}>
                    <span className="shrink-0 px-2 py-0.5 text-[10px] font-semibold rounded-full"
                      style={{ background: tc.bg, color: tc.fg }}>
                      {typeLabels[r.type]}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="text-[13px] font-semibold truncate" style={{ color: 'var(--ink)' }}>{r.name}</div>
                      {r.detail && <div className="text-[11px] truncate" style={{ color: 'var(--ink3)' }}>{r.detail}</div>}
                    </div>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--ink4)" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
                  </Link>
                )
              })}
              <div className="px-4 py-2 text-[11px]" style={{ borderTop: '1px solid var(--brd)', color: 'var(--ink4)' }}>
                {results.length} resultat{results.length !== 1 ? 'er' : ''} · Bruk ↑↓ for å navigere
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
