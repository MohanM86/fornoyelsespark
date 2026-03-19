import Link from 'next/link'

/* ── Card: white bg, thin gray border, 12px radius ── */
function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={className} style={{ background: 'var(--card)', border: '1px solid var(--brd)', borderRadius: 12 }}>{children}</div>
}

/* ── Section ── */
export function Section({ title, children, id }: { title?: string; children: React.ReactNode; id?: string }) {
  return <section id={id} className="mt-8">{title && <h2 className="text-[16px] font-bold mb-3" style={{ color: 'var(--ink)' }}>{title}</h2>}{children}</section>
}

/* ── CompareCard: name + badge, subtitle, metric rows, color bar ── */
export function CompareCard({ name, href, subtitle, badge, badgeColor, metrics, barColor, barPct }: {
  name: string; href: string; subtitle?: string; badge?: string; badgeColor?: 'blue'|'red'|'green'|'yellow'
  metrics?: { label: string; value: string }[]; barColor?: string; barPct?: number
}) {
  const bc: Record<string, { bg: string; fg: string }> = {
    blue: { bg: 'var(--blue-bg)', fg: 'var(--blue-fg)' }, red: { bg: 'var(--red-bg)', fg: 'var(--red-fg)' },
    green: { bg: 'var(--green-bg)', fg: 'var(--green-fg)' }, yellow: { bg: 'var(--yellow-bg)', fg: 'var(--yellow-fg)' },
  }
  const b = badgeColor ? bc[badgeColor] : null
  return (
    <Card className="p-4">
      <div className="flex items-start justify-between gap-2 mb-1">
        <Link href={href} className="text-[15px] font-bold hover:underline" style={{ color: 'var(--ink)' }}>{name}</Link>
        {badge && b && <span className="shrink-0 px-2.5 py-0.5 text-[11px] font-semibold rounded-full whitespace-nowrap" style={{ background: b.bg, color: b.fg }}>{badge}</span>}
      </div>
      {subtitle && <p className="text-[12px] mb-3" style={{ color: 'var(--ink3)' }}>{subtitle}</p>}
      {metrics && <div className="space-y-1">{metrics.map((m, i) => <div key={i} className="flex justify-between text-[13px]"><span style={{ color: 'var(--ink2)' }}>{m.label}</span><span className="font-semibold" style={{ color: 'var(--ink)' }}>{m.value}</span></div>)}</div>}
      {barPct !== undefined && <div className="mt-3 h-[5px] rounded-full overflow-hidden" style={{ background: 'var(--brd)' }}><div className="h-full rounded-full" style={{ width: `${barPct}%`, background: barColor || 'var(--blue)' }} /></div>}
    </Card>
  )
}

/* ── ParkCard: for category/city listing pages ── */
export function ParkCard({ name, href, description, city, county, category, featured, audience }: {
  name: string; href: string; description: string; city?: string; county?: string; category?: string; featured?: boolean; audience?: string[]
}) {
  return (
    <Card className="p-4">
      <div className="flex items-start justify-between gap-2">
        <Link href={href} className="text-[15px] font-bold hover:underline" style={{ color: 'var(--ink)' }}>{name}</Link>
        {featured && <span className="shrink-0 px-2 py-0.5 text-[10px] font-semibold rounded-full" style={{ background: 'var(--green-bg)', color: 'var(--green-fg)' }}>Anbefalt</span>}
      </div>
      <div className="mt-1 flex flex-wrap gap-x-2 text-[12px]" style={{ color: 'var(--ink3)' }}>
        {city && <span>{city}{county ? `, ${county}` : ''}</span>}
        {category && <><span>·</span><span className="capitalize">{category.replace(/-/g, ' ')}</span></>}
      </div>
      <p className="mt-2 text-[13px] leading-relaxed line-clamp-2" style={{ color: 'var(--ink2)' }}>{description}</p>
      {audience && audience.length > 0 && <div className="mt-2.5 flex flex-wrap gap-1.5">{audience.slice(0, 3).map(a => <span key={a} className="rounded-full px-2.5 py-0.5 text-[11px]" style={{ border: '1px solid var(--brd)', color: 'var(--ink3)' }}>{a}</span>)}</div>}
      <Link href={href} className="mt-2.5 inline-block text-[13px] font-semibold" style={{ color: 'var(--blue)' }}>Les mer →</Link>
    </Card>
  )
}

