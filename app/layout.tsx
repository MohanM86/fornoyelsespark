import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { createWebSiteJsonLd } from '@/lib/seo'
import './globals.css'

export const metadata: Metadata = {
  title: { default: 'Fornøyelsespark.no – Norges guide til fornøyelsesparker og familieparker', template: '%s | Fornøyelsespark.no' },
  description: 'Norges mest komplette guide til fornøyelsesparker, familieparker, badeland og aktivitetsparker. Finn den beste parken for din familie.',
  metadataBase: new URL('https://fornøyelsespark.no'),
  alternates: {
    canonical: '/',
    languages: { 'nb-NO': '/' },
  },
  icons: { icon: '/favicon.svg' },
  openGraph: {
    siteName: 'Fornøyelsespark.no',
    locale: 'nb_NO',
    type: 'website',
    title: 'Fornøyelsespark.no – Norges guide til fornøyelsesparker',
    description: 'Finn de beste fornøyelsesparkene, famileparkene og badelandene i Norge.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Fornøyelsespark.no – Norges guide til fornøyelsesparker' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fornøyelsespark.no – Norges guide til fornøyelsesparker',
    description: 'Finn de beste fornøyelsesparkene, famileparkene og badelandene i Norge.',
    images: ['/og-image.png'],
  },
  other: {
    'content-language': 'nb',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nb">
      <head>
        <link rel="alternate" hrefLang="nb-NO" href="https://fornøyelsespark.no" />
        <link rel="alternate" hrefLang="x-default" href="https://fornøyelsespark.no" />
      </head>
      <body className="min-h-screen antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(createWebSiteJsonLd()) }} />
        <Header />
        <main className="mx-auto max-w-3xl px-4 py-6">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
