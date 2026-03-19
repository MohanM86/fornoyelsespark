import Link from 'next/link'

/* ── Dark Card ── */
function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={className} style={{ background: 'var(--card)', border: '1px solid var(--brd)', borderRadius: 12 }}>{children}</div>
}

/* ── Section ── */
export function Section({ title, children, id }: { title?: string; children: React.ReactNode; id?: string }) {
  return (
    <section id={id} className="mt-8">
      {title && <h2 className="text-[15px] font-bold mb-3" style={{ color: 'var(--txt)' }}>{title}</h2>}
      {children}
    </section>
  )
}

/* ── CompareCard — matching screenshot: name, badge, metrics, progress bar ── */
export function CompareCard({ name, href, subtitle, badge, badgeColor, metrics, barColor, barWidth }: {
  name: string; href: string; subtitle?: string
  badge?: string; badgeColor?: 'blue' | 'red' | 'green' | 'yellow'
  metrics?: { label: string; value: string }[]
  barColor?: string; barWidth?: number
}) {
  const badgeStyles: Record<string, { bg: string; fg: string }> = {
    blue: { bg: '#E8F0FE', fg: '#1A73E8' },
    red: { bg: '#FCE8E6', fg: '#C5221F' },
    green: { bg: '#E6F4EA', fg: '#137333' },
    yellow: { bg: '#FEF7E0', fg: '#9A7B04' },
  }
  const b = badgeColor ? badgeStyles[badgeColor] : null

  return (
    <Card className="p-4">
      <div className="flex items-start justify-between gap-2 mb-1">
        <Link href={href} className="text-[15px] font-bold hover:underline" style={{ color: 'var(--txt)' }}>{name}</Link>
        {badge && b && (
          <span className="shrink-0 px-2.5 py-0.5 text-[11px] font-semibold rounded-full" style={{ background: b.bg, color: b.fg }}>{badge}</span>
        )}
      </div>
      {subtitle && <p className="text-[12px] mb-3" style={{ color: 'var(--txt-m)' }}>{subtitle}</p>}
      {metrics && metrics.length > 0 && (
        <div className="space-y-1.5">
          {metrics.map((m, i) => (
            <div key={i} className="flex justify-between text-[13px]">
              <span style={{ color: 'var(--txt-s)' }}>{m.label}</span>
              <span className="font-semibold" style={{ color: 'var(--txt)' }}>{m.value}</span>
            </div>
          ))}
        </div>
      )}
      {barWidth !== undefined && (
        <div className="mt-3 h-1 rounded-full" style={{ background: 'var(--elevated)' }}>
          <div className="h-1 rounded-full" style={{ width: `${barWidth}%`, background: barColor || 'var(--blue)' }} />
        </div>
      )}
    </Card>
  )
}

/* ── ParkCard — simpler version for listing pages ── */
export function ParkCard({ name, href, description, city, county, category, featured, audience }: {
  name: string; href: string; description: string; city?: string; county?: string
  category?: string; featured?: boolean; audience?: string[]
}) {
  return (
    <Card className="p-4">
      <div className="flex items-start justify-between gap-2">
        <Link href={href} className="text-[15px] font-bold hover:underline" style={{ color: 'var(--txt)' }}>{name}</Link>
        {featured && <span className="shrink-0 px-2 py-0.5 text-[10px] font-semibold rounded-full" style={{ background: '#E6F4EA', color: '#137333' }}>Anbefalt</span>}
      </div>
      <div className="mt-1 flex flex-wrap gap-x-2 text-[12px]" style={{ color: 'var(--txt-m)' }}>
        {city && <span>{city}{county ? `, ${county}` : ''}</span>}
        {category && <><span>·</span><span className="capitalize">{category.replace(/-/g, ' ')}</span></>}
      </div>
      <p className="mt-2 text-[13px] leading-relaxed line-clamp-2" style={{ color: 'var(--txt-s)' }}>{description}</p>
      {audience && audience.length > 0 && (
        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {audience.slice(0, 3).map(a => (
            <span key={a} className="rounded-full px-2.5 py-0.5 text-[11px]" style={{ border: '1px solid var(--brd)', color: 'var(--txt-m)' }}>{a}</span>
          ))}
        </div>
      )}
      <Link href={href} className="mt-2.5 inline-block text-[13px] font-semibold" style={{ color: 'var(--blue)' }}>Les mer →</Link>
    </Card>
  )
}

