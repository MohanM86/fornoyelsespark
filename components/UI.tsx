import Link from 'next/link'

/* ───── Section ───── */
export function Section({
  title,
  children,
  id,
}: {
  title?: string
  children: React.ReactNode
  id?: string
}) {
  return (
    <section id={id} className="mt-12">
      {title && <h2 className="text-xl font-bold text-gray-900 mb-4">{title}</h2>}
      {children}
    </section>
  )
}

/* ───── ListingCard ───── */
export function ListingCard({
  name,
  href,
  description,
  city,
  category,
  featured,
}: {
  name: string
  href: string
  description: string
  city?: string
  category?: string
  featured?: boolean
}) {
  return (
    <article className={`rounded-lg border p-5 transition-colors hover:border-gray-300 ${featured ? 'border-brand-200 bg-brand-50/30' : 'border-gray-100 bg-white'}`}>
      {featured && (
        <span className="mb-2 inline-block rounded-full bg-brand-100 px-2.5 py-0.5 text-xs font-medium text-brand-800">
          Anbefalt
        </span>
      )}
      <h3 className="text-lg font-semibold text-gray-900">
        <Link href={href} className="hover:text-brand-700">
          {name}
        </Link>
      </h3>
      <div className="mt-1 flex flex-wrap gap-2 text-xs text-gray-500">
        {city && <span>{city}</span>}
        {city && category && <span>·</span>}
        {category && <span className="capitalize">{category.replace(/-/g, ' ')}</span>}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">{description}</p>
      <Link
        href={href}
        className="mt-3 inline-block text-sm font-medium text-brand-700 hover:text-brand-800"
      >
        Les mer →
      </Link>
    </article>
  )
}

/* ───── ListingList ───── */
export function ListingList({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-4 sm:grid-cols-2">{children}</div>
}

/* ───── FAQ ───── */
export function FAQ({ items }: { items: { question: string; answer: string }[] }) {
  if (!items.length) return null
  return (
    <section className="mt-12">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Ofte stilte spørsmål</h2>
      <div className="space-y-4">
        {items.map((item, i) => (
          <details key={i} className="group rounded-lg border border-gray-100 bg-white">
            <summary className="cursor-pointer px-5 py-4 text-sm font-medium text-gray-900 hover:text-brand-700">
              {item.question}
            </summary>
            <div className="px-5 pb-4 text-sm leading-relaxed text-gray-600">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}

/* ───── Breadcrumbs ───── */
export function Breadcrumbs({
  items,
}: {
  items: { label: string; href?: string }[]
}) {
  return (
    <nav aria-label="Brødsmuler" className="mb-6 text-xs text-gray-500">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            {i > 0 && <span>/</span>}
            {item.href ? (
              <Link href={item.href} className="hover:text-gray-900">
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-700">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

/* ───── RelatedLinks ───── */
export function RelatedLinks({
  title,
  links,
}: {
  title: string
  links: { label: string; href: string }[]
}) {
  if (!links.length) return null
  return (
    <div className="mt-8">
      <h3 className="text-base font-semibold text-gray-900 mb-3">{title}</h3>
      <ul className="flex flex-wrap gap-2">
        {links.map((link, i) => (
          <li key={i}>
            <Link
              href={link.href}
              className="inline-block rounded-full border border-gray-200 px-3 py-1.5 text-sm text-gray-700 transition-colors hover:border-brand-300 hover:text-brand-700"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

/* ───── CTABox ───── */
export function CTABox({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="mt-10 rounded-lg border border-gray-200 bg-gray-50 p-6 text-center">
      <h3 className="text-base font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
    </div>
  )
}
