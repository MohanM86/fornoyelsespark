import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Fornøyelsespark.no – Norges guide til fornøyelsesparker og familieparker',
    template: '%s | Fornøyelsespark.no',
  },
  description:
    'Norges mest komplette guide til fornøyelsesparker, familieparker, badeland og aktivitetsparker. Finn den beste parken for din familie.',
  metadataBase: new URL('https://fornoyelsespark.no'),
  alternates: { canonical: '/' },
  openGraph: {
    siteName: 'Fornøyelsespark.no',
    locale: 'nb_NO',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nb">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <Header />
        <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