export function ParkGrid({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-3 sm:grid-cols-2">{children}</div>
}

/* ── ActionButton — "Planlegg dagstur" style buttons ── */
export function ActionButton({ label, primary, icon }: { label: string; primary?: boolean; icon?: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-[13px] font-semibold cursor-pointer" style={{
      background: primary ? 'var(--blue)' : 'var(--card)',
      color: primary ? '#fff' : 'var(--txt)',
      border: primary ? 'none' : '1px solid var(--brd)',
    }}>
      {icon && <span className="text-[14px]">{icon}</span>}
      {label}
    </span>
  )
}

/* ── InsightPanel — "Tilpasset for dere" box ── */
export function InsightPanel({ title, items }: {
  title: string; items: { icon: string; heading: string; detail: string; extra?: string }[]
}) {
  return (
    <Card className="p-5">
      <div className="flex items-center gap-2 mb-4">
        <span className="w-6 h-6 rounded-full flex items-center justify-center text-[12px]" style={{ background: 'var(--yellow)' }}>✦</span>
        <span className="text-[14px] font-bold" style={{ color: 'var(--txt)' }}>{title}</span>
      </div>
      <div className="space-y-4">
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-3">
            <span className="mt-0.5 text-[14px]" style={{ color: 'var(--txt-m)' }}>{item.icon}</span>
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-semibold" style={{ color: 'var(--txt)' }}>{item.heading}</p>
              <p className="text-[12px]" style={{ color: 'var(--txt-m)' }}>{item.detail}</p>
            </div>
            {item.extra && <span className="shrink-0 text-[12px]" style={{ color: 'var(--txt-m)' }}>{item.extra}</span>}
          </div>
        ))}
      </div>
    </Card>
  )
}

/* ── DayPlan — timeline bar chart ── */
export function DayPlan({ title, steps, total, badge }: {
  title: string; badge?: string
  steps: { label: string; time: string; color: string; height: number }[]
  total?: string
}) {
  return (
    <Card className="overflow-hidden">
      <div className="flex items-center justify-between p-4 pb-2">
        <span className="text-[14px] font-bold" style={{ color: 'var(--txt)' }}>{title}</span>
        {badge && <span className="px-2.5 py-0.5 text-[10px] font-semibold rounded-full" style={{ background: '#E6F4EA', color: '#137333' }}>{badge}</span>}
      </div>
      <div className="flex gap-1 px-4 pb-2 items-end" style={{ height: 56 }}>
        {steps.map((s, i) => (
          <div key={i} className="flex-1 flex flex-col items-center">
            <div className="w-full rounded-sm" style={{ height: `${s.height}%`, background: s.color }} />
          </div>
        ))}
      </div>
      <div className="flex gap-1 px-4 pb-3">
        {steps.map((s, i) => (
          <div key={i} className="flex-1 text-center">
            <div className="text-[10px]" style={{ color: 'var(--txt-m)' }}>{s.label}</div>
            <div className="text-[9px]" style={{ color: 'var(--txt-f)' }}>{s.time}</div>
          </div>
        ))}
      </div>
      {total && (
        <div className="flex items-center justify-between px-4 py-3" style={{ borderTop: '1px solid var(--brd)' }}>
          <span className="text-[12px]" style={{ color: 'var(--txt-m)' }}>{total}</span>
        </div>
      )}
    </Card>
  )
}

/* ── SourceChips — "fornoyelsespark.no", "tripadvisor.no" etc ── */
export function SourceChips({ sources }: { sources: { letter: string; name: string }[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {sources.map((s, i) => (
        <span key={i} className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[12px]"
          style={{ border: '1px solid var(--brd)', color: 'var(--txt-s)' }}>
          <span className="w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold"
            style={{ background: 'var(--elevated)', color: 'var(--txt-m)' }}>{s.letter}</span>
          {s.name}
        </span>
      ))}
    </div>
  )
}

/* ── FollowUpChips — "Spør videre" chips ── */
export function FollowUpChips({ label, chips }: { label: string; chips: string[] }) {
  return (
    <div>
      <p className="text-[12px] mb-2" style={{ color: 'var(--txt-m)' }}>{label}</p>
      <div className="flex flex-wrap gap-2">
        {chips.map((c, i) => (
          <span key={i} className="rounded-full px-4 py-2 text-[13px] cursor-pointer"
            style={{ border: '1px solid var(--brd)', color: 'var(--txt)', background: 'var(--card)' }}>{c}</span>
        ))}
      </div>
    </div>
  )
}

/* ── ChatInput — bottom input bar ── */
export function ChatInput({ placeholder }: { placeholder: string }) {
  return (
    <div className="flex items-center gap-3 rounded-full px-5 py-3"
      style={{ background: 'var(--input)', border: '1px solid var(--brd)' }}>
      <span className="flex-1 text-[14px]" style={{ color: 'var(--txt-m)' }}>{placeholder}</span>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--txt-f)" strokeWidth="2"><path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"/><path d="M19 10v2a7 7 0 01-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/></svg>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--txt-f)" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
    </div>
  )
}

