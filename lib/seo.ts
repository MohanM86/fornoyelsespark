import { Metadata } from 'next'

const SITE_NAME = 'Fornøyelsespark.no'
const SITE_URL = 'https://fornoyelsespark.no'

export function createMetadata(opts: {
  title: string
  description: string
  path?: string
  noIndex?: boolean
}): Metadata {
  const url = opts.path ? `${SITE_URL}${opts.path}` : SITE_URL
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      siteName: SITE_NAME,
      locale: 'nb_NO',
      type: 'website',
    },
    robots: opts.noIndex ? { index: false, follow: true } : undefined,
  }
}

export function createParkJsonLd(park: {
  name: string
  description: string
  address?: string
  slug: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AmusementPark',
    name: park.name,
    description: park.description,
    address: park.address,
    url: `${SITE_URL}/park/${park.slug}`,
  }
}

export function createFaqJsonLd(faq: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export function createBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  }
}
