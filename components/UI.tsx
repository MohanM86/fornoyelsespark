import Link from 'next/link'

/* Card wrapper — white bg, thin gray border, rounded */
function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={className} style={{
      background: 'var(--card)',
      border: '1px solid var(--border)',
      borderRadius: 12,
    }}>
      {children}
    </div>
  )
}

/* ── Section ── */
export function Section({ title, children, id }: { title?: string; children: React.ReactNode; id?: string }) {
  return (
    <section id={id} className="mt-10">
      {title && <h2 className="text-base font-bold mb-4" style={{ color: 'var(--ink)' }}>{title}</h2>}
      {children}
    </section>
  )
}

/* ── ParkCard — white card, thin gray border, small badge ── */
export function ParkCard({ name, href, description, city, county, category, featured, audience, tags }: {
  name: string; href: string; description: string; city?: string; county?: string
  category?: string; featured?: boolean; audience?: string[]; tags?: string[]
}) {
  return (
    <Card className="p-4 relative">
      {featured && (
        <span className="absolute -top-2 left-3 px-2 py-px text-[10px] font-semibold rounded-full"
          style={{ background: 'var(--green)', color: '#fff' }}>Anbefalt</span>
      )}
      <Link href={href} className="text-[15px] font-bold hover:underline block" style={{ color: 'var(--ink)' }}>{name}</Link>
      <div className="mt-1 flex flex-wrap gap-x-2 text-xs" style={{ color: 'var(--ink-muted)' }}>
        {city && <span>{city}{county ? `, ${county}` : ''}</span>}
        {category && <><span>·</span><span className="capitalize">{category.replace(/-/g, ' ')}</span></>}
      </div>
      <p className="mt-2 text-[13px] leading-relaxed line-clamp-2" style={{ color: 'var(--ink-light)' }}>{description}</p>
      {audience && audience.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {audience.slice(0, 3).map(a => (
            <span key={a} className="rounded-full px-2.5 py-0.5 text-[11px]"
              style={{ border: '1px solid var(--border)', color: 'var(--ink-muted)' }}>{a}</span>
          ))}
        </div>
      )}
      <Link href={href} className="mt-3 inline-block text-[13px] font-semibold" style={{ color: 'var(--blue)' }}>Les mer →</Link>
    </Card>
  )
}

/* ── ParkGrid ── */
export function ParkGrid({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-4 sm:grid-cols-2">{children}</div>
}

/* ── InfoBox — colored insight boxes matching green/yellow/red bars from screenshot ── */
export function InfoBox({ color, label, detail }: { color: 'green' | 'red' | 'yellow' | 'blue'; label: string; detail?: string }) {
  const map = {
    green: { bg: 'var(--green-light)', fg: 'var(--green)', dot: 'var(--green)' },
    red: { bg: 'var(--red-light)', fg: 'var(--red)', dot: 'var(--red)' },
    yellow: { bg: 'var(--yellow-light)', fg: '#9A7B04', dot: 'var(--yellow)' },
    blue: { bg: 'var(--blue-light)', fg: 'var(--blue)', dot: 'var(--blue)' },
  }
  const c = map[color]
  return (
    <div className="flex items-start gap-3 rounded-xl px-4 py-3" style={{ background: c.bg }}>
      <span className="mt-1 block w-2.5 h-2.5 rounded-full shrink-0" style={{ background: c.dot }} />
      <div>
        <p className="text-sm font-semibold" style={{ color: c.fg }}>{label}</p>
        {detail && <p className="text-xs mt-0.5" style={{ color: 'var(--ink-muted)' }}>{detail}</p>}
      </div>
    </div>
  )
}

/* ── Chip (rounded pill buttons from screenshot) ── */
export function Chip({ label, href, active }: { label: string; href: string; active?: boolean }) {
  return (
    <Link href={href} className="inline-block rounded-full px-4 py-2 text-sm transition-colors"
      style={{
        border: '1px solid var(--border)',
        background: active ? 'var(--ink)' : 'var(--card)',
        color: active ? '#fff' : 'var(--ink-light)',
      }}>
      {label}
    </Link>
  )
}

export function ChipRow({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-wrap gap-2">{children}</div>
}

/* ── QuickFacts panel ── */
export function QuickFacts({ facts }: { facts: { label: string; value: string; href?: string }[] }) {
  return (
    <Card className="p-5">
      <div className="grid grid-cols-2 gap-x-6 gap-y-3">
        {facts.map((f, i) => (
          <div key={i}>
            <div className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: 'var(--ink-muted)' }}>{f.label}</div>
            {f.href ? (
              <Link href={f.href} className="text-sm font-semibold hover:underline" style={{ color: 'var(--blue)' }}>{f.value}</Link>
            ) : (
              <div className="text-sm font-semibold" style={{ color: 'var(--ink)' }}>{f.value}</div>
            )}
          </div>
        ))}
      </div>
    </Card>
  )
}