export function ParkGrid({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-3 sm:grid-cols-2">{children}</div>
}

/* ── ActionBtn: "Planlegg dagstur" etc ── */
export function ActionBtn({ label, primary, icon }: { label: string; primary?: boolean; icon?: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-[13px] font-semibold cursor-pointer" style={{
      background: primary ? 'var(--blue)' : 'var(--card)', color: primary ? '#fff' : 'var(--ink)',
      border: primary ? 'none' : '1px solid var(--brd)',
    }}>{icon}{label}</span>
  )
}

/* ── InsightPanel: "Tilpasset for dere" ── */
export function InsightPanel({ title, items }: { title: string; items: { icon: React.ReactNode; heading: string; detail: string; extra?: string }[] }) {
  return (
    <Card className="p-5">
      <div className="flex items-center gap-2.5 mb-4">
        <span className="w-7 h-7 rounded-full flex items-center justify-center text-[13px] font-bold" style={{ background: 'var(--yellow)', color: '#fff' }}>✓</span>
        <span className="text-[15px] font-bold" style={{ color: 'var(--ink)' }}>{title}</span>
      </div>
      <div className="space-y-4">
        {items.map((it, i) => (
          <div key={i} className="flex items-start gap-3">
            <span className="mt-0.5 text-[14px]" style={{ color: 'var(--ink3)' }}>{it.icon}</span>
            <div className="flex-1 min-w-0">
              <p className="text-[14px] font-semibold" style={{ color: 'var(--ink)' }}>{it.heading}</p>
              <p className="text-[12px]" style={{ color: 'var(--ink3)' }}>{it.detail}</p>
            </div>
            {it.extra && <span className="shrink-0 text-[12px]" style={{ color: 'var(--ink3)' }}>{it.extra}</span>}
          </div>
        ))}
      </div>
    </Card>
  )
}

/* ── DayPlan: timeline with color bars ── */
export function DayPlan({ title, badge, steps, total }: {
  title: string; badge?: string; steps: { label: string; time: string; color: string; pct: number }[]; total?: string
}) {
  return (
    <Card className="overflow-hidden">
      <div className="flex items-center justify-between p-4 pb-3">
        <span className="text-[15px] font-bold" style={{ color: 'var(--ink)' }}>{title}</span>
        {badge && <span className="px-2.5 py-0.5 text-[10px] font-semibold rounded-full" style={{ background: 'var(--green-bg)', color: 'var(--green-fg)' }}>{badge}</span>}
      </div>
      <div className="flex gap-1 px-4 items-end" style={{ height: 36 }}>
        {steps.map((s, i) => <div key={i} className="flex-1"><div className="w-full rounded-sm" style={{ height: `${s.pct}%`, background: s.color, minHeight: 4 }} /></div>)}
      </div>
      <div className="flex gap-1 px-4 pt-1.5 pb-3">
        {steps.map((s, i) => <div key={i} className="flex-1 text-center"><div className="text-[10px]" style={{ color: 'var(--ink3)' }}>{s.label}</div><div className="text-[9px]" style={{ color: 'var(--ink4)' }}>{s.time}</div></div>)}
      </div>
      {total && <div className="px-4 py-3 text-[12px]" style={{ borderTop: '1px solid var(--brd)', color: 'var(--ink2)' }}>{total}</div>}
    </Card>
  )
}

/* ── SourceChips ── */
export function SourceChips({ sources }: { sources: { letter: string; name: string }[] }) {
  return <div className="flex flex-wrap gap-2">{sources.map((s, i) => <span key={i} className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[12px]" style={{ border: '1px solid var(--brd)', color: 'var(--ink2)' }}><span className="w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold" style={{ background: 'var(--brd)', color: 'var(--ink3)' }}>{s.letter}</span>{s.name}</span>)}</div>
}

/* ── FollowUpChips: "Spør videre" – NOW WITH LINKS ── */
export function FollowUpChips({ label, chips }: { label: string; chips: { text: string; href: string }[] }) {
  return (
    <div>
      <p className="text-[12px] mb-2" style={{ color: 'var(--ink3)' }}>{label}</p>
      <div className="flex flex-wrap gap-2">
        {chips.map((c, i) => (
          <Link key={i} href={c.href} className="rounded-full px-4 py-2 text-[13px] hover:underline" style={{ border: '1px solid var(--brd)', color: 'var(--ink)', background: 'var(--card)' }}>
            {c.text}
          </Link>
        ))}
      </div>
    </div>
  )
}

/* ── ChatInput (now uses real search) ── */
export { InlineSearch as ChatInput } from '@/components/Search'

/* ── QuickFacts ── */
export function QuickFacts({ facts }: { facts: { label: string; value: string; href?: string }[] }) {
  return <Card className="p-4"><div className="grid grid-cols-2 gap-x-6 gap-y-3">{facts.map((f, i) => <div key={i}><div className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: 'var(--ink3)' }}>{f.label}</div>{f.href ? <Link href={f.href} className="text-[13px] font-semibold hover:underline" style={{ color: 'var(--blue)' }}>{f.value}</Link> : <div className="text-[13px] font-semibold" style={{ color: 'var(--ink)' }}>{f.value}</div>}</div>)}</div></Card>
}

