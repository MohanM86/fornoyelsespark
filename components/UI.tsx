import Link from 'next/link'

/* ───── Section ───── */
export function Section({ title, subtitle, children, id }: {
  title?: string; subtitle?: string; children: React.ReactNode; id?: string
}) {
  return (
    <section id={id} className="mt-10">
      {title && (
        <div className="mb-4">
          <h2 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>{title}</h2>
          {subtitle && <p className="mt-1 text-sm" style={{ color: 'var(--text-secondary)' }}>{subtitle}</p>}
        </div>
      )}
      {children}
    </section>
  )
}

/* ───── CompareCard (the 2028-style park card with metrics) ───── */
export function CompareCard({ name, href, description, city, county, category, audience, featured, matchScore, tags }: {
  name: string; href: string; description: string; city?: string; county?: string
  category?: string; audience?: string[]; featured?: boolean; matchScore?: number; tags?: string[]
}) {
  return (
    <article
      className="group relative rounded-xl p-4 transition-all hover:shadow-sm"
      style={{
        background: 'var(--surface-raised)',
        border: featured ? '1.5px solid var(--accent)' : '0.5px solid var(--border)',
      }}
    >
      {featured && (
        <span className="absolute -top-2.5 left-4 px-2.5 py-0.5 text-[11px] font-semibold rounded-full"
          style={{ background: 'var(--accent)', color: '#fff' }}>
          Anbefalt
        </span>
      )}

      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <Link href={href} className="text-base font-semibold hover:text-[var(--accent)] transition-colors block truncate"
            style={{ color: 'var(--text-primary)' }}>
            {name}
          </Link>
          <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs" style={{ color: 'var(--text-tertiary)' }}>
            {city && <span>{city}{county ? `, ${county}` : ''}</span>}
            {category && (
              <>
                <span>·</span>
                <Link href={`/kategori/${category}`} className="capitalize hover:text-[var(--accent)] transition-colors">
                  {category.replace(/-/g, ' ')}
                </Link>
              </>
            )}
          </div>
        </div>
        {matchScore && (
          <div className="shrink-0 flex flex-col items-center">
            <div className="text-lg font-bold" style={{ color: 'var(--accent)' }}>{matchScore}</div>
            <div className="text-[10px] font-medium" style={{ color: 'var(--text-tertiary)' }}>/ 10</div>
          </div>
        )}
      </div>

      <p className="mt-2.5 text-sm leading-relaxed line-clamp-2" style={{ color: 'var(--text-secondary)' }}>
        {description}
      </p>

      {audience && audience.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {audience.slice(0, 3).map((a) => (
            <span key={a} className="rounded-full px-2 py-0.5 text-[11px] font-medium"
              style={{ background: 'var(--surface-sunken)', color: 'var(--text-secondary)' }}>
              {a}
            </span>
          ))}
        </div>
      )}

      <div className="mt-3 flex items-center justify-between">
        {tags && tags.length > 0 && (
          <div className="flex gap-1 overflow-hidden">
            {tags.slice(0, 2).map((t) => (
              <span key={t} className="text-[10px] rounded-full px-2 py-0.5"
                style={{ background: 'var(--accent-light)', color: 'var(--accent)' }}>
                {t}
              </span>
            ))}
          </div>
        )}
        <Link href={href} className="text-xs font-medium transition-colors hover:text-[var(--accent-dark)]"
          style={{ color: 'var(--accent)' }}>
          Les mer →
        </Link>
      </div>
    </article>
  )
}

/* ───── CompareGrid ───── */
export function CompareGrid({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-3 sm:grid-cols-2">{children}</div>
}

/* ───── SmartInsight (personalized insight box) ───── */
export function SmartInsight({ icon, text, detail, accent }: {
  icon: string; text: string; detail?: string; accent?: 'blue' | 'green' | 'amber'
}) {
  const colors = {
    blue: { bg: 'var(--accent-light)', color: 'var(--accent)', border: 'var(--accent)' },
    green: { bg: 'var(--success-light)', color: 'var(--success)', border: 'var(--success)' },
    amber: { bg: 'var(--warn-light)', color: 'var(--warn)', border: 'var(--warn)' },
  }
  const c = colors[accent || 'blue']

  return (
    <div className="flex items-start gap-3 rounded-xl px-4 py-3 transition-colors"
      style={{ background: c.bg, border: `0.5px solid transparent` }}>
      <span className="mt-0.5 text-base shrink-0" role="img">{icon}</span>
      <div className="min-w-0">
        <p className="text-sm font-medium" style={{ color: c.color }}>{text}</p>
        {detail && <p className="mt-0.5 text-xs" style={{ color: 'var(--text-secondary)' }}>{detail}</p>}
      </div>
    </div>
  )
}

/* ───── QuickFacts (knowledge panel style) ───── */
export function QuickFacts({ facts }: { facts: { label: string; value: string; href?: string }[] }) {
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-3">
      {facts.map((f, i) => (
        <div key={i}>
          <div className="text-[11px] uppercase tracking-wider font-medium" style={{ color: 'var(--text-tertiary)' }}>{f.label}</div>
          {f.href ? (
            <Link href={f.href} className="text-sm font-medium hover:text-[var(--accent)] transition-colors" style={{ color: 'var(--accent)' }}>
              {f.value}
            </Link>
          ) : (
            <div className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{f.value}</div>
          )}
        </div>
      ))}
    </div>
  )
}