/* ── FAQ ── */
export function FAQ({ items }: { items: { question: string; answer: string }[] }) {
  if (!items.length) return null
  return (
    <section className="mt-10">
      <h2 className="text-base font-bold mb-3" style={{ color: 'var(--ink)' }}>Ofte stilte spørsmål</h2>
      <div className="space-y-0">
        {items.map((item, i) => (
          <details key={i} className="group" style={{ borderBottom: '1px solid var(--border)' }}>
            <summary className="cursor-pointer py-3.5 text-sm font-semibold flex items-center justify-between" style={{ color: 'var(--ink)' }}>
              {item.question}
              <span className="text-lg transition-transform group-open:rotate-90" style={{ color: 'var(--ink-muted)' }}>›</span>
            </summary>
            <div className="pb-3 text-sm leading-relaxed" style={{ color: 'var(--ink-light)' }}>{item.answer}</div>
          </details>
        ))}
      </div>
    </section>
  )
}

/* ── Breadcrumbs ── */
export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Brødsmuler" className="mb-5 text-xs" style={{ color: 'var(--ink-faint)' }}>
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            {i > 0 && <span>/</span>}
            {item.href ? <Link href={item.href} className="hover:underline">{item.label}</Link> : <span style={{ color: 'var(--ink-muted)' }}>{item.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  )
}

/* ── RelatedLinks ── */
export function RelatedLinks({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  if (!links.length) return null
  return (
    <div className="mt-8">
      <h3 className="text-sm font-bold mb-3" style={{ color: 'var(--ink)' }}>{title}</h3>
      <div className="flex flex-wrap gap-2">
        {links.map((l, i) => (
          <Link key={i} href={l.href} className="rounded-full px-3.5 py-1.5 text-sm hover:underline"
            style={{ border: '1px solid var(--border)', color: 'var(--ink-light)' }}>{l.label}</Link>
        ))}
      </div>
    </div>
  )
}

/* ── GuideLink ── */
export function GuideLink({ title, intro, href }: { title: string; intro: string; href: string }) {
  return (
    <Card className="p-4">
      <Link href={href} className="text-sm font-bold hover:underline" style={{ color: 'var(--ink)' }}>{title}</Link>
      <p className="mt-1 text-xs line-clamp-2" style={{ color: 'var(--ink-muted)' }}>{intro}</p>
      <Link href={href} className="mt-2 inline-block text-xs font-semibold" style={{ color: 'var(--blue)' }}>Les guiden →</Link>
    </Card>
  )
}

/* ── CityRow ── */
export function CityRow({ name, href, count }: { name: string; href: string; count?: number }) {
  return (
    <Link href={href} className="flex items-center justify-between py-3" style={{ borderBottom: '1px solid var(--border)' }}>
      <span className="text-sm font-semibold" style={{ color: 'var(--ink)' }}>{name}</span>
      <div className="flex items-center gap-2">
        {count !== undefined && <span className="text-xs" style={{ color: 'var(--ink-muted)' }}>{count} parker</span>}
        <span style={{ color: 'var(--ink-faint)' }}>›</span>
      </div>
    </Link>
  )
}