/* ── QuickFacts ── */
export function QuickFacts({ facts }: { facts: { label: string; value: string; href?: string }[] }) {
  return (
    <Card className="p-4">
      <div className="grid grid-cols-2 gap-x-6 gap-y-3">
        {facts.map((f, i) => (
          <div key={i}>
            <div className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: 'var(--txt-m)' }}>{f.label}</div>
            {f.href ? (
              <Link href={f.href} className="text-[13px] font-semibold hover:underline" style={{ color: 'var(--blue)' }}>{f.value}</Link>
            ) : (
              <div className="text-[13px] font-semibold" style={{ color: 'var(--txt)' }}>{f.value}</div>
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
    <section className="mt-8">
      <h2 className="text-[15px] font-bold mb-3" style={{ color: 'var(--txt)' }}>Ofte stilte spørsmål</h2>
      {items.map((item, i) => (
        <details key={i} className="group" style={{ borderTop: i === 0 ? '1px solid var(--brd)' : 'none', borderBottom: '1px solid var(--brd)' }}>
          <summary className="cursor-pointer py-3 text-[14px] font-semibold flex justify-between items-center" style={{ color: 'var(--txt)' }}>
            {item.question}
            <span className="text-lg transition-transform group-open:rotate-90" style={{ color: 'var(--txt-m)' }}>›</span>
          </summary>
          <div className="pb-3 text-[13px] leading-relaxed" style={{ color: 'var(--txt-s)' }}>{item.answer}</div>
        </details>
      ))}
    </section>
  )
}

/* ── Breadcrumbs ── */
export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav className="mb-4 text-[12px]" style={{ color: 'var(--txt-f)' }}>
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            {i > 0 && <span>/</span>}
            {item.href ? <Link href={item.href} className="hover:text-white transition-colors">{item.label}</Link>
              : <span style={{ color: 'var(--txt-m)' }}>{item.label}</span>}
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
    <div className="mt-6">
      <h3 className="text-[13px] font-bold mb-2" style={{ color: 'var(--txt)' }}>{title}</h3>
      <div className="flex flex-wrap gap-2">
        {links.map((l, i) => (
          <Link key={i} href={l.href} className="rounded-full px-3 py-1.5 text-[12px] transition-colors hover:text-white"
            style={{ border: '1px solid var(--brd)', color: 'var(--txt-s)' }}>{l.label}</Link>
        ))}
      </div>
    </div>
  )
}

/* ── GuideLink ── */
export function GuideLink({ title, intro, href }: { title: string; intro: string; href: string }) {
  return (
    <Card className="p-4">
      <Link href={href} className="text-[13px] font-bold hover:underline" style={{ color: 'var(--txt)' }}>{title}</Link>
      <p className="mt-1 text-[11px] line-clamp-2" style={{ color: 'var(--txt-m)' }}>{intro}</p>
      <Link href={href} className="mt-2 inline-block text-[12px] font-semibold" style={{ color: 'var(--blue)' }}>Les guiden →</Link>
    </Card>
  )
}

/* ── CityRow ── */
export function CityRow({ name, href, count }: { name: string; href: string; count?: number }) {
  return (
    <Link href={href} className="flex items-center justify-between py-3" style={{ borderBottom: '1px solid var(--brd)' }}>
      <span className="text-[14px] font-semibold" style={{ color: 'var(--txt)' }}>{name}</span>
      <div className="flex items-center gap-2">
        {count !== undefined && <span className="text-[12px]" style={{ color: 'var(--txt-m)' }}>{count} parker</span>}
        <span style={{ color: 'var(--txt-f)' }}>›</span>
      </div>
    </Link>
  )
}

/* ── Chip ── */
export function Chip({ label, href }: { label: string; href: string }) {
  return (
    <Link href={href} className="rounded-full px-4 py-2 text-[13px] transition-colors hover:text-white"
      style={{ border: '1px solid var(--brd)', color: 'var(--txt-s)', background: 'var(--card)' }}>{label}</Link>
  )
}
export function ChipRow({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-wrap gap-2">{children}</div>
}