/* ───── FAQ (expandable, clean) ───── */
export function FAQ({ items }: { items: { question: string; answer: string }[] }) {
  if (!items.length) return null
  return (
    <section className="mt-10">
      <h2 className="text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Ofte stilte spørsmål</h2>
      <div className="space-y-2">
        {items.map((item, i) => (
          <details key={i} className="group rounded-xl transition-colors" style={{ background: 'var(--surface-raised)', border: '0.5px solid var(--border)' }}>
            <summary className="cursor-pointer px-5 py-3.5 text-sm font-medium flex items-center justify-between"
              style={{ color: 'var(--text-primary)' }}>
              {item.question}
              <svg className="w-4 h-4 shrink-0 transition-transform group-open:rotate-180" style={{ color: 'var(--text-tertiary)' }}
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
            </summary>
            <div className="px-5 pb-4 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}

/* ───── Breadcrumbs ───── */
export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Brødsmuler" className="mb-5 text-xs" style={{ color: 'var(--text-tertiary)' }}>
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            {i > 0 && <span className="mx-0.5">/</span>}
            {item.href ? (
              <Link href={item.href} className="hover:text-[var(--accent)] transition-colors">{item.label}</Link>
            ) : (
              <span style={{ color: 'var(--text-secondary)' }}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

/* ───── ChipNav (horizontal filter chips) ───── */
export function ChipNav({ items }: { items: { label: string; href: string; active?: boolean }[] }) {
  return (
    <div className="flex gap-2 flex-wrap">
      {items.map((item, i) => (
        <Link key={i} href={item.href}
          className="rounded-full px-3.5 py-1.5 text-sm font-medium transition-all"
          style={{
            background: item.active ? 'var(--accent-light)' : 'var(--surface-raised)',
            color: item.active ? 'var(--accent)' : 'var(--text-secondary)',
            border: item.active ? '0.5px solid var(--accent)' : '0.5px solid var(--border)',
          }}>
          {item.label}
        </Link>
      ))}
    </div>
  )
}

/* ───── RelatedLinks ───── */
export function RelatedLinks({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  if (!links.length) return null
  return (
    <div className="mt-8">
      <h3 className="text-sm font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>{title}</h3>
      <div className="flex flex-wrap gap-2">
        {links.map((link, i) => (
          <Link key={i} href={link.href}
            className="rounded-full px-3 py-1.5 text-sm transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]"
            style={{ border: '0.5px solid var(--border)', color: 'var(--text-secondary)' }}>
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

/* ───── GuideCard ───── */
export function GuideCard({ title, intro, href }: { title: string; intro: string; href: string }) {
  return (
    <Link href={href} className="block rounded-xl p-4 transition-all hover:shadow-sm"
      style={{ background: 'var(--surface-raised)', border: '0.5px solid var(--border)' }}>
      <h3 className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{title}</h3>
      <p className="mt-1 text-xs line-clamp-2" style={{ color: 'var(--text-secondary)' }}>{intro}</p>
      <span className="mt-2 inline-block text-xs font-medium" style={{ color: 'var(--accent)' }}>Les guiden →</span>
    </Link>
  )
}

/* ───── CityCard ───── */
export function CityCard({ name, href, parkCount }: { name: string; href: string; parkCount?: number }) {
  return (
    <Link href={href} className="flex items-center justify-between rounded-xl px-4 py-3 transition-all hover:shadow-sm"
      style={{ background: 'var(--surface-raised)', border: '0.5px solid var(--border)' }}>
      <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{name}</span>
      <div className="flex items-center gap-2">
        {parkCount !== undefined && (
          <span className="text-xs rounded-full px-2 py-0.5" style={{ background: 'var(--surface-sunken)', color: 'var(--text-tertiary)' }}>
            {parkCount} {parkCount === 1 ? 'park' : 'parker'}
          </span>
        )}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-tertiary)" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
      </div>
    </Link>
  )
}

/* ───── AIInsightBox (the conversational AI summary) ───── */
export function AIInsightBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl p-5 relative overflow-hidden"
      style={{ background: 'var(--surface-raised)', border: '0.5px solid var(--border)' }}>
      <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
        style={{ background: 'linear-gradient(90deg, var(--accent), #8b5cf6, #ec4899)' }} />
      <div className="flex items-center gap-2 mb-3">
        <div className="h-5 w-5 rounded-full flex items-center justify-center"
          style={{ background: 'var(--accent)' }}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="white" stroke="none">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>
        <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>
          Oppsummering
        </span>
      </div>
      <div className="text-sm leading-relaxed" style={{ color: 'var(--text-primary)' }}>
        {children}
      </div>
    </div>
  )
}