/* ── FAQ ── */
export function FAQ({ items }: { items: { question: string; answer: string }[] }) {
  if (!items.length) return null
  return (
    <section className="mt-8">
      <h2 className="text-[16px] font-bold mb-3" style={{ color: 'var(--ink)' }}>Ofte stilte spørsmål</h2>
      {items.map((it, i) => (
        <details key={i} className="group" style={{ borderTop: i === 0 ? '1px solid var(--brd)' : 'none', borderBottom: '1px solid var(--brd)' }}>
          <summary className="cursor-pointer py-3.5 text-[14px] font-semibold flex justify-between items-center" style={{ color: 'var(--ink)' }}>
            {it.question}<span className="text-lg transition-transform group-open:rotate-90" style={{ color: 'var(--ink3)' }}>›</span>
          </summary>
          <div className="pb-3 text-[13px] leading-relaxed" style={{ color: 'var(--ink2)' }}>{it.answer}</div>
        </details>
      ))}
    </section>
  )
}

/* ── Breadcrumbs ── */
export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return <nav className="mb-4 text-[12px]" style={{ color: 'var(--ink4)' }}><ol className="flex flex-wrap items-center gap-1">{items.map((it, i) => <li key={i} className="flex items-center gap-1">{i > 0 && <span>/</span>}{it.href ? <Link href={it.href} className="hover:underline" style={{ color: 'var(--ink3)' }}>{it.label}</Link> : <span style={{ color: 'var(--ink2)' }}>{it.label}</span>}</li>)}</ol></nav>
}

/* ── RelatedLinks ── */
export function RelatedLinks({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  if (!links.length) return null
  return <div className="mt-6"><h3 className="text-[13px] font-bold mb-2" style={{ color: 'var(--ink)' }}>{title}</h3><div className="flex flex-wrap gap-2">{links.map((l, i) => <Link key={i} href={l.href} className="rounded-full px-3 py-1.5 text-[12px] hover:underline" style={{ border: '1px solid var(--brd)', color: 'var(--ink2)' }}>{l.label}</Link>)}</div></div>
}

/* ── GuideLink ── */
export function GuideLink({ title, intro, href }: { title: string; intro: string; href: string }) {
  return <Card className="p-4"><Link href={href} className="text-[13px] font-bold hover:underline" style={{ color: 'var(--ink)' }}>{title}</Link><p className="mt-1 text-[11px] line-clamp-2" style={{ color: 'var(--ink3)' }}>{intro}</p><Link href={href} className="mt-2 inline-block text-[12px] font-semibold" style={{ color: 'var(--blue)' }}>Les guiden →</Link></Card>
}

/* ── CityRow ── */
export function CityRow({ name, href, count }: { name: string; href: string; count?: number }) {
  return <Link href={href} className="flex items-center justify-between py-3" style={{ borderBottom: '1px solid var(--brd)' }}><span className="text-[14px] font-semibold" style={{ color: 'var(--ink)' }}>{name}</span><div className="flex items-center gap-2">{count !== undefined && <span className="text-[12px]" style={{ color: 'var(--ink3)' }}>{count} parker</span>}<span style={{ color: 'var(--ink4)' }}>›</span></div></Link>
}

/* ── Chip ── */
export function Chip({ label, href }: { label: string; href: string }) {
  return <Link href={href} className="rounded-full px-4 py-2 text-[13px]" style={{ border: '1px solid var(--brd)', color: 'var(--ink2)', background: 'var(--card)' }}>{label}</Link>
}
export function ChipRow({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-wrap gap-2">{children}</div>
}
